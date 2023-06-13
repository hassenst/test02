<?php
//Get the request method
$post = ($_SERVER['REQUEST_METHOD'] === 'POST') ? true : false;

//check if is post
if (!$post) {
    exit('this method is not supported');
    //$reponse['status'] = 'bad route';
}

//Check if email is set
$email = $_POST['email'] ?? false;
$email = htmlspecialchars($email);

//check if username is set
$username = $_POST['username'] ?? false;
$username = htmlspecialchars($username);


//set the headers
$headers = array(
    'From' => 'hassenst@th-brandenburg.de'
);

//check if email & username is not empty and if the email is an valid email address
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($username)) {
    //send the mail (Bitte Kommentar entfernen, falls es gesendet werden soll)
    //mail($email, 'Registrierung Webprogrammierung (OSMI BSc)', $response['message'], $headers);

    //Antworttext im Erfolgsfall
    $response = 'Danke für Ihr Interesse, Ihre Anfrage wurde erfolgreich gesendet';
} else {
    //Antworttext falls irgendwas nicht passt
    $response = 'Regisrierung fehlgeschlagen';
}
?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danke</title>
</head>

<body>
    <p><?= $response ?></p>
</body>

</html>