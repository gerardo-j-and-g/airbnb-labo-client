import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';

import { MenubarModule } from 'primeng/menubar';
import { CardComponent } from './pages/card/card.component';
import { GalleriaModule } from 'primeng/galleria';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [PublicComponent, HomeComponent, CardComponent, DetailsComponent],
  imports: [CommonModule, PublicRoutingModule, MenubarModule, GalleriaModule],
})
export class PublicModule {}
