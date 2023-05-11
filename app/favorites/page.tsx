'use client'

import { useAppContext } from '../../context/appContext';
import PostListView from '../../components/PostListView';



export default function Favorites() {
  const { favoriteList } = useAppContext();

  return (
    <main>
      <PostListView postsList={favoriteList} />
    </main>
  )
}
