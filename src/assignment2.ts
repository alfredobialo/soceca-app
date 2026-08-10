import {Component, signal, computed, model, input, WritableSignal, Signal} from "@angular/core";

@Component({
  host  : {
    "class": "border-2 border-white p-10 rounded-lg",
  },
  template : `
		User Name  : {{userName()}}
		<div>
			User in Uppercase  => {{upperCaseName()}}
		</div>
	`,
  selector : "DisplayName, display-name"
})
export class DisplayName{
  userName = input("Chioma Iwuh");
  upperCaseName  = computed( () => this.userName().toUpperCase());

}

@Component({
  selector: "DisplayNameInput, display-name-input",
  template  : `<div class="">
    <p class="text-lg">Enter Name</p>
    <input #n class="ring-2 ring-orange-500 px-5 py-2 shadow-md" (input)="name.set(n.value)" [value]="name()" type="text">
    <p>{{name()}}</p>

  </div>`
})
export class DisplayNameInput {
    name = model<string>("");

}


@Component({
  selector  : "MainApp",
  template : `
		<h1>Welcome to main App</h1>
    <div ngSkipHydration class="bg-gray-500 p-6 rounded-2xl m-4 w-full flex justify-between items-center min-h-[400px] gap-4">
      <DisplayName [userName]="myName()"/>
      <DisplayNameInput [(name)]="myName"/>
      <div class="flex gap-2">
        <button (click)="myName.set('Alfred Obialo')" class="px-6 py-2 border-2 border-black bg-black/70 text-white">Change to Alfred</button>
        <button (click)="myName.set('Munachi Vincent')" class="px-6 py-2 border-2 border-black bg-black/70 text-white">Change to Munachi</button>
        <button (click)="myName.set('Chioma Iwuh')" class="px-6 py-2 border-2 border-black bg-black/70 text-white">Change to Chioma</button>
      </div>
    </div>


	`,
  imports: [DisplayName, DisplayNameInput]
})
export class MainApp{
  myName =  signal("Okoye James");

}
