import {Component, Input, OnInit} from '@angular/core';
import {GoogleSearchService} from "../../google-search.service";
import {PtCcommunicationService} from "../../pt-ccommunication.service";

@Component({
    selector: 'app-food-place',
    templateUrl: './food-place.component.html',
    styleUrls: ['./food-place.component.css']
})
export class FoodPlaceComponent implements OnInit {

    info;

    @Input() place;
    public direccion: any;
    public origen: any;
    public esc: boolean = true;
    public rutas: any;
    public esc2: boolean = true;
    public lat: any;
    public lng: any;
    public byway: any;

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
        console.log(this.place.place_id)
    }

    getInfo(ref) {
        this._GoogleSearchService.InfoPetition(ref).subscribe(
            data => {
                this.info = data;
                console.log("dat", data)
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
        );
        this.esc = false;
    }

    getRoutes() {
        this._GoogleSearchService.getRoutes(this.origen, this.place.place_id, this.byway).subscribe(data => {
            this.rutas = data;
            console.log(this.rutas)
        });
        this.esc2 = false;

    }
}
