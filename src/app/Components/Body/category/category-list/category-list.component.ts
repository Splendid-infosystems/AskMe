import { Component } from '@angular/core';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  
  categories = [
    {
      label: 'Doctors',
      showAll: false,
      items: [
        { icon: 'fas fa-brain', name: 'Neurologist', id:'01' },
        { icon: 'fa-solid fa-tooth', name: 'Dentist', id:'02'},
        { icon: 'fas fa-brain', name: 'Neurologist',id:'03' },
        { icon: 'fa-solid fa-tooth', name: 'Dentist',id:'04' },
        { icon: 'fas fa-brain', name: 'Neurologist',id:'05' },
        { icon: 'fa-solid fa-tooth', name: 'Dentist',id:'06' },
      ]
    },
  ];
  
  toggleItemsVisibility(category: any) {
    category.showAll = !category.showAll;
  }
}



