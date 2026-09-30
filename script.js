/* ======================================
   GROVIX PORTFOLIO - WINDOWS XP ENGINE
   Full interactive desktop environment
   ====================================== */

// ─── DATA ───────────────────────────────────────

const SERVICES = {
    'meta-ads': {
        title: 'Meta Ads',
        icon: '📘',
        folderIcon: '📁',
        description: 'We run high-performance Facebook & Instagram ad campaigns that generate leads, drive sales, and scale your brand. From audience targeting to creative strategy, we maximize every dollar of your ad spend on Meta platforms.',
        addressPath: 'C:\\Grovix\\Services\\Meta Ads',
        projects: [
            {
                name: 'LuxeStyle E-Commerce Scale',
                type: 'E-Commerce Campaign',
                desc: 'Scaled a fashion e-commerce brand from $5K to $120K/month in revenue using dynamic product ads, lookalike audiences, and retargeting funnels. Achieved 4.8x ROAS consistently.',
                tech: ['Facebook Ads', 'Instagram Ads', 'Dynamic Creatives', 'Pixel Tracking', 'Lookalike Audiences']
            },
            {
                name: 'FreshBite Lead Gen',
                type: 'Lead Generation',
                desc: 'Generated 15,000+ qualified leads for a food franchise at $3.20 CPL using Meta Lead Forms, video creatives, and geo-targeted campaigns across 8 cities.',
                tech: ['Lead Forms', 'Video Ads', 'Geo-Targeting', 'CRM Integration', 'A/B Testing']
            },
            {
                name: 'GlowUp App Install',
                type: 'App Install Campaign',
                desc: 'Drove 200K+ app installs in 90 days for a beauty app with a $0.85 cost per install. Used Advantage+ campaigns and creative testing to optimize performance.',
                tech: ['Advantage+', 'App Events', 'Creative Testing', 'SDK Integration', 'Reels Ads']
            },
            {
                name: 'PrimeRealty Brand Awareness',
                type: 'Brand Awareness',
                desc: 'Built brand recognition for a luxury real estate company, reaching 2M+ targeted users monthly with immersive carousel ads and story formats across Facebook & Instagram.',
                tech: ['Carousel Ads', 'Story Ads', 'Brand Lift Study', 'Custom Audiences', 'Reach & Frequency']
            }
        ],
        process: [
            { label: 'Audit', desc: 'Account & competitor analysis' },
            { label: 'Strategy', desc: 'Audience & funnel planning' },
            { label: 'Creative', desc: 'Ad design & copywriting' },
            { label: 'Launch', desc: 'Campaign setup & testing' },
            { label: 'Optimize', desc: 'Scaling & ROAS improvement' }
        ]
    },
    'google-ads': {
        title: 'Google Ads',
        icon: '🔍',
        folderIcon: '📁',
        description: 'We create data-driven Google Ads campaigns across Search, Display, YouTube, and Performance Max that capture high-intent traffic and convert clicks into customers. Our team manages millions in ad spend with proven ROI.',
        addressPath: 'C:\\Grovix\\Services\\Google Ads',
        projects: [
            {
                name: 'LegalPro Search Domination',
                type: 'Search Campaign',
                desc: 'Helped a law firm dominate local search results, generating 500+ qualified consultations per month at $28 CPA through precise keyword targeting and ad extensions.',
                tech: ['Search Ads', 'Keyword Research', 'Ad Extensions', 'Conversion Tracking', 'Smart Bidding']
            },
            {
                name: 'ShopWave Shopping Ads',
                type: 'Shopping Campaign',
                desc: 'Managed Google Shopping campaigns for a multi-brand retailer, achieving $2.1M in attributable revenue with a 620% ROAS through feed optimization and smart bidding strategies.',
                tech: ['Shopping Ads', 'Merchant Center', 'Feed Optimization', 'Performance Max', 'Audience Signals']
            },
            {
                name: 'EduSpark YouTube Funnel',
                type: 'YouTube Campaign',
                desc: 'Built a full-funnel YouTube ads strategy for an online education platform, driving 50K+ course enrollments with a blended CPA of $12 using skippable in-stream and discovery ads.',
                tech: ['YouTube Ads', 'Video Action Campaigns', 'Remarketing Lists', 'Custom Intent', 'TrueView']
            },
            {
                name: 'AutoDeal Performance Max',
                type: 'Performance Max',
                desc: 'Launched Performance Max campaigns for an auto dealership network across 12 locations, increasing showroom visits by 180% and online leads by 250% in 6 months.',
                tech: ['Performance Max', 'Asset Groups', 'Audience Signals', 'Store Visits', 'Offline Conversions']
            }
        ],
        process: [
            { label: 'Research', desc: 'Keywords & competitor intel' },
            { label: 'Structure', desc: 'Campaign architecture' },
            { label: 'Create', desc: 'Ads, extensions & assets' },
            { label: 'Monitor', desc: 'Bid management & QA' },
            { label: 'Scale', desc: 'Expand & maximize ROI' }
        ]
    },
    'social-media': {
        title: 'Social Media Management',
        icon: '📲',
        folderIcon: '📁',
        description: 'We manage your entire social media presence — from content strategy and creation to community engagement and analytics. We build brands that people follow, engage with, and talk about across all major platforms.',
        addressPath: 'C:\\Grovix\\Services\\Social Media Management',
        projects: [
            {
                name: 'BrewHouse Brand Build',
                type: 'Brand Social Presence',
                desc: 'Grew a craft coffee brand from 2K to 85K followers in 8 months with a cohesive content strategy, influencer collaborations, and viral Reels that generated 5M+ organic views.',
                tech: ['Instagram', 'TikTok', 'Content Calendar', 'Reels Strategy', 'Hashtag Research']
            },
            {
                name: 'TechNova Influencer Campaign',
                type: 'Influencer Marketing',
                desc: 'Orchestrated a 30-influencer campaign for a tech gadget launch, generating 12M+ impressions, 800K+ engagements, and selling out the first production run in 48 hours.',
                tech: ['Influencer Outreach', 'UGC', 'Campaign Tracking', 'Affiliate Links', 'Cross-Platform']
            },
            {
                name: 'FitZone Content Strategy',
                type: 'Content Strategy',
                desc: 'Developed and executed a 12-month content strategy for a fitness brand, increasing engagement rate from 1.2% to 6.8% and driving 40% of total website traffic from social.',
                tech: ['Content Pillars', 'Analytics', 'Social Listening', 'Scheduling Tools', 'Story Strategy']
            },
            {
                name: 'CityBites Community Management',
                type: 'Community Management',
                desc: 'Managed community engagement for a food delivery app across 5 platforms, maintaining a 15-minute average response time and increasing customer satisfaction score by 35%.',
                tech: ['Community Guidelines', 'Crisis Management', 'Sentiment Analysis', 'Chatbot Integration', 'Reporting']
            }
        ],
        process: [
            { label: 'Audit', desc: 'Profile & audience analysis' },
            { label: 'Strategy', desc: 'Content pillars & calendar' },
            { label: 'Create', desc: 'Design, copy & schedule' },
            { label: 'Engage', desc: 'Community & DM management' },
            { label: 'Report', desc: 'Analytics & optimization' }
        ]
    },
    'web-dev': {
        title: 'Web Development',
        icon: '🌐',
        folderIcon: '📁',
        description: 'We build stunning, high-performance websites and web applications that convert visitors into customers. From landing pages to full-scale platforms, our development team delivers pixel-perfect, blazing-fast digital experiences.',
        addressPath: 'C:\\Grovix\\Services\\Web Development',
        projects: [
            {
                name: 'NexaStore E-Commerce',
                type: 'E-Commerce Platform',
                desc: 'A full-featured e-commerce platform with real-time inventory management, AI-powered recommendations, and seamless checkout experience serving 50K+ daily users.',
                tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe']
            },
            {
                name: 'CloudBoard SaaS',
                type: 'SaaS Dashboard',
                desc: 'Enterprise analytics dashboard with real-time data visualization, team collaboration tools, and customizable widget system for Fortune 500 clients.',
                tech: ['Vue.js', 'GraphQL', 'MongoDB', 'D3.js', 'AWS']
            },
            {
                name: 'Meridian Corp Portal',
                type: 'Corporate Website',
                desc: 'Award-winning corporate website with immersive scroll animations, dynamic content management, and multi-language support across 12 regions.',
                tech: ['Next.js', 'Sanity CMS', 'Vercel', 'GSAP']
            },
            {
                name: 'HealthPulse Platform',
                type: 'Healthcare Web App',
                desc: 'HIPAA-compliant telehealth platform enabling virtual consultations, prescription management, and patient records for 200+ medical professionals.',
                tech: ['React', 'Express', 'PostgreSQL', 'WebRTC', 'Docker']
            }
        ],
        process: [
            { label: 'Discovery', desc: 'Requirements & research' },
            { label: 'Design', desc: 'UI/UX & prototyping' },
            { label: 'Develop', desc: 'Frontend & backend build' },
            { label: 'Test', desc: 'QA & performance testing' },
            { label: 'Launch', desc: 'Deployment & support' }
        ]
    }
};

