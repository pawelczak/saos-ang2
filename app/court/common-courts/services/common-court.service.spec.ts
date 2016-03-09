import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {provide} from "angular2/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {CommonCourtService} from "./common-court.service";

export function main() {

    describe("CommonCourtService", () => {

        beforeEachProviders(() => [
            CommonCourtService,
            BaseRequestOptions,
            MockBackend,
            provide(Http, {
                useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            })
        ]);

        describe("getCommonCourts", () => {


            describe("success", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        body: [{id: 1, name: "Sąd Apelacyjny we Wrocławiu", type: "APPEAL"},
                            {id: 34, name: "Sąd Apelacyjny w Białymstoku", type: "APPEAL"},
                            {id: 59, name: "Sąd Apelacyjny w Gdańsku", type: "APPEAL"}]
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));

                it('should return response when subscribed to getCommonCourts',
                    inject([CommonCourtService], (commonCourtService: CommonCourtService) => {
                        commonCourtService
                            .getCommonCourts()
                            .subscribe((courts) => {

                                expect(courts.length).toBe(3);
                                expect(courts[0].id).toBe(1);
                                expect(courts[0].name).toBe("Sąd Apelacyjny we Wrocławiu");
                                expect(courts[0].type).toBe("APPEAL");
                            });
                    })
                );
            });


            describe("fail", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        status: 500,
                        body: {error: "Error 500"}
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));

                it('should return Error response when subscribed to getCommonCourts',
                    inject([CommonCourtService], (commonCourtService: CommonCourtService) => {
                        commonCourtService
                            .getCommonCourts()
                            .subscribe((courts) => {
                            }, (error) => {
                                expect(error).toBe("Error 500");
                            });
                    })
                );
            });

        });

        describe("getCommonCourtDivisions for courtId '1' ", () => {

            describe("success", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        body: [{id: 1, name: "I Wydział Cywilny"}, {id: 2, name: "II Wydział Karny"}, {id: 3, name: "III Wydział Pracy i Ubezpieczeń Społecznych"}]
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));


                it('should return response when subscribed to getCommonCourtDivisions',
                    inject([CommonCourtService], (commonCourtService: CommonCourtService) => {
                        commonCourtService
                            .getCommonCourtDivisions("1")
                            .subscribe((divisions) => {

                                expect(divisions.length).toBe(3);
                                expect(divisions[1].id).toBe(2);
                                expect(divisions[1].name).toBe("II Wydział Karny");
                            });
                    })
                );

            });

            describe("fail", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        status: 500,
                        body: {error: "Error 500"}
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));


                it('should return response when subscribed to getCommonCourtDivisions',
                    inject([CommonCourtService], (commonCourtService: CommonCourtService) => {
                        commonCourtService
                            .getCommonCourtDivisions("1")
                            .subscribe((divisions) => {
                            }, (error) => {
                                expect(error).toBe("Error 500");
                            });
                    })
                );

            });
        });

    });


}