import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Magic } from 'src/app/models/magic.interface';
import { MagicService } from 'src/app/services/magic.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  magicCard:Magic;
  
  constructor(private magicService:MagicService,private activatedRoute: ActivatedRoute, private router: Router) { 

    
  }


  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.magicService.getMagicCard(identifier).subscribe((card) => {
      if (!card) {
        return this.router.navigateByUrl('/');
      }
      this.magicCard = card;
    });
  }

}
