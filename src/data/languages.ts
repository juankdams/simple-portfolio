interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "Lengua materna, hablo, leo y escribo con fluidez.",
        show: true
    },
    {
        name: "Inglés",
        level: "B2",
        description: "Leo, escribo y entiendo conversaciones técnicas.",
        show: true
    }
];

export default languages;