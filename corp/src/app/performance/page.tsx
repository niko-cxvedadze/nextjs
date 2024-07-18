import Hero from "@/components/hero";
import performanceImage from "../../../public/performance.jpg";

export default function PerformancePage () {
  return (
    <Hero
      imgAlt="performance"
      imgData={performanceImage}
      title="This is performance page"
    />
  );
}
