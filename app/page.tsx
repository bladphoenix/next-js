import Image from "next/image";
import oke from "@/public/logo.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <body className="body-loaded">
        <header className="navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div className="header_top">
                <div className="col-md-2">
                  <div className="logo_img">
                    <a href="index.html">
                      <Image
                        src={oke}
                        alt="Logo VEGASGG"
                        sizes="100vw"
                        style={{
                          width: '300',
                          height: '50',
                        }}
                        priority
                      ></Image>
                      {/* <img src="logo.webp" width="300" height="50" alt="vegas4d"></img> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="home" className="top_banner_bg secondary-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="top_banner">
                </div>
                <div className="col-md-6">
                  <div className="present">
                    <h1>Daftar dan Login Lebih Mudah! Bermain Bersama <b>VEGAS4D</b></h1>
                    <p>Langsung <span> Daftar</span> dan <b> Login</b> klik dibawah.</p>

                    <div className="section_btn">
                      <a href="https://besturl.net/vegas4d"
                        rel="nofollow" title="login" target="_blank"> <button className="btn btn-default"
                          type="submit">L O G I N</button> </a>
                      <span><a href="https://besturl.net/vegas4d"
                        rel="nofollow" title="daftar" target="_blank"> <button className="btn btn-default" type="submit">DAFTAR</button> </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="present_img">
                    <img src="slide.webp" width="492" height="500" alt="vegas4d"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="price_table_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section_heading section_heading_2">
                  <h2>vegas4d</h2>
                  <p>Gabung Sekarang! Daftarkan diri Anda di vegas4d dan Jadilah Pemenang!</p>
                  <div className="col-md-6">
                    <div className="table-1">
                      <div className="discount">
                        <p> AMAN 100% </p>
                      </div>
                      <h3> Min. DEPOSIT</h3>
                      <div className="price_month_m">
                        <span className="round">
                          <h3> Rp 10.000 </h3>
                        </span>
                      </div>
                      <ul>
                        <li> Trusted 100% Aman </li>
                        <li> Proses DEPO/WD Cepat </li>
                        <li> CS <b>24 Jam Nonstop</b></li>
                      </ul>
                      <div className="section_sub_btn">
                        <a href="https://besturl.net/vegas4d"
                          rel="nofollow" className="btn btn-default" target="_blank">DAFTAR SEKARANG</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="table-1">
                      <div className="discount">
                        <p> AMAN 100% </p>
                      </div>
                      <h3> Min. WITHDRAW</h3>
                      <div className="price_month_m">
                        <span className="round">
                          <h3> Rp 25.000</h3>
                        </span>
                      </div>
                      <ul>
                        <li> Bonus Melimpah</li>
                        <li> Tersedia Permainan P2P</li>
                        <li> Menang Berapapun Dibayar</li>
                      </ul>
                      <div className="section_sub_btn">
                        <a href="https://besturl.net/vegas4d"
                          rel="nofollow" className="btn btn-default" target="_blank">DAFTAR SEKARANG</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="third-bg">
          <div className="row"></div>
          <div className="footer_bottom fourth-bg">
            <p>2024 &copy; Copyright. All rights Reserved. 18+</p>
          </div>
        </footer>
      </body>
    </main>
  );
}
