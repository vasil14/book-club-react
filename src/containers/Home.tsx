import { useState } from "react";
import useAuthContext from "../context/AuthContext";

const Home = () => {
  const [first, setfirst]: any = useState()
  fetch('http://localhost:3000/').then(res=> res.json()).then(data=>setfirst(data?.message))
  const {user}: any = useAuthContext();
  console.log(first);
  
  return <>Welcome, {first}</>;
};

export default Home;
