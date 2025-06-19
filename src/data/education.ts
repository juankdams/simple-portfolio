interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Ingeniería Industrial",
        startDate: "2015-06-01",
        endDate: "2024-12-20",
        school: "Universidad del Atlántico",
        location: "Barranquilla, Colombia",
        description: "Grado universitario en Ingeniería Industrial.",
        currentUni: false,
    },
    {
        title: "Auditor interno en sistemas integrados de gestión",
        startDate: "2023-01-01",
        endDate: "2023-12-01",
        school: "Bureau Veritas",
        location: "Barranquilla, Colombia",
        description: "Certificación como auditor interno en sistemas integrados de gestión.",
        currentUni: false,
    },
    {
        title: "Diplomado de Fundamentos de Programación",
        startDate: "2021-01-01",
        endDate: "2021-06-01",
        school: "Universidad del Norte",
        location: "Barranquilla, Colombia",
        description: "Diplomado en fundamentos de programación.",
        currentUni: false,
    },
];

export const additionalSkills = [
    "Business Intelligence Foundation Professional Certification-BIFPC™",
    "Scrum Foundation Professional Certification - SFPC™",
];

export default education;