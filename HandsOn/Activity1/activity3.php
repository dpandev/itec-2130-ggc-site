<html>
  <head>
    <title>Activity 3</title>
  </head>
  <body style="text-align: center;">
    <h1>Activity 3 - Feb 3, 2026</h1>
    <hr>
    <h2>How to use Functions defined in a different PHP file</h2>
    <?php
      include 'lib01.php';
      echo "<h3>Example: Creating a Table </h3>";
      echo "<table border='1'>";
      echo "<tr><th>Header 1</th><th>Header 2</th></tr>";
      echo "<tr><td>Data 1</td><td>Data 2</td></tr>";
      echo "</table>";

      echo "<h3>Example 1: Creating a Trapezoid in a Table </h3>";
      echo "<table border='1'>";
      drawTrapezoid(3, 6, "*");
      echo "</table>";
    ?>
    <h3>Example Function Call: Find Current Lunar Phase</h3>
    <?php
      drawMoonPhase();
    ?>
    <h3>Example 2: Show Messages</h3>
    <?php
      sendTextMessage();
    ?>
    <h3>Example 3: Display Image based on temperature</h3>
    <?php
      $t=rand(10,100);
      echo "<p>Current temperature: ".$t."°F</p>";
      if ($t < 32) {
        echo "<p>It's freezing!</p>";
        showImage("https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=");
      } elseif ($t < 50) {
        echo "<p>It's cold!</p>";
        showImage("https://thumbs.dreamstime.com/z/cartoon-illustration-cold-freezing-man-freezing-cold-164283346.jpg");
      } elseif ($t < 70) {
        echo "<p>It's mild.</p>";
        showImage("https://www.bbc.com/weather/articles/crkxxej2mx2o");
      } else {
        echo "<p>It's hot!</p>";
        showImage("https://polygiene.com/wp-content/uploads/2025/05/man-cooling-down-in-hot-weather.jpg");
      }
    ?>
    <hr>
    <p> Submitted by David Panesiu</p>
  </body>
</html>