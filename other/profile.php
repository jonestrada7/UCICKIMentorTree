<?php
require "config.php";

if (is_numeric($_GET['id']) && ($u = new User($sql, $_GET['id'])) && $u->info['check'] && ($u->info['unique_url'] == $_GET['url'])) {
	$site['page_title'] = $u->full_name();

    $family = $u->family->info['family_name'];
    $family = $family != "" ? $family: "No Family :(";

    $mrp = new Mrp($sql, $config, $u->info['id']);
    $level = $mrp->mrp_level_name();

    $t_term_num = $u->hours('total', $config['term_start'], $config['term_end']);
    $s_term_num = $u->hours('service', $config['term_start'], $config['term_end']);
    $l_term_num = $u->hours('leadership', $config['term_start'], $config['term_end']);
    $f_term_num = $u->hours('fellowship', $config['term_start'], $config['term_end']);
    $s_term_per = $t_term_num == 0 ? 0: ($s_term_num*100 / $t_term_num)."%";
    $l_term_per = $t_term_num == 0 ? 0: ($l_term_num*100 / $t_term_num)."%";
    $f_term_per = $t_term_num == 0 ? 0: ((($t_term_num-$s_term_num-$l_term_num)*100) / $t_term_num)."%";

    $t_life_num = $u->hours('total', 0, $config['term_end']);
    $s_life_num = $u->hours('service', 0, $config['term_end']);
    $l_life_num = $u->hours('leadership', 0, $config['term_end']);
    $f_life_num = $u->hours('fellowship', 0, $config['term_end']);
    $s_life_per = $t_life_num == 0 ? 0: ($s_life_num*100 / $t_life_num)."%";
    $l_life_per = $t_life_num == 0 ? 0: ($l_life_num*100 / $t_life_num)."%";
    $f_life_per = $t_life_num == 0 ? 0: ((($t_life_num-$s_life_num-$l_life_num)*100) / $t_life_num)."%";

    $a_output = '';
    $achievements = $u->achievements_earned(0, 999);
    $c = 0;
    while ($a = mysql_fetch_array($achievements)) {
        $c++;
        $_achievement = new Achievement($sql, $a['achievement_id']);
        $a_output .= '<span title="'. $_achievement->info['achievement_description'] .'" style="font-size:2em;padding:10px;"><i class="'. $_achievement->info['achievement_icon'] .'"></i></span>';
    }
    if ($c==0) {
        $a_output .= 'No earned achievements.';
    }

$output =  <<<OUTPUT

    <div class="alert">Don&rsquo;t like your profile picture? Click <a href="http://www.ucicirclek.com/user-cp/#settings">here</a> to change it!</div>

	<div class="row-fluid">
		<div class="span4">
			<div class="well well-small">
				<center><h1>{$u->full_name()}</h1></center>
			</div>
			<div class="well well-small">
				<div style="height: 300px; background: url('{$u->profile_picture()}') center center no-repeat; background-size:contain;">
				</div>
			</div>
			<div class="well well-small">
				<center><h5>Achievements</h5>{$a_output}</center>
                <div class="text-right" style="padding:5px;text-transform:uppercase;">
                    <a href="http://www.ucicirclek.com/page/all_achievements/">view all achievements <i class="icon-double-angle-right"></i></a>
                </div>
			</div>
		</div>
		<div class="span8">
            <div class="row-fluid">
                <div class="span8">
                    <div class="alert alert-info" style="margin:5px;padding-left:35px;">
                        <h3>Pilot Profile</h3>
                        <ul style="list-style-type:none;"><small>
                            <li><strong>Position:</strong> {$u->title()}</li>
                            <li><strong>Family:</strong> $family</li>
                            <li><strong>MRP:</strong> $level</li>
                            <li><strong>Achievements:</strong> {$u->achievements_count()}</li>
                            <li><strong>Quests Attended:</strong> {$u->count_events_attended()}</li>
                            <li><strong>Quests Chaired:</strong> {$u->count_events_chaired()}</li></small>
                        </ul>
                    </div>
                </div>
                <div class="span4">
                    <div class="alert alert-info" style="margin:5px;padding-left:35px;">
                        <center><h3>Skill Level</h3>
                        <br />
                        <span style="font-size:9.1em;color:rgb({$t_term_num},0,0);">&#9829;</span>
                        <small><br /><br /><a style="color:white;" data-toggle="tooltip" title="Your skill level reflects how many hours you have completed this term. The more hours you do, the brighter your heart!">What Is This?</a><br /></small></center>
                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="alert alert-success" style="margin:5px;padding-left:35px;">
                    <h3>Term Hours</h3>
                    <div class="row-fluid">
                        <div class="span4" style="margin:5px;">
                            <center><h1>$s_term_num</h1><small>Service</small></center>
                        </div>
                        <div class="span4" style="margin:5px;">
                            <center><h1>$l_term_num</h1><small>Leadership</small></center>
                        </div>
                        <div class="span4" style="margin:5px;">
                            <center><h1>$f_term_num</h1><small>Fellowship</small></center>
                        </div>
                    </div>
                    <br />
                    <div class="progress" style="height: 21px">
                        <div class="bar bar-info" style="width: $s_term_per;">S</div>
                        <div class="bar bar-warning" style="width: $l_term_per;">L</div>
                        <div class="bar bar-danger" style="width: $f_term_per;">F</div>
                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="alert alert-warning" style="margin:5px;padding-left:35px;">
                    <h3>Lifetime Hours</h3>
                    <div class="row-fluid">
                        <div class="span4" style="margin:5px;">
                            <center><h1>$s_life_num</h1><small>Service</small></center>
                        </div>
                        <div class="span4" style="margin:5px;">
                            <center><h1>$l_life_num</h1><small>Leadership</small></center>
                        </div>
                        <div class="span4" style="margin:5px;">
                            <center><h1>$f_life_num</h1><small>Fellowship</small></center>
                        </div>
                    </div>
                    <br />
                    <div class="progress" style="height: 21px">
                        <div class="bar bar-info" style="width: $s_life_per;">S</div>
                        <div class="bar bar-warning" style="width: $l_life_per;">L</div>
                        <div class="bar bar-danger" style="width: $f_life_per;">F</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
    $(function() {
      $("[data-toggle=tooltip]").tooltip();
      });
    </script>

OUTPUT;
}else{
	$site['page_title'] = '404 Pilot Not Found';
	$output = <<<OUTPUT

OUTPUT;
}

$site['layout'] = 'full_page';

require_once "/home/ucicslcu/public_html/private/include/header.php";
require_once "/home/ucicslcu/public_html/private/include/layouts/". $site['layout'] .".php";
require_once "/home/ucicslcu/public_html/private/include/footer.php";
echo $header . $layout . $footer;
?>
