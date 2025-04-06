import { Container } from "react-bootstrap";
import ClientCards from "../../landing-page/clients/client-cards";

const Client = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box">
          <h2 className="title-2">Clients speak! 😍</h2>
          <p>
            Check out the clients who believed in us and now they’re slaying the
            charts!
          </p>
        </div>
        <ClientCards />
      </Container>
    </section>
  );
};

export default Client;
