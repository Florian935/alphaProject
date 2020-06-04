import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.subscribeForm = this.fb.group({
      firstname: [],
      lastname: [],
      email: []
    });
  }

  login() {
    console.log('Données du formulaire...', this.subscribeForm.value);
  }
}
