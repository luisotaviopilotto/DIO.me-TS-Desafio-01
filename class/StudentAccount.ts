import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Realiza depósito com acréscimo de 10
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value + 10);
    }
    console.log("Depósito realizado com sucesso com R$ 10 de acréscimo");
  };
}
