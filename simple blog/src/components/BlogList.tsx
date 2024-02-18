import React, { useState } from 'react';

interface BlogListProps {
  blogPosts: { title: string; content: string }[];
  onEditPost: (index: number, updatedPost: { title: string; content: string }) => void;
  onDeletePost: (index: number) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ blogPosts, onEditPost, onDeletePost }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditTitle(blogPosts[index].title);
    setEditContent(blogPosts[index].content);
  };

  const handleSaveEdit = (index: number) => {
    onEditPost(index, { title: editTitle, content: editContent });
    setEditIndex(null);
    setEditTitle('');
    setEditContent('');
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditTitle('');
    setEditContent('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md">
          {editIndex === index ? (
            <div className="mb-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows={4}
              ></textarea>
              <button
                onClick={() => handleSaveEdit(index)}
                className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600 transition-colors"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-medium mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
              <div className="mt-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeletePost(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};