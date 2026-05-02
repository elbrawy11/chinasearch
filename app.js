/* ChinaSearch V5.0 Refactor: extracted app logic */
const ICONS={
 grid:`<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
 list:`<svg class="ico" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>`,
 compact:`<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="4" width="5" height="5" rx="1"/><rect x="10" y="4" width="5" height="5" rx="1"/><rect x="17" y="4" width="4" height="5" rx="1"/><rect x="3" y="11" width="5" height="5" rx="1"/><rect x="10" y="11" width="5" height="5" rx="1"/><rect x="17" y="11" width="4" height="5" rx="1"/><rect x="3" y="18" width="5" height="2" rx="1"/><rect x="10" y="18" width="5" height="2" rx="1"/><rect x="17" y="18" width="4" height="2" rx="1"/></svg>`,
 compare:`<svg class="ico" viewBox="0 0 24 24"><path d="M7 7h13"/><path d="M17 4l3 3-3 3"/><path d="M17 17H4"/><path d="M7 14l-3 3 3 3"/></svg>`,
 star:`<svg class="ico" viewBox="0 0 24 24"><path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z"/></svg>`,
 money:`<svg class="ico" viewBox="0 0 24 24"><path d="M4 7h16v10H4z"/><path d="M8 12h.01"/><path d="M16 12h.01"/><path d="M12 9.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"/></svg>`,
 rocket:`<svg class="ico" viewBox="0 0 24 24"><path d="M5 19c2-1 3.5-1.2 5-1"/><path d="M14 4c3.5.5 5.5 2.5 6 6-2 2-4 3.5-6.5 4.5L9.5 10C10.5 7.8 12 5.8 14 4z"/><path d="M9.5 10L6 11l-2 4 5-1"/><path d="M13.5 14.5L13 20l4-2 1-3.5"/><circle cx="15" cy="9" r="1.5"/></svg>`,
 truck:`<svg class="ico" viewBox="0 0 24 24"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`,
 trend:`<svg class="ico" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 7-8"/><path d="M14 7h6v6"/></svg>`,
 quality:`<svg class="ico" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z"/><path d="M9 12l2 2 4-4"/></svg>`,
 free:`<svg class="ico" viewBox="0 0 24 24"><path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 7v13"/><path d="M12 7H8.5a2.5 2.5 0 1 1 2.1-3.8C11.2 4 12 5.5 12 7z"/><path d="M12 7h3.5a2.5 2.5 0 1 0-2.1-3.8C12.8 4 12 5.5 12 7z"/></svg>`
};
function icon(name){return ICONS[name]||""}

