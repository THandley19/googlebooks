import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Row, Col } from "../../components/Grid";
import { BookList } from "../../components/Books";
import BookListItem from "../../components/Books";
import AddBookButton from "../../components/AddBookButton";

class Search extends Component {
  state = {
    bookSearch: "",
    books: [],
  };

  handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then((res) => this.setState({ books: res.data.items }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center"></h1>
              ) : (
                <BookList>
                  {this.state.books.map((book) => {
                    return (
                      <div>
                        <BookListItem
                          key={book.id}
                          title={book.volumeInfo.title}
                          authors={book.volumeInfo.authors}
                          href={book.volumeInfo.canonicalVolumeLink}
                          description={book.volumeInfo.description}
                          thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        />
                      </div>
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
