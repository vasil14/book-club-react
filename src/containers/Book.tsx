import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBookContext from "../context/BookContext";
import { Row, Col } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Book = () => {
  const { getBook, book }: any = useBookContext();
  const { slug } = useParams();

  useEffect(() => {
    getBook(slug);
  }, []);

  return (
    <div
      style={{ maxWidth: "1440px", marginInline: "auto", paddingTop: "50px" }}
    >
      <Row style={{ width: "100%" ,display: "flex"}}>
        <Col span={6} style={{paddingRight: '40px'}}>
          <Swiper style={{marginInline: 'auto'}}>
            {book?.covers?.map((img: any) => {
              return (
                <SwiperSlide key={img?.url}>
                  {book.covers && (
                    <img src={img?.url} alt={book?.title + "cover"} style={{width: '100%'}}/>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
        <Col span={12} style={{paddingRight: '40px'}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingRight: "50px",
              alignContent: "center",
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
              {book?.title}
            </div>
            <div>{book?.author}</div>
            <div>{book?.description}</div>
          </div>
        </Col>

        <Col span={6}>
          <div style={{ border: "solid 1px black" }}>
            <div>
              <div>
                <img
                  src={book?.cover}
                  alt={book?.title + "cover"}
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
