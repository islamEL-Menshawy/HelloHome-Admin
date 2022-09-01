export interface SlidersResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "first_text": string,
        "second_text": string,
        "is_image": boolean,
        "is_active": boolean
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

export interface SliderResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "first_text": string,
        "second_text": string,
        "is_image": boolean,
        "is_active": boolean
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

export interface SliderRequest{
    "first_text": string,
    "second_text": string,
    "is_image": number,
    "slide_image"
}
