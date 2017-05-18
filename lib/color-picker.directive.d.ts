import { OnChanges, ViewContainerRef, ElementRef, EventEmitter, OnInit, ComponentFactoryResolver, Type } from '@angular/core';
import { ColorPickerService } from './color-picker.service';
import { Compiler } from '@angular/core';
export declare class ColorPickerDirective implements OnInit, OnChanges {
    private compiler;
    private vcRef;
    private el;
    private service;
    private componentFactoryResolver;
    colorPicker: string;
    colorPickerChange: EventEmitter<string>;
    cpToggle: boolean;
    cpToggleChange: EventEmitter<boolean>;
    cpPosition: string;
    cpPositionOffset: string;
    cpPositionRelativeToArrow: boolean;
    cpOutputFormat: string;
    cpPresetLabel: string;
    cpPresetColors: Array<string>;
    cpCancelButton: boolean;
    cpCancelButtonClass: string;
    cpCancelButtonText: string;
    cpOKButton: boolean;
    cpOKButtonClass: string;
    cpOKButtonText: string;
    cpFallbackColor: string;
    cpHeight: string;
    cpWidth: string;
    cpIgnoredElements: any;
    cpDialogDisplay: string;
    cpSaveClickOutside: boolean;
    cpAlphaChannel: string;
    private dialog;
    private created;
    private ignoreChanges;
    constructor(compiler: Compiler, vcRef: ViewContainerRef, el: ElementRef, service: ColorPickerService, componentFactoryResolver: ComponentFactoryResolver);
    ngOnChanges(changes: any): void;
    ngOnInit(): void;
    onClick(): void;
    openDialog(): void;
    colorChanged(value: string, ignore?: boolean): void;
    changeInput(value: string): void;
    toggle(value: boolean): void;
}
export declare class TextDirective {
    newValue: EventEmitter<any>;
    text: any;
    rg: number;
    changeInput(value: string): void;
}
export declare class SliderDirective {
    private el;
    newValue: EventEmitter<any>;
    slider: string;
    rgX: number;
    rgY: number;
    private listenerMove;
    private listenerStop;
    constructor(el: ElementRef);
    setCursor(event: any): void;
    move(event: any): void;
    start(event: any): void;
    stop(): void;
    getX(event: any): number;
    getY(event: any): number;
}
export declare class DialogContent {
    component: Type<any>;
    data: any;
    constructor(component: Type<any>, data: any);
}
export declare class DialogComponent implements OnInit {
    public el;
    public service;
    public hsva;
    public rgbaText;
    public hslaText;
    public hexText;
    public outputColor;
    public selectedColor;
    public alphaSliderColor;
    public hueSliderColor;
    public slider;
    public sliderDimMax;
    public format;
    public show;
    public top;
    public left;
    public position;
    public directiveInstance;
    public initialColor;
    public directiveElementRef;
    public listenerMouseDown;
    public listenerResize;
    public cpPosition;
    public cpPositionOffset;
    public cpOutputFormat;
    public cpPresetLabel;
    public cpPresetColors;
    public cpCancelButton;
    public cpCancelButtonClass;
    public cpCancelButtonText;
    public cpOKButton;
    public cpOKButtonClass;
    public cpOKButtonText;
    public cpHeight;
    public cpWidth;
    public cpIgnoredElements;
    public cpDialogDisplay;
    public cpSaveClickOutside;
    public cpAlphaChannel;
    public dialogArrowSize;
    public dialogArrowOffset;
    public arrowTop;
    public hueSlider: any;
    public alphaSlider: any;
    public dialogElement: any;
    constructor(el: ElementRef, service: ColorPickerService);
    setDialog(instance: any, elementRef: ElementRef, color: any, cpPosition: string, cpPositionOffset: string, cpPositionRelativeToArrow: boolean, cpOutputFormat: string, cpPresetLabel: string, cpPresetColors: Array<string>, cpCancelButton: boolean, cpCancelButtonClass: string, cpCancelButtonText: string, cpOKButton: boolean, cpOKButtonClass: string, cpOKButtonText: string, cpHeight: string, cpWidth: string, cpIgnoredElements: any, cpDialogDisplay: string, cpSaveClickOutside: boolean, cpAlphaChannel: string): void;
    ngOnInit(): void;
    setInitialColor(color: any): void;
    init(): void;
    openDialog(color: any, emit?: boolean): void;
    cancelColor(): void;
    oKColor(): void;
    setColorFromString(value: string, emit?: boolean): void;
    onMouseDown(event: any): void;
    openColorPicker(): void;
    closeColorPicker(): void;
    onResize(): void;
    setDialogPosition(): void;
    setSaturation(val: {
        v: number;
        rg: number;
    }): void;
    setLightness(val: {
        v: number;
        rg: number;
    }): void;
    setHue(val: {
        v: number;
        rg: number;
    }): void;
    setAlpha(val: {
        v: number;
        rg: number;
    }): void;
    setR(val: {
        v: number;
        rg: number;
    }): void;
    setG(val: {
        v: number;
        rg: number;
    }): void;
    setB(val: {
        v: number;
        rg: number;
    }): void;
    setSaturationAndBrightness(val: {
        s: number;
        v: number;
        rgX: number;
        rgY: number;
    }): void;
    formatPolicy(): number;
    update(emit?: boolean): void;
    isDescendant(parent: any, child: any): boolean;
    createBox(element: any, offset: boolean): any;
}
export declare class DynamicCpModule {
}
