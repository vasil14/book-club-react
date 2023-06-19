import useAuthContext from "../context/AuthContext";

const Home = () => {
  const {user}: any = useAuthContext();
  
  return <>Welcome, {user.name}</>;
};

export default Home;
