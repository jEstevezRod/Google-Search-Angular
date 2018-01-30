import {Component, OnInit} from '@angular/core';
import {PtCcommunicationService} from "../pt-ccommunication.service";
import {SettingsService} from "../settings.service";
import {FadeInOut} from "../router.animations";


@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class HotelsComponent implements OnInit {

    public opacity: any = 0.30;
    public lat: number = 0;
    public lng: number = 0;
    public zoom: any = 15;
    public radio: number;
    public resultados: any;
    public busqueda = true;
    public byName: boolean = false;
    public byZone: boolean = false;
    public togg: boolean = true;
    public myvoid: boolean = true;
    public filtro: string;
    public fontmain: any;
    public estilos: any;
    public bgmain: any;

    constructor(public _PtCcommunicationService: PtCcommunicationService, public _SettingsService: SettingsService) {

    }

    ngOnInit() {
        this.initMap();
        this._PtCcommunicationService.lat$.subscribe(data => this.lat = data);
        this._PtCcommunicationService.lng$.subscribe(data => this.lng = data);
        this._PtCcommunicationService.radio$.subscribe(data => this.radio = parseInt(data));
        this._PtCcommunicationService.resul$.subscribe(data => this.resultados = data);
        this._PtCcommunicationService.busqueSource$.subscribe(data => this.busqueda = data);
        this._PtCcommunicationService.togg$.subscribe(data => this.togg = data);
        this._PtCcommunicationService.void$.subscribe(data => this.myvoid = data);
        this._SettingsService.bgMain$.subscribe(data => {
            this.bgmain = {'background-color': String(data)};
            this.estilos = {...this.bgmain, ...this.fontmain}
        });
        this._SettingsService.fontMain$.subscribe(
            data => {
                this.fontmain = {'font-family': String(data)};
                this.estilos = {...this.bgmain, ...this.fontmain}
            });
        this._PtCcommunicationService.setUrl("Hotels")

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

    showSearcher(value) {
        if (value) {
            this.byName = true;
            this.byZone = false;
        } else {
            this.byZone = true;
            this.byName = false;
        }
    }


}
