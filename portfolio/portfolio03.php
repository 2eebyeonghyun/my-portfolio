<?
$cheditor = "no"; $_dep = array(2,3);
$_tit = array('WORK','한국과학기술컨벤션센터');

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
                        <a href="#none" target="_blank"><img src="<?=DIR?>/img/background-img3.png" alt="한국과학기술컨벤션센터 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">한국과학기술컨벤션센터</span>
                        <div class="project_text_wr">
                            <p class="text">
                                한국과학기술컨벤션센터 프로젝트는 홈페이지 새롭게 신설하는 프로젝트였습니다.<br>  
                                프로젝트 참여 인원은 3명이며 제가 맡은 업무는 퍼블리싱 업무를 맡아 진행했습니다.<br> 
                                홈페이지 작업 기간은 총 한달정도 소요됐으며, 작업에 이용한 툴로는 Brackets를 사용하여 작업을 진행했습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">3명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">홈페이지 제작, 퍼블리싱, 유지보수</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #25225C;"></span>
                                        <p class="color__name">#25225C</p>
                                    </li>

                                    <li>
                                        <span class="color__box" style="background-color: #ffffff;"></span>
                                        <p class="color__name">#ffffff</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #313942;"></span>
                                        <p class="color__name">#313942</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="http://hansian.co.kr/kofst/" class="view__btn viewHome">View Page</a>
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
