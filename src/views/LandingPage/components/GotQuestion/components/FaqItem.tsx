import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// Define FAQ item types
export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface FaqItemProps {
  faq: Faq;
  isExpanded: boolean;
  onToggle: () => void;
}

// FAQ item component
const FaqItem: React.FC<FaqItemProps> = ({ faq, isExpanded, onToggle }) => (
  <div
    className="flex flex-col items-start self-stretch border-b border-gray-200 p-4 md:p-6 cursor-pointer"
    onClick={onToggle}
  >
    <div className="w-full flex justify-between items-center">
      <h3 className="text-base md:text-lg font-primary font-normal text-primary-gray pr-4">
        {faq.question}
      </h3>
      <motion.div
        animate={{
          rotate: isExpanded ? 45 : 0,
          color: isExpanded ? "#55B947" : "#000",
        }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0"
      >
        <Plus size={20} />
      </motion.div>
    </div>

    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden w-full"
        >
          <p className="text-primary-gray mt-4 font-primary font-light text-sm md:text-base bg-gray-100 p-3 md:p-4 rounded">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FaqItem;
