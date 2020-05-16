export interface Item { 
    source: string,
    title?: string, 
    desc?: string,
}

export const graphs: Item[] = [
    {
        source: "../../assets/coc_category_x_award_amount_1.png",
        title: "Award Dispersion by CoC Category - Detailed",
        desc: `
        - This graph shows the distribution of monetery awards distributed by HUD to each CoC Category.
        - The funds are comparatively distributed with slightly higher amounts going to Major Cites.
        `
    },
    {
        source: "../../assets/coc_category_x_award_amount_2.png",
        title: "Award Dispersion by CoC Category - General",
        desc: `
        - This graph shows the distribution of monetery awards distributed by HUD to each CoC Category. 
        - The funds are comparatively distributed with slightly higher amounts going to Urban CoCs.
        `
    },
    {
        source: "../../assets/coc_category_x_homelessness_return_rate_dist.png",
        title: "Distribution of Homelessness Return Rate by CoC Category",
        desc: `
        - This graph shows the relative distribution of the Return Rate to Homelessness by CoC.
        - We can see that Major Cities and other Urban CoCs have Return Rates densely distributed in the (0.2-0.6) range and sparsely distributed in the 0.6+ range.
        - We can also observe that Rural CoCs have Return Rates more densely distributed in the higher ranges (0.6+).
        `
    },
    {
        source: "../../assets/Total_Homeless_x_CoC_category.png",
        title: "Homeless Count by CoC Category",
        desc: `
        - This chart shows the Total Homeslessness Count with the proportion of First Time Homeless count hued in light grey.
        - We can see that First Time Homeless Counts are a significant portion of the overall Homeless population as a whole.
        - This is especially true in Rual CoCs and smaller Urban CoCs. 
        `
    },
    {
        source: "../../assets/Year_x_Homelessness_Return_Rate_CoC_category_2.png",
        title: "Homlessness Return Rate by Year by CoC Category",
        desc: `
        - This graph shows the average Return Rates to Homelessness from 2015-2017 for each CoC Category.
        - We can see a general upward trend per year for each category.
        - Rual CoCs have an overall higher Homelessness Return Rate and a shaper incline relatice to the other CoC categories.
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