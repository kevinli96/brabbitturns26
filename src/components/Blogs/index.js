import { allBlogs } from './constants';
import { Link } from 'react-router-dom';
import React from 'react';
import shuffle from 'lodash/shuffle';
import styles from './Blogs.module.css';

export default function Blogs() {
  function renderBlog(blog, index) {
    const { date, title, id } = blog;
    return (
      <div key={index} className={styles.blog}>
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
        <div>
          <Link className={styles.readMoreLink} to={`/blogs/${id}`}>
            <span className={styles.cta}>Read More</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>{allBlogs.map((blog, index) => renderBlog(blog, index))}</div>
    </div>
  );
}
