import { TestBed } from '@angular/core/testing';
import { ChatsService } from './chats.service';
describe('ChatsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ChatsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=chats.service.spec.js.map