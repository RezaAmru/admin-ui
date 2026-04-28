import React from "react";
import PostCard from "./PostCard";
import { postsData } from "./postsData";

function Exercise() {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-special-red-2">
          Post Cards
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {postsData.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Exercise;
