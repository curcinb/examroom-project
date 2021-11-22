export class FormAction{
    Id : number;
    CandidateId : number;
    FormId : number;
    Action : string;
    ActionOn : Date;
    WaitingTime : any; 

    constructor(id : number, candidateId : number, formId : number, action : string, actionOn : Date, waitingTime : any){
        this.Id = id;
        this.CandidateId = candidateId;
        this.FormId = formId;
        this.Action = action;
        this.ActionOn = actionOn;
        this.WaitingTime = waitingTime;
    }
}