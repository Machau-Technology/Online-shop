import Image from 'next/image'
import styles from './page.module.css'
import Slide1 from '@/components/slides/slide1/Slide1';
import Slide2 from '@/components/slides/slide2/Slide2';
import Slide3 from '@/components/slides/slide3/Slide3';
import Carousel from '@/components/carousel/Carousel';
import ThreeDView from '@/components/threeDView/ThreeDView';
import Find from '@/components/find/Find';
import Rechargeable from '@/components/rechargeable/Rechargeable';
import Benefits from '@/components/benefits/Benefits';
import Reviews from '@/components/reviews/Reviews';
import Lost from '@/components/lost/Lost';

export default function Home() {

  const items = [
    { component: <Slide1 /> },
    { component: <Slide2 /> },
    // { component: <Slide3 /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Carousel items={items} />
      </div>
      <ThreeDView />
      <Find />
      <Rechargeable />
      <Lost />
      <Benefits />
      <Reviews />
    </div>
  )
}
