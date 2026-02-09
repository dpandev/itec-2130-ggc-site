<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow" />
  <link rel="stylesheet" href="../../styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>Lab 1 - Christmas Trees</title>
  <style>
    .tree-container {
      line-height: 0.5;
      text-align: center;
    }
    .tree-table {
      margin: auto;
      border-collapse: collapse;
    }
    .tree-cell {
      padding: 20px;
      vertical-align: top;
    }
  </style>
</head>
<body>
  <header>
    <div class="nb-p-2 nb-p-md-1"></div>
    <nav class="nb-navbar" role="navigation" aria-label="Main navigation">
      <a href="/" class="nb-navbar-brand" aria-label="Go to homepage">David - Web & Software Engineer</a>
      <button class="nb-navbar-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="hamburger"></span>
      </button>
      <ul class="nb-navbar-nav" role="menubar">
        <li class="nb-navbar-item" role="none">
          <a href="/" class="nb-navbar-link" role="menuitem">Home</a>
        </li>
        <li class="nb-navbar-item" role="none">
          <a href="/HandsOn/handson.html" class="nb-navbar-link" role="menuitem">Hands On Activities</a>
        </li>
        <li class="nb-navbar-item" role="none">
          <a href="/Labs/labs.html" class="nb-navbar-link active" role="menuitem" aria-current="page">Labs</a>
        </li>
        <li class="nb-navbar-item" role="none">
          <a href="/Projects/projects.html" class="nb-navbar-link" role="menuitem">Projects</a>
        </li>
      </ul>
    </nav>
  </header>

  <main style="padding: 20px;">
    <?php
    // draw one section of tree
    function drawSection($start, $end) {
      for ($i=$start; $i<=$end; $i++) {
        for ($j=0; $j<$i; $j++) {
          echo "*";
        }
        echo "<br/>";
      }
    }

    // make the trunk
    function drawTrunk() {
      for ($row=0; $row<5; $row++) {
        for ($col=0; $col<5; $col++) {
          echo "*";
        }
        echo "<br/>";
      }
    }

    function makeTree() {
      drawSection(1, 5);
      drawSection(3, 9);
      drawSection(5, 14);
      drawTrunk();
    }

    // show trees in table
    function showTrees($numTrees, $bgColor, $txtColor, $tableWidth) {
      echo "<table class='tree-table' style='background-color:$bgColor;color:$txtColor;width:$tableWidth%;'>";
      echo "<tr>";
      
      for ($t=0; $t<$numTrees; $t++) {
        echo "<td class='tree-cell'>";
        echo "<div class='tree-container' style='background-color:$bgColor;color:$txtColor;'>";
        makeTree();
        echo "</div>";
        echo "</td>";
      }
      
      echo "</tr>";
      echo "</table>";
    }
    ?>

    <h2 style='text-align:center'>Part 1: one tree displayed.</h2>
    <?php showTrees(1, 'pink', 'red', 50); ?>
    <hr/>

    <h2 style='text-align:center'>Part 2: four trees displayed.</h2>
    <?php showTrees(4, 'cyan', 'red', 70); ?>
    <hr/>

    <h2 style='text-align:center'>Part 3: When you refresh the page, different number (from 1-8) of trees displayed.</h2>
    <?php 
      $numTrees = rand(1, 8);
      showTrees($numTrees, 'cyan', 'red', 90); 
    ?>
    <hr/>
  </main>

  <footer class="footer-links">
    <div class="footer-left">
      <a href="https://validator.w3.org/nu/?doc=https://dpanesiu.domains.ggc.edu/Labs/lab1/lab1.php" 
         class="validator-button" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Validate HTML">
        <i class="fa fa-check-circle" aria-hidden="true"></i> Valid HTML
      </a>
      <a href="https://jigsaw.w3.org/css-validator/validator?uri=https://dpanesiu.domains.ggc.edu/styles.css" 
         class="validator-button" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Validate CSS">
        <i class="fa fa-check-circle" aria-hidden="true"></i> Valid CSS
      </a>
    </div>
    <div class="footer-right">
      <a href="/Projects/project3/project3.html" 
         class="project-button" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Got a project in mind?">
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i> Got a project in mind?
      </a>
    </div>
  </footer>

  <script src="../../mobile-nav.js"></script>
</body>
</html>
