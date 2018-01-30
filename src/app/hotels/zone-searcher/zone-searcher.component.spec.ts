import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ZoneSearcherComponent} from './zone-searcher.component';

describe('ZoneSearcherComponent', () => {
    let component: ZoneSearcherComponent;
    let fixture: ComponentFixture<ZoneSearcherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZoneSearcherComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZoneSearcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
