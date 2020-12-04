import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-perfect',
  templateUrl: './pixel-perfect.component.html',
  styleUrls: ['./pixel-perfect.component.scss']
})
export class PixelPerfectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openUrl(url: string): void {
    window.open(url, "_blank");
  }

}
