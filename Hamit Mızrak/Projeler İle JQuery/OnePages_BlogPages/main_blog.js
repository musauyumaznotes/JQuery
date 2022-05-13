$(function () {
  var autoComplete = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "Ajax",
    "BASIC",
    "Bootstrap",
    "C",
    "C++",
    "Clojure",
    "Cobol",
    "ColdFusion",
    "Css3",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Html5",
    "Java",
    "JavaScript",
    "Jquery",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];
  $("#tags").autoComplete({
    source: autoComplete,
  });
});

$(function () {
  $("#btn_login").click(function () {
    $("#myUye").modal();
  });
});
$(function () { 
$("#btnSubmit").click(function () {
  var email, phone, password;
  email = $("#user_email").val();
  phone = $("#user_phone").val();
  email = $("#user_password").val();

  if (email == "") {
    $("#validation_email").html("Email Boş Geçilemez");
  }else if(validateEmail(email)==false)
  {
    $("#validation_email").html("Emaili Uygun Formatta Giriniz");
  }
  if (phone == "") {
    $("#validation_phone").html("Telefon Boş Geçilemez");
  }
  else if($.isNumeric(phone==false)){
    $("#validation_phone").html("Sayı Girmelisiniz");
  }
  if (password == "") {
    $("#validation_phone").html("Şifre Boş Geçilemez");
  }

function validateEmail(email) 
{
  var regex;

  };

});
});