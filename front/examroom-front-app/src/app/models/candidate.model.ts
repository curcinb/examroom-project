export class Candidate{
    Id: number;
    Name: string;
    EmailId: string;
    PhoneNumber: string;
    AddressLine1: string;
    AddressLine2: string;
    Active: boolean;
    
    constructor(id: number, name: string, emailId: string, phoneNumber: string, addressLine1: string, addressLine2: string, active: boolean){
        this.Id = id;
        this.Name = name;
        this.EmailId = emailId;
        this.PhoneNumber = phoneNumber;
        this.AddressLine1 = addressLine1;
        this.AddressLine2 = addressLine2;
        this.Active = active;
    }
}