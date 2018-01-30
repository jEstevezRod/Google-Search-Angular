import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PtCcommunicationService {

    private latSource = new Subject<number>();
    public lat$ = this.latSource.asObservable();

    private lngSource = new Subject<number>();
    public lng$ = this.lngSource.asObservable();

    private radioSource = new Subject<any>();
    public radio$ = this.radioSource.asObservable();

    private resulSource = new Subject<any>();
    public resul$ = this.resulSource.asObservable();

    private busqueSource = new Subject<any>();
    public busqueSource$ = this.busqueSource.asObservable();

    private toggSource = new Subject<any>();
    public togg$ = this.toggSource.asObservable();

    private voidSource = new Subject<any>();
    public void$ = this.voidSource.asObservable();

    private isOpenSource = new Subject<any>();
    public isOpen$ = this.isOpenSource.asObservable();

    private restaurantsSource = new Subject<any>();
    public restaurants$ = this.restaurantsSource.asObservable();

    private urlSource = new Subject<any>();
    public url$ = this.urlSource.asObservable();

    constructor() {
    }

    setLatLng(lat: number, lng: number) {
        this.latSource.next(lat);
        this.lngSource.next(lng);
    }

    setRadio(radio) {
        this.radioSource.next(radio);
    }

    setResul(resul) {
        this.resulSource.next(resul);
    }

    setBusque(resul) {
        this.busqueSource.next(resul);
    }

    setTogg(togg) {
        this.toggSource.next(togg);
    }

    setVoid(value) {
        this.voidSource.next(value)
    }

    setisOpen(value) {
        this.isOpenSource.next(value)
    }

    setRestaurants(value) {
        this.restaurantsSource.next(value);
    }

    setUrl(value) {
        this.urlSource.next(value)
    }
}