const TEAM = [
    { name: 'Alex Rivera', role: 'CEO & Founder', initials: 'AR', bio: 'Visionary leader with 15+ years in tech. Previously at Google and Microsoft. Passionate about building products that make a difference.' },
    { name: 'Sarah Chen', role: 'CTO', initials: 'SC', bio: 'Architecture expert specializing in distributed systems. Led engineering at two unicorn startups. Open source contributor.' },
    { name: 'Marcus Johnson', role: 'Head of Design', initials: 'MJ', bio: 'Award-winning designer with a passion for accessibility. Former design lead at Figma. Believes great design is invisible.' },
    { name: 'Priya Patel', role: 'VP of Engineering', initials: 'PP', bio: 'Full-stack wizard who built her first app at 14. Leads our engineering team of 40+ developers across 3 continents.' },
    { name: 'David Kim', role: 'Head of AI/ML', initials: 'DK', bio: 'PhD in Machine Learning from MIT. Published 20+ papers on NLP and computer vision. Builds AI that works in the real world.' },
    { name: 'Emma Wilson', role: 'Head of Cloud', initials: 'EW', bio: 'AWS/GCP certified architect. Managed $50M+ cloud infrastructure. Obsessed with reliability and cost optimization.' },
    { name: 'James Taylor', role: 'Lead Mobile Dev', initials: 'JT', bio: 'Built apps with 10M+ total downloads. Expert in React Native and Flutter. Believes mobile-first is the future.' },
    { name: 'Lisa Zhang', role: 'UX Researcher', initials: 'LZ', bio: 'Human psychology meets technology. Conducted 500+ user interviews. Turns insights into delightful experiences.' }
];

const TESTIMONIALS = [
    { quote: 'Grovix transformed our entire digital presence. Their attention to detail and technical expertise is unmatched. The e-commerce platform they built increased our online revenue by 300% in the first year.', name: 'Michael Torres', role: 'CEO, NexaStore', initials: 'MT' },
    { quote: 'Working with the Grovix team felt like having an in-house team that truly cared about our success. The mobile app they delivered exceeded every expectation and our users absolutely love it.', name: 'Amanda Foster', role: 'Product Director, FitForge', initials: 'AF' },
    { quote: 'The cloud migration project was seamless. Grovix handled everything from planning to execution, and we saw immediate improvements in performance and cost savings of over 40%.', name: 'Robert Chang', role: 'CTO, ScaleOps', initials: 'RC' },
    { quote: 'Their AI recommendation engine completely changed our business. We saw engagement metrics jump by 35% within the first month. The team is incredibly knowledgeable and responsive.', name: 'Jennifer Lee', role: 'VP Product, ShopSmart', initials: 'JL' },
    { quote: 'The design system Grovix created has become the foundation of all our products. It saved us hundreds of development hours and brought consistency across our entire product suite.', name: 'Daniel Brooks', role: 'Design Director, Spectrum', initials: 'DB' }
];

