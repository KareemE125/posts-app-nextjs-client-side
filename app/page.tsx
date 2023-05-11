'use client'

import { useAppContext } from '../context/appContext';
import PostListView from '../components/PostListView';



export default function Home() {
  const {postsList} = useAppContext();

  return (
    <main>
      <PostListView postsList={postsList} />
    </main>
  )
}
