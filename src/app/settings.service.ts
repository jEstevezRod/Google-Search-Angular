import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SettingsService {

    private bgHeaderFlow = new Subject<any>();
    public bgHeader$ = this.bgHeaderFlow.asObservable();

    private bgMainFlow = new Subject<any>();
    public bgMain$ = this.bgMainFlow.asObservable();

    private bgFooterFlow = new Subject<any>();
    public bgFooter$ = this.bgFooterFlow.asObservable();

    private fontHeaderFlow = new Subject<string>();
    public fontHeader$ = this.fontHeaderFlow.asObservable();

    private fontMainFlow = new Subject<string>();
    public fontMain$ = this.fontMainFlow.asObservable();

    private fontFooterFlow = new Subject<string>();
    public fontFooter$ = this.fontFooterFlow.asObservable();

    private imglogoFlow = new Subject<any>();
    public imglogo$ = this.imglogoFlow.asObservable();

    constructor() {
    }

    setbgHeader(value) {
        this.bgHeaderFlow.next(value);
    }

    setbgMain(value) {
        this.bgMainFlow.next(value);
    }

    setbgFooter(value) {
        this.bgFooterFlow.next(value);
    }

    setfontHeader(value) {
        this.fontHeaderFlow.next(value)
    }

    setfontMain(value) {
        this.fontMainFlow.next(value)
    }

    setfontFooter(value) {
        this.fontFooterFlow.next(value)
    }

    setimglogo(value) {
        this.imglogoFlow.next(value)
    }
}
