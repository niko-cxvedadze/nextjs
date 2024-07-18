import Hero from "@/components/hero";
import scaleImage from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero imgAlt="scale" imgData={scaleImage} title="This Is Scale Page" />
  );
}
