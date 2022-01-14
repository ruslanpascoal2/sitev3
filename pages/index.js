import { useState } from "react";
import { useEffect } from "react";
import { Post } from "../components/blog/Post";
import BackToTop from "../components/layout/BackToTop";
import { getAllPosts } from "../scripts/blog/getAllPosts";
import Bio from "./bio";

export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pb-20">
      <Bio/>
      {
        scrollPosition > 100 ?
        <BackToTop /> : 
        <div></div>
      }
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  }
}

