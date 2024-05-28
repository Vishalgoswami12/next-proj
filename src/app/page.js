import styles from "./page.module.css";
import Header from "../Components/Header"
import Head from "next/head";
import AllItem from "@/Components/AllItem";
import LandingPage from "@/Components/LandingPage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Next Assignment
        </title>
      
      </Head>
      <main>
        <Header/>
        <AllItem/>
        <LandingPage/>
          </main>
    </div>
  );
}
