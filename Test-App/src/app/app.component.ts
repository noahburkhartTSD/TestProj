import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { NavigationModule } from './navigation/navigation.module';
import { ReaderService } from './reader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, NavigationModule],
  template: `<app-navbar />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
