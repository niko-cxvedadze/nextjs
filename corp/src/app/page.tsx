import homeImage from "../../public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgAlt="factory" imgData={homeImage} title="This is great factory" />
  );
}
