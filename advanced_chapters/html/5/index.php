<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter V: SQL Injection</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Dark Brotherhood Database</h1>
        <p>Stores the registry of all preparing operations in taking down University of Cyprodiil</p>
        <label for="data">Enter Data:</label>
        <input type="text" id="data" name="data">
        <button onclick="submitData()">Submit</button>
        <p id="result"></p>
        <div id="secret"></div>
    </div>

    <script src="script.js"></script>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        require 'submit.php';
    }
    ?>
</body>
</html>
