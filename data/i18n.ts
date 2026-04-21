export const dictionary = {
  ar: {
    appName: "StudyTech Advisor",
    nav: { home: "الرئيسية", learn: "أساسيات", quiz: "الاختبار", devices: "أجهزة موثوقة", favorites: "المفضلة", contact: "التواصل", dashboard: "لوحة التحكم", signin: "تسجيل الدخول", signup: "إنشاء حساب", signout: "تسجيل الخروج" },
    hero: { title: "اختر جهازك الجامعي بثقة", subtitle: "منصة ذكية تقترح أفضل لابتوب حسب تخصصك وميزانيتك.", start: "ابدأ الاختبار", learn: "تعلم الأساسيات" },
    common: { language: "EN", light: "فاتح", dark: "داكن", save: "حفظ", remove: "إزالة", viewProduct: "عرض المنتج", topMatches: "أفضل 3 ترشيحات", mute: "كتم", unmute: "صوت" },
    contact: { title: "خبير أجهزة", subtitle: "تواصل مباشرة عبر واتساب" },
    quiz: {
      title: "اختبار الجهاز الذكي",
      start: "ابدأ الآن",
      next: "التالي",
      back: "السابق",
      finish: "عرض النتائج",
      other: "أخرى",
      questions: {
        major: "ما هو تخصصك؟",
        budget: "ما ميزانيتك (RM)؟",
        usage: "ما الاستخدام الأساسي؟",
        os: "النظام المفضل؟",
        portability: "ما أهمية خفة الوزن؟"
      },
      options: {
        major: ["علوم حاسوب", "تصميم", "إدارة أعمال"],
        budget: ["أقل من 3500", "3500-5500", "أكثر من 5500"],
        usage: ["برمجة", "تصميم ومونتاج", "استخدام جامعي يومي"],
        os: ["Windows", "macOS", "أي نظام"],
        portability: ["منخفضة", "متوسطة", "عالية"]
      }
    },
    results: { title: "نتائجك الذكية", reason: "سبب التوصية" },
    auth: { welcome: "مرحباً", email: "البريد الإلكتروني", name: "الاسم", password: "كلمة المرور", signin: "دخول", signup: "إنشاء حساب" },
    dashboard: { title: "أهلاً بك", subtitle: "ملخص حسابك ومفضلاتك" },
    learn: { title: "أساسيات شراء اللابتوب", subtitle: "15 موضوعاً مبسطاً لاتخاذ قرار أفضل" }
  },
  en: {
    appName: "StudyTech Advisor",
    nav: { home: "Home", learn: "Learn Basics", quiz: "Quiz", devices: "Trusted Devices", favorites: "Favorites", contact: "Contact", dashboard: "Dashboard", signin: "Sign In", signup: "Sign Up", signout: "Sign Out" },
    hero: { title: "Choose your university device with confidence", subtitle: "AI-like guidance tailored to your major, budget, and preferences.", start: "Start Quiz", learn: "Learn Basics" },
    common: { language: "AR", light: "Light", dark: "Dark", save: "Save", remove: "Remove", viewProduct: "View Product", topMatches: "Top 3 Matches", mute: "Mute", unmute: "Sound" },
    contact: { title: "Device Advisor", subtitle: "Contact trusted experts directly on WhatsApp" },
    quiz: {
      title: "Smart Device Quiz",
      start: "Start Now",
      next: "Next",
      back: "Back",
      finish: "See Results",
      other: "Other",
      questions: {
        major: "What is your major?",
        budget: "What is your budget (RM)?",
        usage: "Primary use case?",
        os: "Preferred OS?",
        portability: "How important is portability?"
      },
      options: {
        major: ["Computer Science", "Design", "Business"],
        budget: ["Below 3500", "3500-5500", "Above 5500"],
        usage: ["Programming", "Design & Editing", "Daily University Work"],
        os: ["Windows", "macOS", "Any"],
        portability: ["Low", "Medium", "High"]
      }
    },
    results: { title: "Your Smart Results", reason: "Why this match" },
    auth: { welcome: "Welcome", email: "Email", name: "Name", password: "Password", signin: "Sign In", signup: "Create Account" },
    dashboard: { title: "Welcome back", subtitle: "Your account and favorites at a glance" },
    learn: { title: "Laptop Basics", subtitle: "15 practical topics to buy smarter" }
  }
} as const;
