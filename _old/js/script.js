/**
 * Logique Frontend - Site Hypnose Ericksonienne
 * Optimisée pour l'immersion et l'interactivité
 */

document.addEventListener("DOMContentLoaded", () => {
    initScrollReveal();
    initMobileMenu();
    initAnchorFocus();
    initContactForm();
    initScrollToTop();
});

/**
 * Gestion du menu mobile (Burger)
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');
    const navLinks = primaryNavigation.querySelectorAll('a');

    if (!mobileMenuToggle || !primaryNavigation) return;

    function toggleMenu() {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        primaryNavigation.classList.toggle('active');
        
        // Empêcher le scroll du body quand le menu est ouvert
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    }

    mobileMenuToggle.addEventListener('click', toggleMenu);

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNavigation.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fermer au clic sur l'overlay
    const overlay = document.getElementById('mobile-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (primaryNavigation.classList.contains('active')) {
                toggleMenu();
            }
        });
    }
}

/**
 * Gestion du focus pour les liens d'ancrage (A11Y - Navigation clavier)
 * Permet aux utilisateurs de lecteurs d'écran de se retrouver correctement
 * dans la section cible après activation d'un lien de navigation.
 */
function initAnchorFocus() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            // Légère temporisation pour laisser le scroll smooth s'effectuer
            setTimeout(() => {
                // S'assurer que la section est focusable
                if (!targetEl.hasAttribute('tabindex')) {
                    targetEl.setAttribute('tabindex', '-1');
                }
                targetEl.focus({ preventScroll: true });
            }, 600);
        });
    });
}

/**
 * Apparition au scroll & Révélation hypnotique
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (!entry.target.classList.contains('hypno-title')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll, .hypno-title").forEach((el) => {
        observer.observe(el);
    });
}



/**
 * Gestion du formulaire de contact avec validation stricte
 */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");
    const SCRIPT_URL = ""; 

    if (!form) return;

    // Messages d'erreur par champ
    const errorMessages = {
        lastname: "Veuillez saisir votre nom.",
        firstname: "Veuillez saisir votre prénom.",
        email: {
            valueMissing: "L'adresse email est requise.",
            patternMismatch: "Veuillez saisir une adresse email valide (ex: nom@domaine.com)."
        },
        phone: "Le format du numéro de téléphone est invalide.",
        subject: "Veuillez sélectionner un motif.",
        message: "Veuillez détailler votre message (10 caractères minimum).",
        "rgpd-consent": "Le consentement à la politique RGPD est obligatoire."
    };

    // Désactiver la validation HTML5 par défaut (bulles du navigateur)
    form.setAttribute('novalidate', true);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        let isValid = validateForm();
        
        if (!isValid) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = "Envoi en cours...";
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            if (!SCRIPT_URL) {
                await new Promise((resolve) => setTimeout(resolve, 1500));
                showSuccessFeedback(submitBtn);
                form.reset();
            } else {
                const response = await fetch(SCRIPT_URL, {
                    method: "POST",
                    body: JSON.stringify(data),
                    mode: 'no-cors'
                });
                showSuccessFeedback(submitBtn);
                form.reset();
            }
        } catch (error) {
            showFeedback("⚠️ Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.", "error");
        } finally {
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('success-anim');
            }, 3500);
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            const errorElement = document.getElementById(`${input.id}-error`);
            
            // Remise à zéro
            input.classList.remove('input-error');
            input.classList.remove('shake');
            if (errorElement) errorElement.innerText = '';
            
            // Spécifique textarea: minlength=10 manuellement
            if (input.id === 'message' && input.value.trim().length < 10) {
                 input.setCustomValidity("trop_court");
            } else {
                 input.setCustomValidity("");
            }

            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add('input-error');
                
                // Petite animation de tremblement pour prévenir l'utilisateur (sauf prélérence utilisateur OS)
                setTimeout(() => input.classList.add('shake'), 10);
                
                if (errorElement) {
                    if (input.id === 'email') {
                        errorElement.innerText = input.validity.valueMissing ? errorMessages.email.valueMissing : errorMessages.email.patternMismatch;
                    } else if (input.id === 'rgpd-consent') {
                        errorElement.innerText = errorMessages["rgpd-consent"];
                    } else {
                        errorElement.innerText = errorMessages[input.id] || "Ce champ est requis.";
                    }
                }
            }
        });
        
        // Focus immédiat pour l'A11y sur le premier champ invalide
        if (!isValid) {
            const firstError = form.querySelector('.input-error');
            if (firstError) firstError.focus();
        }

        return isValid;
    }

    // Retirer l'état d'erreur en temps réel au fur et à mesure que l'internaute tape
    form.addEventListener('input', (e) => {
        if (e.target.classList.contains('input-error')) {
            e.target.classList.remove('input-error', 'shake');
            const errorElement = document.getElementById(`${e.target.id}-error`);
            if (errorElement) errorElement.innerText = '';
        }
    });

    // ─── Modale de remerciement ────────────────────────────────────
    const modal       = document.getElementById('thank-you-modal');
    const modalBox    = modal ? modal.querySelector('.modal-box') : null;
    const modalClose  = document.getElementById('modal-close');
    const modalCta    = document.getElementById('modal-cta');

    /** Ouvre la modale et gère le focus */
    function openModal() {
        if (!modal) return;
        modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';

        // Focus sur le bouton de fermeture dès l'ouverture (A11Y)
        requestAnimationFrame(() => {
            if (modalClose) modalClose.focus();
        });
    }

    /** Ferme la modale et rend le focus au bouton submit */
    function closeModal(returnFocusEl) {
        if (!modal) return;
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        if (returnFocusEl) returnFocusEl.focus();
    }

    if (modal && modalClose && modalCta) {
        // Fermeture via bouton × et bouton "Fermer"
        modalClose.addEventListener('click', () => {
            closeModal(form.querySelector('button[type="submit"]'));
        });
        modalCta.addEventListener('click', () => {
            closeModal(form.querySelector('button[type="submit"]'));
        });

        // Fermeture au clic sur l'overlay (hors modal-box)
        modal.addEventListener('click', (e) => {
            if (!modalBox.contains(e.target)) {
                closeModal(form.querySelector('button[type="submit"]'));
            }
        });

        // Fermeture via Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
                closeModal(form.querySelector('button[type="submit"]'));
            }
        });

        // Focus-trap : Tab et Shift+Tab circulent dans la modale
        modal.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab' || modal.hasAttribute('hidden')) return;
            const focusable = Array.from(
                modalBox.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            ).filter(el => !el.disabled);
            if (!focusable.length) return;
            const first = focusable[0];
            const last  = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });
    }

    function showSuccessFeedback(btn) {
        btn.innerText = "✓ Message envoyé !";
        btn.classList.add('success-anim');
        btn.disabled = false;
        openModal();
    }

    function showFeedback(message, type) {
        if (!feedback) return;
        feedback.innerText = message;
        feedback.className = `form-feedback ${type}`;
        feedback.classList.remove("hidden");
        feedback.setAttribute('role', 'alert');
        setTimeout(() => feedback.classList.add("hidden"), 6000);
    }
}


