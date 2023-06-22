import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useBookContext from "../context/BookContext";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Book {
  id: number;
  title: string;
  slug: string;
  cover: string;
}

interface ContextProps {
  getBookByCategory: (category?: string) => void;
  booksCategory: Book[];
}

const CategoryBooks = () => {
  const { getBookByCategory, booksCategory }: ContextProps = useBookContext();
  const { category } = useParams();

  useEffect(() => {
    getBookByCategory(category);
  }, []);

  return (
    <div
      style={{ maxWidth: "1440px", marginInline: "auto", paddingTop: "50px" }}
    >
      <Row>
        {Object.values(booksCategory)?.map((book: any) => {
          return (
            <Col
              key={book?.id}
              span={6}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <h3>{book?.title}</h3>
              <Swiper 
                navigation={true}
                style={{width: '100%'}}
              >
                {book?.covers?.map((img: any) => {
                  return (
                    <SwiperSlide key={img?.url}>
                      <Link  to={`/book/${book?.slug}`}>
                        <img src={img?.url} alt="" />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoryBooks;
