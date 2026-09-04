import {Directive, inject,input, ElementRef, Renderer2, afterNextRender } from "@angular/core";

@Directive({
  selector: "[asomBgColor]",

})
export class ChangeBackgroundColor  {
  elementRef  =  inject(ElementRef);
  render  =  inject(Renderer2);
  color = input<string>("transparent", {alias : "asomBgColor"});
  constructor() {
    afterNextRender(() =>{

      const htmlElm  = this.elementRef.nativeElement;
      //htmlElm.style.backgroundColor = "red";
      this.render.setStyle(htmlElm,"background-color", this.color() ?? "transparent");
    })
  }
}
