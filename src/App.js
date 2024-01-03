import React, { useState, useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from './components/NewsCards/NewsCards';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
        key: '13d6cd34587f8c416ffb7bf93a4207d32e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command, articles }) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles);
          }
        }
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  )
}

export default App