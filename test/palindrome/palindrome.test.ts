import { expect, test } from 'vitest';
import { palindrome } from '../../src/palindrome.js';

test('test 1', () => {
    expect(palindrome("ovo")).equal(true);
});
test('test 2', () => {
    expect(palindrome("amor")).equal(false);
});

test('test 3', () => {
    expect(palindrome("")).equal(true);
});
test('test 4', () => {
    expect(palindrome("roma e amor")).equal(true);
});

test('test 5', () => {
    expect(palindrome("dasdasihdais")).equal(false);
});