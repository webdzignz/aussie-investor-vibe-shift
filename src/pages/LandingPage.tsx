import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Building } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            The <span className="font-ink-free">Rate</span> Move
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your investment path
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700" onClick={() => navigate('/fixed-term')}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-300 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-blue-900" />
              </div>
              <CardTitle className="text-2xl text-white">Fixed Term Products</CardTitle>
              <CardDescription className="text-lg text-blue-100">
                Secure your investments with our fixed term deposit products offering competitive rates and guaranteed returns.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full bg-blue-300 hover:bg-blue-200 text-blue-900">
                Explore Fixed Term Products
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-green-800 to-green-900 border-green-700" onClick={() => navigate('/private-equity')}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-yellow-400 rounded-full w-fit">
                <Building className="h-8 w-8 text-green-900" />
              </div>
              <CardTitle className="text-2xl text-white">Private Equity Products</CardTitle>
              <CardDescription className="text-lg text-green-100">
                Access exclusive private equity opportunities with high growth potential and professional portfolio management.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full bg-yellow-400 hover:bg-yellow-300 text-green-900">
                Explore Private Equity Products
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;