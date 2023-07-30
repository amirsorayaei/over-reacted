"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import avatar from "@/src/assets/images/avatar.jpg";

import { Post } from "@/src/types/types";
import { useGetPostsQuery } from "@/src/redux/services/postApi";
import { setPosts } from "@/src/redux/slices/appSlice";
import {
  AuthorName,
  AuthorWrapper,
  Body,
  ContainerWrapper,
  Date,
  PostWrapper,
  Title,
} from "@/src/assets/styles/Home.styled";
import { generateDateById } from "@/src/helpers/Functions";
import { useAppDispatch } from "@/src/redux/hooks";

/**
 * Home component
 */
const Home = () => {
  const { isLoading, isFetching, data, error } = useGetPostsQuery(null); // Fetch the posts from api service using RTK createApi
  const dispatch = useAppDispatch();

  /**
   * Setting posts to RTK when the data is available
   */
  useEffect(() => {
    if (data) dispatch(setPosts(data));
  }, [data, dispatch]);

  /**
   * Display error when the request is failed
   */
  if (error) {
    return (
      <ContainerWrapper>
        <h3>{"Oh no, There was an error."}</h3>
      </ContainerWrapper>
    );
  }

  /**
   * Display loading when the request is waiting for response
   */
  if (isLoading || isFetching) {
    return (
      <ContainerWrapper>
        <h3>{"Loading ..."}</h3>
      </ContainerWrapper>
    );
  }

  /**
   * Display data to user
   */
  return data ? (
    <div>
      {/** Author details */}
      <aside>
        <AuthorWrapper>
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
            style={{
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
              marginRight: "1rem",
            }}
          />
          <p>
            {"Personal blog by "}
            <AuthorName>{"Amir Sorayaei"}</AuthorName>.{"\n"}
            {"I explain with words and code."}
          </p>
        </AuthorWrapper>
      </aside>

      {/** List of posts */}
      {data.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  ) : null;
};

/**
 * Post item
 */
const PostItem = ({ item }: { item: Post }) => {
  return (
    <PostWrapper>
      <header>
        <h3>
          <Link href={`/post/${item.id}`}>
            <Title>{item.title}</Title>
          </Link>
        </h3>
        <Date>{generateDateById(item.id)}</Date>
      </header>
      <Body>{item.body}</Body>
    </PostWrapper>
  );
};

export default Home;
