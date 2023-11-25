import { ref, push, set } from "firebase/database";
import { dbbase } from "../firebase";

export const sendMessageMe = (data) => {
  const newMessageRef = push(ref(dbbase, "message"));

  const messageId = newMessageRef.key;
  set(ref(dbbase, `message/${messageId}`), data);

  return "ok";
};
