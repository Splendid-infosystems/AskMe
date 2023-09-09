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
      items: [
        { icon: 'fas fa-allergies', name: 'Allergist', id: '0', showContentForId0: false },
        { icon: 'fa-solid fa-mask-face', name: 'Anesthesiologist', id: '1', showContentForId0: false },
        { icon: 'fa fa-deaf', name: 'Audiologist', id: '2', showContentForId0: false },
      ]
    },
    {
      label: 'B',
      items: [
        { icon: 'fa-solid fa-syringe', name: 'Bariatric Shubham', id: '3', showContentForId0: false },
      ]
    },
  ];

  toggleItemsVisibility(item: any) {
    this.categories.forEach(category => {
      category.items.forEach(categoryItem => {
        if (categoryItem.id !== '0') {
          categoryItem.showContentForId0 = false;
        }
      });
    });

    item.showContentForId0 = !item.showContentForId0;
  }
}
