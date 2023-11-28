import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { createUser } from "./firebaseAction/createUser";
import Cookies from "js-cookie";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1UrPZKfEHOh3boASkOZjB7e8EplwoIKQ",
  authDomain: "mdnaiem-5540b.firebaseapp.com",
  projectId: "mdnaiem-5540b",
  storageBucket: "mdnaiem-5540b.appspot.com",
  messagingSenderId: "840442077905",
  appId: "1:840442077905:web:f4099521d251fe5d001bf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbstore = getFirestore(app);
export const dbbase = getDatabase(app);
export const auth = getAuth(app);
export default app;

export const gooogleSignUpHundler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((data) => {
      Cookies.set("accesstoken", data.user.accessToken, { expires: 36500 });
      Cookies.set("userid", data.user.uid, { expires: 36500 });
      const userCollectionRef = ref(
        dbbase,
        `users/` + data.user.uid,
        "/distance"
      );

      onValue(userCollectionRef, (snapshot) => {
        const mydata = snapshot.val();

        if (!mydata) {
          const user = {
            name: data.user.displayName,
            _id: data.user.uid,
            role: "user",
            profilepic: data.user.photoURL,
            email: data.user.email,
            phone: data.user.email,
            country: data.user.email,
            city: data.user.email,
            age: data.user.email,
            gender: data.user.email,
            reviews: ["placeholder"],
            projectruning: ["placeholder"],
            projectcompleted: ["placeholder"],
            totalcost: ["placeholder"],
          };

          createUser(user);
        } else {
        }
      });

      // if ()
    })
    .catch((error) => {
      console.log(error);
    });
};
