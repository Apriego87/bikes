import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store.model';
import { StoreServiceService } from '../../services/store-service.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { StaffService } from '../../services/staff.service';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent implements OnInit {
  selectedOption = ''
  stores?: Store[]

  newStaff = {
    name: '',
    surname: '',
    phone: '',
    email: ''
  }

  constructor(private storeService: StoreServiceService, private staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaff()
  }

  getStaff(): void {
    this.storeService.getAll()
      .subscribe({
        next: (data) => {
          this.stores = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }
}
