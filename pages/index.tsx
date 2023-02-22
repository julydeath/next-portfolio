import React, { useState, useEffect, createContext } from "react";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import axios from "axios";
import { Project } from "types";

// type Context = {
//   id: number;
//   title: string;
//   desc: string;
//   img: string;
//   link: string;
//   github: string;
//   tags: string[];
// };

export const Usercontext: any = createContext<Project | null>(null);

export default function Home() {
  const [projectsDynamic, setProjectsDynamic] = useState([]);

  useEffect(() => {
    axios
      .get("https://yd7rfuz9.directus.app/items/projects")
      .then(({ data }) => {
        const formattedData = data.data.map((obj) => {
          return {
            ...obj,
            img: `https://yd7rfuz9.directus.app/assets/${obj.img}`,
          };
        });
        setProjectsDynamic(formattedData);
      });
  }, []);

  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Usercontext.Provider value={projectsDynamic}>
          <Projects />
        </Usercontext.Provider>
        <Skills />
      </div>
      <CTA />
    </Page>
  );
}
