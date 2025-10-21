# دوراتي أونلاين - استراتيجية البنتاجون

موقع Next.js متخصص للمدربين العرب يقدم استراتيجية البنتاجون الخماسية لتحقيق دخل 6 أرقام شهرياً.

## 🚀 المميزات

- **تصميم عربي RTL**: مُحسَّن للغة العربية مع خط Almarai
- **تجربة مستخدم متطورة**: رسوم متحركة ناعمة وتفاعل سلس
- **تكامل Supabase**: حفظ آمن لبيانات النماذج
- **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة
- **تحسين SEO**: محرك بحث محسَّن للمحتوى العربي

## 📋 متطلبات النظام

- Node.js 18+
- npm أو yarn
- حساب Supabase (مجاني)

## ⚡ التشغيل السريع

### 1. استنساخ المشروع

```bash
git clone [repository-url]
cd hussien-course
```

### 2. تثبيت الحزم

```bash
npm install
```

### 3. إعداد متغيرات البيئة

أنشئ ملف `.env.local` في الجذر الرئيسي:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_PASSWORD=your_admin_password
```

### 4. إعداد قاعدة البيانات (Supabase)

قم بتسجيل الدخول إلى [Supabase](https://supabase.com) وأنشئ جدول جديد:

```sql
CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- إضافة سياسة الأمان (RLS)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- سماح بالإدراج للجميع
CREATE POLICY "Allow insert for everyone" ON submissions
  FOR INSERT WITH CHECK (true);

-- سماح بالقراءة للجميع (اختياري)
CREATE POLICY "Allow read for everyone" ON submissions
  FOR SELECT USING (true);
```

### 5. تشغيل المشروع

```bash
npm run dev
```

الموقع سيعمل على: `http://localhost:3000`

## 🎬 تغيير فيديو YouTube

### في صفحة الفيديو الكاملة

اذهب إلى `app/video/page.tsx` وعدّل:

```javascript
const CONFIG = {
  YOUTUBE_VIDEO_ID: "your_video_id_here", // ضع معرف الفيديو هنا
  VIDEO_TITLE: "عنوان الفيديو الجديد",
};
```

### في الصفحة الرئيسية (الفيديو التشويقي)

اذهب إلى `components/Hero.tsx` وعدّل منطقة الفيديو حسب الحاجة.

## 🎨 تخصيص التصميم

### تغيير الألوان الرئيسية

عدّل `app/globals.css`:

```css
:root {
  --primary: #1e40af; /* اللون الأساسي - أزرق */
  --accent: #059669; /* لون مساعد - أخضر */
  --background: #ffffff; /* خلفية */
  --foreground: #171717; /* نص */
}
```

### تخصيص المحتوى العربي

جميع النصوص موجودة في الملفات التالية:

- `components/Hero.tsx` - القسم البطل
- `components/Benefits.tsx` - المزايا
- `components/AboutMethod.tsx` - استراتيجية البنتاجون
- `components/Testimonials.tsx` - شهادات العملاء
- `components/Steps.tsx` - خطوات العمل
- `components/FreeGift.tsx` - الهدية المجانية
- `components/FAQ.tsx` - الأسئلة الشائعة
- `components/Footer.tsx` - التذييل

## 🗂️ هيكل المشروع

```
├── app/
│   ├── globals.css          # التنسيقات العامة
│   ├── layout.tsx           # تخطيط الموقع الرئيسي
│   ├── page.tsx            # الصفحة الرئيسية
│   ├── video/
│   │   └── page.tsx        # صفحة الفيديو الكامل
│   └── thank-you/
│       └── page.tsx        # صفحة الشكر
├── components/
│   ├── Hero.tsx            # قسم البطل
│   ├── ModalForm.tsx       # نموذج النافذة المنبثقة
│   ├── Benefits.tsx        # قسم المزايا
│   ├── AboutMethod.tsx     # استراتيجية البنتاجون
│   ├── Testimonials.tsx    # شهادات العملاء
│   ├── Steps.tsx           # خطوات العمل
│   ├── FreeGift.tsx       # الهدية المجانية
│   ├── FAQ.tsx            # الأسئلة الشائعة
│   └── Footer.tsx         # التذييل
├── lib/
│   └── supabaseClient.ts  # إعداد Supabase
└── .env.local             # متغيرات البيئة
```

## 📊 إدارة البيانات

### عرض البيانات المرسلة

يمكنك عرض البيانات المرسلة من النماذج في:

1. لوحة تحكم Supabase
2. أو إنشاء صفحة إدارة مخصصة

### مثال لاستعلام البيانات:

```javascript
import { supabase } from "@/lib/supabaseClient";

async function getSubmissions() {
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
}
```

## 🔒 الأمان والخصوصية

### حماية البيانات

- تم تفعيل Row Level Security (RLS) في Supabase
- التشفير التلقائي لجميع البيانات
- عدم تخزين كلمات مرور في قاعدة البيانات

### متغيرات البيئة

تأكد من عدم رفع ملف `.env.local` إلى المستودع العام.

## 🚀 النشر والاستضافة

### النشر على Vercel (مُوصى به)

1. ارفع المشروع إلى GitHub
2. اربط المستودع بـ Vercel
3. أضف متغيرات البيئة في لوحة تحكم Vercel
4. انشر المشروع

### النشر على Netlify

```bash
npm run build
npm run export
```

ثم ارفع مجلد `out` إلى Netlify.

## 📱 التوافق مع الهواتف

الموقع مُحسَّن للعمل على:

- ✅ الهواتف الذكية (iOS/Android)
- ✅ الأجهزة اللوحية
- ✅ أجهزة الكمبيوتر المكتبي
- ✅ المتصفحات الحديثة

## 🔧 استكشاف الأخطاء

### خطأ في اتصال Supabase

تأكد من:

- صحة URL و ANON KEY
- إنشاء جدول `submissions`
- تفعيل RLS والسياسات

### خطأ في عرض الخط العربي

تأكد من:

- تحميل خط Almarai بنجاح
- إعداد `dir="rtl"` في layout.tsx
- التحقق من اتصال الإنترنت

### مشاكل في الرسوم المتحركة

تأكد من:

- تثبيت framer-motion
- عدم وجود تضارب في CSS
- تفعيل JavaScript في المتصفح

## 🆘 الدعم الفني

للحصول على المساعدة:

1. **المشاكل الشائعة**: راجع قسم استكشاف الأخطاء أعلاه
2. **الأسئلة التقنية**: أنشئ Issue في المستودع
3. **التخصيص**: راجع التوثيق في الملفات

## 📝 الترخيص

هذا المشروع مُرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

---

**تم بناؤه بـ ❤️ للمجتمع العربي التدريبي**

© 2025 دوراتي أونلاين - جميع الحقوق محفوظة
