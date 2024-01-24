/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledPostItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 0 5px #ccc;
`;

function PostItem({ post }) {
  return (
    <StyledPostItem>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </StyledPostItem>
  );
}

export default PostItem;
