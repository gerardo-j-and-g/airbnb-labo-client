import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() datas!: ICard;
  images!: any[];

  private month: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.images = this.datas.images;
  }

  test(): void {
    this.router.navigateByUrl('/details');
  }

  getDates(): string {
    const start = new Date(this.datas.date.start);
    const end = new Date(this.datas.date.end);

    return start.getMonth() === end.getMonth()
      ? start.getDate() +
          '-' +
          end.getDate() +
          ' ' +
          this.month[end.getMonth() - 1]
      : start.getDate() +
          ' ' +
          this.month[start.getMonth() - 1] +
          ' - ' +
          end.getDate() +
          ' ' +
          this.month[end.getMonth() - 1];
  }
}
