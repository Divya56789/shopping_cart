import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import "./login.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoggleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider).then((result) => {
      const user = result.user;
      dispatch(
        addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      ).catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div className="shopcart__loginpage">
      <div className="shopcart__loginpage__container">
        <h2>Sign in with Shopcart</h2>
        <div
          className="shopcart__loginpage__signInWithGoogle"
          onClick={handleGoggleLogin}
        >
          <img src={google} alt="google" />
          <span>Sign in with Google</span>
        </div>

        <div
          className="shopcart__loginpage__signInWithGithub"
          onClick={handleGithubLogin}
        >
          <img src={github} alt="github" />
          <span>Sign in with Github</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