const SUPPORTED_COUNTRIES={
 KW:{region:"Middle East",countryAr:"الكويت",countryEn:"Kuwait",currency:"KWD",symbol:"KD",rate:.31,lang:"ar",flag:"🇰🇼"},
 SA:{region:"Middle East",countryAr:"السعودية",countryEn:"Saudi Arabia",currency:"SAR",symbol:"ر.س",rate:3.75,lang:"ar",flag:"🇸🇦"},
 AE:{region:"Middle East",countryAr:"الإمارات",countryEn:"UAE",currency:"AED",symbol:"د.إ",rate:3.67,lang:"ar",flag:"🇦🇪"},
 EG:{region:"North Africa",countryAr:"مصر",countryEn:"Egypt",currency:"EGP",symbol:"ج.م",rate:48,lang:"ar",flag:"🇪🇬"},
 MA:{region:"North Africa",countryAr:"المغرب",countryEn:"Morocco",currency:"MAD",symbol:"د.م",rate:10,lang:"ar",flag:"🇲🇦"},
 DZ:{region:"North Africa",countryAr:"الجزائر",countryEn:"Algeria",currency:"DZD",symbol:"دج",rate:135,lang:"ar",flag:"🇩🇿"},
 DE:{region:"Europe",countryAr:"ألمانيا",countryEn:"Germany",currency:"EUR",symbol:"€",rate:.92,lang:"de",flag:"🇩🇪"},
 FR:{region:"Europe",countryAr:"فرنسا",countryEn:"France",currency:"EUR",symbol:"€",rate:.92,lang:"fr",flag:"🇫🇷"},
 ES:{region:"Europe",countryAr:"إسبانيا",countryEn:"Spain",currency:"EUR",symbol:"€",rate:.92,lang:"es",flag:"🇪🇸"},
 GB:{region:"Europe",countryAr:"بريطانيا",countryEn:"UK",currency:"GBP",symbol:"£",rate:.79,lang:"en",flag:"🇬🇧"},
 RU:{region:"Russia",countryAr:"روسيا",countryEn:"Russia",currency:"RUB",symbol:"₽",rate:92,lang:"ru",flag:"🇷🇺"},
 BR:{region:"Latin America",countryAr:"البرازيل",countryEn:"Brazil",currency:"BRL",symbol:"R$",rate:5.1,lang:"pt",flag:"🇧🇷"},
 MX:{region:"Latin America",countryAr:"المكسيك",countryEn:"Mexico",currency:"MXN",symbol:"MX$",rate:17,lang:"es",flag:"🇲🇽"},
 US:{region:"USA",countryAr:"أمريكا",countryEn:"United States",currency:"USD",symbol:"$",rate:1,lang:"en",flag:"🇺🇸"}
};
const platformBase={
 aliexpress:{name:"AliExpress",color:"#ff4747",param:"aff_id",commission:8,enabled:true,priority:1,regions:["Middle East","North Africa","Europe","Russia","Latin America","USA"]},
 temu:{name:"Temu",color:"#ff6900",param:"ref",commission:7,enabled:true,priority:2,regions:["Middle East","Europe","Latin America","USA"]},
 shein:{name:"SHEIN",color:"#111827",param:"affiliate",commission:9,enabled:true,priority:3,regions:["Middle East","North Africa","Europe","USA"]},
 dhgate:{name:"DHgate",color:"#0066cc",param:"f",commission:6,enabled:true,priority:4,regions:["Europe","Russia","Latin America","USA","Middle East"]},
 banggood:{name:"Banggood",color:"#e4002b",param:"p",commission:7,enabled:true,priority:5,regions:["Middle East","Europe","Russia","Latin America","USA"]}
};
let platforms=JSON.parse(localStorage.getItem("platforms")||"null")||platformBase;
const T={
 ar:{home:"الرئيسية",deals:"العروض",platforms:"المنصات",how:"الشرح",faq:"FAQ",why:"لماذا نحن",start:"ابدأ",title:"قارن أسعار منتجات الصين قبل ما تشتري",accent:"اختيار أذكى حسب بلدك",sub:"نقارن لك بين AliExpress و Temu و SHEIN و DHgate و Banggood بناءً على بلدك، لغتك، عملتك، سرعة الشحن، التقييمات، ونقدم لك أفضل صفقة تلقائيًا.",trusted:"يثق بنا أكثر من 10,000 متسوق ذكي",products:"منتجات",markets:"منصات",updated:"تحديث يومي",search:"ابحث عن المنتج الذي تريده",searchBtn:"بحث",geoTitle:"نخصص النتائج تلقائيًا لتناسب منطقتك",geoText:"الأسعار، العملة، اللغة، الشحن، وترتيب المنتجات تتغير حسب بلدك ويتم تحديث ترشيحات البداية تلقائيًا.",country:"البلد",language:"اللغة",currency:"العملة",bestToday:"أفضل صفقة لك اليوم في",claim:"احصل على الصفقة الآن",benefit1:"مقارنة السعر فورًا",benefit1s:"نقارن آلاف العروض في ثانية",benefit2:"أسرع شحن حسب بلدك",benefit2s:"نختار أسرع طرق الشحن لك",benefit3:"ترتيب ذكي للعروض",benefit3s:"يعتمد على بلدك وتفضيلاتك",benefit4:"شحن مجاني عند التوفر",benefit4s:"نبرز العروض التي تشحن مجانًا",bestDeal:"أفضل صفقة لك اليوم",bestDealSub:"اختيار تلقائي حسب بلدك وعملتك وسرعة الشحن وتقييم المنتج.",whyChosen:"لماذا اخترناه لك؟",rankReason:"يجمع بين سعر مناسب، تقييم قوي، وشحن جيد لمنطقتك.",dealScore:"درجة الصفقة",filter:"الترتيب",best:"الأفضل",cheap:"الأرخص",rating:"أعلى تقييم",fast:"أسرع شحن",free:"شحن مجاني",popular:"الأكثر طلبًا",bestChoice:"أفضل اختيار",cheapest:"الأرخص",fastest:"الأسرع",freeShipping:"شحن مجاني",save:"توفر",avg:"مقارنة بمتوسط السعر",popularRegion:"اختيار رائج في منطقتك",limited:"كمية محدودة",get:"🔥 احصل على أفضل سعر الآن",days:"أيام",resultsNote:"تتغير النتائج والأسعار تلقائيًا حسب بلدك، عملتك، وسرعة الشحن المتاحة.",whyTitle:"لماذا ChinaSearch؟",whySub:"منصة مصممة لتقليل وقت البحث وإظهار أفضل اختيار بسرعة.",w1:"موثوق وشفاف",w1p:"نعرض التقييمات والسعر والشحن بوضوح.",w2:"توفير أكثر",w2p:"نقارن العروض ونبرز الأرخص والأفضل.",w3:"نتائج فورية",w3p:"بحث سريع وترتيب ذكي في نفس الصفحة.",w4:"مصمم لكل منطقة",w4p:"يدعم الشرق الأوسط، أوروبا، روسيا، شمال أفريقيا، وأمريكا اللاتينية.",platformTitle:"المنصات المدعومة",platformSub:"نعرض مقارنة عامة بين المنصات المتاحة حسب السعر، الشحن، التقييم، ومناسبة الدولة.",bestPlatform:"أفضل منصة لبلدك اليوم",bestPlatformSub:"نقارن المنصات حسب بلدك، سرعة الشحن، تقييم المنتجات، والأسعار المتوسطة.",bestPlatformWhy:"لماذا هذه المنصة؟",bestPlatformCta:"شاهد أفضل عروضها",compareTitle:"مقارنة عامة بين المنصات",exitTitle:"قبل ما تخرج… جرّب مقارنة منتج واحد",exitText:"قد تجد سعرًا أقل أو شحنًا أسرع خلال 5 ثواني فقط.",exitBtn:"جرّب الآن",exitClose:"لاحقًا",admin:"لوحة التحكم",aff:"معرّفات الأفلييت",mode:"وضع البيانات",mock:"بيانات تجريبية",live:"جاهز للـ API",stats:"الإحصائيات",addPlatform:"إضافة منصة",newPlatform:"اسم منصة جديدة",commission:"العمولة",priority:"الأولوية",enabled:"مفعلة",disabled:"متوقفة",howTitle:"كيف يعمل؟",s1:"ابحث",s1p:"اكتب المنتج أو الفئة التي تريدها.",s2:"نقارن تلقائيًا",s2p:"السعر، الشحن، التقييم، والشحن المجاني.",s3:"اختر الأفضل",s3p:"انتقل للمتجر الأنسب عبر رابط الأفلييت.",q1:"هل ChinaSearch متجر؟",a1:"لا، هو منصة اكتشاف ومقارنة. الشراء يتم من المتاجر الأصلية.",q2:"هل تختلف النتائج حسب الدولة؟",a2:"نعم، العملة والشحن والترتيب تتغير حسب الدولة والمنطقة.",q3:"هل يمكن تحديث المنصات لاحقًا؟",a3:"نعم، إدارة المنصات تتم من لوحة إدارة خاصة وغير ظاهرة للمستخدم العادي.",q4:"هل يوجد ذكاء اصطناعي؟",a4:"النسخة الحالية AI-ready وتعرض شرحًا ذكيًا للاختيار، ويمكن ربط API لاحقًا.",rewardsTitle:"ChinaSearch Rewards",
rewardsSub:"وفر مرتين: مرة باختيار أفضل سعر، ومرة بجمع نقاط عند الشراء من خلال روابطنا.",
rewardStep1:"ابحث وقارن",
rewardStep2:"اشتري من الرابط",
rewardStep3:"اجمع نقاط",
wallet:"رصيدك المتوقع",
level:"مستواك",
nextLevel:"باقي 40 نقطة للوصول إلى Bronze Cashback",
estimated:"مكافآت تقديرية",
cashbackNote:"المكافآت تقديرية ويتم تأكيدها بعد اعتماد الطلب من الشريك.",
liveFeed:"تحديثات مباشرة",
dealScoreLabel:"Score",
points:"نقطة",
rewardYouMayEarn:"قد تكسب",
viewMode:"طريقة العرض",cards:"مربعات",list:"قائمة",compact:"مضغوط",compare:"مقارنة",
platformFilter:"المنصة",allPlatforms:"كل المنصات",brandFilter:"البراند",allBrands:"كل البراندات",
advancedSearch:"بحث متقدم",intentCheap:"أرخص سعر",intentFast:"أسرع شحن",intentFree:"شحن مجاني",intentQuality:"أفضل جودة",
quickView:"عرض سريع",goOffer:"اذهب للعرض",copyLink:"انسخ الرابط",similar:"قارن بمنتجات مشابهة",
aiAssistant:"مساعد ChinaSearch الذكي",aiQuick:"بناءً على بلدك وفلترك الحالي، هذا المنتج مرشح لأنه يجمع بين السعر والشحن والتقييم.",
selectedCompare:"تم اختيار منتجات للمقارنة",compareNow:"قارن الآن",clear:"مسح",chooseCompare:"اختيار للمقارنة",
heroPunch:"قبل ما تشتري من الصين، قارن هنا أولًا.",
heroBetter:"اعرف الأرخص، الأسرع شحنًا، الأعلى تقييمًا، والأفضل لبلدك خلال ثواني.",
ex1:"سماعات رخيصة",ex2:"ساعة ذكية",ex3:"شحن مجاني",ex4:"منتجات SHEIN",ex5:"أفضل AliExpress",ex6:"إكسسوارات موبايل",
catElectronics:"إلكترونيات",catFashion:"أزياء",catBeauty:"جمال",catHome:"منزل",catAuto:"سيارات",catGadgets:"أدوات ذكية",
bestMatchTitle:"أفضل نتيجة حسب بلدك وفلترك الحالي",
bestMatchSub:"نرتب النتائج الآن بناءً على الدولة، العملة، المنصة، البراند، والسعر/الشحن/التقييم.",
bestMatchCheap:"نعرض لك الأرخص أولًا مع الحفاظ على تقييم مناسب.",
bestMatchFast:"نعرض لك الأسرع شحنًا حسب بلدك.",
bestMatchFree:"نعرض لك عروض الشحن المجاني أولًا.",
bestMatchQuality:"نعرض لك الأعلى تقييمًا وجودة أولًا.",
redirectTrust:"سيتم تحويلك إلى المتجر الأصلي لإتمام الشراء",
quickWhy:"لماذا هذا العرض؟",qr1:"أرخص من المتوسط",qr2:"شحن مناسب لمنطقتك",qr3:"تقييم قوي مقارنة بالبدائل",qr4:"مكافآت تقديرية عند الشراء",
compareBetter:"قارن هذا المنتج ببدائل أرخص أو أسرع",
aiSummaryTitle:"تحليل سريع من ChinaSearch AI",aiSummaryDefault:"حسب بلدك وفلترك الحالي، نرشح لك أفضل المنتجات التي توازن بين السعر، الشحن، التقييم، والمكافآت.",watchPrice:"راقب السعر",watched:"تمت المراقبة",mySmartList:"قائمتي الذكية",viewedProducts:"منتجات شاهدتها",watchedProducts:"منتجات تراقبها",recentSearches:"آخر عمليات البحث",comparisonDrawer:"مقارنة المنتجات",close:"إغلاق",priceConfidence:"ثقة السعر",platformTrust:"ثقة المنصة",aiBest:"الأفضل حسب AI",adminApiStatus:"حالة النظام",mockActive:"Mock Data نشط",lastSync:"آخر مزامنة",cacheReady:"الكاش جاهز",affiliateTester:"اختبار روابط الأفلييت",reasonCheap:"أرخص من المتوسط",reasonFast:"شحن مناسب",reasonRating:"تقييم قوي",reasonRewards:"مكافآت متاحة",resetFilters:"إعادة ضبط الفلاتر",showSmartList:"عرض القائمة",hideSmartList:"إخفاء القائمة",marketAverage:"متوسط السوق",yourSaving:"توفيرك",rewardEstimate:"المكافأة المتوقعة",trustNoteFull:"ChinaSearch لا يبيع المنتجات مباشرة — سنحولك إلى المتجر الأصلي لإتمام الشراء.",dealPassport:"جواز الصفقة",passportPrice:"السعر",passportShipping:"الشحن",passportRating:"التقييم",passportReward:"المكافأة",excellent:"ممتاز",good:"جيد",high:"عالية",available:"متاحة",platformWinner:"المنصة الفائزة لهذا البحث",platformWinnerReason:"اخترناها لأنها الأفضل توازنًا بين السعر، الشحن، التقييم، والمكافآت حسب بلدك الحالي.",saveSearch:"احفظ هذا البحث",savedSearch:"تم حفظ البحث",filters:"الفلاتر",mobileFilters:"فلترة النتائج",applyFilters:"تطبيق الفلاتر",trustTitle:"الثقة والشفافية",trust1:"لا نبيع مباشرة",trust1p:"نحوّلك إلى المتجر الأصلي.",trust2:"روابط أفلييت",trust2p:"قد نحصل على عمولة بدون زيادة السعر.",trust3:"درجة الصفقة",trust3p:"تحسب من السعر والشحن والتقييم.",trust4:"مكافآت تقديرية",trust4p:"تتأكد بعد اعتماد الشريك.",proAdmin:"لوحة التحكم الاحترافية",proAdminSub:"إدارة المنصات، الأفلييت، البيانات، الترتيب، والتحليلات بعيدًا عن واجهة الزائر.",backToSite:"العودة للموقع",adminAccess:"رابط الإدارة",adminAccessText:"افتح لوحة التحكم من خلال ?admin=1 أو #admin فقط. الزائر العادي لن يرى أدوات الإدارة.",clicks:"الضغطات",activePlatforms:"منصات مفعلة",apiStatus:"حالة API",cacheStatus:"الكاش",liveReady:"جاهز للربط",bestForCountry:"الأفضل لبلدك",howScoreWorks:"كيف نحسب Deal Score؟",scoreIntro:"نحسب درجة الصفقة بناءً على عوامل تساعد المستخدم على اتخاذ قرار أسرع وأكثر ثقة.",factorPrice:"السعر",factorShipping:"الشحن",factorRating:"التقييم",factorPopularity:"الشعبية",factorRegion:"مناسبة الدولة",quickCompare:"مقارنة سريعة",countryFit:"مناسب لبلدك",scoreRing:"درجة ذكية",notifications:"الإشعارات",welcomeBack:"مرحبًا بعودتك",welcomeBackText:"جهزنا لك عروضًا مبنية على آخر بحث واهتماماتك السابقة.",continueLastSearch:"استكمال آخر بحث",recommendedForYou:"مقترح لك",basedOnInterests:"بناءً على اهتماماتك",yourInterests:"اهتماماتك",followThisSearch:"تابع هذا البحث",followingSearch:"يتم متابعة البحث",emailAlerts:"تنبيهات السعر على البريد",emailPlaceholder:"اكتب بريدك الإلكتروني",activateEmailAlerts:"تفعيل تنبيهات البريد",emailDemoNote:"واجهة جاهزة — الإرسال الحقيقي يحتاج ربط Backend مثل Supabase + Resend/Brevo.",pushAlerts:"تنبيهات الموبايل",activatePush:"فعّل تنبيهات الصفقات",pushDemoNote:"واجهة تجريبية — التنبيهات الحقيقية تحتاج OneSignal أو Firebase.",priceDropped:"انخفض سعر منتج تتابعه",freeShippingAppeared:"ظهر شحن مجاني لبحثك الأخير",betterPlatformToday:"منصة أفضل متاحة اليوم",similarDealFound:"وجدنا بديلًا مشابهًا أرخص",savedInterest:"تم حفظ اهتمامك",about:"من نحن",howWorks:"كيف يعمل الموقع",affiliateDisclosure:"توضيح الأفلييت",privacy:"سياسة الخصوصية",terms:"شروط الاستخدام",contact:"تواصل معنا",legalUpdated:"آخر تحديث",backHome:"العودة للموقع",trustPages:"صفحات الثقة",contactName:"الاسم",contactEmail:"البريد الإلكتروني",contactMessage:"رسالتك",sendMessage:"إرسال الرسالة",contactDemo:"نموذج تجريبي الآن — سنربطه بالبريد أو Backend لاحقًا.",footer:"منصة ذكية تساعدك في العثور على أفضل عروض المنتجات من الصين بسهولة وذكاء."},
 en:{home:"Home",deals:"Deals",platforms:"Platforms",how:"How",faq:"FAQ",why:"Why us",start:"Start searching",title:"Find the best China deals in one place",accent:"Smart picks by country",sub:"Compare AliExpress, Temu, SHEIN, DHgate and Banggood based on your country, language, currency, shipping speed, ratings and best-deal logic.",trusted:"Trusted by 10,000+ smart shoppers",products:"Products",markets:"Marketplaces",updated:"Updated daily",search:"Search for any product",searchBtn:"Search",geoTitle:"Results adapt automatically to your region",geoText:"Prices, currency, language, shipping and ranking change by country, and the hero picks adapt on first visit.",country:"Country",language:"Language",currency:"Currency",bestToday:"Best deal for you today in",claim:"Claim best deal now",benefit1:"Instant price comparison",benefit1s:"Compare thousands of offers fast",benefit2:"Fastest shipping by country",benefit2s:"Prioritizes shipping routes for you",benefit3:"Smart deal ranking",benefit3s:"Based on region and preferences",benefit4:"Free shipping when available",benefit4s:"Highlights free-shipping offers",bestDeal:"Best Deal For You Today",bestDealSub:"Auto-picked by country, currency, shipping speed and product rating.",whyChosen:"Why this pick?",rankReason:"It balances a fair price, strong rating and region-friendly shipping.",dealScore:"Deal Score",filter:"Sort",best:"Best",cheap:"Cheapest",rating:"Highest rating",fast:"Fastest shipping",free:"Free shipping",popular:"Most popular",bestChoice:"Best Choice",cheapest:"Cheapest",fastest:"Fastest",freeShipping:"Free Shipping",save:"You save",avg:"vs average price",popularRegion:"Popular in your region",limited:"Limited stock",get:"🔥 Get Best Price Now",days:"days",resultsNote:"Results and prices change automatically by your country, currency and available shipping speed.",whyTitle:"Why ChinaSearch?",whySub:"Built to reduce search time and surface the best choice quickly.",w1:"Transparent",w1p:"Ratings, prices and shipping are clear.",w2:"Save more",w2p:"Compare offers and highlight the cheapest and best.",w3:"Instant results",w3p:"Fast search and smart ranking in one page.",w4:"Region-ready",w4p:"Supports Middle East, Europe, Russia, North Africa and Latin America.",platformTitle:"Manage and compare platforms",platformSub:"Enable, disable or prioritize platforms for revenue and results.",bestPlatform:"Best platform for your country today",bestPlatformSub:"We compare platforms by your country, shipping speed, product ratings and average prices.",bestPlatformWhy:"Why this platform?",bestPlatformCta:"See its best deals",compareTitle:"Platform vs Platform",exitTitle:"Before you leave — compare one product",exitText:"You may find a lower price or faster shipping in 5 seconds.",exitBtn:"Try now",exitClose:"Later",admin:"Admin",aff:"Affiliate IDs",mode:"Data Mode",mock:"Mock Data",live:"API Ready",stats:"Stats",addPlatform:"Add platform",newPlatform:"New platform name",commission:"Commission",priority:"Priority",enabled:"Enabled",disabled:"Disabled",howTitle:"How it works",s1:"Search",s1p:"Type the product or category you want.",s2:"Auto-compare",s2p:"Price, shipping, rating and free shipping.",s3:"Choose best",s3p:"Go to the best marketplace via affiliate link.",q1:"Is ChinaSearch a store?",a1:"No, it is a discovery and comparison platform. Purchases happen on original stores.",q2:"Do results differ by country?",a2:"Yes, currency, shipping and ranking adapt by country and region.",q3:"Can I add or remove a platform?",a3:"Yes, the admin panel lets you enable, disable or add platforms.",q4:"Is there AI?",a4:"This version is AI-ready and shows smart explanation text. A real API can be connected later.",rewardsTitle:"ChinaSearch Rewards",
rewardsSub:"Save twice: find the best deal and collect points when buying through our links.",
rewardStep1:"Search & compare",
rewardStep2:"Buy through link",
rewardStep3:"Collect points",
wallet:"Estimated balance",
level:"Your level",
nextLevel:"40 points left to Bronze Cashback",
estimated:"Estimated rewards",
cashbackNote:"Rewards are estimated and confirmed after partner approval.",
liveFeed:"Live deal feed",
dealScoreLabel:"Score",
points:"points",
rewardYouMayEarn:"You may earn",
viewMode:"View mode",cards:"Cards",list:"List",compact:"Compact",compare:"Compare",
platformFilter:"Platform",allPlatforms:"All platforms",brandFilter:"Brand",allBrands:"All brands",
advancedSearch:"Advanced search",intentCheap:"Lowest price",intentFast:"Fast shipping",intentFree:"Free shipping",intentQuality:"Best quality",
quickView:"Quick view",goOffer:"Go to offer",copyLink:"Copy link",similar:"Compare similar",
aiAssistant:"ChinaSearch AI assistant",aiQuick:"Based on your country and filters, this product is suggested because it balances price, shipping and rating.",
selectedCompare:"Products selected for comparison",compareNow:"Compare now",clear:"Clear",chooseCompare:"Compare",
heroPunch:"Before you buy from China, compare here first.",
heroBetter:"Find the cheapest, fastest-shipping, highest-rated and best option for your country in seconds.",
ex1:"Cheap earbuds",ex2:"Smart watch",ex3:"Free shipping",ex4:"SHEIN products",ex5:"Best AliExpress",ex6:"Phone accessories",
catElectronics:"Electronics",catFashion:"Fashion",catBeauty:"Beauty",catHome:"Home",catAuto:"Car accessories",catGadgets:"Gadgets",
bestMatchTitle:"Best match for your country and current filters",
bestMatchSub:"Results are ranked by country, currency, platform, brand, price, shipping and rating.",
bestMatchCheap:"Showing lowest prices first while keeping decent ratings.",
bestMatchFast:"Showing fastest shipping for your country first.",
bestMatchFree:"Showing free-shipping offers first.",
bestMatchQuality:"Showing highest-rated and quality options first.",
redirectTrust:"You will be redirected to the original marketplace to complete purchase",
quickWhy:"Why this offer?",qr1:"Cheaper than average",qr2:"Region-friendly shipping",qr3:"Strong rating vs alternatives",qr4:"Estimated rewards on purchase",
compareBetter:"Compare this product with cheaper or faster alternatives",
aiSummaryTitle:"Quick analysis from ChinaSearch AI",aiSummaryDefault:"Based on your country and current filters, we recommend products that balance price, shipping, rating and rewards.",watchPrice:"Watch price",watched:"Watching",mySmartList:"My Smart List",viewedProducts:"Viewed products",watchedProducts:"Watched products",recentSearches:"Recent searches",comparisonDrawer:"Product comparison",close:"Close",priceConfidence:"Price confidence",platformTrust:"Platform trust",aiBest:"AI best",adminApiStatus:"System status",mockActive:"Mock Data active",lastSync:"Last sync",cacheReady:"Cache ready",affiliateTester:"Affiliate link tester",reasonCheap:"Below average",reasonFast:"Good shipping",reasonRating:"Strong rating",reasonRewards:"Rewards available",resetFilters:"Reset filters",showSmartList:"Show list",hideSmartList:"Hide list",marketAverage:"Market average",yourSaving:"Your saving",rewardEstimate:"Estimated reward",trustNoteFull:"ChinaSearch does not sell directly — we redirect you to the original marketplace to complete purchase.",dealPassport:"Deal Passport",passportPrice:"Price",passportShipping:"Shipping",passportRating:"Rating",passportReward:"Reward",excellent:"Excellent",good:"Good",high:"High",available:"Available",platformWinner:"Platform winner for this search",platformWinnerReason:"Chosen because it balances price, shipping, rating and rewards for your current country.",saveSearch:"Save this search",savedSearch:"Search saved",filters:"Filters",mobileFilters:"Filter results",applyFilters:"Apply filters",trustTitle:"Trust & transparency",trust1:"We do not sell directly",trust1p:"We redirect you to the original marketplace.",trust2:"Affiliate links",trust2p:"We may earn commission without increasing price.",trust3:"Deal Score",trust3p:"Calculated from price, shipping and rating.",trust4:"Estimated rewards",trust4p:"Confirmed after partner approval.",proAdmin:"Pro Admin Dashboard",proAdminSub:"Manage platforms, affiliate IDs, data mode, ranking and analytics away from the visitor interface.",backToSite:"Back to site",adminAccess:"Admin access",adminAccessText:"Open admin only through ?admin=1 or #admin. Normal visitors will not see admin tools.",clicks:"Clicks",activePlatforms:"Active platforms",apiStatus:"API status",cacheStatus:"Cache",liveReady:"Ready to connect",bestForCountry:"Best for your country",howScoreWorks:"How Deal Score works",scoreIntro:"Deal Score is calculated from factors that help shoppers decide faster and more confidently.",factorPrice:"Price",factorShipping:"Shipping",factorRating:"Rating",factorPopularity:"Popularity",factorRegion:"Country fit",quickCompare:"Quick comparison",countryFit:"Country fit",scoreRing:"Smart score",notifications:"Notifications",welcomeBack:"Welcome back",welcomeBackText:"We prepared deals based on your last searches and interests.",continueLastSearch:"Continue last search",recommendedForYou:"Recommended for you",basedOnInterests:"Based on your interests",yourInterests:"Your interests",followThisSearch:"Follow this search",followingSearch:"Following search",emailAlerts:"Email price alerts",emailPlaceholder:"Enter your email",activateEmailAlerts:"Activate email alerts",emailDemoNote:"UI ready — real sending needs Backend such as Supabase + Resend/Brevo.",pushAlerts:"Mobile push alerts",activatePush:"Enable deal alerts",pushDemoNote:"Demo UI — real push needs OneSignal or Firebase.",priceDropped:"A watched product dropped in price",freeShippingAppeared:"Free shipping appeared for your last search",betterPlatformToday:"A better platform is available today",similarDealFound:"We found a cheaper similar deal",savedInterest:"Interest saved",about:"About us",howWorks:"How it works",affiliateDisclosure:"Affiliate disclosure",privacy:"Privacy policy",terms:"Terms of use",contact:"Contact",legalUpdated:"Last updated",backHome:"Back to site",trustPages:"Trust pages",contactName:"Name",contactEmail:"Email",contactMessage:"Your message",sendMessage:"Send message",contactDemo:"Demo form for now — we will connect it to email or backend later.",footer:"A smart platform to help shoppers find the best China product deals with less effort."}
,
 fr:{home:"Accueil",deals:"Offres",platforms:"Plateformes",how:"Comment ça marche",faq:"FAQ",why:"Pourquoi nous",start:"Commencer",title:"Trouvez les meilleures offres chinoises au même endroit",accent:"Sélection intelligente par pays",sub:"Comparez AliExpress, Temu, SHEIN, DHgate et Banggood selon votre pays, langue, devise, livraison, notes et logique de meilleure offre.",trusted:"Plus de 10 000 acheteurs intelligents nous font confiance",products:"Produits",markets:"Plateformes",updated:"Mis à jour chaque jour",search:"Recherchez un produit",searchBtn:"Rechercher",geoTitle:"Les résultats s’adaptent à votre région",geoText:"Prix, devise, langue, livraison et classement changent selon le pays.",country:"Pays",language:"Langue",currency:"Devise",bestToday:"Meilleure offre aujourd’hui pour",claim:"Obtenir l’offre",benefit1:"Comparaison instantanée",benefit1s:"Comparez des milliers d’offres rapidement",benefit2:"Livraison rapide par pays",benefit2s:"Priorité aux itinéraires adaptés",benefit3:"Classement intelligent",benefit3s:"Selon région et préférences",benefit4:"Livraison gratuite si disponible",benefit4s:"Met en avant les offres gratuites",bestDeal:"Meilleure offre du jour",bestDealSub:"Choisie automatiquement selon pays, devise, livraison et note.",whyChosen:"Pourquoi ce choix ?",rankReason:"Bon équilibre entre prix, note et livraison adaptée.",dealScore:"Score de l’offre",filter:"Trier",best:"Meilleur",cheap:"Moins cher",rating:"Meilleure note",fast:"Livraison rapide",free:"Livraison gratuite",popular:"Populaire",bestChoice:"Meilleur choix",cheapest:"Moins cher",fastest:"Plus rapide",freeShipping:"Livraison gratuite",save:"Vous économisez",avg:"vs prix moyen",popularRegion:"Populaire dans votre région",limited:"Stock limité",get:"🔥 Obtenir le meilleur prix",days:"jours",resultsNote:"Les résultats changent selon votre pays, devise et livraison disponible.",whyTitle:"Pourquoi ChinaSearch ?",whySub:"Conçu pour réduire le temps de recherche et trouver le meilleur choix.",w1:"Transparent",w1p:"Notes, prix et livraison sont clairs.",w2:"Économisez plus",w2p:"Nous comparons et mettons en avant les meilleures offres.",w3:"Résultats rapides",w3p:"Recherche et classement intelligent sur une page.",w4:"Adapté aux régions",w4p:"Moyen-Orient, Europe, Russie, Afrique du Nord et Amérique latine.",platformTitle:"Gérer et comparer les plateformes",platformSub:"Activez, désactivez ou priorisez les plateformes.",bestPlatform:"Meilleure plateforme pour votre pays",bestPlatformSub:"Comparaison selon pays, livraison, notes et prix moyens.",bestPlatformWhy:"Pourquoi cette plateforme ?",bestPlatformCta:"Voir ses meilleures offres",compareTitle:"Plateforme vs plateforme",exitTitle:"Avant de partir — comparez un produit",exitText:"Vous pouvez trouver un prix plus bas ou une livraison plus rapide en 5 secondes.",exitBtn:"Essayer",exitClose:"Plus tard",admin:"Admin",aff:"IDs affiliés",mode:"Mode données",mock:"Données démo",live:"API prête",stats:"Statistiques",addPlatform:"Ajouter plateforme",newPlatform:"Nom de plateforme",commission:"Commission",priority:"Priorité",enabled:"Activée",disabled:"Désactivée",howTitle:"Comment ça marche",s1:"Rechercher",s1p:"Tapez le produit ou la catégorie.",s2:"Comparer",s2p:"Prix, livraison, note et livraison gratuite.",s3:"Choisir",s3p:"Allez vers la meilleure marketplace.",q1:"ChinaSearch est-il une boutique ?",a1:"Non, c’est une plateforme de découverte et comparaison.",q2:"Les résultats changent-ils selon le pays ?",a2:"Oui, devise, livraison et classement changent selon le pays.",q3:"Peut-on ajouter ou retirer une plateforme ?",a3:"Oui, via le panneau admin.",q4:"Y a-t-il de l’IA ?",a4:"Cette version est prête pour l’IA avec explications intelligentes.",rewardsTitle:"ChinaSearch Rewards",rewardsSub:"Économisez deux fois : meilleure offre + points via nos liens.",rewardStep1:"Rechercher",rewardStep2:"Acheter via lien",rewardStep3:"Collecter points",wallet:"Solde estimé",level:"Niveau",nextLevel:"40 points avant Bronze Cashback",estimated:"Récompenses estimées",cashbackNote:"Récompenses confirmées après validation partenaire.",liveFeed:"Flux offres live",dealScoreLabel:"Score",points:"points",rewardYouMayEarn:"Vous pouvez gagner",viewMode:"Vue",cards:"Cartes",list:"Liste",compact:"Compact",compare:"Comparer",platformFilter:"Plateforme",allPlatforms:"Toutes",brandFilter:"Marque",allBrands:"Toutes marques",advancedSearch:"Recherche avancée",intentCheap:"Prix bas",intentFast:"Livraison rapide",intentFree:"Livraison gratuite",intentQuality:"Qualité",quickView:"Vue rapide",goOffer:"Voir l’offre",copyLink:"Copier lien",similar:"Comparer similaire",aiAssistant:"Assistant IA ChinaSearch",aiQuick:"Selon votre pays et filtres, ce produit équilibre prix, livraison et note.",selectedCompare:"Produits sélectionnés",compareNow:"Comparer",clear:"Effacer",chooseCompare:"Comparer",heroPunch:"Avant d’acheter en Chine, comparez ici.",heroBetter:"Trouvez le moins cher, le plus rapide, le mieux noté et le meilleur pour votre pays.",ex1:"Écouteurs pas chers",ex2:"Montre connectée",ex3:"Livraison gratuite",ex4:"Produits SHEIN",ex5:"Meilleur AliExpress",ex6:"Accessoires téléphone",catElectronics:"Électronique",catFashion:"Mode",catBeauty:"Beauté",catHome:"Maison",catAuto:"Auto",catGadgets:"Gadgets",bestMatchTitle:"Meilleur résultat selon votre pays et filtres",bestMatchSub:"Classement par pays, devise, plateforme, marque, prix, livraison et note.",bestMatchCheap:"Prix les plus bas d’abord avec notes correctes.",bestMatchFast:"Livraison la plus rapide pour votre pays.",bestMatchFree:"Offres avec livraison gratuite d’abord.",bestMatchQuality:"Meilleures notes et qualité d’abord.",redirectTrust:"Vous serez redirigé vers la marketplace officielle",quickWhy:"Pourquoi cette offre ?",qr1:"Moins cher que la moyenne",qr2:"Livraison adaptée",qr3:"Bonne note",qr4:"Récompenses estimées",compareBetter:"Comparez avec des alternatives moins chères ou plus rapides",footer:"Plateforme intelligente pour trouver les meilleures offres chinoises."},
 de:{home:"Start",deals:"Deals",platforms:"Plattformen",how:"So funktioniert’s",faq:"FAQ",why:"Warum wir",start:"Suchen",title:"Finde die besten China-Deals an einem Ort",accent:"Smart nach Land ausgewählt",sub:"Vergleiche AliExpress, Temu, SHEIN, DHgate und Banggood nach Land, Sprache, Währung, Versand, Bewertungen und Best-Deal-Logik.",trusted:"Vertraut von 10.000+ smarten Käufern",products:"Produkte",markets:"Marktplätze",updated:"Täglich aktualisiert",search:"Produkt suchen",searchBtn:"Suchen",geoTitle:"Ergebnisse passen sich deiner Region an",geoText:"Preise, Währung, Sprache, Versand und Ranking ändern sich je Land.",country:"Land",language:"Sprache",currency:"Währung",bestToday:"Bester Deal heute für",claim:"Deal sichern",benefit1:"Sofortiger Preisvergleich",benefit1s:"Viele Angebote schnell vergleichen",benefit2:"Schnellster Versand nach Land",benefit2s:"Priorisiert passende Versandwege",benefit3:"Smartes Ranking",benefit3s:"Nach Region und Präferenzen",benefit4:"Kostenloser Versand",benefit4s:"Hebt Gratisversand hervor",bestDeal:"Bester Deal heute",bestDealSub:"Automatisch gewählt nach Land, Währung, Versand und Bewertung.",whyChosen:"Warum dieser Deal?",rankReason:"Guter Mix aus Preis, Bewertung und regionalem Versand.",dealScore:"Deal Score",filter:"Sortieren",best:"Beste",cheap:"Günstigste",rating:"Beste Bewertung",fast:"Schnellster Versand",free:"Gratisversand",popular:"Beliebt",bestChoice:"Top Wahl",cheapest:"Günstigste",fastest:"Schnellste",freeShipping:"Gratisversand",save:"Du sparst",avg:"vs Durchschnitt",popularRegion:"Beliebt in deiner Region",limited:"Begrenzter Vorrat",get:"🔥 Besten Preis holen",days:"Tage",resultsNote:"Ergebnisse ändern sich nach Land, Währung und Versand.",whyTitle:"Warum ChinaSearch?",whySub:"Schneller den besten Deal finden.",w1:"Transparent",w1p:"Bewertungen, Preise und Versand klar sichtbar.",w2:"Mehr sparen",w2p:"Wir vergleichen und zeigen die besten Angebote.",w3:"Sofortige Ergebnisse",w3p:"Schnelle Suche und smartes Ranking.",w4:"Regionsbereit",w4p:"Nahost, Europa, Russland, Nordafrika und Lateinamerika.",platformTitle:"Plattformen verwalten und vergleichen",platformSub:"Aktivieren, deaktivieren oder priorisieren.",bestPlatform:"Beste Plattform für dein Land",bestPlatformSub:"Vergleich nach Land, Versand, Bewertung und Durchschnittspreis.",bestPlatformWhy:"Warum diese Plattform?",bestPlatformCta:"Beste Deals ansehen",compareTitle:"Plattform vs Plattform",exitTitle:"Bevor du gehst — vergleiche ein Produkt",exitText:"Vielleicht findest du in 5 Sekunden einen besseren Preis oder schnelleren Versand.",exitBtn:"Jetzt testen",exitClose:"Später",admin:"Admin",aff:"Affiliate IDs",mode:"Datenmodus",mock:"Demo-Daten",live:"API bereit",stats:"Statistiken",addPlatform:"Plattform hinzufügen",newPlatform:"Neue Plattform",commission:"Provision",priority:"Priorität",enabled:"Aktiv",disabled:"Inaktiv",howTitle:"So funktioniert’s",s1:"Suchen",s1p:"Produkt oder Kategorie eingeben.",s2:"Vergleichen",s2p:"Preis, Versand, Bewertung und Gratisversand.",s3:"Auswählen",s3p:"Zur besten Marketplace gehen.",q1:"Ist ChinaSearch ein Shop?",a1:"Nein, eine Vergleichs- und Entdeckungsplattform.",q2:"Ändern sich Ergebnisse je Land?",a2:"Ja, Währung, Versand und Ranking passen sich an.",q3:"Kann ich Plattformen hinzufügen?",a3:"Ja, im Admin-Bereich.",q4:"Gibt es KI?",a4:"Diese Version ist AI-ready mit smarten Erklärungen.",rewardsTitle:"ChinaSearch Rewards",rewardsSub:"Doppelt sparen: bester Deal + Punkte über unsere Links.",rewardStep1:"Suchen",rewardStep2:"Über Link kaufen",rewardStep3:"Punkte sammeln",wallet:"Geschätztes Guthaben",level:"Level",nextLevel:"40 Punkte bis Bronze Cashback",estimated:"Geschätzte Rewards",cashbackNote:"Rewards werden nach Partnerfreigabe bestätigt.",liveFeed:"Live Deal Feed",dealScoreLabel:"Score",points:"Punkte",rewardYouMayEarn:"Du kannst verdienen",viewMode:"Ansicht",cards:"Karten",list:"Liste",compact:"Kompakt",compare:"Vergleich",platformFilter:"Plattform",allPlatforms:"Alle Plattformen",brandFilter:"Marke",allBrands:"Alle Marken",advancedSearch:"Erweiterte Suche",intentCheap:"Niedrigster Preis",intentFast:"Schneller Versand",intentFree:"Gratisversand",intentQuality:"Beste Qualität",quickView:"Schnellansicht",goOffer:"Zum Angebot",copyLink:"Link kopieren",similar:"Ähnliche vergleichen",aiAssistant:"ChinaSearch KI-Assistent",aiQuick:"Nach Land und Filtern balanciert dieses Produkt Preis, Versand und Bewertung.",selectedCompare:"Ausgewählte Produkte",compareNow:"Vergleichen",clear:"Löschen",chooseCompare:"Vergleichen",heroPunch:"Bevor du aus China kaufst, vergleiche hier zuerst.",heroBetter:"Finde günstigste, schnellste, bestbewertete und beste Optionen für dein Land.",ex1:"Günstige Earbuds",ex2:"Smartwatch",ex3:"Gratisversand",ex4:"SHEIN Produkte",ex5:"Bestes AliExpress",ex6:"Handyzubehör",catElectronics:"Elektronik",catFashion:"Mode",catBeauty:"Beauty",catHome:"Home",catAuto:"Autozubehör",catGadgets:"Gadgets",bestMatchTitle:"Bester Treffer für dein Land und Filter",bestMatchSub:"Ranking nach Land, Währung, Plattform, Marke, Preis, Versand und Bewertung.",bestMatchCheap:"Günstigste zuerst mit soliden Bewertungen.",bestMatchFast:"Schnellster Versand für dein Land zuerst.",bestMatchFree:"Gratisversand-Angebote zuerst.",bestMatchQuality:"Beste Bewertungen und Qualität zuerst.",redirectTrust:"Du wirst zum offiziellen Marktplatz weitergeleitet",quickWhy:"Warum dieses Angebot?",qr1:"Günstiger als Durchschnitt",qr2:"Passender Versand",qr3:"Starke Bewertung",qr4:"Geschätzte Rewards",compareBetter:"Vergleiche mit günstigeren oder schnelleren Alternativen",footer:"Smarte Plattform für die besten China-Deals."},
 es:{home:"Inicio",deals:"Ofertas",platforms:"Plataformas",how:"Cómo funciona",faq:"FAQ",why:"Por qué",start:"Buscar",title:"Encuentra las mejores ofertas de China en un solo lugar",accent:"Selección inteligente por país",sub:"Compara AliExpress, Temu, SHEIN, DHgate y Banggood según país, idioma, moneda, envío, reseñas y mejor oferta.",trusted:"Más de 10.000 compradores inteligentes",products:"Productos",markets:"Mercados",updated:"Actualizado diario",search:"Busca un producto",searchBtn:"Buscar",geoTitle:"Resultados adaptados a tu región",geoText:"Precios, moneda, idioma, envío y ranking cambian por país.",country:"País",language:"Idioma",currency:"Moneda",bestToday:"Mejor oferta hoy para",claim:"Obtener oferta",benefit1:"Comparación instantánea",benefit1s:"Compara miles de ofertas rápido",benefit2:"Envío rápido por país",benefit2s:"Prioriza rutas adecuadas",benefit3:"Ranking inteligente",benefit3s:"Según región y preferencias",benefit4:"Envío gratis si existe",benefit4s:"Destaca ofertas con envío gratis",bestDeal:"Mejor oferta de hoy",bestDealSub:"Elegida por país, moneda, envío y valoración.",whyChosen:"¿Por qué esta opción?",rankReason:"Equilibra precio, valoración y envío regional.",dealScore:"Puntuación",filter:"Ordenar",best:"Mejor",cheap:"Más barato",rating:"Mejor valoración",fast:"Envío rápido",free:"Envío gratis",popular:"Popular",bestChoice:"Mejor opción",cheapest:"Más barato",fastest:"Más rápido",freeShipping:"Envío gratis",save:"Ahorras",avg:"vs precio medio",popularRegion:"Popular en tu región",limited:"Stock limitado",get:"🔥 Obtener mejor precio",days:"días",resultsNote:"Resultados cambian por país, moneda y envío.",whyTitle:"¿Por qué ChinaSearch?",whySub:"Diseñado para encontrar el mejor deal más rápido.",w1:"Transparente",w1p:"Valoraciones, precios y envío claros.",w2:"Ahorra más",w2p:"Comparamos y destacamos las mejores ofertas.",w3:"Resultados rápidos",w3p:"Búsqueda rápida y ranking inteligente.",w4:"Listo por región",w4p:"Oriente Medio, Europa, Rusia, Norte de África y Latinoamérica.",platformTitle:"Gestionar y comparar plataformas",platformSub:"Activa, desactiva o prioriza plataformas.",bestPlatform:"Mejor plataforma para tu país",bestPlatformSub:"Comparamos país, envío, valoraciones y precios medios.",bestPlatformWhy:"¿Por qué esta plataforma?",bestPlatformCta:"Ver mejores ofertas",compareTitle:"Plataforma vs plataforma",exitTitle:"Antes de irte — compara un producto",exitText:"Puedes encontrar menor precio o envío más rápido en 5 segundos.",exitBtn:"Probar",exitClose:"Luego",admin:"Admin",aff:"IDs afiliado",mode:"Modo datos",mock:"Datos demo",live:"API lista",stats:"Estadísticas",addPlatform:"Añadir plataforma",newPlatform:"Nueva plataforma",commission:"Comisión",priority:"Prioridad",enabled:"Activa",disabled:"Inactiva",howTitle:"Cómo funciona",s1:"Busca",s1p:"Escribe producto o categoría.",s2:"Compara",s2p:"Precio, envío, valoración y gratis.",s3:"Elige",s3p:"Ve al marketplace adecuado.",q1:"¿ChinaSearch es tienda?",a1:"No, es plataforma de comparación.",q2:"¿Cambia por país?",a2:"Sí, moneda, envío y ranking cambian.",q3:"¿Puedo añadir plataformas?",a3:"Sí, desde el admin.",q4:"¿Hay IA?",a4:"Esta versión está lista para IA.",rewardsTitle:"ChinaSearch Rewards",rewardsSub:"Ahorra doble: mejor deal + puntos usando nuestros enlaces.",rewardStep1:"Buscar",rewardStep2:"Comprar con enlace",rewardStep3:"Ganar puntos",wallet:"Saldo estimado",level:"Nivel",nextLevel:"40 puntos para Bronze Cashback",estimated:"Recompensas estimadas",cashbackNote:"Se confirman tras aprobación del partner.",liveFeed:"Ofertas en vivo",dealScoreLabel:"Score",points:"puntos",rewardYouMayEarn:"Puedes ganar",viewMode:"Vista",cards:"Tarjetas",list:"Lista",compact:"Compacto",compare:"Comparar",platformFilter:"Plataforma",allPlatforms:"Todas",brandFilter:"Marca",allBrands:"Todas",advancedSearch:"Búsqueda avanzada",intentCheap:"Precio bajo",intentFast:"Envío rápido",intentFree:"Envío gratis",intentQuality:"Calidad",quickView:"Vista rápida",goOffer:"Ir a oferta",copyLink:"Copiar enlace",similar:"Comparar similar",aiAssistant:"Asistente IA ChinaSearch",aiQuick:"Según tu país y filtros, equilibra precio, envío y valoración.",selectedCompare:"Productos seleccionados",compareNow:"Comparar",clear:"Limpiar",chooseCompare:"Comparar",heroPunch:"Antes de comprar de China, compara aquí primero.",heroBetter:"Encuentra lo más barato, rápido, mejor valorado y mejor para tu país.",ex1:"Auriculares baratos",ex2:"Reloj inteligente",ex3:"Envío gratis",ex4:"Productos SHEIN",ex5:"Mejor AliExpress",ex6:"Accesorios móvil",catElectronics:"Electrónica",catFashion:"Moda",catBeauty:"Belleza",catHome:"Hogar",catAuto:"Auto",catGadgets:"Gadgets",bestMatchTitle:"Mejor resultado para tu país y filtros",bestMatchSub:"Ranking por país, moneda, plataforma, marca, precio, envío y valoración.",bestMatchCheap:"Precios más bajos primero con buenas valoraciones.",bestMatchFast:"Envío más rápido para tu país primero.",bestMatchFree:"Ofertas con envío gratis primero.",bestMatchQuality:"Mejor valoración y calidad primero.",redirectTrust:"Serás redirigido al marketplace original",quickWhy:"¿Por qué esta oferta?",qr1:"Más barato que la media",qr2:"Envío adecuado",qr3:"Buena valoración",qr4:"Recompensas estimadas",compareBetter:"Compara con alternativas más baratas o rápidas",footer:"Plataforma inteligente para encontrar ofertas de China."},
 pt:{home:"Início",deals:"Ofertas",platforms:"Plataformas",how:"Como funciona",faq:"FAQ",why:"Por quê",start:"Buscar",title:"Encontre as melhores ofertas da China em um só lugar",accent:"Escolha inteligente por país",sub:"Compare AliExpress, Temu, SHEIN, DHgate e Banggood por país, idioma, moeda, envio, avaliações e melhor oferta.",trusted:"Mais de 10.000 compradores inteligentes",products:"Produtos",markets:"Marketplaces",updated:"Atualizado diariamente",search:"Buscar produto",searchBtn:"Buscar",geoTitle:"Resultados adaptados à sua região",geoText:"Preços, moeda, idioma, envio e ranking mudam por país.",country:"País",language:"Idioma",currency:"Moeda",bestToday:"Melhor oferta hoje para",claim:"Pegar oferta",benefit1:"Comparação instantânea",benefit1s:"Compare milhares de ofertas rápido",benefit2:"Envio rápido por país",benefit2s:"Prioriza rotas adequadas",benefit3:"Ranking inteligente",benefit3s:"Por região e preferências",benefit4:"Frete grátis disponível",benefit4s:"Destaca ofertas com frete grátis",bestDeal:"Melhor oferta de hoje",bestDealSub:"Escolhida por país, moeda, envio e avaliação.",whyChosen:"Por que esta escolha?",rankReason:"Equilibra preço, avaliação e envio regional.",dealScore:"Score da oferta",filter:"Ordenar",best:"Melhor",cheap:"Mais barato",rating:"Melhor avaliação",fast:"Envio rápido",free:"Frete grátis",popular:"Popular",bestChoice:"Melhor escolha",cheapest:"Mais barato",fastest:"Mais rápido",freeShipping:"Frete grátis",save:"Você economiza",avg:"vs preço médio",popularRegion:"Popular na sua região",limited:"Estoque limitado",get:"🔥 Obter melhor preço",days:"dias",resultsNote:"Resultados mudam por país, moeda e envio.",whyTitle:"Por que ChinaSearch?",whySub:"Feito para encontrar o melhor deal mais rápido.",w1:"Transparente",w1p:"Avaliações, preços e envio claros.",w2:"Economize mais",w2p:"Comparamos e destacamos melhores ofertas.",w3:"Resultados rápidos",w3p:"Busca rápida e ranking inteligente.",w4:"Pronto por região",w4p:"Oriente Médio, Europa, Rússia, Norte da África e América Latina.",platformTitle:"Gerenciar e comparar plataformas",platformSub:"Ative, desative ou priorize plataformas.",bestPlatform:"Melhor plataforma para seu país",bestPlatformSub:"Comparamos país, envio, avaliações e preços médios.",bestPlatformWhy:"Por que esta plataforma?",bestPlatformCta:"Ver melhores ofertas",compareTitle:"Plataforma vs plataforma",exitTitle:"Antes de sair — compare um produto",exitText:"Você pode achar preço menor ou envio mais rápido em 5 segundos.",exitBtn:"Testar",exitClose:"Depois",admin:"Admin",aff:"IDs afiliados",mode:"Modo de dados",mock:"Dados demo",live:"API pronta",stats:"Estatísticas",addPlatform:"Adicionar plataforma",newPlatform:"Nova plataforma",commission:"Comissão",priority:"Prioridade",enabled:"Ativa",disabled:"Inativa",howTitle:"Como funciona",s1:"Busque",s1p:"Digite produto ou categoria.",s2:"Compare",s2p:"Preço, envio, avaliação e frete grátis.",s3:"Escolha",s3p:"Vá ao marketplace ideal.",q1:"ChinaSearch é loja?",a1:"Não, é plataforma de comparação.",q2:"Muda por país?",a2:"Sim, moeda, envio e ranking mudam.",q3:"Posso adicionar plataformas?",a3:"Sim, no admin.",q4:"Tem IA?",a4:"Esta versão está pronta para IA.",rewardsTitle:"ChinaSearch Rewards",rewardsSub:"Economize duas vezes: melhor deal + pontos pelos links.",rewardStep1:"Buscar",rewardStep2:"Comprar pelo link",rewardStep3:"Ganhar pontos",wallet:"Saldo estimado",level:"Nível",nextLevel:"40 pontos para Bronze Cashback",estimated:"Recompensas estimadas",cashbackNote:"Confirmadas após aprovação do parceiro.",liveFeed:"Ofertas ao vivo",dealScoreLabel:"Score",points:"pontos",rewardYouMayEarn:"Você pode ganhar",viewMode:"Visualização",cards:"Cards",list:"Lista",compact:"Compacto",compare:"Comparar",platformFilter:"Plataforma",allPlatforms:"Todas",brandFilter:"Marca",allBrands:"Todas",advancedSearch:"Busca avançada",intentCheap:"Menor preço",intentFast:"Envio rápido",intentFree:"Frete grátis",intentQuality:"Qualidade",quickView:"Visão rápida",goOffer:"Ir para oferta",copyLink:"Copiar link",similar:"Comparar similar",aiAssistant:"Assistente IA ChinaSearch",aiQuick:"Pelo país e filtros, este produto equilibra preço, envio e avaliação.",selectedCompare:"Produtos selecionados",compareNow:"Comparar",clear:"Limpar",chooseCompare:"Comparar",heroPunch:"Antes de comprar da China, compare aqui primeiro.",heroBetter:"Encontre o mais barato, rápido, bem avaliado e melhor para seu país.",ex1:"Fones baratos",ex2:"Smartwatch",ex3:"Frete grátis",ex4:"Produtos SHEIN",ex5:"Melhor AliExpress",ex6:"Acessórios celular",catElectronics:"Eletrônicos",catFashion:"Moda",catBeauty:"Beleza",catHome:"Casa",catAuto:"Auto",catGadgets:"Gadgets",bestMatchTitle:"Melhor resultado para seu país e filtros",bestMatchSub:"Ranking por país, moeda, plataforma, marca, preço, envio e avaliação.",bestMatchCheap:"Menores preços primeiro com boas avaliações.",bestMatchFast:"Envio mais rápido para seu país primeiro.",bestMatchFree:"Ofertas com frete grátis primeiro.",bestMatchQuality:"Melhor avaliação e qualidade primeiro.",redirectTrust:"Você será redirecionado ao marketplace original",quickWhy:"Por que esta oferta?",qr1:"Mais barato que a média",qr2:"Envio adequado",qr3:"Boa avaliação",qr4:"Recompensas estimadas",compareBetter:"Compare com alternativas mais baratas ou rápidas",footer:"Plataforma inteligente para encontrar ofertas da China."},
 ru:{home:"Главная",deals:"Скидки",platforms:"Платформы",how:"Как работает",faq:"FAQ",why:"Почему мы",start:"Начать поиск",title:"Лучшие предложения из Китая в одном месте",accent:"Умный выбор по стране",sub:"Сравнивайте AliExpress, Temu, SHEIN, DHgate и Banggood по стране, языку, валюте, доставке, рейтингу и лучшей цене.",trusted:"Нам доверяют 10 000+ покупателей",products:"Товары",markets:"Маркетплейсы",updated:"Ежедневно",search:"Найти товар",searchBtn:"Поиск",geoTitle:"Результаты адаптируются к региону",geoText:"Цены, валюта, язык, доставка и рейтинг меняются по стране.",country:"Страна",language:"Язык",currency:"Валюта",bestToday:"Лучшее предложение сегодня для",claim:"Получить предложение",benefit1:"Мгновенное сравнение",benefit1s:"Сравнение тысяч предложений",benefit2:"Быстрая доставка по стране",benefit2s:"Приоритет подходящих маршрутов",benefit3:"Умный рейтинг",benefit3s:"По региону и предпочтениям",benefit4:"Бесплатная доставка",benefit4s:"Выделяем такие предложения",bestDeal:"Лучшее предложение дня",bestDealSub:"Автовыбор по стране, валюте, доставке и рейтингу.",whyChosen:"Почему этот выбор?",rankReason:"Баланс цены, рейтинга и доставки.",dealScore:"Оценка сделки",filter:"Сортировка",best:"Лучшее",cheap:"Дешевле",rating:"Рейтинг",fast:"Быстрая доставка",free:"Бесплатная доставка",popular:"Популярное",bestChoice:"Лучший выбор",cheapest:"Дешевле",fastest:"Быстрее",freeShipping:"Бесплатная доставка",save:"Экономия",avg:"к средней цене",popularRegion:"Популярно в регионе",limited:"Ограничено",get:"🔥 Лучшая цена",days:"дн.",resultsNote:"Результаты меняются по стране, валюте и доставке.",whyTitle:"Почему ChinaSearch?",whySub:"Быстро найти лучший выбор.",w1:"Прозрачно",w1p:"Рейтинги, цены и доставка понятны.",w2:"Больше экономии",w2p:"Мы сравниваем лучшие предложения.",w3:"Быстрые результаты",w3p:"Поиск и умный рейтинг.",w4:"Для регионов",w4p:"Ближний Восток, Европа, Россия, Северная Африка и Латинская Америка.",platformTitle:"Управление и сравнение платформ",platformSub:"Включайте, отключайте и приоритизируйте.",bestPlatform:"Лучшая платформа для вашей страны",bestPlatformSub:"Сравнение по стране, доставке, рейтингу и цене.",bestPlatformWhy:"Почему эта платформа?",bestPlatformCta:"Смотреть лучшие предложения",compareTitle:"Платформа vs платформа",exitTitle:"Перед уходом — сравните один товар",exitText:"Можно найти цену ниже или доставку быстрее за 5 секунд.",exitBtn:"Попробовать",exitClose:"Позже",admin:"Админ",aff:"Affiliate ID",mode:"Режим данных",mock:"Демо-данные",live:"API готов",stats:"Статистика",addPlatform:"Добавить платформу",newPlatform:"Новая платформа",commission:"Комиссия",priority:"Приоритет",enabled:"Вкл.",disabled:"Выкл.",howTitle:"Как работает",s1:"Поиск",s1p:"Введите товар или категорию.",s2:"Сравнение",s2p:"Цена, доставка, рейтинг.",s3:"Выбор",s3p:"Переход на лучший маркетплейс.",q1:"ChinaSearch это магазин?",a1:"Нет, это платформа сравнения.",q2:"Меняется ли по стране?",a2:"Да, валюта, доставка и рейтинг адаптируются.",q3:"Можно добавить платформу?",a3:"Да, в панели администратора.",q4:"Есть ИИ?",a4:"Версия AI-ready с умными объяснениями.",rewardsTitle:"ChinaSearch Rewards",rewardsSub:"Экономьте дважды: лучший deal + баллы по ссылкам.",rewardStep1:"Искать",rewardStep2:"Купить по ссылке",rewardStep3:"Получить баллы",wallet:"Ожидаемый баланс",level:"Уровень",nextLevel:"40 баллов до Bronze Cashback",estimated:"Оценочные бонусы",cashbackNote:"Подтверждаются после одобрения партнёра.",liveFeed:"Live deals",dealScoreLabel:"Score",points:"баллов",rewardYouMayEarn:"Можно получить",viewMode:"Вид",cards:"Карты",list:"Список",compact:"Компакт",compare:"Сравнить",platformFilter:"Платформа",allPlatforms:"Все",brandFilter:"Бренд",allBrands:"Все бренды",advancedSearch:"Расширенный поиск",intentCheap:"Низкая цена",intentFast:"Быстрая доставка",intentFree:"Бесплатная доставка",intentQuality:"Качество",quickView:"Быстрый просмотр",goOffer:"К предложению",copyLink:"Копировать ссылку",similar:"Сравнить похожее",aiAssistant:"ИИ-помощник ChinaSearch",aiQuick:"По стране и фильтрам товар балансирует цену, доставку и рейтинг.",selectedCompare:"Выбрано товаров",compareNow:"Сравнить",clear:"Очистить",chooseCompare:"Сравнить",heroPunch:"Перед покупкой из Китая сравните здесь.",heroBetter:"Найдите самый дешёвый, быстрый, рейтинговый и лучший вариант для страны.",ex1:"Дешёвые наушники",ex2:"Смарт-часы",ex3:"Бесплатная доставка",ex4:"Товары SHEIN",ex5:"Лучшее AliExpress",ex6:"Аксессуары телефона",catElectronics:"Электроника",catFashion:"Мода",catBeauty:"Красота",catHome:"Дом",catAuto:"Авто",catGadgets:"Гаджеты",bestMatchTitle:"Лучший результат по стране и фильтрам",bestMatchSub:"Рейтинг по стране, валюте, платформе, бренду, цене, доставке и оценке.",bestMatchCheap:"Сначала самые низкие цены с нормальным рейтингом.",bestMatchFast:"Сначала самая быстрая доставка.",bestMatchFree:"Сначала бесплатная доставка.",bestMatchQuality:"Сначала лучшие оценки и качество.",redirectTrust:"Вы будете перенаправлены на официальный маркетплейс",quickWhy:"Почему это предложение?",qr1:"Дешевле среднего",qr2:"Подходящая доставка",qr3:"Хороший рейтинг",qr4:"Оценочные бонусы",compareBetter:"Сравните с более дешёвыми или быстрыми альтернативами",footer:"Умная платформа для поиска лучших предложений из Китая."}};
