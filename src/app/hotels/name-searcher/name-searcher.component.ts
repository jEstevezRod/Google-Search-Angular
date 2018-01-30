import {Component, Input, OnInit} from '@angular/core';
import {PtCcommunicationService} from "../../pt-ccommunication.service";
import {GoogleSearchService} from "../../google-search.service";
import {LatLngService} from "../../lat-lng.service";

@Component({
    selector: 'app-name-searcher',
    templateUrl: './name-searcher.component.html',
    styleUrls: ['./name-searcher.component.css']
})
export class NameSearcherComponent implements OnInit {

    @Input() busqueda;

    constructor(public _LatLngService: LatLngService,
                public _GoogleSearchService: GoogleSearchService,
                public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.lat$.subscribe(data => this.lat = data);
        this._PtCcommunicationService.lng$.subscribe(data => this.lng = data);
        this._PtCcommunicationService.resul$.subscribe(data => this.resultados = data);

    }

    lat: any = 37.19236493502681;
    lng: any = -3.6173585057258606;
    city: string;
    query: string;
    resultados = [];
    type: string = "lodging";
    togg: boolean = true;


    getPosition() {
        this._LatLngService.calculateLatLng(this.city).subscribe(
            data => {
                if (data.query.count > 0) {
                    this.lat = parseFloat(data.query.results.channel.item.lat);
                    this.lng = parseFloat(data.query.results.channel.item.long);
                    this._PtCcommunicationService.setLatLng(this.lat, this.lng);
                } else {
                    alert("Sin resultados, comprueba el nombre introducido")
                }
            },
            err => console.error("Pasó el siguiente error ", err),
            () => console.log("Peticion realizada!")
        )
    }

    getHotels() {
        this._PtCcommunicationService.setVoid(false);
        this._PtCcommunicationService.setResul([]);
        this._PtCcommunicationService.setBusque(false);
        this._GoogleSearchService.NamePetition(this.query, this.city, this.type).subscribe(
            data => {
                if (data.results.length > 0) {
                    for (let res of data.results) {
                        this.resultados.push(res)
                    }
                    this.lat = data.results["0"].geometry.location.lat;
                    this.lng = data.results["0"].geometry.location.lng;
                    this._PtCcommunicationService.setLatLng(this.lat, this.lng);
                    this._PtCcommunicationService.setResul(this.resultados);
                }
            },
            err => console.error("Pasó el siguiente error ", err),
            () => console.log("Hoteles obtenidos")
        )
    }

    changetog() {
        this._PtCcommunicationService.setTogg(!this.togg);
    }


}
