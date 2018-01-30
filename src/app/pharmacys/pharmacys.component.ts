import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../router.animations";
import {PtCcommunicationService} from "../pt-ccommunication.service";

@Component({
    selector: 'app-pharmacys',
    templateUrl: './pharmacys.component.html',
    styleUrls: ['./pharmacys.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class PharmacysComponent implements OnInit {

    constructor(public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.setUrl("Pharmacy")

    }

}
