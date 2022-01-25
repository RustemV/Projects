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
    $company = trim($_POST['company']);//mb_convert_encoding (trim($_POST['company']) ,"Windows-1251", "UTF-8"  );
    $phone = stripslashes($_POST['phone']);//mb_convert_encoding (stripslashes($_POST['phone']) ,"Windows-1251", "UTF-8"  );
    $subject = 'Заявка в техническую поддержку';
    $message = "Пользовательские данные:

ФИО: ".$_POST['name']//mb_convert_encoding ($_POST['name'] ,"Windows-1251", "UTF-8"  )
        ."\r\n

Компания: ".$_POST['company']//mb_convert_encoding ($_POST['company'],"Windows-1251", "UTF-8"  )
        ." \r\n

Телефон: ".$_POST['phone']//mb_convert_encoding ($_POST['phone'] ,"Windows-1251", "UTF-8"  )
        ." \r\n

Сообщение: ".$_POST['content'];//mb_convert_encoding ($_POST['content'] ,"Windows-1251", "UTF-8"  );


    $error = '';

// Check name

    if(!$name)
    {
        $error .= 'Пожалуйста заполните поле "ФИО".<br />';//mb_convert_encoding ('Пожалуйста заполните поле "ФИО".<br />', "UTF-8","Windows-1251"  );
    }
// Check email

    if(!$company)
    {
        $error .= 'Пожалуйста заполните поле "Название компании".<br />';//mb_convert_encoding ('Пожалуйста заполните поле "Название компании".<br />', "UTF-8","Windows-1251"  );
    }

    if(isset($_SESSION['captcha_keystring']) && strtolower($_SESSION['captcha_keystring']) != strtolower($_POST['capthca']))
    {
        $error .= 'Код указан не правильно<br />';//mb_convert_encoding ('Код указан не правильно<br />', "UTF-8","Windows-1251"  );
    }


    if(!$error)
    {
        include_once('phpmailer/class.phpmailer.php');
        $mail = new PHPMailer();
        $mail->CharSet = 'utf-8';
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AddAddress(WEBMASTER_EMAIL);
//        var_dump($mail);
        if($mail->Send()) {
            echo 'OK';
            $_SESSION['cap'] = null;
        } else {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }

        /*$mail = mail(WEBMASTER_EMAIL, $subject, $message,
            "From: site@azimuttelecom\r\n"
                ."X-Mailer: PHP/" . phpversion(). "\r\n"
                ."MIME-Version: 1.0 \r\n"
                ."Content-Type: text/html; charset=cp1251");
        if($mail)
        {
            echo 'OK';
            $_SESSION['cap'] = null;
        }*/

    }
    else
    {
        echo '<div class="notification_error">'.$error.'</div>';
    }

}
?>