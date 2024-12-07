import { ReactNode } from "react"

export interface IHeader{
    icon: ReactNode,
    title: string,
    displayName: string,
    description: string,
}

const headers: IHeader[] = [
    {
        icon: '',
        title: 'Experience',
        displayName: 'Professional Experience',
        description: "Experienced and highly skilled .NET software developer with over three years of experience delivering solutions for various international companies, primarily using Microsoft technologies. Proficient in working within agile environments to design and implement high-quality, highperformance software as a service (SaaS) across diverse sectors and industries",
    },
    {
        icon: '',
        title: 'Education',
        displayName: 'Education & Degrees',
        description: "Experienced and highly skilled .NET software developer with over three years of experience delivering solutions for various international companies, primarily using Microsoft technologies. Proficient in working within agile environments to design and implement high-quality, highperformance software as a service (SaaS) across diverse sectors and industries",
    },
    {
        icon: '',
        title: 'Skills',
        displayName: 'My Skills',
        description: "Experienced and highly skilled .NET software developer with over three years of experience delivering solutions for various international companies, primarily using Microsoft technologies. Proficient in working within agile environments to design and implement high-quality, highperformance software as a service (SaaS) across diverse sectors and industries",
    },
    {
        icon: '',
        title: 'About Me',
        displayName: 'About Me',
        description: "Experienced and highly skilled .NET software developer with over three years of experience delivering solutions for various international companies, primarily using Microsoft technologies. Proficient in working within agile environments to design and implement high-quality, highperformance software as a service (SaaS) across diverse sectors and industries",
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
const exp = [
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
    }
]
const experiences = [
    { 
        company: 'Terabyte Software, Kenitra – Morocco', 
        duration: 'December 2022 - Present',
        items:[
            {
                order: 1,
                duration: "December 2023 - Present",
                position: 'Team Leader'
            },
            {
                order: 2,
                duration: "December 2021 - Present",
                position: 'Backend Software Developer'
            }
        ] 
    },
    { 
        company: 'Freelancer', 
        position: 'Junior PHP Developer (Intern)', 
        duration: 'December 2019 – March 2019' 
    },
    { 
        company: 'Régie Autonome Kenitra – Morocco (RAK)', 
        position: 'Junior Software Developer (Paid internship)', 
        duration: 'April 2019 – September 2019' 
    },
    { 
        company: 'Commune Kenitra', 
        position: 'Junior PHP Developer (Intern)', 
        duration: 'December 2019 – March 2019' 
    }
];

// Educational background
const educations = [
    { institution: "Ecole Supérieure de Technologie de Salé", degree: "Professional License Degree: SYSTEMES D'INFORMATION ET BIG DATA", duration: '2022 – 2023' },
    { institution: 'Université Ibn Tofail – Faculte Des Langues – Lettres Et Arts De Kenitra', degree: 'Fundamental License Degree: LINGUISTIC STUDIES STREAM', duration: '2020 – 2021' },
    { institution: 'Université Ibn Tofail – Faculte Des Langues – Lettres Et Arts De Kenitra', degree: 'Academic Degree: ETUDES ANGLAISES', duration: '2018 – 2020' },
    { institution: 'Institut Spécialisé De Technologie Appliquée Maamora Kenitra', degree: 'Microsoft Certificate: In HTML5, JavaScript, and CSS', duration: '2016 – 2017' },
    { institution: 'Institut Spécialisé De Technologie Appliquée Maamora Kenitra', degree: 'Microsoft Certificate: In HTML5, JavaScript, and CSS', duration: '2016 – 2018' },
    { institution: 'Idriss Premier - Kenitra', degree: 'Baccalauréat: SCIENCES DE LA VIE ET DE LA TERRE', duration: '2015 – 2016' },
];

// Skills with icons
const skills = [
    { icon: null, name: 'C-Sharp' }, // Placeholder for actual icons
    { icon: null, name: 'ReactJs' }, // Placeholder for actual icons
];

export default {
    headers,
    aboutMe,
    experiences,
    educations,
    skills,
    exp
};