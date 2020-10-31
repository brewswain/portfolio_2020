import {
  BleeBoxHero,
  BleeBoxLarge,
  BleeCommerceHero,
  BleeCommerceLarge,
  QueeeryHero,
  QueeeryLarge,
  TclHero,
  TclLarge_1,
  TclLarge_2,
} from "../assets/IMG";

const ProjectDetails = [
  {
    title: "Blee's Box",
    id: "blee_IO",
    overview: `A personal component/workflow snippet based website that allows me to easily grab commonly used code during a project's creation. The best part
    about this application is that this'll scale with my career as I'm always going to be adding or improving upon the snippets shown so far!`,
    stack: ["React", "Firebase", "SASS"],
    github: "https://www.github.com/brewswain/blee_IO",
    demoUrl: "https://brewswain.github.io/blee_IO/",
    homePagePic: BleeBoxHero,
    justification: `The more projects I build, the more I realise the importance of having some snippets of reusable code 
    to make an initial setup smoother.Even though there are myriads of component libraries, there are often small reasons that 
    lead to me wanting to use a specific vision of a component (See: I prefer to know that my personal projects have as much code written 
      directly by me as possible.)`,
    stackDetails_1: `React’s Context API came in really useful here! From theme switching, to populating our SideBar’s dropdown details 
      and storing all of our backend’s data in state on mount, it handled the gamut of challenges I threw at it.`,
    stackDetails_2: `Speaking of our backend, I elected to use firebase to store our information. 
      This was done since I wanted an easy to use storage solution.`,
    fullPageScreenshotUrl: BleeBoxLarge,
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
    title: "Queeery",
    id: "queeery",
    overview: `An LGBTQ+ facing Event Management Platform, built using the MERN stack. This Platform aims to provide a safe space for the LGBTQ+ community, as well as the tacit
    knowledge that this platform will put the community first, due to it not being built by a heteronormative core-group of engineers. I am incredibly proud to 
    have been a part of the Queeery team.`,
    stack: ["MongoDB", "Express", "React", "Node.JS", "Stripe"],
    github: null,
    demoUrl: "https://www.queeery.com",
    fullPageScreenshotUrl: QueeeryLarge,
    homePagePic: QueeeryHero,
    justification_1: `Surprisingly enough, there really aren't that many LGBTQ+ centric event-management platforms. Enter:`,
    justificationLink: `@Dayanalorza`,
    justificationUrl: "https://www.twitter.com/Dayanalorza",
    justification_2: `With a vision of a platform that focuses 
    on our own slice of humanity...emphasis on humanity. Dayana's vision includes ethics always being at the forefront of our product development, and that consideration alone makes it a 
    worthy contender to the event management market. Combined with cutting-edge technologies, a slew of improvements to be made to the current standard of event management experience,
    and a willingness to adapt to circumstances of this modern world, especially this year? Queeery's a powerhouse just waiting to blow up.
    (This isn't a sponsored statement btw I just really believe in Queeery)`,

    stackDetails_1: `Being able to work on a full MERN stack codebase is incredibly exciting. There's so much functionality that came in useful, particularly when it came to implementing
    Stripe into this codebase.`,
    stackDetails_2: `Stripe's functionality was my major focus, as my goal was to set up stripe onboarding with our event Promoters to allow for a seamless experience. The 
    flexibility that MERN offers allowed us to use Express to make calls to a MongoDB backend, then co-ordinate with Stripe's API. Nice!`,

    problems_1: `A lot of my problems with the stripe implementation in particular came in the form of simply misunderstanding what approach to use. You see, Stripe Connect refers to a 
    set of APIs that facilitates payments for platforms and markets.`,
    problems_2: `This is pretty powerful, but this also means that Stripe's documentation naturally fragmented a bit here, as they wanted to maintain support for older approaches of 
    using connect. I had a LOT of trouble navigating back and forth between implementations that stripe offered for this, and eventually, I called in the cavalry.`,
    problems_3: `After getting in a conversation with my boss about the blocks I was dealing with, we set up some collaboration between a more back-end specialized engineer and I, and 
    we tackled the problem by simply discussing how we could best incorporate our backend into the Stripe Connect approach that we elected to implement.`,
    problems_4: `Within a week we solved everything! Once we firmly decided on the path we were going forward, the documentation's fragmentation was no longer that big a deal
     because we already had our approach worked out. This was probably the most enriching experience I've had as a developer, as I got to understand how open collaboration can make
     solving issues way more manageable.`,
    lessons_1: `"I had a LOT of trouble navigating back and forth between implementations that stripe offered for this, and eventually, I called in the cavalry.". `,
    lessons_2: `This is the lesson I definitely     learned from this project. I shouldn't have waited so long to admit that I couldn't figure out the solution to a problem, 
    especially for an implementation as important as this. Admitting I'm wrong didn't feel like if I was proclaiming my incompetence, it felt like I was making the correct decision! 
    This is one of those concepts that you see everywhere, but I think you need to experience it to really understand the importance of simply knowing when to effectively ask for help with your blocks.`,
  },
  {
    title: "Smart Shopping List with The Collab Lab!",
    id: "the-collab-lab",
    overview: `A Shopping list that automatically sorts itself depending on when it's estimated that a user will repurchase items. It requires a couple purchases to begin making 
    estimations, and uses Google's Firestore backend to store shopping lists.`,
    stack: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/the-collab-lab/tcl-11-smart-shopping-list",
    demoUrl: "https://amazing-noether-6c5afb.netlify.app/",
    homePagePic: TclHero,
    justification: `The brainchild of Andrew Hedges, The Collab Lab seeks to help Software Engineers get experience in working inside of a team environment. 
    I bring this up as it's a core aspect of this project, and in this case, I actually view the code itself as being secondary. 
    This project was made to emphasize collaboration with rotating team members, aid understanding of how to leverage Mentors(aka more senior staff) to help remove blocks, 
    learn to give good, informative, and concise project demos, and understand how to make effective Pull Requests.`,
    fullPageScreenshotUrl: null,
    heroPicUrl_1: TclLarge_1,
    heroPicUrl_2: TclLarge_2,
    stackDetails_1: `As this was a team project, the stack was kept pretty simple to help minimize Technical debt. React and Firebase were used to handle our 
    frontend and backend respectively, with Firebase being an excellent choice for this style of project, since it offers a subscription flow to give our frontend real-time updates. `,
    stackDetails_2: `Material-UI being used was also following the same technical debt approach, in that multiple aspects of our UI were now sharing the same approach, 
    which meant that it was easy to move from one part of the codebase to the next.`,
    problems_1: `It's really hard for me to say that there were any Major problems from a technical point with this project, as everyone in our group boasted a solid understanding 
    of development, and any problems that i was set on often ended up being resolved fairly simply, with mentors present to help when we hit any blocks.
    `,
    problems_2: `The problems that we solved, however, were more project-flow oriented. We eventually hit the dreaded PR Merge conflict metropolis, in which we had maybe 4
     outstanding Pull Requests, each with conflicting merges being brought in. This was due to us actually having one major Divergent approach to how one of our Views was 
     being rendered. This took a definite toll, as we were on a schedule of shipping our changes on a weekly basis.`,
    problems_3: `As a team, we decided to re-prioritize to fixing the health of our PRs, and therefore our main branch, in order to help our progress later down the line. We dedicated
    the majority of a week to just fixing all merge conflicts, decided on the approach we would be rendering the problematic View with, and set a stricter timeline on ourselves 
    for merging our outstanding pulls.`,
    problems_4: `Once we cleared everything up and began keeping a closer eye on our PRs, the process became a lot smoother, and overall, working on this project was a rare pleasure.`,
    lessons_1: `Establishing a team flow is only part of the solution here. The real lesson was that being in a team environment also means that there needs to be some form of team-accountability 
    set into place, as there were definitely segments where I assumed that the other pair would solve a problem, while they assumed the same from my current pair. 
    Maintaining a macro-awareness of the status of our project would have made these issues be a lot smaller. This is a lesson I've definitely already leaned 
    on and will doubtless continue to do so.
     `,
    lessons_2: `Related to that point, I realised that my communication needed to be a bit more public facing, so that the rest of the team could have 
     context on whatever issues we were running into.`,
  },
  {
    title: "blee-Commerce",
    id: "blee-commerce",
    overview: `A fully functioning eCommerce platform, this application uses serverless functions from Google Firebase's end to make calls to stripe's API, 
    facilitating our purchase calls.`,
    stack: ["React", "Firebase", "Redux", "Serverless Functions", "Stripe"],
    github: "https://github.com/brewswain/blee-commerce",
    demoUrl: "https://blee-commerce.web.app/",
    homePagePic: BleeCommerceHero,
    justification: `This app represented my first foray into making complex, full-stack applications. As such, there are definite improvements that could be made, but I like 
    having it serve as a reminder of where I truly began as a React developer. This project serves as a physical manifestation of my dedication, my passion, and my willingness to
    take the scariest step I've ever made in my life; a step towards uncertainty in the hope of becoming a Software Engineer. From a more technical point of view, this is also an 
    app that taught me how to fully delve into technical documentation, and solve problems that weren't directly laid out for me.`,
    fullPageScreenshotUrl: BleeCommerceLarge,
    stackDetails_1: `For a project this ambitious, React was chosen in combination with Redux to provide me with the freedom of a fleshed out state management system, 
    as we had a lot of little moving parts integrated. Firebase was chosen here instead of using a traditional Express/Node backend for the main reason that I didn't want to use 
    Heroku due to the way their dynamos worked on initial page load.`,
    stackDetails_2: `This decision was also made as a way to challenge myself, as I wanted to escape my comfort zone and learn to fully integrate Firebase into a project, 
    including using Serverless functions to make my calls to backend APIs. `,
    problems_1: `My initial model for this application used Express/Node.JS as a backend, so mentally converting my implementation into one with technology I was unfamiliar with 
    was definitely a huge challenge. Super fun one though!`,
    problems_2: `Firstly, I had to take some time to learn how serverless functions actually worked. Once I figured that out, I had to decide on how to trigger them in the most
    practical way, and build my purchase flow around that.`,
    problems_3: `At the same time, I was learning about sending transactional emails, so I decided to use an approach where on purchase, I'd make a collection inside my backend that would
    include all the needed information for stripe (At that time, Stripe was still using Token based purchases).`,
    problems_4: `This solution used a firebase method that searched for whenever I made a purchase collection, then would make a stripe makePurchase call using the information 
    that was added to the collection in question. Pretty neat!`,
    lessons_1: `To be frank, this entire application was a big lesson for me. I learned to challenge my conceptions of what I wanted to build, I learned to change that conceived model 
    into a new one that would solve my requirements. I learned how to learn new technologies on the fly and extrapolate just the information I needed to make my implementation worked.
    Most of all, I learned how much I really love Development!`,
    lessons_2: ` The infinite possibilities that reside within our minds as developers allows us access to an almost magical world of concept and execution. This project really taught me how powerful properly applied 
    concepts and imagination can be, and that it's impossible to overstate how important finding your comfort zone, then back-flipping out of it, is in order to truly make 
    something that you're proud of.`,
  },
];

export default ProjectDetails;
