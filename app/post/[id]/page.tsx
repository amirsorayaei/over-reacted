import PostDetails from "@/src/contents/PostDetails";

const Post = ({ params }: { params: { id: string } }) => {
  return <PostDetails postId={+params.id} />;
};

export default Post;
