import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition';

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

  text: string = "r pour l'instant";


  constructor(public navCtrl: NavController,
              private speechRecognition: SpeechRecognition) {

  }

  start() {

    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.text = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )

  }

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

  }




}
