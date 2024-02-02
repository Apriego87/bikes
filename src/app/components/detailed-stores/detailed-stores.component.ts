import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-stores',
  templateUrl: './detailed-stores.component.html',
  styleUrl: './detailed-stores.component.css'
})
export class DetailedStoresComponent {
  constructor(private route: ActivatedRoute) {
    
    const name = this.route.snapshot.queryParams.name;
    console.log(`Name: ${name}`);
  }
}
