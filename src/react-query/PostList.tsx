import { useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  const [userId, setUsereId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        onChange={(event) => setUsereId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select> */}
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-3"
      >
        {isFetchingNextPage ? "Loading more..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
