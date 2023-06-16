import React, { useState, useEffect } from "react";
import { projects } from "@/data/content/projects";
import { Project } from "types";
import ProjectCard from "./ProjectCard";
import axios from "axios";

type ProjectProps = {
  overwriteProjects?: Project[];
};

const Projects = ({ overwriteProjects }: ProjectProps) => {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  const [projectsDynamic, setProjectsDynamic] = useState(projects);
  console.log(projectsDynamic);

  // useEffect(() => {
  //   axios
  //     .get("https://apparent-chipmunk-86.hasura.app/api/rest/projects")
  //     .then(({ data }) => {
  //       setProjectsDynamic(data.portfolio);
  //       // const formattedData = data.data.map((obj) => {
  //       //   return {
  //       //     ...obj,
  //       //     img: `https://yd7rfuz9.directus.app/assets/${obj.img}`,
  //       //   };
  //       // });
  //       // setProjectsDynamic(formattedData);
  //     });
  // }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsDynamic.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
};

export default Projects;
