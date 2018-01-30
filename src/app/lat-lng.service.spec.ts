import {TestBed, inject} from '@angular/core/testing';

import {LatLngService} from './lat-lng.service';

describe('LatLngService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LatLngService]
        });
    });

    it('should be created', inject([LatLngService], (service: LatLngService) => {
        expect(service).toBeTruthy();
    }));
});
