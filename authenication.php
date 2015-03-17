<?php

$username = $_POST["inputEmail"];
$password = $_POST["inputPassword"];
$hashedPassword = sha1('452', $password);

echo nl2br('Welcome '.$username."\n");

$connection = new Mongo();

$db = $connection->selectDB('452');

$users = $db->users;

//search for the user
$result = $users->findOne(array('email' => $username));

if($result){
    echo nl2br('user existed'."\n");
}else{
    echo nl2br('user doesn\'t existed'."\n");
    $user = array(
        'email'     => $username,
        'pass'      => $salted,
        'saved_at'  => new MongoDate() 
    );

    $users->insert($user);
    echo nl2br('added user '.$username."\n");
}
echo nl2br($salted."\n");
echo nl2br('-- redirecting in 3 seconds --');

header("Refresh: 3; URL=index.php");
die();

?>