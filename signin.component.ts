import { Inject } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth';
import * as moment from "moment";
// import { config, from } from 'rxjs';
import { AppService } from '../app.service';
@Component({
  selector: 'ngx-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  // rememberMe = false;

  constructor(protected service: AppService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    // this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }
  ngOnInit(): void {
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.login(this.strategy, this.user).subscribe((result: any) => {
      this.submitted = false;
      if (result) {
        console.log('result ', result);
        localStorage.setItem('token', result.token)
      }
      // if (result.isSuccess()) {
      //   this.messages = result.getMessages();
      // } else {
      //   this.errors = result.getErrors();
      // }

      // const redirect = result.getRedirect();
      // if (redirect) {
      //   setTimeout(() => {
      //     return this.router.navigateByUrl(redirect);
      //   }, this.redirectDelay);
      // }
      this.cd.detectChanges();
    }, err => console.log('Login error ', err));
  }

  getConfigValue(key: string): any {
    if(key == 'forms.validation.username.required') return true
    return getDeepFromObject(this.options, key, null);
  }
}