// Simple path-based i18n. Korean is the default (no prefix); English lives at /en.

export const SUPPORTED_LANGS = ['ko', 'en'];
export const DEFAULT_LANG = 'ko';

export const getLang = () => {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    return seg === 'en' ? 'en' : DEFAULT_LANG;
};

// Returns the URL for the given language, preserving any hash anchor.
export const langPath = (lang) => {
    const hash = window.location.hash || '';
    return (lang === 'en' ? '/en' : '/') + hash;
};

export const translations = {
    ko: {
        meta: {
            htmlLang: 'ko',
            title: '뉴질랜드 한인 비즈니스 웹사이트 제작 | NZD 200부터',
            description:
                '뉴질랜드 한인 소상공인을 위한 합리적인 가격의 웹사이트 제작 서비스. 원페이지 웹사이트 NZD 200부터, 비즈니스 웹사이트 NZD 800~1000부터. 모바일 최적화, 문의폼, 카카오톡·전화 연결 가능.',
        },
        langToggle: { ko: '한국어', en: 'EN', aria: '언어 선택' },
        nav: { cta: '문의하기' },
        hero: {
            prompt: '~/new-zealand $ start_business_website',
            titleA: '뉴질랜드 한인 비즈니스를 위한',
            titleB: '합리적인 웹사이트 제작',
            subA: '식당, 카페, 미용실, 학원, 트레이드 비즈니스까지.',
            subB: '심플하고 전문적인 웹사이트를 부담 없는 가격으로 만들어 드립니다.',
            priceLabel1: '원페이지',
            priceLabel2: '비즈니스',
            email: '📧 이메일',
            portfolio: '포트폴리오 ↗',
            note: '도메인 및 호스팅/서버 비용은 별도입니다',
            kakaoLabel: '카카오톡 ID:',
        },
        audience: {
            label: '// Who this is for',
            title: '이런 비즈니스에 잘 맞습니다',
            sub: '뉴질랜드에서 로컬 고객을 만나는 모든 한인 소상공인을 환영합니다. 아래에 없는 업종이어도 편하게 문의해 주세요.',
            items: ['식당', '카페', '미용실', '네일샵', '학원·과외', '청소', '플러밍·전기', '페인팅'],
        },
        pricing: {
            label: '// Pricing',
            title: '투명한 가격',
            sub: '필요한 만큼만 선택하세요. 복잡한 기능이 많아질수록 가격은 올라가지만, 처음엔 가장 간단하게 시작해도 괜찮습니다.',
            suffix: '부터',
            cta: '문의하기 →',
            note: {
                label: '참고:',
                text: ' 도메인 구매와 호스팅/서버 비용은 기본 가격에 포함되지 않으며, 고객이 직접 부담하십니다. 추천·설정은 도와드립니다.',
            },
            cards: [
                {
                    name: '원페이지 웹사이트',
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
                    name: '비즈니스 · 커스텀 웹사이트',
                    badge: '추천',
                    features: [
                        '여러 페이지 구성 (메뉴 · 갤러리 · 소개 등)',
                        '고급 문의폼 / 예약 기능 (선택)',
                        '블로그 · 뉴스 · 공지사항 섹션',
                        '관리자 페이지 · 콘텐츠 수정 도구',
                        '요구사항에 맞는 커스텀 개발',
                    ],
                },
            ],
        },
        features: {
            label: '// Included',
            title: '기본으로 포함되는 기능',
            sub: '작은 비즈니스에 꼭 필요한 기능만 담았습니다. 불필요한 기능으로 가격을 올리지 않습니다.',
            items: [
                { title: '모바일 최적화', desc: '휴대폰, 태블릿, 데스크탑 어느 기기에서나 깔끔하게 보이도록 제작합니다.' },
                { title: '문의 폼', desc: '고객이 바로 문의할 수 있는 폼을 추가하여 이메일로 받아보세요.' },
                { title: '카톡·전화 연결', desc: '카카오톡 오픈채팅, 전화, 인스타그램 등 원하는 채널과 바로 연결됩니다.' },
                { title: '위치 · 지도 · 영업시간', desc: '고객이 필요한 정보를 한 곳에서 찾을 수 있도록 정리해 드립니다.' },
                { title: '메뉴 · 가격표', desc: '식당 메뉴, 서비스 가격, 코스 안내 등 원하는 정보를 깔끔하게 정리합니다.' },
                { title: '빠른 로딩', desc: '가벼운 구조로 제작해 느린 인터넷에서도 빠르게 열립니다.' },
            ],
        },
        why: {
            label: '// About the developer',
            title: '왜 저에게 맡기시나요?',
            p1A: '안녕하세요, ',
            p1Name: '최만승 (Brendan)',
            p1B: '입니다. 현재 뉴질랜드의 스타트업에서 Technical Lead로 일하며, 실제 비즈니스에 쓰이는 웹사이트와 AI 서비스를 만들고 있습니다.',
            p2: '기술적인 부분은 제가 다 챙기니 어려운 용어를 모르셔도 괜찮습니다. 필요한 기능을 편하게 한국어로 말씀만 해주시면 됩니다.',
            p3A: '더 자세한 경력과 프로젝트가 궁금하시다면 ',
            p3B: ' 에서 확인하실 수 있습니다.',
            card: {
                whoami: 'brendan // startup technical lead',
                location: 'new zealand 🇳🇿',
                speaks: '한국어 · english',
                focus: 'small business · local stores',
            },
        },
        process: {
            label: '// Process',
            title: '간단한 5단계 진행',
            sub: '복잡한 절차 없이 편하게 진행합니다. 기술 용어를 모르셔도 괜찮습니다.',
            steps: [
                { name: '상담', desc: '원하는 스타일과 필요한 기능을 편하게 이야기 나눕니다.' },
                { name: '요구사항 정리', desc: '비즈니스에 꼭 맞는 구성을 함께 정리합니다.' },
                { name: '제작', desc: '디자인부터 개발까지 책임지고 만들어 드립니다.' },
                { name: '수정', desc: '원하시는 부분을 확인하고 반영해 드립니다.' },
                { name: '배포', desc: '완성된 웹사이트를 실제로 볼 수 있도록 배포합니다.' },
            ],
        },
        faq: {
            label: '// FAQ',
            title: '자주 묻는 질문',
            items: [
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
            ],
        },
        finalCta: {
            title: '비즈니스 웹사이트, 지금 시작해볼까요?',
            sub: '아직 뭘 원하는지 정확히 모르셔도 괜찮습니다. 편하게 연락 주시면 함께 정리해 드립니다.',
            email: '📧 이메일 문의',
            kakaoLabel: '카카오톡 ID:',
        },
        footer: {
            pricing: '가격',
            features: '기능',
            process: '진행 과정',
            faq: 'FAQ',
            kakao: '카카오톡',
            location: 'Auckland, New Zealand',
        },
    },

    en: {
        meta: {
            htmlLang: 'en',
            title: 'Business Websites for Korean Businesses in New Zealand | From NZD 200',
            description:
                'Affordable website design for Korean small businesses in New Zealand. One-page websites from NZD 200, business websites from NZD 800–1000. Mobile-optimised, inquiry forms, KakaoTalk and phone connect.',
        },
        langToggle: { ko: '한국어', en: 'EN', aria: 'Select language' },
        nav: { cta: 'Get in touch' },
        hero: {
            prompt: '~/new-zealand $ start_business_website',
            titleA: 'For Korean businesses in New Zealand',
            titleB: 'Affordable website design',
            subA: 'Restaurants, cafés, salons, academies, trade businesses and more.',
            subB: 'Simple, professional websites built at a price you can afford.',
            priceLabel1: 'One-page',
            priceLabel2: 'Business',
            email: '📧 Email',
            portfolio: 'Portfolio ↗',
            note: 'Domain and hosting/server costs are billed separately',
            kakaoLabel: 'KakaoTalk ID:',
        },
        audience: {
            label: '// Who this is for',
            title: 'A great fit for businesses like these',
            sub: 'Welcome to every Korean small business serving local customers in New Zealand. Not on the list below? Feel free to reach out anyway.',
            items: ['Restaurants', 'Cafés', 'Hair salons', 'Nail salons', 'Academies & tutoring', 'Cleaning', 'Plumbing & electrical', 'Painting'],
        },
        pricing: {
            label: '// Pricing',
            title: 'Transparent pricing',
            sub: 'Pick only what you need. More complex features cost more, but it is perfectly fine to start with the simplest option.',
            suffix: 'from',
            cta: 'Get in touch →',
            note: {
                label: 'Note:',
                text: ' Domain purchase and hosting/server costs are not included in the base price and are paid by the client. We will help with recommendations and setup.',
            },
            cards: [
                {
                    name: 'One-page website',
                    badge: null,
                    features: [
                        'Mobile-optimised responsive design',
                        'Business intro · services · location info',
                        'Direct phone / KakaoTalk / Instagram links',
                        'Simple inquiry form (optional)',
                        'Opening hours · map display',
                    ],
                },
                {
                    name: 'Business · custom website',
                    badge: 'Recommended',
                    features: [
                        'Multiple pages (menu · gallery · about, etc.)',
                        'Advanced inquiry form / booking (optional)',
                        'Blog · news · announcements section',
                        'Admin page · content editing tools',
                        'Custom development to fit your needs',
                    ],
                },
            ],
        },
        features: {
            label: '// Included',
            title: 'Included as standard',
            sub: 'Only the features a small business actually needs. We do not inflate the price with features you will never use.',
            items: [
                { title: 'Mobile optimised', desc: 'Built to look clean on phones, tablets, and desktops alike.' },
                { title: 'Inquiry form', desc: 'Add a form so customers can reach you instantly — delivered straight to your email.' },
                { title: 'KakaoTalk & phone connect', desc: 'Connect directly to KakaoTalk open chat, phone, Instagram, and any channel you want.' },
                { title: 'Location · map · hours', desc: 'We organise the info customers need so they can find it all in one place.' },
                { title: 'Menu · price list', desc: 'Restaurant menus, service prices, course details — laid out cleanly.' },
                { title: 'Fast loading', desc: 'Built lightweight so it opens fast even on slow connections.' },
            ],
        },
        why: {
            label: '// About the developer',
            title: 'Why work with me?',
            p1A: "Hi, I'm ",
            p1Name: 'Manseung Choi (Brendan)',
            p1B: '. I currently work as a Technical Lead at a startup in New Zealand, building real-world business websites and AI services.',
            p2: 'I handle all the technical parts, so you do not need to know any jargon. Just tell me what you need — in Korean or English — and I will take care of it.',
            p3A: 'If you would like to see more of my background and projects, you can find them at ',
            p3B: '.',
            card: {
                whoami: 'brendan // startup technical lead',
                location: 'new zealand 🇳🇿',
                speaks: '한국어 · english',
                focus: 'small business · local stores',
            },
        },
        process: {
            label: '// Process',
            title: 'A simple 5-step process',
            sub: 'No complicated procedures — just an easy process. You do not need to know any technical terms.',
            steps: [
                { name: 'Consultation', desc: 'We chat through the style you want and the features you need.' },
                { name: 'Define requirements', desc: 'Together we shape a setup that fits your business.' },
                { name: 'Build', desc: 'I take care of everything from design to development.' },
                { name: 'Revisions', desc: 'You review, and I refine the parts you want changed.' },
                { name: 'Launch', desc: 'I deploy the finished website so you can see it live.' },
            ],
        },
        faq: {
            label: '// FAQ',
            title: 'Frequently asked questions',
            items: [
                {
                    q: 'How long does it take to build?',
                    a: 'A one-page website usually takes 3–7 days, and a business website around 2–3 weeks. It can vary with requirements and features, and I will give you a concrete timeline during the consultation.',
                },
                {
                    q: 'Are domain and hosting separate?',
                    a: 'Yes — domain purchase and hosting/server costs are separate and paid directly by the client. I will guide you on recommended services and setup, and can purchase and configure them on your behalf if you like.',
                },
                {
                    q: 'Can I make changes or updates later?',
                    a: 'Yes. The scope of revisions after the initial build is explained during the consultation, and later small updates like menu or price changes can be done for a separate fee.',
                },
                {
                    q: 'Does it look good on mobile?',
                    a: 'Every website is mobile-optimised by default. Since most Korean customers in New Zealand search on their phones, I make sure it looks its best on mobile.',
                },
                {
                    q: 'What kinds of businesses can you build for?',
                    a: 'Restaurants, cafés, salons, nail shops, academies, and trade businesses like cleaning, plumbing, and painting — any Korean small business in New Zealand is welcome. If you are not sure, feel free to just reach out.',
                },
                {
                    q: 'Do you support both English and Korean?',
                    a: 'Yes — if you need it, I can build in both English and Korean, set up to appeal to both local New Zealand customers and Korean customers.',
                },
            ],
        },
        finalCta: {
            title: 'Ready to start your business website?',
            sub: 'It is fine if you do not know exactly what you want yet. Just reach out and we will figure it out together.',
            email: '📧 Email inquiry',
            kakaoLabel: 'KakaoTalk ID:',
        },
        footer: {
            pricing: 'Pricing',
            features: 'Features',
            process: 'Process',
            faq: 'FAQ',
            kakao: 'KakaoTalk',
            location: 'Auckland, New Zealand',
        },
    },
};
