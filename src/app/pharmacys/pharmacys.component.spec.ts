import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PharmacysComponent} from './pharmacys.component';

describe('PharmacysComponent', () => {
    let component: PharmacysComponent;
    let fixture: ComponentFixture<PharmacysComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PharmacysComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PharmacysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
