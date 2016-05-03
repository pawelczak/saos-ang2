import {describe, expect, it, xit, inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {TestComponentBuilder, ComponentFixture, injectAsync} from 'angular2/testing';
import {DetailComponent} from './detail.component';


describe('DetailComponent', () => {

    it('should render row with label and value',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            return tcb.createAsync(DetailComponent) .then((fixture) => {

                fixture.detectChanges();

                let detail = fixture.componentInstance,
                    element = fixture.nativeElement;

                detail.label = 'Date';
                detail.value = 'Great date';

                fixture.detectChanges(); //trigger change detection
                expect(element.querySelector('div span.col-sm-2')).toHaveText('Date:');
                expect(element.querySelector('div span.col-sm-8')).toHaveText('Great date');
            });
        })
    );

    it('should be not displayed when value is empty',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            return tcb.createAsync(DetailComponent) .then((fixture) => {

                fixture.detectChanges();

                let element = fixture.nativeElement;

                fixture.detectChanges(); //trigger change detection
                expect(element.querySelector('div')).toEqual(null);
            });
        })
    );
});


