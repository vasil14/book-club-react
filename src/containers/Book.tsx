import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBookContext from "../context/BookContext";
import { Row, Col } from "antd";

const Book = () => {
  
  const {getBook, book}: any = useBookContext();
  const {slug} = useParams();

  console.log(book?.id);
  
  
  useEffect(() => {
    getBook(slug)
  }, [])
  
  return (
    <div style={{maxWidth:'1440px', marginInline: 'auto'}}>
        <Row>
            <Col span={18} style={{display:'flex', gap:'40px'}}>
                <div>
                    <img src={book?.cover} alt={book?.title + 'cover'} />
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <div>{book?.title}</div>
                    <div>{book?.author}</div>
                    <div>{book?.description}</div>
                </div>
            </Col>  
            <Col span={6}>
                <div style={{border:'solid 1px black'}}>
                    <div>
                        <div>
                            <img src={book?.cover} alt={book?.title + 'cover'} style={{width:'100px'}}/>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Book