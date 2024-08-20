import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "./",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "./",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "./",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase-gradient-text font-semibold">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col gap-20 mt-10">
          {portfolioProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8"
            >
              <div className="uppercase-gradient-text inline-flex gap-2 text-sm font-bold">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-2 mt-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Live Site</span>
                  <ArrowUpRightIcon className="size-4 " />
                </button>
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
