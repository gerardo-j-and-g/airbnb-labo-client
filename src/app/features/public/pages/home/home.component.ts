import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { PropertiesService } from 'src/app/core/services/properties.service';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list!: ICard[];
  formFilter!: FormGroup;
  itemsPerPages = [10, 25, 50, 100, 250];

  page!: number;
  rows!: number;
  count!: number;
  rangePrices!: number[];
  maxRangePrice: number = 0;

  filtersModalVisible = false;

  constructor(private properties: PropertiesService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formFilter = this.fb.group({
      rangePrices: [null],
    });
    this.formFilter.patchValue(this.properties.filters);

    this.count = this.properties.getCount();
    this.maxRangePrice = this.properties.getMaxPrice();

    this.rangePrices =
      this.properties.filters.rangePrices[1] === 0 ||
      this.properties.filters.rangePrices[1] > this.maxRangePrice
        ? [0, this.maxRangePrice]
        : this.properties.filters.rangePrices;
    this.page = this.properties.filters.page;
    this.rows = this.properties.filters.itemPerPage;

    this.getData();
  }

  submit(): void {
    if (this.formFilter.invalid) return;

    this.page = 0;
    this.getData();
    this.count = this.properties.getCount();

    this.filtersModalVisible = false;
  }

  changeItemPerPage(event: any): void {
    this.rows = event.rows;
    this.page = event.page;

    this.getData();
  }

  private getData(): void {
    this.properties
      .getAll({
        page: this.page,
        itemPerPage: this.rows,
        rangePrices: this.rangePrices,
      })
      .subscribe((data) => {
        this.list = data;
      });
  }

  reset() {
    this.rangePrices = [0, this.maxRangePrice];
  }

  hideModalFilters() {
    this.rangePrices = this.properties.getFilters().rangePrices;
  }
}
