"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I care for my leather products?",
    answer: "We recommend cleaning with a dry cloth and using a high-quality leather conditioner every 3-6 months to maintain moisture and prevent cracking. Avoid prolonged exposure to direct sunlight and water."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase for unworn items in their original packaging. Custom or personalized items are final sale."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location and are calculated at checkout."
  },
  {
    question: "How do I determine my size?",
    answer: "Please refer to our 'Dynamic Sizing Guide' located on each product page. It includes instructions on how to measure your foot for the perfect fit."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary uppercase tracking-widest mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 bg-white px-6">
              <AccordionTrigger className="font-heading text-sm sm:text-lg font-semibold text-primary uppercase tracking-wide hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral font-light text-xs sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}