import {Judgment} from './judgment';

export class SearchResults {

    constructor(
        public totalResults: number,
        public judgments: Judgment[]) {}
}
