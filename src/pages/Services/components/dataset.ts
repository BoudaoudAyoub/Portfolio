interface IService{
    id: string,
    title: string,
    description: string
}

const services: IService[] = [
    {
        id: '01',
        title: "Web Development",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."
    },
    {
        id: '02',
        title: "Performance Optimization",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
    },
    {
        id: '03',
        title: "Team Management",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
    },
    {
        id: '04',
        title: "Code Reviewing",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
    },
    {
        id: '05',
        title: "Devops",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
    },
    {
        id: '06',
        title: "Architecture Design",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
    },
    {
        id: '...',
        title: "More",
        description: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager."        
    }
]

export default {
    services
}