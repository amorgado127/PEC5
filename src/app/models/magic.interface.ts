import { Legality } from "./legality.interface";
export interface Magic {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: number[];
    name: string;
    printed_name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_status: string;
    image_uris: {
        small:string,
        normal:string,
        large:string,
        png:string,
        art_crop:string,
        border_crop:string
    }
    mana_cost: string;
    cmc: number;
    type_line: string;
    printed_type_line: string;
    oracle_text: string;
    printed_text: string;
    colors: string[];
    colorIdentity: string[];
    keywords: string[];
    produced_mana: string[];
    legalities: Legality[];
    games: string[];
    reserved: boolean;
    foil: boolean;
    nonfoil: boolean;
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    variation: boolean;
    set: string;
    set_name: string;
    set_type: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    print_search_uri: string;
    collection_number: string;
    digital: boolean;
    rarity: string;
    card_back_id: string;
    artist: string;
    artist_ids: string[];
    illustration_id: string;
    border_color: string;
    frame: string;
    full_art: boolean;
    textless: boolean;
    booster: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    prices:{
        usd:number,
        usd_foil:number,
        eur:number,
        eur_foil:number,
        tix:number
    }
    related_uris: {
        gatherer: string,
        tcgplayer_infinite_articles: string,
        tcgplayer_infinite_decks: string,
        edhrec: string,
        mtgtop8: string
    }
    purchase_uris: {
        tcgplayer: string,
        cardmarket: string,
        cardhoarder: string
    }
}