import { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  badge?: string;
}

interface CustomSelectProps {
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}

export function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Sélectionnez une option...',
  required = false
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  const selectedOption = options.find(opt => opt.value === value);

  // Fermeture lors du clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Gestion de la navigation au clavier (A11Y WCAG AA)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setActiveIndex(options.findIndex(opt => opt.value === value) || 0);
      } else {
        setActiveIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setActiveIndex(options.length - 1);
      } else {
        setActiveIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isOpen && activeIndex >= 0 && activeIndex < options.length) {
        onChange(options[activeIndex].value);
        setIsOpen(false);
        triggerRef.current?.focus();
      } else {
        setIsOpen(prev => !prev);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="relative w-full" ref={containerRef} onKeyDown={handleKeyDown}>
      {/* Input hidden pour l'accessibilité formulaire standard et validation */}
      <input 
        type="hidden" 
        name={name} 
        value={value} 
        required={required} 
      />

      {/* Bouton déclencheur custom stylisé */}
      <button
        ref={triggerRef}
        type="button"
        id={selectId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={selectId}
        onClick={() => setIsOpen(prev => !prev)}
        className={`w-full bg-white/5 border rounded-2xl px-5 py-4 text-left flex items-center justify-between cursor-pointer transition-all duration-300 backdrop-blur-[16px] outline-none ${
          isOpen
            ? 'border-accent-primary shadow-[0_0_25px_rgba(212,175,55,0.25)] bg-white/10 ring-1 ring-accent-primary/50'
            : 'border-white/15 hover:border-accent-primary/40 focus:border-accent-primary focus:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
        }`}
      >
        <span className={`text-base truncate ${!selectedOption ? 'text-white/40 font-normal' : 'text-white font-medium'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center gap-2 pl-3">
          <ChevronDown 
            className={`w-5 h-5 text-accent-primary transition-transform duration-300 shrink-0 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </div>
      </button>

      {/* Menu déroulant Popover stylisé */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute z-50 top-full left-0 right-0 mt-2 p-1.5 sm:p-2 bg-[#0c1322]/98 backdrop-blur-[24px] border border-accent-primary/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] max-h-[290px] sm:max-h-[340px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-accent-primary/30"
          >
            <ul
              ref={listboxRef}
              role="listbox"
              aria-label={placeholder}
              tabIndex={-1}
              className="m-0 p-0 list-none flex flex-col gap-1"
            >
              {options.map((opt, idx) => {
                const isSelected = opt.value === value;
                const isItemActive = idx === activeIndex;

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-150 select-none ${
                      isSelected
                        ? 'bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 text-accent-primary font-semibold border border-accent-primary/30 shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                        : isItemActive
                        ? 'bg-white/10 text-white translate-x-1'
                        : 'text-text-main hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-[0.95rem] tracking-wide">{opt.label}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-accent-primary shrink-0 animate-in fade-in zoom-in-75 duration-200" />
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
