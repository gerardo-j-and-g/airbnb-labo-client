import { Component } from '@angular/core';
import { PropertiesService } from 'src/app/core/services/properties.service';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  list!: ICard[];

  constructor(private properties: PropertiesService) {
    this.properties.getAll().subscribe((data) => (this.list = data));
  }
}
