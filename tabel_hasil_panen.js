$(document).ready(function() {
  $.ajax({
      url: 'get_hasil_panen.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          var html = '';
          html += '<table border="1">';
          html += '<tr><th>ID</th><th>Nama Tanaman</th><th>Berat</th><th>Tanggal</th><th>Aksi</th></tr>';
          for (var i = 0; i < data.length; i++) {
              html += '<tr>';
              html += '<td>'+data[i].id+'</td>';
              html += '<td>'+data[i].nama_tanaman+'</td>';
              html += '<td>'+data[i].berat+'</td>';
              html += '<td>'+data[i].tanggal+'</td>';
              html += '<td><button onclick="hapusData('+data[i].id+')">Hapus</button></td>';
              html += '</tr>';
          }
          html += '</table>';
          $("#tabel_hasil_panen").html(html);
      }
  });
});

function hapusData(id) {
  $.ajax({
      url: 'hapus_hasil_panen.php',
      type: 'GET',
      data: { id: id },
      success: function(data) {
          location.reload();
      }
  });
}