<?
$cheditor = "no"; $_dep = array(2,13);
$_tit = array('WORK','국제커리어센터');

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
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/background-img13.jpg" alt="국제커리어센터 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">국제커리어센터</span>
                        <div class="project_text_wr">
                            <p class="text">
                                국제커리어센터는 기존에 국제커리어센터 홈페이지를 새로 리뉴얼하는 업무였습니다.<br> 
                                프로젝트에 참여한 작업 인원은 3명이였으며 제가 맡은 업무는 기획, 퍼블리싱과 일부 디자인 업무를 맡아 진행하였습니다.<br> 
                                홈페이지 작업 기간은 3주 정도 소요하였으며, 작업에 이용한 툴은 일러스트/포토샵 그리고 Brackets을 이용하여 작업을 진행하였습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">3명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">홈페이지 제작, 퍼블리싱, 기획, 일부 디자인, 유지보수</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #2149a6;"></span>
                                        <p class="color__name">#2149a6</p>
                                    </li>

                                    <li>
                                        <span class="color__box" style="background-color: #fff;"></span>
                                        <p class="color__name">#ffffff</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #f08100;"></span>
                                        <p class="color__name">#f08100</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://kjcareer.co.kr/" class="view__btn viewHome">View Page</a>
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