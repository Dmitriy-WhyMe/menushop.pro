<!DOCTYPE HTML>
<html lang="ru">
  <head>
  <!-- Подключаемые файлы, метатеги, название страницы -->

  <!-- Кодировка страницы-->
  <meta charset="utf-8"/> 
  <title>Название страницы</title>
</head>
<body>
  <header>
  <!-- Шапка сайта-->
  </header>
	<?php
		if($_SERVER['REQUEST_METHOD'] == 'POST') {
			$to = "madesisudaidi@gmail.com";
			$message = "Имя заказчика: ".$_POST['name']."<br>";
			$message .= "Номер телефона: ".$_POST['tell']."<br>";
			$message .= "Email: ".$_POST['email']."<br>";
			$message .= "Вопрос: ".$_POST['que']."<br>";
			$subject = "Заказ с сайта good-food.pro";
			$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
			$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
			mail ($to, $subject, $message, $headers);
		}
	?>
  <footer>
  <!-- Подвал сайта-->
  </footer>
</body>
</html>

