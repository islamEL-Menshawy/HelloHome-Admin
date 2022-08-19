export interface TypesResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "title_en": string,
        "slug_en": string,
        "title_ar": string,
        "slug_ar": string,
        "created_at": string,
        "updated_at": string
    }[]
}

export interface TypeResponse{
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "title_en": string,
        "slug_en": string,
        "title_ar": string,
        "slug_ar": string,
        "created_at": string,
        "updated_at": string,
        "last_modify": string,
        "number_of_unites": number,
        "isActive": boolean,
    }
}
export interface TypeRequest{
    "title_en": string
}
