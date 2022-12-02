import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';

  mobile = [
    {
      name: 'xyz',
      price: 2000,
      ram: 6,
      storage: 64,
    },
    {
      name: 'abc',
      price: 10000,
      ram: 4,
      storage: 16,
    },
  ];
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
