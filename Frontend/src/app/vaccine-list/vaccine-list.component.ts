import { Component, OnInit } from '@angular/core';
import {VaccineService} from '../vaccine.service';
import {Vaccine} from '../models/vaccine';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent implements OnInit {

  vaccines: Vaccine[];
  selectedVaccine: Vaccine;
  addVaccineClicked = false;

  constructor(private vaccineService: VaccineService) { }

  getVaccines(): void {
    this.vaccineService.getVaccines().subscribe(vaccines => this.vaccines = vaccines);
  }
  onSelect(vaccineClicked: Vaccine): void {
    this.selectedVaccine = vaccineClicked;
  }
  ngOnInit(): void {
    this.getVaccines();
  }
  clickedAddVaccine(): void {
    if (this.addVaccineClicked === true){
      this.addVaccineClicked = false;
    }
    else {
      this.addVaccineClicked = true;
    }
  }

}
