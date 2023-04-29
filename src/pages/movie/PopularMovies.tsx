import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export const PopularMovies = () => {
    const Movies = [
        {
            name: "Globe: The Tempset",
            genre: "სპექტაკლი",
            date: "02.05.2023",
            description: "",
            roles: "როჯერ ალამი, ჯესი ბალკი, ჯოშუა ჯეიმსი, კოლინ მორგანი",
            img: "https://static.tkt.ge/img/212d0040-4e46-4b77-943f-3557405264d2.jpeg"
        },
        {
            name: "პალადიო",
            img: "https://static.tkt.ge/img/7c3c1554-1704-495f-b539-dcf450ef5417.jpeg"
        },
        {
            name: "ვატიკანის ეგზორცისტი",
            img: "https://static.tkt.ge/img/fa44a27f-ba48-49ce-aed0-084d383fa116.jpeg"
        },
        {
            name: "მკვლელზე მონადირე",
            img: "https://static.tkt.ge/img/502c347c-0322-4938-84f0-45f55ff7d23e.jpeg"
        },
        {
            name: "არგონავტების თავგადასავალი",
            img: "https://static.tkt.ge/img/c5861fd8-5b54-4a7a-9bd8-03298cd50b65.jpeg",
        },
        {
            name: "ბოროტი მვკდრების აღზევება",
            img: "https://static.tkt.ge/img/67c98195-e9b1-4512-9331-b0b6236ba617.jpeg"
        },
        {
            name: "მშვენიერი ელენე",
            img: "https://static.tkt.ge/img/d1b950a5-dc87-4e16-85b6-a2c40a01c0fb.jpeg"
        },
        {
            name: "სუზუმე",
            img: 'https://static.tkt.ge/img/ad219d0d-7d38-447d-a8da-69cceeb4e8fe.jpeg'
        },
        {
            name: "რედფილდი",
            img: "https://static.tkt.ge/img/db9afb32-e561-49f9-a05f-171e2297c428.jpeg",
        },
        {
            name: "ჩემი მშვენიერი უბედურება",
            img: "https://static.tkt.ge/img/2ed7f97f-891d-43e8-95a4-71e1a383699d.jpeg",
        },
        {
            name: "ჯონ უიკი 4",
            img: 'https://static.tkt.ge/img/a260c213-ed2b-44f5-9033-ccd4b7b03688.jpeg'
        },
        {
            name: "როკ დოგი 3",
            img: "https://static.tkt.ge/img/1e6a341f-24c8-4fd3-8f21-ad4dd74aad5e.jpeg"
        },
        {
            name: "ავატარი : წყლის გზა",
            img: "https://static.tkt.ge/img/05ed090e-64d6-4eb1-8e28-0b7cfc5d4afd.jpeg"
        },
        {
            name: "სუპერ მარიო",
            img: "https://static.tkt.ge/img/8ec08a56-169d-473c-9b6a-ccb44c594e8d.jpeg"
        }
    ]
    return (
        <>

            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                autoplay={{
                    delay: 1500,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Movies.map((each, index) => {
                    return (
                        <>
                            <SwiperSlide
                                key={index}
                                style={{ "backgroundImage": `url('${each?.img}')` }}
                            >.
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    )
}
