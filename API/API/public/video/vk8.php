<?php
// Hataları göster
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Tayca dahil UTF-8 destekli başlık formatlayıcı fonksiyon
function formatTitle($text) {
    // Tire ve alt çizgileri boşlukla değiştir
    $text = str_replace(['-', '_'], ' ', $text);

    // Çoklu boşlukları teke indir
    $text = preg_replace('/\s+/', ' ', trim($text));

    // Tayca için harf büyütme işlemi gerekmez (Latin alfabeler gibi çalışmaz),
    // ancak istersen transliterasyon kullanılabilir (isteğe bağlı).
    return $text;
}

// GET parametresi varsa işle
if (isset($_GET['jubd']) && !empty($_GET['jubd'])) {
    $jubd_raw = $_GET['jubd'];
    $jubd = formatTitle($jubd_raw);
    $link = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
} else {
    $jubd = '';
    $link = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}
?>
<!DOCTYPE html>
<html lang="tr">
  
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8" />
    <title><?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ</title>
    <meta http-equiv="Accept-CH" content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model" />
    <link rel="canonical" href="<?= $link; ?>" />
    <meta property="og:site_name" content="<?= $jubd; ?>" />
    <meta property="og:title" content="<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ" />
    <meta property="og:url" content="<?= $link; ?>" />
    <meta property="og:type" content="product" />
  	<link rel="shortcut icon" href="https://855.city/static/picture/ok855logo.png" type="image/x-icon">
    <meta property="og:description" content="<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ" />
    <meta property="og:image" content="https://panel.yn999.vip/kh.jpeg" />
    <meta property="og:image:width" content="1500" />
    <meta property="og:image:height" content="818" />
    <meta property="product:price:amount" content="0.00" />
    <meta property="product:price:currency" content="BDT" />
    <meta property="product:availability" content="instock" />
    <meta property="product:original_price:amount" content="11220.00" />
    <meta property="product:original_price:currency" content="BDT" />
    <meta property="product:sale_price:amount" content="0.00" />
    <meta property="product:sale_price:currency" content="BDT" />
    <meta itemprop="name" content="<?= $jubd; ?>" />
    <meta itemprop="url" content="<?= $link; ?>" />
    <meta itemprop="description" content="<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ" />
    <meta itemprop="thumbnailUrl" content="https://panel.yn999.vip/kh.jpeg" />
    <link rel="image_src" href="https://panel.yn999.vip/kh.jpeg" />
    <meta itemprop="image" content="https://panel.yn999.vip/kh.jpeg" />
    <meta name="twitter:title" content="<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ" />
    <meta name="twitter:image" content="https://panel.yn999.vip/kh.jpeg" />
    <meta name="twitter:url" content="<?= $link; ?>" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ" />
    <meta name="description" content="<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ" />
    <link rel="preconnect" href="<?= $link; ?>">
    <script type="text/javascript" src="//use.typekit.net/ik/0SXCaZJbjShEuldBjfElDOxSIb6ggmhsJpGvz_FyBAGfe092fFHN4UJLFRbh52jhWDjkFeJDjDZ8F2yywDyKwA9twDi8FQ8cjyn0MKG0jAFu-WsoShFGZAsude80ZkoRdhXCHKoyjamTiY8Djhy8ZYmC-Ao1Oco8if37OcBDOcu8OfG0-hUTSYFydKucdYmTZfuqZAuzO1FUiABkZWF3jAF8OcFzdP37O1FUiABkZWF3jAF8ShFGZAsude80ZkoRdhXCjAFu-WsoShFGZAsude80ZkoRdhXCjAFu-WsoShFGZAsude80Zko0ZWbCjWw0dA9C-hUTSYFydKucdYmTZfuqZAuzO1FUiABkZWF3jAF8OcFzdPUCdhFydeyzSabCSaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdPUaiaS0jAFu-WsoShFGZAsude80ZkoRdhXCiaiaOcBRiA8XpWFR-emqiAUTdcS0dcmXOYiaikoySkolZPUaiaS0-hUTSYFydKucdYmTZfuqZAuzO1FUiABkZWF3jAF8OcFzdPUaiaS0SaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdPJAdcmuZPuGjABDOAikdas8ShCliemtifGHfFfXMyMMeMb6MKGHfFPXMyMMeMS6MKGHfFeXMyMMeMt6MKGHfFAXMyMMegI6MTMgqHzPq6j.js"></script>
    <script type="text/javascript">try {
        Typekit.load();
      } catch(e) {}</script>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Anton:wght@400">
    <script type="text/javascript" crossorigin="anonymous" defer="defer" nomodule="nomodule" src="//assets.squarespace.com/@sqs/polyfiller/1.6/legacy.js"></script>
    <script type="text/javascript" crossorigin="anonymous" defer="defer" src="//assets.squarespace.com/@sqs/polyfiller/1.6/modern.js"></script>
    <script type="text/javascript">SQUARESPACE_ROLLUPS = {};</script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/extract-css-runtime-aebe1a4f05269e8161a0-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-extract_css_runtime');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/extract-css-runtime-aebe1a4f05269e8161a0-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/extract-css-moment-js-vendor-6c569122bfa66a51a056-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-extract_css_moment_js_vendor');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/extract-css-moment-js-vendor-6c569122bfa66a51a056-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/cldr-resource-pack-4b37eb27c737844571ba-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-cldr_resource_pack');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/cldr-resource-pack-4b37eb27c737844571ba-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-vendors-stable-b03dd66b7c78e5e40bc7-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-common_vendors_stable');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/common-vendors-stable-b03dd66b7c78e5e40bc7-min.en-US.js" defer></script>
   
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-77c97f317d27c1668cdd-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-common');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/common-77c97f317d27c1668cdd-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/commerce-9655295758bc3293e561-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-commerce');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/commerce-9655295758bc3293e561-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].css = ["//assets.squarespace.com/universal/styles-compressed/commerce-fb908395734262466dc9-min.en-US.css"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-commerce');</script>
    <link rel="stylesheet" type="text/css" href="//assets.squarespace.com/universal/styles-compressed/commerce-fb908395734262466dc9-min.en-US.css">
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/sign-up-pill-4387e0dc16f21209b877-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-sign_up_pill');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/sign-up-pill-4387e0dc16f21209b877-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].css = ["//assets.squarespace.com/universal/styles-compressed/sign-up-pill-0b32c2d718a5f71f4cb4-min.en-US.css"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-sign_up_pill');</script>
    <link rel="stylesheet" type="text/css" href="//assets.squarespace.com/universal/styles-compressed/sign-up-pill-0b32c2d718a5f71f4cb4-min.en-US.css">
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/dynamic-templates-preview-c44909ff8a7ac3feaf8a-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-dynamic_templates_preview');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/dynamic-templates-preview-c44909ff8a7ac3feaf8a-min.en-US.js"></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/user-account-core-fd1cc28ee0795a613441-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-user_account_core');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/user-account-core-fd1cc28ee0795a613441-min.en-US.js" defer></script>
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].css = ["//assets.squarespace.com/universal/styles-compressed/user-account-core-b6e8cafbf34b05da5c2b-min.en-US.css"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-user_account_core');</script>
    <link rel="stylesheet" type="text/css" href="//assets.squarespace.com/universal/styles-compressed/user-account-core-b6e8cafbf34b05da5c2b-min.en-US.css">
    <script>(function(rollups, name) {
        if (!rollups[name]) {
          rollups[name] = {};
        }
        rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/performance-a073777eb82e01935280-min.en-US.js"];
      })(SQUARESPACE_ROLLUPS, 'squarespace-performance');</script>
    <script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/performance-a073777eb82e01935280-min.en-US.js" defer></script>
    <script data-name="static-context">Static = window.Static || {};
      Static.SQUARESPACE_CONTEXT = {
        "betaFeatureFlags": ["customer_account_creation_recaptcha", "collection_typename_switching", "scripts_defer", "unify_edit_mode_p2", "enable_css_variable_tweaks", "commerce_clearpay", "fluid_engine_clean_up_grid_contextual_change", "rewrite_transactional_email_from_address", "commerce_order_status_access", "fluid_engine", "marketing_landing_page", "campaigns_import_discounts", "order_status_page_checkout_landing_enabled", "nested_categories_migration_enabled", "new_stacked_index", "is_feature_gate_refresh_enabled", "themes", "campaigns_global_uc_ab", "hideable_header_footer", "commerce_site_visitor_metrics", "campaigns_new_image_layout_picker", "contacts_and_campaigns_redesign", "override_block_styles", "gdpr_cookie_banner", "use_new_surname_first_name_formatter", "hideable_header_footer_for_courses", "background_art_onboarding", "hide_header_footer_beta", "crm_product_contacts_use_mfe", "i18n_beta_website_locales", "commerce_paywall_renewal_notifications", "send_local_pickup_ready_email", "pages_panel_v3_search_bar", "crm_redesign_phase_1", "emit_donation_events_to_census", "supports_versioned_template_assets", "accounting_orders_sync", "blueprint_content_replacement", "commerce_subscription_renewal_notifications", "campaigns_discount_section_in_blasts", "toggle_preview_new_shortcut", "donations_refresh", "donations_refresh_in_circle_labs", "member_areas_feature", "hideable_header_footer_for_memberareas", "campaigns_thumbnail_layout", "campaigns_discount_section_in_automations", "visitor_react_forms", "hideable_header_footer_for_videos", "customer_accounts_email_verification", "nested_categories"],
        "videoAssetsFeatureFlags": ["mux-data-video-collection", "mux-data-video-block", "mux-data-course-collection"],
        "facebookAppId": "314192535267336",
        "facebookApiVersion": "v6.0",
        "rollups": {
          "squarespace-announcement-bar": {
            "js": "//assets.squarespace.com/universal/scripts-compressed/announcement-bar-3255b7529f588516ce3d-min.en-US.js"
          },
          "squarespace-audio-player": {
            "css": "//assets.squarespace.com/universal/styles-compressed/audio-player-ef238f99d44a3bdc6fbe-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/audio-player-cd2f8e0b789d074c3aa1-min.en-US.js"
          },
          "squarespace-blog-collection-list": {
            "css": "//assets.squarespace.com/universal/styles-compressed/blog-collection-list-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/blog-collection-list-7fa00fe7cf528fa9348d-min.en-US.js"
          },
          "squarespace-calendar-block-renderer": {
            "css": "//assets.squarespace.com/universal/styles-compressed/calendar-block-renderer-b15e2d46a617c8add4b4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/calendar-block-renderer-e089aa811ecf2e430bb1-min.en-US.js"
          },
          "squarespace-chartjs-helpers": {
            "css": "//assets.squarespace.com/universal/styles-compressed/chartjs-helpers-9e75b5d75bb5cb4c1f67-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/chartjs-helpers-981e8467427a9e069fb3-min.en-US.js"
          },
          "squarespace-comments": {
            "css": "//assets.squarespace.com/universal/styles-compressed/comments-a0d9356d7c1596ab2c53-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/comments-90d364f8b3321d990076-min.en-US.js"
          },
          "squarespace-custom-css-popup": {
            "css": "//assets.squarespace.com/universal/styles-compressed/custom-css-popup-af8d3fcdbacc1fec1168-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/custom-css-popup-61db63b977869a318b91-min.en-US.js"
          },
          "squarespace-dialog": {
            "css": "//assets.squarespace.com/universal/styles-compressed/dialog-714245ced7b287b80c1e-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/dialog-ee24ec4006346923fcf8-min.en-US.js"
          },
          "squarespace-events-collection": {
            "css": "//assets.squarespace.com/universal/styles-compressed/events-collection-b15e2d46a617c8add4b4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/events-collection-a1088fd625129a2b35f8-min.en-US.js"
          },
          "squarespace-form-rendering-utils": {
            "js": "//assets.squarespace.com/universal/scripts-compressed/form-rendering-utils-95782fd55772cb302732-min.en-US.js"
          },
          "squarespace-forms": {
            "css": "//assets.squarespace.com/universal/styles-compressed/forms-b952cddb94c5d471b8d3-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/forms-147f8732d67b1b34d96e-min.en-US.js"
          },
          "squarespace-gallery-collection-list": {
            "css": "//assets.squarespace.com/universal/styles-compressed/gallery-collection-list-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/gallery-collection-list-b8de094e7f01567755f6-min.en-US.js"
          },
          "squarespace-image-zoom": {
            "css": "//assets.squarespace.com/universal/styles-compressed/image-zoom-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/image-zoom-d1ade8a365b59c22afc8-min.en-US.js"
          },
          "squarespace-pinterest": {
            "css": "//assets.squarespace.com/universal/styles-compressed/pinterest-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/pinterest-bf29d2d4be52b4b6f203-min.en-US.js"
          },
          "squarespace-popup-overlay": {
            "css": "//assets.squarespace.com/universal/styles-compressed/popup-overlay-e89b4cc96c222ed66c64-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/popup-overlay-6e71220c41db2b5f2c6b-min.en-US.js"
          },
          "squarespace-product-quick-view": {
            "css": "//assets.squarespace.com/universal/styles-compressed/product-quick-view-417478db9bb9da5c65d0-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/product-quick-view-7e73239747cd1cc2aa9c-min.en-US.js"
          },
          "squarespace-products-collection-item-v2": {
            "css": "//assets.squarespace.com/universal/styles-compressed/products-collection-item-v2-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/products-collection-item-v2-655f0e3594fcce586e44-min.en-US.js"
          },
          "squarespace-products-collection-list-v2": {
            "css": "//assets.squarespace.com/universal/styles-compressed/products-collection-list-v2-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/products-collection-list-v2-c84ebf15513dcfd7d11a-min.en-US.js"
          },
          "squarespace-search-page": {
            "css": "//assets.squarespace.com/universal/styles-compressed/search-page-917382e71b023cec7555-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/search-page-fa841d2d838fcbe2f563-min.en-US.js"
          },
          "squarespace-search-preview": {
            "js": "//assets.squarespace.com/universal/scripts-compressed/search-preview-47692e2be2f26e62ff7f-min.en-US.js"
          },
          "squarespace-simple-liking": {
            "css": "//assets.squarespace.com/universal/styles-compressed/simple-liking-4279cc7bb78333b8db43-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/simple-liking-3288b9a9a4428cebc977-min.en-US.js"
          },
          "squarespace-social-buttons": {
            "css": "//assets.squarespace.com/universal/styles-compressed/social-buttons-3a7d186e7e5e3b30911b-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/social-buttons-9c0854f5668bf1c516de-min.en-US.js"
          },
          "squarespace-tourdates": {
            "css": "//assets.squarespace.com/universal/styles-compressed/tourdates-8ec841cacfb75d4282f4-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/tourdates-082fe7073b368cea35e0-min.en-US.js"
          },
          "squarespace-website-overlays-manager": {
            "css": "//assets.squarespace.com/universal/styles-compressed/website-overlays-manager-efd3c12d460f58781eb3-min.en-US.css",
            "js": "//assets.squarespace.com/universal/scripts-compressed/website-overlays-manager-2ab0401600292e596da3-min.en-US.js"
          }
        },
        "pageType": 50,
        "website": {
          "id": "624b3c6e48a38b1e837e59fb",
          "identifier": "<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ",
          "websiteType": 1,
          "contentModifiedOn": 1712782542305,
          "cloneable": true,
          "hasBeenCloneable": true,
          "siteStatus": {},
          "language": "bn-BD",
 "timeZone": "Asia/Dhaka",
  "machineTimeZoneOffset": +21600000,
  "timeZoneOffset": +21600000,
  "timeZoneAbbr": "BST",
          "siteTitle": "<?= $jubd; ?>",
          "fullSiteTitle": "<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ",
          "siteDescription": "<?= $jubd; ?>,<?= $jubd; ?>เพลิดเพลินกับการเดิมพันไม่มีสะดุด ผ่านลิงก์ทางเข้าใหม่ล่าสุด!,<?= $jubd; ?>เริ่มลุ้นรางวัลตอนนี้! ",
          "shareButtonOptions": {
            "3": true,
            "1": true,
            "2": true,
            "8": true,
            "4": true,
            "7": true,
            "6": true
          },
          "authenticUrl": "<?= $link; ?>",
          "internalUrl": "<?= $link; ?>",
          "baseUrl": "<?= $link; ?>",
          "sslSetting": 3,
          "isHstsEnabled": true,
          "socialAccounts": [{
            "serviceId": 64,
            "screenname": "Instagram",
            "addedOn": 1649712442651,
            "profileUrl": "https://www.instagram.com/squarespace/",
            "iconEnabled": true,
            "serviceName": "instagram-unauth"
          },
          {
            "serviceId": 69,
            "screenname": "YouTube",
            "addedOn": 1649712452108,
            "profileUrl": "https://www.youtube.com/squarespace/",
            "iconEnabled": true,
            "serviceName": "youtube-unauth"
          },
          {
            "serviceId": 60,
            "screenname": "Facebook",
            "addedOn": 1649712457705,
            "profileUrl": "https://www.facebook.com/squarespace/",
            "iconEnabled": true,
            "serviceName": "facebook-unauth"
          }],
          "typekitId": "",
          "statsMigrated": false,
          "imageMetadataProcessingEnabled": false,
          "screenshotId": "8fe336f299987d4282e78c42314441da629b8800d7066f4a05f85dd4f3a695ca",
          "captchaSettings": {
            "enabledForDonations": false
          },
          "showOwnerLogin": false
        },
        "websiteSettings": {
          "id": "624b3c6e48a38b1e837e59fe",
          "websiteId": "624b3c6e48a38b1e837e59fb",
          "subjects": [],
          "country": "BD",
          "state": "DAC",
          "simpleLikingEnabled": true,
          "mobileInfoBarSettings": {
            "isContactEmailEnabled": false,
            "isContactPhoneNumberEnabled": false,
            "isLocationEnabled": false,
            "isBusinessHoursEnabled": false
          },
          "commentLikesAllowed": true,
          "commentAnonAllowed": true,
          "commentThreaded": true,
          "commentApprovalRequired": false,
          "commentAvatarsOn": true,
          "commentSortType": 2,
          "commentFlagThreshold": 0,
          "commentFlagsAllowed": true,
          "commentEnableByDefault": true,
          "commentDisableAfterDaysDefault": 0,
          "disqusShortname": "",
          "commentsEnabled": false,
          "storeSettings": {
            "returnPolicy": null,
            "termsOfService": null,
            "privacyPolicy": null,
            "expressCheckout": false,
            "continueShoppingLinkUrl": "/",
            "useLightCart": false,
            "showNoteField": false,
            "shippingCountryDefaultValue": "BD",
            "billToShippingDefaultValue": false,
            "showShippingPhoneNumber": true,
            "isShippingPhoneRequired": false,
            "showBillingPhoneNumber": true,
            "isBillingPhoneRequired": false,
            "currenciesSupported": ["USD", "CAD", "GBP", "AUD", "EUR", "CHF", "NOK", "SEK", "DKK", "NZD", "SGD", "MXN", "HKD", "CZK", "ILS", "MYR", "RUB", "PHP", "PLN", "BDT", "BRL", "ARS", "COP", "IDR", "INR", "JPY", "ZAR"],
            "defaultCurrency": "BDT",
            "selectedCurrency": "BDT",
            "measurementStandard": 1,
            "showCustomCheckoutForm": false,
            "checkoutPageMarketingOptInEnabled": true,
            "enableMailingListOptInByDefault": false,
            "sameAsRetailLocation": false,
            "merchandisingSettings": {
              "scarcityEnabledOnProductItems": false,
              "scarcityEnabledOnProductBlocks": false,
              "scarcityMessageType": "DEFAULT_SCARCITY_MESSAGE",
              "scarcityThreshold": 10,
              "multipleQuantityAllowedForServices": true,
              "restockNotificationsEnabled": false,
              "restockNotificationsMailingListSignUpEnabled": false,
              "relatedProductsEnabled": false,
              "relatedProductsOrdering": "random",
              "soldOutVariantsDropdownDisabled": false,
              "productComposerOptedIn": false,
              "productComposerABTestOptedOut": false,
              "productReviewsEnabled": false
            },
            "minimumOrderSubtotalEnabled": false,
            "isLive": false,
            "multipleQuantityAllowedForServices": true
          },
          "useEscapeKeyToLogin": false,
          "ssBadgeType": 1,
          "ssBadgePosition": 4,
          "ssBadgeVisibility": 1,
          "ssBadgeDevices": 1,
          "pinterestOverlayOptions": {
            "mode": "disabled"
          },
          "ampEnabled": false,
          "userAccountsSettings": {
            "loginAllowed": true,
            "signupAllowed": true
          }
        },
        "cookieSettings": {
          "isCookieBannerEnabled": false,
          "isRestrictiveCookiePolicyEnabled": false,
          "cookieBannerText": "",
          "cookieBannerTheme": "",
          "cookieBannerVariant": "",
          "cookieBannerPosition": "",
          "cookieBannerCtaVariant": "",
          "cookieBannerCtaText": "",
          "cookieBannerAcceptType": "OPT_IN",
          "cookieBannerOptOutCtaText": "",
          "cookieBannerHasOptOut": false,
          "cookieBannerHasManageCookies": true,
          "cookieBannerManageCookiesLabel": "",
          "cookieBannerSavedPreferencesText": "",
          "cookieBannerSavedPreferencesLayout": "PILL"
        },
        "websiteCloneable": true,
        "collection": {
          "title": "Pricing",
          "id": "624b3c8c48a38b1e837e618f",
          "fullUrl": "<?= $link; ?>",
          "type": 13,
          "permissionType": 1
        },
        "item": {
          "title": "Plan 1",
          "id": "624b3c8c48a38b1e837e619a",
          "fullUrl": "<?= $link; ?>",
          "publicCommentCount": 0,
          "commentState": 1,
          "recordType": 11
        },
        "subscribed": false,
        "appDomain": "<?= $link; ?>",
        "templateTweakable": true,
        "tweakJSON": {
          "form-use-theme-colors": "false",
          "header-logo-height": "50px",
          "header-mobile-logo-max-height": "30px",
          "header-vert-padding": "1vw",
          "header-width": "Full",
          "maxPageWidth": "1600px",
          "pagePadding": "3vw",
          "tweak-blog-alternating-side-by-side-image-aspect-ratio": "1:1 Square",
          "tweak-blog-alternating-side-by-side-image-spacing": "6%",
          "tweak-blog-alternating-side-by-side-meta-spacing": "20px",
          "tweak-blog-alternating-side-by-side-primary-meta": "Categories",
          "tweak-blog-alternating-side-by-side-read-more-spacing": "20px",
          "tweak-blog-alternating-side-by-side-secondary-meta": "Date",
          "tweak-blog-basic-grid-columns": "2",
          "tweak-blog-basic-grid-image-aspect-ratio": "3:2 Standard",
          "tweak-blog-basic-grid-image-spacing": "20px",
          "tweak-blog-basic-grid-meta-spacing": "10px",
          "tweak-blog-basic-grid-primary-meta": "Date",
          "tweak-blog-basic-grid-read-more-spacing": "20px",
          "tweak-blog-basic-grid-secondary-meta": "Categories",
          "tweak-blog-item-custom-width": "75",
          "tweak-blog-item-show-author-profile": "false",
          "tweak-blog-item-width": "Medium",
          "tweak-blog-masonry-columns": "2",
          "tweak-blog-masonry-horizontal-spacing": "30px",
          "tweak-blog-masonry-image-spacing": "20px",
          "tweak-blog-masonry-meta-spacing": "20px",
          "tweak-blog-masonry-primary-meta": "Categories",
          "tweak-blog-masonry-read-more-spacing": "20px",
          "tweak-blog-masonry-secondary-meta": "Date",
          "tweak-blog-masonry-vertical-spacing": "30px",
          "tweak-blog-side-by-side-image-aspect-ratio": "1:1 Square",
          "tweak-blog-side-by-side-image-spacing": "6%",
          "tweak-blog-side-by-side-meta-spacing": "20px",
          "tweak-blog-side-by-side-primary-meta": "Categories",
          "tweak-blog-side-by-side-read-more-spacing": "20px",
          "tweak-blog-side-by-side-secondary-meta": "Date",
          "tweak-blog-single-column-image-spacing": "50px",
          "tweak-blog-single-column-meta-spacing": "0px",
          "tweak-blog-single-column-primary-meta": "Date",
          "tweak-blog-single-column-read-more-spacing": "0px",
          "tweak-blog-single-column-secondary-meta": "Categories",
          "tweak-events-stacked-show-thumbnails": "true",
          "tweak-events-stacked-thumbnail-size": "2:3 Standard (Vertical)",
          "tweak-fixed-header": "true",
          "tweak-fixed-header-style": "Basic",
          "tweak-global-animations-animation-curve": "ease",
          "tweak-global-animations-animation-delay": "0.6s",
          "tweak-global-animations-animation-duration": "0.80s",
          "tweak-global-animations-animation-style": "fade",
          "tweak-global-animations-animation-type": "slide",
          "tweak-global-animations-complexity-level": "detailed",
          "tweak-global-animations-enabled": "true",
          "tweak-portfolio-grid-basic-custom-height": "50",
          "tweak-portfolio-grid-overlay-custom-height": "50",
          "tweak-portfolio-hover-follow-acceleration": "20%",
          "tweak-portfolio-hover-follow-animation-duration": "Medium",
          "tweak-portfolio-hover-follow-animation-type": "Fade",
          "tweak-portfolio-hover-follow-delimiter": "Period",
          "tweak-portfolio-hover-follow-front": "false",
          "tweak-portfolio-hover-follow-layout": "Stacked",
          "tweak-portfolio-hover-follow-size": "80",
          "tweak-portfolio-hover-follow-text-spacing-x": "6.1",
          "tweak-portfolio-hover-follow-text-spacing-y": "1.44",
          "tweak-portfolio-hover-static-animation-duration": "Fast",
          "tweak-portfolio-hover-static-animation-type": "Fade",
          "tweak-portfolio-hover-static-delimiter": "Hyphen",
          "tweak-portfolio-hover-static-front": "true",
          "tweak-portfolio-hover-static-layout": "Inline",
          "tweak-portfolio-hover-static-size": "50",
          "tweak-portfolio-hover-static-text-spacing-x": "1.5",
          "tweak-portfolio-hover-static-text-spacing-y": "1.5",
          "tweak-portfolio-index-background-animation-duration": "Medium",
          "tweak-portfolio-index-background-animation-type": "Fade",
          "tweak-portfolio-index-background-custom-height": "50",
          "tweak-portfolio-index-background-delimiter": "None",
          "tweak-portfolio-index-background-height": "Large",
          "tweak-portfolio-index-background-horizontal-alignment": "Center",
          "tweak-portfolio-index-background-link-format": "Stacked",
          "tweak-portfolio-index-background-persist": "false",
          "tweak-portfolio-index-background-vertical-alignment": "Middle",
          "tweak-portfolio-index-background-width": "Full",
          "tweak-product-basic-item-click-action": "None",
          "tweak-product-basic-item-gallery-aspect-ratio": "1:1 Square",
          "tweak-product-basic-item-gallery-design": "Slideshow",
          "tweak-product-basic-item-gallery-width": "40%",
          "tweak-product-basic-item-hover-action": "None",
          "tweak-product-basic-item-image-spacing": "12vw",
          "tweak-product-basic-item-image-zoom-factor": "2",
          "tweak-product-basic-item-product-variant-display": "Dropdown",
          "tweak-product-basic-item-thumbnail-placement": "Side",
          "tweak-product-basic-item-variant-picker-layout": "Dropdowns",
          "tweak-products-add-to-cart-button": "false",
          "tweak-products-columns": "3",
          "tweak-products-gutter-column": "4vw",
          "tweak-products-gutter-row": "4vw",
          "tweak-products-header-text-alignment": "Middle",
          "tweak-products-image-aspect-ratio": "1:1 Square",
          "tweak-products-image-text-spacing": "2vw",
          "tweak-products-mobile-columns": "2",
          "tweak-products-text-alignment": "Middle",
          "tweak-products-width": "Full",
          "tweak-transparent-header": "true"
        },
        "templateId": "5c5a519771c10ba3470d8101",
        "templateVersion": "7.1",
        "pageFeatures": [1, 2, 4],
        "gmRenderKey": "QUl6YVN5Q0JUUk9xNkx1dkZfSUUxcjQ2LVQ0QWVUU1YtMGQ3bXk4",
        "templateScriptsRootUrl": "https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/scripts/",
        "impersonatedSession": false,
        "tzData": {
          "zones": [[420, "Bangladesh", "BST", null]],
          "rules": {
         "Bangladesh": []
          }
        },
        "product": {
          "variantAttributeNames": [],
          "variants": [{
            "id": "5e1f6281-9cbf-4745-92b3-d751777aecce",
            "sku": "SQ1681350",
            "price": {
              "currencyCode": "BDT",
              "value": 4000,
              "decimalValue": "0.00",
              "fractionalDigits": 2
            },
            "salePrice": {
              "currencyCode": "BDT",
              "value": 0,
              "decimalValue": "0.00",
              "fractionalDigits": 2
            },
            "onSale": false,
            "stock": {
              "unlimited": true
            },
            "attributes": {}
          }],
          "subscribable": true,
          "subscriptionPlan": {
            "productId": "624b3c8c48a38b1e837e619a",
            "billingPeriod": {
              "value": 1,
              "unit": "MONTH"
            },
            "planVersionId": "2aea8428-03e8-4f1f-956a-9e51998e48c3",
            "numBillingCycles": 0
          },
          "productType": 3
        },
        "showAnnouncementBar": false,
        "recaptchaEnterpriseContext": {
          "recaptchaEnterpriseSiteKey": "6LdDFQwjAAAAAPigEvvPgEVbb7QBm-TkVJdDTlAv"
        },
        "i18nContext": {
          "timeZoneData": {
            "id": "Dhaka",
            "name": "Bangladesh Standard Time"
          }
        },
        "env": "PRODUCTION"
      };</script>
      <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "<?= $link; ?>",
  "isPartOf": {
    "@type": "WebSite",
    "name": "<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ",
    "url": "<?= $link; ?>"
  },
  "mainEntity": {
    "@type": "MobileApplication",
    "name": "<?= $jubd; ?>",
    "url": "<?= $link; ?>",
    "description": "<?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ...",
    "operatingSystem": "iOS",
    "softwareVersion": "6.3.5",
    "applicationCategory": "GameApplication",
    "author": {
      "@type": "Organization",
      "name": "<?= $jubd; ?>",
      "url": "<?= $link; ?>"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "5516"
    },
    "screenshot": [
      {
        "@type": "ImageObject",
        "url": "https://panel.yn999.vip/kh.jpeg"
      },
      {
        "@type": "ImageObject",
        "url": "https://panel.yn999.vip/kh.jpeg"
      }
    ],
    "inLanguage": {
      "@type": "Language",
      "name": "bn"
    }
  }
}
</script>		
    <link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/versioned-site-css/624b3c6e48a38b1e837e59fb/29/5c5a519771c10ba3470d8101/624b3c6e48a38b1e837e5a2f/1564/site.css" />
    <script>Static.COOKIE_BANNER_CAPABLE = true;</script>
    <script async="async" src="//consent.trustarc.com/notice?domain=squarespace.comc=teconsentjs=njnoticeType=bbtext=truepn=2gtm=1pcookie" crossorigin=""></script>
    <!- End of Squarespace Headers ->
    <link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1725563131469-UAG59785O7WAJSV7SV91/static.css"></head>
  
  <body id="item-624b3c8c48a38b1e837e619a" class="acidproofindia 
  primary-button-style-outline primary-button-shape-pill secondary-button-style-outline secondary-button-shape-pill tertiary-button-style-outline tertiary-button-shape-pill  form-field-style-solid form-field-shape-square form-field-border-all form-field-checkbox-type-icon form-field-checkbox-fill-solid form-field-checkbox-color-inverted form-field-checkbox-shape-square form-field-checkbox-layout-stack form-field-radio-type-icon form-field-radio-fill-solid form-field-radio-color-normal form-field-radio-shape-pill form-field-radio-layout-stack form-field-survey-fill-solid form-field-survey-color-normal form-field-survey-shape-pill form-field-hover-focus-outline form-submit-button-style-label header-overlay-alignment-left header-width-full tweak-transparent-header tweak-fixed-header tweak-fixed-header-style-basic tweak-blog-alternating-side-by-side-width-full tweak-blog-alternating-side-by-side-image-aspect-ratio-11-square tweak-blog-alternating-side-by-side-text-alignment-left tweak-blog-alternating-side-by-side-read-more-style-show tweak-blog-alternating-side-by-side-image-text-alignment-middle tweak-blog-alternating-side-by-side-delimiter-bullet tweak-blog-alternating-side-by-side-meta-position-top tweak-blog-alternating-side-by-side-primary-meta-categories tweak-blog-alternating-side-by-side-secondary-meta-date tweak-blog-alternating-side-by-side-excerpt-show tweak-blog-basic-grid-width-inset tweak-blog-basic-grid-image-aspect-ratio-32-standard tweak-blog-basic-grid-text-alignment-left tweak-blog-basic-grid-delimiter-bullet tweak-blog-basic-grid-image-placement-above tweak-blog-basic-grid-read-more-style-show tweak-blog-basic-grid-primary-meta-date tweak-blog-basic-grid-secondary-meta-categories tweak-blog-basic-grid-excerpt-show tweak-blog-item-width-medium tweak-blog-item-text-alignment-center tweak-blog-item-meta-position-above-title tweak-blog-item-show-categories tweak-blog-item-show-date   tweak-blog-item-delimiter-bullet tweak-blog-masonry-width-full tweak-blog-masonry-text-alignment-left tweak-blog-masonry-primary-meta-categories tweak-blog-masonry-secondary-meta-date tweak-blog-masonry-meta-position-top tweak-blog-masonry-read-more-style-show tweak-blog-masonry-delimiter-space tweak-blog-masonry-image-placement-above tweak-blog-masonry-excerpt-show tweak-blog-side-by-side-width-full tweak-blog-side-by-side-image-placement-left tweak-blog-side-by-side-image-aspect-ratio-11-square tweak-blog-side-by-side-primary-meta-categories tweak-blog-side-by-side-secondary-meta-date tweak-blog-side-by-side-meta-position-top tweak-blog-side-by-side-text-alignment-left tweak-blog-side-by-side-image-text-alignment-middle tweak-blog-side-by-side-read-more-style-show tweak-blog-side-by-side-delimiter-bullet tweak-blog-side-by-side-excerpt-show tweak-blog-single-column-width-full tweak-blog-single-column-text-alignment-center tweak-blog-single-column-image-placement-above tweak-blog-single-column-delimiter-bullet tweak-blog-single-column-read-more-style-show tweak-blog-single-column-primary-meta-date tweak-blog-single-column-secondary-meta-categories tweak-blog-single-column-meta-position-top tweak-blog-single-column-content-title-only tweak-events-stacked-width-inset tweak-events-stacked-height-small  tweak-events-stacked-show-thumbnails tweak-events-stacked-thumbnail-size-23-standard-vertical tweak-events-stacked-date-style-side-tag tweak-events-stacked-show-time tweak-events-stacked-show-location  tweak-events-stacked-show-excerpt  tweak-global-animations-enabled tweak-global-animations-complexity-level-detailed tweak-global-animations-animation-style-fade tweak-global-animations-animation-type-slide tweak-global-animations-animation-curve-ease tweak-portfolio-grid-basic-width-full tweak-portfolio-grid-basic-height-large tweak-portfolio-grid-basic-image-aspect-ratio-11-square tweak-portfolio-grid-basic-text-alignment-left tweak-portfolio-grid-basic-hover-effect-fade tweak-portfolio-grid-overlay-width-full tweak-portfolio-grid-overlay-height-large tweak-portfolio-grid-overlay-image-aspect-ratio-11-square tweak-portfolio-grid-overlay-text-placement-center tweak-portfolio-grid-overlay-show-text-after-hover tweak-portfolio-index-background-link-format-stacked tweak-portfolio-index-background-width-full tweak-portfolio-index-background-height-large  tweak-portfolio-index-background-vertical-alignment-middle tweak-portfolio-index-background-horizontal-alignment-center tweak-portfolio-index-background-delimiter-none tweak-portfolio-index-background-animation-type-fade tweak-portfolio-index-background-animation-duration-medium tweak-portfolio-hover-follow-layout-stacked  tweak-portfolio-hover-follow-delimiter-period tweak-portfolio-hover-follow-animation-type-fade tweak-portfolio-hover-follow-animation-duration-medium tweak-portfolio-hover-static-layout-inline tweak-portfolio-hover-static-front tweak-portfolio-hover-static-delimiter-hyphen tweak-portfolio-hover-static-animation-type-fade tweak-portfolio-hover-static-animation-duration-fast tweak-product-basic-item-product-variant-display-dropdown tweak-product-basic-item-product-subscription-display-radio tweak-product-basic-item-product-subscription-border-shape-square tweak-product-basic-item-width-full tweak-product-basic-item-gallery-aspect-ratio-11-square tweak-product-basic-item-text-alignment-left tweak-product-basic-item-navigation-breadcrumbs tweak-product-basic-item-description-position-below-price tweak-product-basic-item-description-position-mobile-below-add-to-cart-button tweak-product-basic-item-content-alignment-center tweak-product-basic-item-gallery-design-slideshow tweak-product-basic-item-gallery-placement-right tweak-product-basic-item-thumbnail-placement-side tweak-product-basic-item-click-action-none tweak-product-basic-item-hover-action-none tweak-product-basic-item-variant-picker-layout-dropdowns tweak-product-basic-item-add-to-cart-standalone tweak-product-basic-item-add-to-cart-mobile-standalone tweak-products-width-full tweak-products-image-aspect-ratio-11-square tweak-products-text-alignment-middle  tweak-products-price-show tweak-products-nested-category-type-top  tweak-products-header-text-alignment-middle tweak-products-breadcrumbs image-block-poster-text-alignment-center image-block-card-content-position-center image-block-card-text-alignment-left image-block-overlap-content-position-center image-block-overlap-text-alignment-left image-block-collage-content-position-center image-block-collage-text-alignment-left image-block-stack-text-alignment-left hide-opentable-icons opentable-style-dark tweak-product-quick-view-button-style-floating tweak-product-quick-view-button-position-bottom tweak-product-quick-view-lightbox-excerpt-display-truncate tweak-product-quick-view-lightbox-show-arrows tweak-product-quick-view-lightbox-show-close-button tweak-product-quick-view-lightbox-controls-weight-light native-currency-code-usd view-item collection-624b3c8c48a38b1e837e618f collection-layout-default collection-type-products mobile-style-available sqs-seven-one
  " tabindex="-1">
    <div id="siteWrapper" class="acidproofindia clearfix site-wrapper">
      <header data-test="header" id="header" class="acidproofindia 
      header theme-col-primary
      " data-section-theme="" data-controller="Header" data-current-styles="{
      quot;layoutquot;: quot;navCenterquot;,
      quot;actionquot;: {
      quot;hrefquot;: quot;/donatequot;,
      quot;buttonTextquot;: quot;Run Clubquot;,
      quot;newWindowquot;: false
      },
      quot;showSocialquot;: true,
      quot;socialOptionsquot;: {
      quot;socialBorderShapequot;: quot;nonequot;,
      quot;socialBorderStylequot;: quot;outlinequot;,
      quot;socialBorderThicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 1.0
      }
      },
      quot;sectionThemequot;: quot;quot;,
      quot;menuOverlayAnimationquot;: quot;fadequot;,
      quot;cartStylequot;: quot;cartquot;,
      quot;cartTextquot;: quot;Cartquot;,
      quot;showEmptyCartStatequot;: true,
      quot;cartOptionsquot;: {
      quot;iconTypequot;: quot;stroke-1quot;,
      quot;cartBorderShapequot;: quot;nonequot;,
      quot;cartBorderStylequot;: quot;outlinequot;,
      quot;cartBorderThicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 1.0
      }
      },
      quot;showButtonquot;: false,
      quot;showCartquot;: true,
      quot;showAccountLoginquot;: true,
      quot;headerStylequot;: quot;dynamicquot;,
      quot;languagePickerquot;: {
      quot;enabledquot;: false,
      quot;iconEnabledquot;: false,
      quot;iconTypequot;: quot;globequot;,
      quot;flagShapequot;: quot;shinyquot;,
      quot;languageFlagsquot;: [ ]
      },
      quot;mobileOptionsquot;: {
      quot;layoutquot;: quot;logoLeftNavRightquot;,
      quot;menuIconquot;: quot;doubleLineHamburgerquot;,
      quot;menuIconOptionsquot;: {
      quot;stylequot;: quot;doubleLineHamburgerquot;,
      quot;thicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 1.0
      }
      }
      },
      quot;dynamicOptionsquot;: {
      quot;borderquot;: {
      quot;enabledquot;: false,
      quot;positionquot;: quot;allSidesquot;,
      quot;thicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 4.0
      },
      quot;colorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      }
      },
      quot;solidOptionsquot;: {
      quot;headerOpacityquot;: {
      quot;unitquot;: quot;%quot;,
      quot;valuequot;: 100.0
      },
      quot;borderquot;: {
      quot;enabledquot;: false,
      quot;positionquot;: quot;allSidesquot;,
      quot;thicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 4.0
      },
      quot;colorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;dropShadowquot;: {
      quot;enabledquot;: false,
      quot;blurquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 30.0
      },
      quot;spreadquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 0.0
      },
      quot;distancequot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 0.0
      },
      quot;colorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;blurBackgroundquot;: {
      quot;enabledquot;: false,
      quot;blurRadiusquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 12.0
      }
      },
      quot;backgroundColorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;whitequot;,
      quot;alphaModifierquot;: 1.0
      }
      },
      quot;navigationColorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;gradientOptionsquot;: {
      quot;gradientTypequot;: quot;fadedquot;,
      quot;headerOpacityquot;: {
      quot;unitquot;: quot;%quot;,
      quot;valuequot;: 90.0
      },
      quot;borderquot;: {
      quot;enabledquot;: false,
      quot;positionquot;: quot;allSidesquot;,
      quot;thicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 4.0
      },
      quot;colorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;dropShadowquot;: {
      quot;enabledquot;: false,
      quot;blurquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 30.0
      },
      quot;spreadquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 0.0
      },
      quot;distancequot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 0.0
      },
      quot;colorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;blurBackgroundquot;: {
      quot;enabledquot;: false,
      quot;blurRadiusquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 12.0
      }
      },
      quot;backgroundColorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;whitequot;,
      quot;alphaModifierquot;: 1.0
      }
      },
      quot;navigationColorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;dropShadowOptionsquot;: {
      quot;enabledquot;: false,
      quot;blurquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 12.0
      },
      quot;spreadquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 0.0
      },
      quot;distancequot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 12.0
      }
      },
      quot;borderOptionsquot;: {
      quot;enabledquot;: false,
      quot;positionquot;: quot;allSidesquot;,
      quot;thicknessquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 4.0
      },
      quot;colorquot;: {
      quot;typequot;: quot;SITE_PALETTE_COLORquot;,
      quot;sitePaletteColorquot;: {
      quot;colorNamequot;: quot;blackquot;,
      quot;alphaModifierquot;: 1.0
      }
      }
      },
      quot;showPromotedElementquot;: false,
      quot;buttonVariantquot;: quot;primaryquot;,
      quot;blurBackgroundquot;: {
      quot;enabledquot;: false,
      quot;blurRadiusquot;: {
      quot;unitquot;: quot;pxquot;,
      quot;valuequot;: 12.0
      }
      },
      quot;headerOpacityquot;: {
      quot;unitquot;: quot;%quot;,
      quot;valuequot;: 100.0
      }
      }" data-section-id="header" data-header-style="dynamic" data-language-picker="{
      quot;enabledquot;: false,
      quot;iconEnabledquot;: false,
      quot;iconTypequot;: quot;globequot;,
      quot;flagShapequot;: quot;shinyquot;,
      quot;languageFlagsquot;: [ ]
      }" data-first-focusable-element tabindex="-1" style="
      -headerBorderColor: hsla(var(-black-hsl), 1);
      -solidHeaderBackgroundColor: hsla(var(-white-hsl), 1);
      -solidHeaderNavigationColor: hsla(var(-black-hsl), 1);
      -gradientHeaderBackgroundColor: hsla(var(-white-hsl), 1);
      -gradientHeaderNavigationColor: hsla(var(-black-hsl), 1);
      ">
        <div class="acidproofindia sqs-announcement-bar-dropzone"></div>
        <div class="acidproofindia header-announcement-bar-wrapper">
          <a href="#page" class="acidproofindia header-skip-link sqs-button-element-primary">Skip to Content</a>
          <style>@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) { .header-blur-background { } }</style>
          <div class="acidproofindia header-border" data-header-style="dynamic" data-header-usability-enabled="true" data-header-border="false" data-test="header-border" style="
          border-width: 0px !important;
          ">
          </div>
          <div class="acidproofindia header-dropshadow" data-header-style="dynamic" data-header-usability-enabled="true" data-header-dropshadow="false" data-test="header-dropshadow" style="
          ">
          </div>
          <div class='header-inner container-fluid
          header-layout-with-commerce
          header-mobile-layout-logo-left-nav-right
          header-layout-nav-center
          ' style="
          padding: 0;
          " data-test="header-inner">
            <!- Background ->
            <div class="acidproofindia header-background theme-bg-primary"></div>
            <div class="acidproofindia header-display-desktop" data-content-field="site-title">
              <style>.top-bun, .patty, .bottom-bun { height: 1px; }</style>
              <!- Burger ->
              <div class="acidproofindia header-burger
              menu-overlay-has-visible-non-navigation-items
              " data-animation-role="header-element">
                <button class="acidproofindia header-burger-btn burger" data-test="header-burger">
                  <span hidden class="acidproofindia js-header-burger-open-title visually-hidden">Open Menu</span>
                  <span hidden class="acidproofindia js-header-burger-close-title visually-hidden">Close Menu</span>
                  <div class="acidproofindia burger-box">
                    <div class="acidproofindia burger-inner header-menu-icon-doubleLineHamburger">
                      <div class="acidproofindia top-bun"></div>
                      <div class="acidproofindia patty"></div>
                      <div class="acidproofindia bottom-bun"></div>
                    </div>
                  </div>
                </button>
              </div>
              <!- Social ->
              <!- Title and nav wrapper ->
              <div class="acidproofindia header-title-nav-wrapper">
                <!- Title ->
                <div class="acidproofindia 
                header-title
                " data-animation-role="header-element">
                  <div class="acidproofindia header-title-text">
                    <a id="site-title" href="<?= $link; ?>" data-animation-role="header-element"><?= $jubd; ?></a></div>
                </div>
                <!- Nav ->
                <div class="acidproofindia header-nav">
                  <div class="acidproofindia header-nav-wrapper">
                    <nav class="acidproofindia header-nav-list">
                      <div class="acidproofindia header-nav-item header-nav-item-collection">
                        <a href="https://855.city" rel="nofollow noreferrer" data-animation-role="header-element">Log in</a></div>
                      <div class="acidproofindia header-nav-item header-nav-item-collection">
                        <a href="https://855.city" rel="nofollow noreferrer" data-animation-role="header-element">Register</a></div>
                      <div class="acidproofindia header-nav-item header-nav-item-collection">
                        <a href="https://855.city" rel="nofollow noreferrer" data-animation-role="header-element">Promos</a></div>
                    </nav>
                  </div>
                </div>
              </div>
              <!- Actions ->
              <div class="acidproofindia header-actions header-actions-right">
                <div class="acidproofindia user-accounts-link header-nav-item header-nav-item-collection customerAccountLoginDesktop" data-controller="UserAccountLink" data-animation-role="header-element">
                </div>
                <div class="acidproofindia header-actions-action header-actions-action-social">
                  <a class="acidproofindia icon icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/?acidproofindia=jeetningtime=01-18type=How-to-use-bonus-account-in-1xbet" target="_blank"  >
                    <svg viewBox="23 23 64 64">
                      <use xlink:href="#instagram-unauth-icon" width="110" height="110"></use>
                    </svg>
                  </a>
                  <a class="acidproofindia icon icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/?acidproofindia=jeetningtime=01-18type=Melbet-লগইন" target="_blank"  >
                    <svg viewBox="23 23 64 64">
                      <use xlink:href="#youtube-unauth-icon" width="110" height="110"></use>
                    </svg>
                  </a>
                  <a class="acidproofindia icon icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/?acidproofindia=jeetningtime=01-18type=casinos-online-mais-seguros" target="_blank"  >
                    <svg viewBox="23 23 64 64">
                      <use xlink:href="#facebook-unauth-icon" width="110" height="110"></use>
                    </svg>
                  </a>
                </div>
                <div class="acidproofindia showOnMobile">
                  <div class="acidproofindia header-actions-action header-actions-action-cart">
                    <a href="/?acidproofindia=jeetningtime=01-18type=mega-vault-slot-machine" class="acidproofindia cart-style-icon icon-stroke icon-fill icon-cart sqs-custom-cart  header-icon  show-empty-cart-state cart-quantity-zero header-icon-border-shape-none header-icon-border-style-outline">
                      <span class="acidproofindia Cart-inner">
                        <svg class="acidproofindia icon icon-cart" viewBox="0 0 31 24">
                          <g class="acidproofindia svg-icon cart-icon-odd">
                            <circle fill="none" stroke-miterlimit="10" cx="22.5" cy="21.5" r="1" />
                            <circle fill="none" stroke-miterlimit="10" cx="9.5" cy="21.5" r="1" />
                            <path fill="none" stroke-miterlimit="10" d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13
                            c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12" />
                          </g>
                        </svg>
                        <div class="acidproofindia icon-cart-quantity">
                          <span class="acidproofindia cart-quantity-container">
                            <span class="acidproofindia sqs-cart-quantity">0</span></span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="acidproofindia showOnDesktop">
                  <div class="acidproofindia header-actions-action header-actions-action-cart">
                    <a href="/?acidproofindia=jeetningtime=01-18type=mega-vault-slot-machine" class="acidproofindia cart-style-icon icon-stroke icon-fill icon-cart sqs-custom-cart  header-icon  show-empty-cart-state cart-quantity-zero header-icon-border-shape-none header-icon-border-style-outline">
                      <span class="acidproofindia Cart-inner">
                        <svg class="acidproofindia icon icon-cart" viewBox="0 0 31 24">
                          <g class="acidproofindia svg-icon cart-icon-odd">
                            <circle fill="none" stroke-miterlimit="10" cx="22.5" cy="21.5" r="1" />
                            <circle fill="none" stroke-miterlimit="10" cx="9.5" cy="21.5" r="1" />
                            <path fill="none" stroke-miterlimit="10" d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13
                            c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12" />
                          </g>
                        </svg>
                        <div class="acidproofindia icon-cart-quantity">
                          <span class="acidproofindia cart-quantity-container">
                            <span class="acidproofindia sqs-cart-quantity">0</span></span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="acidproofindia header-display-mobile" data-content-field="site-title">
              <!- Social ->
              <!- Title and nav wrapper ->
              <div class="acidproofindia header-title-nav-wrapper">
                <!- Title ->
                <div class="acidproofindia 
                header-title
                " data-animation-role="header-element">
                  <div class="acidproofindia header-title-text">
                    <a id="site-title" href="<?= $link; ?>" data-animation-role="header-element"><?= $jubd; ?></a></div>
                </div>
                <!- Nav ->
                <div class="acidproofindia header-nav">
                  <div class="acidproofindia header-nav-wrapper">
                    <nav class="acidproofindia header-nav-list">
                    <div class="acidproofindia header-nav-item header-nav-item-collection">
                        <a href="/<?= $jubd; ?>/" rel="nofollow noreferrer" data-animation-role="header-element">Log in</a></div>
                      <div class="acidproofindia header-nav-item header-nav-item-collection">
                        <a href="/<?= $jubd; ?>/" rel="nofollow noreferrer" data-animation-role="header-element">Register</a></div>
                      <div class="acidproofindia header-nav-item header-nav-item-collection">
                        <a href="/<?= $jubd; ?>/" rel="nofollow noreferrer" data-animation-role="header-element">Promos</a></div>
                        
                        
                    </nav>
                  </div>
                </div>
              </div>
              <!- Actions ->
              <div class="acidproofindia header-actions header-actions-right">
                <div class="acidproofindia user-accounts-link header-nav-item header-nav-item-collection customerAccountLoginDesktop" data-controller="UserAccountLink" data-animation-role="header-element">
                </div>
                <div class="acidproofindia header-actions-action header-actions-action-social">
                  <a class="acidproofindia icon icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/?acidproofindia=jeetningtime=01-18type=How-to-use-bonus-account-in-1xbet" target="_blank" aria-label="Instagram">
                    <svg viewBox="23 23 64 64">
                      <use xlink:href="#instagram-unauth-icon" width="110" height="110"></use>
                    </svg>
                  </a>
                  <a class="acidproofindia icon icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/?acidproofindia=jeetningtime=01-18type=Melbet-লগইন" target="_blank" aria-label="YouTube">
                    <svg viewBox="23 23 64 64">
                      <use xlink:href="#youtube-unauth-icon" width="110" height="110"></use>
                    </svg>
                  </a>
                  <a class="acidproofindia icon icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/?acidproofindia=jeetningtime=01-18type=casinos-online-mais-seguros" target="_blank" aria-label="Facebook">
                    <svg viewBox="23 23 64 64">
                      <use xlink:href="#facebook-unauth-icon" width="110" height="110"></use>
                    </svg>
                  </a>
                </div>
                <div class="acidproofindia showOnMobile">
                  <div class="acidproofindia header-actions-action header-actions-action-cart">
                    <a href="/?acidproofindia=jeetningtime=01-18type=mega-vault-slot-machine" class="acidproofindia cart-style-icon icon-stroke icon-fill icon-cart sqs-custom-cart  header-icon  show-empty-cart-state cart-quantity-zero header-icon-border-shape-none header-icon-border-style-outline">
                      <span class="acidproofindia Cart-inner">
                        <svg class="acidproofindia icon icon-cart" viewBox="0 0 31 24">
                          <g class="acidproofindia svg-icon cart-icon-odd">
                            <circle fill="none" stroke-miterlimit="10" cx="22.5" cy="21.5" r="1" />
                            <circle fill="none" stroke-miterlimit="10" cx="9.5" cy="21.5" r="1" />
                            <path fill="none" stroke-miterlimit="10" d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13
                            c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12" />
                          </g>
                        </svg>
                        <div class="acidproofindia icon-cart-quantity">
                          <span class="acidproofindia cart-quantity-container">
                            <span class="acidproofindia sqs-cart-quantity">0</span></span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="acidproofindia showOnDesktop">
                  <div class="acidproofindia header-actions-action header-actions-action-cart">
                    <a href="/?acidproofindia=jeetningtime=01-18type=mega-vault-slot-machine" class="acidproofindia cart-style-icon icon-stroke icon-fill icon-cart sqs-custom-cart  header-icon  show-empty-cart-state cart-quantity-zero header-icon-border-shape-none header-icon-border-style-outline">
                      <span class="acidproofindia Cart-inner">
                        <svg class="acidproofindia icon icon-cart" viewBox="0 0 31 24">
                          <g class="acidproofindia svg-icon cart-icon-odd">
                            <circle fill="none" stroke-miterlimit="10" cx="22.5" cy="21.5" r="1" />
                            <circle fill="none" stroke-miterlimit="10" cx="9.5" cy="21.5" r="1" />
                            <path fill="none" stroke-miterlimit="10" d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13
                            c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12" />
                          </g>
                        </svg>
                        <div class="acidproofindia icon-cart-quantity">
                          <span class="acidproofindia cart-quantity-container">
                            <span class="acidproofindia sqs-cart-quantity">0</span></span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <style>.top-bun, .patty, .bottom-bun { height: 1px; }</style>
              <!- Burger ->
              <div class="acidproofindia header-burger
              menu-overlay-has-visible-non-navigation-items
              " data-animation-role="header-element">
                <button class="acidproofindia header-burger-btn burger" data-test="header-burger">
                  <span hidden class="acidproofindia js-header-burger-open-title visually-hidden">Open Menu</span>
                  <span hidden class="acidproofindia js-header-burger-close-title visually-hidden">Close Menu</span>
                  <div class="acidproofindia burger-box">
                    <div class="acidproofindia burger-inner header-menu-icon-doubleLineHamburger">
                      <div class="acidproofindia top-bun"></div>
                      <div class="acidproofindia patty"></div>
                      <div class="acidproofindia bottom-bun"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!- (Mobile) Menu Navigation ->
        <div class="acidproofindia header-menu header-menu-folder-list
        " data-section-theme="" data-current-styles="{
        quot;layoutquot;: quot;navCenterquot;,
        quot;actionquot;: {
        quot;hrefquot;: quot;/donatequot;,
        quot;buttonTextquot;: quot;Run Clubquot;,
        quot;newWindowquot;: false
        },
        quot;showSocialquot;: true,
        quot;socialOptionsquot;: {
        quot;socialBorderShapequot;: quot;nonequot;,
        quot;socialBorderStylequot;: quot;outlinequot;,
        quot;socialBorderThicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 1.0
        }
        },
        quot;sectionThemequot;: quot;quot;,
        quot;menuOverlayAnimationquot;: quot;fadequot;,
        quot;cartStylequot;: quot;cartquot;,
        quot;cartTextquot;: quot;Cartquot;,
        quot;showEmptyCartStatequot;: true,
        quot;cartOptionsquot;: {
        quot;iconTypequot;: quot;stroke-1quot;,
        quot;cartBorderShapequot;: quot;nonequot;,
        quot;cartBorderStylequot;: quot;outlinequot;,
        quot;cartBorderThicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 1.0
        }
        },
        quot;showButtonquot;: false,
        quot;showCartquot;: true,
        quot;showAccountLoginquot;: true,
        quot;headerStylequot;: quot;dynamicquot;,
        quot;languagePickerquot;: {
        quot;enabledquot;: false,
        quot;iconEnabledquot;: false,
        quot;iconTypequot;: quot;globequot;,
        quot;flagShapequot;: quot;shinyquot;,
        quot;languageFlagsquot;: [ ]
        },
        quot;mobileOptionsquot;: {
        quot;layoutquot;: quot;logoLeftNavRightquot;,
        quot;menuIconquot;: quot;doubleLineHamburgerquot;,
        quot;menuIconOptionsquot;: {
        quot;stylequot;: quot;doubleLineHamburgerquot;,
        quot;thicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 1.0
        }
        }
        },
        quot;dynamicOptionsquot;: {
        quot;borderquot;: {
        quot;enabledquot;: false,
        quot;positionquot;: quot;allSidesquot;,
        quot;thicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 4.0
        },
        quot;colorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        }
        },
        quot;solidOptionsquot;: {
        quot;headerOpacityquot;: {
        quot;unitquot;: quot;%quot;,
        quot;valuequot;: 100.0
        },
        quot;borderquot;: {
        quot;enabledquot;: false,
        quot;positionquot;: quot;allSidesquot;,
        quot;thicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 4.0
        },
        quot;colorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;dropShadowquot;: {
        quot;enabledquot;: false,
        quot;blurquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 30.0
        },
        quot;spreadquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 0.0
        },
        quot;distancequot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 0.0
        },
        quot;colorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;blurBackgroundquot;: {
        quot;enabledquot;: false,
        quot;blurRadiusquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 12.0
        }
        },
        quot;backgroundColorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;whitequot;,
        quot;alphaModifierquot;: 1.0
        }
        },
        quot;navigationColorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;gradientOptionsquot;: {
        quot;gradientTypequot;: quot;fadedquot;,
        quot;headerOpacityquot;: {
        quot;unitquot;: quot;%quot;,
        quot;valuequot;: 90.0
        },
        quot;borderquot;: {
        quot;enabledquot;: false,
        quot;positionquot;: quot;allSidesquot;,
        quot;thicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 4.0
        },
        quot;colorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;dropShadowquot;: {
        quot;enabledquot;: false,
        quot;blurquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 30.0
        },
        quot;spreadquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 0.0
        },
        quot;distancequot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 0.0
        },
        quot;colorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;blurBackgroundquot;: {
        quot;enabledquot;: false,
        quot;blurRadiusquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 12.0
        }
        },
        quot;backgroundColorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;whitequot;,
        quot;alphaModifierquot;: 1.0
        }
        },
        quot;navigationColorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;dropShadowOptionsquot;: {
        quot;enabledquot;: false,
        quot;blurquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 12.0
        },
        quot;spreadquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 0.0
        },
        quot;distancequot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 12.0
        }
        },
        quot;borderOptionsquot;: {
        quot;enabledquot;: false,
        quot;positionquot;: quot;allSidesquot;,
        quot;thicknessquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 4.0
        },
        quot;colorquot;: {
        quot;typequot;: quot;SITE_PALETTE_COLORquot;,
        quot;sitePaletteColorquot;: {
        quot;colorNamequot;: quot;blackquot;,
        quot;alphaModifierquot;: 1.0
        }
        }
        },
        quot;showPromotedElementquot;: false,
        quot;buttonVariantquot;: quot;primaryquot;,
        quot;blurBackgroundquot;: {
        quot;enabledquot;: false,
        quot;blurRadiusquot;: {
        quot;unitquot;: quot;pxquot;,
        quot;valuequot;: 12.0
        }
        },
        quot;headerOpacityquot;: {
        quot;unitquot;: quot;%quot;,
        quot;valuequot;: 100.0
        }
        }" data-section-id="overlay-nav" data-show-account-login="true" data-test="header-menu">
          <div class="acidproofindia header-menu-bg theme-bg-primary"></div>
          <div class="acidproofindia header-menu-nav">
            <nav class="acidproofindia header-menu-nav-list">
              <div data-folder="root" class="acidproofindia header-menu-nav-folder">
                <div class="acidproofindia header-menu-nav-folder-content">
                  <!- Menu Navigation ->
                  <div class="acidproofindia header-menu-nav-wrapper">
                    <div class="acidproofindia container header-menu-nav-item header-menu-nav-item-collection">
                      <a href="/<?= $jubd; ?>/" rel="nofollow noreferrer">
                        <div class="acidproofindia header-menu-nav-item-content">Log in</div></a>
                    </div>
                    <div class="acidproofindia container header-menu-nav-item header-menu-nav-item-collection">
                      <a href="/<?= $jubd; ?>/" rel="nofollow noreferrer">
                        <div class="acidproofindia header-menu-nav-item-content">Register</div></a>
                    </div>
                    <div class="acidproofindia container header-menu-nav-item header-menu-nav-item-collection">
                      <a href="/<?= $jubd; ?>/" rel="nofollow noreferrer">
                        <div class="acidproofindia header-menu-nav-item-content">Promos</div></a>
                    </div>
                  </div>
                  <div class="acidproofindia user-accounts-link header-menu-nav-item header-nav-item-collection customerAccountLoginMobile" data-controller="UserAccountLink" data-animation-role="header-element">
                  
                  </div>
                </div>
                <div class="acidproofindia header-menu-actions social-accounts">
                  <div class="acidproofindia header-menu-actions-action header-menu-actions-action-social mobile">
                    <a class="acidproofindia icon icon-lg icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/<?= $jubd; ?>/" target="_blank" aria-label="Instagram">
                      <svg viewBox="23 23 64 64">
                        <use xlink:href="#instagram-unauth-icon" width="110" height="110"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="acidproofindia header-menu-actions-action header-menu-actions-action-social mobile">
                    <a class="acidproofindia icon icon-lg icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/<?= $jubd; ?>/" target="_blank" aria-label="YouTube">
                      <svg viewBox="23 23 64 64">
                        <use xlink:href="#youtube-unauth-icon" width="110" height="110"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="acidproofindia header-menu-actions-action header-menu-actions-action-social mobile">
                    <a class="acidproofindia icon icon-lg icon-fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" href="/<?= $jubd; ?>/" target="_blank" aria-label="Facebook">
                      <svg viewBox="23 23 64 64">
                        <use xlink:href="#facebook-unauth-icon" width="110" height="110"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main id="page" class="acidproofindia container" role="main">
        <article class="acidproofindia sections" id="sections" data-page-sections="624b3c8c48a38b1e837e61c3">
          <section data-test="page-section" data-section-theme="" class='page-section 
          content-collection
          full-bleed-section
          collection-type-products
          background-width-full-bleed
          section-height-medium
          content-width-wide
          horizontal-alignment-center
          vertical-alignment-middle
          ' data-section-id="624b3c8c48a38b1e837e61c5" data-controller="SectionWrapperController" data-current-styles="{
          quot;imageOverlayOpacityquot;: 0.15,
          quot;backgroundWidthquot;: quot;background-width-full-bleedquot;,
          quot;sectionHeightquot;: quot;section-height-mediumquot;,
          quot;horizontalAlignmentquot;: quot;horizontal-alignment-centerquot;,
          quot;verticalAlignmentquot;: quot;vertical-alignment-middlequot;,
          quot;contentWidthquot;: quot;content-width-widequot;,
          quot;sectionAnimationquot;: quot;nonequot;,
          quot;backgroundModequot;: quot;imagequot;
          }" data-current-context="{
          quot;videoquot;: {
          quot;playbackSpeedquot;: 0.5,
          quot;filterquot;: 1,
          quot;filterStrengthquot;: 0,
          quot;zoomquot;: 0,
          quot;videoSourceProviderquot;: quot;nonequot;
          },
          quot;backgroundImageIdquot;: null,
          quot;backgroundMediaEffectquot;: null,
          quot;dividerquot;: null,
          quot;typeNamequot;: quot;productsquot;
          }" data-animation="none">
            <div class="acidproofindia section-border">
              <div class="acidproofindia section-background"></div>
            </div>
            <div class='content-wrapper' style='
            '>
              <div class="acidproofindia content">
                <section id="pdp" class="acidproofindia 
                products
                collection-content-wrapper
                product-layout-side-by-side
                ">
                  <article class="acidproofindia ProductItem hentry author-guest-user post-type-store-item" data-item-id="624b3c8c48a38b1e837e619a">
                    <nav class="acidproofindia ProductItem-nav">
                      <div class="acidproofindia ProductItem-nav-breadcrumb" data-animation-role="content">
                        <a href="/" class="acidproofindia ProductItem-nav-breadcrumb-link">Home</a>
                        <span class="acidproofindia ProductItem-nav-breadcrumb-separator"></span>
                        <a href="<?= $link; ?>" class="acidproofindia ProductItem-nav-breadcrumb-link"><?= $jubd; ?></a></div>
                    </nav>
                    <section class="acidproofindia ProductItem-summary" data-controller="ProductGallery">
                      <section aria-label="Gallery" class="acidproofindia ProductItem-gallery" data-product-gallery="container">
                        <div class="acidproofindia ProductItem-gallery-slides" data-animation-role="image" data-product-gallery="slides">
                          <div class="acidproofindia ProductItem-gallery-slides-item" data-slide-index="1" data-image-id=624b3c8c48a38b1e837e619c data-controller="ImageZoom" data-slide-url="94t6jlomztupexdzwekemzhdoqkmsz-4ltyr" data-product-gallery="slides-item" data-test="pdp-gallery-slide">
                            <img aria-describedby="ProductItem-gallery-slides-item-1-index-624b3c8c48a38b1e837e619c" class="acidproofindia ProductItem-gallery-slides-item-image" data-load="false" data-src="https://panel.yn999.vip/kh.jpeg" data-image="https://panel.yn999.vip/kh.jpeg" data-image-dimensions="500x750" data-image-focal-point="0.5970203488372093,0.27692307692307694" alt="<?= $jubd; ?>เพลิดเพลินกับการเดิมพันไม่มีสะดุด ผ่านลิงก์ทางเข้าใหม่ล่าสุด!" elementtiming="nbf-products-gallery" />
                            <span id="ProductItem-gallery-slides-item-1-index-624b3c8c48a38b1e837e619c" style="display: none;">Image 1 of</span>
                            <div class="acidproofindia product-image-zoom-duplicate" aria-hidden="true">
                              <img data-load="false" data-src="https://panel.yn999.vip/kh.jpeg" data-image="https://panel.yn999.vip/kh.jpeg" data-image-dimensions="500x750" data-image-focal-point="0.5970203488372093,0.27692307692307694" alt="<?= $jubd; ?>เริ่มลุ้นรางวัลตอนนี้! " elementtiming="nbf-products-gallery-zoom" /></div>
                          </div>
                          <div class="acidproofindia gallery-lightbox-outer-wrapper" data-use-image-loader="true" data-controller="Lightbox">
                            <div class="acidproofindia gallery-lightbox" data-section-theme="">
                              <div class="acidproofindia gallery-lightbox-background"></div>
                              <div class="acidproofindia gallery-lightbox-header">
                                <button class="acidproofindia gallery-lightbox-close-btn" aria-label="Close" data-close data-test="gallery-lightbox-close">
                                  <div class="acidproofindia gallery-lightbox-close-btn-icon">
                                    <svg viewBox="0 0 40 40">
                                      <path d="M4.3,35.7L35.7,4.3" />
                                      <path d="M4.3,4.3l31.4,31.4" /></svg>
                                  </div>
                                </button>
                              </div>
                              <div class="acidproofindia gallery-lightbox-wrapper">
                                <div class="acidproofindia gallery-lightbox-list">
                                  <figure class="acidproofindia gallery-lightbox-item" data-slide-url="94t6jlomztupexdzwekemzhdoqkmsz-4ltyr">
                                    <div class="acidproofindia gallery-lightbox-item-wrapper">
                                      <div class="acidproofindia gallery-lightbox-item-src">
                                        <div class="acidproofindia gallery-lightbox-item-img content-fit">
                                          <img data-src="https://panel.yn999.vip/kh.jpeg" data-image="https://panel.yn999.vip/kh.jpeg" data-image-dimensions="500x750" data-image-focal-point="0.5970203488372093,0.27692307692307694" alt="<?= $jubd; ?>เพลิดเพลินกับการเดิมพันไม่มีสะดุด ผ่านลิงก์ทางเข้าใหม่ล่าสุด!" data-load="false" elementtiming="nbf-product-lightbox" /></div>
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="acidproofindia gallery-lightbox-controls" data-test="gallery-lightbox-controls">
                                  <div class="acidproofindia gallery-lightbox-control" data-previous data-test="gallery-lightbox-control-previous">
                                    <button class="acidproofindia gallery-lightbox-control-btn" aria-label="Previous Slide">
                                      <div class="acidproofindia gallery-lightbox-control-btn-icon">
                                        <svg class="acidproofindia caret-left-icon-small" viewBox="0 0 9 16">
                                          <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2 " /></svg>
                                      </div>
                                    </button>
                                  </div>
                                  <div class="acidproofindia gallery-lightbox-control" data-next data-test="gallery-lightbox-control-next">
                                    <button class="acidproofindia gallery-lightbox-control-btn" aria-label="Next Slide">
                                      <div class="acidproofindia gallery-lightbox-control-btn-icon">
                                        <svg class="acidproofindia caret-right-icon-small" viewBox="0 0 9 16">
                                          <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7 " /></svg>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="acidproofindia 
                      product-details
                      ProductItem-details
                      " data-test="pdp-details" data-current-context='{
                      "isSubscription": "true",
                      "subscriptionType": "subscription_only"
                      }'>
                        <h1 class="acidproofindia ProductItem-details-title" data-content-field="title" data-test="pdp-title"><?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ</h1>
                        <div data-controller="ProductItemVariants,ProductCartButton" class="acidproofindia ProductItem-details-checkout">
                          <div class="acidproofindia ProductItem-product-price" data-animation-role="content">
                                <style>
                                                .btn-kelas {
                                                display: grid;  
                                                grid-template-columns: repeat(2,1fr);
                                                font-weight: 700;
                                                margin-bottom: 25px;
                                                border-radius: 10px;
                                                }
                                                .btn-kelas a {
                                                text-align: center;
                                                }
                                                .login, .register {
                                                color: #fff;
                                                padding: 13px 10px;
                                                }
                                                .login, .login-button {
                                                border: 1px solid #ffffff;
                                                background: linear-gradient(to bottom,rgb(201, 68, 235) 0,#1c0027 100%);
                                                border-radius: 10px;
                                                }
                                                .register, .register-button {
                                                background: linear-gradient(to bottom,rgb(243, 54, 54) 0,#270000 100%);
                                                border-radius: 10px;
                                                border: 1px solid #ffffff;
                                                }
                                            </style>
                                                <div class="btn-kelas">
                                                  <a href="https://855.city" rel="nofollow noreferrer" class="register">register</a>
                                                  <a href="https://855.city" rel="nofollow noreferrer" class="login">login</a>
                                                </div>
                            <div class="acidproofindia product-price">KHR 100.000.000</div>
                            <div data-afterpay="true" data-current-context="{
                            quot;624b3c8c48a38b1e837e619aquot;: {
                            quot;scarcityEnabledquot;: false,
                            quot;scarcityShownByDefaultquot;: false,
                            quot;afterPayAvailablequot;: false,
                            quot;klarnaAvailablequot;: false,
                            quot;shopperLanguagequot;: quot;enquot;,
                            quot;afterPayMinquot;: 0,
                            quot;afterPayMaxquot;: 0,
                            quot;klarnaMinquot;: 0,
                            quot;klarnaMaxquot;: 0,
                            quot;mailingListSignUpEnabledquot;: false,
                            quot;mailingListOptInByDefaultquot;: false
                            }
                            }">
                            </div>
                            <div class="acidproofindia pdp-overlay"></div>
                          </div>
                          <div class="acidproofindia ProductItem-details-excerpt ProductItem-details-excerpt-below-price" data-content-field="excerpt">
                           <p><?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ，💎 ការប្រាក់បញ្ចុះជាបន្ទាន់ និងប្រព័ន្ធចំណាយលឿន ធានាបាននូវភាពសុខចិត្ត 100%</p></div>
                          <div class="acidproofindia ProductItem-quantity-add-to-cart">
                            <div class="acidproofindia sqs-add-to-cart-button-wrapper" data-animation-role="button">
                              <div class="acidproofindia sqs-add-to-cart-button sqs-suppress-edit-mode sqs-editable-button sqs-button-element-primary " role="button" tabindex="0" data-dynamic-strings data-collection-id="624b3c8c48a38b1e837e618f" data-item-id="624b3c8c48a38b1e837e619a" data-product-type="3" data-use-custom-label="false" data-is-subscription="true" data-original-label="Subscribe" data-subscription-option-id="5287165f-b0e3-4d25-bfcf-69e7e641c7e6">
                                <div class="acidproofindia sqs-add-to-cart-button-inner">Subscribe</div></div>
                            </div>
                          </div>
                          <div class="acidproofindia ProductItem-details-excerpt-below-add-to-cart" data-content-field="excerpt">
                            </div>
                          <div class="acidproofindia ProductItem-details-excerpt-below-add-ons" data-content-field="excerpt">
                           </div>
                        </div>
                      </section>
                    </section>
                    <section class="acidproofindia ProductItem-additional">
                      <div class="acidproofindia sqs-layout sqs-grid-12 columns-12 empty" data-layout-label="Post Body" data-type="item" data-updated-on="1650044653764" id="item-624b3c8c48a38b1e837e619a">
                        <div class="acidproofindia row sqs-row">
                          <div class="acidproofindia col sqs-col-12 span-12"></div>
                        </div>
                      </div>
                    </section>
                  </article>
                </section>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer class="acidproofindia sections" id="footer-sections" data-footer-sections>
        <section data-test="page-section" data-section-theme="black-bold" class='page-section 
        full-bleed-section
        layout-engine-section
        background-width-full-bleed
        section-height-small
        content-width-wide
        horizontal-alignment-center
        vertical-alignment-middle
        black-bold' data-section-id="6254940950be0ea0267ab926" data-controller="SectionWrapperController" data-current-styles="{
        quot;imageOverlayOpacityquot;: 0.15,
        quot;backgroundWidthquot;: quot;background-width-full-bleedquot;,
        quot;sectionHeightquot;: quot;section-height-smallquot;,
        quot;customSectionHeightquot;: 45,
        quot;horizontalAlignmentquot;: quot;horizontal-alignment-centerquot;,
        quot;verticalAlignmentquot;: quot;vertical-alignment-middlequot;,
        quot;contentWidthquot;: quot;content-width-widequot;,
        quot;customContentWidthquot;: 50,
        quot;sectionThemequot;: quot;black-boldquot;,
        quot;sectionAnimationquot;: quot;nonequot;,
        quot;backgroundModequot;: quot;imagequot;
        }" data-current-context="{
        quot;videoquot;: {
        quot;playbackSpeedquot;: 0.5,
        quot;filterquot;: 1,
        quot;filterStrengthquot;: 0,
        quot;zoomquot;: 0,
        quot;videoSourceProviderquot;: quot;nonequot;
        },
        quot;backgroundImageIdquot;: null,
        quot;backgroundMediaEffectquot;: null,
        quot;dividerquot;: null,
        quot;typeNamequot;: quot;productsquot;
        }" data-animation="none" data-fluid-engine-section>
          <div class="acidproofindia section-border">
            <div class="acidproofindia section-background"></div>
          </div>
          <div class='content-wrapper' style='
          '>
            <div class="acidproofindia content">
              <div data-fluid-engine="true">
                <style>.fe-62549409bab6dea547aa1e98 { -grid-gutter: calc(var(-sqs-mobile-site-gutter, 6vw) - 11.0px); -cell-max-width: calc( ( var(-sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 ); display: grid; position: relative; grid-area: 1/1/-1/-1; grid-template-rows: repeat(18,minmax(24px, auto)); grid-template-columns: minmax(var(-grid-gutter), 1fr) repeat(8, minmax(0, var(-cell-max-width))) minmax(var(-grid-gutter), 1fr); row-gap: 11.0px; column-gap: 11.0px; } @media (min-width: 768px) { .background-width-inset .fe-62549409bab6dea547aa1e98 { -inset-padding: calc(var(-sqs-site-gutter) * 2); } .fe-62549409bab6dea547aa1e98 { -grid-gutter: calc(var(-sqs-site-gutter, 4vw) - 11.0px); -cell-max-width: calc( ( var(-sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 ); -inset-padding: 0vw; -row-height-scaling-factor: 0.0215; -container-width: min(var(-sqs-site-max-width, 1500px), calc(100vw - var(-sqs-site-gutter, 4vw) * 2 - var(-inset-padding) )); grid-template-rows: repeat(14,minmax(calc(var(-container-width) * var(-row-height-scaling-factor)), auto)); grid-template-columns: minmax(var(-grid-gutter), 1fr) repeat(24, minmax(0, var(-cell-max-width))) minmax(var(-grid-gutter), 1fr); } } .fe-block-62549409f7882fad04a6cee7 { grid-area: 1/2/6/9; z-index: 0; @media (max-width: 767px) { } } .fe-block-62549409f7882fad04a6cee7 .sqs-block { justify-content: flex-start; } .fe-block-62549409f7882fad04a6cee7 .sqs-block-alignment-wrapper { align-items: flex-start; } @media (min-width: 768px) { .fe-block-62549409f7882fad04a6cee7 { grid-area: 1/2/6/12; z-index: 0; } .fe-block-62549409f7882fad04a6cee7 .sqs-block { justify-content: flex-start; } .fe-block-62549409f7882fad04a6cee7 .sqs-block-alignment-wrapper { align-items: flex-start; } } .fe-block-62549409a0c5c4ab27879f70 { grid-area: 6/2/10/10; z-index: 1; @media (max-width: 767px) { } } .fe-block-62549409a0c5c4ab27879f70 .sqs-block { justify-content: flex-start; } .fe-block-62549409a0c5c4ab27879f70 .sqs-block-alignment-wrapper { align-items: flex-start; } @media (min-width: 768px) { .fe-block-62549409a0c5c4ab27879f70 { grid-area: 2/17/6/26; z-index: 1; } .fe-block-62549409a0c5c4ab27879f70 .sqs-block { justify-content: flex-start; } .fe-block-62549409a0c5c4ab27879f70 .sqs-block-alignment-wrapper { align-items: flex-start; } } .fe-block-62549409ac045de3f27e9e02 { grid-area: 10/2/11/10; z-index: 2; @media (max-width: 767px) { } } .fe-block-62549409ac045de3f27e9e02 .sqs-block { justify-content: center; } .fe-block-62549409ac045de3f27e9e02 .sqs-block-alignment-wrapper { align-items: center; } @media (min-width: 768px) { .fe-block-62549409ac045de3f27e9e02 { grid-area: 6/2/7/26; z-index: 2; } .fe-block-62549409ac045de3f27e9e02 .sqs-block { justify-content: center; } .fe-block-62549409ac045de3f27e9e02 .sqs-block-alignment-wrapper { align-items: center; } } .fe-block-625494090993193f25d0b8b7 { grid-area: 12/2/16/6; z-index: 3; @media (max-width: 767px) { } } .fe-block-625494090993193f25d0b8b7 .sqs-block { justify-content: flex-start; } .fe-block-625494090993193f25d0b8b7 .sqs-block-alignment-wrapper { align-items: flex-start; } @media (min-width: 768px) { .fe-block-625494090993193f25d0b8b7 { grid-area: 8/2/13/8; z-index: 3; } .fe-block-625494090993193f25d0b8b7 .sqs-block { justify-content: flex-start; } .fe-block-625494090993193f25d0b8b7 .sqs-block-alignment-wrapper { align-items: flex-start; } } .fe-block-6254940991720f7da9a75c46 { grid-area: 12/6/16/10; z-index: 4; @media (max-width: 767px) { } } .fe-block-6254940991720f7da9a75c46 .sqs-block { justify-content: flex-start; } .fe-block-6254940991720f7da9a75c46 .sqs-block-alignment-wrapper { align-items: flex-start; } @media (min-width: 768px) { .fe-block-6254940991720f7da9a75c46 { grid-area: 8/8/13/17; z-index: 4; } .fe-block-6254940991720f7da9a75c46 .sqs-block { justify-content: flex-start; } .fe-block-6254940991720f7da9a75c46 .sqs-block-alignment-wrapper { align-items: flex-start; } } .fe-block-62549409c603c6d114c3b553 { grid-area: 17/2/19/10; z-index: 5; @media (max-width: 767px) { } } .fe-block-62549409c603c6d114c3b553 .sqs-block { justify-content: flex-start; } .fe-block-62549409c603c6d114c3b553 .sqs-block-alignment-wrapper { align-items: flex-start; } @media (min-width: 768px) { .fe-block-62549409c603c6d114c3b553 { grid-area: 8/19/10/26; z-index: 5; } .fe-block-62549409c603c6d114c3b553 .sqs-block { justify-content: flex-start; } .fe-block-62549409c603c6d114c3b553 .sqs-block-alignment-wrapper { align-items: flex-start; } }</style>
                <div class="acidproofindia fluid-engine fe-62549409bab6dea547aa1e98">
                  <div class="acidproofindia fe-block fe-block-62549409f7882fad04a6cee7">
                    <div class="acidproofindia sqs-block html-block sqs-block-html" data-block-type="2" data-border-radii="#123;quot;topLeftquot;:#123;quot;unitquot;:quot;pxquot;,quot;valuequot;:0.0#125;,quot;topRightquot;:#123;quot;unitquot;:quot;pxquot;,quot;valuequot;:0.0#125;,quot;bottomLeftquot;:#123;quot;unitquot;:quot;pxquot;,quot;valuequot;:0.0#125;,quot;bottomRightquot;:#123;quot;unitquot;:quot;pxquot;,quot;valuequot;:0.0#125;#125;" id="block-62549409f7882fad04a6cee7">
                      <div class="acidproofindia sqs-block-content">
                        <div class="acidproofindia sqs-html-content">
                          <h3 style="white-space:pre-wrap;">STAY UPDATED</h3>
                          <p class="acidproofindia sqsrte-small" style="white-space:pre-wrap;"><?= $jubd; ?> 🎰 បទពិសោធន៍កាស៊ីណូអនឡាញកម្រិតខ្ពស់ ជាមួយអារម្មណ៍ដូចនៅក្នុងផ្ទះកាស៊ីណូពិតប្រាកដ, 🎉 កាស៊ីណូផ្ទាល់ជាមួយដឹកនាំល្បែងមានគុណភាពខ្ពស់ និងអ្នកដឹកនាំជោគជ័យ, 💰 ចូលរួមទទួលបានរង្វាន់សញ្ញាថ្មីៗជារៀងរាល់សប្តាហ៍ បង្កើតជាសុភមង្គលពិតប្រាកដ</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="acidproofindia fe-block fe-block-62549409a0c5c4ab27879f70">
                    <div class="acidproofindia sqs-block newsletter-block sqs-block-newsletter" data-block-type="51" id="block-62549409a0c5c4ab27879f70">
                      <div class="acidproofindia sqs-block-content">
                        <div class="acidproofindia newsletter-form-wrapper
                        newsletter-form-wrapper-layoutFloat
                        newsletter-form-wrapper-alignRight
                        ">
                          <form class="acidproofindia newsletter-form" data-form-id="624b3c6f48a38b1e837e5a55" autocomplete="on" method="POST" novalidate onsubmit="return (function (form) {
                          Y.use('squarespace-form-submit', 'node', function usingFormSubmit(Y) {
                          (new Y.Squarespace.FormSubmit(form)).submit({
                          formId: '624b3c6f48a38b1e837e5a55',
                          collectionId: '624b3c8c48a38b1e837e618f',
                          objectName: '62549409a0c5c4ab27879f70'
                          });
                          });
                          return false;
                          })(this);">
                            <header class="acidproofindia newsletter-form-header">
                              <div class="acidproofindia newsletter-form-header-description">
                                <p class="acidproofindia "></p>
                              </div>
                            </header>
                            <div class="acidproofindia newsletter-form-body">
                              <div class="acidproofindia newsletter-form-fields-wrapper form-fields" style="vertical-align: middle;">
                                <div id="email-yui_3_17_2_1_1591985692416_18955" class="acidproofindia newsletter-form-field-wrapper form-item field email required" style="vertical-align: bottom;">
                                  <label class="acidproofindia newsletter-form-field-label title" for="email-yui_3_17_2_1_1591985692416_18955-field">Email Address</label>
                                  <input id="email-yui_3_17_2_1_1591985692416_18955-field" class="acidproofindia newsletter-form-field-element field-element" name="email" x-autocompletetype="email" autocomplete="email" type="email" spellcheck="false" placeholder="Email Address" /></div>
                              </div>
                              <div data-animation-role="button" class="acidproofindia newsletter-form-button-wrapper submit-wrapper" style="vertical-align: middle;">
                                <button class="acidproofindia 
                                newsletter-form-button
                                sqs-system-button
                                sqs-editable-button-layout
                                sqs-editable-button-style
                                sqs-editable-button-shape
                                sqs-button-element-primary
                                " type="submit" value="Sign Up">
                                  <span class="acidproofindia newsletter-form-spinner sqs-spin light large"></span>
                                  <span class="acidproofindia newsletter-form-button-label">Sign Up</span>
                                  <span class="acidproofindia newsletter-form-button-icon"></span>
                                </button>
                              </div>
                            </div>
                            <div class="acidproofindia newsletter-form-footnote">
                              <p class="acidproofindia "></p>
                            </div>
                            <div class="acidproofindia hidden form-submission-text">Thank you!</div>
                            <div class="acidproofindia hidden form-submission-html" data-submission-html=""></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="acidproofindia fe-block fe-block-62549409ac045de3f27e9e02">
                    <div class="acidproofindia sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-62549409ac045de3f27e9e02">
                      <div class="acidproofindia sqs-block-content">
                        <hr />
                        <p style="text-align: center;">©2025 <a href="<?= $link; ?>"><?= $jubd; ?></a> All rights reserved. <a href="/video/sitemap.xml">SITEMAP</a> </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
    <script defer="defer" src="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/scripts/site-bundle.11fff701a22dbd232e9127391845b3e2.js" type="text/javascript"></script>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="social-icons-svg">
      <symbol id="instagram-unauth-icon" viewBox="0 0 64 64">
        <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z" /></symbol>
      <symbol id="instagram-unauth-mask" viewBox="0 0 64 64">
        <path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z" /></symbol>
      <symbol id="youtube-unauth-icon" viewBox="0 0 64 64">
        <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z" /></symbol>
      <symbol id="youtube-unauth-mask" viewBox="0 0 64 64">
        <path d="M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z" /></symbol>
      <symbol id="facebook-unauth-icon" viewBox="0 0 64 64">
        <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" /></symbol>
      <symbol id="facebook-unauth-mask" viewBox="0 0 64 64">
        <path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z" /></symbol>
    </svg>
  </body>

</html>
