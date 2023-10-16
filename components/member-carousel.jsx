import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MemberCards from './member-cards';


export default function MemberCarousel({ members }) {
  // Configure the settings for the carousel
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Render MemberCard components inside the carousel */}
      {members && members.map((member) => (
        <div key={member.id}>
          <MemberCards member={member} />
        </div>
      ))}
    </Slider>
  );
};
