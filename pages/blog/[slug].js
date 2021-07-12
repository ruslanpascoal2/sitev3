import React from "react";
import { Post } from "../../components/blog/Post";
import { getAllPosts } from "../../scripts/blog/getAllPosts";

export default function BlogPost({ post }) {

    return (
        <div>
            <article>
                <Post post={post}></Post>
            </article>
          
        </div>
    );
}

export async function getStaticProps(context) {

    const post = getAllPosts().find(x => x.metadata.slug === context.params.slug);
    return {
        props: {
            post
        }
    }
}


export async function getStaticPaths(a) {

    return {
        paths:
            getAllPosts().map(post => {
                return ({
                    params: {
                        slug: post.metadata.slug
                    }
                })
            }),
        fallback: false // See the "fallback" section below
    };
}