export interface Image {
    source: string,
    param1?: Option,
    param2?: Option,
}

export interface Graph { 
    title?: string, 
    img?: Image,
    desc?: string,
}

export interface Table {
    title?: string, 
    source: string,
    desc?: string,
}

export const graphs: Graph[] = [
    {
        title: "First Time Homeless vs Year",
        img: {
            source: "../../assets/SPM5_x_year.png"
        },
        desc: `Bullet points go here!`
    },
    {
        title: "First Time Homeless vs Year",
        img: {
            source: "../../assets/SPM5_x_year.png"
        },
        desc: `Bullet points go here!`
    },
]

export const tables: Table[] = [
    {
        title: "First Time Homeless vs Year",
        source: "",
        desc: `Bullet points go here!`
    },
    {
        title: "First Time Homeless vs Year",
        source: "",
        desc: `Bullet points go here!`
    },
]

export interface Option {
    name: string;
    display: string;
}