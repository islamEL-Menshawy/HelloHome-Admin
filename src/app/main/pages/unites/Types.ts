import {CompoundResponse} from "../compounds/Types";
import {TypeResponse} from "../types/Types";
import {LocationResponse} from "../locations/Types";
import {AmenityResponse} from "../amenities/Types";

export interface UnitsResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "bathroom_number": number,
        "area": number,
        "is_youtube": boolean,
        "price": number,
        "video_path": string,
        "location_lat": string,
        "location_log": string,
        "compound": CompoundResponse,
        "type": TypeResponse,
        "location": LocationResponse,
        "images":
            {
                "id": number,
                "image_path": string,
                "updated_at": string,
                "created_at": string
            }[]
        ,
        "amenities": AmenityResponse[],
        "last_modify": string,
        "updated_at": string,
        "created_at": string
    }[]
}

export interface UnitResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "bathroom_number": number,
        "area": number,
        "is_youtube": boolean,
        "price": number,
        "video_path": string,
        "location_lat": string,
        "location_log": string,
        "compound": CompoundResponse,
        "type": TypeResponse,
        "location": LocationResponse,
        "images":
            {
                "id": number,
                "image_path": string,
                "updated_at": string,
                "created_at": string
            }[]
        ,
        "amenities": AmenityResponse[],
        "last_modify": string,
        "updated_at": string,
        "created_at": string
    }
}
export interface UnitRequest{
    "bed_number": number,
    "bathroom_number": number,
    "area": number,
    "price": number,
    "is_youtube": number,
    "video_path",
    "location": string,
    "compound_id": number,
    "type_id": number,
    "location_id": number,
    "aminites": any[],
    "images": any[]
}
