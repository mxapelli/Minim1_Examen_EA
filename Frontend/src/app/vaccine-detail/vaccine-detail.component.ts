import {Component, Input, OnInit} from '@angular/core';
import {Vaccine} from '../models/vaccine';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {VaccineService} from '../vaccine.service';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrls: ['./vaccine-detail.component.css']
})
export class VaccineDetailComponent implements OnInit {
  name = new FormControl('');
  description = new FormControl('');
  tecnology = new FormControl('');
  date = new FormControl('');

  @Input() vaccine: Vaccine;

  constructor(private formBuilder: FormBuilder, private vaccineService: VaccineService) { }

  ngOnInit(): void {
  }

  updateData(): void {
      const vaccine2 = {
        name: this.name.value,
        description: this.description.value,
        tecnology: this.tecnology.value,
        date: this.date.value
      
      };
      this.vaccineService.updateVaccine(vaccine2, this.vaccine._id).subscribe();
    
  }
}
