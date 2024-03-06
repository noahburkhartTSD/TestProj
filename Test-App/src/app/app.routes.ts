import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { CardsComponent } from './cards/cards.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomepageComponent
    },
    {
        path: 'page2',
        title: 'Page with Just Header',
        component: Page2Component
    },
    {
        path: 'cards',
        title: 'Cards',
        component: CardsComponent
    }
];
