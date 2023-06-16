import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Manoj Tour",
    desc: "My First react ui project using taiwindcss",
    img: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://two-tailwind.vercel.app/",
    github: "https://github.com/julydeath/two-tailwind",
    tags: ["react", "tailwind"],
  },
  {
    id: 1,
    title: "To-Do",
    desc: "To-Do app using react,tailwind and hasura cms and firebase auth",
    img: "https://images.unsplash.com/photo-1641154706848-fe27fd366032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://todo-list-weld-phi.vercel.app/",
    github: "https://github.com/julydeath/todo-list",
    tags: ["react", "tailwindcss", "hasura", "firebase",],
  },
  {
    id: 2,
    title: "Education",
    desc: "Project for online learning.",
    img: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://edu.kmanoj.in/",
    github: "https://github.com/julydeath/demo",
    tags: ["react", "chakraui", "firebase","hasura","railway"],
  },
  {
    id: 3,
    title: "Birthday-reminder",
    desc: "A small project for birthday reminder",
    img: "/static/projects/bdayreminder.png",
    link: "https://projects-lake.vercel.app/",
    tags: ["React", "CSS"],
  },
  {
    id: 4,
    title: "Calculator",
    desc: "Basic calculator app",
    img: "https://plus.unsplash.com/premium_photo-1680721445122-a61ab431cf8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://calculator-react-tailwind-one.vercel.app/",
    github: "https://github.com/julydeath/calculator-react-tailwind",
    tags: ["react", "javascript", "tailwind"],
  },
  {
    id: 5,
    title: "Notes",
    desc: "Notes talking project in react",
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    link: "https://react-notes-tan.vercel.app/",
    github: "https://github.com/julydeath/react-notes",
    tags: ["React", "tailwind"],
  },
  {
    id: 6,
    title: "Shoping cart",
    desc: "shopping cart project using react with usereducer",
    img: "https://images.unsplash.com/photo-1605043145565-51b91a0878dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://shopping-cart-reducer-ebon.vercel.app/",
    github: "https://github.com/julydeath/shopping-cart-reducer",
    tags: ["react", "tailwind"],
  },
  {
    id: 7,
    title: "ui project",
    desc: "react and tailwind project",
    img: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80",
    link: "https://one-tailwind.vercel.app/",
    github: "hhttps://github.com/julydeath/one-tailwind",
    tags: ["react", "tailwind"],
  },
  {
    id: 8,
    title: "Reviews",
    desc: "Reviews project using react",
    img: "/static/projects/reviews.png",
    link: "https://reviews-green.vercel.app/",
    github: "https://github.com/julydeath/projects/tree/reviews",
    tags: ["React", "CSS"],
  },

];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export { projects };
