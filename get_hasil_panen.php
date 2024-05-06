<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "hasil_panen");

// Query untuk mengambil data dari tabel hasil_panen
$query = "SELECT * FROM hasil_panen";
$result = mysqli_query($koneksi, $query);

// Jika query berhasil dieksekusi
if($result) {
    // Inisialisasi array untuk menyimpan data
    $data = array();
    
    // Memasukkan data ke dalam array
    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    // Mengubah array menjadi format JSON
    echo json_encode($data);
} else {
    // Jika query gagal dieksekusi
    echo json_encode(array('message' => 'Gagal mengambil data'));
}


mysqli_close($koneksi);
?>
