interface IService {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

const services: IService[] = [
  { id: "01", titleKey: "servicesTexts.dev.head", descriptionKey: "servicesTexts.dev.text" },
  { id: "02", titleKey: "servicesTexts.perform.head", descriptionKey: "servicesTexts.perform.text" },
  { id: "03", titleKey: "servicesTexts.team.head", descriptionKey: "servicesTexts.team.text" },
  { id: "04", titleKey: "servicesTexts.codeReview.head", descriptionKey: "servicesTexts.codeReview.text" },
  { id: "05", titleKey: "servicesTexts.devops.head", descriptionKey: "servicesTexts.devops.text" },
  { id: "06", titleKey: "servicesTexts.architect.head", descriptionKey: "servicesTexts.architect.text" },
//   { id: "...", titleKey: "More", descriptionKey: "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager." }
];

export default {
    services
}