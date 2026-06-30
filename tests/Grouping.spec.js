import {test , expect} from '@playwright/test';

test.describe('Grouping Tests 1', () => {

test('test1', async ({ page }) => {

console.log('This is my Test1');

})
test('test2', async ({ page }) => {

console.log('This is my Test2');

})

})

test.describe('Grouping Tests 2', () => {
test('test3', async ({ page }) => {

console.log('This is my Test3');

})
test('test4', async ({ page }) => {

console.log('This is my Test4');

})

})