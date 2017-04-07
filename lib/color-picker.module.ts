import { COMPILER_PROVIDERS } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPickerService } from './color-picker.service';
import { ColorPickerDirective, DynamicCpModule } from './color-picker.directive';

@NgModule({
    imports: [CommonModule, DynamicCpModule],
    providers: [ColorPickerService, COMPILER_PROVIDERS],
    declarations: [ColorPickerDirective],
    exports: [ColorPickerDirective]
})
export class ColorPickerModule { }
