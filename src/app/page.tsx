import ImagePerfil from "@/components/imagePerfil/page"
import Intro from "@/components/intro/page";
import Projects from "@/components/projects/page";

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
      </div>
    </>
  );
}
