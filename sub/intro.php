<? include $_SERVER['DOCUMENT_ROOT'] . "/pf/inc/common.php"; ?>

<body>
    <div class="loading-text">Loading</div>
    <div class="lines"></div>
    <div class="cygni-loader">
        <div class="counter" data-count="99">00</div>
    </div>
    <div class="overlays"></div>

    <? include $_SERVER['DOCUMENT_ROOT'] . "/pf/inc/header.php"; ?>

    <div id="main" class="content">
        <div
            class="page-settings"
            data-layout="light"
            data-header-style="dark"
            data-menu-layout="dark"></div>
        <section id="page-content" class="page-content">
            <article class="title-wrap">
                <div class="inner">
                    <div class="page-nameBox">
                        <p class="pl-name">LEE BYEONG-HYUN PORTFOLIO</p>
                        <h5 class="page-name">INTRODUCE</h5>
                    </div>
                </div>
            </article>

            <article class="intro_topbg">
                <div class="inner">
                    <h3 class="page-title">about me</h3>
                </div>
            </article>

            <article class="lbh-information-wrap">
                <div class="information-1">
                    <div class="nameBox">
                        <h6 class="korea-name">이병현</h6>
                        <span class="english-name">lee byeong hyun</span>
                    </div>
                    <ul class="infoBox">
                        <li>
                            <span>생년월일 :</span>
                            <p>1994.07.06</p>
                        </li>
                        <li>
                            <span>휴대폰 :</span>
                            <p>+82 010.4123.6154</p>
                        </li>
                        <li>
                            <span>이메일 :</span>
                            <p>wada0012@naver.com</p>
                        </li>
                        <li>
                            <span>주소 :</span>
                            <p>경기도 부천시 오정로289</p>
                        </li>
                    </ul>
                </div>
                <div class="information-2">
                    <div class="chart_area">
                        <canvas id="myChart" class="myChart"></canvas>
                    </div>

                    <div class="mobile_chart_area">
                        <h3 class="chart_title">저의 능력치입니다.</h3>
                        <div class="bar-item bar-one">
                            <span class="year">HTML</span>
                            <div class="bar" data-percentage="95%"></div>
                        </div>
                        <div class="bar-item bar-two">
                            <span class="year">CSS</span>
                            <div class="bar" data-percentage="90%"></div>
                        </div>
                        <div class="bar-item bar-three">
                            <span class="year">JS</span>
                            <div class="bar" data-percentage="80%"></div>
                        </div>
                        <div class="bar-item bar-four">
                            <span class="year">Photoshop</span>
                            <div class="bar" data-percentage="85%"></div>
                        </div>
                        <div class="bar-item bar-five">
                            <span class="year">Illustrator</span>
                            <div class="bar" data-percentage="85%"></div>
                        </div>
                        <div class="bar-item bar-six">
                            <span class="year">Brakets/vs Code</span>
                            <div class="bar" data-percentage="100%"></div>
                        </div>
                    </div>

                    <div class="chart-information">
                        <span class="abillity-intro">저를 소개합니다.</span>
                        <div class="abillity-Infobox">
                            <p class="abillity-text">
                                안녕하세요. 저는 고객의 편의성을 최우선으로 생각하며,<br> 
                                웹 표준과 접근성을 준수하고 코드 조직화 및 재사용성을 위해 효율적으로 코드를 작성을 하려고 노력하는 2년차 웹퍼블리셔 이병현입니다.
                            </p>

                            <p class="abillity-text">
                                저는 재직당시 팀프로젝트와 개인프로젝트를 경험해보면서 팀원들과의 의사소통 능력과 기존에 가지고 있던 퍼블리싱 능력이 많이 발전하였습니다.<br> 
                                또, 디자이너들의 디자인과 여러 사이트를 서칭하면서 최신 트렌드를 접하고 홈페이지에 적용하면 좋을 거 같은 스크립트문을 많이 보면서 공부를 하고 있습니다.
                            </p>

                            <p class="abillity-text">
                                제가 다를 수 있는 툴로는 일러스트(illustrator), 포토샵(photoshop), 브라켓(Brackets), vs code를 다를 수 있습니다.<br> 
                                비록 디자인 능력은 부족하지만 업무에 필요한 기본적인 능력은 갖추고 있습니다.<br> 
                                또, 저는 html과 css/scss에 큰 강점을 가지고 있으며 js능력은 앞 기술에 비해 떨어지지만 배우려는 자세를 가지고 있고 실무에서는 API 활용 능력과 필요 시 서칭과 ChatGPT를 사용하여 크게 어려움없이 홈페이지 작업을 하는데 도움을 구하면서 작업하고 있습니다.
                            </p>

                            <p class="abillity-text">
                                마지막으로 웹 퍼블리셔는 디자이너와 개발자의 연결고리라고 생각합니다.<br> 
                                항상 팀원들의 말을 귀를 기울일 줄 알며 내가 아는 정보도 함께 공유할 수 있는 웹 퍼블리셔가 되겠습니다.<br> 
                                감사합니다 : D
                            </p>
                        </div>
                    </div>

                    <div class="myHistory-area">
                        <span class="myHistory-intro">저의 경력은 이러합니다.</span>
                        <div class="history-box">
                            <div class="item">
                                <dl>
                                    <dt>2013</dt>
                                    <dd class="fade-class">
                                        <b>.02</b>
                                        <span>세명대학교 컴퓨터공학부 입학</span>
                                    </dd>
                                </dl>
                            </div>
                            <div class="item">
                                <dl>
                                    <dt>2014</dt>
                                    <dd class="fade-class">
                                        <b>.12</b>
                                        <span>육군 5사단 입대(병장 만기전역)</span>
                                    </dd>
                                </dl>
                            </div>
                            <div class="item">
                                <dl>
                                    <dt>2020</dt>
                                    <dd class="fade-class">
                                        <b>.02</b>
                                        <span>세명대학교 컴퓨터공학부 졸업</span>
                                    </dd>
                                    <dd class="fade-class">
                                        <b>.02</b>
                                        <span>부천그린컴퓨터아카데미 교육 참가</span>
                                    </dd>
                                    <dd class="fade-class">
                                        <b>.08</b>
                                        <span>부천그린컴퓨터아카데미 교육 끝</span>
                                    </dd>
                                </dl>
                            </div>
                            <div class="item">
                                <dl>
                                    <dt>2021 ~</dt>
                                    <dd class="fade-class">
                                        <b>.10</b>
                                        <span>한커뮤니케이션 취업</span>
                                    </dd>
                                </dl>
                            </div>
                            <div class="item">
                                <dl>
                                    <dt>2024 ~</dt>
                                    <dd class="fade-class">
                                        <b>.07</b>
                                        <span>한커뮤니케이션 퇴사</span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-btnWrap">
                    <a href="<?= DIR ?>/sub/work.php" class="button">포트폴리오
                        <div class="button__horizontal"></div>
                        <div class="button__vertical"></div>
                    </a>
                </div>
            </article>
        </section>

        <? include $_SERVER['DOCUMENT_ROOT'] . "/pf/inc/topBtn.php"; ?>
    </div>
