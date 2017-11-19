import {
  NavController,
  Loading,
  LoadingController,
  AlertController
} from 'ionic-angular';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: 'ashwath10110@gmail.com', password: 'ashashash' };
  submitted = false;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public userData: UserData,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider
  ) { }

  onLogin(form: NgForm) {

    if (!form.valid) {

    } else {

      this.submitted = true;
      let email = this.login.username;
      let password = this.login.password;
      this.authProvider.loginUser(email, password)
        .then(authData => {
          
          this.userData.login(authData.email);
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(TabsPage);
          });
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });

      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
