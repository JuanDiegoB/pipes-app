import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: `img {
    width: 25px;
  }`
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'products/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'products/numbers'
          },
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-globe',
            routerLink: 'products/uncommon'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'products/custom'
          }
        ]
      }
    ]
  }
}
