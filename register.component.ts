import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';
import { getDeepFromObject } from '@nebular/auth';
import { AppService } from '../app.service';
import { NbAuthResult } from '@nebular/auth';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  
  ngOnInit(){
({
      username:['', Validators.required],
      emailaddress: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required]
    })
  }

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];

  constructor(protected service: AppService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      console.log(result);
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
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}