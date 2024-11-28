<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "anderzerfall@gmail.com"; // Replace with your email address
    $subject = "Form Submission";
    $message = "";
    $senderEmail = $_POST['email'];
    
    foreach ($_POST as $key => $value) {
        $message .= "$key: $value\n";
    }

    $headers = "From: $senderEmail"; // Replace with your sender email address

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>
