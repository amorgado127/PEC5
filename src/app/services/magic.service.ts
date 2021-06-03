import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cards } from 'src/app/models/cards.interface';
import { Magic } from 'src/app/models/magic.interface';

@Injectable({
  providedIn: 'root'
})
export class MagicService {
  private urlApi = "https://api.scryfall.com/cards/";
  constructor(private httpClient: HttpClient) { }

  getMagicCards(): Observable<Cards> {
    return this.httpClient.get<Cards>(this.urlApi + "search?q=lang:es");
  }

  getMagicCard(id: string): Observable<Magic> {
    return this.httpClient.get<Magic>(this.urlApi + id);
  }
}
