
<!DOCTYPE html>
<html>
<head>
  <meta name="robots" content="noindex, nofollow">
  <title> Activity 6 </title>
</head>
<body>
  <h1> Activity 6 - Feb 9, 2026 </h1>
  <p> Submitted by David </p>
  <hr>
  <h2> 2D Array </h2>
  <?php
  $students = array(
      array("John", 24, "Male", "9001234"),
      array("Holly", 19, "Female", "9001237"),
      array("Suzy", 26, "Female", "9001236"),
      array("Noah", 29, "Male", "9001235"),
      array("Jason", 18, "Male", "9002123"),
      array("Amy", 25, "Female", "9002124")
  );
  ?>
  
  <h3> Display 2D Array in a Table </h3>
  <?php
  echo "<table border ='1' style='width:30%;margin:auto;'>";
  echo "<tr> <td> Name </td> <td> Age </td> <td> Gender </td> <td> ID </td></tr>";
  for ($i = 0; $i < 4; $i++) {
      echo "<tr>";
      echo "<td>".$students[$i][0]."</td>";
      echo "<td>".$students[$i][1]."</td>";
      echo "<td>".$students[$i][2]."</td>";
      echo "<td>".$students[$i][3]."</td>";
      echo "</tr>";
  }
  echo "</table>";
  ?>
  
  <h3> Search 2D Array </h3>
  <p> Searching to find Jenny </p>
  <?php
  $searchName = "Jean";
  $found = false;
  
  for ($i = 0; $i < count($students); $i++) {
      if ($students[$i][0] == $searchName) {
          $found = true;
          break;
      }
  }
  
  if (!$found) {
      echo "$searchName not in the table. <br>";
  }
  $totalStudents = count($students);
  echo "The total number of students is $totalStudents<br>";
  ?>
  
  <p> Searching to find the youngest student.</p>
  <?php
  $minAge = $students[0][1];
  for ($i = 1; $i < count($students); $i++) {
      if ($students[$i][1] < $minAge) {
          $minAge = $students[$i][1];
      }
  }
  
  echo "The youngest person is  $minAge years old. <br>";
  
  $count = 0;
  for ($i = 0; $i < count($students); $i++) {
      if ($students[$i][1] == $minAge) {
          echo " Student ".$students[$i][0]."'s age is ".$students[$i][1]." and the student ID is ".$students[$i][3]."<br>";
          $count++;
      }
  }
  echo "Total $count students has been found with age $minAge.<br>";
  ?>
  
  <p> Find all the male students. Display their names and age. Display the total </p>
  <?php
  $maleCount = 0;
  for ($i = 0; $i < count($students); $i++) {
      if ($students[$i][2] == "Male") {
          echo "Name: ".$students[$i][0]." - Age: ".$students[$i][1]."<br>";
          $maleCount++;
      }
  }
  echo "Total male students: $maleCount<br>";
  ?>
  
  <p> Find all the female students less than or equal to 20 years old. Display their names and age. Display the total </p>
  <?php
  $femaleCount = 0;
  for ($i = 0; $i < count($students); $i++) {
      if ($students[$i][2] == "Female" && $students[$i][1] <= 20) {
          echo "Name: ".$students[$i][0]." - Age: ".$students[$i][1]."<br>";
          $femaleCount++;
      }
  }
  echo "Total female students: $femaleCount<br>";
  ?>
</body>
</html>