import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  private images: any = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => ({ name: `Image ${v}`, url: `https://picsum.photos/900/500?random&t=${Math.random()}` }));
  public currentList: any = [];
  public currentIndex: number = 0;
  public splicedImages:any = [];
  public totalItems: number = 0;

  constructor() {
    this.totalItems = this.images.length;
    for (let index = 0; index < this.images.length; index + 4) {
      this.splicedImages.push(this.images.splice(index, 4));
    }
    this.currentList = this.splicedImages[0];
  }

  public prev() {
    if (this.currentIndex == 0) return;
    this.currentIndex -= 1;
    this.currentList = this.splicedImages[this.currentIndex];
  }

  public next() {
    if (this.currentIndex == this.splicedImages.length - 1) return;
    this.currentIndex += 1;
    this.currentList = this.splicedImages[this.currentIndex];
  }

}
