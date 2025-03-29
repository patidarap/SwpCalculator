import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CallToAction from "@/components/layout/CallToAction";

const blogPosts = [
  {
    title: "Understanding Systematic Withdrawal Plans: A Beginner's Guide",
    excerpt: "Learn the basics of SWP and how it can provide a regular income stream while keeping your investments growing.",
    date: "June 15, 2023",
    category: "Beginners",
    readTime: "5 min read"
  },
  {
    title: "SWP vs Annuity: Which Retirement Income Strategy is Right for You?",
    excerpt: "Compare the flexibility, returns, and tax implications of systematic withdrawal plans against traditional annuities.",
    date: "July 2, 2023",
    category: "Retirement",
    readTime: "8 min read"
  },
  {
    title: "The 4% Rule: Is it Still Valid for Systematic Withdrawals?",
    excerpt: "Examining the famous retirement withdrawal strategy in today's economic environment and possible alternatives.",
    date: "July 25, 2023",
    category: "Strategy",
    readTime: "6 min read"
  },
  {
    title: "How to Adjust Your SWP for Inflation",
    excerpt: "Practical strategies to ensure your withdrawal plan keeps up with the rising cost of living over time.",
    date: "August 10, 2023",
    category: "Planning",
    readTime: "7 min read"
  },
  {
    title: "Sequence of Returns Risk: The Hidden Threat to Your Retirement",
    excerpt: "Understanding how the timing of market downturns can dramatically impact your SWP's sustainability.",
    date: "September 5, 2023",
    category: "Risk Management",
    readTime: "9 min read"
  },
  {
    title: "Tax-Efficient Withdrawal Strategies for Your Portfolio",
    excerpt: "Optimize your withdrawal plan to minimize tax burden and maximize after-tax income during retirement.",
    date: "October 12, 2023",
    category: "Taxation",
    readTime: "7 min read"
  }
];

export default function Blog() {
  return (
    <div className="bg-neutral-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">SWP Insights Blog</h1>
            <p className="text-lg text-neutral-600">
              Expert articles, guides, and tips on systematic withdrawal plans and retirement income strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-neutral-500">{post.date}</span>
                  </div>
                  <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                  <span className="text-sm text-neutral-500">{post.readTime}</span>
                  <button className="text-primary font-medium hover:text-primary/80 transition">
                    Read more
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </div>
  );
}
