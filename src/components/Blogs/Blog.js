import { allBlogs } from './constants';
import React from 'react';
import styles from './Blogs.module.css';
import { useParams } from 'react-router-dom';

export default function Blog() {
  const { blogId } = useParams();

  function renderBlog() {
    const blog = allBlogs.find(({ id }) => {
      return id === parseInt(blogId);
    });

    if (!blog) {
      return <div className={styles.blog}>Unable to find blog entry.</div>;
    }

    const { date, title, content } = blog;
    return (
      <div className={styles.blog}>
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
        {content}
      </div>
    );
  }

  return <div className={styles.container}>{renderBlog()}</div>;
}
