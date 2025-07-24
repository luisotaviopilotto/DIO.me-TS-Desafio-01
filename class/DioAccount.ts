export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // Pega número da conta
  getAccountNumber = () => {
    console.log(`Número da conta: ${this.accountNumber}`);
  };

  // Pega nome da conta
  getName = (): void => {
    console.log(`Nome da conta: ${this.name}`);
  };

  // Pega saldo da conta
  getBalance = (): void => {
    console.log(`Seu saldo é de: R$ ${this.balance}`);
  };

  // Seta o saldo da conta
  protected setBalance = (balance: number) => {
    this.balance = balance;
  };

  // Realiza depósito na conta
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value);
      console.log(`Depósito de R$ ${value} realizado com sucesso`);
    }
  };

  // Realiza o saque na conta
  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.setBalance(this.balance - value);
        console.log(`Saque no valor de R$ ${value} realizado com sucesso`);
      } else {
        console.log(
          `Seu saldo é insuficiente para realizar o saque de R$ ${value}`
        );
      }
    }
  };

  // Verifica status da conta
  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
