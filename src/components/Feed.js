import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import Posts from "./Posts";
import FlipMove from "react-flip-move";
import { db, auth } from "../../src/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "@firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const postsRef = collection(db, "posts");

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsub;
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    setInput("");
    await addDoc(postsRef, {
      name: auth.currentUser.displayName,
      desc: auth.currentUser.email,
      message: input,
      photoUrl: auth.currentUser.photoURL,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <Container>
      <PostWrapper>
        <PostBox>
          <Avatar className="avatar" src={auth.currentUser?.photoURL} />
          <Form>
            <input
              value={input}
              type="text"
              placeholder="Start a post"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </Form>
        </PostBox>
        <OptionWrapper>
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={EventIcon} title="Event" color="#e7a33e" />
          <InputOption
            Icon={ChromeReaderModeOutlinedIcon}
            title="Write Article"
            color="#fc9295"
          />
        </OptionWrapper>
      </PostWrapper>
      <FlipMove>
        {posts.map(({ id, data: { name, desc, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            desc={desc}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </Container>
  );
};

export default Feed;

const Container = styled.main`
  max-width: 1128px;
  height: 100%;
  flex: 0.45;
  margin: -12px 20px 0;
  @media screen and (max-width: 992px) {
    margin-top: 4px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 576px;
    margin-bottom: 20px;
    padding-left: auto;
    padding-right: auto;
    margin: 0px;
  }
`;

const PostWrapper = styled.div`
  background-color: #fff;
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const PostBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  height: 46px;
  border: 1px solid lightgray;
  margin-left: 60px;
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.6);
  .avatar {
    width: 48px;
    height: 48px;
    object-fit: contain;
    position: relative;
    left: -58px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  input {
    margin-right: 15px;
    border: none;
    position: relative;
    flex: 1;
    font-size: 14px;
    font-weight: 600px;
    outline-width: 0;
    margin-left: -35px;
    line-height: 42px;
  }
  button {
    display: none;
  }
`;

const OptionWrapper = styled.div`
  margin-top: -10px;
  display: flex;
  justify-content: space-evenly;
`;
