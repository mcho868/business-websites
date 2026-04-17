import { html, reactive } from '@arrow-js/core';

const PORTFOLIO_URL = 'https://manseungchoi.com';
const INQUIRY_EMAIL = 'brendanchoi0626@gmail.com';
const INQUIRY_MAILTO = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent('비즈니스 웹사이트 문의')}`;
const INQUIRY_PHONE = '022 036 8384';
const INQUIRY_PHONE_TEL = 'tel:+64220368384';
const INQUIRY_KAKAO = 'manseung626';

const state = reactive({
    faqOpen: null,
});

const toggleFaq = (i) => {
    state.faqOpen = state.faqOpen === i ? null : i;
};

const audiences = [
    { icon: '🍜', name: '식당' },
    { icon: '☕', name: '카페' },
    { icon: '💇', name: '미용실' },
    { icon: '💅', name: '네일샵' },
    { icon: '📚', name: '학원·과외' },
    { icon: '🧹', name: '청소' },
    { icon: '🔧', name: '플러밍·전기' },
    { icon: '🎨', name: '페인팅' },
];

const pricing = [
    {
        tier: 'Starter',
        name: '원페이지 웹사이트',
        price: '199',
        suffix: '부터',
        badge: null,
        features: [
            '모바일 최적화 반응형 디자인',
            '비즈니스 소개 · 서비스 · 위치 정보',
            '전화 / 카카오톡 / 인스타 바로 연결',
            '간단한 문의폼 (선택)',
            '영업시간 · 지도 표시',
        ],
    },
    {
        tier: 'Business',
        name: '비즈니스 · 커스텀 웹사이트',
        price: '999',
        suffix: '부터',
        badge: '추천',
        featured: true,
        features: [
            '여러 페이지 구성 (메뉴 · 갤러리 · 소개 등)',
            '고급 문의폼 / 예약 기능 (선택)',
            '블로그 · 뉴스 · 공지사항 섹션',
            '관리자 페이지 · 콘텐츠 수정 도구',
            '요구사항에 맞는 커스텀 개발',
        ],
    },
];

const features = [
    { icon: '📱', title: '모바일 최적화', desc: '휴대폰, 태블릿, 데스크탑 어느 기기에서나 깔끔하게 보이도록 제작합니다.' },
    { icon: '✉️', title: '문의 폼', desc: '고객이 바로 문의할 수 있는 폼을 추가하여 이메일로 받아보세요.' },
    { icon: '💬', title: '카톡·전화 연결', desc: '카카오톡 오픈채팅, 전화, 인스타그램 등 원하는 채널과 바로 연결됩니다.' },
    { icon: '📍', title: '위치 · 지도 · 영업시간', desc: '고객이 필요한 정보를 한 곳에서 찾을 수 있도록 정리해 드립니다.' },
    { icon: '🧾', title: '메뉴 · 가격표', desc: '식당 메뉴, 서비스 가격, 코스 안내 등 원하는 정보를 깔끔하게 정리합니다.' },
    { icon: '⚡', title: '빠른 로딩', desc: '가벼운 구조로 제작해 느린 인터넷에서도 빠르게 열립니다.' },
];

const process = [
    { num: '01', name: '상담', desc: '원하는 스타일과 필요한 기능을 편하게 이야기 나눕니다.' },
    { num: '02', name: '요구사항 정리', desc: '비즈니스에 꼭 맞는 구성을 함께 정리합니다.' },
    { num: '03', name: '제작', desc: '디자인부터 개발까지 책임지고 만들어 드립니다.' },
    { num: '04', name: '수정', desc: '원하시는 부분을 확인하고 반영해 드립니다.' },
    { num: '05', name: '배포', desc: '완성된 웹사이트를 실제로 볼 수 있도록 배포합니다.' },
];

const faqs = [
    {
        q: '제작 기간은 얼마나 걸리나요?',
        a: '원페이지 웹사이트는 보통 3~7일, 비즈니스 웹사이트는 2~3주 정도 걸립니다. 요구사항과 기능에 따라 달라질 수 있으며, 상담 때 구체적인 일정을 말씀드립니다.',
    },
    {
        q: '도메인이나 호스팅은 별도인가요?',
        a: '네, 도메인 구매 비용과 호스팅/서버 비용은 별도이며 고객이 직접 부담하시게 됩니다. 추천 서비스와 설정 방법은 안내해 드리고, 필요하시면 저희가 대신 구매·설정도 도와드립니다.',
    },
    {
        q: '나중에 수정이나 업데이트가 가능한가요?',
        a: '네, 가능합니다. 초기 제작 후 수정 범위는 상담 때 안내드리며, 이후 메뉴 변경이나 가격 수정 같은 소규모 업데이트는 별도 요금으로 진행할 수 있습니다.',
    },
    {
        q: '모바일에서도 잘 보이나요?',
        a: '모든 웹사이트는 기본적으로 모바일 최적화로 제작됩니다. 뉴질랜드 한인 고객 대부분이 휴대폰으로 검색하기 때문에 모바일에서 가장 잘 보이도록 신경 씁니다.',
    },
    {
        q: '어떤 비즈니스까지 제작 가능한가요?',
        a: '식당, 카페, 미용실, 네일샵, 학원, 청소·플러밍·페인팅 등 트레이드 비즈니스 등 뉴질랜드 한인 소상공인이라면 어떤 업종이든 환영합니다. 확신이 없으시다면 편하게 문의만 주셔도 괜찮습니다.',
    },
    {
        q: '영어/한국어 둘 다 지원되나요?',
        a: '네, 필요하시면 영어·한국어 두 가지 언어로 제작 가능합니다. 뉴질랜드 현지 고객과 한인 고객 모두에게 어필할 수 있도록 구성해 드립니다.',
    },
];

const nav = () => html`
    <nav class="nav">
        <div class="nav-inner">
            <a class="nav-logo" href="#top">business<span>()</span> websites</a>
            <a class="nav-cta" href="#contact">문의하기</a>
        </div>
    </nav>
