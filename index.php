<?php

include ('header.html');

?>

    <div class="container">

      <div class="row row-offcanvas row-offcanvas-right">

        <div class="col-xs-12 col-sm-9">
          <p class="pull-right visible-xs">
            <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
          </p>
          <div class="jumbotron">
            <h1>What's Kevin been up to?</h1>
            <p>Welcome to my project index, where you can see summaries of projects I've worked on. Feel free to click "More" on any of them to read about details and specifics on the development process.</p>
          </div>
          <div class="row">
            <div class="col-xs-6 col-lg-4">
              <h2>kevinxing.me</h2>
              <p><strong>December 2014 - Present</strong></p>
              <p>My first website ever, built to showcase what I've been doing/learning, which is a learning experience in itself. Meta!</p>
              <p>This website was written in HTML and CSS, with most of the layout elements provided by the powerful <a href="http://getbootstrap.com/">Bootstrap</a>.</p>
              <p>Obviously, this is an always on-going project.</p>
              <div class="spacer"><p><a class="btn btn-default" href="projects/someta.html" role="button">More &raquo;</a></p></div>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>aSymplePlatformer</h2>
              <p><i>Programmer and Lead Designer</i></p>
              <p><strong>October 2014 - Present</strong></p>
              <p>An asynchronous local competitive multiplayer 2D platformer made in Unity for the Fall 2014 Games Institute Game Jam at the University of Waterloo. </p>
              <p>The first player controls a character trying to complete platforming levels while the second player uses the mouse to drag and drop obstacles into the level in attempts to stop the first player from successfully reaching the end of the level.</p>
              <p>Development was a collaboartive effort between myself and two friends (<a href="https://github.com/sergei1152">@sergei1152</a> and <a href="https://github.com/shanpls">@shanpls</a>).</p>
              <div class="spacer"><p><a class="btn btn-default" href="projects/asympleplatformer.html" role="button">More &raquo;</a></p></div>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>FullHealth</h2>
              <p><i>Web Designer</i></p>
              <p><strong>July 2013 - September 2013</strong></p>
              <p>Real work experience in web design! FullHealth.ca is written in HTML, CSS, PHP and jQuery. </p>
              <p>My contributions during my time working on the site over the summer mainly comprised of improving backwards compatibility with older browsers as old as Internet Explorer 6 (as a charity they value as broad an audience as possible) and implementing basic features such as a fixed-position donation bar and minor adjustments of interface elements.</p>
              <p>I was not working on the website from its inception, so it was an interesting experience learning how to adapt to foundations that others have written and building upon it. </p>
              <div class="spacer"><p><a class="btn btn-default" href="projects/fullhealth.html" role="button">More &raquo;</a></p></div>
            </div><!--/.col-xs-6.col-lg-4-->
          </div><!--/row-->
          <div class="row">
              <div class="col-xs-6 col-lg-4">
              <h2>Critical Crush</h2>
              <p><strong>Not yet started</strong></p>
              <p>Competitive multiplayer Match-Three-type game loosely inspired by Puzzle Quest and Dota 2. Currently only in design and concept stages.</p>
              <div class="spacer"><p><a class="btn btn-default" href="projects/criticalcrush.html" role="button">More &raquo;</a></p></div>
            </div><!--/.col-xs-6.col-lg-4-->
            </div><!-- /row -->
        </div><!--/.col-xs-12.col-sm-9-->

        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
          <div class="list-group">
            <a href="#" class="list-group-item active">Project Index</a>
            <a href="aboutme.html" class="list-group-item">About Me</a>
            <h3>Projects</h3>
            <a href="projects/fullhealth.html" class="list-group-item">FullHealth</a>
            <a href="projects/asympleplatformer.html" class="list-group-item">aSymplePlatformer</a>
            <a href="projects/someta.html" class="list-group-item">kevinxing.me</a>
          </div>
        </div><!--/.sidebar-offcanvas-->
      </div><!--/row-->

      <hr>

      <footer>
      </footer>

    </div><!--/.container-->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>

    <script src="offcanvas.js"></script>
  </body>
</html>