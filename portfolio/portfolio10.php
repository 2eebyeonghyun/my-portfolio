<?
$cheditor = "no"; $_dep = array(2,10);
$_tit = array('WORK','열정과일');

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
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/background-img10.png" alt="열정과일 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">열정과일</span>
                        <div class="project_text_wr">
                            <p class="text">
                                열정과일은 한커뮤니케이션에서 자체적으로 만드려고 했던 과일 도매업 쇼핑몰 홈페이지입니다.<br> 
                                작업에 투입한 인원은 2명이며 제가 맡은 업무는 기획, 디자인, 퍼블리싱 업무를 맡아 진행했습니다.<br> 
                                작업은 마무리가 되지 않았지만 틀 공사는 1.5주 정도 소요했으며 작업에 사용한 툴로는 일러스트/포토샵, Brackets를 사용하여 작업했습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">2명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">홈페이지 제작, 퍼블리싱, 기획, 디자인</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #FFC82B;"></span>
                                        <p class="color__name">#FFC82B</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #222222;"></span>
                                        <p class="color__name">#222222</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://lbh6154.cafe24.com/fru/" class="view__btn viewHome">View Page</a>
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
