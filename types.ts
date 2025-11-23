export interface SuccessStory {
    id: number;
    companyName: string;
    description: string;
    imageUrl: string;
    logoUrl: string;
}

export interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface ZoneData {
    id: string;
    name: string;
    factories: number;
}