<?php
session_start();
$settings = parse_ini_file( 'ini/settings.ini', TRUE );
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <title>Dialogtest</title>

    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="stylesheet" href="library/css/global.css">
    <style>
    </style>
    <script>
    </script>
</head>
<body>
<a href="#" id="openDialog1">openDialog1</a>
<a href="#" id="openDialog2">openDialog2</a>
<a href="#" id="openMessage">openMessage</a>
<a href="#" id="openMessageNews">openMessageNews</a>
<script>
</script>
<script src="library/javascript/no_jquery.js"></script>
<script src="library/javascript/easyit_helper_neu.js"></script>
<script src="library/javascript/main_with_autologout.js"></script>
<!-- 
    registerOnScroll is not defined 

     PATH_TO_CSS is not defined


-->
<script src="library/javascript/DropResize.js"></script>
<script src="library/javascript/DialogDR.js"></script>
<script>
var dDia;
(function() {
    dDia = new DialogDR( { id: "#message", dVar: "dDia", modal: true, hasInfo: false, hasHelp: false, hasMin: false, hasMax: false, hasClose: false } );
})();
</script>
</body>
</html>
