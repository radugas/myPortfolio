<?php
if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {

	$admin_email  = trim($_POST['admin_email']);
	$form_subject = trim($_POST["form_subject"]);
	$message = trim($_POST['message']);
	
}

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

mail($admin_email, adopt($form_subject), $message);