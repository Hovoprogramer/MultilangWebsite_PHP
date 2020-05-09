<?php 
include "config.php";
?>
<!DOCTYPE html>
<html>

<head>
     <title>EnergoSystem</title>
    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="author" content="Energosystem էլեկտրոմոնտաժային աշխատանքներ">
    <meta name="description" content="EnergoSystem էլեկտրոմոնտաժային աշխատանքներ Հայաստանում և արտերկերում:" />
    <meta name="keywords" content="էլեկտրոմոնտաժ,Energosystem,լուսավորություն">
    <meta name="generator" content="www.energosystem.am 1.0">
    <meta name="robots" content="all">
    <meta name="google-site-verification" content="">
    <meta name="yandex-verification" content="">
    
    <link rel="icon" href="assets/img/e.ico">
    
    <link href="css/vendor/bootstrap.css" rel="stylesheet" />
    <link href="css/vendor/slick.css" rel="stylesheet" />
    <link href="css/vendor/slick-theme.css" rel="stylesheet" />
    <link href="css/vendor/odometer-theme-default.css" rel="stylesheet" />
    <link href="css/vendor/magnific-popup.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />
</head>

<body>
    <section class="navigation">
        <div class="nav-container">
            <div class="brand">
                <a href="index.php<?php echo $lang['language']?>"> <img src="assets/img/logo.png" alt="" /> </a>
            </div>
            <nav>
                <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                <ul class="nav-list">
                    <li><a href="index.php<?php echo $lang['language']?>"><?php echo $lang['home'] ?></a></li>
                    <li><a href="about.php<?php echo $lang['language']?>"><?php echo $lang['about'] ?></a></li>
                    <li>
                        <a href="#!" id="nav_a"><?php echo $lang['services'] ?> <i class="fas fa-chevron-right"></i></a>
                        
                        <ul class="nav-dropdown">
                        <li><a href="services.php<?php echo $lang['language']?>#E_installation"><?php echo $lang['services1'] ?></a></li>          
                        <li><a href="services.php<?php echo $lang['language']?>#Projection"><?php echo $lang['services2'] ?></a></li> 
                        <li><a href="services.php<?php echo $lang['language']?>#G_service"><?php echo $lang['services3'] ?></a></li>
                        <li><a href="services.php<?php echo $lang['language']?>#Documentation"><?php echo $lang['services4'] ?></a></li>
                </ul>                 
                    </li> 
                    
                    <li> 
                        <a   href="portfolio.php<?php echo $lang['language']?>"><?php echo $lang['portfolio'] ?></a>                  
                    </li>
                    <li>
                        <a href="contact.php<?php echo $lang['language']?>"><?php echo $lang['contact'] ?></a>
                    </li>
                    <li><a href="#!"><?php echo $lang['lang']?></a>
                    <ul class="nav-dropdown">
                            <li>
                               <a href="<?php $_SERVER['REQUEST_URI']; ?>?lang=hy"><?php echo $lang['lang_hy']?></a>
                            </li>     
                               
                            <li>
                            <a href="<?php $_SERVER['REQUEST_URI']; ?>?lang=en"><?php echo $lang['lang_en']?></a>
                            </li>
                            <li>
                             <a href="<?php $_SERVER['REQUEST_URI']; ?>?lang=ru"><?php echo $lang['lang_ru']?></a>
                            </li>
                        </ul>   
                    </li>
                </ul>
            </nav>
        </div>
    </section>