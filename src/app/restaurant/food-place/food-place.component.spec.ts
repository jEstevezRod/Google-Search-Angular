import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FoodPlaceComponent} from './food-place.component';

describe('FoodPlaceComponent', () => {
    let component: FoodPlaceComponent;
    let fixture: ComponentFixture<FoodPlaceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FoodPlaceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FoodPlaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
