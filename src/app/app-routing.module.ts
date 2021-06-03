import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsComponent} from 'src/app/Components/cards/cards.component';
import {CardComponent} from 'src/app/Components/card/card.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'card/:id', component: CardComponent },
  { path: '**', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
