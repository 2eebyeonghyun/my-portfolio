<? include $_SERVER['DOCUMENT_ROOT']."/pf/inc/common.php"; ?>

<body>
    <div class="loading-text">Loading</div>
    <div class="lines"></div>
    <div class="cygni-loader">
        <div class="counter" data-count="99">00</div>
    </div>
    <div class="overlays"></div>

    <? include $_SERVER['DOCUMENT_ROOT']."/pf/inc/header.php"; ?>

    <div id="main" class="content">
        <div class="page-settings" data-layout="light" data-header-style="dark" data-menu-layout="dark"></div>
        <section id="page-content" class="page-content">
            <article class="title-wrap">
                <div class="inner">
                    <div class="page-nameBox">
                        <p class="pl-name">LEE BYEONG-HYUN PORTFOLIO</p>
                        <h5 class="page-name">WORKS</h5>
                    </div>
                </div>
            </article>
        </section>

        <? include $_SERVER['DOCUMENT_ROOT']."/pf/inc/topBtn.php"; ?>
    </div>
</body>
<script src="<?=DIR?>/js/plugins.js"></script>
<script src="<?=DIR?>/js/scripts.js"></script>

</html>