const raw=[
["p1","Smart Wireless Earbuds Pro","سماعات بلوتوث عازلة للضوضاء","electronics","aliexpress",9.99,39.99,4.8,8421,6,4500,true,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900"],
["p2","Ultra Fast USB-C Charger 65W","شاحن USB-C سريع 65 واط","electronics","banggood",14.5,49.99,4.7,5100,4,3200,false,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900"],
["p3","Smart Watch Fitness Tracker","ساعة ذكية لتتبع اللياقة","gadgets","temu",18.9,69.99,4.6,7100,8,6800,true,"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"],
["p4","LED Desk Lamp With Wireless Charging","مصباح مكتب LED مع شحن لاسلكي","home","dhgate",22.0,55.0,4.4,1980,5,1200,false,"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900"],
["p5","Minimal Crossbody Fashion Bag","حقيبة كروس عصرية","fashion","shein",11.25,35.0,4.5,4700,7,2400,true,"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"],
["p6","Portable Mini Projector","بروجكتور صغير محمول","gadgets","aliexpress",39.99,120.0,4.3,1850,10,1600,false,"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900"],
["p7","Car Phone Holder Magnetic","حامل هاتف مغناطيسي للسيارة","auto","temu",4.99,19.99,4.6,3900,9,5000,true,"https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=900"],
["p8","Beauty Skincare Roller Set","مجموعة رولر للعناية بالبشرة","beauty","shein",7.5,24.99,4.5,2250,6,1800,true,"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900"],
["p9","Smart Home WiFi Plug","قابس منزلي ذكي واي فاي","home","banggood",6.8,25.0,4.7,4900,5,4400,false,"https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=900"],
["p10","Gaming Mouse RGB","ماوس ألعاب RGB","electronics","dhgate",12.0,45.0,4.4,2800,11,2900,false,"https://images.unsplash.com/photo-1527814050087-3793815479db?w=900"],
["p11","Ultra Cheap Phone Case","جراب هاتف رخيص جدًا","gadgets","aliexpress",1.99,12.0,4.1,1760,12,2000,true,"https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=900"],
["p12","Express Delivery Cable Pack","مجموعة كابلات شحن سريع","electronics","temu",8.2,29.0,4.8,6500,2,4100,false,"https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900"]
];
let products=raw.map(x=>({id:x[0],title:x[1],titleAr:x[2],cat:x[3],platform:x[4],price:x[5],old:x[6],rating:x[7],reviews:x[8],ship:x[9],sold:x[10],free:x[11],img:x[12],discount:Math.round((1-x[5]/x[6])*100),url:platformSearchUrl(x[4],x[1])}));
for(let i=13;i<=30;i++){let keys=Object.keys(platformBase),p=keys[i%keys.length],price=+(5+((i*7)%50)+Math.random()*3).toFixed(2),old=+(price*(1.5+Math.random())).toFixed(2);products.push({id:"p"+i,title:"Trending China Product "+i,titleAr:"منتج صيني رائج "+i,cat:"gadgets",platform:p,price,old,rating:+(3.9+Math.random()).toFixed(1),reviews:Math.round(500+Math.random()*7500),ship:3+((i*3)%13),sold:Math.round(50+Math.random()*700),free:i%3===0,img:"https://picsum.photos/seed/chinasearch"+i+"/900/600",discount:Math.round((1-price/old)*100),url:platformSearchUrl(p,"Trending China Product "+i)})}

const BRAND_BY_CAT={
 electronics:["Samsung","Apple","Xiaomi","Huawei","Anker","Baseus"],
 gadgets:["Xiaomi","Lenovo","Baseus","Anker","Haylou","Generic"],
 fashion:["SHEIN","ROMWE","Generic","Trendyol","Zaful"],
 beauty:["Xiaomi","Generic","SHEIN","BioAqua"],
 home:["Xiaomi","Baseus","Generic","Midea"],
 auto:["Baseus","Xiaomi","Generic"]
};
function assignBrands(){
 products.forEach((p,i)=>{
   let arr=BRAND_BY_CAT[p.cat]||["Generic"];
   p.brand=p.brand||arr[i%arr.length];
   p.optimizedTitle=p.optimizedTitle||((state&&state.lang==="ar")?p.titleAr:p.title);
 });
}

let state={view:'compact',platformFilter:'all',brandFilter:'all',compareList:[],country:localStorage.getItem("country")||"KW",lang:localStorage.getItem("lang")||"ar",sort:"score",q:"",admin:false,aff:{},compareA:"aliexpress",compareB:"temu"};


function inferCountryFromClient(){
  try{
    const tz=(Intl.DateTimeFormat().resolvedOptions().timeZone||"").toLowerCase();
    const lang=(navigator.language||navigator.userLanguage||"").toLowerCase();
    const map=[
      ["kuwait","KW"],["riyadh","SA"],["jeddah","SA"],["dubai","AE"],["abu_dhabi","AE"],["cairo","EG"],["casablanca","MA"],["algiers","DZ"],
      ["berlin","DE"],["paris","FR"],["madrid","ES"],["london","GB"],["moscow","RU"],["sao_paulo","BR"],["mexico_city","MX"],
      ["new_york","US"],["chicago","US"],["los_angeles","US"],["denver","US"],["phoenix","US"],["detroit","US"]
    ];
    for(const [key,code] of map){ if(tz.includes(key)) return code; }
    if(lang.startsWith("de")) return "DE";
    if(lang.startsWith("fr")) return "FR";
    if(lang.startsWith("es")) return "ES";
    if(lang.startsWith("pt")) return "BR";
    if(lang.startsWith("ru")) return "RU";
    if(lang.startsWith("en")) return "US";
    if(lang.startsWith("ar")) return "KW";
  }catch(e){}
  return "KW";
}
function mapSupportedCountry(code){
  const c=(code||"").toUpperCase();
  if(SUPPORTED_COUNTRIES[c]) return c;
  const regionMap={
    QA:"SA",BH:"SA",OM:"AE",JO:"SA",LB:"SA",IQ:"KW",TR:"DE",IT:"DE",NL:"DE",BE:"DE",PL:"DE",
    PT:"ES",AR:"BR",CL:"BR",CO:"MX",PE:"MX",UY:"BR",TN:"MA"
  };
  return regionMap[c]||"KW";
}
async function fetchCountryByIP(){
  if(localStorage.getItem("country_user_locked")) return null;
  try{
    const ctrl=new AbortController();
    const timer=setTimeout(()=>ctrl.abort(),1800);
    const res=await fetch("https://ipwho.is/", {signal:ctrl.signal});
    clearTimeout(timer);
    if(!res.ok) return null;
    const data=await res.json();
    if(data && data.success!==false){
      const code=mapSupportedCountry(data.country_code||"");
      return code;
    }
  }catch(e){}
  return null;
}
function autoDetectGeoOnFirstVisit(){
  try{
    if(!localStorage.getItem("country")){
      const guessedCountry=inferCountryFromClient();
      state.country=guessedCountry;
      localStorage.setItem("country",guessedCountry);
    }
    if(!localStorage.getItem("lang") && !localStorage.getItem("lang_user_locked")){
      const countryCfg=SUPPORTED_COUNTRIES[state.country]||SUPPORTED_COUNTRIES.KW;
      const fallbackLang=countryCfg.lang||"ar";
      state.lang=fallbackLang;
      localStorage.setItem("lang",fallbackLang);
    }
  }catch(e){}
}
function setCountry(v){
  state.country=v;
  localStorage.setItem("country",v);
  localStorage.setItem("country_user_locked","1");
  render();
}
function setLang(v){
  state.lang=v;
  localStorage.setItem("lang",v);
  localStorage.setItem("lang_user_locked","1");
  render();
}
async function bootstrapApp(){
  autoDetectGeoOnFirstVisit();
  const ipCountry=await fetchCountryByIP();
  if(ipCountry){
    state.country=ipCountry;
    localStorage.setItem("country",ipCountry);
    if(!localStorage.getItem("lang_user_locked")){
      const countryCfg=SUPPORTED_COUNTRIES[ipCountry]||SUPPORTED_COUNTRIES.KW;
      const nextLang=countryCfg.lang||state.lang||"ar";
      state.lang=nextLang;
      localStorage.setItem("lang",nextLang);
    }
  }
  loadSiteConfig().then(()=>{render();renderLegalPage();requestAnimationFrame(() => requestAnimationFrame(syncHeroCardsWithSearch));});
}



window.__CS_CONFIG = null;
async function loadSiteConfig(){
  try{
    const res = await fetch("/site-config.json?ts=" + Date.now(), {cache:"no-store"});
    if(!res.ok) return null;
    const cfg = await res.json();
    window.__CS_CONFIG = cfg;
    if(cfg && cfg.platforms && typeof platforms === "object"){
      Object.keys(cfg.platforms).forEach(k=>{
        if(platforms[k]){
          platforms[k].enabled = !!cfg.platforms[k].enabled;
          if(cfg.platforms[k].priority != null) platforms[k].priority = +cfg.platforms[k].priority;
          if(cfg.platforms[k].commission != null) platforms[k].commission = +cfg.platforms[k].commission;
        }
      });
      localStorage.setItem("platforms", JSON.stringify(platforms));
    }
    return cfg;
  }catch(e){ console.warn("site-config.json not loaded", e); return null; }
}

function C(){return SUPPORTED_COUNTRIES[state.country]||SUPPORTED_COUNTRIES.KW}
function L(){let base=T[state.lang]||T.en;return new Proxy(base,{get:(o,k)=>o[k]||T.en[k]||T.ar[k]||k});}
function norm(v,min,max,inv){if(max===min)return 1;let n=(v-min)/(max-min);return inv?1-n:n}
function weights(){let r=C().region;if(r==="Middle East")return{price:.25,ship:.35,rating:.25,pop:.15};if(r==="Europe"||r==="USA")return{price:.23,ship:.18,rating:.42,pop:.17};if(r==="Latin America"||r==="North Africa")return{price:.42,ship:.18,rating:.22,pop:.18};if(r==="Russia")return{price:.28,ship:.28,rating:.27,pop:.17};return{price:.35,ship:.25,rating:.25,pop:.15}}
function activeProducts(){return products.filter(p=>platforms[p.platform]&&platforms[p.platform].enabled&&platforms[p.platform].regions.includes(C().region)&&(state.platformFilter==='all'||p.platform===state.platformFilter)&&(state.brandFilter==='all'||p.brand===state.brandFilter))}
function ranked(){
 let data=activeProducts();let ps=data.map(p=>p.price),ss=data.map(p=>p.ship),rs=data.map(p=>p.rating),vs=data.map(p=>p.reviews),coms=data.map(p=>platforms[p.platform].commission||1);let mi=a=>Math.min(...a),ma=a=>Math.max(...a),w=weights();
 let scored=data.map(p=>{
   let userScore=w.price*norm(p.price,mi(ps),ma(ps),true)+w.ship*norm(p.ship,mi(ss),ma(ss),true)+w.rating*norm(p.rating,mi(rs),ma(rs),false)+w.pop*norm(p.reviews,mi(vs),ma(vs),false);
   let revenueScore=norm(platforms[p.platform].commission||1,mi(coms),ma(coms),false)*.08 + norm(6-(platforms[p.platform].priority||5),1,5,false)*.04;
   let score=Math.min(.99,userScore+revenueScore);
   return {...p,score,aiSummary:state.lang==="ar"?`اختيار ذكي: سعره مناسب وشحنه ${p.ship} أيام وتقييمه ${p.rating}.`:`Smart pick: fair price, ${p.ship}-day shipping and ${p.rating} rating.`}
 });
 let best=scored.reduce((a,b)=>a.score>b.score?a:b),cheap=scored.reduce((a,b)=>a.price<b.price?a:b),fast=scored.reduce((a,b)=>a.ship<b.ship?a:b),rated=scored.reduce((a,b)=>a.rating>b.rating?a:b);
 return scored.map(p=>({...p,isBest:p.id===best.id,isCheap:p.id===cheap.id,isFast:p.id===fast.id,isTopRated:p.id===rated.id}))
}
function price(v){let c=C(),val=(v*c.rate).toFixed(c.currency==="KWD"?3:2);return state.lang==="ar"?val+" "+c.symbol:c.symbol+val}

function platformSearchUrl(platformKey, query){
 const q=encodeURIComponent(query||"china deals");
 const templates={
  aliexpress:`https://www.aliexpress.com/wholesale?SearchText=${q}`,
  temu:`https://www.temu.com/search_result.html?search_key=${q}`,
  shein:`https://www.shein.com/pdsearch/${q}/`,
  dhgate:`https://www.dhgate.com/wholesale/search.do?searchkey=${q}`,
  banggood:`https://www.banggood.com/search/${q}.html`
 };
 return templates[platformKey] || `https://www.google.com/search?q=${q}`;
}
function buildAffiliateUrl(p){
 // Affiliate integration is disabled until marketplace approval and official affiliate templates are available.
 return platformSearchUrl(p.platform, p.title || p.titleAr || "china deals");
}

function click(id){let p=window._products[id];if(!p)return;localStorage.setItem("click_"+p.platform,(+(localStorage.getItem("click_"+p.platform)||0)+1));window.open(buildAffiliateUrl(p),"_blank")}
function productName(p){return state.lang==="ar"?p.titleAr:p.title}
function badge(p){let l=L();return `${p.isBest?`<span class="tag best">🏆 ${l.bestChoice}</span>`:""}${p.isCheap?`<span class="tag cheap">💰 ${l.cheapest}</span>`:""}${p.isFast?`<span class="tag fast">⚡ ${l.fastest}</span>`:""}${p.free?`<span class="tag free">🚚 ${l.freeShipping}</span>`:""}<span class="tag platform" style="background:${platforms[p.platform].color}">${platforms[p.platform].name}</span>`}

function dealScore(p){return Math.max(55,Math.min(99,Math.round((p.score||0.65)*100)))}
function rewardPoints(p){return Math.max(2,Math.round((p.price*(platforms[p.platform]?.commission||5))*0.35))}
function liveFeedItems(){
 let c=C();
 if(state.lang==="ar"){
   return [
    `مستخدم من ${c.countryAr} وفر ${price(3.4)} على سماعات`,
    `صفقة شحن مجاني ظهرت الآن من ${platforms.temu?.name||"Temu"}`,
    `مستخدم في السعودية وجد شحن أسرع خلال 5 ثواني`,
    `خصم 36% على منتج رائج من AliExpress`,
    `أفضل منصة اليوم تغيرت حسب سرعة الشحن`
   ];
 }
 return [
  `A shopper in ${c.countryEn} saved ${price(3.4)} on earbuds`,
  `Free shipping deal just appeared from ${platforms.temu?.name||"Temu"}`,
  `A shopper found faster shipping in 5 seconds`,
  `36% discount on a trending AliExpress product`,
  `Best platform updated by shipping speed`
 ];
}

function card(p){let l=L(),avg=activeProducts().reduce((s,x)=>s+x.price,0)/Math.max(1,activeProducts().length),saved=Math.max(0,Math.round((1-p.price/avg)*100)),score=dealScore(p),pts=rewardPoints(p),checked=state.compareList.includes(p.id);return `<div class="card ${p.isBest?'best':''}"><label class="compare-check"><input title="${l.chooseCompare}" type="checkbox" ${checked?'checked':''} onchange="toggleCompare('${p.id}')"></label><div class="deal-score"><div class="score-ring" style="--score:${score}"><b>${score}</b></div></div><div class="image"><img src="${p.img}" alt="${productName(p)}"></div><div class="badges">${badge(p)}<span class="tag free">${p.brand}</span><span class="country-badge">🌍 ${l.bestForCountry}</span></div><h3>${productName(p)}</h3><div class="price-row"><strong>${price(p.price)}</strong><del>${price(p.old)}</del><span class="discount">-${p.discount}%</span></div><div class="rating-line"><span class="stars">★★★★★</span><span>${p.rating} · ${p.reviews.toLocaleString()}</span></div><div class="shipping-line"><span>🚚 ${p.ship} ${l.days}</span><span>🎁 +${pts} ${l.points}</span></div><div class="reason-chips"><span class="reason-chip">💰 ${saved}% ${l.reasonCheap}</span><span class="reason-chip">🚀 ${l.reasonFast}</span><span class="reason-chip">⭐ ${l.reasonRating}</span><span class="reason-chip">🤖 AI Pick</span></div><div class="card-actions-clean"><button class="secondary-action" onclick="openQuick('${p.id}')">${l.quickView}</button><button class="watch-btn" onclick="watchPrice('${p.id}')">${isWatched(p.id)?l.watched:l.watchPrice}</button><button class="cta" onclick="openQuick('${p.id}')">${l.get}</button></div></div>`}
function floatCard(p,type,style){return `<div class="float-card" style="${style};--rot:${style.includes('rotate')?'0deg':'0deg'}"><span class="float-badge" style="background:${type.color}">${type.label}</span><div class="f-img"><img src="${p.img}"></div><h4>${productName(p)}</h4><div class="float-price"><b>${price(p.price)}</b><small style="text-decoration:line-through;color:#94a3b8">${price(p.old)}</small></div><div class="float-meta"><span>${platforms[p.platform].name}</span><span>⭐ ${p.rating}</span><span>🚚 ${p.ship}</span></div></div>`}
function platformStats(k){let list=products.filter(p=>p.platform===k),avgPrice=list.reduce((s,p)=>s+p.price,0)/list.length,avgShip=list.reduce((s,p)=>s+p.ship,0)/list.length,avgRating=list.reduce((s,p)=>s+p.rating,0)/list.length;return{avgPrice,avgShip,avgRating,count:list.length}}
function bestPlatformKey(){let keys=Object.keys(platforms).filter(k=>platforms[k].enabled&&platforms[k].regions.includes(C().region));return keys.sort((a,b)=>{let A=platformStats(a),B=platformStats(b);return (B.avgRating*2-B.avgShip*.08-platforms[b].priority*.05+platforms[b].commission*.03)-(A.avgRating*2-A.avgShip*.08-platforms[a].priority*.05+platforms[a].commission*.03)})[0]||"aliexpress"}
function bestPlatformScore(k){let st=platformStats(k);return Math.min(97,Math.round((st.avgRating*17)+(100-st.avgShip*4)+(platforms[k].commission*1.2)-(platforms[k].priority*2)))}
function addPlatform(){let name=prompt(L().newPlatform);if(!name)return;let key=name.toLowerCase().replace(/[^a-z0-9]/g,'');platforms[key]={name,color:"#475569",param:"ref",commission:5,enabled:true,priority:6,regions:["Middle East","North Africa","Europe","Russia","Latin America","USA"]};localStorage.setItem("platforms",JSON.stringify(platforms));render()}
function togglePlatform(k){platforms[k].enabled=!platforms[k].enabled;localStorage.setItem("platforms",JSON.stringify(platforms));render()}
function changeCommission(k,v){platforms[k].commission=Number(v);localStorage.setItem("platforms",JSON.stringify(platforms));render()}
function changePriority(k,v){platforms[k].priority=Number(v);localStorage.setItem("platforms",JSON.stringify(platforms));render()}
let exitShown=false;
function showExitHook(){if(exitShown || sessionStorage.getItem("exitClosed"))return;exitShown=true;let l=L();let hook=document.getElementById("exitHook");hook.innerHTML=`<h3>👀 ${l.exitTitle}</h3><p>${l.exitText}</p><div class="exit-actions"><button class="exit-primary" onclick="document.getElementById('deals').scrollIntoView();hideExitHook()">${l.exitBtn}</button><button class="exit-secondary" onclick="sessionStorage.setItem('exitClosed','1');hideExitHook()">${l.exitClose}</button></div>`;hook.classList.add("show")}
function hideExitHook(){document.getElementById("exitHook").classList.remove("show")}
document.addEventListener("mouseleave",e=>{if(e.clientY<=0)showExitHook()});
setTimeout(()=>{if(window.scrollY<350)showExitHook()},45000);

function availableBrands(){
 let list=products.filter(p=>state.platformFilter==='all'||p.platform===state.platformFilter).map(p=>p.brand).filter(Boolean);
 return [...new Set(list)];
}
function setIntent(type){
 if(type==='cheap')state.sort='price';
 if(type==='fast')state.sort='ship';
 if(type==='free')state.sort='free';
 if(type==='quality')state.sort='rating';
 render();
}
function toggleCompare(id){
 let i=state.compareList.indexOf(id);
 if(i>=0)state.compareList.splice(i,1);
 else if(state.compareList.length<3)state.compareList.push(id);
 render();
}

function quickSimilarHtml(p){
  let l=L();
  let sims=visibleProducts().filter(x=>x.id!==p.id).sort((a,b)=>dealScore(b)-dealScore(a));
  sims=sims.filter(x=>x.brand===p.brand || x.platform!==p.platform).slice(0,3);
  if(!sims.length) return "";
  return `<div class="quick-panel-pro"><h4>${l.similar}</h4><div class="quick-similar-grid">${sims.map(x=>`<div class="quick-similar-card"><img src="${x.img}" alt="${productName(x)}"><div><b>${productName(x)}</b><span>${platforms[x.platform].name} · ${price(x.price)}</span></div><button onclick="openQuick('${x.id}')">${l.quickView}</button></div>`).join("")}</div></div>`;
}


function openQuick(id){
 let p=allProducts().find(x=>x.id===id),l=L(),avg=activeProducts().reduce((s,x)=>s+x.price,0)/Math.max(1,activeProducts().length),saving=Math.max(0,avg-p.price),c=C(),score=dealScore(p),pts=rewardPoints(p),fit=Math.min(98,Math.max(74,score+4)),plat=platforms[p.platform];
 let box=document.getElementById("quickModal");
 box.innerHTML=`<div class="quick-shell"><div class="quick-topbar"><div class="quick-top-left"><span class="quick-platform-chip" style="border-color:${plat.color};color:${plat.color}">🛍️ ${plat.name}</span><span class="quick-score-chip">🏆 ${l.dealScore}: ${score}/100</span><span class="quick-country-chip">🌍 ${c.flag} ${state.lang==='ar'?c.countryAr:c.countryEn}</span></div><button class="quick-close-pro" onclick="closeQuick()">✕ ${l.close}</button></div><div class="quick-layout-pro"><div class="quick-media-side"><div class="quick-media-main"><img src="${p.img}" alt="${productName(p)}"></div><div class="quick-media-caption"><h2>${productName(p)}</h2><p>${p.aiSummary||l.aiQuick}</p></div><div class="quick-mini-rail"><div class="quick-mini-card"><span>${l.bestForCountry}</span><b>${state.lang==='ar'?c.countryAr:c.countryEn}</b></div><div class="quick-mini-card"><span>${l.platformTrust}</span><b>${l.excellent}</b></div><div class="quick-mini-card"><span>${l.rewardEstimate}</span><b>+${pts} ${l.points}</b></div><div class="quick-mini-card"><span>${l.priceConfidence}</span><b>${fit}%</b></div></div></div><div class="quick-content-pro"><div class="badges">${badge(p)}<span class="tag free">${p.brand}</span><span class="country-badge">🌍 ${l.bestForCountry}</span></div><div class="quick-headline"><div><h3>${productName(p)}</h3><p>${l.redirectTrust}</p></div></div><div class="quick-price-row"><strong>${price(p.price)}</strong><del>${price(p.old)}</del><span class="discount">-${p.discount}%</span></div><div class="rating-line"><span class="stars">★★★★★</span><span>${p.rating} · ${p.reviews.toLocaleString()}</span></div><div class="shipping-line"><span>🚚 ${p.ship} ${l.days}</span><span>🎁 +${pts} ${l.points}</span><span>🏷️ ${plat.name}</span></div><div class="quick-highlight-grid"><div class="quick-highlight-card"><span>${l.marketAverage}</span><b>${price(avg)}</b></div><div class="quick-highlight-card"><span>${l.yourSaving}</span><b>${price(saving)}</b></div><div class="quick-highlight-card"><span>${l.rewardEstimate}</span><b>+${pts} ${l.points}</b></div><div class="quick-highlight-card"><span>${l.countryFit}</span><b>${fit}%</b></div></div><div class="quick-two-col"><div class="quick-panel-pro">${dealPassportHtml(p)}${scoreBreakdownHtml(p)}<div class="quick-action-row"><button class="cta" onclick="click('${p.id}')">${l.goOffer}</button><button class="secondary-action" onclick="watchPrice('${p.id}')">${isWatched(p.id)?l.watched:l.watchPrice}</button><button class="secondary-action" onclick="toggleCompare('${p.id}');closeQuick()">${l.similar}</button><button class="secondary-action" onclick="navigator.clipboard&&navigator.clipboard.writeText('${p.url}')">${l.copyLink}</button></div><div class="quick-safe-note">${l.trustNoteFull}</div></div><div class="quick-panel-pro"><div class="quick-ai-box"><b>🤖 ${l.aiSummaryTitle||l.aiAssistant}</b><p>${p.aiSummary||l.aiQuick}</p></div><div class="quick-metrics"><div class="quick-metric"><span>${l.factorPrice}</span><b>${price(p.price)}</b></div><div class="quick-metric"><span>${l.factorShipping}</span><b>${p.ship} ${l.days}</b></div><div class="quick-metric"><span>${l.factorRating}</span><b>${p.rating}/5</b></div></div><div class="quick-confidence"><h4>${l.quickWhy}</h4><div class="bar"><i style="width:${fit}%"></i></div><div class="meta"><span>💰 ${l.qr1}</span><span>🚚 ${l.qr2}</span><span>⭐ ${l.qr3}</span></div></div><div style="margin-top:12px" class="quick-trust-list"><div class="quick-trust-item">✅ ${l.platformWinnerReason}</div><div class="quick-trust-item">🎁 ${l.qr4}</div><div class="quick-trust-item">🔒 ${l.trust1p||l.trustNoteFull}</div></div></div></div>${quickSimilarHtml(p)}</div></div><div class="quick-sticky-bar"><button class="cta" onclick="click('${p.id}')">${l.goOffer}</button><button class="secondary-action" onclick="watchPrice('${p.id}')">${isWatched(p.id)?l.watched:l.watchPrice}</button><button class="secondary-action" onclick="toggleCompare('${p.id}');closeQuick()">${l.compareNow||l.compare}</button></div></div>`;
 box.classList.add("show");
 document.body.style.overflow="hidden";
}

function closeQuick(){document.getElementById("quickModal").classList.remove("show");document.body.style.overflow=""}


function matchMessage(){
 let l=L();
 if(state.sort==='price')return l.bestMatchCheap;
 if(state.sort==='ship')return l.bestMatchFast;
 if(state.sort==='free')return l.bestMatchFree;
 if(state.sort==='rating')return l.bestMatchQuality;
 return l.bestMatchSub;
}
function bestMatchTitle(){
 let c=C(), l=L(), parts=[];
 parts.push(state.lang==='ar'?c.countryAr:c.countryEn);
 if(state.platformFilter!=='all' && platforms[state.platformFilter])parts.push(platforms[state.platformFilter].name);
 if(state.brandFilter!=='all')parts.push(state.brandFilter);
 return `${l.bestMatchTitle}: ${parts.join(" · ")}`;
}


function rememberSearch(){
 if(!state.q)return;
 let arr=JSON.parse(localStorage.getItem("recentSearches")||"[]");
 arr=[state.q,...arr.filter(x=>x!==state.q)].slice(0,6);
 localStorage.setItem("recentSearches",JSON.stringify(arr));
}
function rememberViewed(id){
 let arr=JSON.parse(localStorage.getItem("viewedProducts")||"[]");
 arr=[id,...arr.filter(x=>x!==id)].slice(0,6);
 localStorage.setItem("viewedProducts",JSON.stringify(arr));
}
function watchPrice(id){
 let arr=JSON.parse(localStorage.getItem("watchedProducts")||"[]");
 if(!arr.includes(id))arr.unshift(id);
 localStorage.setItem("watchedProducts",JSON.stringify(arr.slice(0,8))); let p=getById(id); if(p){addInterest(p.cat);addInterest(p.brand);}
 render();
}
function isWatched(id){return JSON.parse(localStorage.getItem("watchedProducts")||"[]").includes(id)}
function getById(id){return products.find(p=>p.id===id)||window._products?.[id]}
function smartListHtml(){
 let l=L(), open=localStorage.getItem("smartListOpen")==="1";
 let viewed=JSON.parse(localStorage.getItem("viewedProducts")||"[]").map(getById).filter(Boolean).slice(0,3);
 let watched=JSON.parse(localStorage.getItem("watchedProducts")||"[]").map(getById).filter(Boolean).slice(0,3);
 let searches=[...JSON.parse(localStorage.getItem("followedSearches")||"[]"),...JSON.parse(localStorage.getItem("savedSearches")||"[]"),...JSON.parse(localStorage.getItem("recentSearches")||"[]")].slice(0,3);
 let item=p=>`<div class="smart-list-card"><b>${productName(p)}</b><span>${platforms[p.platform]?.name||""} · ${price(p.price)}</span></div>`;
 let searchItem=s=>`<div class="smart-list-card"><b>🔎 ${s}</b><span>${L().bestMatchTitle}</span><button class="tiny-action" onclick="state.q=\`${s.split(" · ")[0]}\`;render();document.getElementById(\`deals\`).scrollIntoView()">${L().continueLastSearch}</button></div>`;
 return `<div class="smart-list ${open?'':'collapsed'}"><div class="smart-list-title-row"><h3>🧠 ${l.mySmartList}</h3><button class="smart-toggle" onclick="toggleSmartList()">${open?l.hideSmartList:l.showSmartList}</button></div><div class="smart-list-grid"><div><b>${l.viewedProducts}</b>${viewed.length?viewed.map(item).join(""):`<div class="smart-list-card">—</div>`}</div><div><b>${l.watchedProducts}</b>${watched.length?watched.map(item).join(""):`<div class="smart-list-card">—</div>`}</div><div><b>${l.recentSearches}</b>${searches.length?searches.map(searchItem).join(""):`<div class="smart-list-card">—</div>`}</div></div></div>`;
}
function aiSummaryHtml(best){
 let l=L(), c=C();
 let platform=best?platforms[best.platform]?.name:"";
 let msg=state.lang==="ar"
  ? `حسب ${c.countryAr} وفلترك الحالي، أفضل ترشيح هو ${best?productName(best):""} من ${platform} لأنه يجمع بين سعر ${best?price(best.price):""} وشحن ${best?best.ship:""} ${l.days} وتقييم قوي.`
  : `For ${c.countryEn} and your current filters, the best pick is ${best?productName(best):""} from ${platform}, balancing ${best?price(best.price):""}, ${best?best.ship:""}-day shipping and strong rating.`;
 return `<div class="ai-summary"><div><b>🤖 ${l.aiSummaryTitle}</b><p>${best?msg:l.aiSummaryDefault}</p></div><div class="ai-summary-score">${best?Math.round((best.score||.86)*100):88}<small>/100</small></div></div>`;
}
function openComparisonDrawer(){
 let l=L(), selected=state.compareList.map(id=>window._products[id]||getById(id)).filter(Boolean);
 if(!selected.length)return;
 let rows=[
  [l.platformFilter,...selected.map(p=>platforms[p.platform]?.name||p.platform)],
  [l.priceConfidence,...selected.map(p=>dealScore(p)>82?"High":"Medium")],
  [l.dealScore,...selected.map(p=>dealScore(p)+"/100")],
  [l.cheap,...selected.map(p=>price(p.price))],
  [l.fast,...selected.map(p=>p.ship+" "+l.days)],
  [l.rating,...selected.map(p=>"⭐ "+p.rating)],
  [l.rewardYouMayEarn,...selected.map(p=>"+"+rewardPoints(p)+" "+l.points)],
  [l.aiBest,...selected.map(p=>p.isBest?"🏆":"—")]
 ];
 let table=`<table class="compare-table">${rows.map((r,i)=>`<tr>${r.map(x=>i===0?`<th>${x}</th>`:`<td>${x}</td>`).join("")}</tr>`).join("")}</table>`;
 let d=document.getElementById("comparisonDrawer");
 d.innerHTML=`<div class="drawer-head"><h3>${l.comparisonDrawer}</h3><button class="secondary-action" onclick="closeComparisonDrawer()">${l.close}</button></div><div class="drawer-body">${table}</div>`;
 d.classList.add("show");
}
function closeComparisonDrawer(){document.getElementById("comparisonDrawer").classList.remove("show")}


function resetFilters(){
 state.sort='score';
 state.view='compact';
 state.platformFilter='all';
 state.brandFilter='all';
 state.q='';
 state.compareList=[];
 render();
}
function toggleSmartList(){
 localStorage.setItem("smartListOpen", localStorage.getItem("smartListOpen")==="1" ? "0" : "1");
 render();
}


function saveSearch(){
 if(!state.q)return;
 let arr=JSON.parse(localStorage.getItem("savedSearches")||"[]");
 let c=C();
 let label=`${state.q} · ${state.lang==='ar'?c.countryAr:c.countryEn}`;
 arr=[label,...arr.filter(x=>x!==label)].slice(0,8);
 localStorage.setItem("savedSearches",JSON.stringify(arr));
 alert(L().savedSearch);
 render();
}
function dealPassportHtml(p){
 let l=L();
 return `<div class="deal-passport"><div class="passport-title"><span>🛂 ${l.dealPassport}</span><span>${dealScore(p)}/100</span></div><div class="passport-grid"><div class="passport-item">${l.passportPrice}<b>${dealScore(p)>80?l.excellent:l.good}</b></div><div class="passport-item">${l.passportShipping}<b>${p.ship<=6?l.excellent:l.good}</b></div><div class="passport-item">${l.passportRating}<b>${p.rating>=4.6?l.high:l.good}</b></div><div class="passport-item">${l.passportReward}<b>${l.available}</b></div></div></div>`;
}
function platformWinnerHtml(data){
 let l=L(), bp=bestPlatformKey(), st=platformStats(bp);
 return `<div class="winner-box"><div><b>🏆 ${l.platformWinner}</b><p>${l.platformWinnerReason}</p></div><div class="winner-badge" style="color:#fff"><span style="display:block;color:${platforms[bp].color};font-size:20px">${platforms[bp].name}</span><small>⭐ ${st.avgRating.toFixed(1)} · 🚚 ${st.avgShip.toFixed(1)} ${l.days}</small></div></div>`;
}
function trustPanelHtml(){
 let l=L();
 return `<div class="trust-panel"><h3>🛡️ ${l.trustTitle}</h3><div class="trust-grid"><div class="trust-mini"><b>${l.trust1}</b>${l.trust1p}</div><div class="trust-mini"><b>${l.trust2}</b>${l.trust2p}</div><div class="trust-mini"><b>${l.trust3}</b>${l.trust3p}</div><div class="trust-mini"><b>${l.trust4}</b>${l.trust4p}</div></div></div>`;
}
function openMobileFilters(){
 let l=L(), sheet=document.getElementById("mobileFilterSheet");
 sheet.innerHTML=`<div class="mobile-sheet-head"><h3>${l.mobileFilters}</h3><button class="secondary-action" onclick="closeMobileFilters()">${l.close}</button></div><div class="toolbar-grid" style="display:grid;grid-template-columns:1fr;gap:10px"><div class="field"><label>${l.platformFilter}</label><select onchange="state.platformFilter=this.value;state.brandFilter='all';render();openMobileFilters()"><option value="all">${l.allPlatforms}</option>${Object.keys(platforms).filter(k=>platforms[k].enabled).map(k=>`<option value="${k}" ${state.platformFilter===k?'selected':''}>${platforms[k].name}</option>`).join("")}</select></div><div class="field"><label>${l.brandFilter}</label><select onchange="state.brandFilter=this.value;render();openMobileFilters()"><option value="all">${l.allBrands}</option>${availableBrands().map(b=>`<option value="${b}" ${state.brandFilter===b?'selected':''}>${b}</option>`).join("")}</select></div><div class="field"><label>${l.country}</label><select onchange="setCountry(this.value);openMobileFilters()">${Object.keys(SUPPORTED_COUNTRIES).map(k=>`<option value="${k}" ${state.country===k?'selected':''}>${SUPPORTED_COUNTRIES[k].flag} ${state.lang==='ar'?SUPPORTED_COUNTRIES[k].countryAr:SUPPORTED_COUNTRIES[k].countryEn}</option>`).join("")}</select></div><button class="reset-btn" onclick="resetFilters();closeMobileFilters()">${l.resetFilters}</button><button class="cta" onclick="closeMobileFilters()">${l.applyFilters}</button></div>`;
 sheet.classList.add("show");
}
function closeMobileFilters(){document.getElementById("mobileFilterSheet").classList.remove("show")}
function isAdminRoute(){
 const wantsAdmin=new URLSearchParams(location.search).get("admin")==="1" || location.hash==="#admin";
 if(wantsAdmin){ const base=location.origin+location.pathname.replace(/index\.html$/i,""); location.replace(base+"admin.html"); }
 return false;
}
function leaveAdmin(){
 history.pushState("",document.title,location.pathname);
 state.admin=false;
 render();
}
function totalClicks(){
 return Object.keys(platforms).reduce((s,k)=>s+(+(localStorage.getItem("click_"+k)||0)),0);
}
function scoreExplainHtml(){
 let l=L();
 return `<section class="container section"><div class="deal-score-explain"><h2>🧮 ${l.howScoreWorks}</h2><p>${l.scoreIntro}</p><div class="score-factor-grid"><div class="score-factor">💰<b>${l.factorPrice}</b>35%</div><div class="score-factor">🚚<b>${l.factorShipping}</b>25%</div><div class="score-factor">⭐<b>${l.factorRating}</b>25%</div><div class="score-factor">🔥<b>${l.factorPopularity}</b>15%</div><div class="score-factor">🌍<b>${l.factorRegion}</b>Dynamic</div></div></div></section>`;
}


function addInterest(value){
 if(!value)return;
 let arr=JSON.parse(localStorage.getItem("interests")||"[]");
 value=String(value).replace(/[^\w\u0600-\u06FF\s-]/g,"").trim();
 if(!value)return;
 arr=[value,...arr.filter(x=>x!==value)].slice(0,10);
 localStorage.setItem("interests",JSON.stringify(arr));
}
function followSearch(){
 let q=state.q || JSON.parse(localStorage.getItem("recentSearches")||"[]")[0] || "";
 if(!q)return;
 let arr=JSON.parse(localStorage.getItem("followedSearches")||"[]");
 let c=C(), label=`${q} · ${state.lang==='ar'?c.countryAr:c.countryEn}`;
 arr=[label,...arr.filter(x=>x!==label)].slice(0,8);
 localStorage.setItem("followedSearches",JSON.stringify(arr));
 addInterest(q);
 alert(L().followingSearch);
 render();
}
function saveEmailAlert(){
 let email=document.getElementById("emailAlertInput")?.value||"";
 if(!email.includes("@"))return alert("Email?");
 localStorage.setItem("alertEmail",email);
 alert(L().followingSearch);
 render();
}
function enablePushDemo(){
 localStorage.setItem("pushDemo","1");
 alert(L().followingSearch);
 render();
}
function personalizedProducts(){
 let interests=JSON.parse(localStorage.getItem("interests")||"[]").join(" ").toLowerCase();
 let last=JSON.parse(localStorage.getItem("recentSearches")||"[]")[0]||"";
 let q=(state.q||last||interests).toLowerCase();
 let data=ranked();
 let scored=data.map(p=>{
   let text=(p.title+" "+p.titleAr+" "+p.cat+" "+(p.brand||"")+" "+p.platform).toLowerCase();
   let boost=(q && text.includes(q))?2:0;
   if(interests && interests.split(/\s+/).some(w=>w.length>2 && text.includes(w)))boost+=1;
   return {...p,_personal:boost+(p.score||0)}
 }).sort((a,b)=>b._personal-a._personal);
 return scored.slice(0,4);
}
function interestTagsHtml(){
 let l=L(), arr=JSON.parse(localStorage.getItem("interests")||"[]");
 let defaults=[C().region,state.platformFilter!=="all"?platforms[state.platformFilter]?.name:"Smart Deals",state.sort,l.currency].filter(Boolean);
 let tags=(arr.length?arr:defaults).slice(0,8);
 return `<div class="interest-tags">${tags.map(t=>`<span class="interest-tag">${t}</span>`).join("")}</div>`;
}
function welcomeBackHtml(){
 let l=L(), recent=JSON.parse(localStorage.getItem("recentSearches")||"[]")[0], viewed=JSON.parse(localStorage.getItem("viewedProducts")||"[]").length;
 if(!recent && !viewed)return "";
 return `<div class="welcome-back"><div><h2>👋 ${l.welcomeBack}</h2><p>${l.welcomeBackText}${recent?` — ${recent}`:""}</p></div><div class="welcome-actions">${recent?`<button class="primary" onclick="state.q='${recent.replace(/'/g,"")}';render();document.getElementById('deals').scrollIntoView()">${l.continueLastSearch}</button>`:""}<button class="save-search-btn" onclick="followSearch()">💾 ${l.followThisSearch}</button></div></div>`;
}
function recommendedHtml(){
 let l=L(), items=personalizedProducts();
 return `<div class="personal-section"><div class="personal-head"><div><h3>🎯 ${l.recommendedForYou}</h3><small>${l.basedOnInterests}</small></div>${interestTagsHtml()}</div><div class="recommended-grid">${items.map(p=>`<div class="rec-card" onclick="openQuick('${p.id}')"><img src="${p.img}"><div><b>${productName(p)}</b><span>${platforms[p.platform]?.name||""} · ${price(p.price)}</span></div></div>`).join("")}</div></div>`;
}
function alertCenterHtml(){
 let l=L(), email=localStorage.getItem("alertEmail")||"";
 return `<div class="alert-box"><h3>🔔 ${l.emailAlerts}</h3><div class="alert-grid"><input id="emailAlertInput" value="${email}" placeholder="${l.emailPlaceholder}"><button class="cta" onclick="saveEmailAlert()">${l.activateEmailAlerts}</button></div><div class="push-demo">ℹ️ ${l.emailDemoNote}</div><h3 style="margin-top:12px">📱 ${l.pushAlerts}</h3><button class="secondary-action" onclick="enablePushDemo()">${l.activatePush}</button><div class="push-demo">ℹ️ ${l.pushDemoNote}</div></div>`;
}
function toggleNotifications(){
 let p=document.getElementById("notificationPanel");
 if(p.classList.contains("show")){p.classList.remove("show");return}
 renderNotifications();
 p.classList.add("show");
}
function renderNotifications(){
 let l=L(), p=document.getElementById("notificationPanel");
 let items=[
   ["📉",l.priceDropped, state.q || JSON.parse(localStorage.getItem("recentSearches")||"[]")[0] || "Smart deal"],
   ["🚚",l.freeShippingAppeared, C().region],
   ["🏆",l.betterPlatformToday, platforms[bestPlatformKey()]?.name || "AliExpress"],
   ["💰",l.similarDealFound, l.recommendedForYou]
 ];
 p.innerHTML=`<div class="notification-head"><h3>🔔 ${l.notifications}</h3><button class="secondary-action" onclick="toggleNotifications()">${l.close}</button></div><div class="notification-body">${items.map(i=>`<div class="notification-item"><b>${i[0]} ${i[1]}</b><span>${i[2]}</span></div>`).join("")}</div>`;
}


function scoreBreakdownHtml(p){
 let l=L(), score=dealScore(p);
 let pricePts=Math.min(35,Math.max(10,Math.round(score*0.35)));
 let shipPts=Math.min(25,Math.max(7,Math.round((100-p.ship*4)*0.25)));
 let ratingPts=Math.min(25,Math.round((p.rating/5)*25));
 let popPts=Math.min(15,Math.round(((p.reviews||1000)/9000)*15));
 return `<div class="deal-passport"><div class="passport-title"><span>🧮 ${l.howScoreWorks||"Deal Score Breakdown"}</span><span>${score}/100</span></div><div class="passport-grid"><div class="passport-item">${l.factorPrice||"Price"}<b>${pricePts}/35</b></div><div class="passport-item">${l.factorShipping||"Shipping"}<b>${shipPts}/25</b></div><div class="passport-item">${l.factorRating||"Rating"}<b>${ratingPts}/25</b></div><div class="passport-item">${l.factorPopularity||"Popularity"}<b>${popPts}/15</b></div></div></div>`;
}
function saveTrackingSettings(){
 localStorage.setItem("gaId",document.getElementById("gaId")?.value||"");
 localStorage.setItem("metaPixelId",document.getElementById("metaPixelId")?.value||"");
 localStorage.setItem("tiktokPixelId",document.getElementById("tiktokPixelId")?.value||"");
 alert("Tracking IDs saved locally. Final activation after domain and privacy policy setup.");
}
function trackingPanelHtml(){
 const ga=localStorage.getItem("gaId")||"", meta=localStorage.getItem("metaPixelId")||"", tiktok=localStorage.getItem("tiktokPixelId")||"";
 return `<div class="admin-panel"><h3>📊 Analytics / Pixels</h3><input id="gaId" placeholder="Google Analytics ID: G-XXXXXXX" value="${ga}"><input id="metaPixelId" placeholder="Meta Pixel ID" value="${meta}"><input id="tiktokPixelId" placeholder="TikTok Pixel ID" value="${tiktok}"><button class="primary" onclick="saveTrackingSettings()">Save Tracking IDs</button><p style="color:#cbd5e1;font-size:12px;line-height:1.6">Placeholders are ready. Real scripts should be activated after final domain and privacy policy setup.</p></div>`;
}


function routeName(){
 const h=(location.hash||"").replace("#","");
 return ["about","how-it-works","affiliate-disclosure","privacy-policy","terms-of-use","contact"].includes(h)?h:"";
}
function legalContent(route){
 const l=L(), ar=state.lang==="ar", today="2026";
 const copy={
  about:{
   icon:"🌍",
   title: ar?"من نحن":"About ChinaSearch",
   body: ar?`
    <p>ChinaSearch منصة مقارنة ذكية تساعد المستخدمين على البحث عن منتجات من منصات التسوق الصينية ومقارنة العروض حسب السعر، الشحن، التقييم، الدولة، العملة، والمكافآت التقديرية.</p>
    <p>هدفنا هو تسهيل قرار الشراء قبل الانتقال إلى المتجر الأصلي، وليس بيع المنتجات مباشرة.</p>
    <div class="page-grid">
      <div class="page-mini"><b>🔎 بحث أذكى</b>نساعد المستخدم في مقارنة العروض بسرعة.</div>
      <div class="page-mini"><b>🌍 حسب الدولة</b>النتائج تتأثر بالدولة والعملة والشحن.</div>
      <div class="page-mini"><b>🛡️ شفافية</b>نوضح أننا نحيل المستخدم للمتجر الأصلي.</div>
    </div>`:
    `<p>ChinaSearch is a smart comparison platform designed to help shoppers discover products from Chinese marketplaces and compare deals by price, shipping speed, rating, country, currency, and estimated rewards.</p>
    <p>Our goal is to help shoppers make a better decision before they visit the original marketplace. ChinaSearch does not sell products directly.</p>
    <div class="page-grid">
      <div class="page-mini"><b>🔎 Smarter search</b>We help users compare deals faster.</div>
      <div class="page-mini"><b>🌍 Country aware</b>Results adapt to country, currency and shipping.</div>
      <div class="page-mini"><b>🛡️ Transparent</b>We redirect users to the original marketplace.</div>
    </div>`
  },
  "how-it-works":{
   icon:"⚙️",
   title: ar?"كيف يعمل ChinaSearch؟":"How ChinaSearch Works",
   body: ar?`
    <p>يعتمد ChinaSearch على عرض بيانات منتجات تجريبية ومنطق ترتيب ذكي حاليًا، مع تجهيز المنصة للربط لاحقًا بمصادر بيانات وروابط أفلييت رسمية بعد اعتماد الموقع.</p>
    <h2>رحلة المستخدم</h2>
    <ul>
      <li>يبحث المستخدم عن منتج أو فئة.</li>
      <li>تُعرض النتائج بناءً على الدولة، العملة، المنصة، السعر، الشحن والتقييم.</li>
      <li>يستطيع المستخدم فتح Quick View لفهم سبب ترشيح العرض.</li>
      <li>عند الضغط على العرض، يتم تحويله إلى المنصة الأصلية لإتمام الشراء.</li>
    </ul>
    <div class="notice-legal">الأسعار، الشحن، المكافآت، والتقييمات في النسخة الحالية لأغراض العرض والتجربة إلى حين الربط بمصادر بيانات رسمية.</div>`:
    `<p>ChinaSearch currently uses demo product data and smart ranking logic while preparing the platform for official marketplace data and affiliate templates after approval.</p>
    <h2>User journey</h2>
    <ul>
      <li>The user searches for a product or category.</li>
      <li>Results are ranked by country, currency, platform, price, shipping and rating.</li>
      <li>The user can open Quick View to understand why a deal is recommended.</li>
      <li>When the user clicks an offer, they are redirected to the original marketplace to complete purchase.</li>
    </ul>
    <div class="notice-legal">Prices, shipping, rewards, ratings and product data in this version are for demonstration until connected to official data sources.</div>`
  },
  "affiliate-disclosure":{
   icon:"🤝",
   title: ar?"توضيح روابط الأفلييت":"Affiliate Disclosure",
   body: ar?`
    <p>قد يحتوي ChinaSearch لاحقًا على روابط أفلييت أو روابط شراكة. عند ضغط المستخدم على رابط والشراء من المتجر الأصلي، قد نحصل على عمولة من الشريك بدون زيادة في السعر على المستخدم.</p>
    <p>حاليًا، روابط الأفلييت الرسمية غير مفعلة إلى حين اعتماد الموقع من المنصات والشبكات التابعة.</p>
    <h2>ما الذي يعنيه ذلك للمستخدم؟</h2>
    <ul>
      <li>ChinaSearch لا يبيع المنتجات مباشرة.</li>
      <li>الشراء يتم على المتجر الأصلي.</li>
      <li>أي عمولة محتملة لا تضيف تكلفة على المستخدم.</li>
      <li>المكافآت أو الكاش باك تقديرية ولا تصبح مؤكدة إلا بعد اعتماد الشريك.</li>
    </ul>`:
    `<p>ChinaSearch may later include affiliate or partner links. If a user clicks a link and completes a purchase on the original marketplace, we may earn a commission from the partner at no additional cost to the user.</p>
    <p>Official affiliate links are not activated yet. They will be added after the site is reviewed and approved by marketplaces or affiliate networks.</p>
    <h2>What this means</h2>
    <ul>
      <li>ChinaSearch does not sell products directly.</li>
      <li>Purchases are completed on the original marketplace.</li>
      <li>Potential commissions do not increase the user's price.</li>
      <li>Rewards or cashback are estimated until confirmed by the partner.</li>
    </ul>`
  },
  "privacy-policy":{
   icon:"🔐",
   title: ar?"سياسة الخصوصية":"Privacy Policy",
   body: ar?`
    <p>نحترم خصوصية المستخدمين. في النسخة الحالية، يستخدم الموقع التخزين المحلي داخل المتصفح لتذكر بعض الاختيارات مثل اللغة، الدولة، عمليات البحث، المنتجات التي تمت مشاهدتها أو مراقبتها.</p>
    <h2>البيانات التي قد يتم حفظها محليًا</h2>
    <ul>
      <li>الدولة واللغة والعملة المختارة.</li>
      <li>آخر عمليات البحث.</li>
      <li>المنتجات التي تم فتحها أو مراقبة سعرها.</li>
      <li>اهتمامات المستخدم لتحسين التوصيات.</li>
    </ul>
    <h2>الإيميل والتنبيهات</h2>
    <p>واجهة تنبيهات البريد والموبايل تجريبية حاليًا. عند تفعيل Backend لاحقًا، سيتم تحديث هذه السياسة لتوضيح كيفية حفظ ومعالجة البريد والتنبيهات.</p>
    <div class="notice-legal">لا نبيع بيانات المستخدمين، ولا نشارك معلومات شخصية مع المعلنين.</div>`:
    `<p>We respect user privacy. In the current version, ChinaSearch uses browser local storage to remember preferences such as language, country, searches, viewed products and watched products.</p>
    <h2>Data stored locally</h2>
    <ul>
      <li>Selected country, language and currency.</li>
      <li>Recent searches.</li>
      <li>Viewed or watched products.</li>
      <li>User interests used for better recommendations.</li>
    </ul>
    <h2>Email and notifications</h2>
    <p>Email and mobile notification interfaces are currently demo-ready. When a backend is connected later, this policy should be updated to explain how emails and alerts are stored and processed.</p>
    <div class="notice-legal">We do not sell user data or share personal information with advertisers.</div>`
  },
  "terms-of-use":{
   icon:"📄",
   title: ar?"شروط الاستخدام":"Terms of Use",
   body: ar?`
    <p>باستخدامك ChinaSearch، أنت توافق على أن الموقع يقدم خدمة مقارنة واكتشاف عروض ولا يبيع المنتجات مباشرة.</p>
    <h2>تنبيهات مهمة</h2>
    <ul>
      <li>الأسعار والتوافر والشحن قد تتغير في أي وقت على المتجر الأصلي.</li>
      <li>المكافآت والكاش باك تقديرية إلى حين اعتماد الطلب من الشريك.</li>
      <li>ChinaSearch غير مسؤول عن تنفيذ الطلبات أو الشحن أو الاسترجاع، حيث تتم هذه العمليات لدى المتجر الأصلي.</li>
      <li>قد يتم تحديث المحتوى والبيانات بدون إشعار مسبق.</li>
    </ul>
    <p>يجب على المستخدم مراجعة تفاصيل المنتج والسياسات النهائية على المتجر الأصلي قبل الشراء.</p>`:
    `<p>By using ChinaSearch, you agree that the website provides comparison and discovery tools and does not sell products directly.</p>
    <h2>Important notices</h2>
    <ul>
      <li>Prices, availability and shipping may change at any time on the original marketplace.</li>
      <li>Rewards and cashback are estimated until confirmed by the partner.</li>
      <li>ChinaSearch is not responsible for order fulfillment, shipping, returns or refunds handled by the original marketplace.</li>
      <li>Content and data may be updated without prior notice.</li>
    </ul>
    <p>Users should review the final product details and policies on the original marketplace before purchase.</p>`
  },
  contact:{
   icon:"✉️",
   title: ar?"تواصل معنا":"Contact Us",
   body: ar?`
    <p>للاستفسارات، الشراكات، أو ملاحظات المستخدمين، يمكنك استخدام النموذج التالي. النموذج تجريبي حاليًا وسيتم ربطه بالبريد لاحقًا.</p>
    <div class="contact-box">
      <input placeholder="${l.contactName}">
      <input placeholder="${l.contactEmail}">
      <textarea placeholder="${l.contactMessage}"></textarea>
      <button class="cta" onclick="alert('${l.contactDemo}')">${l.sendMessage}</button>
    </div>
    <div class="notice-legal">${l.contactDemo}</div>`:
    `<p>For questions, partnerships or user feedback, use the form below. This form is currently a demo and will be connected to email later.</p>
    <div class="contact-box">
      <input placeholder="${l.contactName}">
      <input placeholder="${l.contactEmail}">
      <textarea placeholder="${l.contactMessage}"></textarea>
      <button class="cta" onclick="alert('${l.contactDemo}')">${l.sendMessage}</button>
    </div>
    <div class="notice-legal">${l.contactDemo}</div>`
  }
 };
 return copy[route]||copy.about;
}
function renderLegalPage(){
 const route=routeName();
 document.body.classList.toggle("route-page",!!route);
 if(!route)return;
 let l=L(), page=legalContent(route), box=document.getElementById("legalPage");
 if(!box)return;
 box.innerHTML=`<div class="container"><div class="page-card"><a class="route-back" href="#">← ${l.backHome}</a><div class="page-kicker">${page.icon} ${l.trustPages} · ${l.legalUpdated}: ${new Date().getFullYear()}</div><h1>${page.title}</h1>${page.body}<div class="legal-nav"><a href="/about.html">${l.about}</a><a href="/how-it-works.html">${l.howWorks}</a><a href="/affiliate-disclosure.html">${l.affiliateDisclosure}</a><a href="/privacy.html">${l.privacy}</a><a href="/terms.html">${l.terms}</a><a href="/contact.html">${l.contact}</a></div></div></div>`;
 window.scrollTo({top:0,behavior:"smooth"});
}


function syncHeroCardsWithSearch(){
  try{
    const q=(state.q||"").trim().toLowerCase();
    let picks=allProducts();
    if(q){
      picks=picks.filter(p=>(productName(p)+" "+p.brand+" "+platforms[p.platform].name).toLowerCase().includes(q));
      if(!picks.length) picks=allProducts();
    }
    picks=picks.sort((a,b)=>dealScore(b)-dealScore(a)).slice(0,5);
    const cards=[...document.querySelectorAll(".stage .float-card")];
    cards.forEach((card,i)=>{
      const p=picks[i%picks.length];
      if(!p) return;
      const img=card.querySelector("img");
      const title=card.querySelector("h4");
      const priceEl=card.querySelector(".float-price b");
      const badge=card.querySelector(".float-badge");
      if(img){ img.src=p.img; img.alt=productName(p); }
      if(title) title.textContent=productName(p);
      if(priceEl) priceEl.textContent=price(p.price);
      if(badge){
        const label=i===0?L().best:(p.ship<=4?L().fast:(p.free?L().freeShip:L().topRated));
        badge.textContent=label;
      }
      card.dataset.productId=p.id;
      card.onclick=()=>openQuick(p.id);
      card.style.cursor="pointer";
    });
  }catch(e){console.warn("Hero cards sync skipped",e)}
}

function render(){
 assignBrands();
 if(isAdminRoute()){ state.admin=false; }let l=L(),c=C();document.body.classList.toggle("admin-mode",isAdminRoute());document.documentElement.lang=state.lang;setTimeout(()=>{let f=document.getElementById("mobileFilterFab");if(f)f.innerHTML="⚙️ "+l.filters},0); if(state.q)addInterest(state.q); if(state.brandFilter!=="all")addInterest(state.brandFilter); if(state.platformFilter!=="all"&&platforms[state.platformFilter])addInterest(platforms[state.platformFilter].name);document.documentElement.dir=state.lang==="ar"?"rtl":"ltr";document.body.dir=document.documentElement.dir;
 let data=ranked().filter(p=>!state.q||p.title.toLowerCase().includes(state.q.toLowerCase())||p.titleAr.includes(state.q)||p.cat.toLowerCase().includes(state.q.toLowerCase())||(p.brand||'').toLowerCase().includes(state.q.toLowerCase()));
 if(state.sort==="price")data.sort((a,b)=>a.price-b.price);else if(state.sort==="ship")data.sort((a,b)=>a.ship-b.ship);else if(state.sort==="rating")data.sort((a,b)=>b.rating-a.rating);else if(state.sort==="free")data.sort((a,b)=>(b.free?1:0)-(a.free?1:0)||b.score-a.score);else if(state.sort==="pop")data.sort((a,b)=>b.reviews-a.reviews);else data.sort((a,b)=>b.score-a.score);
 window._products={};data.forEach(p=>window._products[p.id]=p);
 let best=data.find(p=>p.isBest)||data[0],cheap=data.find(p=>p.isCheap)||data[1],fast=data.find(p=>p.isFast)||data[2],rated=data.find(p=>p.isTopRated)||data[3],free=data.find(p=>p.free)||data[4],bp=bestPlatformKey(),bpStats=platformStats(bp),bpScore=bestPlatformScore(bp);
 let filterBtns=[["score",l.best],["price",l.cheap],["rating",l.rating],["ship",l.fast],["free",l.free],["pop",l.popular]].map(x=>`<button class="chip ${state.sort===x[0]?'active':''}" onclick="state.sort='${x[0]}';render()">${x[1]}</button>`).join("");
 renderLegalPage();
document.getElementById("app").innerHTML=`
 <header class="topbar"><div class="container nav"><a class="brand"><div class="logo"><svg viewBox="0 0 96 96" aria-label="ChinaSearch logo">
  <defs>
    <linearGradient id="csOrange" x1="20" y1="10" x2="80" y2="80">
      <stop stop-color="#ff9a22"/><stop offset="1" stop-color="#ff4d00"/>
    </linearGradient>
    <linearGradient id="csNavy" x1="10" y1="10" x2="90" y2="90">
      <stop stop-color="#0b2b5c"/><stop offset="1" stop-color="#061225"/>
    </linearGradient>
  </defs>
  <circle cx="42" cy="42" r="31" fill="none" stroke="url(#csNavy)" stroke-width="9"/>
  <path d="M63 63 L84 84" stroke="url(#csNavy)" stroke-width="11" stroke-linecap="round"/>
  <path d="M17 57 C27 48 42 61 58 49" fill="none" stroke="#0b2b5c" stroke-width="5" stroke-linecap="round"/>
  <path d="M14 55 h9 v-7 h8 v8" fill="none" stroke="#0b2b5c" stroke-width="4" stroke-linejoin="round"/>
  <path d="M36 24 L59 35 L59 58 L36 69 L14 58 L14 35 Z" fill="url(#csOrange)"/>
  <path d="M14 35 L36 46 L59 35" fill="none" stroke="#fff" stroke-width="4" opacity=".9"/>
  <path d="M36 46 V69" fill="none" stroke="#fff" stroke-width="4" opacity=".9"/>
  <path d="M27 29 L49 40" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  <rect x="63" y="16" width="18" height="18" rx="4" fill="#e11d2e"/>
  <path d="M68 20 v10 M76 20 v10 M68 25 h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
</svg></div><div><h1>ChinaSearch</h1><span>${l.sub.substring(0,68)}...</span></div></a><nav class="navlinks"><a class="active">${l.home}</a><a href="#deals">${l.deals}</a><a href="#platforms">${l.platforms}</a><a href="#how">${l.how}</a><a href="#faq">${l.faq}</a></nav><div class="nav-actions"><select class="select" onchange="setCountry(this.value)">${Object.keys(SUPPORTED_COUNTRIES).map(k=>`<option value="${k}" ${state.country===k?'selected':''}>${SUPPORTED_COUNTRIES[k].flag} ${state.lang==='ar'?SUPPORTED_COUNTRIES[k].countryAr:SUPPORTED_COUNTRIES[k].countryEn}</option>`).join("")}</select><select class="select" onchange="setLang(this.value)"><option value="ar" ${state.lang==='ar'?'selected':''}>AR</option><option value="en" ${state.lang==='en'?'selected':''}>EN</option><option value="fr">FR</option><option value="de">DE</option><option value="es">ES</option><option value="pt">PT</option><option value="ru">RU</option></select><button class="notif-btn" onclick="toggleNotifications()">🔔<span class="notif-dot"></span></button><a class="primary" href="#deals">${l.start}</a></div></div></header>
 <section class="hero"><div class="container hero-inner"><div><div class="badge-line"><span class="pill">✅ ${l.trusted}</span><span class="pill">🌍 ${c.region}</span><span class="pill">💱 ${c.currency}</span></div><div class="hero-slogan">✨ ${l.heroPunch}</div><h2>${l.title}<br><span class="accent">${l.accent}</span></h2><p>${l.heroBetter}</p><div class="hero-helper-row"><span class="hero-helper-chip">🤖 ${l.aiAssistant}</span><span class="hero-helper-chip">🌍 ${l.geoTitle}</span><span class="hero-helper-chip">🏆 ${l.dealScore}</span></div><div class="search-panel"><span class="icon">🔍</span><input value="${state.q}" oninput="state.q=this.value;render()" placeholder="${l.search}"><button onclick="rememberSearch();document.getElementById('deals').scrollIntoView()">${l.searchBtn}</button></div><div class="hero-search-note"><span class="hint">⚡ ${l.bestMatchTitle}</span><span class="hint">💱 ${l.currency}: ${c.currency}</span><span class="hint">🚚 ${l.fast}</span></div>
<div class="search-examples">
  <button class="search-example" onclick="state.q=this.innerText;render();document.getElementById('deals').scrollIntoView()">🔎 ${l.ex1}</button>
  <button class="search-example" onclick="state.q=this.innerText;render();document.getElementById('deals').scrollIntoView()">⌚ ${l.ex2}</button>
  <button class="search-example" onclick="state.sort='free';render();document.getElementById('deals').scrollIntoView()">🚚 ${l.ex3}</button>
  <button class="search-example" onclick="state.platformFilter='shein';render();document.getElementById('deals').scrollIntoView()">🛍️ ${l.ex4}</button>
  <button class="search-example" onclick="state.platformFilter='aliexpress';render();document.getElementById('deals').scrollIntoView()">🏷️ ${l.ex5}</button>
  <button class="search-example" onclick="state.q=this.innerText;render();document.getElementById('deals').scrollIntoView()">📱 ${l.ex6}</button>
</div>
<div class="top-cats">
  <button class="cat-chip" onclick="state.q='electronics';render();document.getElementById('deals').scrollIntoView()">⚡ ${l.catElectronics}</button>
  <button class="cat-chip" onclick="state.q='fashion';render();document.getElementById('deals').scrollIntoView()">👕 ${l.catFashion}</button>
  <button class="cat-chip" onclick="state.q='beauty';render();document.getElementById('deals').scrollIntoView()">✨ ${l.catBeauty}</button>
  <button class="cat-chip" onclick="state.q='home';render();document.getElementById('deals').scrollIntoView()">🏠 ${l.catHome}</button>
  <button class="cat-chip" onclick="state.q='auto';render();document.getElementById('deals').scrollIntoView()">🚗 ${l.catAuto}</button>
  <button class="cat-chip" onclick="state.q='gadgets';render();document.getElementById('deals').scrollIntoView()">🎮 ${l.catGadgets}</button>
</div>
<div class="platform-tags">${Object.keys(platforms).filter(k=>platforms[k].enabled).map(k=>`<span class="platform-tag" style="color:${platforms[k].color}">${platforms[k].name}</span>`).join("")}</div><div class="stats"><div class="stat"><b>20K+</b><span>${l.products}</span></div><div class="stat"><b>${Object.keys(platforms).filter(k=>platforms[k].enabled).length}</b><span>${l.markets}</span></div><div class="stat"><b>24h</b><span>${l.updated}</span></div></div><div class="geo-panel"><div><h4>✨ ${l.geoTitle}</h4><p>${l.geoText}</p></div><div class="geo-item"><b>${c.flag} ${state.lang==='ar'?c.countryAr:c.countryEn}</b><span>${l.country}</span></div><div class="geo-item"><b>${state.lang.toUpperCase()}</b><span>${l.language}</span></div><div class="geo-item"><b>${c.symbol} ${c.currency}</b><span>${l.currency}</span></div></div></div><div class="stage"><div class="orbit"></div><div class="orbit o2"></div>${floatCard(cheap,{label:"Best Price",color:"#22c55e"},"top:30px;right:60px;--rot:6deg;transform:rotate(6deg)")} ${floatCard(fast,{label:"Fast Shipping",color:"#3b82f6"},"top:80px;left:15px;--rot:-8deg;transform:rotate(-8deg)")} ${floatCard(rated,{label:"Top Rated",color:"#8b5cf6"},"top:245px;right:5px;--rot:-10deg;transform:rotate(-10deg)")} ${floatCard(free,{label:"Free Shipping",color:"#16a34a"},"top:285px;left:70px;--rot:8deg;transform:rotate(8deg)")} ${floatCard(best,{label:"Great Deal",color:"#f97316"},"bottom:5px;right:175px;--rot:2deg;transform:rotate(2deg)")}</div></div></section>
 <section class="benefits"><div class="container benefit-strip"><div class="benefit"><div class="bicon">🏷️</div><div><b>${l.benefit1}</b><span>${l.benefit1s}</span></div></div><div class="benefit"><div class="bicon">🚚</div><div><b>${l.benefit2}</b><span>${l.benefit2s}</span></div></div><div class="benefit"><div class="bicon">🚀</div><div><b>${l.benefit3}</b><span>${l.benefit3s}</span></div></div><div class="benefit"><div class="bicon">🎁</div><div><b>${l.benefit4}</b><span>${l.benefit4s}</span></div></div></div></section>
 <section class="rewards-section">
  <div class="container">
   <div class="rewards-card">
    <div>
     <h2>🎁 ${l.rewardsTitle}</h2>
     <p>${l.rewardsSub}</p>
     <div class="reward-steps">
      <div class="reward-step">1 · ${l.rewardStep1}</div>
      <div class="reward-step">2 · ${l.rewardStep2}</div>
      <div class="reward-step">3 · ${l.rewardStep3}</div>
     </div>
     <div class="bonus-strip">
      <span class="bonus-chip">💡 ${l.estimated}</span>
      <span class="bonus-chip">⚠️ ${l.cashbackNote}</span>
     </div>
    </div>
    <div class="reward-wallet">
     <div class="wallet-row"><span>${l.wallet}</span><span class="level-pill">${l.level}: Smart Shopper</span></div>
     <div class="wallet-points">+${Math.round((best.price*7)+35)} ${l.points}</div>
     <div class="progress"><span style="width:62%"></span></div>
     <p style="position:relative;z-index:2;color:#cbd5e1;margin:12px 0 0">${l.nextLevel}</p>
    </div>
   </div>
  </div>
 </section>
 <section class="container section" style="padding-top:18px;padding-bottom:10px">
  <div class="live-feed"><div class="ticker">${liveFeedItems().concat(liveFeedItems()).map(x=>`<span>⚡ ${x}</span>`).join("")}</div></div>
 </section>
<section class="section"><div class="container best-deal"><div>${card(best)}</div><div class="best-copy"><h2>🔥 ${l.bestDeal}</h2><p>${l.bestDealSub}</p><div class="reason"><b>🤖 ${l.whyChosen}</b><ul><li>${l.rankReason}</li><li>${l.dealScore}: ${Math.round(best.score*100)}/100</li><li>${platforms[best.platform].name} · ${price(best.price)} · ${best.ship} ${l.days}</li></ul></div></div></div></section>
 <div class="filters"><div class="container filter-row"><b>${l.filter}</b>${filterBtns}</div></div>
 <main id="deals" class="container section">${welcomeBackHtml()}<div class="section-head"><div><h2>${l.deals}</h2><p>${l.resultsNote}</p></div><span class="pill" style="background:#fff;color:#111;border-color:#e5e7eb">${l.bestToday}: ${c.flag} ${state.lang==='ar'?c.countryAr:c.countryEn}</span></div>${recommendedHtml()}${aiSummaryHtml(best)}${platformWinnerHtml(data)}<div class="match-box"><div><b>🤖 ${bestMatchTitle()}</b><span>${matchMessage()}</span></div><div class="match-score">${best?Math.round((best.score||.85)*100):88}<small>/100</small></div></div><div class="advanced-toolbar">
   <div class="toolbar-grid">
    <div class="field"><label>${l.viewMode}</label><div class="view-toggle">${[["cards","grid",l.cards],["list","list",l.list],["compact","compact",l.compact],["compare","compare",l.compare]].map(v=>`<button class="view-btn ${state.view===v[0]?'active':''}" onclick="state.view='${v[0]}';render()">${icon(v[1])}<span>${v[2]}</span></button>`).join("")}</div></div>
    <div class="field"><label>${l.platformFilter}</label><select onchange="state.platformFilter=this.value;state.brandFilter='all';render()"><option value="all">${l.allPlatforms}</option>${Object.keys(platforms).filter(k=>platforms[k].enabled).map(k=>`<option value="${k}" ${state.platformFilter===k?'selected':''}>${platforms[k].name}</option>`).join("")}</select></div>
    <div class="field"><label>${l.brandFilter}</label><select onchange="state.brandFilter=this.value;render()"><option value="all">${l.allBrands}</option>${availableBrands().map(b=>`<option value="${b}" ${state.brandFilter===b?'selected':''}>${b}</option>`).join("")}</select></div>
    <div class="field"><label>${l.country}</label><select onchange="setCountry(this.value)">${Object.keys(SUPPORTED_COUNTRIES).map(k=>`<option value="${k}" ${state.country===k?'selected':''}>${SUPPORTED_COUNTRIES[k].flag} ${state.lang==='ar'?SUPPORTED_COUNTRIES[k].countryAr:SUPPORTED_COUNTRIES[k].countryEn}</option>`).join("")}</select></div>
   </div>
   <div class="intent-chips"><button class="intent-chip" onclick="setIntent('cheap')">${icon('money')}<span>${l.intentCheap}</span></button><button class="intent-chip" onclick="setIntent('fast')">${icon('rocket')}<span>${l.intentFast}</span></button><button class="intent-chip" onclick="setIntent('free')">${icon('free')}<span>${l.intentFree}</span></button><button class="intent-chip" onclick="setIntent('quality')">${icon('quality')}<span>${l.intentQuality}</span></button><button class="save-search-btn" onclick="saveSearch()">💾 ${l.saveSearch}</button><button class="reset-btn" onclick="resetFilters()">↺ ${l.resetFilters}</button></div>
  </div>
  <div class="grid view-${state.view}">${data.map(card).join("")}</div><div class="notice">ℹ️ ${l.resultsNote}</div>${smartListHtml()}${alertCenterHtml()}${trustPanelHtml()}</main>${scoreExplainHtml()}
 <section id="platforms" class="container section"><div class="best-platform-hero"><div class="best-platform-content"><span class="pill">🏆 ${l.bestPlatform}</span><div class="platform-title-big"><span class="icon" style="background:${platforms[bp].color}">${platforms[bp].name[0]}</span><div><b>${platforms[bp].name}</b><p>${l.bestPlatformSub}</p></div></div><div class="best-platform-actions"><a class="primary" href="#deals">${l.bestPlatformCta}</a><a class="ghost" href="/how-it-works.html">${l.howWorks||l.how}</a></div></div><div class="best-platform-score"><div class="score-box"><div class="score-row"><b>${l.dealScore}</b><b>${bpScore}/100</b></div><div class="bar"><span style="width:${bpScore}%"></span></div></div><div class="score-box"><b>${l.bestPlatformWhy}</b><div class="score-row"><span>⭐ Rating</span><span>${bpStats.avgRating.toFixed(1)}</span></div><div class="score-row"><span>🚚 Shipping</span><span>${bpStats.avgShip.toFixed(1)} ${l.days}</span></div><div class="score-row"><span>💰 ${l.commission}</span><span>${platforms[bp].commission}%</span></div></div></div></div></section>
 
<section id="platforms" class="container section">
  <div class="section-head">
    <div>
      <h2>${l.platformTitle}</h2>
      <p>${l.platformSub}</p>
    </div>
  </div>
  <div class="platforms">
    ${Object.keys(platforms).filter(k=>platforms[k].enabled).map(k=>`
      <div class="platform-card">
        <span class="dot" style="background:${platforms[k].color}">${platforms[k].name[0]}</span>
        <h3>${platforms[k].name}</h3>
        <p>${l.bestPlatformSub}</p>
      </div>
    `).join("")}
  </div>
  <div class="notice">🔒 ${state.lang==='ar'?'إدارة المنصات وإضافة/حذف المنصات موجودة داخل لوحة تحكم خاصة ولا تظهر للمستخدم العادي.':'Marketplace management is kept inside the private admin panel and is not shown to regular visitors.'}</div>
</section>
<section id="why" class="container section lower-compact"><div class="section-head"><div><h2>${l.whyTitle}</h2><p>${l.whySub}</p></div></div><div class="info-grid"><div class="info-card"><div class="big">🛡️</div><h3>${l.w1}</h3><p>${l.w1p}</p></div><div class="info-card"><div class="big">💸</div><h3>${l.w2}</h3><p>${l.w2p}</p></div><div class="info-card"><div class="big">⚡</div><h3>${l.w3}</h3><p>${l.w3p}</p></div><div class="info-card"><div class="big">🌍</div><h3>${l.w4}</h3><p>${l.w4p}</p></div></div></section>
 <section id="how" class="container section lower-compact"><div class="section-head"><h2>${l.howTitle}</h2></div><div class="steps"><div class="step"><div class="step-num">1</div><h3>${l.s1}</h3><p>${l.s1p}</p></div><div class="step"><div class="step-num">2</div><h3>${l.s2}</h3><p>${l.s2p}</p></div><div class="step"><div class="step-num">3</div><h3>${l.s3}</h3><p>${l.s3p}</p></div></div></section>
 <section id="faq" class="container section lower-compact"><div class="section-head"><h2>${l.faq}</h2></div><div class="faq"><details><summary>${l.q1}</summary><p>${l.a1}</p></details><details><summary>${l.q2}</summary><p>${l.a2}</p></details><details><summary>${l.q3}</summary><p>${l.a3}</p></details><details><summary>${l.q4}</summary><p>${l.a4}</p></details></div></section>
 <footer><div class="container footer-grid"><div><h3>ChinaSearch</h3><p>${l.footer}</p><div class="footer-trust-links">
  <a href="/about.html">About</a>
  <a href="/how-it-works.html">How it works</a>
  <a href="/affiliate-disclosure.html">Affiliate disclosure</a>
  <a href="/privacy.html">Privacy</a>
  <a href="/terms.html">Terms</a>
  <a href="/contact.html">Contact</a>
</div><div class="legal-nav">
  <a href="/about.html">${l.about}</a>
  <a href="/how-it-works.html">${l.howWorks}</a>
  <a href="/affiliate-disclosure.html">${l.affiliateDisclosure}</a>
  <a href="/privacy.html">${l.privacy}</a>
  <a href="/terms.html">${l.terms}</a>
  <a href="/contact.html">${l.contact}</a>
</div></div><div><h4>${l.deals}</h4><a href="#deals">${l.best}</a><a>${l.cheap}</a><a>${l.fast}</a></div><div><h4>${l.platforms}</h4>${Object.keys(platforms).slice(0,4).map(k=>`<a>${platforms[k].name}</a>`).join("")}</div><div><h4>${l.country}</h4><a>${c.flag} ${state.lang==='ar'?c.countryAr:c.countryEn}</a><a>${c.currency}</a><a>${c.region}</a></div></div></footer>
 `;
}
window.addEventListener('scroll',()=>{document.body.classList.toggle('show-jump', window.scrollY < 500)});


const __csOriginalRenderV47 = typeof render==="function" ? render : null;
if(__csOriginalRenderV47){
  render=function(){
    __csOriginalRenderV47();
    requestAnimationFrame(() => requestAnimationFrame(syncHeroCardsWithSearch));
  }
}

bootstrapApp();
window.addEventListener('hashchange',()=>{render();renderLegalPage()});
