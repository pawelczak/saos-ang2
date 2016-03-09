import {describe, expect, it, xit, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
import {Judgment} from "./judgment";

export function main() {

    describe("Judgment", () => {

        it("should be possible to create object", () => {

            //given
            let judgment = new Judgment(18);

            //assert
            expect(judgment.id).toBe(18);

        });

        it("should be possible to create object with all properties", () => {

            //given
            let judgment: Judgment = new Judgment(12),
                keywords = ["nice keyword", "another awesome keyword"],
                judges = [{name: "Jon Doe"}, {name: "Jane Smith"}];

            judgment.courtType = "COMMON";
            judgment.judgmentDate = "2016-01-20";
            judgment.textContent = "Great content";
            judgment.keywords = keywords;
            judgment.judges = judges;

            //assert
            expect(judgment.id).toBe(12);
            expect(judgment.courtType).toBe("COMMON");
            expect(judgment.judgmentDate).toBe("2016-01-20");
            expect(judgment.textContent).toBe("Great content");
            expect(judgment.keywords).toBe(keywords);
            expect(judgment.judges).toBe(judges);
        });

    });

}
