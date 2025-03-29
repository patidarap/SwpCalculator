import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send 
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-neutral-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Contact Us</h1>
            <p className="text-lg text-neutral-600">
              Have questions about systematic withdrawal plans or need help with our calculator? We're here to assist you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-neutral-600 mb-2">For general inquiries and support</p>
                <a href="mailto:support@swpcalculator.com" className="text-primary font-medium">
                  support@swpcalculator.com
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-neutral-600 mb-2">Mon-Fri, 9am-5pm</p>
                <a href="tel:+1234567890" className="text-primary font-medium">
                  +1 (234) 567-890
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-neutral-600 mb-2">Our office location</p>
                <address className="text-primary font-medium not-italic">
                  123 Financial Street, Suite 456
                </address>
              </CardContent>
            </Card>
          </div>
          
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-primary text-white p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                </div>
                <p className="mb-8 opacity-90">
                  Fill out the form and our team will get back to you within 24 hours. We're ready to answer your questions about SWP and investment planning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="opacity-90">support@swpcalculator.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="opacity-90">+1 (234) 567-890</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-600 mb-1">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-1">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-600 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-600 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
