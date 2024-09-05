<?
$cheditor = "no"; $_dep = array(2,5);
$_tit = array('WORK','한국자동차연구원');

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
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/background-img5.png" alt="한국자동차연구원 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">한국자동차연구원</span>
                        <div class="project_text_wr">
                            <p class="text">
                                한국자동차연구원 홈페이지는 기존 사이트에서 새롭게 리뉴얼 작업을 한 프로젝트입니다.<br> 
                                한국자동차연구원 홈페이지 작업에 들어간 인원은 2명이며 제가 맡은 업무는 기획, 디자인, 퍼블리싱 업무를 맡아 진행했습니다.<br> 
                                홈페이지 작업 기간은 총 3주정도 소요됐으며, 작업에 이용한 툴로는 Illustrator, Photoshop, Brackets를 사용하여 작업을 진행했습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">32명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">홈페이지 리뉴얼, 퍼블리싱, 디자인, 기획, 유지보수</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #102C6A;"></span>
                                        <p class="color__name">#102C6A</p>
                                    </li>

                                    <li>
                                        <span class="color__box" style="background-color: #84B0E3;"></span>
                                        <p class="color__name">#84B0E3</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #C9C9C9;"></span>
                                        <p class="color__name">#C9C9C9</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://kts.katech.re.kr/" class="view__btn viewHome">View Page</a>
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
