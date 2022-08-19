export interface AmenitiesResponse {
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
        "number_of_unites": number
        "created_at": string,
        "updated_at": string
    }[]
}

export interface AmenityResponse {
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
        "number_of_unites": number
        "created_at": string,
        "updated_at": string
    }
}
export interface AmenityRequest{
    "title_en": string,
    "amenity_image";
}
