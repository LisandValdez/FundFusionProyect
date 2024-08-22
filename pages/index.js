import React, {useState,useEffect} from "react";
import Login from "./Login"; // Ajusta el path según la ubicación de tu contexto
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";
import ChatPage from "./chat";


export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div>
      <ChatPage/>
    </div>
  );
}