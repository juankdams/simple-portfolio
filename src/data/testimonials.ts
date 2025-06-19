export interface Testimonial {
  name: string;
  position: string;
  company: string;
  photo: string; // Ruta relativa a /src/assets
  message: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Keila Illueca Rada",
        position: "Business Analyst",
        company: "AIMedge Apps",
        photo: "https://media.licdn.com/dms/image/v2/D4E03AQFmIPadoRi_lQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730821496308?e=1755734400&v=beta&t=_Jw7K1C23Jv8vLSoN79yLNXUmoc7rZTc6Ryb4WnyZoA",
        message: "Destaco de Juan su capacidad para resolver problemas, su resiliencia y su gran liderazgo. Lo que más admiro de él es la pasión y el sello que le imprime a todos sus proyectos!"
    },
    {
        name: "Johan Zuluaga Pulido",
        position: "Proyectos y Desarrollo de Negocios",
        company: "",
        photo: "https://media.licdn.com/dms/image/v2/D4D35AQFalyNaSbxpiA/profile-framedphoto-shrink_200_200/B4DZbZTLQ8GwAY-/0/1747402405331?e=1750917600&v=beta&t=PnS5j7-lLmMWmuuduzVeEbIX8bVDpIL8_MBeo1AKzWY",
        message: "Un líder muy objetivo, con una gran capacidad de análisis y evaluación."
    },
    {
        name: "Jose Dulcey Ospino",
        position: "Alumni Global Shapers Community | Relacionamiento y alianzas | Gestión de Proyectos y eventos de impacto | Innovador social",
        company: "",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQFc7HE9saSqrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709568485026?e=1755734400&v=beta&t=YheJqbRqGKB_Tv2m8tu0nMWANmq1QABHictAuvWQOTo",
        message: "Desde que conozco a Juan Camilo siempre lo he identificado con un hombre organizado, profesional y de criterio. Siempre se esfuerza por el cumplimiento de objetivos y metas; con excelentes habilidades sociales y capacidad de trabajo en equipo."
    },
    {
        name: "Andrés Vargas Alzáte",
        position: "Ingeniero Industrial en Formación",
        company: "",
        photo: "https://media.licdn.com/dms/image/v2/C4E35AQGFhF3awqF4nw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1613734291662?e=1750917600&v=beta&t=C1UFmHjp4sA2k_0GtxeUOD9cmmmHXr34g0iLJYQpTwY",
        message: "Es una persona comprometida por lo que hace y siempre da lo mejor de sí para brindar un trabajo de calidad."
    }
];

export default testimonials;
