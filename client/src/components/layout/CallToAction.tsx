import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to plan your financial future?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Use our SWP calculator to create a personalized withdrawal plan that meets your income needs while allowing your investments to grow.
        </p>
        <Button 
          onClick={scrollToCalculator}
          variant="outline" 
          size="lg"
          className="bg-white text-primary hover:bg-neutral-100 transition font-bold"
        >
          Start Calculating Now
        </Button>
      </div>
    </section>
  );
}
