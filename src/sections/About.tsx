import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookCover from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScript from "@/assets/icons/javascript.svg";
import HTML5 from "@/assets/icons/html5.svg";
import CSS3 from "@/assets/icons/css3.svg";
import ReactJS from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import NodeJS from "@/assets/icons/nodejs.svg";
import AWSd_3 from "@/assets/icons/aws.svg";
import DigitalOcean from "@/assets/icons/digital-ocean.svg";
import Git from "@/assets/icons/git.svg";
import Database from "@/assets/icons/database.svg";
import Docker from "@/assets/icons/docker.svg";
import CloudFlare from "@/assets/icons/cloudflare.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScript,
  },
  {
    title: "NodeJS",
    iconType: NodeJS,
  },
  {
    title: "DBMS",
    iconType: Database,
  },
  {
    title: "ReactJS",
    iconType: ReactJS,
  },
  {
    title: "AWS",
    iconType: AWSd_3,
  },
  {
    title: "Digital Ocean",
    iconType: DigitalOcean,
  },
  {
    title: "Docker",
    iconType: Docker,
  },
  {
    title: "HTML5",
    iconType: HTML5,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "Chrome",
    iconType: Chrome,
  },
  {
    title: "Git",
    iconType: Git,
  },
  {
    title: "Github",
    iconType: Github,
  },
  {
    title: "Cloudflare",
    iconType: CloudFlare,
  },
];

const hobbies = [
  {
    title: "Gardening",
    emoji: "🌱",
    left: "5%",
    top: "5%",
  },
  {
    title: "Dreaming",
    emoji: "💤",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🏏",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "75%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "75%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into My World "
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookCover} alt={"Book Cover"} />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="  Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 ">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image
                src={mapImage}
                alt={"Map"}
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt={"Smiling emoji"}
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
