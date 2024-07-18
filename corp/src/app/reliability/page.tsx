import Hero from "@/components/hero";
import reliabilityImage from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgAlt="reliability"
      imgData={reliabilityImage}
      title="This is reliability page"
    />
  );
}
