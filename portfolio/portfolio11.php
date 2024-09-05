<?
$cheditor = "no"; $_dep = array(2,11);
$_tit = array('WORK','로봇플러스 & 마이스터');

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
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/background-img11.png" alt="로봇플러스 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">로봇플러스 마이스터</span>
                        <div class="project_text_wr">
                            <p class="text">
                                로봇플러스 마이스터 홈페이지는 기존 작업자의 홈페이지에서 유지보수 형식으로 새로 페이지를 추가하는 작업을 하였습니다.<br> 
                                마이스터 홈페이지의 내용을 그대로 카피하여 작업에 임했고 페이지 중 "장비예약조회/관심목록/장비예약/문의하기" 페이지를 디자인, 기획, 퍼블리싱 작업을 맡아 진행하였습니다.<br> 
                                홈페이지 작업 기간은 개발을 제외하여 총 1.5주일 정도 소요됐으며, 작업에 이용한 툴로는 일러스트/포토샵, Brackets를 사용하여 작업을 진행했습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">2명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">유지보수, 퍼블리싱, 기획, 디자인, 유지보수</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #62C6F1;"></span>
                                        <p class="color__name">#62C6F1</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #12315D;"></span>
                                        <p class="color__name">#12315D</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://robotization.kr/" class="view__btn viewHome">View Page</a>
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
