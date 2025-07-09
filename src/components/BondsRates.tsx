
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const BondsRates = () => {
  const bondsData = [
    {
      bank: "Deutsche Bank",
      logo: "DB",
      logoColor: "bg-blue-600",
      name: "Deutsche Bank 10%",
      yield: "10%",
      rating: "A-",
      ratingColor: "bg-green-100 text-green-700",
      currency: "EUR",
      maturity: "14/11/2049"
    },
    {
      bank: "Barclays",
      logo: "BC",
      logoColor: "bg-blue-500",
      name: "Barclays 9.625%",
      yield: "9.625%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "22/11/2049"
    },
    {
      bank: "Santander",
      logo: "ST",
      logoColor: "bg-red-600",
      name: "Santander 9.625%",
      yield: "9.625%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "21/11/2049"
    },
    {
      bank: "UBS",
      logo: "UBS",
      logoColor: "bg-red-700",
      name: "UBS 9.016%",
      yield: "9.016%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "15/11/2033"
    },
    {
      bank: "JP Morgan",
      logo: "JPM",
      logoColor: "bg-blue-800",
      name: "JP Morgan 8.75%",
      yield: "8.75%",
      rating: "BBB+",
      ratingColor: "bg-yellow-100 text-yellow-700",
      currency: "USD",
      maturity: "01/09/2030"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            High Yield Bond Rates
          </h2>
          <p className="text-xl text-gray-600">
            Premium bond opportunities with competitive yields and ratings
          </p>
        </div>

        <Card className="shadow-lg border-gold/10">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Current Bond Offerings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                  <TableHead className="text-white font-semibold">Bond</TableHead>
                  <TableHead className="text-white font-semibold">Yield</TableHead>
                  <TableHead className="text-white font-semibold">Rating</TableHead>
                  <TableHead className="text-white font-semibold">Currency</TableHead>
                  <TableHead className="text-white font-semibold">Maturity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bondsData.map((bond, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${bond.logoColor} rounded flex items-center justify-center`}>
                          <span className="text-xs font-bold text-white">{bond.logo}</span>
                        </div>
                        <span className="font-medium text-gray-900">{bond.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-red-600 font-bold text-lg">{bond.yield}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`${bond.ratingColor} font-medium`}>
                        {bond.rating}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-gray-700">{bond.currency}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-600">{bond.maturity}</span>
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

export default BondsRates;
