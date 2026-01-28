// src/data/demoConfig.ts

export type PersonaId = 'maya' | 'arjun' | 'sarah' | 'sam' | 'shyam' | 'kiara';
export type Theme = 'positive' | 'negative' | 'neutral';

export interface DashboardCard {
  id: string;
  type: 'briefing' | 'stats' | 'settlement';
  title?: string;
  subtext?: string;
  value?: string;
  secondaryValue?: string; // For things like "available balance" vs "collected"
  trend?: 'up' | 'down' | 'neutral';
  status?: 'healthy' | 'critical' | 'paused';
}

export interface PersonaConfig {
  id: PersonaId;
  name: string;
  theme: Theme;
  landing: {
    greeting: string;
    initialPrompt: string;
    cards: DashboardCard[];
  };
}

export const PERSONAS: Record<PersonaId, PersonaConfig> = {
  maya: {
    id: 'maya',
    name: 'Maya',
    theme: 'positive',
    landing: {
      greeting: "Good afternoon, Maya!",
      initialPrompt: "Show me recent payments from arvind@gmail.com",
      cards: [
        {
          id: 'briefing',
          type: 'briefing',
          title: "No refunds or disputes so far today",
          subtext: "All systems operational"
        },
        {
          id: 'stats',
          type: 'stats',
          title: "Payment volumes higher than usual today",
          value: "₹1,13,000.00",
          secondaryValue: "₹1,00,000.00", // Available balance
          trend: 'up',
          status: 'healthy'
        },
        {
          id: 'settlement',
          type: 'settlement',
          title: "Your settlements are on track",
          value: "₹1.26L",
          subtext: "Next Settlement",
          status: 'healthy'
        }
      ]
    }
  },
  arjun: {
    id: 'arjun',
    name: 'Arjun',
    theme: 'negative',
    landing: {
      greeting: "Good afternoon, Arjun!",
      initialPrompt: "Where are my settlements? Why is my account balance negative? We had high value txns this week",
      cards: [
        {
          id: 'briefing',
          type: 'briefing',
          title: "Today's Briefing",
          subtext: "Your refund volume for last 3 days was unusually high. Payment timeouts are the most common failure reason (2%)."
        },
        {
          id: 'stats',
          type: 'stats',
          title: "Your account balance is negative",
          value: "-₹46,000.00",
          secondaryValue: "₹1,20,000.00", // Payments collected
          trend: 'down',
          status: 'critical'
        },
        {
          id: 'settlement',
          type: 'settlement',
          title: "Your settlements are paused",
          value: "Paused",
          subtext: "Action Required",
          status: 'paused'
        }
      ]
    }
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah',
    theme: 'neutral',
    landing: {
      greeting: "Welcome back, Sarah!",
      initialPrompt: "My customer called and said payment was refunded. I didn't initiate this.. What is going on?",
      cards: [
        {
          id: 'briefing',
          type: 'briefing',
          title: "Account Action Required",
          subtext: "Please submit updated KYC documents to resume full processing."
        },
        {
          id: 'stats',
          type: 'stats',
          title: "Payment volume is low",
          value: "₹0.00",
          secondaryValue: "₹0.00",
          trend: 'neutral',
          status: 'healthy'
        },
        {
          id: 'settlement',
          type: 'settlement',
          title: "Settlements on Hold",
          value: "On Hold",
          subtext: "Dormant Account",
          status: 'paused'
        }
      ]
    }
  },
  sam: {
    id: 'sam',
    name: 'Sam',
    theme: 'positive',
    landing: {
      greeting: "Good afternoon, Sam!",
      initialPrompt: "What's the status of my last ticket",
      cards: [
        {
          id: 'briefing',
          type: 'briefing',
          title: "No refunds or disputes so far today",
          subtext: "All systems operational"
        },
        {
          id: 'stats',
          type: 'stats',
          title: "Payment volumes higher than usual today",
          value: "₹1,13,000.00",
          secondaryValue: "₹1,00,000.00",
          trend: 'up',
          status: 'healthy'
        },
        {
          id: 'settlement',
          type: 'settlement',
          title: "Your settlements are on track",
          value: "₹1.26L",
          subtext: "Next Settlement",
          status: 'healthy'
        }
      ]
    }
  },
  shyam: {
    id: 'shyam',
    name: 'Shyam',
    theme: 'neutral',
    landing: {
      greeting: "Good afternoon, Shyam!",
      initialPrompt: "[Screenshot uploaded]",
      cards: [
        {
          id: 'briefing',
          type: 'briefing',
          title: "1 failed payment detected today",
          subtext: "Customer: Rahul - ₹15,000 bank timeout"
        },
        {
          id: 'stats',
          type: 'stats',
          title: "Today's payment volume",
          value: "₹85,000.00",
          secondaryValue: "₹70,000.00",
          trend: 'up',
          status: 'healthy'
        },
        {
          id: 'settlement',
          type: 'settlement',
          title: "Your settlements are on track",
          value: "₹70K",
          subtext: "Next Settlement",
          status: 'healthy'
        }
      ]
    }
  },
  kiara: {
    id: 'kiara',
    name: 'Kiara',
    theme: 'positive',
    landing: {
      greeting: "Good afternoon, Kiara!",
      initialPrompt: "Check the status of Rohan's last transaction",
      cards: [
        {
          id: 'briefing',
          type: 'briefing',
          title: "1 refund pending bank processing",
          subtext: "Rohan's ₹10,000 refund - ETA Feb 4"
        },
        {
          id: 'stats',
          type: 'stats',
          title: "Payment volumes steady today",
          value: "₹95,000.00",
          secondaryValue: "₹82,000.00",
          trend: 'up',
          status: 'healthy'
        },
        {
          id: 'settlement',
          type: 'settlement',
          title: "Your settlements are on track",
          value: "₹82K",
          subtext: "Next Settlement",
          status: 'healthy'
        }
      ]
    }
  }
};
