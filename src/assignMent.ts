import {Component,signal, computed} from "@angular/core";
@Component({
  selector:'display-name',

  template:`
<div>{{name}}</div>
<div>{{upperName}}</div>
`
})
export class DisplayNameComponent{
  name = signal("Chioma");
  upperName = computed(()=>this.name().toUpperCase());
}

/*
import{Component,signal} from @angular/core;
import{DisplayNameComponent} from ../display-name.ts;
*/

@Component({
  imports:[DisplayNameComponent],
  selector:"app-component",
  template:`
<display-name/>
`
})

export class AppComponent{

}
