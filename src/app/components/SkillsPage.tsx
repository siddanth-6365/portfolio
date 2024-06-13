import { skills } from "@/data";
import Skill from "@/components/Skills";

const Skills = () => {
  return (
    <div className="relative">
        <h1 className="text-center text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-4">
                Skills
            </h1>
      <p className="text-center  text-xl sm:text-2xl mb-6 font-bold">
        Tools I work with{" "}
      </p>
      <div className="flex gap-[1rem] relative  flex-wrap items-center justify-center">
        {skills.map((s) => (
          <Skill key={s.url} skill={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;