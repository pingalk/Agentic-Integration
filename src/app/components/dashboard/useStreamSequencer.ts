import { useState, useEffect, useCallback } from 'react';

interface StreamSequencerProps {
    hasDataAsset: boolean;
    hasInsight: boolean;
    hasSuggestions: boolean;
    thinkingDuration?: number;  // 0 = skip thinking, 2000 = 2s, 7000 = 7s
}

export const useStreamSequencer = ({
    hasDataAsset,
    hasInsight,
    hasSuggestions,
    thinkingDuration = 0
}: StreamSequencerProps) => {
    // Phase 0: Thinking (if thinkingDuration > 0)
    // Phase 1: Narrative
    // Phase 2: Data Asset
    // Phase 3: Insight
    // Phase 4: Supporting Actions
    // Phase 5: Suggestions
    const [phase, setPhase] = useState(thinkingDuration > 0 ? 0 : 1);

    // Phase 0 -> Phase 1 transition (thinking -> narrative)
    useEffect(() => {
        if (phase === 0 && thinkingDuration > 0) {
            const timer = setTimeout(() => setPhase(1), thinkingDuration);
            return () => clearTimeout(timer);
        }
    }, [phase, thinkingDuration]);

    const onNarrativeComplete = useCallback(() => {
        // Transition: When Subtext finishes -> Wait 1.3s -> Trigger Layer 2
        setTimeout(() => {
            setPhase(2);
        }, 1300);
    }, []);

    useEffect(() => {
        if (phase === 2) {
            // Layer 2: Data Asset
            // Transition: Wait 1.3s (Cognitive Pause) -> Trigger Layer 3
            if (hasDataAsset) {
                const timer = setTimeout(() => {
                    setPhase(3);
                }, 1300 + 500); // Adding 500ms buffer for animation to complete
                return () => clearTimeout(timer);
            } else {
                // Skip immediately if no data asset
                setPhase(3);
            }
        }
    }, [phase, hasDataAsset]);

    useEffect(() => {
        if (phase === 3) {
            // Layer 3: Insight
            // Transition: Wait 400ms -> Trigger Layer 4
            if (hasInsight) {
                const timer = setTimeout(() => {
                    setPhase(4);
                }, 400 + 400); // Adding buffer for animation
                return () => clearTimeout(timer);
            } else {
                setPhase(4);
            }
        }
    }, [phase, hasInsight]);

    useEffect(() => {
        if (phase === 4) {
             // Layer 4: Actions -> Layer 5: Suggestions
             // Can happen almost immediately or with small delay
             const timer = setTimeout(() => {
                 setPhase(5);
             }, 200);
             return () => clearTimeout(timer);
        }
    }, [phase]);

    return { phase, onNarrativeComplete };
};
