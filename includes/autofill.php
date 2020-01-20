<?php 
  $query = "SELECT `lastdone` FROM `requiredone` WHERE `filename` = 'autofill'";
  $lastdone = mysqli_fetch_assoc(mysqli_query($db, $query))['lastdone'] or die('error: '. mysqli_error($db). ' with query' . $query);
    if ($lastdone<date('Y-m-d')) {
      echo 'hello im here';
      $query = "SELECT `datum` FROM `openslots` ORDER BY id DESC LIMIT 0, 1";
      $lastdate = mysqli_fetch_assoc(mysqli_query($db, $query))['datum']; //or die('error: '. mysqli_error($db). ' with query' . $query);
      if (NULL == $lastdate) {
        $lastdate= date('Y-m-d', mktime(0,0,0,0,0,0));
      }   
      $datums = array();
        $time = date('Y-m-d',strtotime("+2 months"));
        $date = date('Y-m-d');
        for ($i= 0; $date <= date('Y-m-d',strtotime("+2 months, -1 day")); $i ++ ) { 
          $date = date('Y-m-d',strtotime("+$i days"));

          // Time
          if ($lastdate < $date ) {
            $last = date('H:i:s', mktime(9,0,0 ));
            for ($ii=10; $ii <= 660 ; $ii += 10) { 
                $tijd = date('H:i:s', mktime(9,0+$ii, 0));
                $query = "INSERT INTO openslots (starttijd, eindtijd, datum) VALUES ('$last', '$tijd', '$date')";
                mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
                $last = $tijd;
            }
          }   
          array_push($datums, $date);
        }
        $date = date('Y-m-d');
        echo $date;
        $query = "DELETE FROM `openslots` WHERE `datum` < '$date'";
        mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
        $query = "UPDATE `requiredone` SET `lastdone`= '$date' WHERE `filename`='autofill'";
        mysqli_query($db, $query) or die('error: '. mysqli_error($db). ' with query' . $query);
        
    }   
?>