/**
 * Bouton de retour en haut (Apparition à 70% du scroll)
 * Utilisation de l'API passive pour ne pas pénaliser le rendu (CWV)
 */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById("scroll-top");
    if (!scrollTopBtn) return;

    let isTicking = false;

    window.addEventListener("scroll", () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                checkScrollPosition();
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });

    function checkScrollPosition() {
        // Hauteur totale de la page défilable
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        // Position actuelle du scroll
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        // Calcul du pourcentage (70%)
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        if (scrollPercentage > 70) {
            scrollTopBtn.classList.add("show");
            // Rendre le bouton focusable par le clavier uniquement quand il est visible
            scrollTopBtn.removeAttribute('tabindex');
        } else {
            scrollTopBtn.classList.remove("show");
            // Retirer du flux de tabulation quand caché
            scrollTopBtn.setAttribute('tabindex', '-1');
        }
    }

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    // Initialisation état par défaut
    scrollTopBtn.setAttribute('tabindex', '-1');
}

/* ========================================== */
/* INDUSTRIALISATION JS (SHIELD PRO)          */
/* ========================================== */

// Custom Logger
const log = {
    dev: (...args) => {
        if (window.location.hostname === 'localhost' || window.location.search.includes('debug=true')) {
            console.log('[DEV]', ...args);
        }
    },
    error: (...args) => console.error('[ERROR]', ...args)
};

// Security - Advanced Form Validation (Vanilla 'Zod')
function validateFormSecurity(formData) {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const xssRegex = /<[^>]*>?/gm; // Basic XSS check

    const email = formData.get('email');
    if (!emailRegex.test(email)) errors.email = 'Format email invalide.';

    const phone = formData.get('phone');
    if (phone && !phoneRegex.test(phone)) errors.phone = 'Format t�l�phone invalide.';

    const message = formData.get('message');
    if (xssRegex.test(message)) errors.message = 'Caract�res non autoris�s d�tect�s.';
    
    log.dev('Validation errors:', errors);
    return errors;
}

// Override contact form handler if it exists
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const formData = new FormData(form);
            const errors = validateFormSecurity(formData);
            if (Object.keys(errors).length > 0) {
                e.preventDefault();
                e.stopImmediatePropagation();
                // Mettre � jour l'UI avec les erreurs
                for (const [field, error] of Object.entries(errors)) {
                    const errorSpan = document.getElementById(field + '-error');
                    if (errorSpan) errorSpan.textContent = error;
                }
                log.dev('Formulaire bloqu� par la validation de s�curit�.');
            } else {
                log.dev('Formulaire valide, pr�t pour envoi.');
            }
        });
    }
});