`;

const hero = () => html`
    <section class="hero" id="top">
        <div class="container hero-inner">
            <p class="hero-prompt">~/new-zealand $ start_business_website<span class="cursor"></span></p>
            <h1>
                뉴질랜드 한인 비즈니스를 위한<br />
                <span class="accent">합리적인 웹사이트 제작</span>
            </h1>
            <p class="hero-sub">
                식당, 카페, 미용실, 학원, 트레이드 비즈니스까지.<br />
                심플하고 전문적인 웹사이트를 부담 없는 가격으로 만들어 드립니다.
            </p>
            <div class="hero-price-row">
                <div class="hero-price">
                    <span class="hero-price-label">원페이지</span>
                    <span class="hero-price-value">NZD $199</span>
                </div>
                <div class="hero-price">
                    <span class="hero-price-label">비즈니스</span>
                    <span class="hero-price-value">NZD $999</span>
                </div>
            </div>
            <div class="hero-ctas">
                <a class="btn" href="${INQUIRY_PHONE_TEL}">📞 ${INQUIRY_PHONE}</a>
                <a class="btn-outline" href="${INQUIRY_MAILTO}">📧 이메일</a>
                <a class="btn-outline" href="${PORTFOLIO_URL}" target="_blank" rel="noopener">
                    포트폴리오 ↗
                </a>
            </div>
            <p class="hero-note">
                💬 카카오톡 ID: <span class="hero-kakao">${INQUIRY_KAKAO}</span> &nbsp;·&nbsp; 도메인 및 호스팅/서버 비용은 별도입니다
            </p>
        </div>
    </section>
