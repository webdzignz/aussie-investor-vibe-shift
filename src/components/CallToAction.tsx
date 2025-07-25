import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const CallToAction = ({ isFixedIncome = false }: { isFixedIncome?: boolean }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Investment form submitted");
  };

  return (
    <section id="get-started-form" className={`py-16 ${isFixedIncome ? 'bg-blue-50' : 'bg-green-800'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${isFixedIncome ? 'text-navy-900' : 'text-white'} mb-2`}>Start Your Journey</h2>
          <p className={`${isFixedIncome ? 'text-navy-700' : 'text-white/90'} text-lg`}>Add details here</p>
        </div>
        <Card className="max-w-6xl mx-auto bg-navy-900 backdrop-blur-sm border-navy-700">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required className="bg-white text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required className="bg-white text-gray-900" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white">Address</Label>
                <Textarea id="address" placeholder="Enter your full address" rows={2} required className="bg-white text-gray-900" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required className="bg-white text-gray-900" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white">Investment Amount (AUD)</Label>
                  <Select required>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Select amount" />
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
                  <Label htmlFor="timeframe" className="text-white">Investment Timeframe</Label>
                  <Select required>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Select timeframe" />
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
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-400 text-white hover:bg-blue-500 text-lg font-semibold">
                Start My Investment Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
