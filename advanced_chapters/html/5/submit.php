<?php
// submit.php

header('Content-Type: application/json');

$data = $_POST['data'];

try {
    // Connect to SQLite database
    $db = new SQLite3('database.db');

    // Create table if not exists
    $db->exec('CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)');

    // Use user input directly in the query (no sanitization)
    $db->exec("INSERT INTO entries (data) VALUES ('$data')");

    // Retrieve the last inserted ID and data from the database
    $lastID = $db->lastInsertRowID();

    // Respond with data retrieved from the database
    $result = $db->querySingle("SELECT data FROM entries WHERE id = $lastID", true);

    echo json_encode(['message' => 'Data added to the database successfully', 'result' => $result['data']]);
} catch (Exception $e) {
    echo json_encode(['error' => 'Database error. Please try again.']);
}

$db->close();
?>
