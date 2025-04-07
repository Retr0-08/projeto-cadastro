<?php 
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT);

    $sql = "INSERT INTO users ( username , email , password ) VALUES(?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss",$username,$email,$password);

    if($stmt->execute()){
        echo "Usuário cadastrado com sucesso!";
    }
    else{
        echo "Erro:" .$stmt->error;
    }

    $stmt->close();
    $stmt->close();
}
?>