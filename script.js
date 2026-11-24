// DATA SISWA
const daftarSiswa = [
    { name: "Ahmad Jaenudin", major: "Akutansi", class: "1AK01", score: 65 },
    { name: "Bambang Yulistyo", major: "Ilmu Komputer", class: "1KB01", score: 80 },
    { name: "Cici Lestari", major: "Psikolog", class: "1PS01", score: 93 },
    { name: "Dedi Anggara", major: "Teknik Informatika", class: "1TI01", score: 78 },
    { name: "Eka Pratama", major: "Akutansi", class: "1AK01", score: 55 },
    { name: "Fina Garut", major: "Ilmu Komputer", class: "1KB01", score: 65 },
    { name: "Galang Rambu Anarki", major: "Teknik Informatika", class: "1TI01", score: 70 },
    { name: "Hana Fitriani", major: "Psikolog", class: "1PS01", score: 98 },
    { name: "Ikah Mulyani", major: "Ilmu Komputer", class: "1KB02", score: 90 },
    { name: "Joko Widodo", major: "ilmu Komputer", class: "1KB02", score: 100 }
];


// ELEMEN HTML
const siswaTableBody = document.getElementById("siswaTableBody");
const searchInput = document.getElementById("searchInput");
const averageScore = document.getElementById("averageScore");

// FUNCTION RENDER DATA
function renderSiswa(dataSiswa) {

    //Mengubah data menjadi baris HTML
    siswaTableBody.innerHTML = dataSiswa.map(function(siswa, index) {
        let scoreClass = "";
        if (siswa.score >= 85) {
            scoreClass = "score-high";
        } else if (siswa.score >= 75) {
            scoreClass = "score-medium";
        } else {
            scoreClass = "score-low";
        }
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${siswa.name}</td>
                <td>
                    <span class="major-badge">
                        ${siswa.major}
                    </span>
                </td>

                <td>
                    <span class="class-badge">
                        ${siswa.class}
                    </span>
                </td>

                <td>
                    <span class="score-badge ${scoreClass}">
                        ${siswa.score}
                    </span>
                </td>
            </tr>
        `;

    }).join("");

    //Menghitung total nilai
    const totalNilai = dataSiswa.reduce(function(total, siswa) {
        return total + siswa.score;
    }, 0);

    //Menghitung rata-rata
    const rataRata = dataSiswa.length > 0
        ? (totalNilai / dataSiswa.length).toFixed(1)
        : "0.0";

    //Menampilkan rata-rata
    averageScore.textContent = rataRata;

}
//SEARCH BY NAME
searchInput.addEventListener("input", function() {
    const keyword = searchInput.value.toLowerCase();

    //Menyaring nama siswa
    const hasilPencarian = daftarSiswa.filter(function(siswa) {

        return siswa.name.toLowerCase().includes(keyword);

    });

    //Render hasil pencarian
    renderSiswa(hasilPencarian);

});

//MEANAMPILKAN DATA MAHASISWA
renderSiswa(daftarSiswa);