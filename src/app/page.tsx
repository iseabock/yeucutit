'use client'; 

import React, { useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.css";

import Image from "next/image";

export default function Home() {

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((el: Element) => {
        const speed = 0.5; // Adjust the speed to your liking
        (el as HTMLElement).style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image src="/images/YeucutitLogo.webp" alt="Yeu" width={400} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </header>
      <div className={styles.container}>
        <div className={styles.parallax} />
        <div className={`${styles.content}`}>
          <div className={`${styles.contentContainer}`}>
            <h1>Welcome </h1>
            <div className={`${styles.intro}`}>
              <p className={styles.topLeft}>Highly skilled and experienced hair stylist with over 20 years in the barbershop and hair salon industry.  Specializing in men&apos;s and women&apos;s haircuts, she has dedicated her career to creating stylish and contemporary looks. Known for her attention to detail and ability to craft tailored styles that suit each client&apos;s personality and lifestyle, Yeu has built a loyal clientele who appreciate her expertise and creative flair. Whether it&apos;s a classic cut, a modern style, or a complete transformation, Yeu&apos;s clients always leave her chair looking and feeling their best. </p>
              {/* <p className={styles.topLeft}>Yeu is a highly skilled and experienced hair stylist with over 20 years in the industry. Specializing in men&apos;s haircuts, she has dedicated her career to creating stylish and contemporary looks. Known for her meticulous attention to detail and ability to craft tailored styles that suit each client&apos;s personality and lifestyle, Yeu has built a loyal clientele who appreciate her expertise and creative flair. Her commitment to excellence and customer satisfaction has made her a sought-after stylist in the community.</p>
              <p className={styles.topright}>Yeu stays ahead of the latest trends and techniques through continuous education and training. Whether it&apos;s a classic cut, a modern style, or a complete transformation, Yeu&apos;s clients always leave her chair looking and feeling their best. Her warm personality and professional approach make every visit a comfortable and enjoyable experience. Outside the salon, Yeu enjoys exploring new trends in fashion and grooming, ensuring she brings fresh ideas and inspiration to her work.</p>*/}
              <p className={styles.bottom}>The vibe in Yeu&apos;s shop is welcoming and lively, with good music playing to keep the atmosphere upbeat. Sports fans will appreciate the games playing on the TV, and when no sports are on, popular movies are shown to keep clients entertained. This creates a relaxed and enjoyable environment where everyone feels at ease while getting their perfect haircut.</p>
            </div>
            <div className={styles.bookAppointment}>
              <Link target="_blank" href={'https://book.squareup.com/appointments/jk9jhgdneixhj4/location/LA3NQCAENZFYS/services'}>Book Now</Link>
            </div>
          </div>
        </div>
        <div className={styles.parallax} />
        <div className={`${styles.content}`}>
          <div className={styles.contentContainer}>
            <h1>Services Offered</h1>
            <div className={styles.services}>
              <div className={styles.servicesContainer}>
                <div className={styles.left}>
                  <ul>
                    <li className={styles.serviceTitle}>Haircuts</li>
                    <li>Skin/bald fades</li>
                    {/* <li>High fade</li>
                    <li>Mid fade</li>
                    <li>Low fade</li> */}
                    {/* <li>Comb over</li> */}
                    <li>Traditional haircuts</li>
                    <li>Modern and trendy styles</li>
                    <li>Fade and taper cuts</li>
                    {/* <li>Buzz cuts</li> */}
                    <li>Shear, texture cuts</li>
                    <li>Curly, wavy hair</li>
                    <li>Men, women and children cuts</li>
                  </ul>
                </div>
                <div className={styles.right}>
                  <ul>
                    <li className={styles.serviceTitle}>Beards</li>
                    <li>Beard trims and shaping</li>
                    <li>Mustache trims</li>
                  </ul>
                  <ul>
                    <li className={styles.serviceTitle}>Extras</li>
                    <li>Hair styling for special occasions (e.g., weddings, events)</li>
                    {/* <li>Hair styling for special occasions (e.g., weddings, events)</li>
                    <li>Blow drying and styling</li>
                    <li>Application of hair products (gels, pomades, waxes)</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.bookAppointment}>
              <Link target="_blank" href={'https://book.squareup.com/appointments/jk9jhgdneixhj4/location/LA3NQCAENZFYS/services'}>Book Now</Link>
            </div>
          </div>
        </div>
        <div className={styles.parallax} />
        <div className={`${styles.content} `}>
          <div className={`${styles.contentContainer} ${styles.location}`}>
            <h1>Located in Rohnert Park</h1>
            <div className={styles.locationContainer}>
              <div className={styles.info}>
                <p><b>50 Enterpise Drive, Suite 201</b><br />Rohnert Park, Ca 94928</p>
                <ul>
                  <li><div>Monday:</div> 10 <sup>am</sup> - 6 <sup>pm</sup></li>
                  <li><div>Tuesday:</div> 10 <sup>am</sup> - 6 <sup>pm</sup></li>
                  <li><div>Wednesday:</div> 10 <sup>am</sup> - 6 <sup>pm</sup></li>
                  <li><div>Thursday:</div> 10 <sup>am</sup> - 6 <sup>pm</sup></li>
                  <li><div>Friday:</div> 10 <sup>am</sup> - 6 <sup>pm</sup></li>
                  <li><div>Saturday:</div> 8:30 <sup>am</sup> - 2 <sup>pm</sup></li>
                  <li><div>Sunday:</div> <div>Closed</div></li>
                </ul>
              </div>
              <div className={styles.mapContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.1784187797116!2d-122.7087401!3d38.3448523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80844a72e9bb935f%3A0x2da89d08a833b9c7!2s50%20Enterprise%20Dr%2C%20Rohnert%20Park%2C%20CA%2094928!5e0!3m2!1sen!2sus!4v1718669326861!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
              </div>
            </div>
            <div className={styles.bookAppointment}>
              <Link target="_blank" href={'https://book.squareup.com/appointments/jk9jhgdneixhj4/location/LA3NQCAENZFYS/services'}>Book Now</Link>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p>&copy; Yeucutit {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}
