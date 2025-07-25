
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const BondsRates = () => {
  const bondsData = [
    {
      bank: "Deutsche Bank",
      logo: "/lovable-uploads/2a11e205-6972-4211-810a-a0511eb86512.png",
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
      logo: "/lovable-uploads/c6276a68-db62-4bd5-b3e8-eedc1d2c7f13.png",
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
      logo: "/lovable-uploads/4dcaf7c3-9230-4b8d-b0b3-384f45a53768.png",
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
      logo: "/lovable-uploads/910b2a2f-c249-4fbb-aa16-21fa6f50fc1e.png",
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
      logo: "/lovable-uploads/0bf80c5a-0c53-4f79-b182-66cb126ebc15.png",
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
              Best Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-navy-900 text-white hover:bg-navy-900">
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
                        <div className="w-10 h-10 bg-white rounded border flex items-center justify-center">
                          <img src={bond.logo} alt={bond.bank} className="w-8 h-8 object-contain" />
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
