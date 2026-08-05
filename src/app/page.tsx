import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main
      id="top"
      className="mx-auto max-w-[46rem] px-6 py-14 sm:px-8 sm:py-20"
    >
      <Header />
      <div className="mt-16 space-y-14">
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </div>
    </main>
  );
}
