import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  groceryTypes: string[] = ['Select', 'Produce', 'Dairy', 'Bakery'];
  freshProduce: string[] = ['Brocolli', 'Avocado', 'Orange'];
  dairyEggs: string[] = ['Whole Milk', 'Country Eggs'];
  bakeryItems: string[];
  selectedGType;

  constructor() {
    this.selectedGType = this.groceryTypes[0];
  }

  ngOnInit(): void {}
}
