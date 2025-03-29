import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle } from "lucide-react";
import { calculateSWP } from "@/lib/calculator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const calculatorSchema = z.object({
  principal: z.coerce.number().min(1000, { 
    message: "Principal amount must be at least ₹1,000" 
  }),
  returnRate: z.coerce.number().min(1, {
    message: "Return rate must be at least 1%" 
  }).max(30, {
    message: "Return rate must be at most 30%" 
  }),
  frequency: z.enum(["monthly", "quarterly", "yearly"]),
  withdrawalType: z.enum(["amount", "percentage"]),
  withdrawalAmount: z.coerce.number().min(100, {
    message: "Withdrawal amount must be at least ₹100" 
  }).optional(),
  withdrawalPercentage: z.coerce.number().min(0.1, {
    message: "Withdrawal percentage must be at least 0.1%" 
  }).max(20, {
    message: "Withdrawal percentage must be at most 20%" 
  }).optional(),
  tenure: z.coerce.number().min(1, {
    message: "Tenure must be at least 1 year" 
  }).max(50, {
    message: "Tenure must be at most 50 years" 
  }),
  inflation: z.boolean().default(false),
  inflationRate: z.coerce.number().min(0, {
    message: "Inflation rate must be at least 0%" 
  }).max(20, {
    message: "Inflation rate must be at most 20%" 
  }).optional(),
});

export type CalculatorFormValues = z.infer<typeof calculatorSchema>;

type CalculatorFormProps = {
  onCalculate: (results: any) => void;
};

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      principal: 1000000,
      returnRate: 10,
      frequency: "monthly",
      withdrawalType: "amount",
      withdrawalAmount: 10000,
      withdrawalPercentage: 1,
      tenure: 10,
      inflation: false,
      inflationRate: 6,
    },
  });

  const withdrawalType = form.watch("withdrawalType");
  const inflationEnabled = form.watch("inflation");

  const onSubmit = (data: CalculatorFormValues) => {
    const results = calculateSWP(data);
    onCalculate(results);
  };

  useEffect(() => {
    // Validate on mount to trigger initial calculation
    if (form.formState.isValid) {
      onSubmit(form.getValues());
    }
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="principal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-600">
                Principal Amount (₹)
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-neutral-600">₹</span>
                  </div>
                  <Input
                    type="number"
                    className="pl-8"
                    {...field}
                    min={1000}
                  />
                </div>
              </FormControl>
              <FormDescription className="text-xs">
                Minimum ₹1,000
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="returnRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-600">
                Expected Rate of Return (%)
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="number"
                    className="pr-8"
                    {...field}
                    min={1}
                    max={30}
                    step={0.1}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-neutral-600">%</span>
                  </div>
                </div>
              </FormControl>
              <FormDescription className="text-xs">
                Annual rate
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-600">
                Withdrawal Frequency
              </FormLabel>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="radio"
                    id="monthly"
                    checked={field.value === "monthly"}
                    onChange={() => field.onChange("monthly")}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="monthly"
                    className="flex justify-center items-center text-center px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
                  >
                    Monthly
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="quarterly"
                    checked={field.value === "quarterly"}
                    onChange={() => field.onChange("quarterly")}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="quarterly"
                    className="flex justify-center items-center text-center px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
                  >
                    Quarterly
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="yearly"
                    checked={field.value === "yearly"}
                    onChange={() => field.onChange("yearly")}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="yearly"
                    className="flex justify-center items-center text-center px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
                  >
                    Yearly
                  </label>
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="withdrawalType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-600">
                Withdrawal Type
              </FormLabel>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="radio"
                    id="amount"
                    checked={field.value === "amount"}
                    onChange={() => field.onChange("amount")}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="amount"
                    className="flex justify-center items-center text-center px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
                  >
                    Fixed Amount
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="percentage"
                    checked={field.value === "percentage"}
                    onChange={() => field.onChange("percentage")}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="percentage"
                    className="flex justify-center items-center text-center px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
                  >
                    Percentage
                  </label>
                </div>
              </div>
            </FormItem>
          )}
        />

        {withdrawalType === "amount" && (
          <FormField
            control={form.control}
            name="withdrawalAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-neutral-600">
                  Withdrawal Amount (₹)
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-neutral-600">₹</span>
                    </div>
                    <Input
                      type="number"
                      className="pl-8"
                      {...field}
                      min={100}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        )}

        {withdrawalType === "percentage" && (
          <FormField
            control={form.control}
            name="withdrawalPercentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-neutral-600">
                  Withdrawal Percentage (%)
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="number"
                      className="pr-8"
                      {...field}
                      min={0.1}
                      max={20}
                      step={0.1}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-neutral-600">%</span>
                    </div>
                  </div>
                </FormControl>
                <FormDescription className="text-xs">
                  Percentage of your current balance
                </FormDescription>
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="tenure"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-neutral-600">
                Investment Duration (Years)
              </FormLabel>
              <FormControl>
                <Input type="number" {...field} min={1} max={50} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inflation"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-2 border rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-medium text-neutral-600">
                  Adjust for inflation
                </FormLabel>
                <FormDescription>
                  Account for rising costs over time
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {inflationEnabled && (
          <FormField
            control={form.control}
            name="inflationRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-neutral-600">
                  Inflation Rate (%)
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="number"
                      className="pr-8"
                      {...field}
                      min={0}
                      max={20}
                      step={0.1}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-neutral-600">%</span>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        )}

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4"
        >
          Calculate SWP
        </Button>
      </form>
    </Form>
  );
}
