import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Title from "../Title";
import { addBook } from '../../actions/Product'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      price: null,
      info: '',
      image: ''
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: this.state.title,
      price: this.state.price,
      info: this.state.info,
      image: this.state.image
    }
    console.log({title: newBook.title,price: newBook.price, info: newBook.info, image: newBook.image });
    this.props.addBook(newBook);
    
  }
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="nav-logo" />
          </Link>
          <h1 className="m-auto">Author-Platform</h1>
        </ProductWrapper>
        <div className="col-10 product-container">
          <Title name="Add" title="Book" />
          <div className="add-product">
            <form onSubmit = {this.onSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">
                    <strong>Title</strong>
                  </label>
                  <input
                    name="title"
                    type="text"
                    class="form-control mb-3"
                    placeholder="Title..."
                    onChange={this.onChange} 
                    value={this.state.title}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">
                    <strong>Price</strong>
                  </label>
                  <input
                    name="price"
                    type="number"
                    class="form-control mb-3"
                    placeholder="Price..."
                    onChange={this.onChange} 
                    value={this.state.price}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">
                  <strong>Book Description</strong>
                </label>
                <textarea
                  name="info"
                  type="text"
                  class="form-control mb-5"
                  placeholder="Book Description...."
                  onChange={this.onChange} 
                    value={this.state.info}
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div class="custom-file">
                  <input
                    name="image"
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={this.onChange} 
                    value={this.state.image}
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mt-3">
                Save
              </button>
            </form>
          </div>
        </div>
        <Title name="Recent" title="Book" />
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.nav`
  background: var(--mainNav);
  ul {
    text-decoration: none;
    list-style-type: none !important;
  }
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    text-decoration: none;
    margin-top: 15px;
  }
`;

export const mapDispatchToProps = (dispatch) => ({
  addBook: ({ title, price, info, image }) => dispatch(
    addBook({title, price, info, image})
  ),
})

const mapStateToProps = state => ({
  newBook: state.book,
  state
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
