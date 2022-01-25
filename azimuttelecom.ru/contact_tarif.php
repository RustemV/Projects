<?php
/*
Credits: Bit Repository
URL: http://www.bitrepository.com/
*/

include 'contact_config.php';
session_start();
error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
    include 'functions.php';

    $name = stripslashes($_POST['name']);//mb_convert_encoding (stripslashes($_POST['name']) ,"Windows-1251", "UTF-8"  );
    $address = trim($_POST['address']);//mb_convert_encoding (trim($_POST['company']) ,"Windows-1251", "UTF-8"  );
    $email = trim($_POST['email']) ;//mb_convert_encoding (trim($_POST['email']) ,"Windows-1251", "UTF-8"  );
    $phone = stripslashes($_POST['phone']);//mb_convert_encoding (stripslashes($_POST['phone']) ,"Windows-1251", "UTF-8"  );
    $uslugi = $_POST['uslugi'];
    $comment = trim(stripslashes($_POST['content']));//mb_convert_encoding (trim(stripslashes($_POST['content'])) ,"Windows-1251", "UTF-8"  );
    $subject = 'Заявка в на подбор тарифного плана';




    $error = '';

// Check name
if(!$address)
    {
        $error .= 'Пожалуйста заполните поле "Адрес подачи услуги".<br />';//mb_convert_encoding ('Пожалуйста заполните поле "Контактное лицо".<br />' ,"UTF-8", "Windows-1251");
    }
    if(!$name)
    {
        $error .= 'Пожалуйста заполните поле "Контактное лицо".<br />';//mb_convert_encoding ('Пожалуйста заполните поле "Контактное лицо".<br />' ,"UTF-8", "Windows-1251");
    }
// Check email

    if(!$email)
    {
        $error .= 'Пожалуйста заполните поле "E-mail".<br />';//mb_convert_encoding ('Пожалуйста заполните поле "E-mail".<br />' ,"UTF-8", "Windows-1251");
    }

    if($email && !ValidateEmail($email))
    {
        $error .= 'Пожалуйста введите правильный "E-mail".<br />';//mb_convert_encoding ('Пожалуйста введите правильный "E-mail".<br />' ,"UTF-8", "Windows-1251");
    }

    if (empty($uslugi) || !is_array($uslugi)) {
        $error .= 'Пожалуйста выберите "Интересующие услуги".<br />';//mb_convert_encoding ('Пожалуйста выберите "Интересующие услуги".<br />' ,"UTF-8", "Windows-1251");
    }

    

    if(!$phone)
    {
        $error .= 'Пожалуйста заполните поле "Телефон".<br />';//mb_convert_encoding ('Пожалуйста заполните поле "Телефон".<br />' ,"UTF-8", "Windows-1251");
    }
//var_dump($_SESSION);
    if(isset($_SESSION['captcha_keystring']) && strtolower($_SESSION['captcha_keystring']) != strtolower($_POST['capthca']))
    {
        $error .= 'Код указан не правильно<br />';//mb_convert_encoding ('Код указан не правильно<br />' ,"UTF-8", "Windows-1251");
    }


    if(!$error)
    {
        $message = "Описание:

Контактное лицо: ".$name//mb_convert_encoding ($_POST['name'] ,"Windows-1251", "UTF-8"  )
            ." \r\n

Компания: ".$address//mb_convert_encoding ($_POST['company'] ,"Windows-1251", "UTF-8"  )
            ."\r\n

Телефон: ".$phone//mb_convert_encoding ($_POST['phone'] ,"Windows-1251", "UTF-8"  )
            ." \r\n

E-mail: ".$email//mb_convert_encoding ($_POST['email'] ,"Windows-1251", "UTF-8"  )
            ."\r\n

Интересующие услуги: ".implode(', ', $uslugi)//  mb_convert_encoding (implode(', ', $uslugi),"Windows-1251", "UTF-8"  )
            ."\r\n

Дополнительная информация: ".$_POST['content'];//mb_convert_encoding ($_POST['content'] ,"Windows-1251", "UTF-8"  );

        /*$mail = mail(WEBMASTER_EMAIL2, $subject, $message,
            "From: site@azimuttelecom\r\n"
                ."X-Mailer: PHP/" . phpversion(). "\r\n"
                ."MIME-Version: 1.0 \r\n"
                ."Content-Type: text/html; charset=cp1251");
        if($mail)
        {
            echo 'OK';
            $_SESSION['cap'] = null;
        }*/

        include_once('phpmailer/class.phpmailer.php');
        $mail = new PHPMailer();
        $mail->CharSet = 'utf-8';
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AddAddress(WEBMASTER_EMAIL2);
//        var_dump($mail);
        if($mail->Send()) {
            echo 'OK';
            $_SESSION['cap'] = null;
        } else {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }

    }
    else
    {
        echo '<div class="notification_error">'.$error.'</div>';
    }

}
?>