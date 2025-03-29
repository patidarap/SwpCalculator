import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your Financial Freedom with SWP Calculator
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Calculate how your investments will grow and schedule your withdrawals for a steady income stream.
          </p>
          <Button 
            onClick={scrollToCalculator}
            className="bg-white text-primary hover:bg-neutral-100 font-bold"
            size="lg"
          >
            Start Calculating
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
