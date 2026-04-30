
# دليل محمود لتشغيل ChinaSearch بدون خبرة

## مهم جداً
هذا المشروع React وليس Shopify Liquid. يعني لا تضعه داخل Shopify مباشرة.
أسهل طريقين لك:

## الطريق الأسهل: Vercel
1. افتح vercel.com واعمل حساب.
2. ارفع فولدر المشروع على GitHub أو اطلب من أي مطور يرفعه لك.
3. في Vercel اختر Import Project.
4. Build command: `npm run build`
5. Output directory: `dist/public`
6. بعد النشر سيعطيك رابط مباشر.

## ربطه بالدومين
بعد النشر اربط الدومين chinasearch.store من إعدادات Vercel DNS.

## ماذا عن Shopify؟
Shopify ممتاز لو عندك متجر ومنتجاتك أنت. لكن مشروع ChinaSearch الحالي هو منصة أفلييت ومقارنة، لذلك الأفضل يشتغل على Vercel/Netlify، وليس داخل Shopify.

## لوحة التحكم
افتح `/admin`
كلمة المرور التجريبية: `chinasearch2024`

## قبل الإطلاق الحقيقي
- غيّر كلمة مرور الأدمن.
- ضع Affiliate IDs الحقيقية من لوحة التحكم.
- استخدم API حقيقي لاحقاً بدل Mock Data.
