import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        {/*Sidebar */}
        <Sidebar />
        <Center/>
        {/* Center*/}
      </main>
      <div className="sticky bottom-0">{/*Player*/}
      
      <Player/></div>
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return {
    props:{
      session
    }
  }
}