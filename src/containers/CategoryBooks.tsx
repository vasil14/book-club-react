import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useBookContext from "../context/BookContext";
import { Row, Col } from "antd";


interface Book {
  id: number;
  title: string;
  slug: string;
  cover: string;
}

interface ContextProps {
  getBookByCategory: (category: string) => void,
  booksCategory: Book[]
}

const CategoryBooks = () => {
  const { getBookByCategory, booksCategory }: ContextProps = useBookContext();
  const { category } = useParams();

  console.log(booksCategory[0]?.title);

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
              <Link to={`/book/${book?.slug}`}>
                <img src={book?.cover} alt="" style={{ maxWidth: "250px", width:'100%', height:'100%',objectFit:'contain' }} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoryBooks;
