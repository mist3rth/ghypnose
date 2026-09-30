import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import React, { useRef } from "react";

interface LinearRevealProps {
    Text: string;
    className?: string;
    colorClass?: string;
    delay?: number;
    as?: keyof React.JSX.IntrinsicElements;
    style?: React.CSSProperties;
}

export default function LinearReveal({
    Text,
    className = "",
    colorClass = "",
    delay = 0,
    as: Tag = "div",
    style,
}: LinearRevealProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -10% 0px",
    });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: delay,
            },
        },
    };

    const child: Variants = {
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

    return (
        <MotionTag
            ref={ref as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className={className}
            style={style}
        >
            {Text.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={child}
                            className={`inline-block ${colorClass}`}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </MotionTag>
    );
}
