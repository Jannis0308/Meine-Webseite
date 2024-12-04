<?php
session_start();

// Überprüfe, ob ein Formular mit Anmeldedaten gesendet wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Hier fügst du deine Logik für die Authentifizierung ein!
    // Vergleiche die eingegebenen Daten mit deiner Datenbank oder einem anderen Authentifizierungsmechanismus.
    // Wenn die Daten gültig sind, starte die Session
    if (validateUser($username, $password)) {
        $_SESSION["loggedIn"] = true;
        $_SESSION["username"] = $username;

        // Redirect to admin.html
        header("Location: admin.html");
        exit; // Stop further execution
    } else {
        // Fehlermeldung ausgeben
        echo "Ungültige Anmeldedaten!";
    }
}

function validateUser($username, $password) {
    // Hier fügst du deine Authentifizierungslogik ein!
    // Diese Funktion sollte true zurückgeben, wenn die Anmeldedaten gültig sind, sonst false
    // Beispiel:
    $correctUsername = "admin";
    $correctPassword = "password"; // In der Realität solltest du die Passwörter hashen!
    return ($username === $correctUsername && $password === $correctPassword);
}
?>