import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { HttpService } from './../core/services/http.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscribeForm: FormGroup;
  hide = true;


  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit() {

    this.subscribeForm = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      pseudo: [],
    });

  }

  login() {
    this.http.postUser(this.subscribeForm.value).subscribe(
      (value) => console.log(value)
    );

    console.log('Données du formulaire...', this.subscribeForm.value);

  }
}