const BLOG_POSTS = [
    { title: 'The Future of AI in Web Development', date: 'Sep 25, 2026', excerpt: 'How generative AI is revolutionizing the way we build and deploy web applications...', icon: '🤖' },
    { title: 'Building Scalable Microservices', date: 'Sep 18, 2026', excerpt: 'Best practices for designing and deploying microservices architecture at scale...', icon: '⚙️' },
    { title: 'UX Design Trends for 2027', date: 'Sep 10, 2026', excerpt: 'Exploring the cutting-edge design trends that will shape digital experiences next year...', icon: '🎨' },
    { title: 'Cloud Cost Optimization Guide', date: 'Sep 3, 2026', excerpt: 'Practical strategies to reduce your cloud spending without sacrificing performance...', icon: '☁️' },
    { title: 'React Native vs Flutter in 2026', date: 'Aug 28, 2026', excerpt: 'An honest comparison of the two leading cross-platform frameworks...', icon: '📱' },
    { title: 'Zero-Trust Security Architecture', date: 'Aug 20, 2026', excerpt: 'Implementing zero-trust security in modern cloud-native applications...', icon: '🔒' }
];

const JOBS = [
    { title: 'Senior Full-Stack Developer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'ML Engineer', dept: 'AI/ML', location: 'San Francisco, CA', type: 'Full-time' },
    { title: 'Senior UX Designer', dept: 'Design', location: 'New York, NY', type: 'Full-time' },
    { title: 'DevOps Engineer', dept: 'Cloud', location: 'Remote', type: 'Full-time' },
    { title: 'Mobile Developer (Flutter)', dept: 'Mobile', location: 'Remote', type: 'Contract' },
    { title: 'Product Manager', dept: 'Product', location: 'Austin, TX', type: 'Full-time' }
];

// ─── DESKTOP ICONS ───────────────────────────────

const DESKTOP_ICONS = [
    { id: 'my-computer', label: 'My Computer', icon: '🖥️', type: 'system' },
    { id: 'meta-ads', label: 'Meta\nAds', icon: '📘', type: 'service' },
    { id: 'google-ads', label: 'Google\nAds', icon: '🔍', type: 'service' },
    { id: 'social-media', label: 'Social Media\nManagement', icon: '📲', type: 'service' },
    { id: 'web-dev', label: 'Web\nDevelopment', icon: '🌐', type: 'service' },
    { id: 'portfolio', label: 'Portfolio', icon: '📂', type: 'system' },
    { id: 'recycle-bin', label: 'Recycle Bin', icon: '🗑️', type: 'system' }
];

// ─── STATE ───────────────────────────────────────

let windows = {};
let windowIdCounter = 0;
let topZIndex = 100;
let activeWindowId = null;
let startMenuOpen = false;
let selectedIcon = null;
let isDragging = false;
let dragData = {};

// ─── BOOT SEQUENCE ──────────────────────────────

function startBoot() {
    const bootScreen = document.getElementById('boot-screen');
    const welcomeScreen = document.getElementById('welcome-screen');
    const desktop = document.getElementById('desktop');

    // Boot screen for 3 seconds
    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        setTimeout(() => {
            bootScreen.style.display = 'none';
            // Show welcome screen
            welcomeScreen.style.display = 'flex';
            requestAnimationFrame(() => {
                welcomeScreen.classList.add('visible');
            });
        }, 800);
    }, 3000);

    // Click user to login
    document.getElementById('welcome-user-btn').addEventListener('click', () => {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            desktop.style.display = 'block';
            requestAnimationFrame(() => {
                desktop.classList.add('visible');
            });
            initDesktop();
        }, 600);
    });
}

// ─── DESKTOP INITIALIZATION ─────────────────────

function initDesktop() {
    createDesktopIcons();
    initClock();
    initStartMenu();
    initContextMenu();
    initTaskbarQuickLaunch();
    showToast('Welcome to Grovix', 'Double-click the folder icons to explore our services. Click Start for navigation.');
}

// ─── DESKTOP ICONS ──────────────────────────────

function createDesktopIcons() {
    const container = document.getElementById('desktop-icons');
    container.innerHTML = '';

    DESKTOP_ICONS.forEach(iconData => {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.setAttribute('data-id', iconData.id);
        icon.innerHTML = `
            <div class="icon-img">${iconData.icon}</div>
            <div class="icon-label">${iconData.label}</div>
        `;

        // Single click: select
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            selectIcon(icon);
        });

        // Double click: open
        icon.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            openWindowForIcon(iconData.id);
        });

        container.appendChild(icon);
    });

    // Click desktop to deselect
    document.getElementById('desktop').addEventListener('click', (e) => {
        if (e.target === document.getElementById('desktop') || e.target === document.getElementById('desktop-icons')) {
            deselectAllIcons();
            closeStartMenu();
        }
    });
}

function selectIcon(iconEl) {
    deselectAllIcons();
    iconEl.classList.add('selected');
    selectedIcon = iconEl;
}

function deselectAllIcons() {
    document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
    selectedIcon = null;
}

// ─── WINDOW MANAGEMENT ──────────────────────────

function openWindowForIcon(id) {
    // Check if window already exists
    const existingWin = Object.values(windows).find(w => w.sourceId === id);
    if (existingWin) {
        if (existingWin.minimized) {
            restoreWindow(existingWin.id);
        }
        bringToFront(existingWin.id);
        return;
    }

    if (SERVICES[id]) {
        openServiceWindow(id);
    } else {
        openSystemWindow(id);
    }
}

function openServiceWindow(serviceId) {
    const service = SERVICES[serviceId];
    const content = generateServiceContent(serviceId, service);
    
    createWindow({
        sourceId: serviceId,
        title: service.title,
        icon: service.icon,
        width: 820,
        height: 550,
        hasToolbar: true,
        hasAddressBar: true,
        addressPath: service.addressPath,
        hasSidebar: true,
        sidebarContent: generateServiceSidebar(service),
        content: content,
        statusText: `${service.projects.length} projects`
    });
}

