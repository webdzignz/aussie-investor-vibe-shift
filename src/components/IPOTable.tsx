import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const IPOTable = () => {
  const ipoData = [
    {
      company: "SpaceX",
      logo: "/lovable-uploads/0373420a-1f6b-4839-b969-8262802a98ed.png",
      logoColor: "bg-gray-900",
      name: "SpaceX Series N",
      valuation: "$180B",
      sector: "Aerospace",
      sectorColor: "bg-blue-100 text-blue-700",
      sharePrice: "$112",
      expectedIPO: "Q2 2025"
    },
    {
      company: "OpenAI",
      logo: "/lovable-uploads/0fbba8a6-e14b-4a92-b576-62e38d4c60b4.png",
      logoColor: "bg-green-600",
      name: "OpenAI Series C",
      valuation: "$157B",
      sector: "AI Technology",
      sectorColor: "bg-purple-100 text-purple-700",
      sharePrice: "$350",
      expectedIPO: "Q1 2026"
    },
    {
      company: "Revolut",
      logo: "/lovable-uploads/5f571af0-9556-41dc-a8e8-f3bd38d39d4c.png",
      logoColor: "bg-blue-500",
      name: "Revolut Series E",
      valuation: "$45B",
      sector: "Fintech",
      sectorColor: "bg-green-100 text-green-700",
      sharePrice: "$865",
      expectedIPO: "Q4 2024"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pre-IPO Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600">
            Get early access to tomorrow's public companies with our exclusive private equity offerings
          </p>
        </div>

        <Card className="shadow-lg border-gold/10">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Upcoming IPOs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                  <TableHead className="text-white font-semibold">Company</TableHead>
                  <TableHead className="text-white font-semibold">Valuation</TableHead>
                  <TableHead className="text-white font-semibold">Sector</TableHead>
                  <TableHead className="text-white font-semibold">Share Price</TableHead>
                  <TableHead className="text-white font-semibold">Expected IPO</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ipoData.map((equity, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded border flex items-center justify-center overflow-hidden">
                          <img src={equity.logo} alt={equity.company} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-medium text-gray-900">{equity.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-green-600 font-bold text-lg">{equity.valuation}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`${equity.sectorColor} font-medium`}>
                        {equity.sector}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-gray-700">{equity.sharePrice}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-600">{equity.expectedIPO}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IPOTable;