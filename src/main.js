import { html, reactive } from '@arrow-js/core';
import { translations, getLang, langPath } from './i18n.js';

const PORTFOLIO_URL = 'https://manseungchoi.com';
const INQUIRY_EMAIL = 'brendanchoi0626@gmail.com';
const INQUIRY_PHONE = '022 036 8384';
const INQUIRY_PHONE_TEL = 'tel:+64220368384';
const INQUIRY_KAKAO = 'manseung626';

const lang = getLang();
const t = translations[lang];

const INQUIRY_MAILTO = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(
    lang === 'en' ? 'Business website inquiry' : '비즈니스 웹사이트 문의'
)}`;

// Audience icons are language-independent; labels come from the dictionary.
const AUDIENCE_ICONS = ['🍜', '☕', '💇', '💅', '📚', '🧹', '🔧', '🎨'];
const FEATURE_ICONS = ['📱', '✉️', '💬', '📍', '🧾', '⚡'];
const PRICE_VALUES = ['199', '999'];
const PRICE_TIERS = ['Starter', 'Business'];
const PROCESS_NUMS = ['01', '02', '03', '04', '05'];

// Keep the document head in sync with the active language.
const applyMeta = () => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.meta.description);
};
applyMeta();

const state = reactive({
    faqOpen: null,
});

const toggleFaq = (i) => {
    state.faqOpen = state.faqOpen === i ? null : i;
};

const langPicker = () => {
    const koClass = lang === 'ko' ? 'lang-opt active' : 'lang-opt';
    const enClass = lang === 'en' ? 'lang-opt active' : 'lang-opt';
    return html`
    <div class="lang-picker" aria-label="${t.langToggle.aria}">
        <a class="${koClass}" href="${langPath('ko')}">${t.langToggle.ko}</a>
        <span class="lang-sep">/</span>
        <a class="${enClass}" href="${langPath('en')}">${t.langToggle.en}</a>
    </div>
`;
};

const nav = () => html`
    <nav class="nav">
        <div class="nav-inner">
            <a class="nav-logo" href="#top">business<span>()</span> websites</a>
            <div class="nav-right">
                ${langPicker()}
                <a class="nav-cta" href="#contact">${t.nav.cta}</a>
            </div>
        </div>
    </nav>
`;

const hero = () => html`
    <section class="hero" id="top">
        <div class="container hero-inner">
            <p class="hero-prompt">${t.hero.prompt}<span class="cursor"></span></p>
            <h1>
                ${t.hero.titleA}<br />
                <span class="accent">${t.hero.titleB}</span>
            </h1>
            <p class="hero-sub">
                ${t.hero.subA}<br />
                ${t.hero.subB}
            </p>
            <div class="hero-price-row">
                <div class="hero-price">
                    <span class="hero-price-label">${t.hero.priceLabel1}</span>
                    <span class="hero-price-value">NZD $199</span>
                </div>
                <div class="hero-price">
                    <span class="hero-price-label">${t.hero.priceLabel2}</span>
                    <span class="hero-price-value">NZD $999</span>
                </div>
            </div>
            <div class="hero-ctas">
                <a class="btn" href="${INQUIRY_PHONE_TEL}">📞 ${INQUIRY_PHONE}</a>
                <a class="btn-outline" href="${INQUIRY_MAILTO}">${t.hero.email}</a>
                <a class="btn-outline" href="${PORTFOLIO_URL}" target="_blank" rel="noopener">
                    ${t.hero.portfolio}
                </a>
            </div>
            <p class="hero-note">
                💬 ${t.hero.kakaoLabel} <span class="hero-kakao">${INQUIRY_KAKAO}</span> &nbsp;·&nbsp; ${t.hero.note}
            </p>
        </div>
    </section>
`;

const audience = () => html`
    <section class="section" id="audience">
        <div class="container">
            <p class="section-label">${t.audience.label}</p>
            <h2 class="section-title">${t.audience.title}</h2>
            <p class="section-sub">${t.audience.sub}</p>
            <div class="audience-grid">
                ${t.audience.items.map((name, i) => html`
                    <div class="audience-card">
                        <span class="audience-icon">${AUDIENCE_ICONS[i]}</span>
                        <div class="audience-name">${name}</div>
                    </div>
                `)}
            </div>
        </div>
    </section>
