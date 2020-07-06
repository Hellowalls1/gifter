import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { SearchBar } from "./components/SearchBar";


function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <SearchBar />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;