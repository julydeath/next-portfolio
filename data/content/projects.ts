import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Learn React",
    desc: "My First react ui/ux project",
    img: "/static/projects/myfirst.png",
    link: "https://firstapp-psi.vercel.app/",
    github: "https://github.com/julydeath/firstapp",
    tags: ["React", "CSS"],
  },
  {
    id: 1,
    title: "To-Do",
    desc: "To-Do app using react and directus",
    img: "/static/projects/todo.png",
    link: "https://todo-tan-five.vercel.app/",
    github: "https://github.com/julydeath/todo",
    tags: ["HTML", "CSS", "Javascript", "React", "Directus"],
  },
  {
    id: 2,
    title: "my Blog",
    desc: "small blog app using react and directus,we can add and delete blog posts.",
    img: "/static/projects/blog.png",
    link: "https://first-blog-omega.vercel.app/",
    github: "https://github.com/julydeath/first-blog",
    tags: ["React", "CSS", "Directus"],
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
    title: "Authentication",
    desc: "Basic auth with sign-up,login,logout feature using firebase",
    img: "/static/projects/auth.png",
    github: "https://github.com/julydeath/first-auth",
    link: "https://first-auth.vercel.app/",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
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

export default projects;
