import {Component, OnInit} from '@angular/core';
import {GoogleSearchService} from "../../google-search.service";
import {LatLngService} from "../../lat-lng.service";
import {PtCcommunicationService} from "../../pt-ccommunication.service";


@Component({
    selector: 'app-zone-searcher',
    templateUrl: './zone-searcher.component.html',
    styleUrls: ['./zone-searcher.component.css']
})
export class ZoneSearcherComponent implements OnInit {

    lat: any;
    lng: any;
    city: string;
    query: string;
    radios = ["", 500, 1200, 3000, 7000, 15000];
    type: string = "lodging";
    radio: number;
    resultados = [];
    next: string;
    busqueda;
    diss: boolean = false;
    togg: boolean = true;

    constructor(public _LatLngService: LatLngService,
                public _GoogleSearchService: GoogleSearchService,
                public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.lat$.subscribe(data => {
            this.lat = data;
        });
        this._PtCcommunicationService.lng$.subscribe(data => {
            this.lng = data;
        });
        this._PtCcommunicationService.radio$.subscribe(data => {
            this.radio = data;
        });
        this._PtCcommunicationService.busqueSource$.subscribe(data => {
            this.busqueda = data;
        });
        this._PtCcommunicationService.togg$.subscribe(data => {
            this.togg = data;
        });

    }

    getPosition() {
        this.diss = false;
        this.resultados = [];
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
        if (this.radio) {
            this._PtCcommunicationService.setVoid(false);
            this._PtCcommunicationService.setBusque(false);
            this._GoogleSearchService.Petition(this.lat, this.lng, this.query, this.city, this.radio, this.type).subscribe(
                data => {
                    if (data.results.length > 0) {
                        for (let res of data.results) {
                            this.resultados.push(res)
                        }
                        this._PtCcommunicationService.setResul(this.resultados);
                        this.next = data.next_page_token;
                        if (this.next != undefined) {
                            this.diss = false
                        }
                    }
                },
                err => console.error("Pasó el siguiente error ", err),
                () => this._PtCcommunicationService.setVoid(false)
            )
        } else {
            alert("Can you introduces a valid radius, please?")
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
                        this.resultados.push(cas)
                    }
                }
            },
            err => console.error("Pasó el siguiente error ", err),
            () => console.log("Next Page peticion realizada")
        )
    }

    getRadio() {
        this._PtCcommunicationService.setRadio(this.radio);
    }

    changetog() {
        this._PtCcommunicationService.setTogg(!this.togg);
    }

}