`;

const pricingSection = () => html`
    <section class="section section-alt" id="pricing">
        <div class="container">
            <p class="section-label">${t.pricing.label}</p>
            <h2 class="section-title">${t.pricing.title}</h2>
            <p class="section-sub">${t.pricing.sub}</p>
            <div class="pricing-grid">
                ${t.pricing.cards.map((p, i) => html`
                    <div class="${i === 1 ? 'price-card featured' : 'price-card'}">
                        ${p.badge ? html`<span class="price-badge">${p.badge}</span>` : ''}
                        <div class="price-tier">${PRICE_TIERS[i]}</div>
                        <div class="price-name">${p.name}</div>
                        <div class="price-amount">
                            <span class="currency">NZD $</span>
                            <span class="value">${PRICE_VALUES[i]}</span>
                            <span class="suffix">${t.pricing.suffix}</span>
                        </div>
                        <ul class="price-list">
                            ${p.features.map(f => html`
                                <li><span class="price-check">✓</span><span>${f}</span></li>
                            `)}
                        </ul>
                        <a class="btn" href="#contact">${t.pricing.cta}</a>
                    </div>
                `)}
            </div>
            <div class="pricing-note">
                <strong>${t.pricing.note.label}</strong>${t.pricing.note.text}
            </div>
        </div>
    </section>
`;

const featuresSection = () => html`
    <section class="section" id="features">
        <div class="container">
            <p class="section-label">${t.features.label}</p>
            <h2 class="section-title">${t.features.title}</h2>
            <p class="section-sub">${t.features.sub}</p>
            <div class="features-grid">
                ${t.features.items.map((f, i) => html`
                    <div class="feature">
                        <span class="feature-icon">${FEATURE_ICONS[i]}</span>
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
            <p class="section-label">${t.why.label}</p>
            <h2 class="section-title">${t.why.title}</h2>
            <div class="why-inner">
                <div class="why-text">
                    <p>
                        ${t.why.p1A}<strong style="color: var(--white);">${t.why.p1Name}</strong>${t.why.p1B}
                    </p>
                    <p>${t.why.p2}</p>
                    <p>
                        ${t.why.p3A}<a href="${PORTFOLIO_URL}" target="_blank" rel="noopener">manseungchoi.com</a>${t.why.p3B}
                    </p>
                </div>
                <div class="why-card">
                    <div class="why-card-header">
                        <span class="why-card-dot dot-r"></span>
                        <span class="why-card-dot dot-y"></span>
                        <span class="why-card-dot dot-g"></span>
                    </div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">whoami</span></div>
                    <div class="why-line"><span class="out">${t.why.card.whoami}</span></div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">location</span></div>
                    <div class="why-line"><span class="out">${t.why.card.location}</span></div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">speaks</span></div>
                    <div class="why-line"><span class="out">${t.why.card.speaks}</span></div>
                    <div class="why-line"><span class="prompt">$</span> <span class="cmd">focus</span></div>
                    <div class="why-line"><span class="out">${t.why.card.focus}</span></div>
                </div>
            </div>
        </div>
    </section>
`;

const processSection = () => html`
    <section class="section" id="process">
        <div class="container">
            <p class="section-label">${t.process.label}</p>
            <h2 class="section-title">${t.process.title}</h2>
            <p class="section-sub">${t.process.sub}</p>
            <div class="process-list">
                ${t.process.steps.map((s, i) => html`
                    <div class="process-step">
                        <div class="process-num">STEP ${PROCESS_NUMS[i]}</div>
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
            <p class="section-label">${t.faq.label}</p>
            <h2 class="section-title">${t.faq.title}</h2>
            <div class="faq-list">
                ${t.faq.items.map((f, i) => html`
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
            <h2>${t.finalCta.title}</h2>
            <p>${t.finalCta.sub}</p>
            <div class="final-ctas">
                <a class="btn" href="${INQUIRY_PHONE_TEL}">
                    📞 ${INQUIRY_PHONE}
                </a>
                <a class="btn-outline" href="${INQUIRY_MAILTO}">
                    ${t.finalCta.email}
                </a>
            </div>
            <p class="final-cta-note">
                💬 ${t.finalCta.kakaoLabel} <strong>${INQUIRY_KAKAO}</strong>
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
                <a href="#pricing">${t.footer.pricing}</a>
                <a href="#features">${t.footer.features}</a>
                <a href="#process">${t.footer.process}</a>
                <a href="#faq">${t.footer.faq}</a>
                <a href="${INQUIRY_PHONE_TEL}">📞 ${INQUIRY_PHONE}</a>
                <span class="footer-kakao">💬 ${t.footer.kakao} ${INQUIRY_KAKAO}</span>
                <a href="${INQUIRY_MAILTO}">📧 ${INQUIRY_EMAIL}</a>
                <a href="${PORTFOLIO_URL}" target="_blank" rel="noopener">manseungchoi.com ↗</a>
            </div>
            <div class="footer-note">
                © ${new Date().getFullYear()} Brendan Choi · ${t.footer.location}
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
