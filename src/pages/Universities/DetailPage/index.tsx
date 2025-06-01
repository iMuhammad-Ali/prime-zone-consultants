import { Button } from "~/components/ui/button";
import { useAppDispatch } from "~/hooks/redux";
import { openConsultantModal } from "~/store/consultant/consultantSlice";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { Card, CardHeader } from "~/components/ui/card";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import universitiesData from "~/data/universities.json";
import { University } from "~/types/university";

const UniversityDetailPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [university, setUniversity] = useState<University | null>(null);

  const titleStyles = "pl-6 font-semibold";

  useEffect(() => {
    if (id) {
      const found = universitiesData.find((uni) => uni.id === id);
      if (found) {
        setUniversity(found);
      } else {
        navigate("/universities");
      }
    }
  }, [id]);

  if (!university) return null;

  return (
    <section className="pt-32 pb-16">
      <div className="container flex flex-col items-center text-center">
        <div
          className="relative w-full h-[500px] rounded-md overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${university.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-1" />
          <div className="space-y-3 sm:space-y-6 z-10 px-2">
            <h2
              className="text-3xl sm:text-5xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              {university.name}
            </h2>
            <h2
              className="text-xl sm:text-2xl font-semibold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              {university.location}
            </h2>
            <Button
              onClick={() => dispatch(openConsultantModal())}
              className="max-w-[250px] py-6 text-lg bg-background text-foreground hover:bg-background hover:scale-[102%] transition-all duration-300 shadow-md"
            >
              Apply to University
            </Button>
          </div>
        </div>

        <Card className="w-full mt-8">
          <CardHeader className="border-b">
            <h3 className="text-lg font-bold">University Details</h3>
          </CardHeader>
          <Table className="text-lg text-left">
            <TableBody>
              <TableRow>
                <TableCell className={titleStyles}>Location</TableCell>
                <TableCell>{university.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Summary</TableCell>
                <TableCell>{university.summary}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Accommodation</TableCell>
                <TableCell>{university.accommodation}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Intakes</TableCell>
                <TableCell>{university.inTake.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Languages</TableCell>
                <TableCell>{university.languages.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Scholarship</TableCell>
                <TableCell>{university.scholarship ? "Yes" : "No"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Discount</TableCell>
                <TableCell>{university.discount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Discounted Price</TableCell>
                <TableCell>{university.discountedPrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Original Price</TableCell>
                <TableCell>{university.originalPrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Address</TableCell>
                <TableCell>{university.address}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default UniversityDetailPage;
