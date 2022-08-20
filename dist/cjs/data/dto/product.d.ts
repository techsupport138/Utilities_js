import { FormFieldDto, CategoryReadDto, LocationReadDto, MediaReadDto, UserReadDto } from "./dto";
export interface ProductReadDto {
    id?: string;
    userId?: string;
    title?: string;
    subtitle?: string;
    pageNumber: 1;
    pageSize: 20;
    pageCount?: number;
    description?: string;
    details?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    link?: string;
    website?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    isForSale?: boolean;
    enabled?: boolean;
    isBookmarked?: boolean;
    latitude?: number;
    longitude?: number;
    visitsCount?: number;
    minOrder?: number;
    maxOrder?: number;
    price?: number;
    startDate?: string;
    endDate?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    status?: number;
    user?: UserReadDto;
    location?: LocationReadDto[];
    media?: MediaReadDto[];
    categories?: CategoryReadDto[];
    team?: CategoryReadDto[];
    tags?: CategoryReadDto[];
    forms?: FormFieldDto[];
    value: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
    value7: string;
    value8: string;
    value9: string;
    value10: string;
    value11: string;
    value12: string;
}
export interface ProductCreateUpdateDto {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    details?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    link?: string;
    website?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    isForSale?: boolean;
    enabled?: boolean;
    latitude?: number;
    longitude?: number;
    visitsCount?: number;
    price?: number;
    startDate?: string;
    endDate?: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    minOrder?: number;
    maxOrder?: number;
    status?: number;
    locations?: number[];
    categories?: string[];
    forms?: string[];
    voteFields?: string[];
    reports?: string[];
}
export interface ProductFilterDto {
    title?: string;
    subTitle?: string;
    description?: string;
    details?: string;
    link?: string;
    website?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    startPriceRange?: number;
    endPriceRange?: number;
    enabled?: boolean;
    isForSale?: boolean;
    isBookmarked?: boolean;
    visitsCount?: number;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    minOrder?: number;
    maxOrder?: number;
    status?: number;
    startDate?: string;
    endDate?: string;
    locations?: number[];
    categories?: string[];
    filterOrder?: number;
    pageSize?: number;
    pageNumber?: number;
}
