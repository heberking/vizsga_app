import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  portfolio: any[] = [];

  constructor() {
    this.portfolio = [
      {img_url:"assets/img/portfolio_8.jpg"},
      {img_url:"assets/img/portfolio_1.jpg"},
      {img_url:"assets/img/portfolio_2.jpg"},
      {img_url:"assets/img/portfolio_3.jpg"},
      {img_url:"assets/img/portfolio_5.jpg"},
      {img_url:"assets/img/portfolio_6.jpg"},
      {img_url:"assets/img/portfolio_7.jpg"},
      {img_url:"assets/img/portfolio_8.jpg"},
    ];
  }

  ngOnInit(): void {
  }

}
