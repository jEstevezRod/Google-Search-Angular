import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../settings.service";
import {PtCcommunicationService} from "../pt-ccommunication.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    ruta: any;

    public color;
    public font;
    public final;
    public logo = '../../assets/imgs/google.png';
    public url: string = "Home";

    constructor(public _SettingsService: SettingsService,
                public _PtCcommunicationService: PtCcommunicationService) {
    }

    ngOnInit() {
        this._SettingsService.bgHeader$.subscribe(
            data => {
                this.color = {'background-color': String(data)};
                this.final = {...this.color, ...this.font}
            }
        );
        this._SettingsService.fontHeader$.subscribe(
            data => {
                this.font = {'font-family': String(data)};
                this.final = {...this.color, ...this.font}
            });
        this._SettingsService.imglogo$.subscribe(
            data => {
                this.logo = '../../assets/imgs/' + String(data)
            }
        )
        this._PtCcommunicationService.url$.subscribe(data => this.ruta = data)

    }

}
