<?
$cheditor = "no"; $_dep = array(4,7);
$_tit = array('WORK','i-wiki');

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
                        <p class="create_year">2023</p>
                        <span class="pf__title">중랑아이위키</span>
                        <a href="http://www.i-wiki.or.kr/index_re.php" target="_blank" class="pf__link">
                            <span class="link__icon"><i class="axi axi-chain"></i></span>
                            Project View
                        </a>
                    </div>

                    <div class="pf__imgZone">
                        <div class="desktop__img">
                            <div class="img__box">
                                <img src="<?=DIR?>/img/view/i-wiki_desktop.JPG" alt="i-wiki Desktop img">
                            </div>
                        </div>

                        <div class="info__wr">
                            <span class="info">소개</span>
                            <p class="text">
                                중랑구아이위키 프로젝트는 기존에 중랑구 육아종합지원센터에서 새로 신설하는 홈페이지입니다.<br> 
                                홈페이지는 반응형(데스크탑, 테블릿, 모바일)으로 작업했으며, 제작 인원은 총 3명으로 제가 맡은 업무는 기획과 퍼블리싱을 맡아 진행하였습니다.<br> 
                                홈페이지 작업 기간은 대략 1주정도 소요됐으며, 웹표준과 접근성을 모두 준수하고 브라켓을 통한 작업을 진행하였습니다.
                            </p>
                        </div>

                        <div class="transform__img">
                            <div class="tablet__img row__img">
                                 <img src="<?=DIR?>/img/view/i-wiki_tablet.JPG" alt="i-wiki tablet img">
                            </div>
                            <div class="mobile__img row__img">
                                 <img src="<?=DIR?>/img/view/i-wiki_mobile.JPG" alt="i-wiki mobile img">
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article class="cont cont2">
                <div class="inner">
                    <div class="fontStyle__wr">
                        <span class="cont__title font_family_wr">Typography : Noto Sans KR</span>

                        <div class="top">
                            <div class="row">
                                <p class="font Noto_Sans_text Noto_Sans_text_bold">Noto Sans i-wiki</p>
                            </div>
                        </div>
                        
                        <div class="bot">
                            <div class="left row">
                                <span class="detail__txt">FONT DETAIL</span>
                                <p class="font Noto_Sans_text">AaBb</p>
                            </div>

                            <div class="right row">
                                <span class="detail__txt">LETTERS + NUMBERS</span>
                                <ul class="font_list Noto_Sans_text_list">
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
                                    <td class="member__part1 text_center">5</td>
                                    <td class="member__part2 text_center">0</td>
                                    <td class="member__part3 text_center">10</td>
                                    <td class="member__part4 text_center">0</td>
                                </tr>

                                <tr>
                                    <td class="member__gender">
                                        <span class="gender_icon"></span>
                                    </td>
                                    <td class="member__name">
                                        <span class="member_name">조병규</span>
                                        <p class="member_part">디자인</p>
                                    </td>
                                    <td class="member__part1 text_center">5</td>
                                    <td class="member__part2 text_center">10</td>
                                    <td class="member__part3 text_center">0</td>
                                    <td class="member__part4 text_center">0</td>
                                </tr>

                                <tr>
                                    <td class="member__gender">
                                        <span class="gender_icon"></span>
                                    </td>
                                    <td class="member__name">
                                        <span class="member_name">안재우</span>
                                        <p class="member_part">개발</p>
                                    </td>
                                    <td class="member__part1 text_center">0</td>
                                    <td class="member__part2 text_center">0</td>
                                    <td class="member__part3 text_center">0</td>
                                    <td class="member__part4 text_center">10</td>
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
                            <a href="http://www.i-wiki.or.kr/index_re.php" target="_blank" class="text">view</a>
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