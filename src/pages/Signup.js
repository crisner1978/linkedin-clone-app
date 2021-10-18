import { signInWithEmailAndPassword, updateProfile } from "@firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { login } from "../slices/userSlice";

const Signup = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const joinNow = (e) => {
    e.preventDefault()
    if(!name) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profilePic,
      }).then(() => {
        dispatch(login({
          displayName: name,
          photoUrl: profilePic,
          uuid: auth.currentUser.uid,
          email: auth.currentUser.email,
        }))
      })
    }).catch((error) => alert(error.message));
  }

  const signinToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      dispatch(
        login({
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          photoUrl: auth.currentUser.photoURL,
        })
      );
    }).catch((error) => alert(error))
  };

  return (
    <Container>
      <img src="/images/login-logo.svg" alt="" />
      <h1>Make the most of your professional life</h1>
      <Form>
        <label htmlFor="name">Full name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Required when registering"
          value={name}
          type="text"
          name="name"
          required
        />
        <label htmlFor="pic">Profile URL</label>
        <input
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Optional when registering"
          value={profilePic}
          type="text"
          name="profile pic"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          ref={emailRef}
        />
        <label htmlFor="password">Password (6 or more characters)</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          ref={passRef}
        />
        <TextBox>
          By clicking Agree & Join, you agree to the LinkedIn Clone{" "}
          <span>User Agreement, Privacy Policy,</span> and{" "}
          <span>Cookie Policy</span>
        </TextBox>
        <button type="submit" onClick={joinNow}>
          Agree & Join
        </button>
        <p className="member">Already on LinkedIn?</p>
        <Google onClick={signinToApp}>
          <span>Sign in</span>
        </Google>
      </Form>
      <p>
        Looking to create a page for a business? <span>Get help</span>
      </p>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #f3f2ef;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  h1 {
    font-size: 32px;
    font-weight: 400;
    padding: 24px 16px;
    display: block;
  }
  img {
    object-fit: contain;
    height: 34px;
    margin-top: 20px;
  }
  p {
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    font-weight: 400;
    padding-top: 16px;
    span {
      color: #0a66c2;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 24px;
  background-color: #fff;
  width: 400px;
  margin: 0 364px 0 364px;
  border-radius: 8px;
  label {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.6);
    width: 350px;
    margin: auto;
    padding-bottom: 4px;
  }
  input {
    width: 350px;
    margin: 0 auto;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 15px;
    padding-left: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    text-align: center;
    padding: 16px 16px 24px 16px;
    span {
      color: #0a66c2;
      font-weight: 600;
      cursor: pointer;
    }
  }
  button {
    height: 48px;
    background-color: #0a66c2;
    border-radius: 24px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    border: 0;
  }
  .member {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

const TextBox = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  margin: 16px 0;
  span {
    color: #0a66c2;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Google = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 24px;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 20px;
  color: #0a66c2;
  font-weight: 500;
  border: 1px solid #0a66c2;
  cursor: pointer;

  &:hover {
    background-color: #ecf4fe;
    -webkit-box-shadow: inset 0px 0px 0px 1px #025cb9;
    box-shadow: inset 0px 0px 0px 1px #025cb9;
  }
  span {
    font-weight: 500;
  }
`;
