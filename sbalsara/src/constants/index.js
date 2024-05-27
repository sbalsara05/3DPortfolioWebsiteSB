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
    Photography

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
];
const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Tutor",
        icon: creator,
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
        title: "Research Intern - Professor Douglas Turnbull",
        company_name: "Ithaca College",
        icon: IClogo,
        iconBg: "#F8F8F8",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implemented new features and functionalities to improve user experience.",
            "Wrote over 500 words of documentation",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Research Intern - Professor John Barr",
        company_name: "Ithaca College",
        icon: IClogo,
        iconBg: "#F8F8F8",
        date: "January 2024 - May 2024",
        points: [
            "Collaborated with Professor John Barr to conduct a comprehensive analysis of current Computer Science teaching methods, identifying key areas for improvement and potential efficiencies, resulting in a 20% increase in student comprehension rates.",
            "Conducted comprehensive research on a range of teaching methodologies, including but not limited to traditional lecture-based, experiential learning, and project-based approaches.",
            "Maintain upkeep of computers, classroom equipment, and 200 printers across campus",
        ],
    },
    {
        title: "Teacher's Assistant - ECON 120",
        company_name: "Ithaca College",
        icon: IClogo,
        iconBg: "#F8F8F8",
        date: "February 2024 - May 2024",
        points: [
            "Teacher’s Assistant for Professor Elia Kacapyr’s ECON 120 Course at Ithaca College.",
            "Helped with Exam creation and preparation for students, resulting in a 20% increase in average exam scores.",
        ],
    },
    {
        title: "Tutor - Students Helping Students",
        company_name: "Ithaca College",
        icon: IClogo,
        iconBg: "#F8F8F8",
        date: "October 2023 - May 2024",
        points: [
            "Member of Students helping Students at Ithaca College.",
            "Worked in total with over 40 students resulting in an average of 7% increase in scores from tutored students.",
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
                name: "ErgastAPI",
                color: "green-text-gradient",
            },
            {
                name: "FastF1API",
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
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];
export {services, technologies, experiences, testimonials, projects};