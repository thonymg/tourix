import { Component, ElementRef, NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  template: `
    <div style="background: #ECECEC;padding:30px;">
      <nz-card style="width:300px;" [nzBordered]="false" nzTitle="Card title" [nzExtra]="extraTemplate">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
    </div>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `,
})
export class MaterialCard {
  // contentTemplates: any = {};
  // constructor(private elementRef: ElementRef) {}
  // ngOnInit() {
  //   this.cacheContentTemplates();
  // }
  // ngAfterViewInit() {
  //   this.appendContentTemplate('title', 'mat-card-title');
  //   this.appendContentTemplate('content', 'mat-card-content');
  //   this.appendContentTemplate('actions', 'mat-card-actions');
  // }
  // cacheContentTemplates() {
  //   this.contentTemplates = {
  //     title: this.getContentTemplate('material-card-title'),
  //     content: this.getContentTemplate('material-card-content'),
  //     actions: this.getContentTemplate('material-card-actions'),
  //   };
  // }
  // getContentTemplate(name: string) {
  //   return this.elementRef.nativeElement.querySelector(`template[${name}]`).content.cloneNode(true);
  // }
  // appendContentTemplate(name: string, target: string) {
  //   this.elementRef.nativeElement.querySelector(target).appendChild(this.contentTemplates[name]);
  // }
}

@NgModule({
  imports: [BrowserModule, NzCardModule],
  declarations: [MaterialCard],
  entryComponents: [MaterialCard],
})
export class MaterialCardModule {}