function openSystemWindow(id) {
    const configs = {
        'my-computer': {
            title: 'My Computer',
            icon: '🖥️',
            width: 700,
            height: 500,
            hasToolbar: true,
            hasAddressBar: true,
            addressPath: 'My Computer',
            hasSidebar: true,
            sidebarContent: generateMyComputerSidebar(),
            content: generateMyComputerContent(),
            statusText: '5 objects'
        },
        'portfolio': {
            title: 'Grovix Portfolio',
            icon: '📂',
            width: 780,
            height: 520,
            content: generatePortfolioContent(),
            statusText: 'All projects'
        },
        'recycle-bin': {
            title: 'Recycle Bin',
            icon: '🗑️',
            width: 500,
            height: 350,
            hasToolbar: true,
            hasAddressBar: true,
            addressPath: 'Recycle Bin',
            content: '<div style="padding:40px;text-align:center;color:#888;font-size:12px;"><p style="font-size:40px;margin-bottom:16px;">🗑️</p><p>The Recycle Bin is empty.</p><p style="margin-top:8px;font-size:10px;">All our projects are too good to throw away! 😄</p></div>',
            statusText: '0 objects'
        },
        'about': {
            title: 'About Grovix',
            icon: 'ℹ️',
            width: 720,
            height: 560,
            content: generateAboutContent(),
            statusText: 'About Grovix Digital Solutions'
        },
        'team': {
            title: 'Our Team',
            icon: '👥',
            width: 750,
            height: 520,
            content: generateTeamContent(),
            statusText: `${TEAM.length} team members`
        },
        'contact': {
            title: 'Contact Us',
            icon: '📧',
            width: 650,
            height: 580,
            content: generateContactContent(),
            statusText: 'Get in touch'
        },
        'testimonials': {
            title: 'Testimonials',
            icon: '⭐',
            width: 680,
            height: 520,
            content: generateTestimonialsContent(),
            statusText: `${TESTIMONIALS.length} reviews`
        },
        'blog': {
            title: 'Grovix Blog',
            icon: '📝',
            width: 750,
            height: 520,
            content: generateBlogContent(),
            statusText: `${BLOG_POSTS.length} articles`
        },
        'careers': {
            title: 'Careers at Grovix',
            icon: '💼',
            width: 700,
            height: 520,
            content: generateCareersContent(),
            statusText: `${JOBS.length} open positions`
        },
        'services-overview': {
            title: 'Control Panel - Our Services',
            icon: '⚙️',
            width: 680,
            height: 480,
            content: generateServicesOverviewContent(),
            statusText: `${Object.keys(SERVICES).length} services`
        },
        'help': {
            title: 'Help & Support',
            icon: '❓',
            width: 600,
            height: 450,
            content: generateHelpContent(),
            statusText: 'Help Center'
        }
    };

    const config = configs[id];
    if (!config) return;

    createWindow({ sourceId: id, ...config });
}

function createWindow(opts) {
    const id = `win-${++windowIdCounter}`;
    const container = document.getElementById('windows-container');

    // Calculate position with offset
    const existingCount = Object.keys(windows).length;
    const offsetX = 80 + (existingCount % 6) * 30;
    const offsetY = 40 + (existingCount % 6) * 30;

    const winEl = document.createElement('div');
    winEl.className = 'xp-window opening';
    winEl.id = id;
    winEl.style.width = (opts.width || 600) + 'px';
    winEl.style.height = (opts.height || 400) + 'px';
    winEl.style.left = offsetX + 'px';
    winEl.style.top = offsetY + 'px';
    winEl.style.zIndex = ++topZIndex;

    let toolbarHTML = '';
    if (opts.hasToolbar) {
        toolbarHTML = `
            <div class="win-toolbar">
                <button class="win-toolbar-btn"><span class="tb-icon">◀</span> Back</button>
                <button class="win-toolbar-btn"><span class="tb-icon">▶</span></button>
                <button class="win-toolbar-btn"><span class="tb-icon">⬆</span> Up</button>
                <div style="flex:1"></div>
                <button class="win-toolbar-btn"><span class="tb-icon">🔍</span> Search</button>
                <button class="win-toolbar-btn"><span class="tb-icon">📁</span> Folders</button>
            </div>
        `;
    }

    let addressBarHTML = '';
    if (opts.hasAddressBar) {
        addressBarHTML = `
            <div class="win-addressbar">
                <label>Address</label>
                <input type="text" class="win-address-input" value="${opts.addressPath || ''}" readonly>
                <button class="win-address-go">Go</button>
            </div>
        `;
    }

    let sidebarHTML = '';
    if (opts.hasSidebar) {
        sidebarHTML = `<div class="win-sidebar">${opts.sidebarContent || ''}</div>`;
    }

    winEl.innerHTML = `
        <div class="win-titlebar" data-win-id="${id}">
            <div class="win-titlebar-icon">${opts.icon || '📄'}</div>
            <div class="win-titlebar-text">${opts.title || 'Window'}</div>
            <div class="win-controls">
                <button class="win-btn win-btn-minimize" data-action="minimize" data-win-id="${id}" title="Minimize"></button>
                <button class="win-btn win-btn-maximize" data-action="maximize" data-win-id="${id}" title="Maximize"></button>
                <button class="win-btn win-btn-close" data-action="close" data-win-id="${id}" title="Close"></button>
            </div>
        </div>
        ${toolbarHTML}
        ${addressBarHTML}
        <div class="win-body">
            ${sidebarHTML}
            <div class="win-content">${opts.content || ''}</div>
        </div>
        <div class="win-statusbar">
            <span class="status-left">${opts.statusText || 'Ready'}</span>
            <span class="status-right">Grovix Portfolio</span>
        </div>
        <div class="resize-handle" data-win-id="${id}"></div>
    `;

    container.appendChild(winEl);

    // Store window state
    windows[id] = {
        id,
        sourceId: opts.sourceId,
        title: opts.title,
        icon: opts.icon,
        minimized: false,
        maximized: false,
        el: winEl,
        prevState: null
    };

    // Event listeners
    setupWindowEvents(id, winEl);
    bringToFront(id);
    addTaskbarButton(id, opts.icon, opts.title);

    // Remove animation class
    setTimeout(() => winEl.classList.remove('opening'), 200);

    // Initialize sidebar toggles
    winEl.querySelectorAll('.sidebar-section').forEach(section => {
        section.querySelector('.sidebar-title')?.addEventListener('click', () => {
            section.classList.toggle('open');
        });
    });

    // Initialize service cards click
    winEl.querySelectorAll('.service-overview-card').forEach(card => {
        card.addEventListener('click', () => {
            const svcId = card.getAttribute('data-service');
            if (svcId) openWindowForIcon(svcId);
        });
    });

    return id;
}

