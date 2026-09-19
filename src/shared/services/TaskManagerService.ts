import {Service, Signal, signal} from '@angular/core';

@Service()
export class TaskManagerService {
  sayHello() {
    return "Hello World!";
  }

  getTaskCategory(): Signal<TaskCategory[]> {
    let apiCategory = signal<TaskCategory[]>([]);
    window.setTimeout(() => {
      apiCategory.set(cat);
    }, 2000)
    return apiCategory;
  }

}

const cat: TaskCategory[] = [
  {
    id: "001",
    name: "Cleaning",
    icon: "lab la-bitbucket",
    color: 'text-blue-900'
  },
  {
    id: "002",
    name: "Handyman",
    icon: "las la-tools",
    color: 'text-yellow-600'
  },
  {
    id: "003",
    name: "Housekeeping",
    icon: "las la-broom",
    color: 'text-green-600'
  },
  {
    id: "004",
    name: "Construction",
    icon: 'Las la-hard-hat',
    color: 'text-yellow-400'
  },
  {
    id: "005",
    name: "Remodeling",
    icon: 'las la-balance-scale',
    color: 'text-purple-800'
  },
  {
    id: "006",
    name: "Roadside Assist",
    icon: 'las la-bus',
    color: 'text-red - 500'
  },
  {
    id: "007",
    name: "Delivery",
    icon:'las la-truck-moving',
    color: 'text-blue-700'
  },
  {
    id: "008",
    name: "General Tasks",
    icon:'las la-book',
    color: 'text-green-600'
  },
  {
    id: "009",
    name: "Laborers",
    icon:'las la-user',
    color: 'text-blue-400'
  },
  {
    id: "010",
    name: "Beauty",
    icon:'las la-laptop',
    color: 'text-pink-500'
  },
  {
    id: "011",
    name: "Errands",
    icon:'las la-shopping-bag',
    color: 'text-yellow-600'
  },
  {
    id: "012",
    name: "Home Help",
    icon:'las la-store-alt',
    color: 'text-blue-800'
  },
  {
    id: "013",
    name: "Warehouse Worker",
    icon:'las la-home',
    color: 'text-purple-800'
  },

];

export interface TaskCategory {
  name: string;
  icon: string;
  id: string;
  color: string;
}



