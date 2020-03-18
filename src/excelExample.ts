const Excel = require('exceljs');


const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('sheet', { properties: { tabColor: { argb: 'FF00FF00' } } });


worksheet.columns = [
  { header: 'Package', key: 'package_name' },
  { header: 'Author', key: 'author_name' }

];


worksheet.addRow({ package_name: "ABC", author_name: "Author 1" }, { package_name: "XYZ", author_name: "Author 2" });

worksheet.columns = [{}, {}, { header: 'Price', key: 'price' }];

worksheet
  .addRow(["BCD", "Author Name 3"]);


const rows = [
  ["FGH", "Author Name 4"],
  { package_name: "PQR", author_name: "Author 5" }
];


worksheet
  .addRows(rows);


workbook
  .xlsx
  .writeFile('sample.xlsx')
  .then(() => {
    console.log("saved");
  })
  .catch((err) => {
    console.log("err", err);
  });
