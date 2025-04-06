import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
import { useEffect, useState } from 'react';
import APICallService from '../../../api/apiCallService';
import { APIS } from '../../../api/apiEndPoints';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogCardsSkeleton = () => {
  return (
    <Row className="blog-grid-section-blogs">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Col lg={4} md={6} key={i} className="pb-4">
          <div className="blog-card">
            <Skeleton height={300} />
            <div className="card-body">
              <div className="mb-2">
                <Skeleton width={80} height={24} />
              </div>
              <div className="mb-3">
                <Skeleton count={2} />
              </div>
              <div className="d-flex align-items-center">
                <Skeleton width={100} height={20} />
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

const BlogListSkeleton = () => {
  return (
    <div className="section">
      <Container>
        <div className="d-flex justify-content-between gap-3 border-bottom pb-4">
          <div className="d-flex flex-wrap gap-3">
            {[1, 2, 3, 4,5,6].map((i) => (
              <div key={i}>
                <Skeleton width={100} height={35} borderRadius={25} />
              </div>
            ))}
          </div>
          {/* <div>
            <Skeleton width={24} height={24} />
          </div> */}
        </div>
        <BlogCardsSkeleton />
      </Container>
    </div>
  );
};

const BlogList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoader, setFetchLoader] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const apiCallService = new APICallService(APIS.BLOG_CATEGORY);
    const response = await apiCallService.callAPI();
    if (response) {
      let temp = response.records.filter((tem: any) => tem.blogCount > 0)
      setCategories(temp);
    }
    setLoading(false);
  };

  const fetchBlogs = async (categoryIds = []) => {
    setFetchLoader(true);
    let params: any = {
      websiteType: 1
    }
    if (categoryIds && categoryIds.length > 0) {
      categoryIds.forEach((category: any, index: number) => {
        params[`categoryRef[${index}]`] = category;
      });
    }
    const apiCallService = new APICallService(APIS.BLOG_LIST, params);
    const response = await apiCallService.callAPI();
    if (response) {
      setBlogs(response.records);
    }
    setFetchLoader(false);
  };

  const handleCategoryClick = (categoryId: any) => {
    const isSelected = selectedCategories.includes(categoryId);
    let updatedSelectedCategories;

    if (isSelected) {
      updatedSelectedCategories = selectedCategories.filter((id: any) => id !== categoryId);
    } else {
      updatedSelectedCategories = [...selectedCategories, categoryId];
    }

    setSelectedCategories(updatedSelectedCategories);
    fetchBlogs(updatedSelectedCategories);
  };

  // Show full page skeleton during initial loading
  if (loading) {
    return <BlogListSkeleton />;
  }

  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="d-flex justify-content-between gap-3 border-bottom pb-4">
          <div className="d-flex flex-wrap gap-3">
            {categories.map((ele: any) => (
              <div
                className="btn btn-outline-primary rounded-pill custom-cursor"
                key={ele._id}
                style={{
                  backgroundColor: selectedCategories.includes(ele._id) ? '#191a4e' : '',
                  color: selectedCategories.includes(ele._id) ? 'white' : '',
                }}
                onClick={() => handleCategoryClick(ele._id)}
              >
                {ele.name}
              </div>
            ))}
          </div>
          {/* <div>
            <img
              className="img-fluid ms-auto"
              src={IMAGES.dropDown}
              width="24"
              height="24"
              alt="chevron-down"
              loading="lazy"
              onClick={() => setShowAll(!showAll)}
              style={{ cursor: "pointer" }}
            />
          </div> */}
        </div>
        
        {/* Show only blog cards skeleton during fetch loading */}
        {fetchLoader ? (
          <BlogCardsSkeleton />
        ) : (
          <Row className="blog-grid-section-blogs">
            {blogs.map((ele: any, index: number) => (
              <Col lg={4} md={6} key={index} className="pb-4">
                <div className="link-text custom-cursor" onClick={() => navigate(`/blog-details/${ele.URL}`)}>
                  <div className="blog-card">
                    <AnimatedImageWithOpacity
                      className="img-item"
                      src={ele.attachments[0]?.image}
                      width="400"
                      height="300"
                      alt="impero-blog"
                      loading="lazy"
                    />
                    <div className="card-body">
                      <span className="category-text">{ele.categories[0]?.name}</span>
                      <div className="main-title">{ele.title}</div>
                      <div className="link-text">
                        Read More
                        <svg width="18" height="19" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5 4.738H6.216a.563.563 0 1 1 0-1.125h7.847a.562.562 0 0 1 .562.563v7.875a.562.562 0 0 1-1.125 0V4.738Z" />
                          <path d="M13.664 3.778a.563.563 0 1 1 .796.796l-9.562 9.563a.563.563 0 1 1-.797-.797l9.563-9.562Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default BlogList;