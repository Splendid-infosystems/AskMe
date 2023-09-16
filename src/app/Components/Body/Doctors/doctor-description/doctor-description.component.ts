import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-description',
  templateUrl: './doctor-description.component.html',
  styleUrls: ['./doctor-description.component.css']
})
export class DoctorDescriptionComponent implements OnInit {
  doctorName: string | undefined;
  doctorDescription = [
    {
      
      doc: [
        { id: 'VH10', doctor_name: 'Anay', hospital_name: 'Morya hospital', images:[{}],reviews:'5',address:'varangaon', contact1:'862301810',contact2:'8237718610', enquiry:'test-enquiry',timing:'10:00 AM  TO 07:00 PM',closed_day:['Friday',' Monday'],services:'services test data', createdAt:"10 jun 2023" },
        { id: 'VH10', doctor_name: 'Anay', hospital_name: 'Morya hospital', images:[{}],reviews:'5',address:'varangaon', contact1:'862301810',contact2:'8237718610', enquiry:'test-enquiry',timing:'10:00 AM  TO 07:00 PM',closed_day:['Friday',' Monday'],services:'services test data', createdAt:"10 jun 2023" },
        { id: 'VH10', doctor_name: 'Anay', hospital_name: 'Morya hospital', images:[{}],reviews:'5',address:'varangaon', contact1:'862301810',contact2:'8237718610', enquiry:'test-enquiry',timing:'10:00 AM  TO 07:00 PM',closed_day:['Friday',' Monday'],services:'services test data', createdAt:"10 jun 2023" },
        { id: 'VH10', doctor_name: 'Anay', hospital_name: 'Morya hospital', images:[{}],reviews:'5',address:'varangaon', contact1:'862301810',contact2:'8237718610', enquiry:'test-enquiry',timing:'10:00 AM  TO 07:00 PM',closed_day:['Friday',' Monday'],services:'services test data', createdAt:"10 jun 2023" }
       
        
      ]
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Doctor is",this.route.snapshot.paramMap.get('id'))
    
  }
}