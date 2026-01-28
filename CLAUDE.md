# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Figma design-to-code prototype for "Ray" - an AI-powered fintech dashboard for Razorpay. It demonstrates multiple user personas (Maya, Arjun, Sarah), AI chat interfaces, and complex multi-step form wizards.

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + Radix UI + shadcn/ui + Motion (Framer Motion)

## Build Commands

```bash
npm install    # Install dependencies
npm run dev    # Start Vite dev server
npm run build  # Production build
```

No lint or test commands are configured.

## Workflow

**Commit after every change.** Each modification should be committed immediately to preserve progress and maintain a granular history.

## Architecture

### Directory Structure

- `src/app/components/dashboard/` - Main application components (Dashboard, Header, Sidebar, Ray* components)
- `src/app/components/ui/` - shadcn/ui primitive components (50+ reusable UI elements)
- `src/imports/` - Figma-exported components (243 files) - treat as generated, avoid direct edits
- `src/context/` - React Context providers (DemoContext for persona state)
- `src/data/` - Configuration data (demoConfig.ts defines the three personas)
- `src/styles/` - Global styles and theme variables

### State Management

The app uses a layered context approach:
1. **DemoContext** (`src/context/DemoContext.tsx`) - Global persona selection
2. **StoreContext** (`src/app/components/dashboard/StoreContext.tsx`) - Flow state for payment/subscription wizards
3. **FormProvider** (`src/app/components/dashboard/FormStore.tsx`) - Form-specific state and step tracking

### Key Custom Hooks

- `useAgenticStream.ts` - Manages AI streaming phase state
- `useDemoScript.tsx` - Orchestrates demo flow sequences
- `useStreamSequencer.ts` - Controls timing of streamed responses
- `useChatInterceptor.ts` - Intercepts and handles chat interactions
- `useSubscriptionForm.ts` - Subscription wizard logic

### Application Flow

```
App.tsx
├── Login.tsx (persona selector: Maya/Arjun/Sarah)
└── Dashboard.tsx
    ├── RayDashboard (AI chat view - "view B")
    ├── Home view (traditional dashboard - "view A")
    ├── Transactions view
    └── Transaction Details view
```

### Figma Integration

The `vite.config.ts` includes a custom plugin for `figma:asset/` virtual module imports. The `ImageWithFallback` component handles missing Figma assets gracefully.

### Styling Conventions

- Tailwind CSS v4 utility classes as primary styling approach
- CSS custom properties for theming (`src/styles/theme.css`)
- Class Variance Authority (CVA) for component variants
- Motion.dev for animations

## Key Patterns

- **Persona-Driven UI:** Three personas (Maya, Arjun, Sarah) have different themes and contexts defined in `src/data/demoConfig.ts`
- **View Variants:** Multiple UI variants (A, B, DOUBLE_DEBIT) controlled via state for A/B comparison
- **Compound Components:** Complex forms like PaymentLinkSteps and SubscriptionSteps use accordion-based step navigation
- **Stream Simulation:** AI responses are simulated with timing/sequencing hooks for demo purposes

## Component Separation

Maintain the distinction between:
- **`/app/components/`** - Editable application components
- **`/imports/`** - Figma-generated components (avoid direct modification)

## Ray Primary Response Framework

This section documents the standard structure for Ray AI primary responses, enabling consistent implementation of new response types.

### Response Anatomy (8 Parts)

Based on `InvestigationReportArtifact` in `RayMessageRenderer.tsx:109-297`:

| # | Component | Required | Last Message Only | Styling |
|---|-----------|----------|-------------------|---------|
| 1 | **Headline** | Yes | No | Icon (20px) + 18px semibold #020202 |
| 2 | **Subtext** | Yes | No | 16px #40566d with `**bold**` in #192839 |
| 3 | **Stats List** | No | No | Bullet list, values bold #192839 |
| 4 | **Data Widget** | No | No | Table with 12px rounded corners |
| 5 | **Resolution** | No | No | Title 18px semibold + body 16px |
| 6 | **Footer Strip** | No | Yes | 32px icon buttons |
| 7 | **Divider** | No | Yes | 0.5px #CBD5E2 |
| 8 | **Suggestions** | No | Yes | Numbered buttons, max 3 |

### Streaming Animation Sequence

Based on `useStreamSequencer.ts` - 5-phase orchestration:

```
Phase 1: NARRATIVE
├── Headline streams (15ms/char via PerplexityStreamText)
├── 1.3s cognitive pause
└── Subtext streams (10ms/char)

Phase 2: DATA ASSET (after 1.3s + 500ms buffer)
└── Table fades in with staggered row animation

Phase 3: INSIGHT (after 400ms + 400ms buffer)
└── Resolution springs in

Phase 4: ACTIONS (after 200ms)
└── Footer buttons fade in

Phase 5: SUGGESTIONS (immediate)
└── Staggered appearance, 100ms between items
```

### Data Structure Template

Based on `arjun_step_2` in `useDemoScript.tsx:53-84`:

```typescript
{
  artifact: {
    type: 'investigation_report',
    data: {
      headline: string,           // Bold key takeaway
      subtext: string,            // Context with **bold** emphasis
      stats: Array<{ label: string; value: string }>,
      table: { rows: Array<TransactionRow> },
      resolution: { title: string; content: string },
      suggestions: string[]       // Max 3 follow-up questions
    }
  }
}
```

### Animation Primitives

From `RayMessageRenderer.tsx:105-106`:

```typescript
const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVar = {
  hidden: { opacity: 0, y: 5, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0)' }
};
```

### Key Files Reference

| File | Purpose |
|------|---------|
| `RayMessageRenderer.tsx` | Main rendering logic for all artifact types |
| `useStreamSequencer.ts` | 5-phase timing orchestration |
| `PerplexityStreamingTypography.tsx` | Character-by-character streaming |
| `useDemoScript.tsx` | Response data examples and demo sequences |
| `RayComponents.tsx` | SmartTable, MessageFooter, SuggestionStack |
