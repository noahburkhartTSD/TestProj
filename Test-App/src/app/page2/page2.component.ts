import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { NavigationModule } from '../navigation/navigation.module';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, NavigationModule],
  template: '<h2>This is the second page</h2>',
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
