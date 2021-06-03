import { Magic } from './magic.interface';
export interface Cards {
    object:string;
    total_cards:number;
    has_more:boolean;
    next_page:string;
    data: Magic[];
}