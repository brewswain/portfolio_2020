import {
  BleeBoxThumbnail,
  BleeCommerceThumbnail,
  QueeeryThumbnail,
  TclThumbnail,
} from "../assets/IMG";

const ProjectSummary = [
  {
    id: "queeery",
    title: "Queeery",
    imageUrl: QueeeryThumbnail,
    githubUrl: null,
    description:
      "An LGBTQ+ Event Management Platform, made using the MERN stack.",
  },
  {
    id: "the-collab-lab",
    title: "The Collab Lab",
    imageUrl: TclThumbnail,
    githubUrl: "https://github.com/the-collab-lab/tcl-11-smart-shopping-list",
    description:
      "A Self-sorting, smart shopping List built with a focus on collaboration.",
  },
  {
    id: "blee_IO",
    title: "Blee's Box",
    imageUrl: BleeBoxThumbnail,
    githubUrl: "https://github.com/brewswain/blee_IO",
    description:
      "My personal toolbox that contains my commonly used code snippets.",
  },
  {
    id: "blee-commerce",
    title: "BleeCommerce",
    imageUrl: BleeCommerceThumbnail,
    githubUrl: "https://github.com/brewswain/blee-commerce",
    description: "A functional custom eCommerce platform uses Stripe.",
  },
];

export default ProjectSummary;
