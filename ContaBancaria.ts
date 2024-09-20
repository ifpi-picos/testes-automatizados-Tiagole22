export class ContaBancaria {
    private numeroConta: string;
    private agencia: string;
    private saldo: number;

    constructor(numeroConta: string, agencia: string) {
        this.numeroConta = numeroConta;
        this.agencia = agencia;
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    public sacar(valor: number): number {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
        return valor;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}
