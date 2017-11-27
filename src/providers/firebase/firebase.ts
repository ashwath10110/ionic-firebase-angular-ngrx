import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

	// constructor(public http: HttpClient) {
	//   console.log('Hello FirebaseProvider Provider');
	// }

	constructor(public afd: AngularFireDatabase, public http: HttpClient) { }

	getShoppingItems() {
		return this.afd.list('/shoppingItems').valueChanges();
	}

	addItem(name) {
		this.afd.list('/shoppingItems/').push(name);
	}

	removeItem(id) {
		this.afd.list('/shoppingItems/').remove(id);
	}

}
