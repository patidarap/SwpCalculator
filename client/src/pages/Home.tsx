import { useState } from "react";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import CallToAction from "@/components/layout/CallToAction";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import CalculatorResults from "@/components/calculator/CalculatorResults";

export default function Home() {
  const [calculationResults, setCalculationResults] = useState<any>(null);

  return (
    <div>
      <Hero />
      
      <section id="calculator" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">
              SWP Calculator
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Enter your investment details below to calculate your systematic withdrawal plan and see how your money will grow over time.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Calculator Inputs Column */}
              <div className="md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-200">
                <h3 className="font-bold text-xl mb-6 text-neutral-800">Input Details</h3>
                <CalculatorForm 
                  onCalculate={(results) => setCalculationResults(results)} 
                />
              </div>

              {/* Calculator Results Column */}
              <div className="md:w-1/2 p-6 md:p-8 bg-neutral-50">
                {calculationResults && (
                  <CalculatorResults results={calculationResults} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      <CallToAction />
    </div>
  );
}
