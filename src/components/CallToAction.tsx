
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Star } from "lucide-react";

const CallToAction = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Investment form submitted");
  };

  return (
    <section className="py-20 aussie-gold-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
            ))}
          </div>
          <p className="text-green-100 text-lg mb-6">
            "Trusted by over 100,000 Australian investors"
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Fill out the form below and one of our investment specialists will contact you within 24 hours.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Start Your Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter your full address" rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Investment Amount (AUD)</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100000+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Investment Timeframe</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">6 months</SelectItem>
                    <SelectItem value="1year">1 year</SelectItem>
                    <SelectItem value="2years">2 years</SelectItem>
                    <SelectItem value="3years">3 years</SelectItem>
                    <SelectItem value="5years">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold">
                Start My Investment Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-green-100 mt-12">
          <div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">$0</div>
            <div>Account fees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div>Customer support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">100k+</div>
            <div>Happy investors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
