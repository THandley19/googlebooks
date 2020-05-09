import React, { Component } from "react";
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/Books";
import axios from "axios";
import RemoveButton from "../../components/RemoveButton";

class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true,
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios
      .get("/api/books")
      .then((res) => {
        this.setState({ savedBooks: res.data });
      })
      .catch((err) => console.log(err));
  };

  deleteFromDB = (id) => {
    axios
      .delete("/api/books/" + id)
      .then(() => {
        this.getBooks();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ? (
              <BookList>
                {this.state.savedBooks.map((book) => {
                  console.log(book);
                  return (
                    <div>
                      <BookListItem
                        key={book._id}
                        title={book.title}
                        authors={book.authors}
                        link={book.link}
                        synopsis={book.synopsis}
                        thumbnail={book.thumbnail}
                      />
                      <RemoveButton
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  );
                })}
              </BookList>
            ) : (
              <h1>You have no books saved.</h1>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;
