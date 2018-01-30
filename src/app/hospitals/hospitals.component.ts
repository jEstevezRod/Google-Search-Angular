import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../router.animations";
import {PtCcommunicationService} from "../pt-ccommunication.service";

@Component({
    selector: 'app-hospitals',
    templateUrl: './hospitals.component.html',
    styleUrls: ['./hospitals.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class HospitalsComponent implements OnInit {

    constructor(public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.setUrl("Hospital")

    }

}
