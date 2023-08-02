<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
	$to = "vobiachenko1@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";//тема письма, откуда прилитает

	
	$msg="
    Имя: $name /n
    Фамилия: $surname /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from "); //чтобы не падало в спам, можно заменить $from на $to 

?>

<p>Привет, форма отправлена</p>