function setupWindowEvents(id, winEl) {
    // Title bar drag
    const titlebar = winEl.querySelector('.win-titlebar');
    titlebar.addEventListener('mousedown', (e) => {
        if (e.target.closest('.win-controls')) return;
        bringToFront(id);
        
        const win = windows[id];
        if (win.maximized) return;

        isDragging = true;
        dragData = {
            type: 'window',
            id,
            startX: e.clientX,
            startY: e.clientY,
            origLeft: parseInt(winEl.style.left),
            origTop: parseInt(winEl.style.top)
        };
        e.preventDefault();
    });

    // Double click title bar to maximize
    titlebar.addEventListener('dblclick', (e) => {
        if (e.target.closest('.win-controls')) return;
        toggleMaximize(id);
    });

    // Window buttons
    winEl.querySelectorAll('.win-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.getAttribute('data-action');
            const winId = btn.getAttribute('data-win-id');
            if (action === 'close') closeWindow(winId);
            else if (action === 'minimize') minimizeWindow(winId);
            else if (action === 'maximize') toggleMaximize(winId);
        });
    });

    // Click to bring to front
    winEl.addEventListener('mousedown', () => bringToFront(id));

    // Resize handle
    const resizeHandle = winEl.querySelector('.resize-handle');
    resizeHandle.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        bringToFront(id);
        isDragging = true;
        dragData = {
            type: 'resize',
            id,
            startX: e.clientX,
            startY: e.clientY,
            origWidth: winEl.offsetWidth,
            origHeight: winEl.offsetHeight
        };
        e.preventDefault();
    });
}

function bringToFront(id) {
    const win = windows[id];
    if (!win) return;
    
    // Deactivate all
    Object.values(windows).forEach(w => w.el.classList.remove('active'));
    document.querySelectorAll('.tb-window-btn').forEach(btn => btn.classList.remove('active'));
    
    // Activate this one
    win.el.style.zIndex = ++topZIndex;
    win.el.classList.add('active');
    activeWindowId = id;
    
    // Update taskbar
    const tbBtn = document.querySelector(`.tb-window-btn[data-win-id="${id}"]`);
    if (tbBtn) tbBtn.classList.add('active');
}

function closeWindow(id) {
    const win = windows[id];
    if (!win) return;
    
    win.el.style.transform = 'scale(0.8)';
    win.el.style.opacity = '0';
    win.el.style.transition = 'all 0.15s ease-in';
    
    setTimeout(() => {
        win.el.remove();
        delete windows[id];
        removeTaskbarButton(id);
        if (activeWindowId === id) activeWindowId = null;
    }, 150);
}

function minimizeWindow(id) {
    const win = windows[id];
    if (!win) return;
    
    win.minimized = true;
    win.el.classList.add('minimized');
    
    const tbBtn = document.querySelector(`.tb-window-btn[data-win-id="${id}"]`);
    if (tbBtn) tbBtn.classList.remove('active');
    
    if (activeWindowId === id) activeWindowId = null;
}

function restoreWindow(id) {
    const win = windows[id];
    if (!win) return;
    
    win.minimized = false;
    win.el.classList.remove('minimized');
    bringToFront(id);
}

function toggleMaximize(id) {
    const win = windows[id];
    if (!win) return;
    
    if (win.maximized) {
        win.maximized = false;
        win.el.classList.remove('maximized');
        if (win.prevState) {
            win.el.style.left = win.prevState.left;
            win.el.style.top = win.prevState.top;
            win.el.style.width = win.prevState.width;
            win.el.style.height = win.prevState.height;
        }
    } else {
        win.prevState = {
            left: win.el.style.left,
            top: win.el.style.top,
            width: win.el.style.width,
            height: win.el.style.height
        };
        win.maximized = true;
        win.el.classList.add('maximized');
    }
}

// ─── TASKBAR ────────────────────────────────────

function addTaskbarButton(id, icon, title) {
    const container = document.getElementById('taskbar-windows');
    const btn = document.createElement('button');
    btn.className = 'tb-window-btn active';
    btn.setAttribute('data-win-id', id);
    btn.innerHTML = `<span class="tb-icon">${icon}</span><span class="tb-text">${title}</span>`;
    
    btn.addEventListener('click', () => {
        const win = windows[id];
        if (!win) return;
        
        if (win.minimized) {
            restoreWindow(id);
        } else if (activeWindowId === id) {
            minimizeWindow(id);
        } else {
            bringToFront(id);
        }
    });
    
    container.appendChild(btn);
}

function removeTaskbarButton(id) {
    const btn = document.querySelector(`.tb-window-btn[data-win-id="${id}"]`);
    if (btn) btn.remove();
}

// ─── CLOCK ──────────────────────────────────────

