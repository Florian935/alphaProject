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


  constructor(private _httpService: HttpService, private _subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscribeForm = this._subscriptionService.initSubcriptionUserForm();
  }

  login() {
    this._httpService.postUser(this.subscribeForm.value).subscribe(
      (value) => console.log(value)
    );

    console.log('Données du formulaire...', this.subscribeForm.value);

  }
}
