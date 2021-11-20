export class FormAction{
    Id : number;
    CandidateId : number;
    FormId : number;
    Action : string;
    ActionOn : Date;
    
    constructor(id : number, candidateId : number, formId : number, action : string, actionOn : Date){
        this.Id = id;
        this.CandidateId = candidateId;
        this.FormId = formId;
        this.Action = action;
        this.ActionOn = actionOn;
    }
}