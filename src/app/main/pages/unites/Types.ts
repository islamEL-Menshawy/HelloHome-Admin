import {CompoundResponse, InstanceCompoundResponse} from "../compounds/Types";
import {InstanceTypeResponse, TypeResponse} from "../types/Types";
import {InstanceLocationResponse, LocationResponse} from "../locations/Types";
import {AmenityResponse, InstanceAmenityResponse} from "../amenities/Types";

export interface UnitsResponse {
    "success": boolean,
    "message": string,
    "data": {
        "id": number,
        "bathroom_number": number,
        "area": number,
        "bed_number": number,
        "is_youtube": boolean,
        "price": number,
        "video_path": string,
        "order": number,
        "phone_number": string,
        "title": string,
        "description": string,
        "description_left": string,
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
        "bed_number": number,
        "area": number,
        "is_youtube": boolean,
        "location_link":string,
        "video_link":string,
        "price": string,
        "order": number,
        "phone_number": string,
        "title": string,
        "description": string,
        "description_left": string,
        "video_path": string,
        "location_lat": string,
        "location_log": string,
        "compound": InstanceCompoundResponse,
        "type": InstanceTypeResponse,
        "location": InstanceLocationResponse,
        "images":
            {
                "id": number,
                "image_path": string,
                "updated_at": string,
                "created_at": string
            }[]
        ,
        "amenities": InstanceAmenityResponse[],
        "last_modify": string,
        "updated_at": string,
        "created_at": string
    }
}
export interface UnitRequest{
    "bed_number": number,
    "bathroom_number": number,
    "area": number,
    "price": string,
    "is_youtube": number,
    "order": number,
    "phone_number": string,
    "title": string,
    "description": string,
    "description_left": string,
    "video_path",
    "location": string,
    "compound_id": number,
    "type_id": number,
    "location_id": number,
    "aminites": any[],
    "images": any[]
}
export interface IdsRequest{
    "unit_id" : number,
    "image_id": number
}
