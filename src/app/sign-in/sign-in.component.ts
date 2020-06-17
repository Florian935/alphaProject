import { SignInService } from './services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide = true;
  signInForm: FormGroup;

  constructor(
    private _signInService: SignInService,
    private router: Router
    ) { }

  ngOnInit() {
    this.signInForm = this._signInService.initSignInForm();
  }

  onSignIn(): void {
    // TODO : vérif si couple login/pwd correct -> si oui -> redirection vers profil sinon afficher message invalid credentials
    this.router.navigate(['profil']);
  }

}
