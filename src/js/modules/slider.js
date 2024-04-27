import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slider = () => {
    if(document.querySelector(".swiper")) {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation],
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,

            navigation: {
                nextEl: '.swiper-button-next-unique',
                prevEl: '.swiper-button-prev-unique',
            },
            spaceBetween: 30

        });
    }

 }

 export default slider;