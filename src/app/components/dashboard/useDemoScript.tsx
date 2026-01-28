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

    // Maya's Journey (Double Debit)
    const scriptData = {
        0: {
            input: "Show recent transactions from arvind@gmail.com",
            response: null,
            suggestions: []
        },
        1: {
            headline: "Recent payments from arvind@gmail.com",
            subtext: "Arvind has 3 recent payments totalling ₹22,000. His most recent transaction was for 15,000 successfully captured. Recently one of his payments failed due to insufficient funds.",
            tableData: [
                { id: 'pay_arvind_1', amount: '15,000.00', status: 'Captured', method: 'UPI', date: 'Jan 23', rrn: '6482937429', paymentMethod: 'UPI' },
                { id: 'pay_arvind_2', amount: '5,000.00', status: 'Failed', method: 'Netbanking', date: 'Insufficient Funds', rrn: '9876543210', paymentMethod: 'Netbanking' },
                { id: 'pay_arvind_3', amount: '2,000.00', status: 'Captured', method: 'Card', date: 'Jan 21', rrn: '1242940202', paymentMethod: 'Card' }
            ],
            suggestions: ["He claims double debit", "Download Statement", "View Customer Profile"]
        },
        2: {
            headline: "Diagnosis: Payment not processed by customer's bank",
            subtext: "It is likely that the customer attempted a payment but it failed at their bank's end and wasn't collected by Razorpay. Such transactions are not visible on the dashboard. This will be auto-refunded by Jan 30, 2026.",
            suggestions: ["Draft explanation for Arvind", "Check Gateway Health", "Raise Support Ticket"]
        },
        3: {
            headline: "Draft Message for Arvind",
            subtext: "Hi Arvind, we see one successful payment of ₹15,000. The second attempted payment likely failed at your bank's end and did not reach us. This typically auto-reverses within 5-7 working days (by Jan 30).",
            suggestions: ["Copy Message", "Send Email", "Edit Draft"]
        }
    };

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
                            { id: '1', amount: '₹1,500', status: 'Refunded', date: '23 Jan 2026, 08:53', rrn: '514633500160', email: 'customer1@email.com' },
                            { id: '2', amount: '₹1,500', status: 'Refunded', date: '23 Jan 2026, 08:53', rrn: '514633500161', email: 'customer2@email.com' },
                            { id: '3', amount: '₹1,000', status: 'Refunded', date: '23 Jan 2026, 08:53', rrn: '514633500162', email: 'customer3@email.com' },
                            { id: '4', amount: '₹1,000', status: 'Refunded', date: '23 Jan 2026, 08:53', rrn: '514633500163', email: 'customer4@email.com' },
                            { id: '5', amount: '₹400', status: 'Refunded', date: '21 Jan 2026, 08:53', rrn: '514633500164', email: 'customer5@email.com' }
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
        arjunScript,
        sarahScript,
        getFutureDate
    };
};