import { SubscriptionService } from './services/subscription.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from './../core/services/http.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  hide = true;
  subscribeForm: FormGroup;


  constructor(private http: HttpService, private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscribeForm = this.subscriptionService.initSubcriptionUserForm();
  }

  login() {
    this.http.postUser(this.subscribeForm.value).subscribe(
      (value) => console.log(value)
    );

    console.log('Données du formulaire...', this.subscribeForm.value);

  }
}
