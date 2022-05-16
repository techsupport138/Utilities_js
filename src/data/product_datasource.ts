import {httpGet} from "../utils/http_interceptor";
import {GenericResponse, ProductReadDto} from "./data";

export enum ProductDataSourceType {
    products = "Product",
    tutorials = "Tutorial",
    projects = "Project",
    companies = "Company",
    tenders = "Tender",
    magazine = "Magazine",
}

export class ProductDataSource {
    baseUrl: string;
    type: ProductDataSourceType;

    constructor(baseUrl: string, type: ProductDataSourceType) {
        this.baseUrl = baseUrl;
        this.type = type;
    }

    async read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
               onError: (response: Response) => any): Promise<GenericResponse<ProductReadDto[]>> {
        return await httpGet(`${this.baseUrl}api/${this.type.toString()}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async readById(id: string,
                   onResponse: (response: ProductReadDto) => any,
                   onError: (response: Response) => any): Promise<ProductReadDto> {
        return await httpGet(`${this.baseUrl}api/${this.type.toString()}/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}