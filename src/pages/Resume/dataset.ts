import skillsIcons from "./components/Skills/skillsIcons";
import skillsImages from "./components/Skills/skillsImages";
import { IconType } from "react-icons";

export interface IHeader{
    title: string,
    displayName: string,
    description: string,
}

const headers: IHeader[] = [
    {
        title: 'Experience',
        displayName: 'Professional Experience',
        description: "Explore my journey through various roles and companies, where I’ve progressed from jurnior developer to backend engineer to team leadership. This section highlights the different positions I’ve held, the experiences gained in each that demonstrates my growth and adaptability across diverse environments and teams.",
    },
    {
        title: 'Education',
        displayName: 'Education & Degrees',
        description: "Discover the academic journey that shaped me into a skilled software engineer. Here, I share my degrees, certifications, and ongoing learning efforts, showcasing my commitment to professional growth and staying ahead in an ever-evolving industry.",
    },
    {
        title: 'Skills',
        displayName: 'My Skills',
        description: "I leverage a diverse range of technologies and tools to design and deliver scalable, efficient, and high-performing solutions. From modern development frameworks to robust architectural patterns, each skill plays a vital role in ensuring the success of my projects. The sections below provide an overview of the key technologies and methodologies that drive my approach to software engineering, reflecting a commitment to innovation, quality, and continuous improvement.",
    },
    {
        title: 'About Me',
        displayName: 'About Me',
        description: "I am an experienced .NET software developer with over three years of expertise delivering innovative solutions for international companies. Specializing in backend development and leadership, I am passionate about creating high-quality, scalable software in agile environments. My goal is to continue growing while contributing to impactful, high-performance software solutions.",
    }
];

