"use client"
import { useState } from 'react'
import styles from '../styles/detail.module.scss'
import Image from 'next/image'
import { RatingC } from './rating'

const Review = () => {
  return (
    <div className={styles.review}>
      <ul>
        <li>
          <div className={styles['image-holder']}>
            <Image src={'/assets/review-image1.jpg'} width={150} height={150} alt='review' />
          </div>
          <div className={styles['review_content']}>
            <RatingC value={3.5} />
            <div className='review_header'>
              <span className={styles.name}>Tom Johnson</span>
              <span>– 07/05/2022</span>
            </div>
            <p className={styles['txt']}>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis</p>
          </div>
        </li>
        <li>
          <div className={styles['image-holder']}>
            <Image src={'/assets/review-image2.jpg'} width={150} height={150} alt='review' />
          </div>
          <div className={styles['review_content']}>
            <RatingC value={4.3} />
            <div className='review_header'>
              <span className={styles.name}>Jenny Willis</span>
              <span>– 07/05/2022</span>
            </div>
            <p className={styles['txt']}>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

const Details = () => {
  return (
    <div>
      <h3>Product Description</h3>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
      <ul>
        <li>Donec nec justo eget felis facilisis fermentum.</li>
        <li>Suspendisse urna viverra non, semper suscipit pede.</li>
        <li> Aliquam porttitor mauris sit amet orci.</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    </div>
  )
}

const Use = () => {
  return (
    <div>
      <h3>Best ways to use</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

const Shipping = () => {
  return (
    <div>
      <h3>Returns Policy</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
      <h3>Shipping</h3>
      <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus. Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
    </div>
  )
}

const renderSwitch = (index: number) => {
  switch (index) {
    case 0:
      return <Details />
    case 1:
      return <Use />
    case 2:
      return <Shipping />
    case 3:
      return <Review />
    default:
      return <Details />
  }
}
export const TabDetail = () => {
  const tabData = ["Details", "How to use", "Shipping & Return", "Reviews"]
  const [active, setActive] = useState(0)
  const activetabItem = (index: number) => {
    setActive(index)
  }

  return (
    <div className="tab-detail">
      <ul className={styles['tab-list']}>
        {tabData.map((tabItem, index) => (
          <li key={index} onClick={() => activetabItem(index)} className={active === index ? styles.active : ''}>{tabItem}</li>
        ))}
      </ul>
      <div className={styles['tab-detail_content']}>
        {renderSwitch(active)}
      </div>
    </div>
  )
}