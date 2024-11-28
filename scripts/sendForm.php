<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture the sender's email from the form
    $senderEmail = $_POST['email'];
    
    // Other form data
    $name = $_POST['firstName'];
    $message = $_POST['message'];
    
    // Recipient email
    $to = "anderzerfall@gmail.com"; // Replace with your email address
    $subject = "Form Submission";
    
    // Compose the email
    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $senderEmail\n";
    $emailMessage .= "Message:\n$message\n";
    
    $headers = "From: $senderEmail"; // Use the sender's email in the 'From' header
    
    // Send the email
    if (mail($to, $subject, $emailMessage, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>
