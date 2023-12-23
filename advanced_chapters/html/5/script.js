// script.js

function submitData() {
    const inputData = document.getElementById('data').value;

    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `data=${encodeURIComponent(inputData)}`,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Use text() instead of json() for HTML response
    })
    .then(data => {
        // Insert the HTML into the result element
        document.getElementById('result').innerHTML = data;
        if (data.includes("'")) {
            // Display special message in secret div
            document.getElementById('secret').innerHTML = `<p>Hidden Scripture: CTF{222B0BD51FCEF7E65C2E62DB2ED65457013BAB56BE6FAFEB19EE11D453153C80}</p>`;
        }
    })
    .catch(error => {
        // Display the error message on the page
        document.getElementById('result').innerHTML = `<p class="error">Error: ${error.message} <br>Hidden Scripture: CTF{222B0BD51FCEF7E65C2E62DB2ED65457013BAB56BE6FAFEB19EE11D453153C80}</p>`;
        // Display special message in secret div
        document.getElementById('secret').innerHTML = `<p>Hidden Scripture: CTF{222B0BD51FCEF7E65C2E62DB2ED65457013BAB56BE6FAFEB19EE11D453153C80}</p>`;
    });
}
