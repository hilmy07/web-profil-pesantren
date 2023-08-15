import React from 'react'
import './Cardkegiatan.css'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import kegiatan1 from '../../assets/kegiatan1-kurban.jpg'
import kegiatan2 from '../../assets/kegiatan2-bukapuasasunnah.jpg'
import kegiatan3 from '../../assets/kegiatan3-harisantrinas.jpg'
import kegiatan4 from '../../assets/kegiatan4-halalbihalal.jpg'

const data = [
    {
      activity: kegiatan1,
      name: 'Perayaan hari Idul adha',
      description: 'Hari raya Idul Adha identik dengan penyembelihan hewan kurban dirayakan umat islam setiap tanggal 10 bulan Dzulhijah. Pada tahun 2022 masehi Idul adha diperingati pada hari Sabtu tanggal 9 Juli'
    },
    {
      activity: kegiatan2,
      name: 'Buka Puasa Tasua Bersama',
      description: 'Puasa Tasua merupakan ibadah puasa sunah yang dilakukan setiap tanggal 9 Muharram. Pada gambar tersebut dilakukan bertepatan dengan tanggal 7 Agustus 2022 Masehi'
    },
    {
      activity: kegiatan3,
      name: 'Hari Santri Nasional',
      description: 'Hari santri nasional dilakukan untuk mengenang dan menghormati jasa perjuangan ulama melalui tokoh islam. Pada gambar tersebut dilakukan bertepatan dengan tanggal 22 Oktober 2022 Masehi'
    },
    {
      activity: kegiatan4,
      name: 'Halal Bihalal',
      description: 'Kegiatan halal bihalal merupakan kegiatan yang berkembang dimasyarakat untuk menyambung tali silaturahmi serta saling bermaafan saat momen lebaran. Pada gambar tersebut dilakukan bertepatan dengan tanggal 11 Mei 2022 Masehi'
    }
  ]

const Cardkegiatan = () => {
  return (
    <section id='kegiatan'>
        <Swiper
        className="container activity__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
            {
                data.map(({activity, name, description}, index) => {
                    return (
                        <SwiperSlide key={index} className="activity">
                        <div className="client__activity">
                            <img src={activity}/>
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__description">{description}</small>
                    </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Cardkegiatan