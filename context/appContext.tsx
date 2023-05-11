'use client'

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import dummyPostsList, { Post } from '../models/post';

(function SeedData() {
    if(localStorage.getItem('posts')) return;
    localStorage.setItem('posts', JSON.stringify(dummyPostsList));
})();


// Create context type
interface AppContextValue {
  postsList: Post[];
  favoriteList: Post[];
  addToFavorites: (postId: string) => void;
  removeFromFavorites: (postId: string) => void;
}

// Create context default values
const defaultAppContextValue: AppContextValue = {
    postsList: [],
    favoriteList: [],
    addToFavorites: () => {},
    removeFromFavorites: () => {},
}

export const AppContext = createContext<AppContextValue>(defaultAppContextValue);

export function useAppContext() {
    return useContext(AppContext);
}

// Create the AppContext provider component
export function AppContextProvider({ children } : {children: ReactNode}) {

  const [postsList, setPostsList] = useState<Post[]>([]);
  const [favoriteList, setFavoriteList] = useState<Post[]>([]);

  // Load posts and favorites lists from local storage on component mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
        setPostsList(JSON.parse(storedPosts));
    }else{ setPostsList([]); } 

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavoriteList(JSON.parse(storedFavorites));
    }else{ setFavoriteList([]); } 

  }, []);

  // Update local storage when favoriteList changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
    localStorage.setItem('posts', JSON.stringify(postsList));
  }, [favoriteList, postsList]);

  // Function to add a post to the favoriteList
  const addToFavorites = (postId: string) => {
    const newFavorite: Post | undefined = postsList.find((post) => { 
        if(post.id === postId){
            post.isFav = true;
        }
        return post.id === postId
    });
    if (!newFavorite) return;

    setFavoriteList([...favoriteList, newFavorite]);
    setPostsList(postsList);
  };

  // Function to remove a post from the favoriteList
  const removeFromFavorites = (postId: string) => {
    const updatedFavorites = favoriteList.filter((favorite) => favorite.id !== postId);

    postsList.forEach((post) => {   
        if(post.id === postId){
            post.isFav = false;
        }
    });

    setFavoriteList(updatedFavorites);
    setPostsList(postsList);
  };

  // Provide the context value to the children components
  const contextValue: AppContextValue = {
    postsList,
    favoriteList,
    addToFavorites,
    removeFromFavorites,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
