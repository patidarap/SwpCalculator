import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-16 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-64 -mb-64"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Smart Withdrawal Planning
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Plan Your Financial Freedom
              </span>
              <br />
              
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">with SWP Calculator</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
            >
              Calculate how your investments will grow and schedule your withdrawals for a steady income stream. Take control of your financial future today.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToCalculator}
                className="bg-white text-primary hover:bg-neutral-100 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                size="lg"
              >
                Start Calculating Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white/30 hover:bg-white/10 font-medium px-8 py-6 text-lg hover:text-white"
                size="lg"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-4 text-sm text-white/80"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-8 h-8 rounded-full border-2 border-white bg-neutral-800"
                  ></div>
                ))}
              </div>
              <div>
                <p>Trusted by thousands of investors</p>
                <p className="text-white/60">4.9/5 rating from 1,200+ reviews</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Floating animated coins */}
      {isMounted && (
        <>
          <motion.div
            initial={{ y: -100, x: -50, opacity: 0 }}
            animate={{ y: 0, x: -50, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hidden lg:block absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30"
          ></motion.div>
          <motion.div
            initial={{ y: -100, x: 50, opacity: 0 }}
            animate={{ y: 0, x: 50, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:block absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          ></motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="hidden lg:block absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-green-400/20 backdrop-blur-sm border border-green-400/30"
          ></motion.div>
        </>
      )}
    </section>
  );
}