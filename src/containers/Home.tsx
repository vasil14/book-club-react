import useAuthContext from "../context/AuthContext";

const Home = () => {
  const {user}: any = useAuthContext();
  
  return <>{user?.name}sdfsdf</>;
};

export default Home;
