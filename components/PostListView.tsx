import { Post } from '../models/post'
import PostCard from './post'
import styles from '../styles/home.module.css'
import Loading from './Loading'

export default function PostListView({ postsList }: { postsList: Post[] }) {
    return (
        <>
            {
                // If data is not fetched yet, show loading spinner
                // and if data is fetched but there is no posts, show no posts message
                postsList && postsList.length > 0
                    ? postsList.map((post, index) => <PostCard key={post.id} post={post} />)
                    : postsList && postsList.length === 0
                        ? <section className={styles.noPosts}><h1>There is no Posts yet</h1></section>
                        : <Loading />
            }
        </>
    )
}