// About Me details
const aboutMe = [
    { fieldName: "Fullname", fieldValue: "Ayoub Boudaoud" },
    { fieldName: "Phone", fieldValue: "+212 695666067" },
    { fieldName: "Email Address", fieldValue: "ayoubboudaoud136@gmail.com" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Nationality", fieldValue: "Moroccan" },
    { fieldName: "Languages", fieldValue: "Arabic - English - French" },
];

// Work experience
const experiences = [
    {
        logoUrl: 'terabyte_software_logo.jpg',
        company: 'Terabyte Software',
        isNested: true,
        items:[
            {
                order: 1,
                duration: "Sep 2023 - Present. 1 yr 4 mos",
                position: 'Team Leader',
                location: "Kenitra, Morocco"
            },
            {
                order: 2,
                duration: "Dec 2021 - Sep 2023. 1yr 10 mos",
                position: 'Backend Software Developer',
                location: "Kenitra, Morocco"
            }
        ],
        duration: 'Full-time. 3 yrs 1 mo',
        location: 'Kenitra – Morocco'
    },
    {
        logoUrl: '',
        company: 'Self Employed',
        position: 'Web Application Developer',
        isNested: false,
        duration: 'Oct 2019 - Nov 2021 · 2 yrs 2 mos',
        location: 'Morocco'
    },
    {
        logoUrl: 'rak.png',
        company: 'Regie Autonome of Kenitra (RAK)',
        position: 'Full-stack Developer - Intern',
        isNested: false,
        duration: 'Apr 2019 - Sep 2019 · 6 mos',
        location: 'Kenitra - Morocco'
    },
    {
        logoUrl: '',
        company: 'Commune kenitra',
        position: 'Junior PHP Developer - Intern',
        isNested: false,
        duration: 'Dec 2017 - Mar 2018 · 4 mos',
        location: 'Kenitra - Morocco'
    }
]

// Educational background
const educations = [
    { 
        logoUrl: '1631335106799.jpg',
        institution: "Ecole Supérieure de Technologie de Salé", 
        degree: "Professional License Degree: SYSTEMES D'INFORMATION ET BIG DATA", 
        duration: '2022 – 2023',
        isNested: false,
        location: 'Kenitra, Morocco'
    },
    { 
        logoUrl: 'uit_keni_logo.jpg',
        institution: 'Université Ibn Tofail – Faculte Des Langues – Lettres Et Arts De Kenitra', 
        isNested: true,
        items:[
            {
                order: 1,
                degree: 'Fundamental License Degree: LINGUISTIC STUDIES STREAM',
                duration: '2020 – 2021',
                location: "Kenitra, Morocco"
            },
            {
                order: 1,
                degree: 'Academic Degree: ETUDES ANGLAISES',
                duration: '2018 – 2020',
                location: "Kenitra, Morocco"
            }
        ]
    },
    { 
        logoUrl: '1630570925737.jpg',
        institution: 'Specialized Institute Of Applied Technology NTIC', 
        isNested: true,
        items:[
            {
                order: 1,
                degree: 'Dévelopement Informatique',
                duration: '2016 – 2018',
                location: "Kenitra, Morocco"
            },
            {
                order: 1,
                degree: 'Microsoft Certificate: In HTML5, JavaScript, and CSS',
                duration: '2016 – 2017',
                location: "Kenitra, Morocco"
            }
        ]
    },
    { 
        logoUrl: '',
        institution: 'Idriss Premier', 
        degree: 'Baccalauréat: SCIENCES DE LA VIE ET DE LA TERRE', 
        duration: '2015 – 2016',
        isNested: false,
        location: 'Kenitra, Morocco'
    },
];

interface Skills{
    category: string,
    items: SkillItem []
}

interface SkillItem{
    icon: IconType,
    isImg: boolean,
    imge: string,
    name: string
}

// Skills with icons
const skills:Skills[] = [
    { 
        category: "Programing Languages",
        items: [
            {
                icon: skillsIcons.TbBrandCSharp, 
                isImg: false,
                imge: '',
                name: 'C-Sharp'
            },
            {
                icon: skillsIcons.FaJava, 
                isImg: false,
                imge: '',
                name: 'Java'
            },
            {
                icon: skillsIcons.MdOutlinePhp, 
                isImg: false,
                imge: '',
                name: 'Php'
            }
            ,
            {
                icon: skillsIcons.TbBrandJavascript, 
                isImg: false,
                imge: '',
                name: 'JavaScript'
            }
        ]         
    },
    { 
        category: "Frameworks",
        items: [
            {
                icon: skillsIcons.SiDotnet, 
                isImg: false,
                imge: '',
                name: '.NET (6, 7, 8)'
            },
            {
                icon: skillsIcons.SiDotnet, 
                isImg: true,
                imge: skillsImages.AspDotnetMvc,
                name: ' ASP.NET MVC'
            },
            {
                icon: skillsIcons.SiDotnet, 
                isImg: true,
                imge: skillsImages.AspDotnet,
                name: ' ASP.NET'
            },
            {
                icon: skillsIcons.SiBlazor, 
                isImg: false,
                imge: '',
                name: 'Blazor (Web & WebAssembly)'
            },            
            {
                icon: skillsIcons.FaReact, 
                isImg: false,
                imge: '',
                name: 'ReactJs'
            },            
            {
                icon: skillsIcons.SiTailwindcss, 
                isImg: false,
                imge: '',
                name: 'Tillwind Css'
            },
        ]         
    },
    { 
        category: "Data Stores",
        items: [
            {
                icon: skillsIcons.DiMsqlServer, 
                isImg: false,
                imge: '',
                name: 'Sql Server'
            },
            {
                icon: skillsIcons.SiMysql, 
                isImg: false,
                imge: '',
                name: 'MySql'
            },
            {
                icon: skillsIcons.DiRedis, 
                isImg: false,
                imge: '',
                name: 'Redis'
            },
            {
                icon: skillsIcons.IoLogoFirebase, 
                isImg: false,
                imge: '',
                name: 'Firebase'
            }
        ]         
    },
    { 
        category: "Architectures",
        items: [
            {
                icon: skillsIcons.TbSchema, 
                isImg: false,
                imge: '',
                name: 'Microservices'
            },
            {
                icon: skillsIcons.TbApi, 
                isImg: false,
                imge: '',
                name: 'APIs'
            },
            {
                icon: skillsIcons.TbSchema, 
                isImg: true,
                imge: skillsImages.CleanArchitect,
                name: 'Clean Architecture (DDD & Onion Architectures)'
            }
        ]         
    },
    { 
        category: "Tools & Practices",
        items: [
            {
                icon: skillsIcons.FaGit, 
                isImg: false,
                imge: '',
                name: 'Git'
            },
            {
                icon: skillsIcons.FaDocker, 
                isImg: false,
                imge: '',
                name: 'Docker'
            },
            {
                icon: skillsIcons.SiSonarqube, 
                isImg: false,
                imge: '',
                name: 'SonarQube'
            },
            {
                icon: skillsIcons.VscAzureDevops, 
                isImg: false,
                imge: '',
                name: 'Azure Services'
            },
            {
                icon: skillsIcons.SiSonarqube, 
                isImg: true,
                imge: skillsImages.Ocelot,
                name: 'Ocelot'
            },
            {
                icon: skillsIcons.LuRefreshCw, 
                isImg: false,
                imge: '',
                name: 'CI/CD Pieplines'
            }
        ]         
    },
    { 
        category: "Methodologies & Testing",
        items: [
            {
                icon: skillsIcons.DiScrum, 
                isImg: false,
                imge: '',
                name: 'Agile (Scrum)'
            },
            {
                icon: skillsIcons.FaUnity, 
                isImg: false,
                imge: '',
                name: 'TDD, XUnit, Integration Test, Functional Test'
            }
        ]         
    },
];

export default {
    headers,
    aboutMe,
    experiences,
    educations,
    skills
};