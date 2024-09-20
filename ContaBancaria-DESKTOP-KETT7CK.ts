// src/ContaBancaria.ts
export class ContaBancaria {
    private numeroConta: string;
    private agencia: string;
    private saldo: number;
    private extrato: string[];

    constructor(numeroConta: string, agencia: string) {
        this.numeroConta = numeroConta;
        this.agencia = agencia;
        this.saldo = 0;
        this.extrato = [];
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("Valor de depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        this.registrarOperacao(`Depósito de R$${valor.toFixed(2)}`);
    }

    public sacar(valor: number): number {
        if (valor <= 0) {
            console.log("Valor de saque deve ser positivo.");
            return 0;
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
        this.registrarOperacao(`Saque de R$${valor.toFixed(2)}`);
        return valor;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }

    private registrarOperacao(descricao: string): void {
        const data = new Date().toLocaleString();
        this.extrato.push(`[${data}] ${descricao}`);
    }
}
