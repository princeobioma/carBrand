import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import img1 from "../src/img/image 1.png";
import img2 from "../src/img/image 1.png";
import img3 from "../src/img/image 991.png";
import img4 from "../src/img/Social Media (1).jpg";
import img5 from "../src/img/Social Media (2).jpg";
import img6 from "../src/img/Social Media (3).jpg";
import img7 from "../src/img/Social Media.jpg";
import img8 from "../src/img/image 985.png";
import img9 from "../src/img/image 986.png";
import img10 from "../src/img/image 988.png";
import img11 from "../src/img/image 989.png";

function App() {
  const [display, setDisplay] = useState("corolla");

  const handleclick = (displaytype) => {
    setDisplay(displaytype);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="section1">
        <div className="part1">
          <p>
            <b>We Steal Cars from Anybody that doesnt want to have sense</b>
          </p>
          <p className="bowl">
            We sell chip and affordable cars, from any where around the world
            and at a cheaper rate. We deliver worldwide
          </p>
          <div className="btn">
            <button>Choose Cars</button>
            <button className="btn0">Steal Cars</button>
          </div>
        </div>

        <div className="part2">
          <img src={img1} />
        </div>
      </div>
      <div className="second-head">
        <h1 className="header0">Mengapa membeli mobil di BuyCar?</h1>
        <div className="box1">
          <h2>
            <i class="bx bxs-discount">
              <br></br>
              <p>
                Berbagai pilihan mobil berkualitas
                <br></br> dengan harga terjangkau
              </p>
            </i>
          </h2>
        </div>
        <div className="box2">
          <h2>
            <i class="bx bxl-discourse">
              <p>
                Bantuan ahli dalam memilih mobil
                <br></br>
                yang sesuai dengan kebutuhan dan budget
              </p>
            </i>
          </h2>
        </div>
        <div className="box3">
          <h2>
            <i class="bx bxl-discord-alt">
              <p>
                Membeli mobil mudah,
                <br></br>
                menyenangkan dan memuaskan
              </p>
            </i>
          </h2>
        </div>
      </div>
      <div className="main">
        <div className="mount">
          <h3>Mobil terbaru</h3>
          <p className="nepa">
            Lihat Koleksi Mobil<i class="bx bx-chevron-right"></i>
          </p>
        </div>
      </div>
      <div className="pick">
        <h3
          onClick={() => handleclick("corolla")}
          className={display === "corolla" ? "btn3" : ""}
        >
          Toyota Corolla Cross Hybrid GR Sport
        </h3>
        <h3
          onClick={() => handleclick("grand")}
          className={display === "grand" ? "btn3" : ""}
        >
          Suzuki Grand Vitara
        </h3>
        <h3
          onClick={() => handleclick("suzuki")}
          className={display === "suzuki" ? "btn3" : ""}
        >
          Suzuki S-Presso
        </h3>
        <h3
          onClick={() => handleclick("wrx")}
          className={display === "wrx" ? "btn3" : ""}
        >
          Subaru WRX
        </h3>
        <h3
          onClick={() => handleclick("chery")}
          className={display === "chery" ? "btn3" : ""}
        >
          Chery Omoda 5
        </h3>
        <div>
          {display === "corolla" && <img src={img2} />}
          {display === "grand" && <img src={img8} />}
          {display === "suzuki" && <img src={img9} />}
          {display === "wrx" && <img src={img10} />}
          {display === "chery" && <img src={img11} />}
        </div>
      </div>

      <div className="next">
        <h2 className="fat">Bagaimana kata pelanggan?</h2>
        <div className="flex-container">
          <div className="strick">
            <div className="pat">
              <h1>
                Saya sangat puas dengan pelayanan BuyCar. Tim ahli mereka
                membantu saya memilih mobil yang sesuai dengan kebutuhan dan
                budget saya. Mobil yang saya beli juga berkualitas. Terima kasih
                BuyCar!
              </h1>
              <p>Wulan Sari</p>
            </div>
            <div className="pat1">
              <h1>
                Saya tidak pernah berpikir membeli mobil secara online
                sebelumnya, tapi BuyCar berhasil membuktikan bahwa pengalaman
                membeli mobil secara online bisa sangat mudah dan menyenangkan.
                Saya sangat senang dengan mobil yang saya beli dan pelayanan
                yang diberikan oleh tim BuyCar.
              </h1>
              <p>Agus Santoso</p>
            </div>
          </div>
          <div className="tuff">
            <div className="pat2">
              <h1>
                Saya sangat senang dengan mobil yang saya beli dari BuyCar.
                Mobil tersebut dalam kondisi yang sangat baik dan harga yang
                sangat terjangkau. Saya pasti akan merekomendasikan BuyCar
                kepada teman-teman saya.
              </h1>
              <p>Budi Cahyono</p>
            </div>
            <div className="pat3">
              <h1>
                BuyCar memberikan pelayanan yang luar biasa. Mereka sangat
                responsif dan membantu saya dalam setiap tahap pembelian. Saya
                merasa sangat aman dan nyaman bertransaksi dengan mereka.
              </h1>
              <p>Sri Hartini</p>
            </div>
          </div>
          <div className="tips">
            <div className="pat4">
              <h1>
                Saya membeli mobil dari BuyCar dan saya sangat senang dengan
                pengalaman pembelian saya. Mobil yang saya beli dalam kondisi
                yang sangat baik dan harga yang sangat terjangkau. Terima kasih
                BuyCar!
              </h1>
              <p>Iwan Pranata</p>
            </div>
            <div className="pat5">
              <h1>
                Saya sangat senang dengan pengalaman membeli mobil saya dari
                BuyCar. Mereka memberikan pilihan mobil yang berkualitas dan
                terjangkau, serta pelayanan yang sangat baik. Saya sangat
                merekomendasikan BuyCar untuk semua orang yang ingin membeli
                mobil.
              </h1>
              <p>Ahmad Faris</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space">
        <p>
          Beli mobil impianmu sekarang di BuyCar dan nikmati pengalaman membeli
          <br />
          mobil yang mudah dan menyenangkan! Tunggu apa lagi?
        </p>
        <button>Hubungi Kami Sekarang</button>
      </div>
      <div className="down">
        <div className="one">
          <h1>BuyCar</h1>
          <p>
            BuyCar siap membantu pelanggan untuk menemukan mobil impian mereka
            <br />
            dengan mudah dan menyediakan berbagai solusi pembayaran yang
            <br />
            fleksibel dan sesuai kebutuhan. BuyCar berkomitmen untuk memberikan
            <br />
            pengalaman belanja mobil yang terbaik dan memuaskan bagi setiap
            <br />
            pelanggan.
          </p>
          <i class="bx bx-current-location">
            <p>
              Jl. Letjen S. Parman No.Kav 21, RT.12/RW.1, Tj. Duren Sel., Kec.
              <br />
              Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota
              <br />
              Jakarta 1147
            </p>
          </i>
          <div className="five">
            <i class="bx bx-message-square-dots"></i>
            <p>cs@buycar.co.id</p>
          </div>
        </div>
        <div className="two">
          <h3>Perusahaan</h3>
          <p>Tentang Kami</p>
          <p>Kebijakan Garansi</p>
          <p>Persyaratan Layanan</p>
        </div>
        <div className="three">
          <h3>Pengetahuan</h3>
          <p>Review Mobil</p>
          <p>Berita Mobil</p>
        </div>
        <div className="four">
          <h3>Pembelian</h3>
          <p>Pembayaran Cash</p>
          <p>Kredit Syariah</p>
        </div>
      </div>
      <hr />
      <div className="farm">
        <p>© 2023 PT Beli Mobil Duit Sendiri</p>
        <div className="photos">
          <div className="eva">
            <img src={img4} />
          </div>
          <div className="evian">
            <img src={img5} />
          </div>
          <div className="evil">
            <img src={img6} />
          </div>
          <div className="boy">
            <img src={img7} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
