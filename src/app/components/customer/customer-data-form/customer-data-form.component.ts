import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.css']
})
export class CustomerDataFormComponent implements OnInit {

  dataForm: FormGroup;

  constructor(_fb: FormBuilder) {
    this.dataForm = _fb.group({
      gender: new FormControl(null),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      day: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
      nationality: new FormControl(null),
    });
   }

  ngOnInit(): void {
    
  }

}
