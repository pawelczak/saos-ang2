export class JudgmentSearchForm {

    public commonCourt: string = "";
    public commonCourtDivision: string = "";

    public scChamberId: string = "";
    public scChamberDivisionId: string = "";

    constructor(
        public all: string,
        public judgeName: string,
        public courtType: string
    ) {}

}