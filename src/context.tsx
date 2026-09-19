import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Post, CommentsState, Comment, AppContextType } from './types';

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    author: 'Олексій Коваленко',
    avatar: 'https://unsplash.com',
    media: 'https://unsplash.com',
    likes: 124,
    caption: 'Чудовий день на пляжі! #відпустка #море',
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: '2',
    author: 'Марія Петренко',
    avatar: 'https://unsplash.com',
    media: 'https://unsplash.com',
    likes: 89,
    caption: 'Прогулянка лісом 🌲✨ #природа',
    isLiked: false,
    isBookmarked: false,
  }
];

const INITIAL_COMMENTS: CommentsState = {
  '1': [
    { id: 'c1', author: 'Марія Петренко', text: 'Неймовірне фото!' },
    { id: 'c2', author: 'Іван Іванов', text: 'Яка краса!' }
  ],
  '2': [
    { id: 'c3', author: 'Олексій Коваленко', text: 'Хочу туди ж!' }
  ]
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [comments, setComments] = useState<CommentsState>(INITIAL_COMMENTS);

  const toggleLike = (postId: string) => {
    setPosts(prev => prev.map(post => post.id === postId 
      ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
      : post
    ));
  };

  const toggleBookmark = (postId: string) => {
    setPosts(prev => prev.map(post => post.id === postId 
      ? { ...post, isBookmarked: !post.isBookmarked }
      : post
    ));
  };

  const addPost = (newPost: Post) => {
    setPosts(prev => [newPost, ...prev]);
  };

  const addComment = (postId: string, text: string) => {
    const newComment: Comment = {
      id: Math.random().toString(),
      author: 'Поточний Користувач',
      text
    };
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment]
    }));
  };

  return (
    <AppContext.Provider value={{ posts, comments, toggleLike, toggleBookmark, addPost, addComment }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
