import React, { useState, useEffect } from 'react';
import { BlogForm } from './components/BlogForm';
import { BlogList } from './components/BlogList';

const COOKIE_NAME = 'blogPosts';

interface BlogPost {
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const cookieData = JSON.parse(getCookie(COOKIE_NAME) || '[]');
    setBlogPosts(cookieData);
  }, []);

  const addBlogPost = (newPost: BlogPost) => {
    const updatedPosts = [...blogPosts, newPost];
    setBlogPosts(updatedPosts);
    updateCookie(updatedPosts);
  };

  const editBlogPost = (index: number, updatedPost: BlogPost) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[index] = updatedPost;
    setBlogPosts(updatedPosts);
    updateCookie(updatedPosts);
  };

  const deleteBlogPost = (index: number) => {
    const updatedPosts = [...blogPosts];
    updatedPosts.splice(index, 1);
    setBlogPosts(updatedPosts);
    updateCookie(updatedPosts);
  };

  const updateCookie = (posts: BlogPost[]) => {
    setCookie(COOKIE_NAME, JSON.stringify(posts), 30); // expires in 30 days
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const getCookie = (name: string) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">My Blog</h1>
      <div className="max-w-md mx-auto">
        <BlogForm onAddPost={addBlogPost} />
        <BlogList
          blogPosts={blogPosts}
          onEditPost={editBlogPost}
          onDeletePost={deleteBlogPost}
        />
      </div>
    </div>
  );
};

export default App;