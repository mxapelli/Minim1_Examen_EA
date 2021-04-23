import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {VaccineService} from '../vaccine.service';

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.css']
})
export class VaccineFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private caseService: VaccineService) { }
  name = new FormControl('');
  description = new FormControl('');
  tecnology = new FormControl('');
  date = new FormControl('');

  ngOnInit(): void {
  }
  submitData(): void {

      const vaccine2 = {
        name: this.name.value,
        description: this.description.value,
        tecnology: this.tecnology.value,
        date: this.date.value
      };
      this.caseService.postVaccine(vaccine2).subscribe();
  }
}
