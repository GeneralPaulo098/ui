import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ion-badge', loadChildren: './ion-badge/ion-badge.module#IonBadgePageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'chekbox', loadChildren: './chekbox/chekbox.module#ChekboxPageModule' },
  { path: 'chip', loadChildren: './chip/chip.module#ChipPageModule' },
  { path: 'data', loadChildren: './data/data.module#DataPageModule' },
  { path: 'ion-radio', loadChildren: './ion-radio/ion-radio.module#IonRadioPageModule' },
  { path: 'ion-range', loadChildren: './ion-range/ion-range.module#IonRangePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
