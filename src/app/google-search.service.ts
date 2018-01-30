import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class GoogleSearchService {

    url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB5iXkesfw6_-BJV_oYBW5psuas4n-4yn4';
    url2 = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyB5iXkesfw6_-BJV_oYBW5psuas4n-4yn4';
    url3 = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&maxheight=600&key=AIzaSyB5iXkesfw6_-BJV_oYBW5psuas4n-4yn4&photo_reference=';
    url4 = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyB5iXkesfw6_-BJV_oYBW5psuas4n-4yn4&type=restaurant';
    url5 = 'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyB5iXkesfw6_-BJV_oYBW5psuas4n-4yn4';
    urllatlng = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB5iXkesfw6_-BJV_oYBW5psuas4n-4yn4';
    urlroutes = 'https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyBJ0rZPvf_i1yQdpWJYJDVNYC2ienEDLkc&units=metric';
    urlMod;
    urlInf;
    urlid;
    urlroutvar;

    constructor(public http: HttpClient, public petix: HttpClient, public info: HttpClient) {
    }

    Petition(lat = undefined, long = undefined, query = "hotel", city = undefined, radius, type = undefined): Observable<any> {
        this.urlMod = this.url;
        if (lat != undefined && long != undefined) {
            this.urlMod = this.urlMod + '&location=' + lat + ',' + long + ''
        }
        if (type != undefined) {
            this.urlMod += '&type=' + type
        }
        if (radius != undefined) {
            this.urlMod += '&radius=' + radius
        }
        if (query != undefined) {
            this.urlMod += '&query=' + query
        }
        if (city != undefined) {
            this.urlMod += '+in+' + city
        }
        console.log(this.urlMod);
        return this.http.get(this.urlMod)
    }

    NextPage(token): Observable<any> {
        return this.petix.get(this.urlMod + '&pagetoken=' + String(token))
    }

    NamePetition(query = undefined, city = undefined, type = undefined): Observable<any> {
        this.urlMod = this.url2;
        query = query.split(' ').join('+');
        city = city.split(' ').join('+');
        if (type != undefined) {
            this.urlMod += '&type=' + type + ''
        }
        if (query != undefined) {
            this.urlMod += '&query=+' + query + ''
        }
        if (city != undefined) {
            this.urlMod += '+in+' + city + ''
        }
        console.log(this.urlMod);
        return this.http.get(this.urlMod)
    }

    RestaurantPetition(type, city, open): Observable<any> {
        this.urlMod = this.url4;
        this.urlMod += '&query=' + type;
        city = city.split(' ').join('+');
        this.urlMod += '+in+' + city;
        if (open) {
            this.urlMod += '&opennow';
        }
        return this.http.get(this.urlMod);
    }

    InfoPetition(ref): Observable<any> {
        this.urlInf = this.url5;
        this.urlInf += '&placeid=' + ref;
        return this.info.get(this.urlInf);
    }

    LatlngToId(lat, lng): Observable<any> {
        this.urlid = this.urllatlng;
        this.urlid += '&latlng=' + lat + ',' + lng;
        console.log(this.urlid);
        return this.petix.get(this.urlid);
    }

    getRoutes(origen, destination, by): Observable<any> {
        this.urlroutvar = this.urlroutes;
        this.urlroutvar += '&origin=place_id:' + origen + '&destination=place_id:' + destination + '&mode=' + by;
        return this.http.get(this.urlroutvar);
    }

    //AIzaSyBJ0rZPvf_i1yQdpWJYJDVNYC2ienEDLkc google routes

}
