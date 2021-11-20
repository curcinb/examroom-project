export class Form{
    Id: number;
    Name: string;
    Active: boolean;

    constructor(id: number, name: string, active: boolean){
        this.Id = id;
        this.Name = name;
        this.Active = active;
    }
}