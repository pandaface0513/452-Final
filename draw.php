<?php
    include 'header.php'
?>

<link rel="stylesheet" href="css/canvas-style.css">
<link rel="stylesheet" href="css/page-style.css">


<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="index.php">Home</span></a></li>
            <li class="active"><a href="draw.php">Draw</a></li>

          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span id="username">Please Log In </span><span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="login.php">Login with Email</a></li>
                <li class="divider"></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

<div id="canvas" class="container">
    <p> click here </p>
</div>

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="draw.js"></script>