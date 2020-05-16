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
        source: "../../assets/coc_category_by_coc_type.png",
        title: "CoC Category vs. Coc Type",
        desc: `There are far more non urban CoCs than urban CoCs.`
    },
    {
        source: "../../assets/monetary_counts_by_coc_type.png",
        title: "Monetary Rewards vs. CoC Type",
        desc: `The monetary rewards going into each CoC type are\ncomparable with slightly more money going towards\nplanning for non urban CoCs.`
    },
    {
        source: "../../assets/recidivism_counts_by_coc_type.png",
        title: "Recidivism Counts vs. Coc Type",
        desc: `By all counts recidivism is worse in non urban CoCs.`
    },
    {
        source: "../../assets/student_counts_by_coc_type.png",
        title: "Student Counts vs. Coc Type",
        desc: `Overall student homelessness is worse in non urban CoCs\nwith the exception of unsheltered students.`
    }
]

export interface Option {
    name: string;
    display: string;
}