function initClock() {
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        document.getElementById('clock-time').textContent = timeStr;
        document.getElementById('clock-date').textContent = dateStr;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// ─── START MENU ─────────────────────────────────

function initStartMenu() {
    const startBtn = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    
    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStartMenu();
    });
    
    // Start menu items
    startMenu.querySelectorAll('.sm-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const windowId = item.getAttribute('data-window');
            const action = item.getAttribute('data-action');
            
            if (windowId) {
                openWindowForIcon(windowId);
            } else if (action === 'help') {
                openWindowForIcon('help');
            } else if (action === 'run') {
                showToast('Run', 'Visit grovix.com for our live website!');
            }
            
            closeStartMenu();
        });
    });
    
    // Shutdown button
    document.getElementById('btn-shutdown')?.addEventListener('click', () => {
        closeStartMenu();
        doShutdown();
    });
    
    // Log off button
    document.getElementById('btn-logoff')?.addEventListener('click', () => {
        closeStartMenu();
        showToast('Log Off', 'Thanks for visiting Grovix! Refresh to log in again.');
    });
}

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    const startBtn = document.getElementById('start-button');
    
    if (startMenuOpen) {
        closeStartMenu();
    } else {
        startMenu.classList.add('open');
        startMenu.style.display = 'block';
        startBtn.classList.add('active');
        startMenuOpen = true;
    }
}

function closeStartMenu() {
    const startMenu = document.getElementById('start-menu');
    const startBtn = document.getElementById('start-button');
    startMenu.classList.remove('open');
    startMenu.style.display = 'none';
    startBtn.classList.remove('active');
    startMenuOpen = false;
}

// ─── CONTEXT MENU ───────────────────────────────

function initContextMenu() {
    const ctxMenu = document.getElementById('context-menu');
    
    document.getElementById('desktop').addEventListener('contextmenu', (e) => {
        // Only show on desktop background, not on windows
        if (e.target.closest('.xp-window') || e.target.closest('#taskbar') || e.target.closest('#start-menu')) return;
        
        e.preventDefault();
        ctxMenu.style.display = 'block';
        ctxMenu.style.left = e.clientX + 'px';
        ctxMenu.style.top = e.clientY + 'px';
        
        // Ensure menu stays in viewport
        const rect = ctxMenu.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            ctxMenu.style.left = (e.clientX - rect.width) + 'px';
        }
        if (rect.bottom > window.innerHeight - 36) {
            ctxMenu.style.top = (e.clientY - rect.height) + 'px';
        }
    });
    
    // Close on click
    document.addEventListener('click', () => {
        ctxMenu.style.display = 'none';
    });
    
    // Context menu actions
    ctxMenu.querySelectorAll('.ctx-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            if (action === 'refresh') {
                showToast('Refreshing', 'Desktop refreshed!');
            } else if (action === 'properties') {
                openWindowForIcon('about');
            }
        });
    });
}

// ─── QUICK LAUNCH ───────────────────────────────

function initTaskbarQuickLaunch() {
    document.getElementById('ql-desktop')?.addEventListener('click', () => {
        // Minimize all windows
        Object.keys(windows).forEach(id => minimizeWindow(id));
    });
    
    document.getElementById('ql-ie')?.addEventListener('click', () => {
        showToast('Internet Explorer', 'Visit grovix.com for our full website experience!');
    });
    
    document.getElementById('ql-email')?.addEventListener('click', () => {
        openWindowForIcon('contact');
    });
}

// ─── MOUSE EVENTS (DRAG & RESIZE) ──────────────

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    if (dragData.type === 'window') {
        const dx = e.clientX - dragData.startX;
        const dy = e.clientY - dragData.startY;
        const win = windows[dragData.id];
        if (win) {
            win.el.style.left = (dragData.origLeft + dx) + 'px';
            win.el.style.top = (dragData.origTop + dy) + 'px';
        }
    } else if (dragData.type === 'resize') {
        const dx = e.clientX - dragData.startX;
        const dy = e.clientY - dragData.startY;
        const win = windows[dragData.id];
        if (win) {
            const newWidth = Math.max(400, dragData.origWidth + dx);
            const newHeight = Math.max(300, dragData.origHeight + dy);
            win.el.style.width = newWidth + 'px';
            win.el.style.height = newHeight + 'px';
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    dragData = {};
});

// ─── SHUTDOWN ───────────────────────────────────

function doShutdown() {
    const shutdownScreen = document.getElementById('shutdown-screen');
    shutdownScreen.style.display = 'flex';
    requestAnimationFrame(() => {
        shutdownScreen.classList.add('visible');
    });
    
    setTimeout(() => {
        document.body.style.background = '#000';
        document.getElementById('desktop').style.display = 'none';
        shutdownScreen.innerHTML = '<div class="shutdown-content"><div class="shutdown-text">It is now safe to turn off your computer.<br><br><span style="font-size:12px;opacity:0.6;">Refresh the page to restart!</span></div></div>';
    }, 3000);
}

// ─── TOAST NOTIFICATIONS ────────────────────────

function showToast(title, message) {
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.innerHTML = `
        <div class="toast-title">💬 ${title}</div>
        <div>${message}</div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ─── CONTENT GENERATORS ─────────────────────────

function generateServiceContent(serviceId, service) {
    let projectsHTML = service.projects.map(p => `
        <div class="project-card">
            <h3>${p.name}</h3>
            <span class="project-type">${p.type}</span>
            <p>${p.desc}</p>
            <div class="project-tech">
                ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');

    let processHTML = service.process.map((step, i) => {
        let arrow = i < service.process.length - 1 ? '<span class="process-arrow">→</span>' : '';
        return `
            <div class="process-step">
                <div class="step-number">${i + 1}</div>
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
            </div>
            ${arrow}
        `;
    }).join('');

    return `
        <h2 class="section-title">${service.icon} ${service.title}</h2>
        <p class="section-desc">${service.description}</p>
        <div class="folder-grid">${projectsHTML}</div>
        <div class="process-section">
            <h3>🔄 How We Work</h3>
            <div class="process-steps">${processHTML}</div>
        </div>
    `;
}

