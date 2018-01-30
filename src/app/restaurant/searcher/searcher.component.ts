import {Component, OnInit} from '@angular/core';
import {LatLngService} from "../../lat-lng.service";
import {PtCcommunicationService} from "../../pt-ccommunication.service";
import {GoogleSearchService} from "../../google-search.service";

@Component({
    selector: 'app-searcher',
    templateUrl: './searcher.component.html',
    styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
    public togg: any = true;
    public diss: boolean;
    public next: any;
    public hid: boolean = true;
    public openNow: boolean = true;
    public city: any;
    public lng: number;
    public lat: number;
    public zoom: number;
    public typeFood: string;
    public restaurantes: any = [];

    constructor(private _LatLngService: LatLngService,
                private _PtCcommunicationService: PtCcommunicationService,
                private _GoogleSearchService: GoogleSearchService) {
    }

    ngOnInit() {
    }

    getPosition() {
        this._LatLngService.calculateLatLng(this.city).subscribe(
            data => {
                if (data.query.count > 0) {
                    this.zoom = 13;
                    this.lat = parseFloat(data.query.results.channel.item.lat);
                    this.lng = parseFloat(data.query.results.channel.item.long);
                    this._PtCcommunicationService.setLatLng(this.lat, this.lng);
                } else {
                    alert("No results, check your city and try it again!")
                }
            },
            err => console.error("You have the next issue : ", err),
            () => console.log("Petition completed!")
        )
    }

    getOpenNow(value) {
        this.openNow = value;
        this._PtCcommunicationService.setisOpen(this.openNow);
    }

    getRestaurant() {
        this._PtCcommunicationService.setBusque(false);
        this.hid = false;
        this.diss = false;
        this.restaurantes = [];
        if (this.city) {
            this._GoogleSearchService.RestaurantPetition(this.typeFood, this.city, this.openNow).subscribe(
                data => {
                    if (data.results.length > 0) {
                        for (let res of data.results) {
                            this.restaurantes.push(res)
                        }
                        this._PtCcommunicationService.setRestaurants(this.restaurantes);
                        this.lat = data.results[0].geometry.location.lat;
                        this.lng = data.results[0].geometry.location.lng;
                        this._PtCcommunicationService.setLatLng(this.lat, this.lng);
                        this.next = data.next_page_token;
                        if (this.next != undefined) {
                            this.diss = false;
                        }
                    }
                },
                err => console.error(err),
                () => {
                    this._PtCcommunicationService.setLatLng(this.lat, this.lng);
                }
            )
        } else {
            alert("Introduces a city please! ")
        }
    }

    nextPage() {
        this._GoogleSearchService.NextPage(this.next).subscribe(
            data => {
                if (true) {
                    this.next = data.next_page_token;
                    if (this.next == undefined) {
                        this.diss = true;
                    } else {
                        this.diss = false
                    }
                    for (let cas of data.results) {
                        this.restaurantes.push(cas)
                    }
                }
            },
            err => console.error("Pasó el siguiente error ", err),
            () => console.log("Next Page peticion realizada")
        )
    }

    gettype() {
        console.log(this.typeFood);
    }

    changetog() {
        this._PtCcommunicationService.setTogg(!this.togg);
    }
}
