export class Judgment {

    public courtType: string;
    public judgmentDate: string;
    public judges: any[];
    public keywords: string[];
    public textContent: string;

    constructor(
        public id: number
    ) {}

}
