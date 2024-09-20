import { beforeEach, describe, expect, test } from "bun:test";
import { ContaBancaria } from "./ContaBancaria";

describe("Testando classe ContaBancaria", () => {
    let conta: ContaBancaria;

    beforeEach(() => {
        conta = new ContaBancaria("123456", "001");
    });

    test("Testando depositar valor positivo", () => {
        conta.depositar(100);
        expect(conta.consultarSaldo()).toBe(100);
    });

    test("Deve lançar um erro ao tentar sacar com saldo insuficiente", () => {
        expect(() => {
            conta.sacar(150);
        }).toThrow("Saldo insuficiente");
    });
});
