export interface CompoundsResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "title_en": string,
        "image": {
            "id": number,
            "image_path": string,
            "updated_at": string,
            "created_at": string
        },
        "description_en": string,
        "location" : string,
        "website": string,
        "order":number,
        "is_active": boolean,
        "last_modify": string,
        "number_of_unites": number
        "created_at": string,
        "updated_at": string
    }[]
}

export interface CompoundResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "title_en": string,
        "image": {
            "id": number,
            "image_path": string,
            "updated_at": string,
            "created_at": string
        },
        "description_en": string,
        "website": string,
        "location" : string,
        "order":number,
        "is_active": boolean,
        "last_modify": string,
        "number_of_unites": number
        "created_at": string,
        "updated_at": string
    }
}
export interface InstanceCompoundResponse {
        "id": number,
        "title_en": string,
        "image": {
            "id": number,
            "image_path": string,
            "updated_at": string,
            "created_at": string
        },
        "description_en": string,
        "website": string,
        "order":number,
        "location" : string,
        "is_active": boolean,
        "last_modify": string,
        "number_of_unites": number
        "created_at": string,
        "updated_at": string
}
export interface CompoundRequest{
    "title_en": string,
    "compound_image",
    "order":number,
    "location" : string,
    "description_en": string,
    "website":string
}
