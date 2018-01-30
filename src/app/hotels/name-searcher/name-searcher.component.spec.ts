import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NameSearcherComponent} from './name-searcher.component';

describe('NameSearcherComponent', () => {
    let component: NameSearcherComponent;
    let fixture: ComponentFixture<NameSearcherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NameSearcherComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NameSearcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
