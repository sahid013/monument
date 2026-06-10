"use client";

import { useState } from "react";
import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import Typography from "./ui/Typography";
import FaqItem from "./ui/FaqItem";
import Reveal from "./ui/Reveal";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "Do you really only work with monument and headstone companies?",
    answer:
      "Yes, 100%. It's the entire reason Monument exists. We've chosen to go deep in one industry instead of spreading thin across many, and that focus is what lets us get results a general agency simply can't.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most websites go live within a few weeks. Paid ads can start driving leads almost immediately, while SEO compounds over a few months. On our first call we'll map out realistic timelines for your specific situation.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on your goals and where you're starting from. We build a plan around what will actually move the needle for your business, book a free call and we'll give you straight numbers, no pressure and no jargon.",
  },
  {
    question: "I already have a website and a marketing person. Can you still help?",
    answer:
      "Absolutely. We often work alongside in-house teams or build on top of what you already have. We'll start with whatever gives you the biggest return, fast.",
  },
  {
    question: "What makes you different from a regular agency?",
    answer:
      "We only do this. While generalist agencies are googling how monuments are sold, we're already three steps ahead, with playbooks proven specifically in your industry.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className={styles.light}>
      <Reveal className={styles.header}>
        <Eyebrow>FAQ</Eyebrow>
        <Typography variant="sectionTitle" className={styles.title}>
          Questions? We&apos;ve got answers
        </Typography>
      </Reveal>

      <Reveal className={styles.list}>
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </Reveal>
    </Section>
  );
}
