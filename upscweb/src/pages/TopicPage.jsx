// src/components/TopicPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopicPage = () => {
  const { topicId } = useParams();
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch(`/api/topics/get/${topicId}`);
      const data = await response.json();
      setTopic(data);
    };
    fetchTopic();
  }, [topicId]);

  return (
    <div className="container mx-auto p-4">
      {topic ? (
        <div>
          <h1 className="text-3xl font-bold">{topic.title}</h1>
          <p>{topic.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TopicPage;
