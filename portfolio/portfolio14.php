<?
$cheditor = "no"; $_dep = array(2,14);
$_tit = array('WORK','iGaming Studio');

include $_SERVER['DOCUMENT_ROOT']."/pf/inc/common.php";
?>

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

        <section class="section portfolio__info__sec">
            <article class="cont cont1">
                <div class="inner">
                    <div class="picture__img">
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/igaming_img1.png" alt="igaming 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">iGaming Studio</span>
                        <div class="project_text_wr">
                            <p class="text">
                                iGaming Studio은 기존에 있던 홈페이지를 클론코딩(Clone Coding)으로 작업하였습니다.<br> 
                                작업은 24년 08월 30일부터 진행하였습니다. 작업은 클론 코딩으로 진행 형식으로 기존의 디자인을 보면서 제가 할 수 있는 스킬로 최대한 구현하였고 어려운 부분이 있으면 기존의 홈페이지에서 개발자 도구를 통해 작업 및 Chan GPT를 통해 작업하였습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">1명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">클론코딩, 퍼블리싱</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">진행중(24.08.30 ~)</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #fff;"></span>
                                        <p class="color__name">#ffffff</p>
                                    </li>

                                    <li>
                                        <span class="color__box" style="background-color: #222;"></span>
                                        <p class="color__name">#222222</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box"></span>
                                        <p class="color__name"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://lbh6154.cafe24.com/igaming/" class="view__btn viewHome">View Page</a>
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