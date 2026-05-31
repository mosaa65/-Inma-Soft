// ============================================================
// DATA: All services for Inma Soft website
// 100+ services organized in 12 categories
// ============================================================

export type ServiceTier = "quick" | "medium" | "strong" | "enterprise";

export interface Service {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  category: string;
  priceMin: number;
  priceMax: number;
  pricePlus?: boolean;
  tier: ServiceTier;
  tags: string[];
  icon: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  color: string;
  gradient: string;
}

// ============================================================
// CATEGORIES
// ============================================================
export const categories: ServiceCategory[] = [
  {
    id: "websites",
    slug: "websites",
    nameAr: "مواقع الويب",
    nameEn: "Websites",
    descAr: "مواقع تعريفية، شخصية، مدونات، وكتالوجات",
    descEn: "Corporate, personal, blogs, and catalog websites",
    icon: "Globe",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    nameAr: "التجارة الإلكترونية",
    nameEn: "E-Commerce",
    descAr: "متاجر إلكترونية متكاملة لكل الأحجام",
    descEn: "Full-featured online stores for all business sizes",
    icon: "ShoppingCart",
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "education",
    slug: "education",
    nameAr: "أنظمة التعليم",
    nameEn: "Education Systems",
    descAr: "أنظمة إدارة مدارس، جامعات، معاهد، ومنصات تعليمية",
    descEn: "School, university, institute management and LMS platforms",
    icon: "GraduationCap",
    color: "text-teal-400",
    gradient: "from-teal-500/20 to-emerald-500/20",
  },
  {
    id: "medical",
    slug: "medical",
    nameAr: "القطاع الطبي",
    nameEn: "Medical & Healthcare",
    descAr: "أنظمة إدارة مستشفيات، عيادات، مختبرات، وملفات طبية",
    descEn: "Hospital, clinic, lab management and electronic health records",
    icon: "HeartPulse",
    color: "text-red-400",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    id: "realestate",
    slug: "realestate",
    nameAr: "العقارات",
    nameEn: "Real Estate",
    descAr: "منصات عقارية، إدارة أملاك، إيجارات، ووسطاء",
    descEn: "Real estate platforms, property management, rentals, and brokers",
    icon: "Building2",
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "logistics",
    slug: "logistics",
    nameAr: "النقل والشحن",
    nameEn: "Logistics & Transportation",
    descAr: "أنظمة شحن، تتبع، إدارة أسطول، وتوصيل طلبات",
    descEn: "Shipping systems, tracking, fleet management, and delivery",
    icon: "Truck",
    color: "text-blue-500",
    gradient: "from-blue-600/20 to-indigo-500/20",
  },
  {
    id: "hospitality",
    slug: "hospitality",
    nameAr: "المطاعم والكافيهات",
    nameEn: "Restaurants & Hospitality",
    descAr: "أنظمة مطاعم، مقاهي، طلبات أونلاين، وQR Menu",
    descEn: "Restaurant, cafe, online ordering, and QR menu systems",
    icon: "UtensilsCrossed",
    color: "text-rose-400",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    id: "hr",
    slug: "hr",
    nameAr: "الموارد البشرية",
    nameEn: "Human Resources",
    descAr: "أنظمة HR، توظيف، رواتب، حضور، وتقييم أداء",
    descEn: "HR systems, recruitment, payroll, attendance, and performance",
    icon: "Users",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: "accounting",
    slug: "accounting",
    nameAr: "المحاسبة والمالية",
    nameEn: "Accounting & Finance",
    descAr: "أنظمة محاسبية، فواتير، ضرائب، وإدارة مالية",
    descEn: "Accounting systems, invoicing, tax management, and finance",
    icon: "Calculator",
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "systems",
    slug: "systems",
    nameAr: "الأنظمة المتخصصة",
    nameEn: "Specialized Systems",
    descAr: "ERP, CRM, أنظمة إدارة لكل قطاع",
    descEn: "ERP, CRM, and management systems for every sector",
    icon: "Server",
    color: "text-violet-400",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "ai",
    slug: "ai",
    nameAr: "الذكاء الاصطناعي",
    nameEn: "Artificial Intelligence",
    descAr: "دمج الذكاء الاصطناعي، وكلاء ذكيين، Chatbots، وRAG",
    descEn: "AI integration, intelligent agents, chatbots, and RAG systems",
    icon: "Brain",
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "analytics",
    slug: "analytics",
    nameEn: "Data & Analytics",
    nameAr: "البيانات والتحليلات",
    descAr: "مستودعات بيانات، BI, Dashboards, وPower BI",
    descEn: "Data warehouses, BI, dashboards, and Power BI integration",
    icon: "BarChart3",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "search",
    slug: "search",
    nameAr: "البحث والفهرسة",
    nameEn: "Search & Indexing",
    descAr: "Elasticsearch, بحث دلالي, RAG, وVector Database",
    descEn: "Elasticsearch, semantic search, RAG, and vector databases",
    icon: "Search",
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: "databases",
    slug: "databases",
    nameAr: "قواعد البيانات",
    nameEn: "Databases",
    descAr: "تصميم، تحسين، وإدارة قواعد البيانات",
    descEn: "Database design, optimization, and management",
    icon: "Database",
    color: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "security",
    slug: "security",
    nameAr: "الأمن السيبراني",
    nameEn: "Cybersecurity",
    descAr: "حماية وتأمين المواقع والأنظمة",
    descEn: "Website and system security hardening",
    icon: "Shield",
    color: "text-red-400",
    gradient: "from-red-500/20 to-rose-500/20",
  },
  {
    id: "devops",
    slug: "devops",
    nameAr: "DevOps والاستضافة",
    nameEn: "DevOps & Hosting",
    descAr: "إعداد الخوادم، CI/CD، والبنية التحتية",
    descEn: "Server setup, CI/CD pipelines, and infrastructure",
    icon: "Cloud",
    color: "text-sky-400",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
  {
    id: "api",
    slug: "api",
    nameAr: "التكامل والـ API",
    nameEn: "Integration & APIs",
    descAr: "ربط الأنظمة وبناء واجهات برمجية",
    descEn: "System integrations and custom API development",
    icon: "Plug",
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: "saas",
    slug: "saas",
    nameAr: "منصات SaaS",
    nameEn: "SaaS Platforms",
    descAr: "بناء منصات كاملة كخدمة سحابية",
    descEn: "Full SaaS platforms with subscriptions and multi-tenancy",
    icon: "Layers",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "mobile",
    slug: "mobile",
    nameAr: "تطبيقات الجوال",
    nameEn: "Mobile Apps",
    descAr: "تطبيقات iOS وAndroid باستخدام Flutter",
    descEn: "iOS and Android apps using Flutter",
    icon: "Smartphone",
    color: "text-lime-400",
    gradient: "from-lime-500/20 to-green-500/20",
  },
  {
    id: "automation",
    slug: "automation",
    nameAr: "الأتمتة",
    nameEn: "Automation",
    descAr: "أتمتة الأعمال والمهام المتكررة",
    descEn: "Business process and task automation",
    icon: "Zap",
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "platforms",
    slug: "platforms",
    nameAr: "المنصات المتقدمة",
    nameEn: "Advanced Platforms",
    descAr: "منصات تعليمية، إعلانية، وإجتماعية",
    descEn: "Educational, marketplace, and social platforms",
    icon: "LayoutDashboard",
    color: "text-fuchsia-400",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    id: "performance",
    slug: "performance",
    nameAr: "الأداء العالي",
    nameEn: "High Performance",
    descAr: "تحسين الأداء، Caching, Redis, وLoad Balancing",
    descEn: "Performance optimization, caching, Redis, and load balancing",
    icon: "Zap",
    color: "text-yellow-500",
    gradient: "from-yellow-600/20 to-orange-500/20",
  },
  {
    id: "consulting",
    slug: "consulting",
    nameAr: "الاستشارات والتحليل",
    nameEn: "Consulting & Analysis",
    descAr: "تحليل الأنظمة، كتابة SRS, BRD, وتصميم Architecture",
    descEn: "System analysis, SRS, BRD writing, and architecture design",
    icon: "Lightbulb",
    color: "text-amber-500",
    gradient: "from-amber-600/20 to-yellow-500/20",
  },
];

// ============================================================
// SERVICES
// ============================================================
export const services: Service[] = [
  // ─── WEBSITES ─────────────────────────────────────────────
  {
    id: "corporate-website",
    slug: "corporate-website",
    nameAr: "موقع تعريفي للشركات والأفراد",
    nameEn: "Corporate / Business Website",
    descAr:
      "موقع تعريفي احترافي يعكس هوية نشاطك التجاري، يشمل الرئيسية، من نحن، الخدمات، الأعمال، التواصل. متجاوب مع كل الأجهزة وسريع التحميل.",
    descEn:
      "Professional corporate website reflecting your brand identity. Includes home, about, services, portfolio, and contact pages. Fully responsive and fast.",
    category: "websites",
    priceMin: 30,
    priceMax: 150,
    tier: "medium",
    tags: ["WordPress", "Laravel", "Next.js", "Responsive"],
    icon: "Building2",
    featured: true,
  },
  {
    id: "personal-portfolio",
    slug: "personal-portfolio",
    nameAr: "موقع شخصي أو سيرة ذاتية رقمية",
    nameEn: "Personal / Portfolio Website",
    descAr:
      "موقع شخصي أنيق للمبرمجين والمصممين والمهندسين وصناع المحتوى. يعرض مهاراتك ومشاريعك وخبراتك بشكل احترافي.",
    descEn:
      "Elegant personal website for developers, designers, and content creators. Showcases skills, projects, and experience professionally.",
    category: "websites",
    priceMin: 25,
    priceMax: 100,
    tier: "medium",
    tags: ["Portfolio", "Next.js", "Dark Mode", "Animations"],
    icon: "User",
  },
  {
    id: "landing-page",
    slug: "landing-page",
    nameAr: "صفحة هبوط احترافية",
    nameEn: "High-Converting Landing Page",
    descAr:
      "صفحة هبوط عالية التحويل للعروض والحملات الإعلانية. تركّز على هدف واحد مع عناوين قوية وأزرار CTA فعّالة.",
    descEn:
      "High-conversion landing page for campaigns and promotions. Single focused goal with strong headlines and effective CTAs.",
    category: "websites",
    priceMin: 20,
    priceMax: 80,
    tier: "quick",
    tags: ["Landing Page", "CTA", "Conversion", "Marketing"],
    icon: "Rocket",
    featured: true,
  },
  {
    id: "blog",
    slug: "blog",
    nameAr: "مدونة احترافية",
    nameEn: "Professional Blog",
    descAr:
      "مدونة كاملة للنشر المستمر مع تصنيفات ووسوم وبحث وصديقة لمحركات البحث. مناسبة للمحتوى التعليمي والإخباري.",
    descEn:
      "Full-featured blog with categories, tags, search, and SEO optimization. Ideal for educational and news content.",
    category: "websites",
    priceMin: 30,
    priceMax: 120,
    tier: "medium",
    tags: ["Blog", "WordPress", "SEO", "CMS"],
    icon: "FileText",
  },
  {
    id: "catalog-website",
    slug: "catalog-website",
    nameAr: "موقع كتالوج أو عرض خدمات",
    nameEn: "Catalog / Service Showcase",
    descAr:
      "موقع أنيق لعرض منتجاتك وخدماتك دون نظام بيع متكامل. مثالي للمحلات والشركات التي تريد حضوراً رقمياً.",
    descEn:
      "Elegant showcase for products and services without a full e-commerce system. Perfect for businesses wanting online presence.",
    category: "websites",
    priceMin: 35,
    priceMax: 130,
    tier: "medium",
    tags: ["Catalog", "Responsive", "Contact Form"],
    icon: "LayoutGrid",
  },
  {
    id: "wordpress",
    slug: "wordpress",
    nameAr: "حلول WordPress كاملة",
    nameEn: "WordPress Development",
    descAr:
      "خدمات ووردبريس شاملة: تثبيت، تخصيص قوالب، إضافات، مدونات، مواقع شركات، ومتاجر WooCommerce. إنجاز سريع بسعر مناسب.",
    descEn:
      "Complete WordPress services: installation, theme customization, plugins, blogs, corporate sites, and WooCommerce stores.",
    category: "websites",
    priceMin: 20,
    priceMax: 250,
    tier: "medium",
    tags: ["WordPress", "WooCommerce", "Theme", "Plugins"],
    icon: "Code",
  },

  // ─── E-COMMERCE ───────────────────────────────────────────
  {
    id: "ecommerce-standard",
    slug: "ecommerce-standard",
    nameAr: "متجر إلكتروني كامل",
    nameEn: "Full E-Commerce Store",
    descAr:
      "متجر إلكتروني متكامل من عرض المنتجات حتى الدفع. يشمل إدارة المنتجات، السلة، الشحن، كوبونات الخصم، وحسابات العملاء.",
    descEn:
      "Full-featured e-commerce store from product listing to payment. Includes product management, cart, shipping, coupons, and customer accounts.",
    category: "ecommerce",
    priceMin: 80,
    priceMax: 400,
    tier: "strong",
    tags: ["E-commerce", "WooCommerce", "Laravel", "Payment Gateway"],
    icon: "ShoppingBag",
    featured: true,
  },
  {
    id: "ecommerce-enterprise",
    slug: "ecommerce-enterprise",
    nameAr: "متجر إلكتروني مخصص للشركات",
    nameEn: "Enterprise Custom E-Commerce",
    descAr:
      "متجر مخصص بالكامل بخصائص متقدمة تتجاوز القوالب الجاهزة. أداء عالٍ، تصميم خاص، وقابلية توسع نحو منصة كبيرة.",
    descEn:
      "Fully custom e-commerce with advanced features beyond standard templates. High performance, unique design, scalable to large platform.",
    category: "ecommerce",
    priceMin: 200,
    priceMax: 1500,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Custom", "Scalable", "High Performance", "Multi-tenant"],
    icon: "Store",
  },
  {
    id: "multi-vendor",
    slug: "multi-vendor",
    nameAr: "متجر متعدد البائعين",
    nameEn: "Multi-Vendor Marketplace",
    descAr:
      "منصة تسوق متعددة البائعين حيث يمكن لكل بائع إدارة متجره الخاص. مثالية للـ Marketplace والتجار الكبار.",
    descEn:
      "Multi-vendor shopping platform where each seller manages their own store. Ideal for marketplace and large trader networks.",
    category: "ecommerce",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Marketplace", "Multi-Vendor", "Commissions", "Seller Portal"],
    icon: "Users",
  },
  {
    id: "loyalty-program",
    slug: "loyalty-program",
    nameAr: "نظام نقاط ومكافآت",
    nameEn: "Loyalty & Rewards System",
    descAr:
      "نظام ولاء عملاء متكامل: نقاط، مكافآت، كوبونات متقدمة، وبرنامج إحالة. يزيد الاحتفاظ بالعملاء ويرفع المبيعات.",
    descEn:
      "Complete customer loyalty: points, rewards, advanced coupons, and referral programs. Boosts retention and sales.",
    category: "ecommerce",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Loyalty", "Rewards", "Coupons", "Referral"],
    icon: "Gift",
  },

  // ─── SYSTEMS ──────────────────────────────────────────────
  {
    id: "erp",
    slug: "erp",
    nameAr: "نظام ERP متكامل",
    nameEn: "Integrated ERP System",
    descAr:
      "نظام تخطيط موارد المؤسسات يشمل المبيعات، المشتريات، المخزون، المحاسبة، الموارد البشرية، والتقارير في مكان واحد.",
    descEn:
      "Enterprise resource planning system covering sales, purchasing, inventory, accounting, HR, and reporting in one place.",
    category: "systems",
    priceMin: 200,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["ERP", "Laravel", "Multi-module", "Reports"],
    icon: "BarChart3",
    featured: true,
  },
  {
    id: "crm",
    slug: "crm",
    nameAr: "نظام CRM لإدارة العملاء",
    nameEn: "CRM System",
    descAr:
      "إدارة العملاء والمبيعات والمتابعة اليومية. يشمل تتبع حالات العملاء، مراحل البيع، المهام، والتذكيرات.",
    descEn:
      "Customer and sales management system. Includes client tracking, sales pipeline, tasks, and reminders.",
    category: "systems",
    priceMin: 120,
    priceMax: 600,
    tier: "strong",
    tags: ["CRM", "Sales Pipeline", "Client Management"],
    icon: "Users",
    featured: true,
  },
  {
    id: "school-system",
    slug: "school-system",
    nameAr: "نظام إدارة مدارس",
    nameEn: "School Management System",
    descAr:
      "نظام شامل لإدارة الطلاب والمعلمين والرسوم والتقارير الإدارية. مع بوابات للطلاب والمعلمين وأولياء الأمور.",
    descEn:
      "Comprehensive system for managing students, teachers, fees, and reports. With portals for students, teachers, and parents.",
    category: "systems",
    priceMin: 200,
    priceMax: 1200,
    pricePlus: true,
    tier: "enterprise",
    tags: ["School", "ERP", "Student Portal", "Grades"],
    icon: "GraduationCap",
  },
  {
    id: "hospital-system",
    slug: "hospital-system",
    nameAr: "نظام إدارة مستشفيات وعيادات",
    nameEn: "Hospital & Clinic Management (HIS)",
    descAr:
      "نظام إدارة صحي متكامل للمستشفيات والعيادات. يشمل الحجوزات، الملفات الطبية، الصيدلية، الفوترة، والتقارير.",
    descEn:
      "Complete health information system for hospitals and clinics. Includes appointments, medical records, pharmacy, billing, and reports.",
    category: "systems",
    priceMin: 300,
    priceMax: 3000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["HIS", "Hospital", "Clinic", "Medical Records"],
    icon: "Heart",
  },
  {
    id: "restaurant-system",
    slug: "restaurant-system",
    nameAr: "نظام إدارة مطاعم ومقاهي",
    nameEn: "Restaurant & Cafe Management",
    descAr:
      "نظام متكامل لإدارة الطلبات، الطاولات، القائمة، المخزون، والكاشير للمطاعم والمقاهي.",
    descEn:
      "Integrated management for orders, tables, menus, inventory, and cashier for restaurants and cafes.",
    category: "systems",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Restaurant", "POS", "Menu", "Orders"],
    icon: "UtensilsCrossed",
  },
  {
    id: "hr-system",
    slug: "hr-system",
    nameAr: "نظام موارد بشرية وحضور وانصراف",
    nameEn: "HR, Attendance & Payroll System",
    descAr:
      "إدارة شاملة للموظفين: التوظيف، الحضور، الإجازات، الرواتب، والتقييم. يوفر الوقت ويرفع كفاءة الموارد البشرية.",
    descEn:
      "Complete employee management: hiring, attendance, leaves, payroll, and performance. Saves time and boosts HR efficiency.",
    category: "systems",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["HR", "Payroll", "Attendance", "Leaves"],
    icon: "UserCheck",
  },
  {
    id: "pos-system",
    slug: "pos-system",
    nameAr: "نظام نقاط بيع POS",
    nameEn: "Point of Sale System (POS)",
    descAr:
      "نظام كاشير احترافي للمحلات والمتاجر. يشمل إدارة المبيعات، المخزون، الفواتير، التقارير، وإدارة الكاشيرين.",
    descEn:
      "Professional POS system for retail stores. Includes sales, inventory, invoicing, reports, and cashier management.",
    category: "systems",
    priceMin: 100,
    priceMax: 600,
    tier: "strong",
    tags: ["POS", "Retail", "Inventory", "Invoicing"],
    icon: "CreditCard",
  },
  {
    id: "hotel-system",
    slug: "hotel-system",
    nameAr: "نظام إدارة فنادق وشقق",
    nameEn: "Hotel & Apartment Management",
    descAr:
      "نظام متكامل لإدارة الغرف، الحجوزات، الفواتير، الضيوف، والتقارير للفنادق والشقق المفروشة.",
    descEn:
      "Complete system for room management, bookings, invoicing, guests, and reports for hotels and furnished apartments.",
    category: "systems",
    priceMin: 200,
    priceMax: 1000,
    tier: "enterprise",
    tags: ["Hotel", "Booking", "Rooms", "Guests"],
    icon: "Building",
  },
  {
    id: "warehouse-system",
    slug: "warehouse-system",
    nameAr: "نظام إدارة مخازن",
    nameEn: "Warehouse Management System",
    descAr:
      "إدارة المخزون، الموردين، حركات البضائع، الفواتير، والتقارير بدقة عالية.",
    descEn:
      "Inventory, suppliers, goods movement, invoicing, and reporting with high accuracy.",
    category: "systems",
    priceMin: 150,
    priceMax: 700,
    tier: "strong",
    tags: ["Warehouse", "Inventory", "Suppliers", "Stock"],
    icon: "Package",
  },
  {
    id: "booking-system",
    slug: "booking-system",
    nameAr: "نظام حجوزات ومواعيد",
    nameEn: "Booking & Appointment System",
    descAr:
      "نظام حجز للعيادات، الصالونات، المدربين، والخدمات. تقويم، أوقات متاحة، تأكيدات، وإشعارات تلقائية.",
    descEn:
      "Booking system for clinics, salons, trainers, and services. Calendar, available slots, confirmations, and automated notifications.",
    category: "systems",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Booking", "Calendar", "Appointments", "Notifications"],
    icon: "Calendar",
  },
  {
    id: "real-estate-system",
    slug: "real-estate-system",
    nameAr: "نظام إدارة عقارات وإيجارات",
    nameEn: "Real Estate & Rental Management",
    descAr:
      "إدارة العقارات، العقود، الإيجارات، المدفوعات، والتقارير. مثالي لشركات العقارات والمؤجرين.",
    descEn:
      "Manage properties, contracts, rentals, payments, and reports. Ideal for real estate companies and landlords.",
    category: "systems",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Real Estate", "Rentals", "Contracts", "Payments"],
    icon: "Home",
  },
  {
    id: "admin-dashboard",
    slug: "admin-dashboard",
    nameAr: "لوحة تحكم إدارية",
    nameEn: "Admin Dashboard",
    descAr:
      "لوحة تحكم احترافية لإدارة كل شيء من مكان واحد. إدارة المستخدمين، التقارير، الإحصائيات، والإشعارات.",
    descEn:
      "Professional admin dashboard for managing everything in one place. Users, reports, statistics, and notifications.",
    category: "systems",
    priceMin: 70,
    priceMax: 300,
    tier: "strong",
    tags: ["Dashboard", "Admin", "Analytics", "Reports"],
    icon: "LayoutDashboard",
  },
  {
    id: "custom-system",
    slug: "custom-system",
    nameAr: "نظام مخصص لنشاطك",
    nameEn: "Custom Business System",
    descAr:
      "نظام مبني حسب نشاطك تحديداً. نبدأ بتحليل احتياجاتك ثم نصمم الحل الأنسب لك من الصفر.",
    descEn:
      "System built specifically for your business. We start by analyzing your needs then design the perfect solution from scratch.",
    category: "systems",
    priceMin: 200,
    priceMax: 3000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Custom", "Analysis", "Tailored", "Scalable"],
    icon: "Wrench",
    featured: true,
  },

  // ─── AI ───────────────────────────────────────────────────
  {
    id: "ai-chatbot",
    slug: "ai-chatbot",
    nameAr: "شات بوت ذكي للموقع",
    nameEn: "AI Chatbot for Website",
    descAr:
      "مساعد ذكي يرد على زوار موقعك بشكل تلقائي. يقلل الضغط على الدعم ويزيد رضا العملاء.",
    descEn:
      "Smart assistant that automatically responds to your website visitors. Reduces support load and increases customer satisfaction.",
    category: "ai",
    priceMin: 80,
    priceMax: 400,
    tier: "strong",
    tags: ["Chatbot", "GPT", "Customer Support", "AI"],
    icon: "Bot",
    featured: true,
  },
  {
    id: "ai-agent",
    slug: "ai-agent",
    nameAr: "وكيل ذكاء اصطناعي AI Agent",
    nameEn: "AI Agent",
    descAr:
      "وكيل ذكاء اصطناعي يُنجز مهام معقدة بشكل مستقل. ربط بقواعد البيانات، الـ APIs، والأنظمة الداخلية.",
    descEn:
      "AI agent that independently completes complex tasks. Connected to databases, APIs, and internal systems.",
    category: "ai",
    priceMin: 150,
    priceMax: 800,
    tier: "enterprise",
    tags: ["AI Agent", "Automation", "LLM", "Tools"],
    icon: "Cpu",
  },
  {
    id: "ai-integration",
    slug: "ai-integration",
    nameAr: "دمج الذكاء الاصطناعي في نظامك",
    nameEn: "AI Integration",
    descAr:
      "إضافة ميزات ذكاء اصطناعي لموقعك أو نظامك: مساعد ذكي، تلخيص، استخراج بيانات، تصنيف نصوص.",
    descEn:
      "Add AI features to your website or system: smart assistant, summarization, data extraction, text classification.",
    category: "ai",
    priceMin: 80,
    priceMax: 500,
    tier: "strong",
    tags: ["AI", "OpenAI", "GPT", "NLP"],
    icon: "Sparkles",
  },
  {
    id: "knowledge-base",
    slug: "knowledge-base",
    nameAr: "قاعدة معرفة للشركات",
    nameEn: "Company Knowledge Base",
    descAr:
      "نظام يتعلم من وثائق شركتك ويرد على أسئلة الموظفين والعملاء بناءً على معلوماتك الخاصة.",
    descEn:
      "System that learns from your company documents and answers employee and customer questions based on your own information.",
    category: "ai",
    priceMin: 100,
    priceMax: 600,
    tier: "strong",
    tags: ["RAG", "Knowledge Base", "GPT", "Documents"],
    icon: "BookOpen",
  },
  {
    id: "content-generation",
    slug: "content-generation",
    nameAr: "توليد محتوى تلقائي",
    nameEn: "Automated Content Generation",
    descAr:
      "نظام لتوليد المحتوى تلقائياً: مقالات، وصف منتجات، منشورات سوشيال ميديا بضغطة زر.",
    descEn:
      "Automated content generation: articles, product descriptions, social media posts at the click of a button.",
    category: "ai",
    priceMin: 80,
    priceMax: 400,
    tier: "strong",
    tags: ["Content", "GPT", "Automation", "Marketing"],
    icon: "PenLine",
  },

  // ─── DATABASES ────────────────────────────────────────────
  {
    id: "db-design",
    slug: "db-design",
    nameAr: "تصميم قواعد البيانات",
    nameEn: "Database Design",
    descAr:
      "تصميم قاعدة بيانات علائقية محكمة مع ERD وSchema وعلاقات واضحة. أساس متين لأي نظام قوي.",
    descEn:
      "Solid relational database design with ERD, schema, and clear relationships. The foundation of any robust system.",
    category: "databases",
    priceMin: 40,
    priceMax: 200,
    tier: "medium",
    tags: ["ERD", "Schema", "MySQL", "SQL Server"],
    icon: "Database",
  },
  {
    id: "db-optimization",
    slug: "db-optimization",
    nameAr: "تحسين أداء قواعد البيانات",
    nameEn: "Database Performance Optimization",
    descAr:
      "تحسين الاستعلامات، الفهرسة، وبنية البيانات لرفع أداء نظامك بشكل ملحوظ.",
    descEn:
      "Query optimization, indexing, and data structure improvements for significantly better system performance.",
    category: "databases",
    priceMin: 50,
    priceMax: 250,
    tier: "medium",
    tags: ["Optimization", "Indexing", "Queries", "Performance"],
    icon: "TrendingUp",
  },
  {
    id: "data-migration",
    slug: "data-migration",
    nameAr: "ترحيل البيانات",
    nameEn: "Data Migration",
    descAr:
      "نقل وترحيل البيانات بين الأنظمة بأمان مع الحفاظ على سلامتها وتوافقها مع البنية الجديدة.",
    descEn:
      "Safely migrate data between systems while preserving integrity and compatibility with the new structure.",
    category: "databases",
    priceMin: 60,
    priceMax: 300,
    tier: "medium",
    tags: ["Migration", "ETL", "Data", "Transfer"],
    icon: "RefreshCw",
  },
  {
    id: "backup-system",
    slug: "backup-system",
    nameAr: "نظام نسخ احتياطي تلقائي",
    nameEn: "Automated Backup System",
    descAr:
      "إعداد نسخ احتياطي تلقائي لقواعد البيانات والملفات مع جدولة واستعادة سهلة.",
    descEn:
      "Automated backup setup for databases and files with scheduling and easy restoration.",
    category: "databases",
    priceMin: 30,
    priceMax: 150,
    tier: "quick",
    tags: ["Backup", "Automation", "Recovery", "Scheduling"],
    icon: "HardDrive",
  },
  {
    id: "analytics-dashboard",
    slug: "analytics-dashboard",
    nameAr: "لوحات تحليلية وتقارير",
    nameEn: "Analytics & Reporting Dashboard",
    descAr:
      "لوحات إحصائية تفاعلية مع تقارير مالية، مبيعات، مخزون وتصدير PDF وExcel.",
    descEn:
      "Interactive analytics dashboards with financial, sales, inventory reports and PDF/Excel export.",
    category: "databases",
    priceMin: 80,
    priceMax: 400,
    tier: "strong",
    tags: ["Analytics", "Charts", "PDF", "Excel", "Reports"],
    icon: "BarChart2",
  },

  // ─── SECURITY ─────────────────────────────────────────────
  {
    id: "security-audit",
    slug: "security-audit",
    nameAr: "فحص الثغرات الأمنية",
    nameEn: "Security Vulnerability Audit",
    descAr:
      "فحص شامل لموقعك أو نظامك لاكتشاف الثغرات الأمنية وتقديم تقرير مفصل مع الحلول.",
    descEn:
      "Comprehensive security scan of your website or system to discover vulnerabilities with a detailed report and solutions.",
    category: "security",
    priceMin: 50,
    priceMax: 250,
    tier: "medium",
    tags: ["Security Audit", "Vulnerability", "Penetration", "Report"],
    icon: "ShieldAlert",
  },
  {
    id: "security-hardening",
    slug: "security-hardening",
    nameAr: "تقوية حماية الموقع",
    nameEn: "Website Security Hardening",
    descAr:
      "تطبيق أفضل ممارسات الأمان: SSL، حماية تسجيل الدخول، منع Brute Force، Spam، وحماية الـ APIs.",
    descEn:
      "Implementing security best practices: SSL, login protection, Brute Force prevention, Spam, and API protection.",
    category: "security",
    priceMin: 40,
    priceMax: 200,
    tier: "medium",
    tags: ["Hardening", "SSL", "2FA", "Brute Force"],
    icon: "Lock",
  },
  {
    id: "mfa-2fa",
    slug: "mfa-2fa",
    nameAr: "إعداد MFA و2FA",
    nameEn: "MFA & 2FA Setup",
    descAr:
      "تفعيل المصادقة الثنائية لرفع مستوى الأمان في تسجيل دخول الأنظمة والمواقع.",
    descEn:
      "Enable two-factor authentication to raise security levels for system and website logins.",
    category: "security",
    priceMin: 30,
    priceMax: 120,
    tier: "quick",
    tags: ["2FA", "MFA", "Authentication", "Security"],
    icon: "Key",
  },

  // ─── DEVOPS ───────────────────────────────────────────────
  {
    id: "vps-setup",
    slug: "vps-setup",
    nameAr: "إعداد VPS وLinux Server",
    nameEn: "VPS & Linux Server Setup",
    descAr:
      "إعداد خادم VPS من الصفر مع Nginx/Apache، SSL، Firewall، وضبط الأداء.",
    descEn:
      "VPS server setup from scratch with Nginx/Apache, SSL, Firewall, and performance tuning.",
    category: "devops",
    priceMin: 40,
    priceMax: 200,
    tier: "medium",
    tags: ["VPS", "Linux", "Nginx", "Apache", "SSL"],
    icon: "Server",
  },
  {
    id: "docker-setup",
    slug: "docker-setup",
    nameAr: "إعداد Docker وDocker Compose",
    nameEn: "Docker & Containerization",
    descAr:
      "حاوية تطبيقاتك باستخدام Docker وDocker Compose لنشر سهل ومتسق في أي بيئة.",
    descEn:
      "Containerize your applications with Docker and Docker Compose for easy, consistent deployment in any environment.",
    category: "devops",
    priceMin: 50,
    priceMax: 250,
    tier: "medium",
    tags: ["Docker", "Containers", "DevOps", "Deployment"],
    icon: "Boxes",
  },
  {
    id: "cicd",
    slug: "cicd",
    nameAr: "إعداد CI/CD وGitHub Actions",
    nameEn: "CI/CD Pipeline Setup",
    descAr:
      "أتمتة عمليات البناء والاختبار والنشر باستخدام GitHub Actions أو أي أداة CI/CD.",
    descEn:
      "Automate build, test, and deployment pipelines using GitHub Actions or any CI/CD tool.",
    category: "devops",
    priceMin: 60,
    priceMax: 300,
    tier: "strong",
    tags: ["CI/CD", "GitHub Actions", "Automation", "Pipeline"],
    icon: "GitBranch",
  },
  {
    id: "cloudflare-cdn",
    slug: "cloudflare-cdn",
    nameAr: "إعداد Cloudflare وCDN",
    nameEn: "Cloudflare & CDN Setup",
    descAr:
      "حماية وتسريع موقعك باستخدام Cloudflare: CDN، DDoS Protection، Caching، وضبط الـ DNS.",
    descEn:
      "Protect and accelerate your site with Cloudflare: CDN, DDoS Protection, Caching, and DNS configuration.",
    category: "devops",
    priceMin: 30,
    priceMax: 150,
    tier: "quick",
    tags: ["Cloudflare", "CDN", "DDoS", "DNS"],
    icon: "Shield",
  },
  {
    id: "hosting-setup",
    slug: "hosting-setup",
    nameAr: "إعداد الاستضافة وDNS وSSL",
    nameEn: "Hosting, DNS & SSL Setup",
    descAr:
      "ضبط الاستضافة، ربط النطاق، إعداد DNS، وتفعيل شهادة SSL بشكل احترافي.",
    descEn:
      "Complete hosting setup, domain connection, DNS configuration, and SSL certificate activation.",
    category: "devops",
    priceMin: 15,
    priceMax: 60,
    tier: "quick",
    tags: ["Hosting", "DNS", "SSL", "Domain"],
    icon: "Globe",
  },
  {
    id: "website-migration",
    slug: "website-migration",
    nameAr: "نقل الموقع إلى استضافة جديدة",
    nameEn: "Website Migration",
    descAr:
      "نقل كامل للموقع من استضافة إلى أخرى مع الحفاظ على الملفات وقاعدة البيانات وأقل توقف ممكن.",
    descEn:
      "Complete website migration from one host to another, preserving files and database with minimal downtime.",
    category: "devops",
    priceMin: 25,
    priceMax: 100,
    tier: "quick",
    tags: ["Migration", "Transfer", "Hosting", "Backup"],
    icon: "MoveRight",
  },

  // ─── API & INTEGRATION ─────────────────────────────────────
  {
    id: "api-development",
    slug: "api-development",
    nameAr: "بناء API مخصص",
    nameEn: "Custom API Development",
    descAr:
      "إنشاء REST API احترافي للتطبيقات والمواقع. مسارات منظمة، توثيق Swagger، JWT Authentication.",
    descEn:
      "Professional REST API for apps and websites. Organized routes, Swagger docs, JWT authentication.",
    category: "api",
    priceMin: 80,
    priceMax: 400,
    tier: "strong",
    tags: ["REST API", "NestJS", "Laravel", "Swagger", "JWT"],
    icon: "Code2",
    featured: true,
  },
  {
    id: "api-integration",
    slug: "api-integration",
    nameAr: "ربط APIs الخارجية",
    nameEn: "External API Integration",
    descAr:
      "ربط موقعك مع خدمات خارجية: بوابات الدفع، خرائط Google، واتساب، SMS، البريد، وخدمات الشحن.",
    descEn:
      "Connect your site with external services: payment gateways, Google Maps, WhatsApp, SMS, email, and shipping.",
    category: "api",
    priceMin: 40,
    priceMax: 250,
    tier: "medium",
    tags: ["API", "Payments", "Google Maps", "WhatsApp", "SMS"],
    icon: "Plug",
  },
  {
    id: "whatsapp-integration",
    slug: "whatsapp-integration",
    nameAr: "ربط واتساب للأعمال",
    nameEn: "WhatsApp Business Integration",
    descAr:
      "ربط واتساب بموقعك أو نظامك لإرسال إشعارات تلقائية، ردود ذكية، وتتبع الطلبات.",
    descEn:
      "Connect WhatsApp to your site or system for automatic notifications, smart replies, and order tracking.",
    category: "api",
    priceMin: 50,
    priceMax: 250,
    tier: "medium",
    tags: ["WhatsApp", "Notifications", "Business API", "Automation"],
    icon: "MessageCircle",
  },
  {
    id: "payment-gateway",
    slug: "payment-gateway",
    nameAr: "ربط بوابات الدفع",
    nameEn: "Payment Gateway Integration",
    descAr:
      "دمج بوابات دفع إلكترونية لقبول المدفوعات في موقعك أو تطبيقك بأمان.",
    descEn:
      "Integrate electronic payment gateways to securely accept payments in your site or app.",
    category: "api",
    priceMin: 60,
    priceMax: 300,
    tier: "medium",
    tags: ["Payment", "Stripe", "PayPal", "Gateway"],
    icon: "CreditCard",
  },
  {
    id: "erp-integration",
    slug: "erp-integration",
    nameAr: "ربط أنظمة ERP وCRM خارجية",
    nameEn: "ERP & CRM Integration",
    descAr:
      "مزامنة بياناتك مع أنظمة ERP وCRM الخارجية لعمليات سلسة وتقارير موحدة.",
    descEn:
      "Sync your data with external ERP and CRM systems for smooth operations and unified reporting.",
    category: "api",
    priceMin: 80,
    priceMax: 400,
    tier: "strong",
    tags: ["ERP", "CRM", "Sync", "Integration"],
    icon: "RefreshCw",
  },

  // ─── SAAS ─────────────────────────────────────────────────
  {
    id: "saas-platform",
    slug: "saas-platform",
    nameAr: "بناء منصة SaaS كاملة",
    nameEn: "Full SaaS Platform",
    descAr:
      "منصة SaaS متكاملة مع نظام اشتراكات، متعدد المستأجرين، إدارة الخطط، والفوترة التلقائية.",
    descEn:
      "Complete SaaS platform with subscription system, multi-tenancy, plan management, and automated billing.",
    category: "saas",
    priceMin: 500,
    priceMax: 5000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["SaaS", "Multi-tenant", "Subscriptions", "Billing"],
    icon: "Cloud",
    featured: true,
  },
  {
    id: "subscription-system",
    slug: "subscription-system",
    nameAr: "نظام اشتراكات شهرية وسنوية",
    nameEn: "Subscription Management System",
    descAr:
      "نظام اشتراكات متكامل مع خطط متعددة، تجديد تلقائي، فوترة، وإدارة المشتركين.",
    descEn:
      "Complete subscription system with multiple plans, automatic renewal, billing, and subscriber management.",
    category: "saas",
    priceMin: 150,
    priceMax: 700,
    tier: "enterprise",
    tags: ["Subscriptions", "Plans", "Billing", "Recurring"],
    icon: "Repeat",
  },
  {
    id: "multi-tenant",
    slug: "multi-tenant",
    nameAr: "نظام تعدد المستأجرين",
    nameEn: "Multi-Tenant System",
    descAr:
      "بنية متعددة المستأجرين تتيح لكل عميل بيئة معزولة خاصة به ضمن منصة واحدة.",
    descEn:
      "Multi-tenant architecture giving each client their own isolated environment within a single platform.",
    category: "saas",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Multi-tenant", "SaaS", "Isolation", "Scalable"],
    icon: "Users",
  },

  // ─── MOBILE ───────────────────────────────────────────────
  {
    id: "flutter-app",
    slug: "flutter-app",
    nameAr: "تطبيق جوال Flutter",
    nameEn: "Flutter Mobile App",
    descAr:
      "تطبيق جوال احترافي لـ Android وiOS باستخدام Flutter. أداء سريع، واجهة جميلة، وتجربة مستخدم ممتازة.",
    descEn:
      "Professional Android and iOS app using Flutter. Fast performance, beautiful UI, and excellent user experience.",
    category: "mobile",
    priceMin: 150,
    priceMax: 1000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Flutter", "Android", "iOS", "Dart", "Mobile"],
    icon: "Smartphone",
    featured: true,
  },
  {
    id: "mobile-api",
    slug: "mobile-api",
    nameAr: "API خلفي لتطبيق الجوال",
    nameEn: "Mobile Backend API",
    descAr:
      "بناء خلفية متكاملة لتطبيقات الجوال مع NestJS أو Laravel. Auth، Push Notifications، Sync.",
    descEn:
      "Complete backend for mobile apps with NestJS or Laravel. Auth, push notifications, and data sync.",
    category: "mobile",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Backend", "API", "NestJS", "Laravel", "Push"],
    icon: "Server",
  },
  {
    id: "admob-integration",
    slug: "admob-integration",
    nameAr: "ربط Google AdMob لتطبيقك",
    nameEn: "Google AdMob Integration",
    descAr:
      "دمج إعلانات Google AdMob في تطبيقك لتحقيق عائد إعلاني مستدام مع تحسين الأداء.",
    descEn:
      "Integrate Google AdMob ads into your app for sustainable ad revenue with performance optimization.",
    category: "mobile",
    priceMin: 40,
    priceMax: 150,
    tier: "quick",
    tags: ["AdMob", "Ads", "Monetization", "Flutter"],
    icon: "DollarSign",
  },
  {
    id: "playstore-publish",
    slug: "playstore-publish",
    nameAr: "نشر التطبيق على Google Play",
    nameEn: "Google Play Publishing",
    descAr:
      "مساعدة كاملة في نشر تطبيقك على Google Play Console مع إعداد الصور والوصف والتصنيف.",
    descEn:
      "Complete assistance publishing your app on Google Play Console with screenshots, description, and category setup.",
    category: "mobile",
    priceMin: 30,
    priceMax: 100,
    tier: "quick",
    tags: ["Google Play", "Publishing", "App Store", "ASO"],
    icon: "Upload",
  },

  // ─── AUTOMATION ───────────────────────────────────────────
  {
    id: "email-automation",
    slug: "email-automation",
    nameAr: "أتمتة البريد الإلكتروني",
    nameEn: "Email Automation",
    descAr:
      "إعداد حملات بريدية تلقائية: ترحيب، متابعة، تذكيرات، وعروض مخصصة بناءً على سلوك المستخدم.",
    descEn:
      "Automated email campaigns: welcome, follow-up, reminders, and personalized offers based on user behavior.",
    category: "automation",
    priceMin: 40,
    priceMax: 200,
    tier: "medium",
    tags: ["Email", "Automation", "Campaigns", "Marketing"],
    icon: "Mail",
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    nameAr: "أتمتة سير العمل",
    nameEn: "Business Workflow Automation",
    descAr:
      "أتمتة المهام الإدارية والأعمال المتكررة لرفع الإنتاجية وتقليل الأخطاء البشرية.",
    descEn:
      "Automate administrative tasks and repetitive work to boost productivity and reduce human errors.",
    category: "automation",
    priceMin: 60,
    priceMax: 300,
    tier: "strong",
    tags: ["Workflow", "Automation", "Productivity", "Tasks"],
    icon: "Workflow",
  },
  {
    id: "reports-automation",
    slug: "reports-automation",
    nameAr: "أتمتة التقارير",
    nameEn: "Report Automation",
    descAr:
      "توليد وإرسال التقارير تلقائياً بجدول زمني محدد. تقارير يومية، أسبوعية، أو شهرية.",
    descEn:
      "Automatically generate and send reports on a set schedule. Daily, weekly, or monthly reports.",
    category: "automation",
    priceMin: 50,
    priceMax: 250,
    tier: "medium",
    tags: ["Reports", "Scheduling", "Automation", "Email"],
    icon: "FileBarChart",
  },

  // ─── PLATFORMS ────────────────────────────────────────────
  {
    id: "lms-platform",
    slug: "lms-platform",
    nameAr: "منصة تعليمية LMS",
    nameEn: "Learning Management System (LMS)",
    descAr:
      "منصة دورات متكاملة مع دروس فيديو، اختبارات، شهادات، ولوحة تحكم للمدرسين والطلاب.",
    descEn:
      "Full LMS platform with video lessons, quizzes, certificates, and dashboards for teachers and students.",
    category: "platforms",
    priceMin: 250,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["LMS", "E-Learning", "Courses", "Certificates"],
    icon: "GraduationCap",
    featured: true,
  },
  {
    id: "jobs-platform",
    slug: "jobs-platform",
    nameAr: "موقع وظائف وتوظيف",
    nameEn: "Jobs & Recruitment Platform",
    descAr:
      "منصة وظائف متكاملة مع نشر إعلانات، تقديم طلبات، فلترة المتقدمين، ومتابعة التوظيف.",
    descEn:
      "Complete jobs platform with job posting, applications, candidate filtering, and recruitment tracking.",
    category: "platforms",
    priceMin: 200,
    priceMax: 1500,
    tier: "enterprise",
    tags: ["Jobs", "Recruitment", "HR", "Applications"],
    icon: "Briefcase",
  },
  {
    id: "real-estate-platform",
    slug: "real-estate-platform",
    nameAr: "موقع عقارات",
    nameEn: "Real Estate Platform",
    descAr:
      "منصة عقارات متكاملة مع إدارة إعلانات، بحث متقدم، خرائط، وإدارة وكلاء.",
    descEn:
      "Full real estate platform with listing management, advanced search, maps, and agent management.",
    category: "platforms",
    priceMin: 200,
    priceMax: 1200,
    tier: "enterprise",
    tags: ["Real Estate", "Listings", "Maps", "Search"],
    icon: "MapPin",
  },
  {
    id: "news-portal",
    slug: "news-portal",
    nameAr: "بوابة إخبارية",
    nameEn: "News Portal",
    descAr:
      "بوابة أخبار متكاملة مع تصنيفات، محرر، بحث، إشعارات، وSEO متقدم.",
    descEn:
      "Full news portal with categories, editor, search, notifications, and advanced SEO.",
    category: "platforms",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["News", "CMS", "SEO", "Media"],
    icon: "Newspaper",
  },

  // ─── OPTIMIZATION (under websites cat) ─────────────────────
  {
    id: "seo",
    slug: "seo",
    nameAr: "تحسين SEO ومحركات البحث",
    nameEn: "SEO Optimization",
    descAr:
      "تحسين شامل لظهور موقعك في محركات البحث: العناوين، الأوصاف، البنية، السرعة، والبيانات المنظمة.",
    descEn:
      "Comprehensive SEO improvement: titles, descriptions, structure, speed, and structured data.",
    category: "websites",
    priceMin: 40,
    priceMax: 200,
    tier: "medium",
    tags: ["SEO", "Google", "Ranking", "Keywords", "Schema"],
    icon: "Search",
    featured: true,
  },
  {
    id: "performance-optimization",
    slug: "performance-optimization",
    nameAr: "تحسين سرعة الموقع والأداء",
    nameEn: "Performance Optimization",
    descAr:
      "تسريع موقعك شاملاً: ضغط الملفات، تحسين الصور، الكاش، حذف الأكواد الزائدة، وتقليل زمن التحميل.",
    descEn:
      "Full site speed boost: file compression, image optimization, caching, code cleanup, and load time reduction.",
    category: "websites",
    priceMin: 30,
    priceMax: 150,
    tier: "quick",
    tags: ["Performance", "Speed", "Core Web Vitals", "Lighthouse"],
    icon: "Gauge",
  },
  {
    id: "maintenance",
    slug: "maintenance",
    nameAr: "صيانة المواقع والإصلاحات",
    nameEn: "Website Maintenance & Bug Fixing",
    descAr:
      "معالجة الأخطاء البرمجية، الأعطال، والمشاكل التقنية. صيانة دورية تشمل التحديثات والنسخ الاحتياطي.",
    descEn:
      "Fix bugs, crashes, and technical issues. Periodic maintenance including updates and backups.",
    category: "websites",
    priceMin: 15,
    priceMax: 120,
    tier: "quick",
    tags: ["Maintenance", "Bug Fix", "Updates", "Support"],
    icon: "Wrench",
  },
  {
    id: "rtl-arabization",
    slug: "rtl-arabization",
    nameAr: "تعريب المواقع ودعم RTL",
    nameEn: "Arabic RTL Localization",
    descAr:
      "تعريب مواقعك وأنظمتك مع ضبط RTL الصحيح. خطوط، قوائم، أزرار، وجداول مريحة للمستخدم العربي.",
    descEn:
      "Arabize your websites and systems with correct RTL support. Fonts, menus, buttons, and tables for Arabic users.",
    category: "websites",
    priceMin: 20,
    priceMax: 100,
    tier: "quick",
    tags: ["Arabic", "RTL", "Localization", "i18n"],
    icon: "Languages",
  },
  {
    id: "feature-development",
    slug: "feature-development",
    nameAr: "إضافة ميزات لموقع موجود",
    nameEn: "Feature Development",
    descAr:
      "إضافة خصائص جديدة لموقعك الحالي: إشعارات، بحث متقدم، صلاحيات، تقييمات، أو أي ميزة تحتاجها.",
    descEn:
      "Add new features to your existing site: notifications, advanced search, permissions, ratings, or any required feature.",
    category: "websites",
    priceMin: 25,
    priceMax: 250,
    tier: "medium",
    tags: ["Features", "Development", "Enhancement", "Custom"],
    icon: "PlusCircle",
  },
  {
    id: "react-nextjs",
    slug: "react-nextjs",
    nameAr: "واجهات حديثة React / Next.js",
    nameEn: "Modern React / Next.js Interfaces",
    descAr:
      "واجهات ويب حديثة وسريعة باستخدام React أو Next.js. تجاوب، سلاسة، وأداء ممتاز مع ربط أي Backend.",
    descEn:
      "Fast, modern web interfaces using React or Next.js. Responsive, smooth, and excellent performance with any backend.",
    category: "websites",
    priceMin: 80,
    priceMax: 600,
    tier: "strong",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Modern"],
    icon: "Code",
    featured: true,
  },

  // ─── EDUCATION SYSTEMS ──────────────────────────────────────
  {
    id: "school-erp",
    slug: "school-erp",
    nameAr: "نظام إدارة مدارس ERP",
    nameEn: "School ERP Management System",
    descAr:
      "نظام شامل لإدارة المدارس: طلاب، معلمين، Grades, حضور, جدول دراسي, حافلات, ومكتبة.",
    descEn:
      "Comprehensive school management: students, teachers, grades, attendance, schedules, buses, and library.",
    category: "education",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["School", "ERP", "Students", "Grades", "Attendance"],
    icon: "GraduationCap",
    featured: true,
  },
  {
    id: "university-system",
    slug: "university-system",
    nameAr: "نظام إدارة جامعات",
    nameEn: "University Management System",
    descAr:
      "نظام متكامل لإدارة الكليات، الأقسام، المقررات، الساعات المعتمدة، والشهادات الجامعية.",
    descEn:
      "Integrated system for managing colleges, departments, courses, credits, and university degrees.",
    category: "education",
    priceMin: 500,
    priceMax: 3000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["University", "Colleges", "Courses", "Credits"],
    icon: "GraduationCap",
  },
  {
    id: "institute-system",
    slug: "institute-system",
    nameAr: "نظام إدارة معاهد",
    nameEn: "Institute Management System",
    descAr:
      "نظام مخصص للمعاهد التعليمية والتدريبية: إدارة دورات، مدربين، طلاب، وشهادات.",
    descEn:
      "Custom system for educational and training institutes: courses, trainers, students, and certificates.",
    category: "education",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Institute", "Training", "Courses", "Certificates"],
    icon: "GraduationCap",
  },
  {
    id: "nursery-system",
    slug: "nursery-system",
    nameAr: "نظام إدارة حضانات",
    nameEn: "Nursery & Daycare Management",
    descAr:
      "نظام لإدارة الحضانات: تسجيل أطفال، حضور، وجبات، نشاطات، وتواصل مع أولياء الأمور.",
    descEn:
      "Nursery management system: child registration, attendance, meals, activities, and parent communication.",
    category: "education",
    priceMin: 150,
    priceMax: 600,
    tier: "strong",
    tags: ["Nursery", "Daycare", "Children", "Parents"],
    icon: "Baby",
  },
  {
    id: "exam-system",
    slug: "exam-system",
    nameAr: "نظام اختبارات إلكترونية",
    nameEn: "Electronic Exam System",
    descAr:
      "منصة اختبارات إلكترونية مع بنك أسئلة، تصحيح تلقائي، ومنع غش.",
    descEn:
      "Electronic exam platform with question bank, auto-grading, and anti-cheating features.",
    category: "education",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Exams", "Question Bank", "Auto-grading", "E-learning"],
    icon: "FileCheck",
  },
  {
    id: "parent-portal",
    slug: "parent-portal",
    nameAr: "بوابة ولي الأمر",
    nameEn: "Parent Portal System",
    descAr:
      "بوابة إلكترونية لأولياء الأمور لمتابعة أبنائهم: درجات، حضور، واجبات، وإشعارات.",
    descEn:
      "Electronic portal for parents to follow up on their children: grades, attendance, homework, and notifications.",
    category: "education",
    priceMin: 100,
    priceMax: 400,
    tier: "medium",
    tags: ["Parents", "Portal", "Grades", "Notifications"],
    icon: "Users",
  },
  {
    id: "transport-system",
    slug: "transport-system",
    nameAr: "نظام حافلات مدرسية",
    nameEn: "School Bus Transportation System",
    descAr:
      "نظام تتبع وإدارة حافلات المدارس: مسارات، سائقين، طلاب، وإشعارات وصول.",
    descEn:
      "School bus tracking and management: routes, drivers, students, and arrival notifications.",
    category: "education",
    priceMin: 150,
    priceMax: 600,
    tier: "strong",
    tags: ["Transport", "Buses", "Tracking", "GPS"],
    icon: "Bus",
  },

  // ─── MEDICAL & HEALTHCARE ───────────────────────────────────
  {
    id: "hospital-management",
    slug: "hospital-management",
    nameAr: "نظام إدارة مستشفيات متكامل",
    nameEn: "Complete Hospital Management System",
    descAr:
      "نظام HIS متكامل: عيادات خارجية، أقسام داخلية، عمليات، طوارئ، صيدلية، مختبر، وأشعة.",
    descEn:
      "Complete HIS: outpatient clinics, inpatient wards, surgeries, emergency, pharmacy, lab, and radiology.",
    category: "medical",
    priceMin: 500,
    priceMax: 5000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Hospital", "HIS", "EMR", "Departments"],
    icon: "Hospital",
    featured: true,
  },
  {
    id: "clinic-system",
    slug: "clinic-system",
    nameAr: "نظام إدارة عيادات",
    nameEn: "Clinic Management System",
    descAr:
      "نظام متكامل للعيادات: حجز مواعيد، ملفات مرضى، وصفات طبية، وفواتير.",
    descEn:
      "Complete clinic system: appointment booking, patient records, prescriptions, and billing.",
    category: "medical",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Clinic", "Appointments", "Patients", "Prescriptions"],
    icon: "Clinic",
  },
  {
    id: "dental-system",
    slug: "dental-system",
    nameAr: "نظام إدارة عيادات أسنان",
    nameEn: "Dental Clinic Management",
    descAr:
      "نظام متخصص لعيادات الأسنان: مخطط أسنان، علاج، أشعة، ومتابعة حالات.",
    descEn:
      "Specialized dental system: tooth chart, treatments, X-rays, and case follow-up.",
    category: "medical",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Dental", "Tooth Chart", "Treatments", "X-rays"],
    icon: "Smile",
  },
  {
    id: "lab-system",
    slug: "lab-system",
    nameAr: "نظام إدارة مختبرات طبية",
    nameEn: "Medical Laboratory Management",
    descAr:
      "نظام LIS لإدارة المختبرات: عينات، تحاليل، نتائج، وأجهزة مختبرية.",
    descEn:
      "LIS system for lab management: samples, tests, results, and lab devices.",
    category: "medical",
    priceMin: 200,
    priceMax: 1200,
    tier: "strong",
    tags: ["Laboratory", "LIS", "Tests", "Samples"],
    icon: "Flask",
  },
  {
    id: "pharmacy-system",
    slug: "pharmacy-system",
    nameAr: "نظام إدارة صيدليات",
    nameEn: "Pharmacy Management System",
    descAr:
      "نظام صيدليات: مخزون أدوية، صرف وصفات، تفاعلات دوائية، وفواتير.",
    descEn:
      "Pharmacy system: drug inventory, prescription dispensing, drug interactions, and billing.",
    category: "medical",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Pharmacy", "Drugs", "Prescriptions", "Inventory"],
    icon: "Pill",
  },
  {
    id: "ehr-system",
    slug: "ehr-system",
    nameAr: "ملف طبي إلكتروني EMR/EHR",
    nameEn: "Electronic Medical Records (EMR/EHR)",
    descAr:
      "نظام سجلات طبية إلكترونية موحد وآمن مع إمكانية المشاركة بين مقدمي الرعاية.",
    descEn:
      "Unified and secure electronic health records system with sharing capability between care providers.",
    category: "medical",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["EMR", "EHR", "Medical Records", "HIPAA"],
    icon: "FileText",
  },
  {
    id: "insurance-system",
    slug: "insurance-system",
    nameAr: "نظام إدارة التأمين الطبي",
    nameEn: "Medical Insurance Management",
    descAr:
      "نظام لإدارة مطالبات التأمين الطبي: تحقق، اعتماد، وفوترة إلكترونية.",
    descEn:
      "Medical insurance claims management: verification, approval, and electronic billing.",
    category: "medical",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Insurance", "Claims", "Billing", "Verification"],
    icon: "ShieldCheck",
  },

  // ─── REAL ESTATE ────────────────────────────────────────────
  {
    id: "real-estate-platform-full",
    slug: "real-estate-platform-full",
    nameAr: "منصة عقارية متكاملة",
    nameEn: "Full Real Estate Platform",
    descAr:
      "منصة عقارية شاملة: إعلانات، بحث متقدم، خرائط، وكلاء، تمويل، وتقارير.",
    descEn:
      "Comprehensive real estate platform: listings, advanced search, maps, agents, financing, and reports.",
    category: "realestate",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Real Estate", "Listings", "Agents", "Maps"],
    icon: "Building2",
    featured: true,
  },
  {
    id: "property-management",
    slug: "property-management",
    nameAr: "نظام إدارة أملاك",
    nameEn: "Property Management System",
    descAr:
      "نظام لإدارة العقارات: صيانة، عقود، مستأجرين، مدفوعات، وتقارير.",
    descEn:
      "Property management system: maintenance, contracts, tenants, payments, and reports.",
    category: "realestate",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Property", "Maintenance", "Tenants", "Contracts"],
    icon: "Home",
  },
  {
    id: "rental-management",
    slug: "rental-management",
    nameAr: "نظام إدارة إيجارات",
    nameEn: "Rental Management System",
    descAr:
      "نظام متخصص للإيجارات: عقود، أقساط، تجديد، إخلاء، ومتابعة.",
    descEn:
      "Specialized rental system: contracts, installments, renewal, eviction, and follow-up.",
    category: "realestate",
    priceMin: 150,
    priceMax: 700,
    tier: "strong",
    tags: ["Rentals", "Contracts", "Payments", "Renewal"],
    icon: "FileText",
  },
  {
    id: "broker-system",
    slug: "broker-system",
    nameAr: "نظام وسطاء عقاريين",
    nameEn: "Real Estate Broker System",
    descAr:
      "نظام لإدارة مكاتب الوسطاء: عملاء، عقارات، عمولات، ومتابعات.",
    descEn:
      "Broker office management: clients, properties, commissions, and follow-ups.",
    category: "realestate",
    priceMin: 150,
    priceMax: 600,
    tier: "strong",
    tags: ["Brokers", "Clients", "Commissions", "Properties"],
    icon: "Handshake",
  },

  // ─── LOGISTICS & TRANSPORTATION ─────────────────────────────
  {
    id: "shipping-system",
    slug: "shipping-system",
    nameAr: "نظام شركات شحن",
    nameEn: "Shipping Company Management",
    descAr:
      "نظام متكامل لشركات الشحن: طلبات، تتبع، سائقين، أسطول، وفواتير.",
    descEn:
      "Complete shipping company system: orders, tracking, drivers, fleet, and invoicing.",
    category: "logistics",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Shipping", "Logistics", "Tracking", "Fleet"],
    icon: "Truck",
    featured: true,
  },
  {
    id: "fleet-management",
    slug: "fleet-management",
    nameAr: "نظام إدارة أسطول",
    nameEn: "Fleet Management System",
    descAr:
      "نظام تتبع وإدارة الأسطول: GPS, صيانة, وقود, سائقين، وتقارير.",
    descEn:
      "Fleet tracking and management: GPS, maintenance, fuel, drivers, and reports.",
    category: "logistics",
    priceMin: 200,
    priceMax: 1200,
    tier: "strong",
    tags: ["Fleet", "GPS", "Maintenance", "Fuel"],
    icon: "MapPin",
  },
  {
    id: "delivery-system",
    slug: "delivery-system",
    nameAr: "نظام توصيل طلبات",
    nameEn: "Delivery & Dispatch System",
    descAr:
      "نظام إدارة وتوزيع الطلبات: مندوبين، مسارات، تتبع حي، وإشعارات.",
    descEn:
      "Order delivery and dispatch: couriers, routes, live tracking, and notifications.",
    category: "logistics",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Delivery", "Dispatch", "Couriers", "Tracking"],
    icon: "Package",
  },
  {
    id: "gps-tracking",
    slug: "gps-tracking",
    nameAr: "نظام تتبع GPS",
    nameEn: "GPS Tracking System",
    descAr:
      "نظام تتبع مركبات وشحنات عبر GPS مع خرائط وتنبيهات.",
    descEn:
      "Vehicle and shipment GPS tracking with maps and alerts.",
    category: "logistics",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["GPS", "Tracking", "Maps", "Alerts"],
    icon: "Navigation",
  },

  // ─── RESTAURANTS & HOSPITALITY ──────────────────────────────
  {
    id: "restaurant-pos",
    slug: "restaurant-pos",
    nameAr: "نظام مطاعم متكامل مع POS",
    nameEn: "Complete Restaurant POS System",
    descAr:
      "نظام مطاعم شامل: POS, طاولات، مطبخ، مخزون، طلبات أونلاين، وولاء.",
    descEn:
      "Complete restaurant system: POS, tables, kitchen, inventory, online orders, and loyalty.",
    category: "hospitality",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Restaurant", "POS", "Kitchen", "Tables"],
    icon: "UtensilsCrossed",
    featured: true,
  },
  {
    id: "cafe-system",
    slug: "cafe-system",
    nameAr: "نظام إدارة كافيهات",
    nameEn: "Cafe Management System",
    descAr:
      "نظام مخصص للكافيهات: قائمة مشروبات، طلبات، كاشير، وولاء عملاء.",
    descEn:
      "Custom cafe system: beverage menu, orders, cashier, and customer loyalty.",
    category: "hospitality",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Cafe", "Beverages", "Cashier", "Loyalty"],
    icon: "Coffee",
  },
  {
    id: "qr-menu",
    slug: "qr-menu",
    nameAr: "نظام QR Menu إلكتروني",
    nameEn: "QR Menu System",
    descAr:
      "قائمة رقمية عبر QR Code مع طلب مباشر من الطاولة.",
    descEn:
      "Digital menu via QR code with direct table ordering.",
    category: "hospitality",
    priceMin: 50,
    priceMax: 200,
    tier: "quick",
    tags: ["QR", "Menu", "Digital", "Ordering"],
    icon: "QrCode",
  },
  {
    id: "online-ordering",
    slug: "online-ordering",
    nameAr: "نظام طلبات أونلاين",
    nameEn: "Online Ordering System",
    descAr:
      "منصة طلبات أونلاين للمطاعم: موقع، تطبيق، دفع، وتتبع.",
    descEn:
      "Online ordering platform for restaurants: website, app, payment, and tracking.",
    category: "hospitality",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Online", "Ordering", "Delivery", "Payment"],
    icon: "ShoppingBag",
  },

  // ─── HR & HUMAN RESOURCES ───────────────────────────────────
  {
    id: "hrms-system",
    slug: "hrms-system",
    nameAr: "نظام إدارة موارد بشرية متكامل",
    nameEn: "Complete HRMS System",
    descAr:
      "نظام HRMS شامل: موظفين، توظيف، حضور، إجازات، رواتب، أداء، وعقود.",
    descEn:
      "Complete HRMS: employees, recruitment, attendance, leaves, payroll, performance, and contracts.",
    category: "hr",
    priceMin: 250,
    priceMax: 1500,
    pricePlus: true,
    tier: "enterprise",
    tags: ["HRMS", "HR", "Payroll", "Attendance"],
    icon: "Users",
    featured: true,
  },
  {
    id: "recruitment-system",
    slug: "recruitment-system",
    nameAr: "نظام توظيف ومقابلات",
    nameEn: "Recruitment & Interview System",
    descAr:
      "نظام إدارة التوظيف: إعلانات وظائف، مرشحين، مقابلات، وتقييم.",
    descEn:
      "Recruitment management: job postings, candidates, interviews, and evaluation.",
    category: "hr",
    priceMin: 150,
    priceMax: 700,
    tier: "strong",
    tags: ["Recruitment", "Jobs", "Interviews", "Candidates"],
    icon: "UserPlus",
  },
  {
    id: "attendance-system",
    slug: "attendance-system",
    nameAr: "نظام حضور وانصراف وبصمة",
    nameEn: "Attendance & Biometric System",
    descAr:
      "نظام حضور آلي: بصمة، وجه، بطاقة، مع تقارير وإشعارات.",
    descEn:
      "Automated attendance: fingerprint, face, card, with reports and notifications.",
    category: "hr",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Attendance", "Biometric", "Fingerprint", "Face"],
    icon: "Fingerprint",
  },
  {
    id: "payroll-system",
    slug: "payroll-system",
    nameAr: "نظام رواتب وسلف",
    nameEn: "Payroll & Advances System",
    descAr:
      "نظام رواتب متكامل: رواتب أساسية، بدلات، خصومات، سلف، وتأمينات.",
    descEn:
      "Complete payroll system: base salary, allowances, deductions, advances, and insurance.",
    category: "hr",
    priceMin: 150,
    priceMax: 600,
    tier: "strong",
    tags: ["Payroll", "Salary", "Allowances", "Insurance"],
    icon: "Banknote",
  },
  {
    id: "performance-system",
    slug: "performance-system",
    nameAr: "نظام تقييم أداء",
    nameEn: "Performance Appraisal System",
    descAr:
      "نظام تقييم أداء الموظفين: مؤشرات، أهداف، تقييم 360، وتقارير.",
    descEn:
      "Employee performance appraisal: KPIs, objectives, 360 evaluation, and reports.",
    category: "hr",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Performance", "KPI", "Evaluation", "360"],
    icon: "Target",
  },

  // ─── ACCOUNTING & FINANCE ───────────────────────────────────
  {
    id: "accounting-system",
    slug: "accounting-system",
    nameAr: "نظام محاسبي كامل",
    nameEn: "Complete Accounting System",
    descAr:
      "نظام محاسبي شامل: قيود يومية، دفتر أستاذ، ميزان مراجعة، قوائم مالية.",
    descEn:
      "Complete accounting system: journal entries, general ledger, trial balance, financial statements.",
    category: "accounting",
    priceMin: 200,
    priceMax: 1200,
    tier: "strong",
    tags: ["Accounting", "Ledger", "Financial", "GL"],
    icon: "Calculator",
    featured: true,
  },
  {
    id: "invoicing-system",
    slug: "invoicing-system",
    nameAr: "نظام فواتير إلكترونية",
    nameEn: "Electronic Invoicing System",
    descAr:
      "نظام فواتير متوافق مع متطلبات الزكاة: فواتير ضريبية، إشعارات، وإبلاغ.",
    descEn:
      "E-invoicing system compliant with ZATCA: tax invoices, notes, and reporting.",
    category: "accounting",
    priceMin: 80,
    priceMax: 400,
    tier: "medium",
    tags: ["Invoicing", "E-invoice", "ZATCA", "Tax"],
    icon: "FileText",
  },
  {
    id: "expense-system",
    slug: "expense-system",
    nameAr: "نظام إدارة المصروفات",
    nameEn: "Expense Management System",
    descAr:
      "نظام تتبع وإدارة المصروفات: طلبات صرف، اعتماد، وتصنيف.",
    descEn:
      "Expense tracking and management: disbursement requests, approval, and categorization.",
    category: "accounting",
    priceMin: 80,
    priceMax: 350,
    tier: "medium",
    tags: ["Expenses", "Tracking", "Approval", "Budget"],
    icon: "Receipt",
  },
  {
    id: "tax-system",
    slug: "tax-system",
    nameAr: "نظام إدارة الضرائب",
    nameEn: "Tax Management System",
    descAr:
      "نظام حساب وإدارة الضرائب: VAT, ضريبة دخل، إقرارات.",
    descEn:
      "Tax calculation and management: VAT, income tax, returns.",
    category: "accounting",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Tax", "VAT", "Returns", "Compliance"],
    icon: "Percent",
  },

  // ─── ANALYTICS & DATA ───────────────────────────────────────
  {
    id: "bi-dashboard",
    slug: "bi-dashboard",
    nameAr: "نظام Business Intelligence",
    nameEn: "Business Intelligence System",
    descAr:
      "نظام BI متكامل: لوحات تفاعلية، تقارير متقدمة، ودمج مصادر بيانات.",
    descEn:
      "Complete BI system: interactive dashboards, advanced reports, and data source integration.",
    category: "analytics",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["BI", "Dashboards", "Reports", "Data"],
    icon: "BarChart3",
    featured: true,
  },
  {
    id: "powerbi-integration",
    slug: "powerbi-integration",
    nameAr: "دمج Power BI",
    nameEn: "Power BI Integration",
    descAr:
      "ربط وتصميم تقارير Power BI مخصصة مع مصادر بياناتك.",
    descEn:
      "Power BI integration and custom report design with your data sources.",
    category: "analytics",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Power BI", "Microsoft", "Reports", "Integration"],
    icon: "BarChart2",
  },
  {
    id: "kpi-tracking",
    slug: "kpi-tracking",
    nameAr: "نظام تتبع مؤشرات الأداء KPI",
    nameEn: "KPI Tracking System",
    descAr:
      "نظام متابعة مؤشرات الأداء: أهداف، قياس، تنبيهات، وتقارير.",
    descEn:
      "KPI monitoring system: objectives, measurement, alerts, and reports.",
    category: "analytics",
    priceMin: 100,
    priceMax: 400,
    tier: "strong",
    tags: ["KPI", "Metrics", "Tracking", "Goals"],
    icon: "Target",
  },
  {
    id: "data-warehouse",
    slug: "data-warehouse",
    nameAr: "مستودع بيانات Data Warehouse",
    nameEn: "Data Warehouse Solution",
    descAr:
      "بناء مستودع بيانات مركزي: ETL, تنقية، تحويل، وتكامل.",
    descEn:
      "Centralized data warehouse: ETL, cleaning, transformation, and integration.",
    category: "analytics",
    priceMin: 300,
    priceMax: 2000,
    pricePlus: true,
    tier: "enterprise",
    tags: ["Data Warehouse", "ETL", "Integration", "Big Data"],
    icon: "Database",
  },

  // ─── SEARCH & INDEXING ──────────────────────────────────────
  {
    id: "elasticsearch-integration",
    slug: "elasticsearch-integration",
    nameAr: "دمج Elasticsearch",
    nameEn: "Elasticsearch Integration",
    descAr:
      "تكامل Elasticsearch للبحث المتقدم: فلترة، faceted search, وتحليلات.",
    descEn:
      "Elasticsearch integration for advanced search: filtering, faceted search, and analytics.",
    category: "search",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Elasticsearch", "Search", "Analytics", "Filtering"],
    icon: "Search",
    featured: true,
  },
  {
    id: "semantic-search",
    slug: "semantic-search",
    nameAr: "بحث دلالي Semantic Search",
    nameEn: "Semantic Search System",
    descAr:
      "نظام بحث ذكي يفهم المعنى والسياق باستخدام AI وVector embeddings.",
    descEn:
      "Intelligent search that understands meaning and context using AI and vector embeddings.",
    category: "search",
    priceMin: 200,
    priceMax: 1000,
    tier: "strong",
    tags: ["Semantic", "AI", "Vector", "NLP"],
    icon: "Brain",
  },
  {
    id: "rag-system",
    slug: "rag-system",
    nameAr: "نظام RAG للبحث في المستندات",
    nameEn: "RAG Document Search System",
    descAr:
      "نظام Retrieval-Augmented Generation للبحث الذكي في المستندات والرد بالذكاء الاصطناعي.",
    descEn:
      "Retrieval-Augmented Generation system for intelligent document search and AI-powered responses.",
    category: "search",
    priceMin: 250,
    priceMax: 1500,
    pricePlus: true,
    tier: "enterprise",
    tags: ["RAG", "AI", "Documents", "GPT"],
    icon: "FileSearch",
  },
  {
    id: "vector-database",
    slug: "vector-database",
    nameAr: "قاعدة بيانات Vector",
    nameEn: "Vector Database Setup",
    descAr:
      "إعداد قواعد بيانات Vector للبحث الدلالي والـ AI: Pinecone, Milvus, Chroma.",
    descEn:
      "Vector database setup for semantic search and AI: Pinecone, Milvus, Chroma.",
    category: "search",
    priceMin: 150,
    priceMax: 600,
    tier: "strong",
    tags: ["Vector", "Pinecone", "Milvus", "AI"],
    icon: "Database",
  },

  // ─── HIGH PERFORMANCE ───────────────────────────────────────
  {
    id: "core-web-vitals",
    slug: "core-web-vitals",
    nameAr: "تحسين Core Web Vitals",
    nameEn: "Core Web Vitals Optimization",
    descAr:
      "تحسين مقاييس Google الأساسية: LCP, FID, CLS لضمان أداء ممتاز.",
    descEn:
      "Optimize Google's core metrics: LCP, FID, CLS for excellent performance.",
    category: "performance",
    priceMin: 100,
    priceMax: 400,
    tier: "strong",
    tags: ["Core Web Vitals", "Google", "Performance", "SEO"],
    icon: "Gauge",
    featured: true,
  },
  {
    id: "redis-caching",
    slug: "redis-caching",
    nameAr: "إعداد Redis Caching",
    nameEn: "Redis Caching Setup",
    descAr:
      "تكامل Redis للكاش المتقدم: session, query cache, وrate limiting.",
    descEn:
      "Redis integration for advanced caching: session, query cache, and rate limiting.",
    category: "performance",
    priceMin: 100,
    priceMax: 400,
    tier: "strong",
    tags: ["Redis", "Caching", "Session", "Performance"],
    icon: "Server",
  },
  {
    id: "queue-system",
    slug: "queue-system",
    nameAr: "نظام طابور ومهام خلفية",
    nameEn: "Queue & Background Jobs System",
    descAr:
      "نظام معالجة مهام غير متزامنة: queues, workers, وbackground jobs.",
    descEn:
      "Asynchronous task processing: queues, workers, and background jobs.",
    category: "performance",
    priceMin: 100,
    priceMax: 500,
    tier: "strong",
    tags: ["Queues", "Jobs", "Async", "Workers"],
    icon: "ListTodo",
  },
  {
    id: "load-balancing",
    slug: "load-balancing",
    nameAr: "توازن الحمل Load Balancing",
    nameEn: "Load Balancing Setup",
    descAr:
      "إعداد موازن حمل لتوزيع الطلبات على خوادم متعددة.",
    descEn:
      "Load balancer setup to distribute requests across multiple servers.",
    category: "performance",
    priceMin: 150,
    priceMax: 600,
    tier: "strong",
    tags: ["Load Balancing", "Scaling", "Nginx", "HAProxy"],
    icon: "Server",
  },

  // ─── CONSULTING & ANALYSIS ──────────────────────────────────
  {
    id: "system-analysis",
    slug: "system-analysis",
    nameAr: "تحليل الأنظمة والمتطلبات",
    nameEn: "System & Requirements Analysis",
    descAr:
      "تحليل شامل لاحتياجاتك التقنية وتحويلها إلى متطلبات واضحة.",
    descEn:
      "Comprehensive analysis of your technical needs and conversion to clear requirements.",
    category: "consulting",
    priceMin: 100,
    priceMax: 500,
    tier: "medium",
    tags: ["Analysis", "Requirements", "Planning", "Consulting"],
    icon: "Lightbulb",
    featured: true,
  },
  {
    id: "srs-documentation",
    slug: "srs-documentation",
    nameAr: "كتابة وثائق SRS وBRD",
    nameEn: "SRS & BRD Documentation",
    descAr:
      "إعداد وثائق متطلبات البرمجيات SRS ووثائق متطلبات الأعمال BRD.",
    descEn:
      "Prepare Software Requirements Specification (SRS) and Business Requirements Document (BRD).",
    category: "consulting",
    priceMin: 100,
    priceMax: 400,
    tier: "medium",
    tags: ["SRS", "BRD", "Documentation", "Requirements"],
    icon: "FileText",
  },
  {
    id: "architecture-design",
    slug: "architecture-design",
    nameAr: "تصميم هندسة البرمجيات",
    nameEn: "Software Architecture Design",
    descAr:
      "تصميم معمارية النظام: UML, ERD, DFD, وMicroservices architecture.",
    descEn:
      "System architecture design: UML, ERD, DFD, and Microservices architecture.",
    category: "consulting",
    priceMin: 150,
    priceMax: 800,
    tier: "strong",
    tags: ["Architecture", "UML", "ERD", "Microservices"],
    icon: "Blocks",
  },
  {
    id: "api-documentation",
    slug: "api-documentation",
    nameAr: "توثيق APIs تقني",
    nameEn: "Technical API Documentation",
    descAr:
      "كتابة توثيق API احترافي: Swagger, OpenAPI, وPostman collection.",
    descEn:
      "Professional API documentation: Swagger, OpenAPI, and Postman collection.",
    category: "consulting",
    priceMin: 80,
    priceMax: 300,
    tier: "medium",
    tags: ["API", "Swagger", "OpenAPI", "Documentation"],
    icon: "FileCode",
  },
  {
    id: "technical-consulting",
    slug: "technical-consulting",
    nameAr: "استشارات تقنية متخصصة",
    nameEn: "Technical Consulting Services",
    descAr:
      "استشارات في اختيار التقنيات، التحول الرقمي， وتحسين الأنظمة.",
    descEn:
      "Consulting on technology selection, digital transformation, and system optimization.",
    category: "consulting",
    priceMin: 80,
    priceMax: 400,
    tier: "medium",
    tags: ["Consulting", "Digital Transformation", "Technology", "Strategy"],
    icon: "Lightbulb",
  },
];

// Helper functions
export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((s) => s.category === categoryId);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getCategoryById(id: string): ServiceCategory | undefined {
  return categories.find((c) => c.id === id);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function searchServices(query: string): Service[] {
  const q = query.toLowerCase();
  return services.filter(
    (s) =>
      s.nameAr.includes(q) ||
      s.nameEn.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q))
  );
}
