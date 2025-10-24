"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/PYDAHSOFT-LOGO.png", // You'll need to add this image
    jobTitle: "Software Developer",
    company: "PydahSoft",
    jobType: "Full-time",
    duration: "Oct 2024 - Present",
    stuffIDid: [
      "Developing scalable web applications using modern technologies and best practices",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing responsive UI components and optimizing application performance",
      "Working on full-stack development projects with focus on user experience and code quality",
    ],
  },
  {
    companyImg: "/LINTA.jpg", // You'll need to add this image
    jobTitle: "Web Development Intern",
    company: "Linta Technologies",
    jobType: "Remote Internship",
    duration: "Dec 2023 - May 2024",
   stuffIDid: [
  "Developed high-performance MERN stack applications with MongoDB integration, reducing load times by 50% and supporting 1000+ concurrent users",
  "Implemented pre-configured testing frameworks, achieving 95% code coverage, ensuring application reliability, and reducing bug reports by 30%",
  "Optimized database performance through indexing and query optimization, improving query response times by 40%",
],
  },
  {
  companyImg: "/excelr-logo.jpg",
  jobTitle: "Cloud & DevOps Computing Intern", 
  company: "ExcelR",
  jobType: "Remote Internship",
  duration: "July 2024 - Aug 2024",
  stuffIDid: [
    "Deployed and managed applications on AWS cloud infrastructure using EC2 and S3 services",
    "Implemented DevOps practices including CI/CD pipelines for automated testing and deployment",
    "Maintained cloud infrastructure with minimal downtime and error-free operations",
    "Configured development environments and collaborated using VS Code and GitHub",
  ],
}

];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
