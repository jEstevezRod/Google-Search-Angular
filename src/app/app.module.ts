import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgmCoreModule} from "@agm/core";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LatLngService} from "./lat-lng.service";
import {PtCcommunicationService} from "./pt-ccommunication.service";
import {HotelsComponent} from './hotels/hotels.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {HomeComponent} from './home/home.component';
import {GoogleSearchService} from "./google-search.service";
import {HotelComponent} from './hotels/hotel/hotel.component';
import {NameSearcherComponent} from './hotels/name-searcher/name-searcher.component';
import {ZoneSearcherComponent} from './hotels/zone-searcher/zone-searcher.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SettingsComponent} from './settings/settings.component';
import {SettingsService} from "./settings.service";
import {FiltroBusquedasPipe} from './filtro-busquedas.pipe';
import {SearcherComponent} from './restaurant/searcher/searcher.component';
import {FoodPlaceComponent} from './restaurant/food-place/food-place.component';
import {SplitterPipe} from './splitter.pipe';
import {BanksComponent} from './banks/banks.component';
import {DeleteTagsPipe} from './delete-tags.pipe';
import {HospitalsComponent} from './hospitals/hospitals.component';
import {ParkingsComponent} from './parkings/parkings.component';
import {PharmacysComponent} from './pharmacys/pharmacys.component';


const routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'hotels', component: HotelsComponent},
    {path: 'restaurant', component: RestaurantComponent},
    {path: 'banks', component: BanksComponent},
    {path: 'hospitals', component: HospitalsComponent},
    {path: 'parkings', component: ParkingsComponent},
    {path: 'pharmacys', component: PharmacysComponent},
    {path: '**', component: PagenotfoundComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HotelsComponent,
        RestaurantComponent,
        HomeComponent,
        HotelComponent,
        NameSearcherComponent,
        ZoneSearcherComponent,
        PagenotfoundComponent,
        SettingsComponent,
        FiltroBusquedasPipe,
        SearcherComponent,
        FoodPlaceComponent,
        SplitterPipe,
        BanksComponent,
        DeleteTagsPipe,
        HospitalsComponent,
        ParkingsComponent,
        PharmacysComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBi0TplbIYCey3l9FmUQGSQPoRgXTiq01M'
        }),
        HttpClientModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
    ],
    providers: [LatLngService, GoogleSearchService, PtCcommunicationService, SettingsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
