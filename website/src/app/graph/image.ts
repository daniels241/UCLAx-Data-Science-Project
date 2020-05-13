export interface Image {
    source: string;
    param1?: Option;
    param2?: Option;
}

export var graphs: [{ title?: string, img?: Image; }] = [
    {
        title: "First Time Homeless vs Year",
        img: {
            source: "../../assets/SPM5_x_year.png"
        }
    },
]

export var tables: [{ title?: string, source?: string; }] = [
    {
        title: "First Time Homeless vs Year",
        source: ""
    },
]

export interface Option {
    name: string;
    display: string;
}