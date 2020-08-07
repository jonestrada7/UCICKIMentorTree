<?php
$site['page_title'] = 'Mentor/Mentee Program';
$site['layout'] = 'full_page';
require "/home/ucicslcu/public_html/config.php";

$output = <<<OUTPUT
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8"/>
        <title>Chart Example</title>
        <!-- stylesheets -->
        <link rel="stylesheet" href="../../Treant.css">
        <link rel="stylesheet" href="test.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
</head>
<body>
<!-- <style>
    
/********** Styling for entire page ************/
dl,dt,dd,ul,ol,pre,form,fieldset,input,textarea,p,blockquote,th,td { 
    margin:0; 
    padding:0; 
    font-family: 'century gothic,sans-serif';
    text-align: center;
}
table { border-collapse:collapse; border-spacing:0; }
fieldset,img { border:0; }
address,caption,cite,code,dfn,em,th,var {  font-weight:normal;}
caption,th { 
    text-align:left; 
}

q:before,q:after { content:''; }
abbr,acronym { border:0; }


/********** TREANT Mentor Tree Properties ************/
/* optional Container STYLES */
.chart { height: 100%; margin: 5px; width: 100%; }
.Treant > .node { padding: 5px; border: 4px solid #33FF99; border-radius: 35px; }
.Treant > .node img { width: 100%; height: 100%; border-radius: 60px;}

.Treant .collapse-switch { width: 100%; height: 100%; border: none; }
.Treant .node.collapsed { background-color: #99FFFF; }
.Treant .node.collapsed .collapse-switch { background: none; }
</style> -->

<!-- Formatting OUTSIDE tree -->
<div class="row-fluid">
  <div class="well text-center" id="page-header">
    <h1><strong>Mentor/Mentee Program</strong></h1>
  </div>
</div>

<div class="row-fluid" >
  <div class="span12">
    <div class="well">
      <div style="padding:20px;">
        <div style="position: relative; padding-bottom: 43%; overflow: hidden; -webkit-overflow-scrolling:touch;" id="Q8P6MLLD9G">
          <!-- javascript -->
          <script src="../../vendor/raphael.js"></script>
          <script src="../../Treant.js"></script>
          
          <link href="../../vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" type="text/css"/>
          <script src="../../vendor/jquery.min.js"></script>
          <script src="../../vendor/jquery.easing.js"></script>
          <script src="../../vendor/jquery.mousewheel.js"></script>
          <script src="../../vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
          
          <script src="alignTree.js"></script>
          
          <div class="chart" id="OrganiseChart-simple"> 
            
            <center>
              <script src="lines/ABBABG_LINE.js"></script>
              <script src="lines/BOTTLE_FLIP_LINE.js"></script>
              <script src="lines/F_BOY_LINE.js"></script>
              <script src="lines/INDECISIVE_LINE.js"></script>
              <script src="lines/MATCHA_LINE.js"></script>
              <script src="lines/NINJA_LINE.js"></script>
              <script src="lines/SLEEPY_LINE.js"></script>
              <script src="lines/SMASHER_LINE.js"></script>
              <script src="lines/WUJU_LINE.js"></script>
              
              <script src="MentorTree.js"></script>
              
              <script>
                  mentor_tree = new Treant( MentorTree, align_tree );
              </script>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>


</body>
</html>

OUTPUT;

require_once "/home/ucicslcu/public_html/private/include/header.php";
require_once "/home/ucicslcu/public_html/private/include/layouts/". $site['layout'] .".php";

echo $header . $layout . $footer;
?>
