import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {provide} from "angular2/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {SupremeChamberService} from "./supreme-chamber.service";
import {SupremeChamberConverter} from "./supreme-chamber.converter";

export function main() {

    describe("SupremeChamberService", () => {

        beforeEachProviders(() => [
            SupremeChamberService,
            SupremeChamberConverter,//need to mock this
            BaseRequestOptions,
            MockBackend,
            provide(Http, {
                useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            })
        ]);

        describe("getSupremeChambers", () => {

            describe("success", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        body: [{id: 1, name: "Izba Cywilna"},
                            {id: 2, name: "Izba Karna"},
                            {id: 3, name: "Izba Wojskowa"}]
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));

                it('should return response when subscribed to getSupremeChambers',
                    inject([SupremeChamberService], (supremeChamberService: SupremeChamberService) => {
                        supremeChamberService
                            .getSupremeChambers()
                            .subscribe((chambers) => {

                                expect(chambers.length).toBe(3);
                                expect(chambers[2].id).toBe(3);
                                expect(chambers[2].name).toBe("Izba Wojskowa");
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

                it('should return Error response when subscribed to getSupremeChambers',
                    inject([SupremeChamberService], (supremeChamberService: SupremeChamberService) => {
                        supremeChamberService
                            .getSupremeChambers()
                            .subscribe((chambers) => {
                            }, (error) => {

                                expect(error).toBe("Error 500");
                            });
                    })
                );

            });

        });

        describe("getSupremeChamberDivisions", () => {

            describe("success", () => {

                beforeEach(inject([MockBackend], (backend: MockBackend) => {
                    const baseResponse = new Response(new ResponseOptions({
                        body: [{id: 1, name: "Wydział I"},
                            {id: 2, name: "Wydział II"},
                            {id: 3, name: "Wydział VII"}]
                    }));
                    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
                }));

                it('should return response when subscribed to getSupremeChamberDivisions',
                    inject([SupremeChamberService], (supremeChamberService: SupremeChamberService) => {
                        supremeChamberService
                            .getSupremeChamberDivisions("1")
                            .subscribe((chambers) => {

                                expect(chambers.length).toBe(3);
                                expect(chambers[1].id).toBe(2);
                                expect(chambers[1].name).toBe("Wydział II");
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

                it('should return Error response when subscribed to getSupremeChamberDivisions',
                    inject([SupremeChamberService], (supremeChamberService: SupremeChamberService) => {
                        supremeChamberService
                            .getSupremeChamberDivisions("1")
                            .subscribe((chambers) => {
                            },
                            (error) => {

                                expect(error).toBe("Error 500");
                            });
                    })
                );

            });

        });

    });

}
