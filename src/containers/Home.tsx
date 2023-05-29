import NavbarComponent from "../components/NavbarComponent";
import { Container } from "../components/styles/Container.styled";


const Home = () => {
  return (
    <Container>
        <NavbarComponent/>
      <div>Book Club</div>
    </Container>
  );
};

export default Home;
