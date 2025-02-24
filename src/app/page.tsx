import Cv from "@/components/cv/page";
import Intro from "@/components/intro/page";
import Projects from "@/components/projects/page";
import Products from "@/components/products/page";
import Youtube from "@/components/youtube/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-20">
        <div className="flex items-center justify-center">
          <Intro />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Youtube />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Cv />
        </div>
      </div>
    </>
  );
}
