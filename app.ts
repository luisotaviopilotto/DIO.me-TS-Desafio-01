import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { StudentAccount } from "./class/StudentAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(12345, "Conta PF", 1);
const companyAccount: CompanyAccount = new CompanyAccount("Conta PJ", 2);
const studentAccount: StudentAccount = new StudentAccount("Conta Estudante", 3);

// PeopleAccount
peopleAccount.getName();
peopleAccount.getAccountNumber();
peopleAccount.getDocID();
peopleAccount.getBalance();
peopleAccount.withdraw(80);
peopleAccount.deposit(100);
peopleAccount.withdraw(80);
peopleAccount.getBalance();

// CompanyAccount
companyAccount.getName();
companyAccount.getAccountNumber();
companyAccount.getBalance();
companyAccount.withdraw(80);
companyAccount.deposit(100);
companyAccount.withdraw(80);
companyAccount.getBalance();
companyAccount.getLoan(500);
companyAccount.getBalance();

// // StudentAccount
studentAccount.getName();
studentAccount.getAccountNumber();
studentAccount.getBalance();
studentAccount.withdraw(80);
studentAccount.deposit(100);
studentAccount.getBalance();
studentAccount.withdraw(80);
studentAccount.getBalance();
