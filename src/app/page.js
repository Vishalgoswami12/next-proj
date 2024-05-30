'use client'
import React , {useState,useEffect} from "react"
import axios from 'axios';
import styles from "./page.module.css";
import Header from "../Components/Header"
import Head from "next/head";
import AllItem from "@/Components/AllItem";
import LandingPage from "@/Components/LandingPage";
export default function Home() {
  const [data, setData] = useState([]);
  const[search, setSetSearch] = useState("")

  const fetchData = () => {
      return axios.get("https://fakestoreapi.com/products")
          .then((res) => setData(res.data))
          .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
      fetchData();
  }, []);
  const handleSearch = (prod) => {
    setSetSearch(prod);
  };
  const filterProduct = data.filter((ele) => ele.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
      <Head>
        <title>
          Next Assignment
        </title>
      </Head>
      <main>
        <Header
        onSearch={handleSearch}
        />
        <AllItem/>
        <LandingPage
        data={filterProduct}
        />
      </main>
    </div>
  );
}
