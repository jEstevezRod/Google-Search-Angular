import {Component, Input, OnInit} from '@angular/core';
import {GoogleSearchService} from "../../google-search.service";
import {PtCcommunicationService} from "../../pt-ccommunication.service";


@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
    lng;
    lat;
    info;
    direccion;
    origen;
    rutas;
    byway;
    esc = true;
    esc2 = true;

    @Input() hotel;
    public destino;


    //public information;

    constructor(public _GoogleSearchService: GoogleSearchService,
                public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.lat$.subscribe(data => {
            this.lat = data;
        });
        this._PtCcommunicationService.lng$.subscribe(data => {
            this.lng = data;
        });
        console.log(this.hotel.place_id)

    }

    getInfo(ref) {
        this._GoogleSearchService.InfoPetition(ref).subscribe(
            data => {
                this.info = data;
            })
    }

    quitRadio() {
        this._PtCcommunicationService.setRadio(0)
    }

    getDirc() {
        this._GoogleSearchService.LatlngToId(this.lat, this.lng).subscribe(
            data => {
                this.direccion = data;
                this.origen = data.results[0].place_id;
            }
        )
        this.esc = false;
    }

    getRoutes() {
        this._GoogleSearchService.getRoutes(this.origen, this.hotel.place_id, this.byway).subscribe(data => {
            this.rutas = data;
            console.log(this.rutas)
        })
        this.esc2 = false;

    }

}

