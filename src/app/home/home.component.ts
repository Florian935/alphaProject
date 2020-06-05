import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  hide = true;
  connectForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.connectForm = this.fb.group({
        id: [],
        password: []
    });
  }

  login() {
    console.log('Données du formulaire...', this.connectForm.value);
  }

  

}
