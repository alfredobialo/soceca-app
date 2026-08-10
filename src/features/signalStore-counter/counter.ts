import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';

type counterState = {
  counterValue : number, incrementSeed : number, decrementSeed : number
}
const initialState : counterState = {counterValue: 0, incrementSeed : 0, decrementSeed : 0};
export const counterStore  =  signalStore ({providedIn : 'root'},
  withState(initialState ),
  withMethods((store) => {
    return {
      increment(){
        patchState(store, state => ({
          counterValue : 0, incrementSeed : 0, decrementSeed : 0
        }));
      },
      decrement(){

      },
      reset(){

      }
    }
  })


);
