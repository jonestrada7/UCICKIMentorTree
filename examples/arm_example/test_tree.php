<?php
$site['page_title'] = 'Mentor/Mentee Program';
$site['layout'] = 'full_page';
require "/home/ucicslcu/public_html/config.php";

// $output = <<<OUTPUT
// <div style="padding-top: 100px;">
//   <p>test</p>
// </div>
// OUTPUT;

$output = <<<OUTPUT

<link rel="stylesheet" href="../../Treant.css">
<link rel="stylesheet" href="test.css">
<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">

<div class="row-fluid" >
  <div class="span12">
    <div class="well">
      <div style="padding:20px;">
        <div style="position: relative; padding-bottom: 0%; overflow: hidden; -webkit-overflow-scrolling:touch;" id="Q8P6MLLD9G">
    
          <script src="../../vendor/raphael.js"></script>
          <script src="../../Treant.js"></script>
          
          <link href="../../vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" type="text/css"/>
          <script src="../../vendor/jquery.min.js"></script>
          <script src="../../vendor/jquery.easing.js"></script>
          <script src="../../vendor/jquery.mousewheel.js"></script>
          <script src="../../vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
          
          <script src="treeconfig.js"></script>
          <div class="chart" id="OrganiseChart-simple"> 
          
            <script src="lines/ABBABG_LINE.js"></script>
            <script src="lines/BOTTLE_FLIP_LINE.js"></script>
            <script src="lines/CINEMA_LINE.js"></script>
            <script src="lines/F_BOY_LINE.js"></script>
            <script src="lines/INDECISIVE_LINE.js"></script>
            <script src="lines/MATCHA_LINE.js"></script>
            <script src="lines/NINJA_LINE.js"></script>
            <script src="lines/SLEEPY_LINE.js"></script>
            <script src="lines/SMASHER_LINE.js"></script>
            <script src="lines/VIRUS_LINE.js"></script>
            <script src="lines/WUJU_LINE.js"></script>
            <script src="lines/WEENIE_LINE.js"></script>
          
            <script src="MentorTree.js"></script>
          
            <script>
              mentor_tree = new Treant( MentorTree );
            </script>
          
          </div>
        </div>
      </div>
    </div>
  </div>

OUTPUT;

require_once "/home/ucicslcu/public_html/private/include/header.php";
require_once "/home/ucicslcu/public_html/private/include/layouts/". $site['layout'] .".php";
require_once "/home/ucicslcu/public_html/private/include/footer.php";
echo $header . $layout . $footer;
?>
