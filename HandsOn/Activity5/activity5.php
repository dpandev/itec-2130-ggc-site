
<!DOCTYPE html>
<html>
<head>
  <meta name="robots" content="noindex, nofollow">
  <title> Activity 5 </title>
</head>
<body>
  <h1> Activity 5 - Feb 9, 2026 </h1>
  <p> Submitted by David </p>
  <hr>
  <h2> All About Arrays </h2>
  <?php
  $myDream = array("Lamborghini");
  echo "After graduation, I want to have a " . $myDream[0] . "<br>";
  $friends = array("Mike", "Jeff", "Susan", "Jenny", "Joshua");
  
  echo "<p> Using loop to display array elements:</p>";
  for ($i = 0; $i < count($friends); $i++) {
      $num = $i + 1;
      echo "Friend number $num is " . $friends[$i] . ".<br>";
  }

  echo "<p> Associative Array </p>";
  $studentIDs = array(
      "Mike" => "9001234",
      "Jeff" => "9001235",
      "Susan" => "9001236",
      "Jenny" => "9001237",
      "Joshua" => "9001238"
  );

  echo "<p> Using Loop to display associative array elements:</p>";
  foreach ($studentIDs as $name => $id) {
      echo "Student id of $name is $id.<br>";
  }

  echo "<p> Define a 2nd associative array </p>";
  
  $weeklyPayment = array(
      "Mike" => 800,
      "Jeff" => 600,
      "Susan" => 200,
      "Jenny" => 1200,
      "Joshua" => 600
  );

  $total = array_sum($weeklyPayment);
  echo "The total budget for the week is $$total.<br>";

  echo "<p> Find the employee with the highest weekly payment </p>";

  $maxPayment = max($weeklyPayment);
  $maxName = array_search($maxPayment, $weeklyPayment);
  echo "$maxName has the highest payment of that week, which is $$maxPayment.<br>";

  $minPayment = min($weeklyPayment);
  $minName = array_search($minPayment, $weeklyPayment);
  echo "$minName has the lowest payment of that week, which is $$minPayment.<br>";
  ?>
  <hr>
  <h2> 2D Array </h2>
  <?php
  $students = array(
      array("John", 24, "Male", "9001234"),
      array("Holly", 19, "Female", "9001237"),
      array("Suzy", 26, "Female", "9001236"),
      array("Noah", 29, "Male", "9001235")
  );

  for ($i = 0; $i < count($students); $i++) {
      $num = $i + 1;
      echo "<p> Student $num</p>";
      echo "<ul>";
      foreach ($students[$i] as $info) {
          echo "<li>$info</li>";
      }
      echo "</ul>";
  }
  ?>
</body>
</html>