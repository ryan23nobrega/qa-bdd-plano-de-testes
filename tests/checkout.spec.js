const { test, expect } = require('@playwright/test');
const usuarios = require('../data/checkoutData');

test.describe('Fluxo de Checkout', () => {

    test.beforeEach(async () => {

        console.log('Iniciando cenário de teste...');

    });

    test('Deve bloquear compra com saldo insuficiente', async () => {

        const usuario = usuarios.saldoInsuficiente;

        const compraPermitida = usuario.saldo >= usuario.valorCompra;

        expect(compraPermitida).toBeFalsy();

    });

    test('Deve permitir compra com saldo suficiente', async () => {

        const usuario = usuarios.saldoSuficiente;

        const compraPermitida = usuario.saldo >= usuario.valorCompra;

        expect(compraPermitida).toBeTruthy();

    });

});