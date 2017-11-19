import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  NavController,
  Loading,
  LoadingController,
  AlertController
} from 'ionic-angular';

// import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public userData: UserData,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public afDatabase: AngularFireDatabase
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup(form: NgForm) {

    if (!form.valid) {

    } else {

      this.submitted = true;
      let email = this.signup.username;
      let password = this.signup.password;
      this.authProvider.signupUser(email, password)
        .then(authData => {

          this.afDatabase.object(`/userProfile/${authData.uid}`).set({
            email: email
          });

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
}
