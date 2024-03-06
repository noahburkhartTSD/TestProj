import { Component } from '@angular/core';
import { ReaderService } from '../reader.service';
import { CardsComponent } from '../cards/cards.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title:String|undefined;
  titleSub:Subscription;

  constructor(private reader: ReaderService) {
    this.titleSub = this.reader.getTitle().subscribe(x => this.title = x);
  }

  ngOnDestroy() {
    this.titleSub.unsubscribe();
  }
}
