<!DOCTYPE html>
<html lang="en">
<?php
    require_once('db/db.php');

?>

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>UE Katowice</title>

    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/nanoscroller.css" rel="stylesheet">

    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet"
          type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">


    <link href="css/grayscale.css" rel="stylesheet">


    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">
                <i class="fa fa-play-circle"></i> <span class="light">Przewodnik</span> UE
            </a>
        </div>


        <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
                <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                <li class="hidden">
                    <a href="#page-top"></a>
                </li>
                <!--<li>-->
                    <!--<a class="page-scroll" href="#map-section">Mapa</a>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a class="page-scroll" href="#buildings">Budynki</a>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a class="page-scroll" href="#contact">Sale</a>-->
                <!--</li>-->
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>

<!-- Intro Header -->
<header class="intro">
    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <h1 class="brand-heading">Wirtualny przewodnik po kampusie UE w Katowicach</h1>
                    <a href="#map-section" class="btn btn-circle page-scroll">
                        <i class="fa fa-angle-double-down animated"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- About Section
<section id="about" class="container content-section text-center">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
            <h2>About Grayscale</h2>
            <p>Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
            <p>This theme features stock photos by <a href="http://gratisography.com/">Gratisography</a> along with a custom Google Maps skin courtesy of <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
            <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.</p>
        </div>
    </div>
</section>-->
<section id="map-section" class="container-fluid content-section text-center">
    <div id="container" class="container-fluid">
        <div id="streetview" class="row">
            <div id="classes" class="col-md-3">
                <h1>Sale</h1>
                <div id="listClasses" class="nano">
                    <div class="nano-content">
                        <ul id="class-list"></ul>
                    </div>
                </div>
            </div>

            <div id="map-streetview" class="col-md-6">

            </div>
            <div id="building" class="col-md-3">
                <h1>Budynki</h1>
                <div id="listBuildings" class="nano">
                    <div class="nano-content">
                        <ul id="building-list"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="map"></div>
</section>



<section id="buildings" class="content-section text-center">
    <div class="building-section">
        <div class="container">
            <div class="col-lg-8 col-lg-offset-2">
            </div>
        </div>
    </div>
</section>


<section id="contact" class="container content-section text-center">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
        </div>
    </div>
</section>
//
//<!-- Map Section -->
//<!--<div id="map"></div>

//<!-- Footer -->
<footer>
    <div class="container text-center">
        <p>Copyright &copy; Mateusz Orzeł 2016</p>
    </div>
</footer>

//<!-- jQuery -->
<script src="vendor/jquery/jquery.js"></script>

//<!-- Bootstrap Core JavaScript -->
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>

//<!-- Plugin JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

//<!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
<script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeeh5dOwYXsO8ZJxJM9ba7tmK-OleyAMI&sensor=false"></script>

//<!-- Theme JavaScript -->
<script src="js/grayscale.js"></script>
<script src="js/events.js"></script>
<script src="js/streetview.js"></script>
<script src="js/panoramaSwitcher.js"></script>
<script src="js/customLinks.js"></script>
<script src="js/jquery.nanoscroller.js"></script>

</body>
</html>
