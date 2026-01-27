import { useState, useCallback } from 'react';

export type AgenticStreamPhase = 'STREAMING_HEADER' | 'RENDERING_TABLE' | 'SHOWING_INSIGHT' | 'IDLE';

export const useAgenticStream = () => {
    const [phase, setPhase] = useState<AgenticStreamPhase>('STREAMING_HEADER');

    const nextPhase = useCallback(() => {
        setPhase((current) => {
            switch (current) {
                case 'STREAMING_HEADER': return 'RENDERING_TABLE';
                case 'RENDERING_TABLE': return 'SHOWING_INSIGHT';
                case 'SHOWING_INSIGHT': return 'IDLE';
                default: return 'IDLE';
            }
        });
    }, []);

    const resetStream = useCallback(() => {
        setPhase('STREAMING_HEADER');
    }, []);

    return {
        phase,
        nextPhase,
        resetStream,
        isStreamingHeader: phase === 'STREAMING_HEADER',
        // Table should be visible from RENDERING_TABLE onwards
        showTable: phase === 'RENDERING_TABLE' || phase === 'SHOWING_INSIGHT' || phase === 'IDLE',
        // Insight should be visible from SHOWING_INSIGHT onwards
        showInsight: phase === 'SHOWING_INSIGHT' || phase === 'IDLE',
        // Footer/Actions visible when IDLE (or maybe with Insight?)
        showActions: phase === 'IDLE' // "Layer 4 & 5 ... Mounts after the Insight settles"
    };
};
