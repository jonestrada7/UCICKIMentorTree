<?php
$site['page_title'] = 'Mentor/Mentee Program';
$site['layout'] = 'full_page';
require "/home/ucicslcu/public_html/config.php";

$output = <<<OUTPUT

<div class="row-fluid">
  <div class="well text-center" id="page-header">
    <h1><strong>Mentor/Mentee Program</strong></h1>
  </div>
</div>

<div class="row-fluid">
  <div class="span12">
    <div class="well">
      <div style="padding:20px;">
        <div style="position: relative; padding-bottom: 43%; overflow: auto; -webkit-overflow-scrolling:touch;" id="Q8P6MLLD9G">
          <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="http://files.photosnack.com/iframejs/embed.html?hash=ptjazywyn" scrolling="no" frameborder="0" allowFullScreen="true"></iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="row-fluid">
    <div class="span12">
      <div class="well">
        <div style="padding:20px;">

          <h3 align='center'>About The Mentor/Mentee Program</h3>

          <p>The goal of the Mentor/Mentee program is to create an intimate relationship between one older member and a new member who might be interested in learning more about the club. Through this program there is an opportunity for new and old members
            to grow together as leaders. The Mentor/Mentee Program helps build a relationship between two individuals, and it acts as a bridge to create a better connection between the different generations of Circle K members by giving multiple opportunities
            to bond at social events and committee meetings.</p>
            <p>For returning members interested in becoming a mentor this year, click <a href="https://goo.gl/forms/VV4xF2HvRtCl2sI43">here</a> to apply!</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row-fluid">
    <div class="span12">
      <div class="well">
        <div style="padding:20px;">

          <h3 align='center'>Testimonials</h3>
          <div class="row-fluid">
            <div class="well">
              <div class="row-fluid">
                  "After creating the Mentor-Mentee System for UCI Circle K, I made myself a mentor to be the kind of mentor that I sought out for the club.The system was designed to retain members and give members a more intimate and personal members. As a mentor, I knew that I was
		going to learn just as much as I was going to teach, and with each mentee, I learned more and more about building personal relationships. Why do I feel like my work designing the mentor-mentee system is an important step in my Circle K career? Well, in addition to being
		my legacy in my club, the system helped me in helping other leaders beyond Circle K, delving into their UCI and personal development. Emybeth, Helen, Janine, and Shannon are all very different people, each with their own quirks and personalities. I want to be able to
		support them in everything that they do, and provide for them beyond what their bigs and other mentors can. The system is not designed to replace the family system; in fact, it�s here to help strengthen a member�s bonds to the club by providing more connections. When the
		time comes to apply to be a mentor, DO IT! I didn�t think it would be as rewarding as it has been, and being able to see members grow and love their mentors and mentees has made the work that I, Conrad, Ami, and Debbie worth it. Learning about others� experiences,
		making connections, and giving and caring about others is really what leadership is all about!
		<p>-Kyler Tagupa, Membership Development and Relations Chair (2014-2015)<p>

              </div>
            </div>
          </div>
          <div class="row-fluid">
            <div class="well">
              <div class="row-fluid">
                "The mentor-mentee program helped me branch out and grow in Circle K. As a first year, I found it easy to be active within my family, but I didn't have the courage to go out to large service events or club-wide events. The mentor-mentee
                      program introduced me to members I hadn't met before and gave me the extra push I needed to become more involved in all aspects of Circle K. Having a mentor to support me has also encouraged me to take more initiative and leadership
                      roles. Now that I have a mentee this year, I get to share my passion and dedication for Circle K with her and encourage her to become more involved."<p>-Joyce Wang (Past Mentee, Current Mentor)</p>
              </div>
            </div>
          </div>
          <div class="row-fluid">
            <div class="well">
              <div class="row-fluid">
                "I am really grateful for the Mentor Mentee Program because it gave me a chance to meet someone new in the club and an opportunity to share my experiences. When I got to meet my two amazing mentees, Joseph and Teresa, I was super happy
                because they reminded me of why I love Circle K so much. They never fail to make me laugh and I can't wait to go on more adventures with them!"
                <p>-Nancy Nguyen (Mentor)</p>
              </div>
            </div>
          </div>
          <div class="row-fluid">
            <div class="well">
              <div class="row-fluid">
                "The mentor and mentee system was a great way for me to find a more personal connection with someone outside my family. I had fun connecting with my mentor Stacey whether it was asking her about advice on life or going to food adventures
                        with her."
                  <p>-Kevin Carizon (Mentee)</p>
                "A mentor who is there for me even when she's always busy. One who inspires me to do better and work harder. The mentor who constantly reminds me about self-care; I am nothing more but grateful for my mentor Joyce."
                  <p>-Jenny Truong (Mentee)</p>
              </div>
            </div>
          </div>

          <div class="row-fluid">
            <div class="well">
              <div class="row-fluid">
                "Since getting paired with my mentee, i've never felt more of that "big brother" role ever before in my life. My mentee has given me a chance to be more open minded about the chances that I take. It's true what they say: you learn more
                from your students, than your students who learn from you."
                <p>-Kristian Balmes (Mentor)</p>
              </div>
            </div>
          </div>

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
