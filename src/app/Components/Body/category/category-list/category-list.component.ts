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
        { icon: 'fas fa-brain', name: 'Neurologist' },
        { icon: 'fa-solid fa-tooth', name: 'Dentist' },
        { icon: 'fas fa-brain', name: 'Neurologist' },
        { icon: 'fa-solid fa-tooth', name: 'Dentist' },
        { icon: 'fas fa-brain', name: 'Neurologist' },
        { icon: 'fa-solid fa-tooth', name: 'Dentist' },
      ]
    },
  ];

  toggleItemsVisibility(category: any) {
    category.showAll = !category.showAll;
  }
}


