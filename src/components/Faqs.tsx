import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import AnimatedText from "./TextAnimate";

export function Faqs() {
  return (
    <div className="border-y-black border-b-2 py-[60px]">
      <div className="flex container-main items-center h-full">
        <div className="w-1/2">
          <AnimatedText
            text="FAQ's"
            delayPerWord={0.4}
            delayPerChar={0.2}
            duration={0.8}
          />
        </div>

        <Accordion type="single" collapsible className="w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>question1?</AccordionTrigger>
            <AccordionContent>Answer</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>question2?</AccordionTrigger>
            <AccordionContent>answer</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>question3?</AccordionTrigger>
            <AccordionContent>answer</AccordionContent>
          </AccordionItem>
        
        </Accordion>
      </div>
    </div>
  );
}
