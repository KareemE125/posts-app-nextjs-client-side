import { Post } from '../models/post'
import PostCard from './post'
import sharedStyles from '../styles/shared.module.css'
import LoadingSpinner from './loading'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function PostListView({ postsList }: { postsList: Post[] }) {

    const [posts, setPosts] = useState<Post[] | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const getMorePosts = async () => {
        // mimic real fetching 
        await new Promise(resolve => setTimeout(resolve, 500));

        if (posts) {
            const newPosts: Post[] = postsList.slice(posts.length, posts.length + 3);
            setPosts((posts) => [...posts!, ...newPosts]);
        }
    };

    useEffect(() => {
        if (posts == null || posts.length < 1) {
            setPosts(postsList.slice(0, 3))
        }
        else
        {
            setPosts(postsList.slice(0, posts.length))
        }
    }, [postsList])


    useEffect(() => {
        if (posts) {
            setHasMore(postsList.length > posts.length ? true : false);
        }
    }, [posts]);


    return (
        <>
            {
                // If data is not fetched yet, show loading spinner
                // and if data is fetched but there is no posts, show no posts message
                posts == null
                    ? <LoadingSpinner />
                    : posts && posts.length === 0
                        ? <section className={sharedStyles.noPosts}><h1>There is no Posts yet</h1></section>
                        : <InfiniteScroll
                            style={{ overflow: 'hidden' }}
                            dataLength={posts.length}
                            next={getMorePosts}
                            hasMore={hasMore}
                            loader={<div className={sharedStyles.lvLoaderLayout}> <div className={sharedStyles.loadingSpinner}></div> </div>}
                            endMessage={
                                <div className={sharedStyles.lvLoaderLayout}>
                                    <p>Yay! You have seen all Posts 😊👌</p>
                                </div>

                            }
                        >
                            {
                                posts.map((post, index) => <PostCard key={post.id} post={post} />)
                            }
                        </InfiniteScroll>
            }
        </>
    )
}



// export default function PostListView({ postsList }: { postsList: Post[] }) {
//     return (
//         <>
//             {
//                 // If data is not fetched yet, show loading spinner
//                 // and if data is fetched but there is no posts, show no posts message
//                 postsList && postsList.length > 0
//                     ? postsList.map((post, index) => <PostCard key={post.id} post={post} />)
//                     : postsList && postsList.length === 0
//                         ? <section className={styles.noPosts}><h1>There is no Posts yet</h1></section>
//                         : <Loading />
//             }
//         </>
//     )
// }
