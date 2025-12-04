export interface Minister {
    name: string;
    period: string;
    achievements: string;
    image?: string;
}

export interface NewsArticle {
    id: number;
    title: string;
    date: string;
    category: string;
    content: string;
    image: string;
}

export interface Destination {
    name: string;
    description: string;
    image: string;
}

export interface ArtisanTrade {
    category: string;
    count: number;
    examples: string[];
}