function generateServiceSidebar(service) {
    return `
        <div class="sidebar-section open">
            <div class="sidebar-title">Service Details</div>
            <div class="sidebar-content">
                ${service.description}
            </div>
        </div>
        <div class="sidebar-section open">
            <div class="sidebar-title">Quick Links</div>
            <div class="sidebar-content">
                <a class="sidebar-link" onclick="openWindowForIcon('contact')">📧 Request a Quote</a>
                <a class="sidebar-link" onclick="openWindowForIcon('portfolio')">📂 View Portfolio</a>
                <a class="sidebar-link" onclick="openWindowForIcon('testimonials')">⭐ Client Reviews</a>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-title">Other Services</div>
            <div class="sidebar-content">
                ${Object.entries(SERVICES).map(([id, s]) => 
                    `<a class="sidebar-link" onclick="openWindowForIcon('${id}')">${s.icon} ${s.title}</a>`
                ).join('')}
            </div>
        </div>
    `;
}

function generateMyComputerSidebar() {
    return `
        <div class="sidebar-section open">
            <div class="sidebar-title">System Tasks</div>
            <div class="sidebar-content">
                <a class="sidebar-link" onclick="openWindowForIcon('about')">View system information</a>
                <a class="sidebar-link" onclick="openWindowForIcon('services-overview')">Change a setting</a>
            </div>
        </div>
        <div class="sidebar-section open">
            <div class="sidebar-title">Other Places</div>
            <div class="sidebar-content">
                <a class="sidebar-link" onclick="openWindowForIcon('portfolio')">My Portfolio</a>
                <a class="sidebar-link" onclick="openWindowForIcon('contact')">Contact Us</a>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-title">Details</div>
            <div class="sidebar-content">
                <strong>Grovix Digital Solutions</strong><br>
                System: Grovix OS XP v3.0<br>
                Processor: Creativity Engine™<br>
                RAM: Unlimited Innovation
            </div>
        </div>
    `;
}

