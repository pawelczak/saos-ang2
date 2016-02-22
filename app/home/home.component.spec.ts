import {describe, expect, it, xit, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
import {HomeComponent} from "./home.component";

export function main() {
    describe('HomeComponent', () => {

        let homeComponent:HomeComponent = null;

        beforeEach(() => {
            homeComponent = new HomeComponent();
        });


        it('should be defined', () => {
            expect(homeComponent).toBeDefined();
        });

    });
}