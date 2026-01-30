import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/src/lib/firebase";
import { useEffect } from "react";

useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    console.log("AUTH STATE:", user);
  });

  return () => unsub();
}, []);