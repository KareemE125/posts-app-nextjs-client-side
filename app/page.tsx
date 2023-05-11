'use client'

import { useAppContext } from '../context/appContext';
import PostListView from '../components/postListView';
import { use, useEffect, useState } from 'react';
import { Post } from '@/models/post';



export default function Home() {

  const { postsList } = useAppContext();


  return (
    <main>
      <PostListView postsList={postsList} />
    </main>
  )
}
