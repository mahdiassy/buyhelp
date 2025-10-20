const fs = require('fs');
const path = require('path');

// Professional Arabic translations (RTL)
const arTranslations = {
  // Language switcher specific keys
  "language": {
    "select": "اختر اللغة",
    "switch_to": "التبديل إلى {{lang}}",
    "english": "الإنجليزية",
    "french": "الفرنسية",
    "arabic": "العربية"
  },

  // Navigation & Categories
  "all_category": "جميع الفئات",
  "select_category": "اختر الفئة",
  "new": "جديد",
  "hot": "مميز",
  "home": "الرئيسية",
  "paris": "باريس",
  "tokyo": "طوكيو",
  "osaka": "أوساكا",
  "rome": "روما",
  "madrid": "مدريد",
  "berlin": "برلين",
  "denver": "دنفر",
  "collections": "المجموعات",
  "collection_layouts": "تخطيطات المجموعات",
  "collection_left_sidebar": "مجموعة مع الشريط الجانبي الأيسر",
  "collection_right_sidebar": "مجموعة مع الشريط الجانبي الأيمن",
  "collection_no_sidebar": "مجموعة بدون شريط جانبي",
  "collection_3_grid": "شبكة 3 أعمدة",
  "collection_4_grid": "شبكة 4 أعمدة",
  "collection_5_grid": "شبكة 5 أعمدة",
  "collection_list_view": "عرض القائمة",
  "category_slider": "شريط تمرير الفئات",
  "category_sidebar": "الشريط الجانبي للفئات",
  "category_banner": "لافتة الفئة",
  "offcanvas_filter": "فلتر منبثق",
  
  // Product related
  "product": "المنتج",
  "product_pages": "صفحات المنتجات",
  "product_thumbnail": "صورة مصغرة للمنتج",
  "product_images": "صور المنتج",
  "product_slider": "شريط تمرير المنتجات",
  "product_sticky": "منتج ثابت",
  "product_accordion": "أكورديون المنتج",
  "product_tab": "تبويب المنتج",
  "product_features": "مميزات المنتج",
  "bundle_cross_sale": "حزمة (بيع تقاطعي)",
  "hot_stock_progress": "تقدم المخزون الساخن",
  "sold_out": "نفذت الكمية",
  "sale_countdown": "العد التنازلي للتخفيضات",
  "product_zoom": "تكبير المنتج",
  "product_variants_style": "أنماط متغيرات المنتج",
  "variant_rectangle": "متغير مستطيل",
  "variant_circle": "متغير دائري",
  "variant_image_swatch": "عينة صورة المتغير",
  "variant_color": "متغير اللون",
  "variant_radio_button": "زر اختيار المتغير",
  "variant_dropdown": "قائمة منسدلة للمتغيرات",
  "sticky_checkout": "دفع ثابت",
  "dynamic_checkout": "دفع ديناميكي",
  "secure_checkout": "دفع آمن",
  "active_product_view": "عرض المنتج النشط",
  "active_last_orders": "آخر الطلبات النشطة",
  "product_simple": "منتج بسيط",
  "product_classified": "منتج مصنف",
  "size_chart": "جدول المقاسات",
  "delivery_return": "التوصيل والإرجاع",
  "payment_trust_badges": "شارات الثقة في الدفع",
  "ask_an_expert": "اسأل خبيرًا",
  "product_tags": "وسوم المنتج",
  "product_information": "معلومات المنتج",
  "social_share": "مشاركة اجتماعية",
  "related_products": "منتجات ذات صلة",
  "wishlist_compare": "قائمة الرغبات والمقارنة",
  
  // Features & Templates
  "features": "المميزات",
  "theme_features": "مميزات القالب",
  "sticky_compare": "مقارنة ثابتة",
  "cart_hover_sticky": "سلة عائمة",
  "cart_sidebar": "الشريط الجانبي للسلة",
  "cart_customize": "تخصيص السلة",
  "email_template": "قالب البريد الإلكتروني",
  "welcome_template": "قالب الترحيب",
  "abondonment": "التخلي عن السلة",
  "offer_template": "قالب العرض",
  "order_success": "تم الطلب بنجاح",
  "reset_password": "إعادة تعيين كلمة المرور",
  "recent_purchase_product": "المشتريات الأخيرة",
  "newsletter": "النشرة الإخبارية",
  "quick_view_modal": "معاينة سريعة",
  "exit_modal": "نافذة الخروج",
  "invoice_template": "قالب الفاتورة",
  "invoice_template_1": "قالب الفاتورة 1",
  "invoice_template_2": "قالب الفاتورة 2",
  "invoice_template_3": "قالب الفاتورة 3",
  
  // Blog
  "blog": "المدونة",
  "blog_pages": "صفحات المدونة",
  "blog_list": "قائمة المقالات",
  "grid_left_sidebar": "شبكة مع شريط جانبي أيسر",
  "grid_right_sidebar": "شبكة مع شريط جانبي أيمن",
  "grid_no_sidebar": "شبكة بدون شريط جانبي",
  "blog_details": "تفاصيل المقالة",
  
  // Pages & Authentication
  "pages": "الصفحات",
  "authentication": "المصادقة",
  "sign_in": "تسجيل الدخول",
  "sign_up": "إنشاء حساب",
  "forgot_password": "نسيت كلمة المرور",
  "verify_otp": "التحقق من رمز OTP",
  "update_password": "تحديث كلمة المرور",
  
  // Account
  "account": "الحساب",
  "my_dashboard": "لوحة التحكم",
  "my_notifications": "الإشعارات",
  "my_addresses": "عناويني",
  "my_wallet": "محفظتي",
  "my_points": "نقاطي",
  "my_orders": "طلباتي",
  "order_details": "تفاصيل الطلب",
  "refund_history": "سجل المبالغ المستردة",
  "payout_details": "تفاصيل الدفع",
  "about_us": "من نحن",
  "browse_faqs": "الأسئلة الشائعة",
  "cart": "السلة",
  "checkout": "الدفع",
  "compare": "المقارنة",
  "contact_us": "اتصل بنا",
  "maintenance": "الصيانة",
  "offers": "العروض",
  "search": "البحث",
  "wishlist": "قائمة الرغبات",
  "404": "404",
  
  // Seller
  "seller": "البائع",
  "become_seller": "كن بائعًا",
  "seller_stores_basic": "متاجر البائعين (أساسي)",
  "seller_stores_classic": "متاجر البائعين (كلاسيكي)",
  "store_details_basic": "تفاصيل المتجر (أساسي)",
  "store_details_classic": "تفاصيل المتجر (كلاسيكي)",
  
  // General
  "categories": "الفئات",
  "shop_now": "تسوق الآن",
  "trending_products": "المنتجات الرائجة",
  "saved_address": "العنوان المحفوظ",
  "add_address": "إضافة عنوان",
  "address": "العنوان",
  "pin_code": "الرمز البريدي",
  "phone": "الهاتف",
  "edit": "تعديل",
  "remove": "حذف",
  
  // Bank & Payment Details
  "bank_details": "التفاصيل البنكية",
  "bank_account_no": "رقم الحساب البنكي",
  "enter_bank_account_no": "أدخل رقم الحساب البنكي",
  "bank_name": "اسم البنك",
  "enter_bank_name": "أدخل اسم البنك",
  "holder_name": "اسم صاحب الحساب",
  "enter_bank_holder_name": "أدخل اسم صاحب الحساب",
  "swift": "رمز SWIFT",
  "enter_swift": "أدخل رمز SWIFT",
  "ifsc": "رمز IFSC",
  "enter_ifsc": "أدخل رمز IFSC",
  "paypal_details": "تفاصيل PayPal",
  "paypal_email": "بريد PayPal الإلكتروني",
  "enter_paypal_email": "أدخل بريد PayPal الإلكتروني",
  "save": "حفظ",
  
  // Dashboard
  "hello": "مرحبًا",
  "welcome_text": "مرحبًا بك في لوحة التحكم الشخصية. قم بإدارة تجربة التسوق الإلكترونية في مكان واحد.",
  "balance": "الرصيد",
  "total_points": "إجمالي النقاط",
  "total_orders": "إجمالي الطلبات",
  "profile_information": "معلومات الملف الشخصي",
  "name": "الاسم",
  "login_details": "تفاصيل تسجيل الدخول",
  "email": "البريد الإلكتروني",
  "password": "كلمة المرور",
  "notifications": "الإشعارات",
  
  // Order Details
  "order_number": "رقم الطلب",
  "pay_now": "ادفع الآن",
  "invoice": "الفاتورة",
  "image": "الصورة",
  "price": "السعر",
  "quantity": "الكمية",
  "subtotal": "المجموع الفرعي",
  "action": "الإجراء",
  "ask_for_refund": "طلب استرداد",
  "consumer_details": "تفاصيل المستهلك",
  "billing_address": "عنوان الفاتورة",
  "shipping_address": "عنوان الشحن",
  "shipping": "الشحن",
  "delivery_slot": "فترة التوصيل",
  "payment_mode": "طريقة الدفع",
  "payment_status": "حالة الدفع",
  "summary": "الملخص",
  "tax": "الضريبة",
  "points": "النقاط",
  "wallet_balance": "رصيد المحفظة",
  "coupon_discount": "خصم القسيمة",
  "total": "الإجمالي",
  "order_date": "تاريخ الطلب",
  "total_amount": "المبلغ الإجمالي",
  "status": "الحالة",
  "no": "لا",
  "date": "التاريخ",
  "amount": "المبلغ",
  "payment_method": "طريقة الدفع",
  "option": "الخيار",
  "1_point": "نقطة واحدة",
  "remark": "ملاحظات",
  "transactions": "المعاملات",
  "refund": "استرداد",
  "reason": "السبب",
  "created_at": "تم الإنشاء في",
  "dashboard": "لوحة التحكم",
  "earning_points": "كسب النقاط",
  "logout": "تسجيل الخروج",
  "show_menu": "عرض القائمة",
  
  // Authentication Forms
  "welcome_to": "مرحبًا بك في",
  "forgot_your_password": "نسيت كلمة المرور",
  "email_address": "عنوان البريد الإلكتروني",
  "email_is_required": "البريد الإلكتروني مطلوب",
  "invalid_email": "بريد إلكتروني غير صالح",
  "send": "إرسال",
  "register_your_account": "إنشاء حسابك",
  "login_your_account": "تسجيل الدخول إلى حسابك",
  "password_is_required": "كلمة المرور مطلوبة",
  "remember_me": "تذكرني",
  "log_in": "تسجيل الدخول",
  "or": "أو",
  "don't_have_an_account": "ليس لديك حساب",
  "please_enter_the_one_time_password_to_verify_your_account": "الرجاء إدخال كلمة المرور لمرة واحدة للتحقق من حسابك",
  "a_code_has_been_sent_to": "تم إرسال رمز إلى",
  "validate": "تحقق",
  "welcome_to_our_store": "مرحبًا بك في متجرنا",
  "create_new_account": "إنشاء حساب جديد",
  "full_name": "الاسم الكامل",
  "name_is_required": "الاسم مطلوب",
  "phone_number": "رقم الهاتف",
  "phone_number_is_required": "رقم الهاتف مطلوب",
  "password_confirmation": "تأكيد كلمة المرور",
  "confirm_password_is_required": "تأكيد كلمة المرور مطلوب",
  "confirm_password_does_not_matched": "كلمة المرور غير متطابقة",
  "i_agree_with": "أوافق على",
  "terms": "الشروط",
  "and": "و",
  "privacy": "الخصوصية",
  "already_have_an_account": "لديك حساب بالفعل",
  "reset_your_account_password": "إعادة تعيين كلمة مرور حسابك",
  "new_password": "كلمة المرور الجديدة",
  "new_password_is_required": "كلمة المرور الجديدة مطلوبة",
  "confirm_password": "تأكيد كلمة المرور",
  "submit": "إرسال",
  
  // Blog & Content
  "recent_posts": "المقالات الأخيرة",
  "tags": "الوسوم",
  "featured": "مميز",
  "read_more": "اقرأ المزيد",
  "we_make_organic_food_in_market": "نصنع الطعام العضوي",
  "about_text": "بضع ثوانٍ فقط لقياس درجة حرارة جسمك. يدعم حتى 5 مستخدمين! تدوم البطارية حتى عامين.",
  "free_delivery_for_all_orders": "توصيل مجاني لجميع الطلبات",
  "only_fresh_foods": "طعام طازج فقط",
  "what_we_do": "ما نفعله",
  "we_are_trusted_by_clients": "نحن موثوقون من قبل العملاء",
  "our_creative_team": "فريقنا الإبداعي",
  "latest_testimonials": "آخر الشهادات",
  "what_people_say": "ما يقوله الناس",
  "our_blog": "مدونتنا",
  "our_latest_blog": "أحدث مقالاتنا",
  
  // Contact Form
  "get_in_touch": "تواصل معنا",
  "enter_full_name": "أدخل الاسم الكامل",
  "subject": "الموضوع",
  "enter_subject": "أدخل الموضوع",
  "subject_is_required": "الموضوع مطلوب",
  "message": "الرسالة",
  "enter_your_message": "أدخل رسالتك",
  "message_is_required": "الرسالة مطلوبة",
  "send_message": "إرسال الرسالة",
  "enter_email_address": "أدخل عنوان البريد الإلكتروني",
  "enter_your_phone_number": "أدخل رقم هاتفك",
  "copy_code": "نسخ الرمز",
  
  // Product & Shopping
  "search_for_products": "البحث عن المنتجات",
  "sold_by": "يباع بواسطة",
  "unit": "الوحدة",
  "saving": "توفير",
  "you_save": "توفر",
  "save_for_later": "احفظ لوقت لاحق",
  "cart_total": "إجمالي السلة",
  "process_to_checkout": "المتابعة للدفع",
  "return_to_shopping": "العودة للتسوق",
  "cost_at_checkout": "التكلفة عند الدفع",
  "no_address_found": "لم يتم العثور على عنوان",
  "select_timing_slot": "اختر الوقت المناسب",
  "add_new": "إضافة جديد",
  "delivery_options": "خيارات التوصيل",
  "no_delivery_options_found": "لم يتم العثور على خيارات توصيل",
  "payment_options": "خيارات الدفع",
  "no_payment_options_found": "لم يتم العثور على خيارات دفع",
  "not_calculated_yet": "لم يتم الحساب بعد",
  "point_text": "هل تفضل الدفع باستخدام النقاط؟",
  "wallet_text": "هل تفضل الدفع باستخدام المحفظة؟",
  "have_a_promo_code": "لديك رمز ترويجي",
  "enter_coupon_code_here": "أدخل رمز القسيمة هنا",
  "apply": "تطبيق",
  "you_saved": "لقد وفرت",
  "with_this_code": "بهذا الرمز",
  "coupon_applied": "تم تطبيق القسيمة",
  "place_order": "إتمام الطلب",
  
  // Filters & Sorting
  "filter_menu": "قائمة التصفية",
  "sort_by": "ترتيب حسب",
  "filters": "التصفية",
  "clear_all": "مسح الكل",
  "back": "رجوع",
  "rating": "التقييم",
  "star": "نجمة",
  "discount": "خصم",
  "availability": "التوفر",
  "review": "مراجعة",
  "weight": "الوزن",
  "move_to_cart": "نقل إلى السلة",
  
  // Order Status
  "order_failed": "فشل الطلب",
  "payment_is_successfully_and_your_order_is_on_the_way": "تم الدفع بنجاح وطلبك في الطريق",
  "payment_is_failed_please_try_again": "فشل الدفع، يرجى المحاولة مرة أخرى",
  
  // Product Details
  "qty": "الكمية",
  "price_details": "تفاصيل السعر",
  "shipping_charges": "رسوم الشحن",
  "wallet_point": "نقاط المحفظة",
  "usd": "دولار",
  "sale": "تخفيضات",
  "guaranteed_safe_checkout": "دفع آمن ومضمون",
  "please_hurry_only": "أسرع! لم يتبق سوى",
  "left_in_stock": "في المخزون",
  "ask_a_question": "اطرح سؤالاً",
  "frequently_bought_together": "تم شراؤها معًا بشكل متكرر",
  "product_selected_for": "المنتج المحدد لـ",
  "add_all_to_cart": "إضافة الكل إلى السلة",
  "customers_ordered": "طلبه العملاء",
  "active_view_in_this_item": "المشاهدات النشطة لهذا المنتج",
  "off": "خصم",
  "add_to_cart": "أضف إلى السلة",
  "delivery_details": "تفاصيل التوصيل",
  "description": "الوصف",
  "q_a": "الأسئلة والأجوبة",
  "sku": "SKU",
  "stock_status": "حالة المخزون",
  "gms": "جرام",
  "items_left": "العناصر المتبقية",
  "review_this_product": "قيّم هذا المنتج",
  "write_a_review": "اكتب مراجعة",
  "edit_review": "تعديل المراجعة",
  "share_it": "شارك",
  "q": "س",
  "a": "ج",
  "sales": "المبيعات",
  "reviews": "المراجعات",
  "hurry_up_sales_ends_in": "أسرع! التخفيضات تنتهي خلال",
  "days": "أيام",
  "hours": "ساعات",
  "min": "دقائق",
  "sec": "ثوان",
  
  // Store Details
  "contact": "اتصال",
  "if_you_any_query": "إذا كان لديك أي استفسار",
  "visit_store": "زيارة المتجر",
  "products": "المنتجات",
  "follow_us": "تابعنا",
  "sold": "مباع",
  "items": "عناصر",
  "hurry_up_offer_end_in": "أسرع، العرض ينتهي خلال",
  "offer_closed": "انتهى العرض",
  "subscribe": "اشترك",
  "code": "الرمز",
  
  // Footer
  "useful_links": "روابط مفيدة",
  "quick_pages": "صفحات سريعة",
  "customer_support_24_7": "دعم العملاء على مدار الساعة",
  "download_app": "تحميل التطبيق",
  "stay_connected": "ابق على اتصال",
  "menu": "القائمة",
  "24_7_support_center": "مركز الدعم على مدار الساعة",
  
  // Cart Messages
  "unread_messages": "الرسائل غير المقروءة",
  "shopping_cart": "سلة التسوق",
  "spend": "أنفق",
  "more_and_enjoy": "المزيد واستمتع بـ",
  "free_shipping": "الشحن المجاني",
  "congratulations": "تهانينا",
  "enjoy_free_shipping_on_us": "استمتع بالشحن المجاني",
  "your_cart_is_currently_empty": "سلتك فارغة حاليًا",
  "shipping_and_taxes_are_calculated_at_checkout": "يتم حساب الشحن والضرائب عند الدفع",
  "view_cart": "عرض السلة",
  "deal_today": "عرض اليوم",
  "hot_deals": "عروض ساخنة",
  
  // User Menu
  "hi": "مرحبًا",
  "my_account": "حسابي",
  "register": "تسجيل",
  "log_out": "تسجيل الخروج",
  "get_the_app": "احصل على التطبيق",
  "loading": "جاري التحميل",
  
  // Address Form
  "edit_address": "تعديل العنوان",
  "title": "العنوان",
  "enter_title": "أدخل العنوان",
  "title_is_required": "العنوان مطلوب",
  "enter_address": "أدخل العنوان",
  "street_address_is_required": "عنوان الشارع مطلوب",
  "country": "البلد",
  "select_country": "اختر البلد",
  "country_is_required": "البلد مطلوب",
  "state": "الولاية/المنطقة",
  "select_state": "اختر الولاية",
  "state_is_required": "الولاية مطلوبة",
  "city": "المدينة",
  "enter_city": "أدخل المدينة",
  "city_is_required": "المدينة مطلوبة",
  "pincode": "الرمز البريدي",
  "enter_pincode": "أدخل الرمز البريدي",
  "pincode_is_required": "الرمز البريدي مطلوب",
  "enter_phone": "أدخل رقم الهاتف",
  "phone_number_is_invalid": "رقم الهاتف غير صالح",
  "cancel": "إلغاء",
  
  // Change Password
  "change_password": "تغيير كلمة المرور",
  "current_password": "كلمة المرور الحالية",
  "enter_current_password": "أدخل كلمة المرور الحالية",
  "current_password_is_required": "كلمة المرور الحالية مطلوبة",
  "enter_new_password": "أدخل كلمة المرور الجديدة",
  "enter_confirm_password": "أكد كلمة المرور",
  
  // Modals
  "confirmation": "تأكيد",
  "are_you_sure_you_want_to_proceed": "هل أنت متأكد أنك تريد المتابعة",
  "yes": "نعم",
  "recommended_deals_for_you": "عروض موصى بها لك",
  "delete_item": "حذف العنصر",
  "delete_text": "سيتم حذف هذا العنصر بشكل دائم. لا يمكنك التراجع عن هذا الإجراء.",
  "edit_profile": "تعديل الملف الشخصي",
  "enter_name": "أدخل الاسم",
  "email_address_is_required": "عنوان البريد الإلكتروني مطلوب",
  "please_enter_valid_email": "الرجاء إدخال بريد إلكتروني صالح",
  "wait": "انتظر",
  "im_sorry_to_see_you_go": "نأسف لرؤيتك تغادر",
  "in_order_to_earn_10_off_your_first_purchase_provide_your_email_address": "للحصول على خصم 10٪ على أول عملية شراء، قدم عنوان بريدك الإلكتروني",
  "15%": "15٪",
  "want_to_make_your_purchase": "تريد إجراء عملية الشراء الخاصة بك",
  "plus_early_access_to_new_arrivals_exclusive_sales_lots_more": "بالإضافة إلى الوصول المبكر للمنتجات الجديدة والمبيعات الحصرية وأكثر",
  "select_payment_method_is_required": "اختيار طريقة الدفع مطلوب",
  "product_details": "تفاصيل المنتج",
  "your_questions": "أسئلتك",
  "enter_reason": "أدخل السبب",
  "reason_is_required": "السبب مطلوب",
  "select_payment_option": "اختر خيار الدفع",
  "payment_type_is_required": "نوع الدفع مطلوب",
  "rating_is_required": "التقييم مطلوب",
  "review_content": "محتوى المراجعة",
  "write_something": "اكتب شيئًا",
  "update_item": "تحديث العنصر",
  "add": "إضافة",
  "someone_recently_purchased": "اشترى شخص ما مؤخرًا",
  "minutes_ago": "منذ دقائق",
  
  // Theme Customizer
  "color": "اللون",
  "theme_color": "لون القالب",
  "dark": "داكن",
  "light": "فاتح",
  "rtl": "RTL",
  "ltr": "LTR",
  "choose": "اختر",
  "buy_now": "اشترِ الآن",
  
  // Product Interactions
  "let_other_customers_know_what_you_think": "دع العملاء الآخرين يعرفون رأيك",
  "have_doubts_regarding_this_product": "لديك شكوك حول هذا المنتج",
  "post_your_question": "انشر سؤالك",
  "1": "1",
  "2": "2",
  "3": "3",
  "user": "مستخدم",
  
  // Cookies & Privacy
  "cookies": "ملفات تعريف الارتباط",
  "we_use_cookies_to_make_your_experience_better": "نستخدم ملفات تعريف الارتباط لتحسين تجربتك",
  "privacy_policy": "سياسة الخصوصية",
  "ok": "موافق",
  
  // Actions
  "live_preview": "معاينة مباشرة",
  "add_to_wishlist": "أضف إلى المفضلة",
  "add_to_compare": "أضف للمقارنة",
  "clear_cart": "إفراغ السلة",
  "see_all": "عرض الكل",
  "related_product": "منتجات ذات صلة",
  "no_results_for": "لا توجد نتائج لـ",
  "out_of_stock": "نفذت الكمية",
  "go_to_store": "اذهب إلى المتجر",
  "downloads": "التنزيلات",
  "create_an_account?": "إنشاء حساب؟",
  "account_details": "تفاصيل الحساب",
  "billing_details": "تفاصيل الفاتورة",
  "shipping_details": "تفاصيل الشحن",
  "enter_password": "أدخل كلمة المرور",
  "same_as_shipping": "هل عنوان الشحن هو نفسه عنوان الفاتورة؟",
  "address_is_required": "العنوان مطلوب",
  "phone_is_required": "الهاتف مطلوب",
  
  // Order Tracking
  "order_tracking": "تتبع الطلب",
  "order_tracking_description": "الرجاء إدخال رقم طلبك والنقر على زر التتبع لمعرفة حالة طلبك.",
  "enter_email_or_phone": "أدخل البريد الإلكتروني أو الهاتف",
  "order_id": "رقم الطلب",
  "order_number_is_required": "رقم الطلب مطلوب",
  "email_or_phone_is_required": "البريد الإلكتروني أو الهاتف مطلوب",
  "track": "تتبع",
  
  // Search & Downloads
  "search_your_download": "ابحث في تنزيلاتك",
  "search_text": "بحث...",
  "enter_your_email": "أدخل بريدك الإلكتروني",
  "im_searching_for": "أبحث عن...",
  "your_email_here": "بريدك الإلكتروني هنا",
  "You_have_not_address_yet": "لم تضف أي عنوان بعد",
  "all_files": "جميع الملفات",
  "documentation": "الوثائق",
  "license_certificate": "شهادة الترخيص",
  "purchase_code": "رمز الشراء (PDF)",
  
  // Empty States
  "no_notifications_found": "لم يتم العثور على إشعارات",
  "You_have_not_notification_yet": "لم تتلق أي إشعار بعد",
  "no_item_found": "لم يتم العثور على عناصر",
  "no_orders_have_yet": "لم يتم تقديم أي طلبات بعد",
  "no_orders_found": "لم يتم العثور على طلبات",
  "no_transaction_found": "لم يتم العثور على معاملات",
  "You_have_not_earned_yet": "لم تكسب أي نقاط بعد",
  "no_refunds_found": "لم يتم العثور على مبالغ مستردة",
  "you_have_no_refunds_yet": "ليس لديك مبالغ مستردة معالجة بعد",
  "no_wallet_detected": "لم يتم الكشف عن نشاط في المحفظة",
  "no_category_found": "لم يتم العثور على فئات",
  "no_tag_found": "لم يتم العثور على وسوم",
  "no_blog_found": "لم يتم العثور على مدونة",
  "no_blogs_found": "لم يتم العثور على مدونات",
  "not_find_any_blogs_matching_search_criteria": "عذرًا! يبدو أننا لم نتمكن من العثور على أي مدونات تطابق معايير البحث الخاصة بك.",
  "no_faq_found": "لم يتم العثور على أسئلة شائعة",
  "inform_you_that_the_faq__currently_unavailable.": "نأسف لإبلاغك بأن الأسئلة الشائعة غير متاحة حاليًا.",
  "no_Offers_found": "لم يتم العثور على عروض",
  "inform_you_that_the_currently_unavailable": "نأسف لإبلاغك بأن العرض غير متاح حاليًا.",
  "sorry_cant_find_products_looking": "عذرًا! تعذر العثور على المنتجات التي تبحث عنها!",
  "please_check_misspelt_something_searching_other_way": "يرجى التحقق مما إذا كنت قد أخطأت في كتابة شيء ما أو حاول البحث بطريقة أخرى.",
  "no_items_cart": "لا توجد عناصر في السلة",
  "no_items_added": "لم تتم إضافة عناصر",
  "nothing_added_to_your_compare_list": "يبدو أنه لم تتم إضافة أي شيء إلى قائمة المقارنة الخاصة بك. استكشف المنتجات إذا أردت.",
  "no_order_found": "لم يتم العثور على طلبات",
  "by": "بواسطة",
  "currently_item_unavailable": "العنصر غير متاح حاليًا",
  "show_more": "عرض المزيد",
  "show_less": "عرض أقل",
  "no_question_posted_yet": "لم يتم نشر أي سؤال بعد",
  "there_are_currently_question_product": "لا توجد حاليًا أسئلة حول هذا المنتج",
  "no_store_found": "لم يتم العثور على متجر",
  "regret_inform_you_Store_currently_unavailable": "نأسف لإبلاغك بأن المتجر غير متاح حاليًا.",
  "start_selling": "ابدأ البيع",
  "appears_nothing_added_wishlist_explore_categories": "يبدو أنه لم تتم إضافة أي شيء إلى قائمة رغباتك. استكشف الفئات إذا أردت.",
  "no_product_found": "لم يتم العثور على منتجات",
  "no_link_found": "لم يتم العثور على روابط",
  "search_product_delivered_your_door": "ابحث عن منتج، يتم توصيله إلى بابك...",
  "ratings": "التقييمات",
  "preview": "معاينة",
  "in": "في",
  "trending": "رائج",
  "frequently_asked_questions": "الأسئلة الشائعة",
  "you_can_find_out_more_searching": "نحن نجيب على الأسئلة الأكثر تكرارًا. لا داعي للقلق إذا لم تجد بالضبط ما تبحث عنه. يمكنك معرفة المزيد من خلال البحث.",
  "assets_information": "معلومات الأصول",
  "created": "تم الإنشاء",
  "last_update": "آخر تحديث",
  "view_all": "عرض الكل",
  "related_categories": "فئات ذات صلة",
  "preview_image": "صورة المعاينة",
  "preview_video": "فيديو المعاينة"
};

console.log('Arabic translations object created with', Object.keys(arTranslations).length, 'keys');

// Save to file
const arPath = path.join(__dirname, 'src', 'assets', 'i18n', 'ar.json');
fs.writeFileSync(arPath, JSON.stringify(arTranslations, null, 2), 'utf8');

console.log('✅ Arabic translation file created successfully at:', arPath);
console.log('📝 Total keys:', Object.keys(arTranslations).length);
console.log('🌍 Arabic (RTL) translation is complete!');
