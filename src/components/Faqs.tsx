import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import AnimatedText from "./TextAnimate";

export function Faqs() {
  return (
    <div className="md:py-[100px]">
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
            <AccordionTrigger>
              What makes Furnitt unique in its approach to interior design?
            </AccordionTrigger>
            <AccordionContent>
              Furnitt is dedicated to infusing creativity and artistic flair
              into your home, ensuring that it reflects your personality and
              makes you swell with pride. Our methodology involves an eight-step
              journey, from meeting the customer and conceptualizing ideas to
              site measurement, 3D design, cost reconciliation, production,
              choosing and placing furniture, and finally handing over the
              perfect home. We blend creativity, design, luxury, and
              architecture to give your home a splendid, heartwarming, and
              glamorous look.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does Furnitt ensure that the final design reflects the
              customer personality needs?
            </AccordionTrigger>
            <AccordionContent>
              At Furnitt, we start by meeting with you in person to understand
              your preferences, needs, and requirements. We then conceptualize
              your ideas on mood boards and create a comprehensive plan with
              detailed measurements and layouts. Our specialists develop a full
              3D rendering of the design, allowing you to finalize the perfect
              paint, materials, and finishing touches. Throughout the process,
              we incorporate your feedback and any changes you prefer to ensure
              that the final design reflects your unique personality and needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is the timeline for completing a project with Furnitt?
            </AccordionTrigger>
            <AccordionContent>
              The entire process, from the initial meeting to the final
              handover, can be completed in 7-9 weeks from the date your plans
              are approved. This timeline includes all necessary steps such as
              site measurement, design, cost reconciliation, production,
              implementation, and the placement of furniture and furnishings.
              Our expert team conducts all necessary work, keeping you informed
              throughout the process to ensure a smooth and timely completion of
              your dream home.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
