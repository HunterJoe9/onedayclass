import { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import PostCard from "../components/PostCard"; 
import { useMe } from "../hooks";

export interface IPost {
  content : string;
  createdAt : string;
  id : number;
  title : string;
  user : {
    account: string;
  };
}

const Main: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [posts, setPosts] = useState<IPost[]>();

  const { account, getMe } = useMe();

  const getPosts = async () => {
    try {
      const response = await axios.get(`
      ${process.env.REACT_APP_BACK_URL}/post?page=${page}`);

      console.log(response);
      
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMe();
    getPosts();
  },[]);
  return posts ? (
    <>
      <Header account={account} />
      <main className="max-w-screen-md mx-auto">
        <h1 className="mt-20 text-center font-bold text-2xl">h662's 게시판</h1>
        <ul className="mt-10 h-[440px]">
          <li className="flex justify-between border-b-2 font-semibold">
            <span className="w-2/12 p-2 text-center">아이디</span>
            <span className="w-6/12 p-2 text-center">제목</span>
            <span className="w-2/12 p-2 text-center">사용자</span>
            <span className="w-2/12 p-2 text-center">작성일</span>
          </li>
          {posts.map((v, i) => (
            <PostCard key={i} index={i} post={v} />
          ))}
        </ul>
        <ul className="flex text-lg justify-center">
          <li>페이지</li>
        </ul>
      </main>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Main;