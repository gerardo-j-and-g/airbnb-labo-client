import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      // {
      //   label: 'File',
      //   icon: 'pi pi-fw pi-file',
      //   items: [
      //     {
      //       label: 'New',
      //       icon: 'pi pi-fw pi-plus',
      //       items: [
      //         {
      //           label: 'Bookmark',
      //           icon: 'pi pi-fw pi-bookmark',
      //         },
      //         {
      //           label: 'Video',
      //           icon: 'pi pi-fw pi-video',
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Delete',
      //       icon: 'pi pi-fw pi-trash',
      //     },
      //     {
      //       separator: true,
      //     },
      //     {
      //       label: 'Export',
      //       icon: 'pi pi-fw pi-external-link',
      //     },
      //   ],
      // },
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
    ];
  }
}
