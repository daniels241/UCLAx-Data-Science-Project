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
• This graph shows the distribution of monetary awards\n\t\tdistributed by HUD to each CoC Category.\n
• The funds are comparatively distributed with slightly\n\t\thigher amounts going to Major Cites.
        `
    },
    {
        source: "../../assets/coc_category_x_award_amount_2.png",
        title: "Award Dispersion by CoC Category - General",
        desc: `
• This graph shows the distribution of monetary awards\n\t\tdistributed by HUD to each CoC Category.\n 
• The funds are comparatively distributed with slightly\n\t\thigher amounts going to Urban CoCs.
        `
    },
    {
        source: "../../assets/coc_category_x_homelessness_return_rate_dist.png",
        title: "Distribution of Homelessness Return Rate by CoC Category",
        desc: `
• This graph shows the relative distribution of the\n\t\tReturn Rate to Homelessness by CoC.\n
• We can see that Major Cities and other Urban CoCs\n\t\thave Return Rates densely distributed in\n\t\tthe (0.2-0.6) range and sparsely distributed\n\t\tin the 0.6+ range.\n
• We can also observe that Rural CoCs have\n\t\tReturn Rates more densely distributed\n\t\tin the higher ranges (0.6+).
        `
    },
    {
        source: "../../assets/Total_Homeless_x_CoC_category.png",
        title: "Homeless Count by CoC Category",
        desc: `
• This chart shows the Total Homeslessness Count with\n\t\tthe proportion of First Time Homeless count hued\n\t\tin light grey.\n
• We can see that First Time Homeless Counts are a\n\t\tsignificant portion of the overall Homeless\n\t\tpopulation as a whole.\n
• This is especially true in Rural CoCs and\n\t\tsmaller Urban CoCs. 
        `
    },
    {
        source: "../../assets/Year_x_Homelessness_Return_Rate_CoC_category_2.png",
        title: "Homlessness Return Rate by Year by CoC Category",
        desc: `
• This graph shows the average Return Rates to\n\t\tHomelessness from 2015-2017 for each CoC Category.\n
• We can see a general upward trend per year\n\t\tfor each category.\n
• Rural CoCs have an overall higher Homelessness\n\t\tReturn Rate and a shaper incline relative to the\n\t\tother CoC categories.
        `
    },
]

export const tables: Item[] = [
    {
        source: "../../assets/coc_category_by_coc_type.png",
        title: "CoC Category vs. Coc Type",
        desc: `• There are far more non urban CoCs than urban CoCs.`
    },
    {
        source: "../../assets/monetary_counts_by_coc_type.png",
        title: "Monetary Rewards vs. CoC Type",
        desc: `• The monetary rewards going into each CoC type are\ncomparable with slightly more money going towards\nplanning for non urban CoCs.`
    },
    {
        source: "../../assets/recidivism_counts_by_coc_type.png",
        title: "Recidivism Counts vs. Coc Type",
        desc: `• By all counts recidivism is worse in non urban CoCs.`
    },
    {
        source: "../../assets/student_counts_by_coc_type.png",
        title: "Student Counts vs. Coc Type",
        desc: `• Overall student homelessness is worse in non urban CoCs\nwith the exception of unsheltered students.`
    }
]

export interface Option {
    name: string;
    display: string;
}