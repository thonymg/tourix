import { ChangeDetectorRef, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <input nz-input placeholder="Basic usage" />
    <br />
    <input nz-input placeholder="Basic usage" [disabled]="true" />
  `,
})
export class MaterialInput {}

@NgModule({
  imports: [BrowserAnimationsModule, ReactiveFormsModule, NzInputModule],
  declarations: [MaterialInput],
  entryComponents: [MaterialInput],
})
export class MaterialInputModule {}
