<?
$cheditor = "no"; $_dep = array(2,1);
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
                        <a href="#none" target="_blank"><img src="<?=DIR?>/img/background-img12.png" alt="한국불교미디어정보센터 이미지"></a>
                    </div>

                    <div class="project_info_wr">
                        <span class="project_name">한국불교미디어정보센터</span>
                        <div class="project_text_wr">
                            <p class="text">
                                한국불교미디어정보센터는 제가 입사 후 처음 맡게 된 프로젝트입니다. 해당 사이트를 다시 한번 리뉴얼하여 작업을 한 프로젝트입니다.<br> 
                                해당 홈페이지는 이전 사이트와 다른 컨셉, 디자인으로 작업했으며 작업 인원은 1명 디자인, 기획, 퍼블리싱을 맡아 진행하였습니다.<br> 
                                홈페이지 리뉴얼 기간은 총 2주정도 소요됐으며, 작업에 이용한 툴로는 Illustrator, Photoshop, Brackets를 사용하여 작업을 진행했습니다.
                            </p>
                        </div>

                        <div class="project_work_wr">
                            <div class="row">
                                <span class="title">작업인원 : </span>
                                <p class="text">1명</p>
                            </div>

                            <div class="row">
                                <span class="title">업무내용 : </span>
                                <p class="text">홈페이지 리뉴얼, 퍼블리싱, 기획, 디자인</p>
                            </div>

                            <div class="row">
                                <span class="title">작업시간 : </span>
                                <p class="text">2023</p>
                            </div>

                            <div class="row">
                                <span class="title">메인컬러 : </span>
                                <ul class="list">
                                    <li>
                                        <span class="color__box" style="background-color: #19191C;"></span>
                                        <p class="color__name">#19191C</p>
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
                                        <span class="color__box" style="background-color: #E44343;"></span>
                                        <p class="color__name">#E44343</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view__wr">
                        <a href="<?=DIR?>/sub/work.php" class="view__btn viewList">View List</a>
                        <a href="https://lbh6154.cafe24.com/mediacenter/" class="view__btn viewHome">View Page</a>
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
