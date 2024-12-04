<?php
session_start(); // Start the session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Load user credentials from a file (replace 'users.txt' with your actual file)
    $users = file('users.txt');

    $validLogin = false;
    foreach ($users as $user) {
        list($storedUsername, $storedPassword) = explode(":", trim($user));
        if ($username === $storedUsername && $password === $storedPassword) {
            $validLogin = true;
            break;
        }
    }

    if ($validLogin) {
        $_SESSION["loggedIn"] = true;
        $_SESSION["username"] = $username;

        header("Location: admin.html");
        exit;
    } else {
        // Display error message (you can change this)
        echo "Invalid username or password!";
    }
}
?>