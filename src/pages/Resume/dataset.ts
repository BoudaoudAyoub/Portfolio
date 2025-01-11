import skillsIcons from "./components/Skills/skillsIcons";
import skillsImages from "./components/Skills/skillsImages";
import { IconType } from "react-icons";

export interface IHeader{
    title: string,
    nameKey: string,
    descriptionKey: string,
}

const headers: IHeader[] = [
    {
        title: 'Experience',
        nameKey: 'cv.experience.title',
        descriptionKey: 'cv.experience.text'
    },
    {
        title: 'Education',
        nameKey: 'cv.education.title',
        descriptionKey: 'cv.education.text'
    },
    {
        title: 'Skills',
        nameKey: 'cv.skills.title',
        descriptionKey: 'cv.skills.text'
    },
    {
        title: 'About Me',
        nameKey: 'cv.about.title',
        descriptionKey: 'cv.about.text'
    }
];

// About Me details
const aboutMe = [
    { fieldName: 'cv.about.fullname', fieldValue: "Ayoub Boudaoud" },
    { fieldName: 'cv.about.phone', fieldValue: "(+212 695666067)" },
    { fieldName: 'cv.about.adr', fieldValue: "ayoubboudaoud136@gmail.com" },
    { fieldName: 'cv.about.exp', fieldValue: "5+ Years" },
    { fieldName: 'cv.about.nation', fieldValue: "Moroccan" },
    { fieldName: 'cv.about.lang', fieldValue: "English - French" },
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
            {
                icon: skillsIcons.FaAngular, 
                isImg: false,
                imge: '',
                name: 'Angular'
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