export interface Item { 
    source: string,
    title?: string, 
    desc?: string,
}

export const graphs: Item[] = [
    {
        source: "../../assets/Year_x_doe_total_CoC_category_2.png",
        title: "Total Homeless per Year",
        desc: `
        - Bullet point 1
        - Bullet point 2
        - Bullet point 3
        `
    },
    {
        source: "../../assets/SPM5_x_year.png",
        title: "First Time Homeless vs Year",
        desc: `Bullet points go here!`
    },
]

export const tables: Item[] = [
    {
        source: "",
        title: "First Time Homeless vs Year",
        desc: `Bullet points go here!`
    },
    {
        source: "",
        title: "First Time Homeless vs Year",
        desc: `Bullet points go here!`
    },
]

export interface Option {
    name: string;
    display: string;
}