const form = document.getElementById("dataForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Cegah form dari reload halaman

    const field1 = document.getElementById("nama").value;
    const field2 = document.getElementById("email").value;
    const field3 = document.getElementById("telp").value;
    const field4 = document.getElementById("alamat").value;
    const field5 = document.getElementById("kota").value;

    const newTab = window.open();
    newTab.document.write(`
        <html>
            <head>
                <title>Data yang Dikirim</title>
            </head>
            <body>
                <h2>Data yang Dikirim</h2>
                <p><strong>Nama Lengkap:</strong> ${nama}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>No Telepon:</strong> ${telp}</p>
                <p><strong>Alamat:</strong> ${alamat}</p>
                <p><strong>Asal Kota:</strong> ${kota}</p>
            </body>
        </html>
    `);
});
