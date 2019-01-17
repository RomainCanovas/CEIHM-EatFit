import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddMealDetailsPage} from "../add-meal-details/add-meal-details";

/**
 * Generated class for the AddMealListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-meal-list',
    templateUrl: 'add-meal-list.html',
})
export class AddMealListPage {

    public entreesPossibles = ["Salade", "Tomate - Mozzarella", "Quiche au thon"];
    public viandesPossibles = ["Poulet", "Boeuf", "Porc", "Canard", "Poisson", "Agneau"];
    public fruitLegPossibles = ["Tomates", "Carotte", "Melon", "Endive", "Salade", "Courgette", "Oignon", "Concombre", "Poireau", "Choux-fleur", "Pomme", "Banane", "Orange", "Clémentine", "Pêche", "Poire", "Raisin", "Pamplemousse", "Kiwi", "Fraise"];
    public accompagnementsPossibles = ["Riz", "Pâtes", "Quinoa", "Semoule", "Frites"];
    public fromagesPossibles = ["Camembert", "Chêvre", "Brebis", "Comté", "Emmental", "Saint-nectaire", "Cantal", "Reblochon", "Roquefort"]
    public platPrepares = ["Couscous", "Blanquette de veau", "Beoeuf Bourguignon", "Raclette", "Tomates farcies"];
    public dessertsPossibles = ["Yaourt", "Fondant au chocolat", "Crêpes", "Mousse au chocolat", "Île flottante", "Tarte aux pommes", "Tiramisu", "Crème brûlée", "Profiteroles", "Millefeuille", " Tarte aux fraises"];
    public boissonsPossibles = ["Soda", "Eau", "Sirop"];
    public repas = [];

    items: string[] = [];
    selectedItems: string[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.initializeItems();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddMealListPage');
    }

    ajouterItem(item) {
        let index = this.repas.indexOf(item);
        if (index === -1) {
            this.repas.push(item)
        } else {
            //monTableau.splice(0, 2);
            this.repas.splice(index, 1);
        }
    }

    valider() {
        let data = {
            tab: this.repas
        };
        this.navCtrl.push(AddMealDetailsPage, data)
    }

    initializeItems() {
        for (let item of this.entreesPossibles) {
            this.items.push(item);
        }
        for (let item of this.viandesPossibles) {
            this.items.push(item);
        }
        for (let item of this.accompagnementsPossibles) {
            this.items.push(item);
        }
        for (let item of this.fruitLegPossibles) {
            this.items.push(item);
        }
        for (let item of this.fromagesPossibles) {
            this.items.push(item);
        }
        for (let item of this.platPrepares) {
            this.items.push(item);
        }
        for (let item of this.dessertsPossibles) {
            this.items.push(item);
        }
        for (let item of this.boissonsPossibles) {
            this.items.push(item);
        }
    }

    getItems(ev: any) {
        this.initializeItems();
        this.selectedItems = [];
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.selectedItems = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
        this.selectedItems = this.cleanArray(this.selectedItems);
    }

    cleanArray(array) {
        var i, j, len = array.length, out = [], obj = {};
        for (i = 0; i < len; i++) {
            obj[array[i]] = 0;
        }
        for (j in obj) {
            out.push(j);
        }
        return out;
    }
}
