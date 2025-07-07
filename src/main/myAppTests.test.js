// test/js/CalculatorExtra.test.js

import { Calculator } from '../../../my-app/src/main/js/calculator.js';

QUnit.module('Calculator - Additional Tests');

QUnit.test('add() with non-integer numbers', function(assert) {
    assert.strictEqual(Calculator.add(0.1, 0.2), 0.30000000000000004, '0.1 + 0.2 = 0.30000000000000004 (floating point)');
    assert.strictEqual(Calculator.add(-2.5, 2.5), 0, '-2.5 + 2.5 = 0');
});

QUnit.test('subtract() with negative results', function(assert) {
    assert.strictEqual(Calculator.subtract(2, 5), -3, '2 - 5 = -3');
    assert.strictEqual(Calculator.subtract(-5, -3), -2, '-5 - (-3) = -2');
});

QUnit.test('multiply() with zero', function(assert) {
    assert.strictEqual(Calculator.multiply(0, 100), 0, '0 * 100 = 0');
    assert.strictEqual(Calculator.multiply(100, 0), 0, '100 * 0 = 0');
    assert.strictEqual(Calculator.multiply(0, 0), 0, '0 * 0 = 0');
});

QUnit.test('multiply() with negative numbers', function(assert) {
    assert.strictEqual(Calculator.multiply(-2, -3), 6, '-2 * -3 = 6');
    assert.strictEqual(Calculator.multiply(-2, 3), -6, '-2 * 3 = -6');
    assert.strictEqual(Calculator.multiply(2, -3), -6, '2 * -3 = -6');
});

QUnit.test('divide() with negative numbers', function(assert) {
    assert.strictEqual(Calculator.divide(-6, -2), 3, '-6 / -2 = 3');
    assert.strictEqual(Calculator.divide(6, -2), -3, '6 / -2 = -3');
    assert.strictEqual(Calculator.divide(-6, 2), -3, '-6 / 2 = -3');
});

QUnit.test('divide() with decimals', function(assert) {
    assert.strictEqual(Calculator.divide(1, 3), 1/3, '1 / 3 = 0.333...');
    // assert.strictEqual(Calculator.divide(0.3, 0.1), 3, '0.3 / 0.1 = 3');
});

QUnit.test('add(), subtract(), multiply(), divide() with NaN', function(assert) {
    assert.ok(Number.isNaN(Calculator.add(NaN, 1)), 'NaN + 1 = NaN');
    assert.ok(Number.isNaN(Calculator.subtract(1, NaN)), '1 - NaN = NaN');
    assert.ok(Number.isNaN(Calculator.multiply(NaN, 2)), 'NaN * 2 = NaN');
    assert.ok(Number.isNaN(Calculator.divide(NaN, 2)), 'NaN / 2 = NaN');
});

QUnit.test('add(), subtract(), multiply(), divide() with Infinity', function(assert) {
    assert.strictEqual(Calculator.add(Infinity, 1), Infinity, 'Infinity + 1 = Infinity');
    assert.strictEqual(Calculator.subtract(-Infinity, 1), -Infinity, '-Infinity - 1 = -Infinity');
    // assert.strictEqual(Calculator.multiply(Infinity, 0), NaN, 'Infinity * 0 = NaN');
    assert.strictEqual(Calculator.divide(1, Infinity), 0, '1 / Infinity = 0');
});

QUnit.test('divide() with very small divisor', function(assert) {
    assert.ok(Math.abs(Calculator.divide(1, 1e-10)) > 1e9, '1 / 1e-10 is a very large number');
});

QUnit.test('add(), subtract(), multiply(), divide() with string inputs', function(assert) {
    assert.strictEqual(Calculator.add('2', 3), '23', '"2" + 3 = "23" (string concatenation)');
    assert.strictEqual(Calculator.subtract('5', '2'), 3, '"5" - "2" = 3 (type coercion)');
    assert.strictEqual(Calculator.multiply('6', 2), 12, '"6" * 2 = 12 (type coercion)');
    assert.strictEqual(Calculator.divide('8', '2'), 4, '"8" / "2" = 4 (type coercion)');
});