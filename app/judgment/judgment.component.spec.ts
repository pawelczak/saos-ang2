import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {Router} from "angular2/router";
import {RouteRegistry} from "angular2/router";
import {provide} from "angular2/core";
import {SpyLocation} from "angular2/src/mock/location_mock";
import {ROUTER_PRIMARY_COMPONENT} from "angular2/router";
import {RootRouter} from "angular2/src/router/router";
import {JudgmentComponent} from "./judgment.component";


export function main() {

    describe("JudgmentComponent", () => {
/*
        var location, router;

        //setup
        beforeEachProviders(() => [
            RouteRegistry,
            provide(Location, {useClass: SpyLocation}),
            provide(Router, {useClass: RootRouter}),
            provide(ROUTER_PRIMARY_COMPONENT, {useValue: JudgmentComponent})
        ]);

        beforeEach(inject([Router, Location], (r, l) => {
            router = r;
            location = l;
        }));


        it('Should be able to navigate to base search judgment view', done => {
            router.navigate(['/']).then(() => {
                expect(location.path()).toBe('/');
                done();
            }).catch(e => done.fail(e));
        });

        it('Should be able to navigate to specific judgment view', done => {
            router.navigate(['/12']).then(() => {
                expect(location.path()).toBe('/12');
                done();
            }).catch(e => done.fail(e));
        });

        it('should redirect not registered urls to judgment search', done => {
            router.navigateByUrl('/unknown').then(() => {
                expect(location.path()).toBe('/');
                done();
            }).catch(e => done.fail(e));
        });
*/

    });

}
