import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hnAPI';

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory().then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
          <p>Hacker News</p>

      <p>{story.url}
        <p>{story.title}</p>
      </p>
      By: <p>{story.by}</p>
      Posted: <p>{story.time}</p>
    </>
  ) : null;
});
