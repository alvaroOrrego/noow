<?php
    $destinatario = 'alvaro.orrego.m@gmail.com';
    $nombre = $_POST['name'];
/*     $apellido = $_POST['apellido'];
    $asunto = $_POST['asunto']; */
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    $header = "Enviado desde el sitio web de NOOW\n" . "Nombre del emisor: " . $nombre . "\nEmail del emisor:\n" . $email;
    $msjCompleto = "Mensaje:\n" . $mensaje . "\nSaluda atentamente: " . $nombre;

    $sentMail = mail($destinatario, $msjCompleto, $header);
    if($sentMail){       
        echo"<script>alert('Mensaje enviado correctamente!')</script>";
        echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
    }else{
        echo "<script>alert('Error, mensaje fallido...')</script>";
    }
?>