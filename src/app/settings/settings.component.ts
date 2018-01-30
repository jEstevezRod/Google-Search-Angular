import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../settings.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    public bgHeader;
    public bgMain;
    public bgFooter;
    public colorbg;
    public font;
    public fontmain;
    public fontfooter;
    public estilos;

    constructor(public _SettingsService: SettingsService) {
    }

    ngOnInit() {
        this._SettingsService.bgMain$.subscribe(data => {
            this.colorbg = {'background-color': String(data)}
        });
        this._SettingsService.fontMain$.subscribe(
            data => {
                this.fontmain = {'font-family': String(data)};
                this.estilos = {...this.colorbg, ...this.fontmain}
            })
    }

    bgchange() {
        this._SettingsService.setbgHeader(this.bgHeader)
    }

    bgchangemain() {
        this._SettingsService.setbgMain(this.bgMain)
    }

    bgchangefoot() {
        this._SettingsService.setbgFooter(this.bgFooter)
    }

    fontchangehead() {
        this._SettingsService.setfontHeader(this.font);
        console.log(this.font)
    }

    fontchangemain() {
        this._SettingsService.setfontMain(this.fontmain);
        console.log(this.fontmain)
    }

    fontchangefoot() {
        this._SettingsService.setfontFooter(this.fontfooter)
    }

    imgchange(value) {
        this._SettingsService.setimglogo(value)
    }
}
