import globalStyles from '../../App.css';
import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.photo}></div>
      <div className={globalStyles.container}>
        <div className={styles.introHeader}>What's up guys</div>
        <div className={styles.intro}>
          <div className={styles.introParagraph}>
            When I was younger and growing up in the hoods of Glenview, my idol once told me that life is like a moving
            train that does not stop for anybody. That is how I like to live - always moving and penetrating any
            obstacle in my path, like Bo Joon-Ho’s Snowpiercer. It is with this hard mentality, partially inspired by
            Goggins, that I achieved unthinkable accomplishments, including (but not limited to):
            <ul>
              <li>
                President of the Maine East HS Spanish Club (which inspired my wild adventures abroad in Spain involving
                a garage in Barcelona)
              </li>
              <li>
                Competitions Director of the American Society of Mechanical Engineers at UIUC (which I joined after I
                overslept my Hoeft T&M interview)
              </li>
              <li>
                Esteemed Georgia Tech Master student and consultant for NASA to develop a concept of operations for
                Vertical Takeoff and Landing aircrafts (before I crash landed my drone within 20 minutes of flight)
              </li>
            </ul>
          </div>

          <div className={styles.introParagraph}>
            But besides my humble technical background and impeccable skill in convincing gullible friends to place bets
            with me during tennis matches and FIFA games, the thing I love most is being a content creator. This website
            intends to provide the platform for me to fulfill that creative desire and hunger.
          </div>

          <div className={styles.introParagraph}>
            So, here’s a little bit about me:
            <ul>
              <li>
                Aspiring Drake backup dancer, adventure-addict nomad, and social media influencer (Promo code
                “sunsetlover” for 3.14% off my biodegradable bikini apparel!)
              </li>
              <li>Thrives off of highly caffeinated black coffee, Pho 83/75/32 pho, and Kauai musubi</li>
              <li>
                Son, brother, friend, lover, ex-lover, character inspiration for short story blog posts, superlative
                winner of “Most likely to become famous for the wrong reasons”
              </li>
            </ul>
          </div>

          <div className={styles.introParagraph}>
            And I leave you with this pondering thought that I ask myself every morning when I wake up at 1pm - “Why do
            we fall?”
          </div>
        </div>
      </div>
    </div>
  );
}
