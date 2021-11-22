export class SubmittedForm {
    Id: number;
    CandidateName: string;
    EmailId: string;
    PhoneNumber: string;
    IdForm: number;
    FormName: string;
    FormStatus: string;

    constructor(Id: number, CandidateName: string, EmailId: string, PhoneNumber: string, IdForm: number, FormName: string, FormStatus: string) {
        this.Id = Id;
        this.CandidateName = CandidateName;
        this.EmailId = EmailId;
        this.PhoneNumber = PhoneNumber;
        this.IdForm = IdForm;
        this.FormName = FormName;
        this.FormStatus = FormStatus;
    }
}