import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-description',
  templateUrl: './doctor-description.component.html',
  styleUrls: ['./doctor-description.component.css']
})
export class DoctorDescriptionComponent implements OnInit {
  doctorName: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Doctor is is",this.route.snapshot.paramMap.get('id'))
    // this.route.paramMap.subscribe((params)=>{
    //   const doctorId =params.get('id');
    //   alert(params)
    // })

    // this.doctorName = this.route.snapshot.params['doctorName'];
    // Use this.doctorName to fetch and display doctor's information as needed
  }
}