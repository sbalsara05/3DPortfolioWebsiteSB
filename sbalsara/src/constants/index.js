import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    IClogo,
    F1Logo,
    f1logonew,
    Photography, telemetry,
    LAFrontPage,
    code,
    mic_vocal,
    school, graduation_cap, RealityAI, BurrowBunnyPicLogo, CommerceHive, CommerceHiveLogo2


} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    // {
    //     id: "resume",
    //     title: "Resume"
    // }
];
const services = [
    {
        title: "Entrepreneur",
        icon: mic_vocal,
    },
    {
        title: "Software Engineer",
        icon: code,
    },
    {
        title: "Student",
        icon: graduation_cap,
    },
    {
        title: "Tutor",
        icon: school,
    },
];
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];
const experiences = [
    {
        title: "Director of Engineering",
        company_name: "Commerce Hive LLC",
        icon: CommerceHiveLogo2,
        iconBg: "#F8F8F8",
        date: "March 2025 - Present",
        points: [
            "Spearheaded the development of 14 mission-critical front-end components for the company’s core platform.",
            "Manage and mentor a team of 20 engineers across front-end and back-end disciplines, achieving 95% sprint velocity " +
            "adherence and completing 100% monthly roadmap objectives for two consecutive months.",
            "Defined and executed the department’s engineering strategy, implementing scalable development processes and" +
            "aligning team priorities with business goals, resulting in a 25% increase in deployment efficiency."
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Reality AI Labs",
        icon: RealityAI,
        iconBg: "#F8F8F8",
        date: "January 2024 - May 2024",
        points: [
            "Built core components using Next.js and PostgreSQL, integrating user-friendly interfaces and scalable" +
            "backend services to support seamless AI-student interactions and real-time data retrieval.",
            "Engineered interactive data visualizations and contributed to building machine learning models that drive" +
            "Marvel AI's adaptive learning capabilities, supporting personalized educational experiences across varied " +
            "classroom environments."
        ],
    },
    {
        title: "Co-Founder and CTO",
        company_name: "Burrow Housing",
        icon: BurrowBunnyPicLogo,
        iconBg: "#F8F8F8",
        date: "August 2024 - Present",
        points: [
           "Initiated and co-created Burrow Housing, driving all stages of strategy formulation and implementation aimed at" +
           "transforming student housing accessibility within Northeastern University’s community to increase engagement by" +
           "30%.",
            "Developed 21 APIs for the Burrow Housing website using MongoDB and React, enabling seamless data integration" +
            "and enhanced user functionality."
        ],
    },
    {
        title: "Software Developer",
        company_name: "Ithaca College",
        icon: IClogo,
        iconBg: "#F8F8F8",
        date: "November 2023 - April 2024",
        points: [
            "Collaborated with Professor Douglas Turnbull to analyze user testing data, identifying key trends and " +
            "opportunities for optimization, which led to a 30% improvement in overall app performance.",
            "Implemented new features and functionalities to enhance user experience, including improved song card " +
            "formatting and an optimized song search mechanism for better accessibility and navigation."
        ],
    },
];
const testimonials = [
    {
        testimonial:
            "Sohum can learn things very quickly, and he picked up our codebase surprisingly quickly and was always itching to learn more. He came up to me asking to work my app, Localify, and was extremely grateful and happy for the opportunity, and it showed in his work",
        name: "Dr. Douglas Turnbull",
        designation: "Professor",
        company: "Ithaca College",
        image: "https://www.ithaca.edu/sites/default/files/styles/max_325x325/public/2023-10/Headshot_Square.png.webp?itok=hEs-JwIX"
    },
    {
        testimonial:
            "Sohum had a great lasting first impression, as well as an eye for research projects and ideas. Although he was the youngest out of my student-researchers, he had the maturity to keep up.",
        name: "Dr. John Barr",
        designation: "Professor",
        company: "Ithaca College",
        image: "https://www.ithaca.edu/sites/default/files/styles/max_325x325/public/2021-01/barr_320_400.jpg.webp?itok=Dig094i2"
    },
    {
        testimonial:
            "Sohum is a hard worker that gets the job done, and on time. He's punctual and takes great care for anything he works on. He won't let anything go out unless it is up to standard.",
        name: "Daryl Capuano",
        designation: "CEO",
        company: "The Learning Consultants",
        image: "https://www.careercounselingconnecticut.com/wp-content/uploads/2016/04/daryl.jpg",
    },
];
const projects = [
    {
        name: "Formula 1 CLI",
        description:
            "Developed a CLI Application for showing various pieces of Formula one data for my COMP-172 Class at Ithaca College.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "ergastapi",
                color: "green-text-gradient",
            },
            {
                name: "fastf1api",
                color: "pink-text-gradient",
            },
        ],
        image: f1logonew, // F1 Logo
        source_code_link: "https://github.com/IC-COMP172-2024-SP/172-project02-oopforanapi-sbalsara05",
    },
    {
        name: "Photography Website",
        description:
            "Developed a Personal Photography Portfolio with 20 pictures,  using JavaScript to filter them",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: Photography,
        source_code_link: "https://github.com/sbalsara05/PhotographyWebsiteSB",
    },
    {
        name: "F1 Telemetry Graphs",
        description:
            "This program uses the FastF1 python library to plot the telemetry data for fastest laps in the race, qualifying or any of the practice sessions. This can go as far back as the 2018 F1 season.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "matplotlib",
                color: "green-text-gradient",
            },
            {
                name: "flask",
                color: "pink-text-gradient",
            },
        ],
        image: telemetry,
        source_code_link: "https://github.com/sbalsara05/PythonF1Project",
    },
    {
        name: "Luke Adams Art Portfolio",
        description:
            "This freelance project showcases the artistic works of Luke Adams. Under his brand, Just a Local Adolescent, Luke aims to establish himself in the art world, bringing his passion for photography, designs, patterns, and portraits to life.",
        tags: [
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
        ],
        image: LAFrontPage,
        source_code_link: "https://github.com/sbalsara05/LukeAdamsPortfolio",
    },

];
export {services, technologies, experiences, testimonials, projects};