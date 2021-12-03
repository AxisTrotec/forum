import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    const hardCodedPosts = [];

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < 5; i++){
        hardCodedPosts.push(data[i])
      }

      setAppState({ loading: true });
      setAppState({ loading: false, posts: hardCodedPosts});
    });

  }, [setAppState]);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
