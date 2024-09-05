<?
$cheditor = "no"; $_dep = array(2,6);
$_tit = array('WORK','중랑아이위키');

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
                        <a href="igaming_full_img.JPG" target="_blank"><img src="<?=DIR?>/img/background-img6.png" alt="중랑아이위키 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">중랑아이위키</span>
                        <div class="project_text_wr">
                            <p class="text">
                                중랑아이위키 홈페이지는 기존에 홈페이지에서 새로 신설하는 홈페이지입니다.<br> 
                                중랑아이위키 홈페이지 작업에 들어간 인원은 3명이였으며, 제가 맡은 업무는 퍼블리싱 업무를 맡아 진행했습니다.<br> 
                                홈페이지 작업 기간은 총 1주정도 소요됐으며, 작업에 이용한 툴로는 Brackets를 사용하여 작업을 진행했습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">3명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">홈페이지 제작, 퍼블리싱</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #1561A1;"></span>
                                        <p class="color__name">#1561A1</p>
                                    </li>

                                    <li>
                                        <span class="color__box" style="background-color: #ffA500;"></span>
                                        <p class="color__name">#ffA500</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <span class="title">서브컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #000000;"></span>
                                        <p class="color__name">#000000</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="http://www.i-wiki.or.kr/index_re.php" class="view__btn viewHome">View Page</a>
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
