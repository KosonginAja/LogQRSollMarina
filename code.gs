function doGet(e) {
    var spreadsheet = SpreadsheetApp.openById("---");
    var sheet = spreadsheet.getActiveSheet();

    // Mendapatkan parameter lantai dari URL
    var lantai = e.parameter.lantai;
    var timestamp = new Date();
    
    // Mendapatkan jam dari timestamp
    var hour = timestamp.getHours();
    var cek;

    // Cek rentang cek untuk menentukan pagi, siang, sore
    if (hour >= 6 && hour <= 10) {
        cek = "Pagi";
    } else if (hour >= 10 && hour < 15) {
        cek = "Siang";
    } else if (hour >= 15 && hour <= 19) {
        cek = "Sore";
    } else {
        cek = "Harusnya Gausah Di Cek";
    }
    
    // Menambahkan data ke dalam spreadsheet
    sheet.appendRow([lantai, timestamp, cek]);
    
    return ContentService.createTextOutput("Timestamp added for " + lantai + " (" + cek + ")");
}
