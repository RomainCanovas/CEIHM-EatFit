import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import {AddMealDetailsPage} from "../add-meal-details/add-meal-details";

/**
 * Generated class for the AddMealVocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-meal-vocal',
  templateUrl: 'add-meal-vocal.html',
})
export class AddMealVocalPage {

  text: string = null;
  error = false;
  loading = false;


  constructor(public navCtrl: NavController,
              private speechRecognition: SpeechRecognition) {

    //init()

  }

  init() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      });
  }

  start() {
    this.init();
  this.error = false;
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.text = matches[0];
          this.sendRequest();
        },
        (onerror) => console.log('error:', onerror)
      )

  }

  fake() {
    this.text = "J'ai mangé un bon poulet et des pates";
    this.sendRequest();
  }

  sendRequest() {
    this.loading = true;
    const q = encodeURIComponent(this.text);
    const uri = 'https://api.wit.ai/message?q=' + q;
    const auth = 'Bearer DGGV4DK44RKR5TY4WKNQ4VZRNAND7ZU7';
    let self = this;
    fetch(uri, {headers: {Authorization: auth}})
      .then(res => {
          res.json().then(data => {
            let foods = []
            for (let d in data.entities) {
              foods.push(data.entities[d][0].value)
            }
            this.loading = false;
            if (foods.length > 0)
              this.navCtrl.push(AddMealDetailsPage, {tab: foods});
            else {
              this.error = true;

            }
          })
        }
      )
  }

  /*
  ngOnInit() {

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }
      });
  }*/


}
