<?php
include 'koneksi.php';
mysqli_query($koneksi, "DELETE FROM hasil_panen WHERE id = '".$_GET['id']."'");
?>