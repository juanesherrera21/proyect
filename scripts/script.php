<?php
    $salt = "Bk1192JH";
    echo md5($_POST['password'].$salt);
?>