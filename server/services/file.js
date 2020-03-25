const XLSX = require("xlsx");


const exportExcel = (collection, jsonData) => {
    let path = `${__dirname}/../public/sheets/${collection}.xlsx`;
    let workbook = XLSX.readFile(path);
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    XLSX.utils.sheet_add_json(worksheet, jsonData, { skipHeader: true, origin: -1 });
    XLSX.writeFile(workbook, path);
}

module.exports = {
    exportExcel
}