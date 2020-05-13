export interface Item { 
    source: string,
    title?: string, 
    desc?: string,
}

export const graphs: Item[] = [
    {
        source: "../../assets/SPM5_x_year.png",
        title: "First Time Homeless vs Year",
        desc: `Bullet points go here!`
    },
    {
        title: "First Time Homeless vs Year",
        source: "../../assets/SPM5_x_year.png",
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