<?php
    session_start();
    $settings = parse_ini_file( 'ini/settings.ini', TRUE );
    $session_timeout = $settings['logout']['automatic_timeout'] * 60;
?>
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="author" content="Dipl. Ing. Olaf Thiele">
<meta http-equiv="Reply-to" content="info@.easyit-leipzig.de">
<meta name="description" content="hochkonfigurierbarer JavaScript-Dialog">
<meta name="robots" content="index, nofollow">
<meta name="keywords" content="hochkonfigurierbarer JavaScript-Dialog">
<title>Dialog easyIT-Leipzig</title>
    <link rel="stylesheet prefetch" href="library/css/main.dialog.css">
    <link rel="stylesheet prefetch" href="library/css/logo.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" href="favicon.png">
<style type="text/css">
div>div:nth-child(2) {
    color: #005AAD;
}
</style>
</head>
<body>
<div>
    <div><img src="library/images/logo_easyit_blue.png"></div>
    <div id="logoText">
        <div id="logoText1">easyIT</div>
        <div id="logoText2">Leipzig</div>
    </div>
</div>
<div>
    <div><img src="library/images/logo_easyit_blue.png"></div>
    <div id="logoDialog">
        <div id="logoDialog1">easyIT</div>
        <div id="logoDialog2">Dialog</div>
    </div>
</div>
<div id="ctrlArea">
    <button id="openDFlatModal">Dialog flach modal</button>
    <button id="openDFlatNotModal">Dialog flach nicht modal</button>
    <button id="openDMac">Dialog flach</button>
</div>
<script>
"use strict";
<?php echo( "var refresh_mousemove = " .$settings['logout']['refresh_mousemove'] . ";\n"); ?>
<?php echo( "var refresh_keydown = " .$settings['logout']['refresh_keydown'] . ";\n"); ?>
<?php echo( "var timeout_time = " . $session_timeout * 1000 . ";\n"); ?>
<?php echo( "var roleId = " . $_SESSION["role_id"] . ";\n"); ?>
var timeoutId;
</script>
<script src="library/javascript/no_jquery.js"></script>
<script src="library/javascript/easyit_helper_neu.js"></script>
<script src="library/javascript/main_with_autologout.js"></script>
<script src="library/javascript/DialogDR.js"></script>
<script src="library/javascript/DropResize.js"></script>
<script src="library/javascript/init_dialog.js"></script>
<script>
    nj( "#openDFlatNotModal" ).on( "click", function() {
        dDia.show({modal: false});
    })
    init( 'dDia' );
</script>
</body>
</html>