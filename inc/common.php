<?include_once $_SERVER['DOCUMENT_ROOT'].'/pf/inc/pub_config.php';?>

<!DOCTYPE html>
<html lang="ko">

    <?php define('DIR','https://lbh6154.cafe24.com/pf');?>

    <head>
        <!-- Google Tag Manager -->
        <script>
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer'
                        ? '&l=' + l
                        : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f
                    .parentNode
                    .insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-W8NH9CH2');
        </script>
        <!-- End Google Tag Manager -->

        <!-- Google tag (gtag.js) -->
        <script
            async="async"
            src="https://www.googletagmanager.com/gtag/js?id=G-02H2LLTXJY"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-02H2LLTXJY');
        </script>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>이병현 포트폴리오</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

        <link rel="apple-touch-icon" sizes="180x180" href="<?=DIR?>/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?=DIR?>/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?=DIR?>/favicon/favicon-16x16.png">
        <link rel="manifest" href="<?=DIR?>/favicon/site.webmanifest">
        <link rel="mask-icon" href="<?=DIR?>/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">

        <meta property="url" content="https://lbh6154.cafe24.com/pf/">
        <meta property="og:title" content="">
        <meta property="og:type" content="website">
        <meta property="og:description" content="">
        <meta property="og:image" content="">

        <meta name="url" content="https://lbh6154.cafe24.com/pf/">
        <meta name="description" content="">
        <meta name="keywords" content="">

        <link href="<?=DIR?>/css/reset.css" rel="stylesheet">
        <link href="<?=DIR?>/css/main.css" rel="stylesheet">
        <link href="<?=DIR?>/css/font.css" rel="stylesheet">
        <link href="<?=DIR?>/style/style.css" rel="stylesheet">
        <link href="<?=DIR?>/css/plugins.css" rel="stylesheet">
        <link href="<?=DIR?>/css/style.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

        <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="<?=DIR?>/js/main.js"></script>

        <!--
        <script language="javascript">
            document.oncontextmenu = function () {
                return false;
            } //마우스 오른쪽 금지

            $(document).ready(function () {
                $(document).bind('keydown', function (e) {
                    if (e.keyCode == 123/* F12 */) {
                        e.preventDefault();
                        e.returnValue = false;
                    }
                });
            });
        </script>
        -->
    </head>