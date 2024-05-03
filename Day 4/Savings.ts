import { Account } from './Account';

export class Savings extends Account{

    intrestRate:number;
    applyLoan():string
    {
        return "Loan Applied for you";
    } 
}