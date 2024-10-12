"use client"
import React, { useState } from 'react';

const items = [
  "Nasi goreng", "Hamster kombat", "Seblak", "Singa putih", "Bihun", "Kabel data vivan", "Rx king", "Jokowi", 
  "Si gemoy", "Si imut", "Ambatukam", "Ambatron", "super charging 65 wat", "Admin bokep", "Jakarta", 
  "Jawa banget njir", "Emrror", "Kenapa gambar ini tidak mendapatkan banyak penggemar seperti Ronaldo dan Messi", 
  "Skibidi toilet", "Gyatt", "Nasi campur", "Martabak khas surabaya", "Dejek", "Persija", "Makassar", "Indosiar", 
  "18+", "PornHUB", "Cantik", "Surya kretek", "Israel", "Pertamina", "Jawa barat", "Anies baswedan", "Prabowo", 
  "Gibran", "Macan merah", "Kanjut", "Raja iblis", "Ratu iblis", "Ripper", "Hai", "India", "Kecap bangau", 
  "King slot", "Mewing", "Sigma", "Batak", "Sulawesi", "Google chrome", "Facebook", "Instagram", "Babi jember", 
  "Nathan cu a on", "Ernando bakar sate", "4/64GB", "Nokia", "Keyboard samsung", "Gada", "Affilate tiktok", 
  "Casan tesla", "Starlink", "Bokep 4K", "Android", "Fomo", "Airdrop", 
  "Selamat kamu mendapatkan hadiah sebesar 1juta, dipotong pajak 1juta", "Raja cyrpto", "Singa putih", 
  "Nasi kuning", "Rendang Babi", "Iwak", "Holan bakri", "Scam", "Munyuk", "Informasi palsu", "Jawir nih boss", 
  "Banjarmasin slowmo", "No rispek", "Emyu", "Pergi kau suki", "Sunda kontol😂", 
  "Professor yakub pencinta bule", "Nguawor", "Nganggur", "Kitab kripto😂", "Diskotik bogor", "Berteknologi tinggi", 
  "Macan Putih", "Bebek Goreng", "Ayam Geprek", "Singa Putih", "Buku Gambar", "Buku Tulis", "Penggaris", 
  "Papan Tulis", "Gunting Kuku", "Harimau", "Macan Tutul", "Anime", "Macan Ompong", "Es Teh", "TEH JUS", 
  "Marimas Anggur", "Teh Gelas", "Jus Alpukat", "Puntung Rokok", "Ubur Ubur", "Remote TV", "Cacing Buncit", 
  "Monyet Mullet", "Knalpot Mio", "Mie Ayam", "Bakso", "Bakso Cuanki", "Sumpit Gacoan", "Standar Motor", 
  "Pala Mio", "Beat Karbu", "Jerapah", "Badak Hitam", "Lumba Lumba", "Laba Laba Sunda", "Ambatukam", 
  "Ambatron", "Kelly FF", "Kopi ABC", "Kapal Lawut", "Tunggu Kiris", "Keris Tumpul", "Kak Gem", "Uni Bakwan", 
  "Sprei Gratis", "Mejikom", "Kuali Goreng", "Kuah Soto", "Cilok Idaman", "Batagor", "Siomay", "Kue Pancong", 
  "Kipas Angin", "Topi Upacara", "Sepatu Adidas", "RAJA IBLIS", "Banaspati", "Air Cucian Beras", "Remote AC", 
  "Kosong", "Sosok Hitam", "Si Imut", "Chargeran", "Kabel Type C", "Nenek Gayung", "Vampire Ompong", 
  "Bajing Loncat", "Ular Sawah", "Ubi Cilembu", "Pencil 2B", "Korek Api", "Ukelele", "Pecel Lele", "Ondel Ondel", 
  "Kuda Poni", "Kuda Lumping", "Sound System", "Polisi Tidur", "Ban Dalem", "Sempak Bolong", "Kue Pancong", 
  "Seblak", "Seblak Ceker", "Sarimi Ayam Bawang", "Balmond", "Mesin Bubut", "Sate Biawak", "Katak Bhizer", 
  "Kolor Ijo", "Kucing", "Kecebong", "Ikan Mujaer", "Ayam Bakar", "Mie Gacoan", "Kipas Angin", "Panci Warteg", 
  "Jangrik Krispi", "Sikat Gigi", "Mesin Cuci", "Vas Bunga", "Kuntilanak Mewing", "Pocong Ngesot", "Sabun Colek", 
  "Pisau Dapur", "Mio Mirza", "Kaleng Sarden", "Kursi Goyang", "Masako Ayam", "Tutup Botol", "Undur Undur", 
  "Buaya Buntung", "Celana Levis", "Kuda Terbang", "Cicak", "Es Cendol", "Ikan Hiu", "Marimas Jeruk", "Ikan Lohan", 
  "Pohon Kelapa", "Sendal Swalow", "Tikus Got", "Singa Paddlepop", "Ayam Warna Warni", "Minyak Kayu Putih", 
  "Pulpen", "Fresh Care", "Martabak Manis", "Martabak Asin", "Casing HP", "Mangkok Mie Ayam", "Tahu Bulat", 
  "Garpu Siomay", "Lontong Sayur", "Es Kul Kul", "Ayam Rechesee", "Udang Saos Tiram", "Bakso Beranak", 
  "Stang Motor", "Belut Sawah", "Ular Tangga", "Gajah Duduk", "Pisang Goreng", "Spion Motor", "Bubur Ayam", 
  "Tabung Gas", "Bingkai Foto", "Laler", "Rengginang", "Keset Selamat Datang", "Kera Putih", "Sempol Ayam", 
  "Bintang Laut", "Sayur Asem", "Tempe Bacem", "Jepit Jemuran", "Ikan Sapu Sapu", "Royco Sapi", "Tahu Gejrot", 
  "Masako Sapi", "Royco Ayam", "Sayur Lodeh", "Jagung Bakar", "Telur Dadar", "Musang", "Kanebo", 
  "Sabun Cuci Steam", "Kadal Gurun", "Domba Garut", "Sapi Qurban", "Barbie", "Kelereng", "Kuda Catur", 
  "Kue Putu", "Ulat Bulu", "Pangsit", "Bakpau Isi Kacang", "Kecoa Dubia", "Naga Bearbrend", "Pesulap Merah", 
  "Toji Kerupuk", "Pohon Bijak", "Tisu Toilet", "Daun Pisang", "Batu Bata", "Cumi Cumi", "Ale Ale", "Telur Puyuh", 
  "Rujak Asem", "Ceker Babat", "Tuyul Wolfcut", "Handuk Hotel", "Sendal Jepit", "Rokok Fajar", "Ketupat", 
  "Nasi Kuning", "Nasi Uduk", "Kerak Telor", "Nasi Liwet", "Ember Bocor", "jas Hujan", "Bengbeng", 
  "Sapu Ijuk", "Es Tebu", "Makaroni Basah", "Es Campur", "Es Kelapa Muda", "Gayung", "Toilet Duduk", "Ular Piton", 
  "Pohon Beringin", "Jamur Krispi", "Cireng Isi", "Fiesta Nugget", "Cimol Bandung", "Semut Rangrang", "Tongsis", 
  "Kerambol", "Meja Billiard", "Kaos Kaki", "Supra Bapak", "Spion Motor", "Kelelawar", "Laba Laba", "Kecebong", 
  "Semut", "Topeng Monyet", "Buaya Darat", "Ikan Cupang", "Kaki Seribu", "Burung Emprit", "Singa asli Surabaya", 
  "Kulkas Polytron", "Ular kadut", "Pohon beringin", "Janda bolong", "Kominfo", "Tni Amerika"
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [randomItem, setRandomItem] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      const randomIndex = Math.floor(Math.random() * items.length);
      setRandomItem(items[randomIndex]);
      setShowResult(true);
    }
  };

  const handleCloseResult = () => {
    setShowResult(false);
  };

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <div className="mb-2">
          <span className='text-lg font-sans font-bold'>Cek Khodam</span><br />
          <div className='text-sm font-mono font-italic'>-- Made with NextJS by 
            <a href='https://github.com/Azyansah' className='text-teal-500 hover:text-indigo-200'> Azyansah</a></div>
        </div>
        <input
          type="Nama"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Masukkan nama anda"
          className="w-full rounded-lg px-4 py-2 text-sm shadow-2xl border-gray-600 text-gray-700"
        />
        <div className="pt-6 data-container">
          <button onClick={handleSubmit} className="btn">Check</button>
        </div>
      </div>
      {showResult && (
        <div className="result-popup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="result-content bg-black rounded-lg p-6 shadow-md flex flex-col items-center">
            <p className="text-center">Halo {searchTerm}, kamu berhasil menemukan khodammu!</p>
            <p className="text-center">Khodammu adalah {randomItem}</p>
            <button onClick={handleCloseResult} className="btn mt-4">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;