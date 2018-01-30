import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../router.animations";
import {PtCcommunicationService} from "../pt-ccommunication.service";

@Component({
    selector: 'app-parkings',
    templateUrl: './parkings.component.html',
    styleUrls: ['./parkings.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class ParkingsComponent implements OnInit {

    constructor(public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.setUrl("Parkings")
    }

}
