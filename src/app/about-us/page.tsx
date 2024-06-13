import styles from '@/styles/about.module.scss'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className={styles['about-us']}>
      <div className={styles['about-us_banner']}>
        <h1 className={styles['main-title']}>From Dreamy Lip <br /> Hues to the ultimate <br /> Brow Saviours</h1>
      </div>
      <div className={styles['main-content']}>
        <div className='inner'>
          <div className={styles['item']}>
            <div className={styles['cnt']}>
              <h2 className={styles['title-arct']}>Ut varius posuere elit, sagittis malesuada nunc suscipit sit amet.</h2>
              <div className='desc'>
                <p>Nulla id vulputate ligula, a fringilla ligula. Sed vestibulum mollis erat, quis varius nisi. Donec eget porta elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed condimentum sem mi, semper cursus metus laoreet eget. Mauris ut quam lectus. Nulla in molestie sem. Suspendisse potenti. Quisque nec ipsum sed tellus ultricies congue in vitae felis. Ut et ante sed lectus suscipit sagittis eget at turpis. Mauris dignissim, tellus non condimentum laoreet, leo orci bibendum sapien, sed pretium eros mi at sapien.</p>
              </div>
            </div>
            <div className='thumb'>
              <Image src={'/assets/about-us/item-1.jpg'} alt='Ut varius posuere elit, sagittis malesuada nunc suscipit sit amet.' width={380} height={414} />
            </div>
          </div>
          <div className={`${styles['item']} ${styles['revert']}`}>
            <div className={styles['cnt']}>
              <h2 className={styles['title-arct']}>Ut varius posuere elit, sagittis malesuada nunc suscipit sit amet.</h2>
              <div className='desc'>
                <p>Nulla id vulputate ligula, a fringilla ligula. Sed vestibulum mollis erat, quis varius nisi. Donec eget porta elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed condimentum sem mi, semper cursus metus laoreet eget. Mauris ut quam lectus. Nulla in molestie sem. Suspendisse potenti. Quisque nec ipsum sed tellus ultricies congue in vitae felis. Ut et ante sed lectus suscipit sagittis eget at turpis. Mauris dignissim, tellus non condimentum laoreet, leo orci bibendum sapien, sed pretium eros mi at sapien.</p>
              </div>
            </div>
            <div className='thumb'>
              <Image src={'/assets/about-us/item-2.jpg'} alt='Ut varius posuere elit, sagittis malesuada nunc suscipit sit amet.' width={380} height={414} />
            </div>
          </div>
          <div className={styles['desc']}>
            <p>Etiam ligula nisi, feugiat tempus magna id, ultrices efficitur sem. Nullam lectus turpis, maximus non pretium nec, rutrum at dui. Aliquam gravida ex a risus dapibus molestie.</p>
          </div>
          <div className={styles['about-us_widget']}>
            <div className={styles['widget_thumb']}>
              <div className={styles['widget_thumb_item']}>
                <Image src={'/assets/about-us/item-3.jpg'} alt='widget' width={380} height={414} />
              </div>
              <div className={styles['widget_thumb_item']}>
                <Image src={'/assets/about-us/item-4.jpg'} alt='widget' width={380} height={414} />
              </div>
            </div>
            <ul className={styles['widget_content']}>
              <li>
                Maecenas mattis fermentum odio vitae pulvinar. Phasellus ultrices ex non turpis sollicitudin, eu malesuada mi ultrices. In lacus urna, elementum eu convallis vel, fermentum a ligula. Pellentesque ut orci nec turpis varius ultricies id ut neque. Praesent sodales neque sit amet mauris vehicula, id laoreet dui ultricies. Donec quis velit sit amet dui fringilla semper. Duis porttitor egestas nisi sit amet tincidunt. Donec auctor quam quis diam euismod, et consectetur turpis varius. Suspendisse sit amet malesuada nibh.
              </li>
              <li>Maecenas mattis fermentum odio vitae pulvinar. Phasellus ultrices ex non turpis sollicitudin, eu malesuada mi ultrices. In lacus urna, elementum eu convallis vel, fermentum a ligula. Pellentesque ut orci nec turpis varius ultricies id ut neque. Praesent sodales neque sit amet mauris vehicula, id laoreet dui ultricies. Donec quis velit sit amet dui fringilla semper. Duis porttitor egestas nisi sit amet tincidunt. Donec auctor quam quis diam euismod, et consectetur turpis varius. Suspendisse sit amet malesuada nibh.</li>
            </ul>
            <p className={styles['txt']}>Sed rutrum nibh placerat magna facilisis, a efficitur massa tempor. Proin ut ultricies eros, non pulvinar tellus. Donec gravida id erat at pulvinar. Curabitur suscipit aliquet egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi massa, volutpat vitae eros nec, pharetra tempor libero. Nullam nibh orci, tincidunt non diam ut, dictum lacinia lorem. Pellentesque mollis sollicitudin nisl, non interdum lacus vestibulum at. Pellentesque congue nibh non neque vestibulum, non volutpat neque hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <p className={styles['txt']}>Proin porttitor porta sollicitudin. Maecenas lobortis sit amet nulla id commodo. Donec ut efficitur arcu. Phasellus tempor, felis a tempor suscipit, libero velit dignissim tortor, id luctus odio massa id urna. Sed malesuada varius dui vel placerat. Sed sit amet vestibulum ante, et aliquet dui. Nunc eget hendrerit enim.</p>
            <p className={styles['txt']}>Sed condimentum fringilla diam, bibendum porttitor ligula interdum quis. Vestibulum eu accumsan tellus. Morbi nisi magna, condimentum quis semper et, cursus a augue. Nam dapibus enim tortor. Etiam venenatis felis eget tincidunt pretium. Morbi gravida tristique vehicula. Mauris sit amet iaculis neque, nec laoreet elit. Cras venenatis egestas turpis vitae volutpat. Vivamus aliquet euismod nisl, vel feugiat eros sollicitudin vestibulum. Praesent posuere leo odio, venenatis rutrum ex tincidunt sed. In sodales elit nec augue maximus, vitae lobortis mi vestibulum. Morbi egestas condimentum scelerisque.</p>
          </div>
        </div>
      </div>
    </div>
  )
}