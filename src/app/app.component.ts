import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./settings.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    fontmain: any;
    estilos: any;
    bgmain: { 'background-color': string; };
    title = 'live';

    constructor(public _SettingsService: SettingsService) {
    }

    ngOnInit() {
        this._SettingsService.bgMain$.subscribe(data => {
            this.bgmain = {'background-color': String(data)};
            this.estilos = {...this.bgmain, ...this.fontmain}
        });
    }


}



