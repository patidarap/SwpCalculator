import { LineChart } from "lucide-react";
import { Link } from "wouter";
import { 
  FaTwitter, 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LineChart className="h-5 w-5" />
              <h3 className="font-bold text-lg">SWP Calculator</h3>
            </div>
            <p className="text-neutral-300 text-sm">
              A comprehensive tool to plan your systematic withdrawals and visualize your investment growth over time.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About SWP
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Investment Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Tax Implications
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Financial Glossary
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-neutral-300 text-sm">
              Subscribe to our newsletter for financial tips and updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SWP Calculator. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: This calculator is for informational purposes only and not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
