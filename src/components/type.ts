export interface CardProps {
    name: string;
    price: number;
    _id: string;
    description: string;
    image_details: string[];
    image_thumbnail: string;
    category?: {
        name: string;
        _id: string
    }
}

