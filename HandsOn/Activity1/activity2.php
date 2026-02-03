<html>
  <head>
    <title>Activity 2</title>
  </head>
  <body>
    <h1>Activity 2 - Feb 2, 2026</h1>
    <hr>
    <h2>Kinda a refresher</h2>
    <p>Enter your email for a chance to win an award!</p>
    <form>
      <input type="email" name="email" placeholder="Enter your email">
      <input type="submit" value="Submit">
    </form>
    <!-- php for the form -->
     <?php
       if ($_SERVER["REQUEST_METHOD"] == "POST") {
         $email = $_POST["email"];
         echo "<p>Thank you for submitting your email: $email</p>";
       }
     ?>
    <hr>
    <h2>For Loop</h2>
    <?php
      for ($i = 1; $i <= 5; $i++) {
        echo "The number is: $i <br>";
      }
    ?>
    <hr>
    <h2>While Loop</h2>
    <?php
      $x=1;
      while($x <= 5) {
        echo "The number is: $x <br>";
        $x++;
      }
    ?>
    <hr>
    <h2>Nested Loop</h2>
    <?php
      for ($i = 1; $i <= 3; $i++) {
        for ($j = 1; $j <= 3; $j++) {
          echo "i = $i, j = $j <br>";
        }
      }
    ?>
    <hr>
    <h2>Function - Draw Trapezoid</h2>
    <?php
      function drawTrapezoid($top, $bottom, $symbol) {
        for ($row=$top-1; $row<$bottom; $row++) {
          for($x=0; $x<($row+1); $x++) {
            echo $symbol;
          }
          echo "<br>";
        }
      }
    ?>
    <hr>
    <h2>Draw Trapezoid Example</h2>
    <?php
      drawTrapezoid(3, 6, "*");
    ?>
    <hr>
    <h2>Add Some Style</h2>
    <?php
      echo '<style>
              body { font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 20px; text-align: center;}
              h1 { color: #333366; }
              h2 { color: #336633; }
              p { font-size: 14px; }
            </style>';
    ?>
    <hr>
    <h2>If-Else Statement</h2>
    <?php
      date_default_timezone_set('America/Detroit');
      $hour = date("H");
      $hour = (int)$hour;
      if ($hour < 12) {
        echo "<p>Good morning!</p>";
      } elseif ($hour < 18) {
        echo "<p>Good afternoon!</p>";
      } else {
        echo "<p>Good evening!</p>";
      }
      echo "<p>The current hour is: $hour</p>";
    ?>
    <p> Submitted by David Panesiu</p>
    <!-- this is my comment block -->
  </body>
</html>