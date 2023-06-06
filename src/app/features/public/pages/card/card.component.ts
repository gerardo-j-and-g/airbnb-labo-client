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
    this.images = [...this.datas.images].splice(0, 7);
  }

  test(): void {
    this.router.navigateByUrl('/details');
  }

  getDates(): string {
    const start = new Date(JSON.parse(this.datas.date.start));
    const end = new Date(JSON.parse(this.datas.date.end));

    return start.getMonth() === end.getMonth()
      ? start.getDate() + '-' + end.getDate() + ' ' + this.month[end.getMonth()]
      : start.getDate() +
          ' ' +
          this.month[start.getMonth()] +
          ' - ' +
          end.getDate() +
          ' ' +
          this.month[end.getMonth()];
  }
}
