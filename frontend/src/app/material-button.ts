import { Component, Input, ViewChild, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  template: `
    <button nz-button nzType="primary">Primary</button>
    <button nz-button nzType="default">Default</button>
    <button nz-button nzType="dashed" (click)="external()">Dashed</button>
  `,
})
export class MaterialButton {
  external() {
    console.log(this);
  }
}

@NgModule({
  imports: [BrowserModule, NzButtonModule],
  declarations: [MaterialButton],
  entryComponents: [MaterialButton],
})
export class MaterialButtonModule {}
