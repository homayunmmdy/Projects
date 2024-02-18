import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface Comment {
  name: string;
  email: string;
  comment: string;
}

const CommentForm: React.FC = () => {
  const [cookies, setCookie] = useCookies(['comments']);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>(cookies.comments || []);

  useEffect(() => {
    setCookie('comments', comments, { path: '/' });
  }, [comments, setCookie]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = { name, email, comment };
    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium mb-2">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium mb-2">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="comment" className="text-lg font-medium mb-2">Comment:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
      </form>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        {comments.map((c, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="text-lg font-semibold">{c.name} - {c.email}</p>
            <p className="mt-2">{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;