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
            Rate Discovery
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your investment path
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/fixed-term')}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Fixed Term Products</CardTitle>
              <CardDescription className="text-lg">
                Secure your investments with our fixed term deposit products offering competitive rates and guaranteed returns.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full">
                Explore Fixed Term Products
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/private-equity')}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Private Equity Products</CardTitle>
              <CardDescription className="text-lg">
                Access exclusive private equity opportunities with high growth potential and professional portfolio management.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full">
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