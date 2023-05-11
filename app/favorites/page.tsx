'use client'

import { useAppContext } from '../../context/appContext';
import PostListView from '../../components/postListView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noon Posts | Favorites',
}

export default function Favorites() {
  const { favoriteList } = useAppContext();

  return (
    <main>
      <PostListView postsList={favoriteList} />
    </main>
  )
}
