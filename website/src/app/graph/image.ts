export interface Item { 
    source: string,
    title?: string, 
    desc?: string,
}

export const graphs: Item[] = [
    {
        source: "../../assets/coc_category_x_homelessness_return_rate_dist.png",
        title: "Distribution of Homelessness Return Rate by CoC Category",
        desc: `
        - I Will 
        - Fill This Out
        - Soon
        `
    },
    {
        source: "../../assets/Total_Homeless_x_CoC_category.png",
        title: "Homeless Count by CoC Category",
        desc: `
        - I Will 
        - Fill This Out
        - Soon
        `
    },
    {
        source: "../../assets/Year_x_Homelessness_Return_Rate_CoC_category_2.png",
        title: "Homlessness Return Rate by Year by CoC Category",
        desc: `
        - I Will 
        - Fill This Out
        - Soon
        `
    },
    {
        source: "../../assets/coc_category_x_award_amount_1.png",
        title: "Award Dispersion by CoC Category - Detailed",
        desc: `
        - I Will 
        - Fill This Out
        - Soon
        `
    },
    {
        source: "../../assets/coc_category_x_award_amount_2.png",
        title: "Award Dispersion by CoC Category - General",
        desc: `
        - I Will 
        - Fill This Out
        - Soon
        `
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