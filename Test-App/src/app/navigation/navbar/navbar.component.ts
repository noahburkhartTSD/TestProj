import { Component } from '@angular/core';
import { ReaderService } from '../../reader.service';
import { Subscription } from 'rxjs';

interface Link {
  route: string;
  title: string;
}

@Component({
  selector: 'app-navbar',
  template: `<nav>
    @for (link of links; track link) {
    <a [routerLink]="link.route">{{link.title}}</a>
    }
  </nav>
  
  <router-outlet />
  `,
  styles: `
  a {
    padding: 10px;
    font: 15px;
  }
  nav {
    border: 1px dashed;
    padding: 3px;
  }`
})

export class NavbarComponent {
  links:Array<Link>|undefined;
  linksSub:Subscription;

  constructor(private reader: ReaderService) {
    this.links = Array<Link>();
    this.linksSub = this.reader.getLinks().subscribe(x => {
      x.forEach((item) => {
      let jsonObj = JSON.parse(item);
      let link = jsonObj as Link;
      this.links?.push(link);
      });
    });
  }

  ngOnDestroy() {
    this.linksSub.unsubscribe();
  }
}
