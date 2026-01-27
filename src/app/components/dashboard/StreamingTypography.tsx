import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';

export const StreamingTypography = ({ 
    text, 
    speed = 25, 
    bold = false, 
    onComplete, 
    className,
    renderContent 
}: { 
    text: string, 
    speed?: number, 
    bold?: boolean, 
    onComplete?: () => void,
    className?: string,
    renderContent?: (text: string) => React.ReactNode
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let index = 0;
        setDisplayedText("");
        setIsComplete(false);
        
        const timer = setInterval(() => {
            if (index < text.length) {
                const nextIndex = index + 1;
                setDisplayedText(text.slice(0, nextIndex));
                index = nextIndex;
            } else {
                clearInterval(timer);
                setIsComplete(true);
                if (onCompleteRef.current) onCompleteRef.current();
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <span className={clsx(className, "relative inline-block")}>
            {renderContent ? renderContent(displayedText) : (bold ? <strong>{displayedText}</strong> : displayedText)}
            <motion.span 
                initial={{ opacity: 1 }}
                animate={isComplete ? { opacity: 0 } : { opacity: [1, 0, 1] }}
                transition={isComplete ? { duration: 0.5 } : { repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-[#305EFF] ml-[1px] align-middle"
            />
        </span>
    );
};
