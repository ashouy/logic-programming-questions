import { expect, test } from 'vitest';
import { rotate } from '../../src/rotate.js';

test('test 1', () => {
  expect(rotate([1, 2, 3, 4, 5], 2)).toStrictEqual([4, 5, 1, 2, 3]);
});
test('test 2', () => {
  expect(rotate([1, 2, 3, 4, 5], 0)).toStrictEqual([1, 2, 3, 4, 5]);
});
test('test 3', () => {
  expect(rotate([1, 2, 3, 4, 5], 2)).toStrictEqual([4, 5, 1, 2, 3]);
});

test('Teste 4', () => {
  expect(rotate([1, 2, 3, 4, 5], 5)).toStrictEqual([1, 2, 3, 4, 5]);
});

test('Teste 5', () => {
  expect(rotate([1, 2, 3, 4, 5], 8)).toStrictEqual([3, 4, 5, 1, 2]);
});
