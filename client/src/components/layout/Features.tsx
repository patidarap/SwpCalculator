import { 
  BanknoteIcon, 
  TrendingUpIcon, 
  SlidersIcon, 
  ShieldIcon, 
  HandCoinsIcon, 
  CalculatorIcon 
} from "lucide-react";

const features = [
  {
    icon: <BanknoteIcon className="h-8 w-8" />,
    title: "Regular Income Stream",
    description: "Create a predictable income flow from your investments to support your financial needs."
  },
  {
    icon: <TrendingUpIcon className="h-8 w-8" />,
    title: "Capital Appreciation",
    description: "Your remaining investment continues to grow, potentially offsetting inflation over time."
  },
  {
    icon: <SlidersIcon className="h-8 w-8" />,
    title: "Flexibility & Control",
    description: "Adjust your withdrawal amount or frequency based on changing financial circumstances."
  },
  {
    icon: <ShieldIcon className="h-8 w-8" />,
    title: "Preservation of Capital",
    description: "Strategic withdrawals help maintain your principal while still providing income."
  },
  {
    icon: <HandCoinsIcon className="h-8 w-8" />,
    title: "Tax Efficiency",
    description: "Potential tax advantages compared to other income-generating investment options."
  },
  {
    icon: <CalculatorIcon className="h-8 w-8" />,
    title: "Retirement Planning",
    description: "A popular tool for retirees seeking to convert their retirement corpus into income."
  }
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">
            Benefits of Systematic Withdrawal Plan
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            SWP provides a structured approach to generate regular income from your investments while allowing your capital to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
