import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {provide} from 'angular2/core';
import {Judgment} from '../models/judgment';
import {JudgmentDetailService} from './judgment-detail.service';
import {JudgmentDetailConverter} from './judgment-detail.converter';


describe('JudgmentDetailService', () => {

    let rawJudgment = {id: 12};

    class JudgmentDetailConverterMock {
        convert(): Judgment {
            let judgment = new Judgment(12);

            return judgment;
        }
    }


    describe('getJudgment', () => {

        beforeEachProviders(() => [
            JudgmentDetailService,
            provide(JudgmentDetailConverter, {useClass: JudgmentDetailConverterMock}),
            BaseRequestOptions,
            MockBackend,
            provide(Http, {
                useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            })
        ]);

        describe('success', () => {

            beforeEach(inject([MockBackend], (backend: MockBackend) => {
                const baseResponse = new Response(new ResponseOptions({
                    status: 200,
                    body: JSON.stringify(rawJudgment)
                }));
                backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
            }));

            it('should return response when subscribed to getJudgment',
                inject([JudgmentDetailService], (judgmentDetailService: JudgmentDetailService) => {
                    judgmentDetailService
                        .getJudgment('12')
                        .subscribe((judgment) => {

                            //assert
                            expect(judgment instanceof Judgment).toEqual(true);
                            expect(judgment.id).toEqual(12);
                        }, (error) => {

                            //assert
                            expect(error).not.toBeDefined();
                        });
                })
            );

        });


        describe('fail', () => {

            beforeEach(inject([MockBackend], (backend: MockBackend) => {
                const baseResponse = new Response(new ResponseOptions({
                    status: 500,
                    body: {error: 'Error'}
                }));
                backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
            }));

            it('should return Error when subscribed to getJudgment',
                inject([JudgmentDetailService], (judgmentDetailService: JudgmentDetailService) => {
                    judgmentDetailService
                        .getJudgment('12')
                        .subscribe((judgment) => {
                        }, (error) => {

                            //assert
                            expect(error).toEqual('Error');
                        });
                })
            );

        });

    });

});


