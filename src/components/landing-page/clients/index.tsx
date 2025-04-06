import { Container } from "react-bootstrap";
import ClientCards from "./client-cards";

const Client = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box">
          <h2 className="title-2">Our clients</h2>
          <p>
            We are proud of contributing to the success of the world’s leading
            brands
          </p>
        </div>
        <ClientCards />
      </Container>
    </section>
  );
};

export default Client;
