import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  setLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value);
    }
  };

  getLoan(value: number): void {
    if (this.validateStatus()) {
      this.setLoan(value + this.balance);
      console.log(`Empréstimo de R$ ${value} realizado com sucesso`);
    } else {
      console.log("Conta inativa. Empréstimo não autorizado");
    }
  }
}
