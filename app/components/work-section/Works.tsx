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
    {
      title: "Faculty Leave Management",
      gitLink: "https://github.com/DurgaPydahSoft/PYDAH-FACULTY-LMS",
      liveLink: "https://pydah-faculty-lms.vercel.app/", // Add your actual live link here
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
      liveLink: "https://hms.pydahsoft.in/", // Add your actual live link here
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
    {
      title: "Stationery Management",
      gitLink: "https://github.com/DurgaPydahSoft/STATIONARY-MANAGEMENT", // Add your actual repo URL
      liveLink: "https://pydah-stationary-management.vercel.app/",
      about: "PWA for Pydah Group: stationery inventory and student issuance with features like role-based dashboards, stock management, transaction queuing, and receipt printing with seamless sync.",
      stack: [
        "react",
        "vite",
        "node.js",
        "mongodb",
        "pwa",
      ],
      img: "/stationery-management.jpg", // Add appropriate image
      owner: "Educational Institution",
    }
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
