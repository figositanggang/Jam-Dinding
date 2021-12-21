const
jarumJam = document.querySelector(".jam-analog .jam"),
jarumMenit = document.querySelector(".jam-analog .menit"),
jarumDetik = document.querySelector(".jam-analog .detik"),
dateCont = document.querySelector(".jam-analog #date .date"),
monthCont = document.querySelector(".jam-analog #date .month"),
yearCont = document.querySelector(".jam-analog #date .year");

const listMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mer', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

function waktu() {
    let time = new Date(Date.now());

    let
    detik = time.getSeconds() * 6,
    menit = time.getMinutes() * 6,
    jam = time.getHours() * 30;

    menit += detik/60
    jam += menit/12

    jarumDetik.style.transform = `rotate(${detik}deg)`;
    jarumMenit.style.transform = `rotate(${menit}deg)`;
    jarumJam.style.transform = `rotate(${jam}deg)`;

    dateCont.textContent = time.getDate();
    monthCont.textContent = listMonth[time.getMonth()];
    yearCont.textContent = time.getFullYear()

    console.log(`Jam Deg: ${jarumJam.style.transform}`);
    // console.log(`Menit Deg: ${jarumMenit.style.transform}`);
    // console.log(`Detik Deg: ${jarumDetik.style.transform}`);

    // console.log(`Detik: ${detik}`);
    // console.log(`Menit: ${menit}`);
    // console.log(`Jam: ${jam}`);
}
setInterval(waktu, 1000);