`;

const audience = () => html`
    <section class="section" id="audience">
        <div class="container">
            <p class="section-label">// Who this is for</p>
            <h2 class="section-title">이런 비즈니스에 잘 맞습니다</h2>
            <p class="section-sub">
                뉴질랜드에서 로컬 고객을 만나는 모든 한인 소상공인을 환영합니다.
                아래에 없는 업종이어도 편하게 문의해 주세요.
            </p>
            <div class="audience-grid">
                ${audiences.map(a => html`
                    <div class="audience-card">
                        <span class="audience-icon">${a.icon}</span>
                        <div class="audience-name">${a.name}</div>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const pricingSection = () => html`
    <section class="section section-alt" id="pricing">
        <div class="container">
            <p class="section-label">// Pricing</p>
            <h2 class="section-title">투명한 가격</h2>
            <p class="section-sub">
                필요한 만큼만 선택하세요. 복잡한 기능이 많아질수록 가격은 올라가지만,
                처음엔 가장 간단하게 시작해도 괜찮습니다.
            </p>
            <div class="pricing-grid">
                ${pricing.map(p => html`
                    <div class="${p.featured ? 'price-card featured' : 'price-card'}">
                        ${p.badge ? html`<span class="price-badge">${p.badge}</span>` : ''}
                        <div class="price-tier">${p.tier}</div>
                        <div class="price-name">${p.name}</div>
                        <div class="price-amount">
                            <span class="currency">NZD $</span>
                            <span class="value">${p.price}</span>
                            <span class="suffix">${p.suffix}</span>
                        </div>
                        <ul class="price-list">
                            ${p.features.map(f => html`
                                <li><span class="price-check">✓</span><span>${f}</span></li>
                            `)}
                        </ul>
                        <a class="btn" href="#contact">문의하기 →</a>
                    </div>
                `)}
            </div>
            <div class="pricing-note">
                <strong>참고:</strong> 도메인 구매와 호스팅/서버 비용은 기본 가격에 포함되지 않으며, 고객이 직접 부담하십니다. 추천·설정은 도와드립니다.
            </div>
        </div>
    </section>
`;

const featuresSection = () => html`
    <section class="section" id="features">
        <div class="container">
            <p class="section-label">// Included</p>
            <h2 class="section-title">기본으로 포함되는 기능</h2>
            <p class="section-sub">
                작은 비즈니스에 꼭 필요한 기능만 담았습니다. 불필요한 기능으로 가격을 올리지 않습니다.
            </p>
            <div class="features-grid">
                ${features.map(f => html`
                    <div class="feature">
                        <span class="feature-icon">${f.icon}</span>
                        <div class="feature-title">${f.title}</div>
                        <div class="feature-desc">${f.desc}</div>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const whyMe = () => html`
    <section class="section section-alt" id="why">
        <div class="container">
            <p class="section-label">// About the developer</p>
            <h2 class="section-title">왜 저에게 맡기시나요?</h2>
            <div class="why-inner">
                <div class="why-text">
                    <p>
                        안녕하세요, <strong style="color: var(--white);">최만승 (Brendan)</strong>입니다.
                        현재 뉴질랜드의 스타트업에서 Technical Lead로 일하며,
                        실제 비즈니스에 쓰이는 웹사이트와 AI 서비스를 만들고 있습니다.
                    </p>
                    <p>
                        기술적인 부분은 제가 다 챙기니 어려운 용어를 모르셔도 괜찮습니다.
                        필요한 기능을 편하게 한국어로 말씀만 해주시면 됩니다.
                    </p>
                    <p>
                        더 자세한 경력과 프로젝트가 궁금하시다면
                        <a href="${PORTFOLIO_URL}" target="_blank" rel="noopener">
                            manseungchoi.com
                        </a>
                        에서 확인하실 수 있습니다.
                    </p>
                </div>
                <div class="why-card">
                    <div class="why-card-header">
                        <span class="why-card-dot dot-r"></span>
                        <span class="why-card-dot dot-y"></span>
                        <span class="why-card-dot dot-g"></span>
                    </div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">whoami</span></div>
                    <div class="why-line"><span class="out">brendan // startup technical lead</span></div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">location</span></div>
                    <div class="why-line"><span class="out">new zealand 🇳🇿</span></div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">speaks</span></div>
                    <div class="why-line"><span class="out">한국어 · english</span></div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">focus</span></div>
                    <div class="why-line"><span class="out">small business · local stores</span></div>
                </div>
            </div>
        </div>
    </section>
`;

const processSection = () => html`
    <section class="section" id="process">
        <div class="container">
            <p class="section-label">// Process</p>
            <h2 class="section-title">간단한 5단계 진행</h2>
            <p class="section-sub">
                복잡한 절차 없이 편하게 진행합니다. 기술 용어를 모르셔도 괜찮습니다.
            </p>
            <div class="process-list">
                ${process.map(s => html`
                    <div class="process-step">
                        <div class="process-num">STEP ${s.num}</div>
                        <div class="process-name">${s.name}</div>
                        <div class="process-desc">${s.desc}</div>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const faqSection = () => html`
    <section class="section section-alt" id="faq">
        <div class="container">
            <p class="section-label">// FAQ</p>
            <h2 class="section-title">자주 묻는 질문</h2>
            <div class="faq-list">
                ${faqs.map((f, i) => html`
                    <div class="${() => 'faq-item' + (state.faqOpen === i ? ' open' : '')}">
                        <button class="faq-q" @click="${() => toggleFaq(i)}">
                            <span>${f.q}</span>
                            <span class="faq-q-icon">+</span>
                        </button>
                        <div class="faq-a">
                            <div class="faq-a-inner">${f.a}</div>
                        </div>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const finalCta = () => html`
    <section class="final-cta" id="contact">
        <div class="container final-cta-inner">
            <h2>비즈니스 웹사이트, 지금 시작해볼까요?</h2>
            <p>
                아직 뭘 원하는지 정확히 모르셔도 괜찮습니다.
                편하게 연락 주시면 함께 정리해 드립니다.
            </p>
            <div class="final-ctas">
                <a class="btn" href="${INQUIRY_PHONE_TEL}">
                    📞 ${INQUIRY_PHONE}
                </a>
                <a class="btn-outline" href="${INQUIRY_MAILTO}">
                    📧 이메일 문의
                </a>
            </div>
            <p class="final-cta-note">
                💬 카카오톡 ID: <strong>${INQUIRY_KAKAO}</strong>
                &nbsp;·&nbsp;
                <a href="${PORTFOLIO_URL}" target="_blank" rel="noopener">manseungchoi.com ↗</a>
            </p>
        </div>
    </section>
`;

const footer = () => html`
    <footer class="footer">
        <div class="container footer-inner">
            <div class="footer-links">
                <a href="#pricing">가격</a>
                <a href="#features">기능</a>
                <a href="#process">진행 과정</a>
                <a href="#faq">FAQ</a>
                <a href="${INQUIRY_PHONE_TEL}">📞 ${INQUIRY_PHONE}</a>
                <span class="footer-kakao">💬 카카오톡 ${INQUIRY_KAKAO}</span>
                <a href="${INQUIRY_MAILTO}">📧 ${INQUIRY_EMAIL}</a>
                <a href="${PORTFOLIO_URL}" target="_blank" rel="noopener">manseungchoi.com ↗</a>
            </div>
            <div class="footer-note">
                © ${new Date().getFullYear()} Brendan Choi · Auckland, New Zealand
            </div>
        </div>
    </footer>
`;

const app = () => html`<div class="site-root">
    ${nav()}
    ${hero()}
    ${audience()}
    ${pricingSection()}
    ${featuresSection()}
    ${whyMe()}
    ${processSection()}
    ${faqSection()}
    ${finalCta()}
    ${footer()}
</div>`;

app()(document.getElementById('app'));
