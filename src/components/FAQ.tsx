import React, { useState, Fragment } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}
function FAQItem({
  question,
  answer,
  isOpen,
  toggle
}: FAQItemProps) {
  return <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none" onClick={toggle}>
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4">{answer}</p>
      </div>
    </div>;
}
function FAQCategory({
  title
}: {
  title: string;
}) {
  return <div className="mb-6 mt-10">
      <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">{title}</h3>
    </div>;
}
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqItems = [{
    question: "What makes Samuel's Barbers different?",
    answer: 'Our experienced barbers are passionate about their craft and use only the best products and tools. We create a relaxed, welcoming environment where every client gets personalized attention and walks out feeling their absolute best.',
    category: 'General'
  }, {
    question: 'Do I need to make an appointment?',
    answer: 'While we do accept walk-ins, we recommend making an appointment to ensure you get your preferred time slot and barber. You can book online through Booksy or call us directly.',
    category: 'General'
  }, {
    question: 'What forms of payment do you accept?',
    answer: 'We accept cash, all major credit cards, Apple Pay, and Google Pay.',
    category: 'General'
  }, {
    question: 'What if I need to cancel my appointment?',
    answer: 'We understand that plans change. We appreciate at least 24 hours notice for cancellations. For last-minute cancellations, please call us as soon as possible.',
    category: 'General'
  }, {
    question: "Do you cut women's hair?",
    answer: "Yes, we specialize in short haircuts for all genders. If you're looking for a pixie cut, undercut, or any short style, we've got you covered.",
    category: 'General'
  }, {
    question: 'Do you offer haircuts for kids?',
    answer: "Yes! At Samuel's Barbers, we understand that a kid's haircut can feel daunting. We've created a welcoming atmosphere that caters to children's unique needs. Our barbers are trained to tailor each haircut—whether it's a buzz cut, fade, or trendy style inspired by their favorite athlete or celebrity.",
    category: 'General'
  }];
  // Group FAQ items by category
  const groupedFAQs: Record<string, typeof faqItems> = {};
  faqItems.forEach(item => {
    if (!groupedFAQs[item.category]) {
      groupedFAQs[item.category] = [];
    }
    groupedFAQs[item.category].push(item);
  });
  // Order of categories
  const categoryOrder = ['General'];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Flatten the grouped FAQs for indexing
  const flattenedFAQs = faqItems;
  return <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers to some of our most commonly asked
            questions.
          </p>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {categoryOrder.map(category => <Fragment key={category}>
              <FAQCategory title={category} />
              {groupedFAQs[category]?.map((item, idx) => {
            // Calculate the global index for this FAQ item
            const globalIndex = flattenedFAQs.findIndex(faq => faq.question === item.question);
            return <FAQItem key={globalIndex} question={item.question} answer={item.answer} isOpen={openIndex === globalIndex} toggle={() => toggleFAQ(globalIndex)} />;
          })}
            </Fragment>)}
        </div>
      </div>
    </section>;
}