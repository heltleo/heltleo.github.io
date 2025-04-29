import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "bizdi",
    category: "Buy And Sell Businesses All In One Place",
    title: "Bizdi",
    src: "/assets/projects-screenshots/bizdi/bizdi.PNG",
    screenshots: ["bizdi.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://bidzi.io/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Bidzi: Buy And Sell Businesses All In One Place
          </TypographyP>
          <TypographyP className="font-mono ">
            Bidzi is your one-stop solution for selling or buying all kinds of businesses. From creating listings to completing the acquisition and selling the ownership, the process of selling your business venture has never been this easy. Bidzi not only enables you to buy ownership with ridiculous ease, but it is also your go-to choice for any kind of legal help pertaining to the process.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">List </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/bizdi/bizdi_list.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">How works </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/bizdi/bizdi_how_works.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">About </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/bizdi/bizdi_about.PNG`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Coupon site",
    title: "Coupon Luxury",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.couponluxury.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            CouponLuxury is your go-to destination for snagging the best deals
            without lifting a finger. Whether you&apos;re hunting for the latest
            discounts or trying to save a buck at your favorite stores,
            CouponLuxury&apos;s got you covered.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
          <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "buzznog",
    category: "Entertainment",
    title: "Buzznog",
    src: "/assets/projects-screenshots/buzznog/buzznog.PNG",
    screenshots: ["buzznog.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://www.buzznog.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Buzznog: Entertainment
          </TypographyP>
          <TypographyP className="font-mono ">
            This powerful platform delivers meaningful experiences to fans thanks to its laser-focused data analysis. Buzznog empowers entertainment properties, artists, and brands to create deeper connections with their audience.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Home </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/buzznog/buzznog_home.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Benefit </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/buzznog/buzznog_bebefit.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Feature </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/buzznog/buzznog_feature.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Activation </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/buzznog/buzznog_activation.PNG`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dasma",
    category: "Wedding Plan & Management",
    title: "MyDasma",
    src: "/assets/projects-screenshots/dasma/mydasma.PNG",
    screenshots: ["mydasma.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.chakra,
      ],
      backend: [
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://mydasma.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            MyDasma: Wedding Plan and Management
          </TypographyP>
          <TypographyP className="font-mono ">
            MyDasma offers a comprehensive platform to transform your dream wedding into a reality while enabling wedding planning businesses to showcase their services and engage with prospective clients.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Shop </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/dasma/shop.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Restaurant </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/dasma/restaurant.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Offer </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/dasma/offer.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Blog </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/dasma/blog.PNG`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "joinbatch",
    category: "Health Care(AR)",
    title: "JoinBatch",
    src: "/assets/projects-screenshots/joinbatch/joinbatch.PNG",
    screenshots: ["joinbatch.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://joinbatch.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Dental Batch: Health Care
          </TypographyP>
          <TypographyP className="font-mono ">
            It serves as a bridge between dental clinics and dentists, providing a digital venue for job postings and applications.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Job </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/joinbatch/joinbatch_job.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Employer </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/joinbatch/joinbatch_employer.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Price </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/joinbatch/joinbatch_price.PNG`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "stablehub",
    category: "Livestock Management",
    title: "Stablehub",
    src: "/assets/projects-screenshots/stablehub/stablehub.PNG",
    screenshots: ["stablehub.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://stablehub.ca/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            StableHub: Livestock Management
          </TypographyP>
          <TypographyP className="font-mono ">
            While it might sound simple, ensuring seamless communication between trainers and owners of horses is a tedious task. This is where Stable Hub comes into play. It is a revolutionary platform that enables a world-class stable ownership experience. As a horse trainer, sending personalized updates and professional info about the stable to the owner has never been easier. It also allows you to keep track of your day-to-day activities and schedule your appointments at will.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">News </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/stablehub/stable_news.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Subscription </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/stablehub/stablehub_subscription.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Tutorial </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/stablehub/stablehub_tutorial.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">FAQ </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/stablehub/stablehub_faq.PNG`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">About </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/stablehub/stablehub_about.PNG`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
