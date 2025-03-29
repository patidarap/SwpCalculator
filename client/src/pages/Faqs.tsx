import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CallToAction from "@/components/layout/CallToAction";

const faqs = [
  {
    question: "What is a Systematic Withdrawal Plan (SWP)?",
    answer: "A Systematic Withdrawal Plan (SWP) is an investment strategy that allows you to withdraw a fixed amount from your investments at regular intervals. It provides a steady income stream while keeping the remaining investment active in the market."
  },
  {
    question: "How is SWP different from SIP?",
    answer: "While a Systematic Investment Plan (SIP) involves investing fixed amounts at regular intervals, an SWP does the opposite - it allows you to withdraw fixed amounts regularly from your existing investment corpus."
  },
  {
    question: "Which withdrawal frequency should I choose?",
    answer: "The withdrawal frequency depends on your cash flow needs. Choose monthly for regular household expenses, quarterly for periodic bills, or yearly for annual expenses like insurance premiums or vacations."
  },
  {
    question: "Should I choose a fixed amount or percentage withdrawal?",
    answer: "Choose fixed amount if you need a specific sum regularly, regardless of market conditions. Choose percentage-based withdrawal if you want your withdrawals to adjust automatically with your portfolio value, potentially helping your investment last longer during market downturns."
  },
  {
    question: "How does inflation affect my SWP?",
    answer: "Inflation reduces the purchasing power of your withdrawals over time. To maintain the same purchasing power, you may need to increase your withdrawal amount periodically. Our calculator allows you to factor in inflation adjustments automatically."
  },
  {
    question: "How long will my money last in an SWP?",
    answer: "The longevity of your investment depends on multiple factors: initial investment amount, rate of return, withdrawal amount, and frequency. Use our calculator to model different scenarios and see how long your investment might last."
  },
  {
    question: "What is a sustainable withdrawal rate?",
    answer: "A commonly cited sustainable withdrawal rate is around 4% of your initial portfolio value (adjusted for inflation annually). However, this depends on market conditions, investment mix, and time horizon. Use our calculator to find a rate that works for your specific situation."
  },
  {
    question: "Are there any tax implications for SWP?",
    answer: "Yes, withdrawals from investments may have tax implications, including capital gains tax. The specific tax treatment depends on the type of investment, holding period, and your tax jurisdiction. Consult a tax advisor for personalized advice."
  },
  {
    question: "Can I change my SWP settings after starting?",
    answer: "Yes, SWP plans typically offer flexibility. You can modify the withdrawal amount, frequency, or even pause withdrawals temporarily based on your changing needs or market conditions."
  },
  {
    question: "What happens if the market performs poorly for an extended period?",
    answer: "During extended market downturns, your investment value may decrease faster than expected. This is known as sequence of returns risk. You might need to reduce your withdrawal amount temporarily or have additional sources of income to avoid depleting your investment too quickly."
  }
];

export default function Faqs() {
  return (
    <div className="bg-neutral-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">Frequently Asked Questions</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Find answers to common questions about Systematic Withdrawal Plans and how to use our calculator.
          </p>
          
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium px-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-xl font-bold mb-4 text-primary">Still have questions?</h2>
            <p className="text-neutral-600 mb-4">
              If you couldn't find an answer to your question, feel free to contact us. We're here to help you understand SWP better and make informed investment decisions.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                Contact Us
              </button>
              <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition">
                Learn More About SWP
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </div>
  );
}
