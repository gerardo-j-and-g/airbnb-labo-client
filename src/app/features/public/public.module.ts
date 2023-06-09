import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';

import { MenubarModule } from 'primeng/menubar';
import { GalleriaModule } from 'primeng/galleria';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

import { CardComponent } from './pages/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicRoutingModule,
    MenubarModule,
    GalleriaModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    SliderModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
  ],
})
export class PublicModule {}
