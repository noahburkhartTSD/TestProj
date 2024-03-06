import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReaderService } from '../reader.service';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  template: `
  <div class="table">
    @for (val of values; track val) {
    <div class="item">{{val}}</div>
    }
  </div>`,
  styles: `
  .table {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    padding: 5px;
    gap: 5px;
  }
  .item {
    border: 3px solid;
    padding: 20px;
    text-align: center;
  }
  `,
})

export class CardsComponent {
    values:Array<String>|undefined;
    cardSub:Subscription;

    constructor(private reader: ReaderService) {
      this.cardSub = this.reader.getCardVals().subscribe(x => this.values = x)
    }

    ngOnDestroy() {
      this.cardSub.unsubscribe();
    }

}
