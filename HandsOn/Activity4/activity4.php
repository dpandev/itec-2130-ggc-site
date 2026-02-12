<!DOCTYPE html>
<html>
<head>
  <meta name="robots" content="noindex, nofollow">
  <title> Activity 4 </title>
</head>
<body>
  <h1> Activity 4 - Feb 9, 2026 </h1>
  <p> Submitted by David</p>
  <hr>
  <h2> Variable Scope </h2>
  <?php
  $x = 10;
  echo "The value of my global variable x is: $x<br><br />";
  function myFunction() {
      echo "Access the global variable x inside a function: $x<br>";
      echo "This will generate a warning message. <br>";
      global $x;
      echo "Access the global variable x after we specified it's global, and the value is: $x<br>";
      $y = 20;
      echo "The value of the local variable y inside myFunction() is $y<br><br />";
  }

  myFunction();
  echo "Access the local variable y outside of myFunction(), the value is $y<br>";
  echo "This will generate a warning message. <br>";
  ?>
  <hr>
  <h2> Using Loop to Build Tables </h2>
  <h3> Table 1 </h3>
  <?php
  echo "You can access the global variable defined in another section of the PHP code.";
  echo "The value for variable x is: $x<br>";

  echo "<table border ='1' style='width:20%;margin:auto;'>";
  for ($row = 0; $row < 8; $row++) {
      echo "<tr>";
      for ($col = 0; $col < 8; $col++) {
          if (($row + $col) % 2 == 0) {
              $color = "white";
          } else {
              $color = "black";
          }
          echo "<td style = 'background-color:$color'>$col</td>";
      }
      echo "</tr>";
  }
  echo "</table>";
  ?>

  <h3> Table 2 </h3>
  <?php
  echo "<table border ='1' style='width:20%;margin:auto;'>";
  for ($row = 0; $row < 8; $row++) {
      echo "<tr>";
      for ($col = 0; $col < 8; $col++) {
          // Opposite pattern of Table 1
          if (($row + $col) % 2 == 0) {
              $color = "black";
          } else {
              $color = "white";
          }
          echo "<td style = 'background-color:$color'>$col</td>";
      }
      echo "</tr>";
  }
  echo "</table>";
  ?>

  <h3> Table 3 </h3>
  <?php
  $colors3 = array("red", "green", "blue");
  echo "<table border ='1' style='width:20%;margin:auto;'>";
  for ($row = 0; $row < 10; $row++) {
      echo "<tr>";
      for ($col = 0; $col < 10; $col++) {
          $colorIndex = ($row + $col) % 3;
          $color = $colors3[$colorIndex];
          echo "<td style = 'background-color:$color'>&nbsp;</td>";
      }
      echo "</tr>";
  }
  echo "</table>";
  ?>

  <h3> Table 4: four colors RGBY </h3>
  <?php
  $colors4 = array("red", "green", "blue", "yellow");
  echo "<table border ='1' style='width:20%;margin:auto;'>";
  for ($row = 0; $row < 10; $row++) {
      echo "<tr>";
      for ($col = 0; $col < 10; $col++) {
          $colorIndex = ($row + $col) % 4;
          $color = $colors4[$colorIndex];
          echo "<td style = 'background-color:$color'>&nbsp;</td>";
      }
      echo "</tr>";
  }
  echo "</table>";
  ?>

  <h3> Table 5: any number of colors </h3>
  <?php
  $colors = array("red", "green", "blue", "yellow", "cyan", "pink");
  $numColors = count($colors);
  echo "<table border ='1' style='width:20%;margin:auto;'>";
  for ($row = 0; $row < 10; $row++) {
      echo "<tr>";
      for ($col = 0; $col < 10; $col++) {
          $colorIndex = ($row + $col) % $numColors;
          $color = $colors[$colorIndex];
          echo "<td style = 'background-color:$color'>&nbsp;</td>";
      }
      echo "</tr>";
  }
  echo "</table>";
  ?>
</body>
</html>