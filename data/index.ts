export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skill" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: `I am a passionate Frontend Developer with 2 years of experience crafting modern, user-focused web applications. At Lysto, I honed my skills in delivering high-impact projects, collaborating across teams, and meeting tight deadlines. I thrive on creating intuitive and visually engaging experiences and am eager to bring my expertise to a dynamic new role.`,
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Next Js E-commerce web Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Animated Lysto Landing Page",
    des: "Built landing page animations using GSAP, improving user engagement mplemented GSAP-powered animations, boosting landing page engagement metrics by 40%",
    img: "/lysto_landing_page.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/next.svg"],
    link: "lysto.gg",
  },
  {
    id: 2,
    title: "Tournament registration Flow and Create Tournament Flow",
    des: "Designed and implemented the tournament registration flow using Next.js and Redux for efficient state management, ensuring seamless user interaction and robust application performance",
    img: "/lysto_tournament.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://lysto.gg/tournaments/upcoming",
  },
  {
    id: 3,
    title: "Lysto Playtester Controls Feature ",
    des: "Developed the Playtester Controls feature, enhancing user control and management.",
    img: "/playtest_controls.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://lysto.gg/playtest-app-download",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Developed the 'Create Community' flow and 'Community Profile' page using Next.js (v14), Redux, Tailwind CSS, and Material-UI, enhancing community-building functionality and user engagement on the platform.",
    img: "/lysto_community_page.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://lysto.gg/communities",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front-End Developer Lysto",
    desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/lystosmall.png",
  },
  {
    id: 2,
    title: "Front-End Developer Apprenticeship - Lysto",
    desc: "Developed Game Card And Team Card for Desktop and Mobile view in  Next Js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/lystosmall.png",
  },

  {
    id: 4,
    title: "Intern Web-Developer",
    desc: "Developed Portfolio and Dental Project in Rect js.",
    className: "md:col-span-2",
    thumbnail: "/besant.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Kuldeep755",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kuldeep-jat-7251291a1",
  },
  {
    id: 3,
    img: "/wha.svg",
    link: `https://wa.me/${8875522755}?text=${encodeURIComponent(
      "Hello, I would like to connect with you!"
    )}`,
  },
];
