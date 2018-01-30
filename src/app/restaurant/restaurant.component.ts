import {Component, OnInit} from '@angular/core';
import {PtCcommunicationService} from "../pt-ccommunication.service";
import {FadeInOut} from "../router.animations";

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class RestaurantComponent implements OnInit {

    togg: boolean = true;
    lat: number = 0;
    lng: number = 0;
    zoom: number = 15;
    restaurantes: any = [];
    myvoid;
    filtro;

    public busqueda = true;

    constructor(public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this.initMap();
        this._PtCcommunicationService.restaurants$.subscribe(data => {
            this.restaurantes = data;
            this.zoom = 13;
        });
        this._PtCcommunicationService.lat$.subscribe(data => this.lat = data);
        this._PtCcommunicationService.lng$.subscribe(data => this.lng = data);
        this._PtCcommunicationService.togg$.subscribe(data => {
            this.togg = data;
        });
        this._PtCcommunicationService.busqueSource$.subscribe(data => this.busqueda = data);
        this._PtCcommunicationService.setUrl("Restaurant")
    }

    initMap() {
        if ("geolocation" in navigator) {
            return navigator.geolocation.getCurrentPosition(data => {
                    this.lat = data.coords.latitude;
                    this.lng = data.coords.longitude;
                },
                err => console.log(err),
            )
        } else {
            console.error("Geolocalitation desactivated, I'm sorry my friend, I can't find you");
        }
    };

    placeMarker($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        console.log(this.lat);
        console.log(this.lng);
        this.busqueda = false;
        this._PtCcommunicationService.setLatLng(this.lat, this.lng);
    }

}