</body>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="https://d3js.org/d3.v3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js"></script>
<script src="<?= DIR ?>/js/plugins.js"></script>
<script src="<?= DIR ?>/js/scripts.js"></script>
<script src="<?= DIR ?>/js/canvas.js"></script>
<script>
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'HTML',
                'CSS',
                'JS',
                'Photoshop',
                'Illustrator',
                'Brakets/vs Code'
            ],
            datasets: [{
                label: 'My Abillity',
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#ededed',
                pointHoverBackgroundColor: '#ededed',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Abillity',
                data: [
                    95,
                    90,
                    80,
                    85,
                    85,
                    100
                ],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#ededed',
                pointHoverBackgroundColor: '#ededed',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });
</script>
<script>
    const targets = document.querySelectorAll(".fade-class");
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "-0px"
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            const container = entry.target;
            if (entry.isIntersecting) {
                container
                    .classList
                    .add("fade-in");
            } else {
                container
                    .classList
                    .remove("fade-in");
            }
        });
    }, options);

    targets.forEach((target) => {
        observer.observe(target);
    });
</script>
<script>
    const targets2 = document.querySelectorAll(".bar-item");
    const options2 = {
        root: null,
        threshold: 0.1,
        rootMargin: "-0px"
    };
    const observer2 = new IntersectionObserver(function(entries, observer2) {
        entries.forEach((entry) => {
            const container = entry.target;
            if (entry.isIntersecting) {
                container
                    .classList
                    .add("show");
            } else {
                container
                    .classList
                    .remove("show");
            }
        });
    }, options2);

    targets2.forEach((target) => {
        observer2.observe(target);
    });
</script>

</html>