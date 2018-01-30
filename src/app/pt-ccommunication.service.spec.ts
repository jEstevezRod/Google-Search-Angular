import {TestBed, inject} from '@angular/core/testing';

import {PtCcommunicationService} from './pt-ccommunication.service';

describe('PtCcommunicationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PtCcommunicationService]
        });
    });

    it('should be created', inject([PtCcommunicationService], (service: PtCcommunicationService) => {
        expect(service).toBeTruthy();
    }));
});
