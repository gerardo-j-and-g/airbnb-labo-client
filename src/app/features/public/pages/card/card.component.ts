import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() datas!: ICard;
  images!: any[];

  ngOnInit(): void {
    this.images = this.datas.images;
  }
}
