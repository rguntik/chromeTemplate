document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get("inputValue", function(items) {
    if (!chrome.runtime.error) {
      const contentDiv = document.getElementById("content");
      const inputArray = items.inputValue || [];
      const table = document.createElement('table');

      inputArray.forEach(item => {
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');
        const valueCell = document.createElement('td');

        keyCell.textContent = item[0];
        valueCell.textContent = item[1];

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        table.appendChild(row);
      });

      contentDiv.appendChild(table);
    }
  });
});
