import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-test',
	templateUrl: 'test.html',
})
export class TestPage {

	// constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
	// 	this.items = afDB.list('/shoppingItems').valueChanges();
	// }

	// ionViewDidLoad() {
	// 	console.log('ionViewDidLoad TestPage');
	// }

	shoppingItems: Observable<any[]>;
	newItem = '';

	constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
		this.shoppingItems = this.firebaseProvider.getShoppingItems();
	}

	addItem() {
		this.firebaseProvider.addItem(this.newItem);
	}

	removeItem(id) {
		this.firebaseProvider.removeItem(id);
	}

}
