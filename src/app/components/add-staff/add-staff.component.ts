import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../../models/store.model';
import { StoreServiceService } from '../../services/store-service.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff.model';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent implements OnInit {
  selectedOption = ''
  stores?: Store[]
  @Input() idStore = -1

  staff: Staff = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    store: {}
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

  newStaff(): void {
    const data = {
      name: this.staff.name,
      surname: this.staff.surname,
      phone: this.staff.phone,
      email: this.staff.email,
      store: { id: this.selectedOption }
    }

    this.staffService.create(data)
      .subscribe({
        next: (data) => {
          this.staff = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }
}
