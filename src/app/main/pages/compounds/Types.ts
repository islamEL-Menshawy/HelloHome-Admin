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
        "website": string,
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
        "is_active": boolean,
        "last_modify": string,
        "number_of_unites": number
        "created_at": string,
        "updated_at": string
}
export interface CompoundRequest{
    "title_en": string,
    "compound_image",
    "description_en": string,
    "website":string
}
