import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor() {}

  list: ICard[] = [
    {
      id: 1,
      images: [
        'https://picsum.photos/200/200',
        'https://picsum.photos/201/201',
        'https://picsum.photos/202/202',
        'https://picsum.photos/203/203',
      ],
      ville: 'Gosselies',
      pays: 'Belgique',
      particulier: true,
      date: {
        start: '2023-07-11T18:00:00.000Z',
        end: '2023-08-18T16:00:00.000Z',
      },
      prix: 221,
    },
    {
      id: 2,
      images: [
        'https://picsum.photos/300/200',
        'https://picsum.photos/300/201',
        'https://picsum.photos/300/202',
        'https://picsum.photos/300/203',
      ],
      ville: 'Bruxelles',
      pays: 'Belgique',
      particulier: false,
      date: {
        start: '2023-07-19T18:00:00.000Z',
        end: '2023-07-24T16:00:00.000Z',
      },
      prix: 367,
    },
    {
      id: 3,
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/201/300',
        'https://picsum.photos/202/300',
      ],
      ville: 'Mons',
      pays: 'Belgique',
      particulier: true,
      date: {
        start: '2023-06-11T18:00:00.000Z',
        end: '2023-06-17T16:00:00.000Z',
      },
      prix: 333,
    },
    {
      id: 4,
      images: [
        'https://picsum.photos/250/250',
        'https://picsum.photos/250/251',
        'https://picsum.photos/250/252',
        'https://picsum.photos/250/253',
        'https://picsum.photos/250/254',
        'https://picsum.photos/251/250',
        'https://picsum.photos/252/250',
        'https://picsum.photos/253/250',
      ],
      ville: 'Milan',
      pays: 'Italie',
      particulier: true,
      date: {
        start: '2023-07-11T18:00:00.000Z',
        end: '2023-07-18T16:00:00.000Z',
      },
      prix: 444,
    },
    {
      id: 5,
      images: [
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/301',
        'https://picsum.photos/300/302',
        'https://picsum.photos/300/303',
      ],
      ville: 'Rome',
      pays: 'Italie',
      particulier: false,
      date: {
        start: '2023-07-11T18:00:00.000Z',
        end: '2023-07-18T16:00:00.000Z',
      },
      prix: 351,
    },
    {
      id: 6,
      images: [
        'https://picsum.photos/100/200',
        'https://picsum.photos/101/200',
        'https://picsum.photos/102/200',
      ],
      ville: 'Londres',
      pays: 'Angleterre',
      particulier: true,
      date: {
        start: '2023-07-11T18:00:00.000Z',
        end: '2023-07-18T16:00:00.000Z',
      },
      prix: 357,
    },
    {
      id: 7,
      images: ['https://picsum.photos/777/777'],
      ville: 'Paris',
      pays: 'France',
      particulier: false,
      date: {
        start: '2023-07-11T18:00:00.000Z',
        end: '2023-07-18T16:00:00.000Z',
      },
      prix: 369,
    },
  ];

  getAll(): Observable<ICard[]> {
    return of([...this.list, ...this.list, ...this.list, ...this.list]);
  }
}
