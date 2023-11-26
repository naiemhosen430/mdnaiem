import { ref, push, set } from "firebase/database";
import { dbbase } from "../firebase";

export const createOrder = (data) => {
  const newMessageRef = push(ref(dbbase, "order"));

  const messageId = newMessageRef.key;
  set(ref(dbbase, `order/${messageId}`), data);

  return "ok";
};
