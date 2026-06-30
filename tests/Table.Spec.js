const { test, expect } = require('@playwright/test');

test('input box basic', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//Total Number of rows and column in a table

const Table = await page.locator("#productTable");
const Columns = await Table.locator("thead tr th");
const ColumnCount = await Columns.count();
console.log("Number of Columns in the table:", ColumnCount);

const Rows = await Table.locator("tbody tr");
const RowCount = await Rows.count();
console.log("Number of Rows in the table:", RowCount);

expect(ColumnCount).toBe(4);
expect(RowCount).toBe(5);

// For selecting particular row from the table
// const matchedRow = await Rows.filter({
//   has: page.locator("td"), 
//   hasText: "Tablet" 
// });

// await matchedRow.locator('input').check();


// //Select multiple products by using Useable function

// await Useable(Rows, page, "Tablet");
// await Useable(Rows, page, "Smartphone");
// await Useable(Rows, page, "Smartwatch");

//Print all the products detail using Loop
// for(let i=0; i<RowCount; i++){
//       const row= Rows.nth(i);
//       const tds = await row.locator("td");


//     for(let j=0; j<await tds.count(); j++){
//     console.log(await tds.nth(j).textContent());
//     }
// }

//Read data from all the pages in a table

const pages = await page.locator(".pagination li a");
const pageCount = await pages.count();
console.log("Number of pages in the table:", pageCount);
for(let p=0; p<pageCount; p++){  
           
    if (p>0) {
        await pages.nth(p).click();
}
for(let i=0; i<RowCount; i++){
      const row= Rows.nth(i);
      const tds = await row.locator("td");


    for(let j=0; j<await tds.count(); j++){
    console.log(await tds.nth(j).textContent());
    }
}
await page.waitForTimeout(5000);

}



await page.waitForTimeout(5000);

});

async function Useable(Rows, page, productName) {

const matchedRow =  Rows.filter({
  has: page.locator("td"), 
  hasText: productName 
})

await matchedRow.locator('input').check();

}