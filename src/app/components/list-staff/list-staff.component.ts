import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff.model';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrl: './list-staff.component.css'
})
export class ListStaffComponent implements OnInit {
  name = ''
  staffs?: Staff[]
  currentIndex = -1
  @Input() idStore = 0
  @Input() component = ''
  @Output() componentChange = new EventEmitter<string>()

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.retrieveStaff()
  }

  emitChange() {
    this.componentChange.emit('addStaff')
  }

  retrieveStaff(): void {
    this.staffService.getStaffByStore(this.idStore)
      .subscribe({
        next: (data) => {
          this.staffs = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }

  searchByName(): void {
    this.staffService.findByName(this.idStore, this.name)
      .subscribe({
        next: (data) => {
          this.staffs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
