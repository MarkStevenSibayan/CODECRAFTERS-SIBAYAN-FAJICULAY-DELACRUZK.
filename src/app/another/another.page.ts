import { Component } from '@angular/core';

@Component({
  templateUrl: 'another.page.html',
})
export class AnotherPage {
  assignmentMessage = "Hello, We are the CodeCrafters";
  constructor() {}

  ionViewWillEnter(){
    console.log('ionViewWillEnter event fired');

  }
}