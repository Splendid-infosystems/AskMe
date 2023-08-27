import { Component } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  categories = [
    {
      label: 'A',
      showAll: false,
      items: [
        { icon: 'fas fa-allergies', name: 'Allergist' },
        { icon: 'fa-solid fa-mask-face', name: 'Anesthesiologist' },
        { icon: 'fa fa-deaf', name: 'Audiologist' },
      ]
    },
    {
      label: 'B',
      showAll: false,
      items: [
        { icon: 'fa-solid fa-syringe', name: 'Bariatric' },
      ]
    },
  ];

  toggleItemsVisibility(category: any) {
    category.showAll = !category.showAll;
  }
}