<?
$cheditor = "no"; $_dep = array(2,12);
$_tit = array('WORK','한국불교미디어정보센터');

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
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/background-img1.png" alt="한국불교미디어정보센터 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">한국불교미디어정보센터</span>
                        <div class="project_text_wr">
                            <p class="text">
                                해당 포트폴리오는 제가 입사 후 제일 처음 개인프로젝트로 맡은 한국불교미디어정보센터를 새롭 리뉴얼하여 작업하였습니다.<br> 
                                개인 프로젝트이며 디자인/기획/퍼블리싱을 모두 맡아 진행하였습니다.<br> 
                                작업 소요 시간은 총 3주 동안 작업하였고 작업에 이용한 툴로는 일러스트/포토샵, Brackets를 통해 작업을 하였습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">1명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">리뉴얼, 퍼블리싱, 기획, 디자인</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #749AA7;"></span>
                                        <p class="color__name">#749AA7</p>
                                    </li>

                                    <li>
                                        <span class="color__box" style="background-color: #F5DF4D;"></span>
                                        <p class="color__name">#F5DF4D</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #666666;"></span>
                                        <p class="color__name">#666666</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://bib.or.kr" class="view__btn viewHome">View Page</a>
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
