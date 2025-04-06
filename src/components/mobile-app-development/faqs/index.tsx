import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useState, useEffect } from "react";
import { APIS } from '../../../api/apiEndPoints';
import APICallService from '../../../api/apiCallService';
 
const FAQS = (props: any) => {
  const [lessData, setLessData] = useState(false);
  const [faqsData,setFaqsData] = useState([]);
 
  useEffect(() => {
    if(props.type){
      fetchData(props.type);
    }
  }, []);
 
  const fetchData = async (
    faqType: any
  ) => {
    // setLoading(true);
    let params: any = {
      // pageNo: pageNo,
      // limit: limit,
      // needCount: true,
      faqType: faqType
    };  
    const apiService = new APICallService(APIS.LIST_FAQS,params);
    const response = await apiService.callAPI();
    if (response) {
      setFaqsData(response.records);
    }
    // setLoading(false);
  };
 
  // const selectedFaqs =
  //   FAQS_DATA.find((faqGroup) => faqGroup.type === props.type)?.faqs || [];
 
  useEffect(() => {
    setLessData(faqsData.length > 4);
  }, [faqsData]);
 
  const midIndex = Math.ceil(faqsData.length / 2);
  const firstColumnFaqs = faqsData.slice(0, midIndex);
  const secondColumnFaqs = faqsData.slice(midIndex);
 
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box">
          <Row>
            <Col lg={4}>
              <h2 className="title-2">Frequently Asked Questions</h2>
            </Col>
            <Col lg={7} className="offset-lg-1">
              <p>
                We know you would have some queries as well that’s why we have
                zeroed
                <br /> in answers to some of your questions. For any doubts
                regarding your
                <br /> project, you can surely let us know!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      {lessData ? (
        <Container>
          <Accordion>
          <Row>
            <Col lg={6} className="default-faqs">
              <div className="accordion accordion-flush" id="ImperoFAQsCol1">
                  {firstColumnFaqs.map((faq: any, index: number) => (
                    <Accordion.Item eventKey={index.toString()} key={index} className='my-4 border-bottom-0'>
                      <Accordion.Header className='fs-10 fw-bold'>
                        {faq.question}
                      </Accordion.Header>
                      <Accordion.Body className="fs-6">
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </div>
            </Col>
            <Col lg={6} className="default-faqs">
              <div className="accordion accordion-flush" id="ImperoFAQsCol2">
                  {secondColumnFaqs.map((faq: any, index: number) => (
                    <Accordion.Item
                      eventKey={(firstColumnFaqs.length + index).toString()}
                      key={index}
                      className='my-4 border-bottom-0'
                    >
                      <Accordion.Header className='fs-10 fw-bold'>{faq.question}</Accordion.Header>
                      <Accordion.Body className="fs-6">
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </div>
            </Col>
          </Row>
          </Accordion>
        </Container>
      ) : (
        <Container>
          <div className="default-faqs">
            <div className="accordion accordion-flush" id="ImperoFAQs">
              <Accordion defaultActiveKey="0">
                {faqsData.map((faq: any, index: number) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className='my-4 border-bottom-0'>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      )}
    </section>
  );
};
 
export default FAQS;