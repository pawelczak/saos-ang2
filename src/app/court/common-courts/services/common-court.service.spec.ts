import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {provide} from "angular2/core";
import {CommonCourtService} from "./common-court.service";
import {CommonCourtConverter} from "./common-court.converter";
import {CommonCourt} from "../models/common-court";
import {CommonCourtDivision} from "../models/common-court-division";

export function main() {

    let rawCcData = [{id: 1, name: "Sąd Apelacyjny we Wrocławiu", type: "APPEAL"},
        {id: 34, name: "Sąd Apelacyjny w Białymstoku", type: "APPEAL"},
        {id: 59, name: "Sąd Apelacyjny w Gdańsku", type: "APPEAL"}];
    let rawCcDivisionData = [{id: 1, name: "I Wydział Cywilny"},
        {id: 2, name: "II Wydział Karny"},
        {id: 3, name: "III Wydział Pracy i Ubezpieczeń Społecznych"}];

    class CommonCourtConverterMock {

        convertCcList(args) {
            return [new CommonCourt(1, "Sąd Apelacyjny we Wrocławiu", "APPEAL"),
                new CommonCourt(34, "Sąd Apelacyjny we Białymstoku", "APPEAL"),
                new CommonCourt(59, "Sąd Apelacyjny we Gdańsku", "APPEAL")];
        }

        convertCcDivisionList(args) {
            return [new CommonCourtDivision(1, "I Wydział Cywilny"),
                new CommonCourtDivision(2, "II Wydział Karny"),
                new CommonCourtDivision(3, "III Wydział Pracy i Ubezpieczeń Społecznych")];
        }
    }


    describe("CommonCourtService", () => {

        beforeEachProviders(() => [
            CommonCourtService,
            provide(CommonCourtConverter, {useClass: CommonCourtConverterMock}),
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
                        body: JSON.stringify(rawCcData)
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));

                it('should return response when subscribed to getCommonCourts',
                    inject([CommonCourtService], (commonCourtService: CommonCourtService) => {
                        commonCourtService
                            .getCommonCourts()
                            .subscribe((courts) => {

                                expect(courts.length).toEqual(rawCcData.length);
                                expect(courts[0].id).toEqual(rawCcData[0].id);
                                expect(courts[0].name).toEqual(rawCcData[0].name);
                                expect(courts[0].type).toEqual(rawCcData[0].type);
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
                                expect(error).toEqual("Error 500");
                            });
                    })
                );
            });

        });

        describe("getCommonCourtDivisions for courtId '1' ", () => {

            describe("success", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        body: JSON.stringify(rawCcDivisionData)
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));


                it('should return response when subscribed to getCommonCourtDivisions',
                    inject([CommonCourtService], (commonCourtService: CommonCourtService) => {
                        commonCourtService
                            .getCommonCourtDivisions("1")
                            .subscribe((divisions) => {

                                expect(divisions.length).toEqual(rawCcDivisionData.length);
                                expect(divisions[1].id).toEqual(rawCcDivisionData[1].id);
                                expect(divisions[1].name).toEqual(rawCcDivisionData[1].name);
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
                                expect(error).toEqual("Error 500");
                            });
                    })
                );

            });
        });

    });


}