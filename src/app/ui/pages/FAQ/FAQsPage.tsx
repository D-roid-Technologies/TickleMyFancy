"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQsPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      question: "How does Tickle My Fancy ensure user safety?",
      answer:
        "We prioritize safety through optional profile verification, robust reporting tools, privacy controls, and 24/7 moderation. Users can set boundaries, block unwanted contacts, and report inappropriate behavior instantly.",
    },
    {
      question: "Is my personal information kept private?",
      answer:
        "Absolutely. We use end-to-end encryption for messages and give you complete control over what information you share. Your data is never sold to third parties, and you can delete your account at any time.",
    },
    {
      question: "How does the matching algorithm work?",
      answer:
        "Our algorithm considers your interests, preferences, boundaries, and activity patterns to suggest compatible matches. It learns from your interactions to improve suggestions over time while respecting your privacy.",
    },
    {
      question: "Can I use the app for free?",
      answer:
        "Yes! Tickle My Fancy offers a robust free tier with core features like matching, messaging, and safety tools. Premium subscriptions unlock additional features like advanced filters and priority support.",
    },
    {
      question: "What makes this different from other dating apps?",
      answer:
        "We focus on consent, boundaries, and authentic connections. Our platform is designed for open-minded adults who want meaningful interactions in a safe, judgment-free environment.",
    },
    {
      question: "How do I report inappropriate behavior?",
      answer:
        "Every profile and conversation has a report button. Our safety team reviews all reports within 24 hours and takes appropriate action, including warnings, suspensions, or permanent bans.",
    },
    {
      question: "Can I delete my account permanently?",
      answer:
        "Yes, you can permanently delete your account and all associated data at any time through your account settings. This action is irreversible and removes all your information from our servers.",
    },
    {
      question: "Is there an age verification process?",
      answer:
        "Yes, all users must be 18+ and verify their age during registration. We use secure age verification methods to ensure our community remains adults-only.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h1>
      </div>
    </div>
  );
};

export default FAQsPage;
