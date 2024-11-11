import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'juan diego';
  public nameUpper: string = 'JUAN DIEGO';
  public fullname: string = 'jUaN dIeGo';
  public customDate: Date = new Date();
}
