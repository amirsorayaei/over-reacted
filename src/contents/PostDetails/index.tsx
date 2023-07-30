"use client";

import { useEffect, useState } from "react";

import { useAppSelector } from "@/src/redux/hooks";
import { RootState } from "@/src/redux/store";
import {
  Body,
  ContainerWrapper,
  Date,
  Title,
} from "@/src/assets/styles/Post.styled";
import { Post } from "@/src/types/types";

/**
 * Post details
 */
const PostDetails = ({ postId }: { postId: number }) => {
  const [postDetails, setPostDetails] = useState<Partial<Post>>();

  const posts = useAppSelector((state: RootState) => state.app.posts);

  /**
   * Get the post details whenever post id is available
   */
  useEffect(() => {
    const getPostDetails = () => {
      const item = posts.find((item) => item.id === postId); // Find the selected post by searching on posts list
      setPostDetails(item);
    };

    if (postId) getPostDetails();
  }, [postId, posts]);

  /**
   * Display warning when the post is not found
   */
  if (!postDetails) {
    return (
      <ContainerWrapper>
        <h3>{"No post found!"}</h3>
      </ContainerWrapper>
    );
  }

  /**
   * Display post details
   */
  return (
    <div>
      <Title>{postDetails.title}</Title>
      <Date>{postDetails.date}</Date>
      <Body>{postDetails.body}</Body>
    </div>
  );
};

export default PostDetails;
