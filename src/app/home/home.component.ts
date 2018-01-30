import {Component, OnInit} from '@angular/core';
import {PtCcommunicationService} from "../pt-ccommunication.service";
import {FadeInOut} from "../router.animations";

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [FadeInOut()],
    host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
    constructor(public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._PtCcommunicationService.setUrl("");

        $(function () {
            $(".typed").typed({
                strings: ["Whatever you are, be the best one.<br/>Because we are "],
                typeSpeed: 50,
                startDelay: 1200,
                backSpeed: 20,
                backDelay: 500,
                showCursor: false,
                callback: () => {
                    $(".dos").typed({
                        strings: ["developers.", "designers.", "people."],
                        typeSpeed: 30,
                        backSpeed: 50,
                        backDelay: 500,
                        showCursor: false,
                    })
                }
            })
        })
    }

}
