<?php
$post = (!empty($_POST) ? true : false);
if($post) {
  $name = $_POST['name'];
  $secondname = $_POST['secondname'];
  $post = $_POST['post'];
  $companyname = $_POST['companyname'];
  $job = $_POST['job'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $error = '';
  if(!$error) {
    $address = "chkadua.sofiya@gmail.com";
    $sub = "Nedvex Group: заявка с сайта";
    $mes = "Имя: ".$name."\n\nФамилия: ".$secondname."\n\nМесто работы: ".$post."\n\nНазвание компании: ".$companyname."\n\nДолжность: ".$job."\n\nТелефон: ".$phone."\n\n\E-mail: ".$email."\n\n";
    $send = mail ($address, $sub,$mes,"Content-type:text/plain; charset = UTF-8\r\n");
    if($send) {echo 'OK';}
  }
  else {echo '<div class="err">'.$error.'</div>';}
}
?>