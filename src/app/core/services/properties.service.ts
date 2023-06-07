import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICard } from 'src/app/interfaces/card.interface';
import { FormGroup } from '@angular/forms';
import { CardSort } from '../enum/card-sort.enum';

const defaultFilters: any = {
  page: 0,
  itemPerPage: 10,
  rangePrices: [0, 0],
  dateRange: [],
  selectedOrder: null,
};

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  list: ICard[] = [];

  filters: any = defaultFilters;

  constructor() {
    this.getFilters();

    //! Boucle de generation de fausse données
    for (let index = 1; index <= 1000; index++) {
      const card: ICard = {
        id: index,
        images: [],
        ville: `Lorem Ipsum ${index}`,
        pays: 'Belgique',
        particulier: Math.floor(Math.random() * 2) === 1,
        date: {
          start: '2023-07-11T18:00:00.000Z',
          end: '2023-08-18T16:00:00.000Z',
        },
        prix: Math.floor(Math.random() * 1000),
      };

      for (let i = 0; i < Math.floor(Math.random() * 7) + 3; i++) {
        card.images.push(
          `https://picsum.photos/20${index % 10}/20${(i % 10) + 1}`
        );
      }

      const startDate = new Date(
        2023,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 27) + 1
      );

      card.date.start = JSON.stringify(startDate);
      card.date.end = JSON.stringify(
        startDate.setDate(startDate.getDate() + 7)
      );

      this.list.push(card);
    }
  }
  getFilters(): any {
    this.filters = {
      ...defaultFilters,
      ...JSON.parse(localStorage.getItem('propFilters') ?? '{}'),
    };

    this.filters.dateRange = this.filters.dateRange
      .filter((e: string) => e !== null)
      .map((e: string) => new Date(e));

    return this.filters;
  }
  //#region Liste de carte
  // list: ICard[] = [
  //   {
  //     id: 1,
  //     images: [
  //       'https://picsum.photos/200/200',
  //       'https://picsum.photos/201/201',
  //       'https://picsum.photos/202/202',
  //       'https://picsum.photos/203/203',
  //     ],
  //     ville: 'Gosselies',
  //     pays: 'Belgique',
  //     particulier: true,
  //     date: {
  //       start: '2023-07-11T18:00:00.000Z',
  //       end: '2023-08-18T16:00:00.000Z',
  //     },
  //     prix: 221,
  //   },
  //   {
  //     id: 2,
  //     images: [
  //       'https://picsum.photos/300/200',
  //       'https://picsum.photos/300/201',
  //       'https://picsum.photos/300/202',
  //       'https://picsum.photos/300/203',
  //     ],
  //     ville: 'Woluwe-Saint-Lambert',
  //     pays: 'Belgique',
  //     particulier: false,
  //     date: {
  //       start: '2023-07-19T18:00:00.000Z',
  //       end: '2023-07-24T16:00:00.000Z',
  //     },
  //     prix: 367,
  //   },
  //   {
  //     id: 3,
  //     images: [
  //       'https://picsum.photos/200/300',
  //       'https://picsum.photos/201/300',
  //       'https://picsum.photos/202/300',
  //     ],
  //     ville: 'Mons',
  //     pays: 'Belgique',
  //     particulier: true,
  //     date: {
  //       start: '2023-06-11T18:00:00.000Z',
  //       end: '2023-06-17T16:00:00.000Z',
  //     },
  //     prix: 333,
  //   },
  //   {
  //     id: 4,
  //     images: [
  //       'https://picsum.photos/250/250',
  //       'https://picsum.photos/250/251',
  //       'https://picsum.photos/250/252',
  //       'https://picsum.photos/250/253',
  //       'https://picsum.photos/250/254',
  //       'https://picsum.photos/251/250',
  //       'https://picsum.photos/252/250',
  //       'https://picsum.photos/253/250',
  //     ],
  //     ville: 'Milan',
  //     pays: 'Italie',
  //     particulier: true,
  //     date: {
  //       start: '2023-07-11T18:00:00.000Z',
  //       end: '2023-07-18T16:00:00.000Z',
  //     },
  //     prix: 444,
  //   },
  //   {
  //     id: 5,
  //     images: [
  //       'https://picsum.photos/300/300',
  //       'https://picsum.photos/300/301',
  //       'https://picsum.photos/300/302',
  //       'https://picsum.photos/300/303',
  //     ],
  //     ville: 'Rome',
  //     pays: 'Italie',
  //     particulier: false,
  //     date: {
  //       start: '2023-07-11T18:00:00.000Z',
  //       end: '2023-07-18T16:00:00.000Z',
  //     },
  //     prix: 351,
  //   },
  //   {
  //     id: 6,
  //     images: [
  //       'https://picsum.photos/100/200',
  //       'https://picsum.photos/101/200',
  //       'https://picsum.photos/102/200',
  //     ],
  //     ville: 'Londres',
  //     pays: 'Angleterre',
  //     particulier: true,
  //     date: {
  //       start: '2023-07-11T18:00:00.000Z',
  //       end: '2023-07-18T16:00:00.000Z',
  //     },
  //     prix: 357,
  //   },
  //   {
  //     id: 7,
  //     images: ['https://picsum.photos/777/777'],
  //     ville: 'Paris',
  //     pays: 'France',
  //     particulier: false,
  //     date: {
  //       start: '2023-07-11T18:00:00.000Z',
  //       end: '2023-07-18T16:00:00.000Z',
  //     },
  //     prix: 369,
  //   },
  // ];
  //#endregion

  getCount(): number {
    return this.dataFiltered().length;
  }

  getMaxPrice(): number {
    const listPrix: number[] = [];

    this.list.map((card) => {
      listPrix.push(card.prix);
    });

    return Math.max(...listPrix);
  }

  getAll(data: any): Observable<ICard[]> {
    this.filters = data;
    localStorage.setItem('propFilters', JSON.stringify(data));
    return of(
      this.dataFiltered().splice(
        this.filters.page * this.filters.itemPerPage,
        this.filters.itemPerPage
      )
    );
  }

  dataFiltered() {
    let lst = [...this.list]
      .filter(
        (card) =>
          card.prix >= this.filters.rangePrices[0] &&
          card.prix <= this.filters.rangePrices[1]
      )
      .filter((card) => {
        // if(card.date)
        const startDate = this.filters.dateRange[0] ?? new Date('1-1-1');
        const endDate = this.filters.dateRange[1] ?? new Date('9999-12-31');

        return (
          new Date(JSON.parse(card.date.start)) >= startDate &&
          new Date(JSON.parse(card.date.end)) <= endDate
        );
      });

    if (this.filters.selectedOrder) {
      switch (this.filters.selectedOrder) {
        case CardSort.PRICE_ASC:
          lst = lst.sort((a, b) => {
            return a.prix - b.prix;
          });
          break;
        case CardSort.PRICE_DESC:
          lst = lst
            .sort((a, b) => {
              return a.prix - b.prix;
            })
            .reverse();
          break;
        case CardSort.DATE_ASC:
          lst = lst.sort((a, b) => {
            return (
              new Date(JSON.parse(a.date.start)).getTime() -
              new Date(JSON.parse(b.date.start)).getTime()
            );
          });
          break;
        case CardSort.DATE_DESC:
          lst = lst
            .sort((a, b) => {
              return (
                new Date(JSON.parse(a.date.start)).getTime() -
                new Date(JSON.parse(b.date.start)).getTime()
              );
            })
            .reverse();
          break;

        default:
          break;
      }
    }

    return lst;
  }
}
