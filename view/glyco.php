<?
$cheditor = "no"; $_dep = array(4,4);
$_tit = array('WORK','Glyco');

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

        <section class="section pf__sec">
            <article class="cont cont1">
                <div class="inner">
                    <div class="pf__topTextZone">
                        <p class="create_year">2022</p>
                        <span class="pf__title">글리코영양소</span>
                        <a href="https://hanglyco.cafe24.com/" target="_blank" class="pf__link">
                            <span class="link__icon"><i class="axi axi-chain"></i></span>
                            Project View
                        </a>
                    </div>

                    <div class="pf__imgZone">
                        <div class="transform__img">
                            <div class="tablet__img row__img">
                                 <img src="<?=DIR?>/img/view/glyco_tablet.png" alt="kidsmarinepark tablet img">
                            </div>
                            <div class="mobile__img row__img">
                                 <img src="<?=DIR?>/img/view/glyco_mobile.png" alt="kidsmarinepark mobile img">
                            </div>
                        </div>

                        <div class="info__wr">
                            <span class="info">소개</span>
                            <p class="text">
                                글리코영양소 홈페이지는 한커뮤니케이션에서 자체적으로 도전했던 홈페이지이며 모바일 레이아웃에 맞춰 작업한 홈페이지입니다.<br> 
                                작업에 들어간 인원은 1명이며 기획, 디자인, 퍼블리싱 업무를 맡아 진행했습니다.<br> 
                                홈페이지 작업 기간은 총 1주 소요됐으며, 작업에 이용한 툴로는 일러스트/포토샵, Brackets를 사용하여 작업을 진행했습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article class="cont cont2">
                <div class="inner">
                    <div class="fontStyle__wr">
                        <span class="cont__title font_family_wr">Typography : 'S-CoreDream'</span>

                        <div class="top">
                            <div class="row">
                                <p class="font S_CoreDream_text S_CoreDream_text_bold">S-CoreDream Glyco</p>
                            </div>
                        </div>
                        
                        <div class="bot">
                            <div class="left row">
                                <span class="detail__txt">FONT DETAIL</span>
                                <p class="font S_CoreDream_text">AaBb</p>
                            </div>

                            <div class="right row">
                                <span class="detail__txt">LETTERS + NUMBERS</span>
                                <ul class="font_list S_CoreDream_text_list">
                                    <li>Aa</li>
                                    <li>Bb</li>
                                    <li>Cc</li>
                                    <li>Dd</li>
                                    <li>Ee</li>
                                    <li>Ff</li>
                                    <li>Gg</li>
                                    <li>Hh</li>
                                    <li>Ii</li>
                                    <li>Jj</li>
                                    <li>Kk</li>
                                    <li>Ll</li>
                                    <li>Mm</li>
                                    <li>Nn</li>
                                    <li>Oo</li>
                                    <li>Pp</li>
                                    <li>Qq</li>
                                    <li>Rr</li>
                                    <li>Ss</li>
                                    <li>Tt</li>
                                    <li>Uu</li>
                                    <li>Vv</li>
                                    <li>Ww</li>
                                    <li>Xx</li>
                                    <li>Yy</li>
                                    <li>Zz</li>
                                    <li>0</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="team__wr">
                        <table class="project__table">
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>프로젝트 멤버</th>
                                    <th>정보</th>
                                    <th class="text_center">기획</th>
                                    <th class="text_center">디자인</th>
                                    <th class="text_center">퍼블리싱</th>
                                    <th class="text_center">개발</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="member__gender">
                                        <span class="gender_icon"></span>
                                    </td>
                                    <td class="member__name">
                                        <span class="member_name">이병현</span>
                                        <p class="member_part">퍼블리싱</p>
                                    </td>
                                    <td class="member__part1 text_center">10</td>
                                    <td class="member__part2 text_center">10</td>
                                    <td class="member__part3 text_center">10</td>
                                    <td class="member__part4 text_center">0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="footer__btn__wr">
                        <li class="list_wr">
                            <i class="axi axi-ion-android-system-back"></i>
                            <a href="<?=DIR?>/sub/work.php" class="text">list</a>
                        </li>

                        <li class="link_wr">
                            <i class="axi axi-link"></i>
                            <a href="https://hanglyco.cafe24.com/" target="_blank" class="text">view</a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>

		<? include $_SERVER['DOCUMENT_ROOT']."/pf/inc/topBtn.php"; ?>
	</div>
</body>
<script src="<?=DIR?>/js/plugins.js"></script>
<script src="<?=DIR?>/js/scripts.js"></script>

</html>
