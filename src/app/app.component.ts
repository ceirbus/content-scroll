import { Component, ViewChild } from '@angular/core';
import { ContentScrollComponent } from './content-scroll/content-scroll.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public onOff: boolean = true;
  @ViewChild('contentScroll') contentScroll: ContentScrollComponent;

  public changeContent() {
    this.contentScroll.content.nativeElement.innerHTML = this.onOff ? "Lorem Ipsum" :
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    this.onOff = !this.onOff;
  }
}


