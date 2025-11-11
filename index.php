<?php
$file = "status.txt";

if (isset($_GET['set'])) {
    file_put_contents($file, $_GET['set']);
    echo "Alarm set to " . $_GET['set'];
} else {
    if (!file_exists($file)) file_put_contents($file, "off");
    echo file_get_contents($file);
}
?>
