import React from 'react';
import Hero from './Hero'; 
import Cardberita from './Cardberita';
import berita1 from "./../assets/berita1-pembukaanmajelisblnanahadbrsmHbbYahya.jpg";
import berita2 from "./../assets/berita2-haul.jpg";
import berita3 from "./../assets/berita3-takbirkelilingidadha.jpg";
import Cardkegiatan from './kegiatan/Cardkegiatan';
import Cardcontact from './contact/Cardcontact';
import Footer from './footer/Cardfooter';

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className='row' justify-content-center>
          <div className='col-12 text-center my-5'>
            <h1>Berita</h1>
          </div>
          <div className='col-md-4'>
            <Cardberita image={berita1} 
              title="Pembukaan Majelis Bulanan Ahad Pon"
              description="Different description for this card."/>
          </div>
          <div className='col-md-4'>
            <Cardberita image={berita2} 
              title="Haul Habib Muhammad Bin Yusuf"
              description="Different description for this card."/>
          </div>
          <div className='col-md-4'>
            <Cardberita image={berita3} 
              title="Takbir Keliling Malam Idul Adha"
              description="Different description for this card."/>
          </div>
        </div>

        <div className='col-12 text-center my-5'>
          <h1>kegiatan</h1>
        </div>
        <Cardkegiatan />

        <div className='col-12 text-center my-5'>
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>

        <Cardcontact />
        <Footer />
    </div>
  );
}

export default Maincontent;