function generateMyComputerContent() {
    const drives = [
        { icon: '💿', label: 'Meta Ads (C:)', fill: 80 },
        { icon: '💿', label: 'Google Ads (D:)', fill: 75 },
        { icon: '💿', label: 'Social Media (E:)', fill: 70 },
        { icon: '💿', label: 'Web Development (F:)', fill: 85 }
    ];

    return `
        <h2 class="section-title">🖥️ My Computer</h2>
        <p class="section-desc">Explore Grovix's capabilities across all our service drives.</p>
        <div class="mc-drives">
            ${drives.map((d, i) => `
                <div class="mc-drive" onclick="openWindowForIcon('${Object.keys(SERVICES)[i]}')">
                    <span class="drive-icon">${d.icon}</span>
                    <span class="drive-label">${d.label}</span>
                    <div class="drive-bar"><div class="drive-fill" style="width:${d.fill}%"></div></div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateAboutContent() {
    return `
        <div class="about-content">
            <h2>About Grovix Digital Solutions</h2>
            <p>Founded in 2018, Grovix is a premier digital solutions company that partners with businesses worldwide to build exceptional technology products. We combine deep technical expertise with creative innovation to deliver solutions that drive real business impact.</p>
            <p>Our team of 50+ engineers, designers, and strategists has helped over 200 companies — from ambitious startups to Fortune 500 enterprises — transform their digital presence and achieve their goals.</p>
            
            <div class="about-stats">
                <div class="stat-card">
                    <div class="stat-number">200+</div>
                    <div class="stat-label">Projects Delivered</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Team Members</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Countries Served</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
            </div>

            <h2>Our Values</h2>
            <div class="about-values">
                <div class="value-card">
                    <div class="value-icon">🎯</div>
                    <h4>Excellence First</h4>
                    <p>We don't just meet expectations — we exceed them. Every line of code, every pixel, every interaction is crafted with care.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">🤝</div>
                    <h4>True Partnership</h4>
                    <p>We're not just vendors. We're partners invested in your success, working alongside you every step of the way.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">🚀</div>
                    <h4>Innovation Driven</h4>
                    <p>We stay at the forefront of technology, bringing cutting-edge solutions to everyday business challenges.</p>
                </div>
            </div>
        </div>
    `;
}

function generateTeamContent() {
    return `
        <h2 class="section-title">👥 Meet Our Team</h2>
        <p class="section-desc">The talented people behind Grovix who make the magic happen.</p>
        <div class="team-grid">
            ${TEAM.map(member => `
                <div class="team-card">
                    <div class="team-avatar">${member.initials}</div>
                    <h4>${member.name}</h4>
                    <div class="team-role">${member.role}</div>
                    <div class="team-bio">${member.bio}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateContactContent() {
    return `
        <div class="contact-form">
            <h2>📧 Get In Touch</h2>
            <p class="contact-subtitle">Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <div class="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" id="contact-name">
            </div>
            <div class="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" id="contact-email">
            </div>
            <div class="form-group">
                <label>Service Interested In</label>
                <select id="contact-service">
                    <option value="">Select a service...</option>
                    ${Object.values(SERVICES).map(s => `<option value="${s.title}">${s.icon} ${s.title}</option>`).join('')}
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label>Project Budget</label>
                <select id="contact-budget">
                    <option value="">Select budget range...</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                </select>
            </div>
            <div class="form-group">
                <label>Message *</label>
                <textarea placeholder="Tell us about your project..." id="contact-message" rows="4"></textarea>
            </div>
            <button class="xp-button primary" onclick="handleContactSubmit()">Send Message</button>
            <button class="xp-button" style="margin-left:8px;" onclick="showToast('Cleared', 'Form has been reset.')">Clear Form</button>
            
            <div class="contact-info-grid">
                <div class="contact-info-card">
                    <span class="contact-info-icon">📧</span>
                    <div class="contact-info-text">
                        <h4>Email</h4>
                        <p>hello@grovix.com</p>
                    </div>
                </div>
                <div class="contact-info-card">
                    <span class="contact-info-icon">📞</span>
                    <div class="contact-info-text">
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div class="contact-info-card">
                    <span class="contact-info-icon">📍</span>
                    <div class="contact-info-text">
                        <h4>Office</h4>
                        <p>San Francisco, CA</p>
                    </div>
                </div>
                <div class="contact-info-card">
                    <span class="contact-info-icon">🌐</span>
                    <div class="contact-info-text">
                        <h4>Website</h4>
                        <p>www.grovix.com</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleContactSubmit() {
    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const message = document.getElementById('contact-message')?.value;

    if (!name || !email || !message) {
        showToast('Missing Fields', 'Please fill in all required fields (Name, Email, Message).');
        return;
    }

    showToast('Message Sent! ✅', `Thank you ${name}! We'll get back to you at ${email} within 24 hours.`);
}

function generateTestimonialsContent() {
    return `
        <h2 class="section-title">⭐ What Our Clients Say</h2>
        <p class="section-desc">Don't just take our word for it. Here's what our clients have to say about working with Grovix.</p>
        <div class="testimonials-list">
            ${TESTIMONIALS.map(t => `
                <div class="testimonial-card">
                    <div class="testimonial-quote">${t.quote}</div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${t.initials}</div>
                        <div>
                            <div class="testimonial-name">${t.name}</div>
                            <div class="testimonial-role">${t.role}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateBlogContent() {
    return `
        <h2 class="section-title">📝 Grovix Blog</h2>
        <p class="section-desc">Insights, tutorials, and perspectives from our team on the latest in technology.</p>
        <div class="blog-grid">
            ${BLOG_POSTS.map(post => `
                <div class="blog-card" onclick="showToast('${post.title}', 'Full article coming soon on grovix.com!')">
                    <div class="blog-thumb">${post.icon}</div>
                    <div class="blog-body">
                        <div class="blog-date">${post.date}</div>
                        <h4>${post.title}</h4>
                        <p>${post.excerpt}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateCareersContent() {
    return `
        <div class="careers-content">
            <h2>💼 Join the Grovix Team</h2>
            <p class="careers-intro">We're always looking for talented individuals who are passionate about building great technology. At Grovix, you'll work on challenging projects, collaborate with brilliant people, and grow your career in a supportive environment.</p>
            
            <h3 class="section-title" style="font-size:14px;">Open Positions</h3>
            ${JOBS.map(job => `
                <div class="job-card" onclick="showToast('Apply for ${job.title}', 'Send your resume to careers@grovix.com with the position title as subject.')">
                    <div class="job-info">
                        <h4>${job.title}</h4>
                        <div class="job-meta">
                            <span class="job-tag">🏢 ${job.dept}</span>
                            <span class="job-tag">📍 ${job.location}</span>
                            <span class="job-tag">⏰ ${job.type}</span>
                        </div>
                    </div>
                    <button class="xp-button" onclick="event.stopPropagation(); showToast('Apply', 'Send your resume to careers@grovix.com!')">Apply</button>
                </div>
            `).join('')}
        </div>
    `;
}

function generatePortfolioContent() {
    let allProjects = [];
    Object.entries(SERVICES).forEach(([id, service]) => {
        service.projects.forEach(p => {
            allProjects.push({ ...p, serviceId: id, serviceIcon: service.icon, serviceName: service.title });
        });
    });

    return `
        <h2 class="section-title">📂 Complete Portfolio</h2>
        <p class="section-desc">A comprehensive look at all our projects across every service area.</p>
        <div class="folder-grid">
            ${allProjects.map(p => `
                <div class="project-card" onclick="openWindowForIcon('${p.serviceId}')">
                    <h3>${p.name}</h3>
                    <span class="project-type">${p.serviceIcon} ${p.serviceName} — ${p.type}</span>
                    <p>${p.desc}</p>
                    <div class="project-tech">
                        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateServicesOverviewContent() {
    return `
        <h2 class="section-title">⚙️ Our Services</h2>
        <p class="section-desc">Click on a service to explore our projects and capabilities in that area.</p>
        <div class="services-grid">
            ${Object.entries(SERVICES).map(([id, service]) => `
                <div class="service-overview-card" data-service="${id}">
                    <div class="service-overview-icon">${service.icon}</div>
                    <h4>${service.title}</h4>
                    <p>${service.projects.length} projects</p>
                </div>
            `).join('')}
        </div>
    `;
}

function generateHelpContent() {
    return `
        <div class="help-content">
            <h2>❓ Help & Support Center</h2>
            <div class="help-section">
                <h3>🖥️ Navigating the Desktop</h3>
                <ul>
                    <li><strong>Double-click</strong> folder icons to open service windows</li>
                    <li><strong>Right-click</strong> the desktop for context menu options</li>
                    <li><strong>Drag</strong> window title bars to move windows around</li>
                    <li><strong>Resize</strong> windows using the bottom-right corner handle</li>
                </ul>
            </div>
            <div class="help-section">
                <h3>📋 Start Menu</h3>
                <ul>
                    <li>Click the green <strong>Start</strong> button on the taskbar</li>
                    <li>Access <strong>About</strong>, <strong>Contact</strong>, <strong>Team</strong>, and more</li>
                    <li>Use <strong>Control Panel</strong> for a services overview</li>
                </ul>
            </div>
            <div class="help-section">
                <h3>📁 Service Folders</h3>
                <ul>
                    <li>Each folder represents a <strong>service area</strong> we offer</li>
                    <li>Inside you'll find our <strong>projects</strong> and <strong>process</strong></li>
                    <li>Use the left panel for <strong>quick navigation</strong></li>
                </ul>
            </div>
            <div class="help-section">
                <h3>📞 Need More Help?</h3>
                <p>Contact us at <strong>hello@grovix.com</strong> or call <strong>+1 (555) 123-4567</strong>.</p>
                <p style="margin-top:8px;">
                    <button class="xp-button primary" onclick="openWindowForIcon('contact')">Contact Us</button>
                </p>
            </div>
        </div>
    `;
}

// ─── KEYBOARD SHORTCUTS ─────────────────────────

document.addEventListener('keydown', (e) => {
    // Escape closes start menu
    if (e.key === 'Escape') {
        closeStartMenu();
        const ctxMenu = document.getElementById('context-menu');
        if (ctxMenu) ctxMenu.style.display = 'none';
    }
});

// ─── INIT ───────────────────────────────────────

document.addEventListener('DOMContentLoaded', startBoot);
