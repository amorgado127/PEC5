import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic.service';
import { Magic } from 'src/app/models/magic.interface';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  magicCards: Magic[];

  constructor(private magicService: MagicService) { }

  ngOnInit(): void {
    this.magicService.getMagicCards().subscribe((cards) => {
      this.magicCards = cards.data;
    });

  }

}
