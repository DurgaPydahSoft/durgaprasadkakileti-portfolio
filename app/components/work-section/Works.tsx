import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    // {
    //   title: "Quiklearn",
    //   liveLink: "https://quiklearn.app/",
    //   about:
    //     "Starting out as my university final year project, Quiklearn is an AI-powered tool, that creates quizzes and voice-enabled flashcards from course PDFs with a focus on usability and accessibility. This app has served well over twenty-five students helping them to assimilate and retain what they study better.",
    //   stack: [
    //     "next.js",
    //     // "typescript",
    //     "daisy ui",
    //     "supabase",
    //     "artificial intelligence",
    //   ],
    //   img: "/quiklearn.svg",
    //   owner: "Quiklearn",
    // },
    // {
    //   title: "NiJASIT",
    //   liveLink: "https://nijasit.vercel.app/",
    //   about:
    //     "Leading the development efforts of the Nigerian Journal of Applied Science and Innovative Technology (NiJASIT)—a journal that aims to showcase African research to the global field and contribute to the world's knowledge base on science and technology—we delivered a fast, SEO-compliant journal that contributes to research on a global scale.",
    //   stack: ["next.js", "javascript", "shadcn ui", "tailwindcss"],
    //   img: "/nijasit.svg",
    //   owner: "Bells Uni",
    // },
    // {
    //   title: "Offset Africa",
    //   liveLink: "https://offsetcomms.africa/",
    //   about:
    //     "Offset Communications Africa’s website really allows them to stand out in the PR sector. It shows their works and case studies — highlighting their expertise and educating users about the company philosophy.",
    //   stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
    //   img: "/offset-folio.svg",
    //   owner: "Offset",
    // },
    
    // {
    //   title: "Where in the world",
    //   gitLink: "https://github.com/adex-hub/where-in-the-world",
    //   liveLink: "https://where-in-the-world-ade.netlify.app/",
    //   about:
    //     "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
    //   stack: ["react", "react-router", "javascript", "tailwindcss"],
    //   img: "/witw.svg",
    // },
    {
      title: "Faculty Leave Portal",
      gitLink: "https://github.com/DurgaPydahSoft/PYDAH-FACULTY-LMS",
      liveLink: "https://hms.pydahsoft.in/", // Add your actual live link here
      about:
        "Full-stack leave management system with automated approval workflows, role-based dashboards for faculty and admins, and real-time tracking. Streamlined leave operations and reduced manual errors by 70%. .",
       stack: [
        "node.js",
        "react",
        "mongodb",
        "aws s3"
      ],
      img: "/leave-management.jpg", // You might want to add an appropriate image
      owner: "Educational Institution",
    },
    {
      title: "Hostel Connectify",
      liveLink: "#", // Add your actual live link here
      about:
        "Comprehensive hostel management platform serving 400+ users with room allocation, complaint tracking, and role-based dashboards. Streamlined operations with real-time alerts and maintenance tracking.",
      stack: [
        "react",
        "vite",
        "node.js",
        "mongodb"
      ],
      img: "/hostel-connectify.jpg", // You might want to add an appropriate image
      owner: "Hostel Management",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
        />
      ))}

      <Timeline />
    </section>
  );
}
