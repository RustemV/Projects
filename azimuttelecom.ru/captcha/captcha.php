<?php
include('captcha-gen.php');
session_start();
if ($_SESSION['cap']!=null) {
    $captcha = $_SESSION['cap'];
//    var_dump($captcha);
    $captcha->captcha();
} else {
    $captcha = new captcha();
    $_SESSION['cap'] =$captcha;
}
$_SESSION['captcha_keystring'] = $captcha->getKeyString();