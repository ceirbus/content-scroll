import { AfterContentInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';

const ONE_SECOND: number = 1000;

@Component({
  selector: 'content-scroll',
  templateUrl: './content-scroll.component.html',
  styleUrls: ['./content-scroll.component.css']
})

export class ContentScrollComponent implements AfterContentInit, OnDestroy {
  public isTouchDevice: boolean = 'ontouchstart' in window;

  public hasVerticalScroll: boolean = false;
  public hasHorizontalScroll: boolean = false;

  public mutationObserver: MutationObserver;

  @ViewChild('content') content: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;

  constructor() {
    this.mutationObserver = new MutationObserver(() => {
        this.initScroll();
    });
  }

  public ngAfterContentInit(): void {
    this.initScroll();
    this.initMutationObserver();
  }

  public ngOnDestroy(): void {
    this.mutationObserver.disconnect();
  }

  /**
   * Method to initialize the scroll components when the content is updated, set timeout if content is slow to render
   */
  public initScroll(): void {
    setTimeout(() => {
      this.hasHorizontalScroll = this.content.nativeElement.scrollWidth > this.wrapper.nativeElement.clientWidth;
      this.hasVerticalScroll = this.content.nativeElement.scrollHeight > this.wrapper.nativeElement.clientHeight;
    }, this.isContentSlowToRender() ? ONE_SECOND : 0);
  }

  /**
   * Method to determine if the content is slow/not loading quickly by checking height and width.
   * This could mean that no content is inside the element but it is optimistic to think there should be content
   * @returns {boolean} value to determine if height/width is 0
   */
  public isContentSlowToRender(): boolean {
    const noWidthLoaded = this.content.nativeElement.scrollWidth === 0;
    const noHeightLoaded = this.content.nativeElement.scrollHeight === 0;
    return noWidthLoaded || noHeightLoaded;
  } 

  /**
   * Method to initialize the MutationObserver that detects changes to the content and updates the controls
   */
  public initMutationObserver(): void {
    const config: MutationObserverInit = {
      attributes: true,
      childList: true,
      characterData: true
    }

    try {
      this.mutationObserver.observe(this.content.nativeElement, config);
    } catch(error) {
      console.log("Error creating observer: ", error);
    }
  }

  /**
   * Method to scroll all the way to the top
   */
  public scrollTopEdge(): void {
    this.wrapper.nativeElement.scrollTop = 0;
  }

  /**
   * Method to scroll top a bit
   */
  public scrollTop(): void {
    this.wrapper.nativeElement.scrollTop -= this.wrapper.nativeElement.clientHeight;
  }

  /**
   * Method to scroll all the way to the bottom
   */
  public scrollBottomEdge(): void {
    this.wrapper.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }

  /**
   * Method to scroll to the bottom a bit
   */
  public scrollBottom(): void {
    this.wrapper.nativeElement.scrollTop += this.wrapper.nativeElement.clientHeight;
  }

  /**
   * Method to scroll all the way left
   */
  public scrollLeftEdge(): void {
    this.wrapper.nativeElement.scrollLeft = 0;
  }

  /**
   * Method to scroll to the left a bit
   */
  public scrollLeft(): void {
    this.wrapper.nativeElement.scrollLeft -= this.wrapper.nativeElement.clientWidth;
  }
  /**
   * Method to scroll all the way right
   */
  public scrollRightEdge(): void {
    this.wrapper.nativeElement.scrollLeft = this.content.nativeElement.scrollWidth;
  }

  /**
   * Method to scroll to the right a bit
   */
  public scrollRight(): void {
    this.wrapper.nativeElement.scrollLeft += this.wrapper.nativeElement.clientWidth;
  }
}
