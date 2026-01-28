import { useState } from 'react';

export const useDemoScript = () => {
    const [step, setStep] = useState(0);

    const getFutureDate = (days: number) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    // Helper to get current date with timestamp offset (minutes)
    const getTimestamp = (minuteOffset: number) => {
        const date = new Date();
        date.setMinutes(date.getMinutes() + minuteOffset);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-GB', { month: 'short' });
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day} ${month} ${year}, ${hours}:${minutes}`;
    };

    // Helper to get date with day offset for table rows
    const getDateWithDayOffset = (dayOffset: number, hour: number = 8, minute: number = 53) => {
        const date = new Date();
        date.setDate(date.getDate() - dayOffset);
        date.setHours(hour, minute);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-GB', { month: 'short' });
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day} ${month} ${year}, ${hours}:${minutes}`;
    };

    // Maya's Journey (Double Debit)
    const mayaScript = {
        maya_step_0: {
            input: "Show me recent payments from arvind@gmail.com",
            response: null,
            suggestions: []
        },
        maya_step_1: {
            artifact: {
                type: 'maya_transactions_report',
                data: {
                    headline: "Recent payments from arvind@gmail.com",
                    subtext: "Arvind has **3 recent payments** totalling **₹26,000**. Two are successful (captured) and have been settled. The **third—a netbanking payment—is still pending** as we wait for the customer's bank to confirm the transfer.",
                    table: {
                        rows: [
                            { id: 'pay_arvind_1', amount: '₹20,000.00', status: 'Pending', method: 'Netbanking', date: getDateWithDayOffset(0, 8, 53), rrn: '514633500160' },
                            { id: 'pay_arvind_2', amount: '₹2,000.00', status: 'Captured', method: 'UPI', date: getDateWithDayOffset(1, 8, 53), rrn: '514633500160' },
                            { id: 'pay_arvind_3', amount: '₹4,000.00', status: 'Captured', method: 'UPI', date: getDateWithDayOffset(0, 8, 53), rrn: '514633500160' }
                        ]
                    },
                    insight: {
                        text: "Arvind is a long time customer since 2023. He's placed 13 orders so far. They have a Lifetime Value (LTV) of **₹4.5 Lakhs** and, notably, **zero refunds** on record."
                    },
                    suggestions: ["Why is the netbanking payment pending", "Check payment gateway health"]
                }
            }
        },
        maya_step_2: {
            artifact: {
                type: 'maya_diagnosis',
                data: {
                    headline: "Double debit diagnosis: Payment stuck with customer's bank",
                    subtext: "It's likely the customer attempted a payment, but it **failed at their bank's end** and was never collected by Razorpay. Such failed transactions are not visible on the Razorpay dashboard.",
                    resolution: {
                        title: "What happens next:",
                        content: `The money will be **automatically refunded** to Arvind's account by **${getFutureDate(7)}** (within 5-7 working days). No action is required from your side.`
                    },
                    suggestions: ["Draft an explanation for Arvind", "Check payment gateway health", "Raise support ticket"]
                }
            }
        },
        maya_step_3: {
            artifact: {
                type: 'maya_draft_message',
                data: {
                    headline: "Draft message for Arvind",
                    subtext: "Here's a message you can share with Arvind explaining the situation:",
                    draftMessage: `Hi Arvind,

Thank you for reaching out. We've checked your account and can confirm we received only one successful payment of ₹20,000 (currently pending).

The second charge you're seeing is likely a temporary hold by your bank that failed to reach us. Such transactions are automatically reversed within 5-7 working days.

If the amount isn't credited back by ${getFutureDate(7)}, please share your bank statement and we'll help resolve this immediately.

Best regards,
Maya`,
                    suggestions: ["Copy Message", "Send via Email", "Edit Draft"]
                }
            }
        }
    };

    // Keep scriptData for backward compatibility but redirect to mayaScript
    const scriptData = mayaScript;

    // Arjun's Journey (Negative Balance Investigation)
    const arjunScript = {
        arjun_step_0: {
            input: "Where are my settlements? Why is my account balance negative? We had high value txns this week",
            response: null,
            suggestions: []
        },
        arjun_step_1: {
            headline: "Analyzing your account...",
            subtext: "Looking at your settlements, balance, and recent transactions.",
            suggestions: []
        },
        arjun_step_2: {
            artifact: {
                type: 'investigation_report',
                data: {
                    headline: "Your settlements are paused due to a negative balance of ₹46,000.",
                    subtext: "This happened because your refunds this week exceeded your payments:",
                    stats: [
                        { label: "Payments received", value: "₹7.6 Lakhs" },
                        { label: "Refunds processed", value: "₹8.0 Lakhs" },
                        { label: "Current difference", value: "-₹46,000" }
                    ],
                    table: {
                        rows: [
                            { id: '1', amount: '₹1,85,000', status: 'Refunded', method: 'Card', date: 'Jan 24, 2:14 PM', rrn: '402418562934', email: 'priya.mehta@email.com' },
                            { id: '2', amount: '₹1,20,000', status: 'Refunded', method: 'UPI', date: 'Jan 23, 4:22 PM', rrn: '402315478921', email: 'rahul.trading@email.com' },
                            { id: '3', amount: '₹95,000', status: 'Refunded', method: 'Netbanking', date: 'Jan 23, 11:08 AM', rrn: '402312089456', email: 'supplier.ops@email.com' },
                            { id: '4', amount: '₹88,000', status: 'Processing', date: 'Jan 22, 6:45 PM', rrn: '402289234567', email: 'ankita.shah@email.com' },
                            { id: '5', amount: '₹75,000', status: 'Refunded', method: 'UPI', date: 'Jan 22, 3:30 PM', rrn: '402285671234', email: 'orders@business.com' },
                        ]
                    },
                    resolution: {
                        title: "How to unlock your money immediately:",
                        content: "You have ₹1.26 Lakhs in settlements waiting. Add ₹46,000 to your Razorpay account now to clear the negative balance, and your full ₹1.26 Lakhs will be transferred to your bank by the next business day."
                    },
                    suggestions: [
                        "Add funds worth ₹46,000",
                        "How can I avoid this negative balance in the future?",
                        "Tell me how Refund Credits can keep my settlements running smoothly."
                    ]
                }
            }
        },
        arjun_step_3: {
            headline: "Funds added successfully & settlements resumed",
            // Using blocks for the main text content to support the specific layout
            blocks: [
                {
                    type: 'text',
                    content: "Great news! We have received your ₹46,000. This has cleared your negative balance, and the hold on your funds has been removed."
                },
                {
                    type: 'text',
                    content: "**What happens next?** Your full settlement of ₹1.26 Lakhs is now scheduled to be transferred to your bank account by tomorrow, Jan 24."
                }
            ],
            // Complex artifact type to render both cards
            artifact: {
                type: 'funds_added_card'
            },
            // Resolution is now part of blocks to ensure correct ordering (Text -> Card)
            // But we keep the key if needed, or set to undefined.
            // The renderer will be updated to ignore this if blocks cover it,
            // OR we can leave it undefined.
            suggestions: [
                "How do I setup refund credits?",
                "Do refund credits expire?",
                "Tell me how Refund Credits can keep my settlements running smoothly."
            ]
        }
    };

    // Sarah's Journey (Auto-Refunded Payments)
    const sarahScript = {
        sarah_step_1: {
            artifact: {
                type: 'investigation_report',
                data: {
                    headline: "Diagnosis: 5 Payments worth ₹5,400 were auto-refunded",
                    subtext: "I see 5 transactions totalling **₹5,400 were authorized** by the customer's bank but were auto-refunded because they were not 'Captured' by your system within the mandatory window.",
                    stats: [
                        { label: "Payments authorized", value: "₹5,400" },
                        { label: "Payments captured", value: "₹0" },
                        { label: "Auto-refunded", value: "₹5,400" }
                    ],
                    table: {
                        rows: [
                            { id: '1', amount: '₹1,500', status: 'Refunded', date: getDateWithDayOffset(0, 8, 53), rrn: '514633500160', email: 'customer1@email.com' },
                            { id: '2', amount: '₹1,500', status: 'Refunded', date: getDateWithDayOffset(0, 8, 53), rrn: '514633500161', email: 'customer2@email.com' },
                            { id: '3', amount: '₹1,000', status: 'Refunded', date: getDateWithDayOffset(0, 8, 53), rrn: '514633500162', email: 'customer3@email.com' },
                            { id: '4', amount: '₹1,000', status: 'Refunded', date: getDateWithDayOffset(0, 8, 53), rrn: '514633500163', email: 'customer4@email.com' },
                            { id: '5', amount: '₹400', status: 'Refunded', date: getDateWithDayOffset(2, 8, 53), rrn: '514633500164', email: 'customer5@email.com' }
                        ]
                    },
                    resolution: {
                        title: "The cause:",
                        content: "Your payment capture setting was likely set to **manual capture**, when you updated your Shopify integration recently. This is likely the root cause.\n\n**My recommendation:** I can switch your account to \"Auto-capture\" right now so you never miss a payment again. Should I go and change this to auto-capture?"
                    },
                    buttons: [
                        { label: "Yes", variant: "primary" },
                        { label: "Not now", variant: "secondary" }
                    ],
                    suggestions: [
                        "What is payment capture? Why does it matter?",
                        "Can the payment capture setting be reversed later on?",
                        "What are refund credits?"
                    ]
                }
            }
        },
        sarah_step_2: {
            artifact: {
                type: 'setting_updated_with_bullets',
                data: {
                    headline: "Setting updated — Payment capture setting updated to auto capture",
                    body: "Your payments are now set to Auto-Capture. Going forward all your payments will be automatically captured within 15 mins. Once captured they will be settled within 2 days (as per your current settlement cycle \"T+2\").",
                    bullets: [
                        { text: "However, **the 5 orders listed earlier above were already refunded** to the customers..." },
                        { text: "**My recommendation:** To save these sales, I can **instantly generate Payment Links to these 5 customers** for the exact amounts they attempted to pay?" }
                    ],
                    buttons: [
                        { label: "Yes", variant: "primary" },
                        { label: "Not now", variant: "secondary" }
                    ]
                }
            }
        },
        sarah_step_3: {
            artifact: {
                type: 'payment_links_created',
                data: {
                    headline: "Great news! Your payment links are ready to help you get paid.",
                    body: "I've generated these links to help you get paid for those 5 auto-refunded orders. These are now Active and ready to be shared with your customers via WhatsApp, email, or SMS.",
                    table: {
                        rows: [
                            { id: '1', linkUrl: 'https://rzp.io/rzp/zrcAOUD', amount: '₹ 1500.00', status: 'Active', createdOn: getTimestamp(0), expiry: '-' },
                            { id: '2', linkUrl: 'https://rzp.io/rzp/iascAOCE', amount: '₹ 1000.00', status: 'Active', createdOn: getTimestamp(1), expiry: '-' },
                            { id: '3', linkUrl: 'https://rzp.io/rzp/jcasuCHS', amount: '₹ 500.00', status: 'Active', createdOn: getTimestamp(2), expiry: '-' }
                        ]
                    },
                    followup: {
                        title: "What next?",
                        body: "As soon as a customer pays, I can notify you immediately. Would you like to enable notifications for this?",
                        buttons: [
                            { label: "Yes", variant: "primary" },
                            { label: "Not now", variant: "secondary" }
                        ]
                    }
                }
            }
        },
        sarah_step_4: {
            artifact: {
                type: 'simple_text',
                data: {
                    headline: "Notifications are now enabled!",
                    body: "You'll receive instant notifications whenever a payment is made. This will help you stay on top of your transactions and follow up promptly with customers.\n\nIs there anything else I can help you with?",
                    suggestions: []
                }
            }
        }
    };

    // Briefing Review Responses (for "Review with Ray" hover affordance)
    const briefingReviewResponses = {
        refunds_summary: {
            artifact: {
                type: 'simple_text',
                data: {
                    headline: "Today's refund and dispute summary",
                    body: "Great news! You have **zero refunds** and **zero disputes** so far today. This is consistent with your excellent track record.\n\n**Your refund rate** over the last 30 days is just **0.3%**, which is well below the industry average of 2-3%. Keep up the good work!",
                    suggestions: ["Show me last week's refund trends", "What's my dispute resolution rate?"]
                }
            }
        },
        refunds_high: {
            artifact: {
                type: 'simple_text',
                data: {
                    headline: "Refund volume analysis for the last 3 days",
                    body: "Your refund volume increased by **43%** compared to the previous week. Here's the breakdown:\n\n• **Monday:** ₹1,85,000 (3 refunds)\n• **Tuesday:** ₹1,20,000 (2 refunds)\n• **Wednesday:** ₹95,000 (1 refund)\n\nThe primary reason appears to be **product returns** from a promotional campaign. Consider reviewing your return policy for promotional items.",
                    suggestions: ["Show me the refund details", "How do I reduce refund rates?"]
                }
            }
        },
        payment_timeouts: {
            artifact: {
                type: 'simple_text',
                data: {
                    headline: "Payment timeouts analysis",
                    body: "Payment timeouts account for **2%** of your failed transactions. Here's what's happening:\n\n• **Root cause:** Most timeouts occur during peak hours (12-2 PM) when bank servers are under load.\n• **Affected methods:** Netbanking has the highest timeout rate at 4.2%.\n\n**Recommendations:**\n1. Enable **auto-retry** for failed transactions\n2. Consider adding UPI as a preferred option (0.3% timeout rate)\n3. Set up **smart routing** to route away from slow banks",
                    suggestions: ["Enable auto-retry for timeouts", "Show me bank-wise success rates"]
                }
            }
        },
        payment_methods: {
            artifact: {
                type: 'simple_text',
                data: {
                    headline: "Payment methods breakdown",
                    body: "Here's your payment mix for this week (₹7.1 lakh total):\n\n• **UPI:** ₹4.26 lakh (60%) – Highest success rate at 99.2%\n• **Cards:** ₹2.56 lakh (36%) – Success rate 96.8%\n• **Netbanking:** ₹28,400 (4%) – Success rate 94.1%\n\n**Insight:** UPI dominance is growing. Consider promoting UPI with small incentives to improve your overall success rate.",
                    suggestions: ["Show me daily trends", "Compare with last month"]
                }
            }
        }
    };

    // Sam's Journey (Support Ticket Escalation)
    // Calculate ETA as 2 days ago (SLA breach)
    const today = new Date();
    const etaDate = new Date(today);
    etaDate.setDate(today.getDate() - 2);
    const etaFormatted = etaDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const samScript = {
        sam_step_0: {
            input: "What's the status of my last ticket",
            response: null,
            suggestions: []
        },
        sam_step_1: {
            artifact: {
                type: 'support_ticket_status',
                data: {
                    headline: "Your last ticket #4492 is still under review.",
                    subtext: "",
                    ticket: {
                        id: '#4492',
                        status: 'Active',
                        issue: 'Customer Refund - ₹5,000 not received',
                        raised: '5 days ago',
                        createdOn: 'Jan 23, 2026, 5 days ago',
                        eta: etaFormatted,
                        isOverdue: true
                    },
                    explanation: null,
                    buttons: [
                        { label: "Escalate this Ticket", variant: "primary" }
                    ],
                    suggestions: [
                        "Why is it taking so long?",
                        "View my other open tickets"
                    ]
                }
            }
        },
        sam_step_2: {
            artifact: {
                type: 'support_ticket_status',
                data: {
                    headline: "Your ticket #4492 has been Escalated.",
                    subtext: "I've moved this ticket to our priority review team. A support manager will look into this by today.",
                    ticket: {
                        id: '#4492',
                        status: 'Escalated',
                        issue: 'Customer Refund - ₹5,000 not received',
                        raised: '5 days ago',
                        createdOn: 'Jan 23, 2026, 5 days ago',
                        eta: 'Today',
                        isEscalated: true
                    },
                    explanation: null,
                    buttons: [
                        { label: "Need quicker resolution? Opt in for priority support", variant: "secondary" }
                    ],
                    suggestions: [
                        "What is priority support?",
                        "View my other open tickets"
                    ]
                }
            }
        }
    };

    const processInput = (text: string) => {
        const lowerText = text.toLowerCase();
        let nextStep = step;

        if (step === 0 && text.trim().length > 0) {
             nextStep = 1;
        } else if (step === 1 && lowerText.includes('double debit')) {
             nextStep = 2;
        } else if (step === 2 && lowerText.includes('draft')) {
             nextStep = 3;
        }
        
        if (nextStep !== step) {
            setStep(nextStep);
            return true;
        }
        return false;
    };

    return {
        step,
        setStep,
        processInput,
        scriptData,
        mayaScript,
        arjunScript,
        sarahScript,
        samScript,
        briefingReviewResponses,
        getFutureDate
    };
};