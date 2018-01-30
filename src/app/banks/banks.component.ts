import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../router.animations";
import {PtCcommunicationService} from "../pt-ccommunication.service";

@Component({
    selector: 'app-banks',
    templateUrl: './banks.component.html',
    styleUrls: ['./banks.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class BanksComponent implements OnInit {

    constructor(public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.setUrl("Banks")

    }

}
