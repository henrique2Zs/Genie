import { SafeResourceUrl } from "@angular/platform-browser";

export interface CardDB {
    id?: number | string;
    link?: string; 
    src?: string | SafeResourceUrl;
    title?: string;
    description?: string; 
}
