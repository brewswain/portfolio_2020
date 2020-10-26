const ProjectDetails = [
  {
    title: "Blee's Box",
    id: "blee_IO",
    overview: `Upon realising how often I would re-open old projects and repositories 
    to get some snippets of code/look for a reference point of how a feature-set was implemented, 
    I decided to create a Website that would have these components and even workflows readily stored, 
    thus improving my development experience. The best part is that it'll scale with my career too!`,
    stack: ["React", "Firebase", "SASS"],
    github: "https://www.github.com/brewswain/blee_IO",
    demoUrl: "https://brewswain.github.io/blee_IO/",
    homePagePic: "",
    justification: `The more projects I build, the more I realise the importance of having some snippets of reusable code 
    to make an initial setup smoother.Even though there are myriads of component libraries, there are often small reasons that 
    lead to me wanting to use a specific vision of a component (See: I prefer to know that my personal projects have as much code written 
      directly by me as possible.)`,
    stackDetails_1: `React’s Context API came in really useful here! From theme switching, to populating our SideBar’s dropdown details 
      and storing all of our backend’s data in state on mount, it handled the gamut of challenges I threw at it.`,
    stackDetails_2: `Speaking of our backend, I elected to use firebase to store our information. 
      This was done since I wanted an easy to use storage solution.`,
    fullPageScreenshotUrl: "",
    problems_1: `Funnily enough, Routing gave me a lot of trouble for this app. I’m hosting this project on GitHub-Pages and 
    it apparently doesn’t like routing very much, at all.`,
    problems_2: `
        My initial approach was that, when one of our SideBar elements was clicked, it would set a URL of ‘collection/element’,
     which our element’s page view would then reference to our firestore collection to grab our data from the backend. For instance, clicking ‘Card’ in the 
     ‘Components’ collection would set the URL to ‘components/Card’.`,
    problems_3: `
    Not a really bad approach, but in this case, it didn’t work out due to github-pages’ aforementioned dislike of deeper routing. 
    (I solved the “/” error caused by GitHub-Pages appending our repository name to the end of our URL by adding a ‘baseName’ value
       to our BrowserRouter component by the way, check out src/index.js to see what I mean).`,
    problems_4: `
    In order to allow our page to work correctly and populate with info, I had to redo that approach to where clicking the sidebar 
    would simply set state that was once again referenced to our firestore collection. This got rid of us using a nested URL eg: “/components/CustomButton/” became
     “/components”.`,
    lessons: `This was the project that really cemented my comfort level with context API. I used it for theming, Sidebar and Page population, and even a global isLoaded flag. 
    The problems I encountered above also helped improve my speed with debugging “but it worked in dev” style errors as shown by the whole Routing debacle`,
    lessonsEmoji: `🤡`,
    lessonsEmojiLabel: `clown emoji`,
  },
  {
    title: "queeery",
    id: "queeery",
    overview: ``,
    stack: ["React", "Firebase"],
    github: "",
    demoUrl: "",
    homePagePic: "",
    justification: ``,
    fullPageScreenshotUrl: "",
    problems_1: ``,
    lessons: ``,
  },
  {
    title: "the-collab-lab",
    id: "the-collab-lab",
    overview: ``,
    stack: ["React", "Firebase"],
    github: "",
    demoUrl: "",
    homePagePic: "",
    justification: ``,
    fullPageScreenshotUrl: "",
    problems_1: ``,
    lessons: ``,
  },
  {
    title: "blee-commerce",
    id: "blee-commerce",
    overview: ``,
    stack: ["React", "Firebase"],
    github: "",
    demoUrl: "",
    homePagePic: "",
    justification: ``,
    fullPageScreenshotUrl: "",
    problems_1: ``,
    lessons: ``,
  },
];

export default ProjectDetails;
