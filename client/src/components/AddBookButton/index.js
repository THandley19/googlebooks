import React from "react";
import Button from "../Button";
import axios from "axios";

class AddBookBtn extends React.Component {
  postToDB = (book) => {
    var dbBook = {
      title: book.title,
      authors: book.authors,
      synopsis: book.synopsis,
      thumbnail: book.thumbnail,
      link: book.link,
    };

    axios
      .post("/api/books", dbBook)
      .then(() => alert("You have successfully saved the book."))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.postToDB(this.props);
          }}
        >
          Save Book
        </Button>
      </div>
    );
  }
}

export default AddBookBtn;
