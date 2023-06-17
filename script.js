function addEntry() {
    var message = document.getElementById('message').value;

    var bank = message.split(' ')[0] + ' ' + message.split(' ')[1];
    bank = bank.slice(0, -1);
    if(bank.includes('sakartvelos banki')){
        bank = 'BOG';
    }else  if(bank.includes('tbc banki')){
        bank = 'TBC';
    }

    var operation = '';
    if (message.includes('gasavlis operacia')) {
        operation = 'Expense';
    } else if (message.includes('tanxis charicxva')) {
        operation = 'Income';
    } else {
        operation = 'N/A';
    }

    var currencyPattern = /tanxa: (.+)/;
    var currencyMatches = message.match(currencyPattern);
    var currency = currencyMatches ? currencyMatches[1].substring(0, 3) : 'N/A';
    var value = currencyMatches ? parseFloat(currencyMatches[1].substring(3).replace(/,/g, '')) : 0;

    var filePattern = /angarishidan: (.+)/;
    var fileMatches = message.match(filePattern);
    var file = fileMatches ? 'Yes' : 'No';

    var datePattern = /tarigi: (.+)/;
    var dateMatches = message.match(datePattern);
    var date = dateMatches ? dateMatches[1] : 'N/A';

    var table = document.getElementById('data-table');

    // Create table row with data
    var dataRow = document.createElement('tr');
    var dateCell = document.createElement('td');
    dateCell.textContent = date;
    dataRow.appendChild(dateCell);

    var bankCell = document.createElement('td');
    bankCell.textContent = bank;
    dataRow.appendChild(bankCell);

    var operationCell = document.createElement('td');
    operationCell.textContent = operation;
    dataRow.appendChild(operationCell);

    var currencyCell = document.createElement('td');
    currencyCell.textContent = currency;
    dataRow.appendChild(currencyCell);

    var valueCell = document.createElement('td');
    valueCell.textContent = value.toFixed(2);
    dataRow.appendChild(valueCell);

    var fileCell = document.createElement('td');
    fileCell.textContent = file;
    dataRow.appendChild(fileCell);

    table.appendChild(dataRow);

    var entryData = [date, bank, operation, currency, value.toFixed(2), file];

    uploadToGoogleSheets(entryData);
}

function uploadToGoogleSheets(entryData) {
var url = 'https://script.google.com/macros/s/AKfycbxr2VgE1aBRoBgzdruq0AtulIkYRykacK7ISOMi3rWMl6yCZCED-iCXhAjEjvUkNtMrPw/exec';

var formData = new FormData();
formData.append('Bank', entryData[1]);
formData.append('Operation', entryData[2]);
formData.append('Currency', entryData[3]);
formData.append('Value', entryData[4]);
formData.append('File', entryData[5]);

fetch(url, {
method: 'POST',
body: formData
})
.then(function(response) {
// Handle the response if needed
console.log(response);
})
.catch(function(error) {
// Handle any errors that occur during the request
console.error(error);
});
}
