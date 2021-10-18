import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MyNetwork from "./pages/MyNetwork";
import { login, logout, selectUser } from "./slices/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const user = useSelector(selectUser);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        //user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoUrl: user.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  const openUp = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdown && dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  });

  return (
    <div className="app">
      <Switch location={location} key={location.pathname}>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header
              dropdown={dropdown}
              openUp={openUp}
              dropdownRef={dropdownRef}
            />
            <div className="app2">
              <Route exact path="/" component={Home} />
              <Route path="/mynetwork" component={MyNetwork} />
            </div>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
