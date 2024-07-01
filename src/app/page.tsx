import Cv from "@/components/cv";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-20">
        <div className="flex items-center justify-center">
          <Intro />
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
