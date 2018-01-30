import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../settings.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public color;
    public font;
    public estilos;

    constructor(public _SettingsService: SettingsService) {
    }

    ngOnInit() {
        this._SettingsService.bgFooter$.subscribe(data => {
                this.color = {'background-color': String(data)};
                this.estilos = {...this.color, ...this.font};

            }
        );
        this._SettingsService.fontFooter$.subscribe(data => {
            this.font = {'font-family': String(data)};
            this.estilos = {...this.color, ...this.font};
            console.log(this.estilos)
        })
    }

}
