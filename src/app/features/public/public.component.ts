import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  items: MenuItem[] = [];
  modalConnection: boolean = false;
  isConnected: boolean = false;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Connexion',
        icon: 'pi pi-sign-in',
        command: () => {
          this.isConnected = true;
        },
        visible: !this.isConnected,
      },
      {
        label: 'Deconnexion',
        icon: 'pi pi-sign-out',
        visible: this.isConnected,
      },
    ];
  }
}
