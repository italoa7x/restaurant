import styled from "styled-components";

export const SingleItem = styled.div`
  font-family: "Montserrat", sans-serif;
  transition: all 0.4s linear;

  .item-img {
    height: 440px;
    width: 440px;
    object-fit: cover;
  }
  h1 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  p {
    color: #7a7a7a;
    line-height: 1.8;
  }
  .cart-item {
    position: relative;
    margin-top: 1.5rem;
    h2 {
      font-family: "Bebas Neue", cursive;
      letter-spacing: 2px;
      span {
        position: absolute;

        left: 30%;
        border: 1px solid #bbbbbb;
        padding: 0.5rem;
        border-radius: 30px;
        font-size: 2rem;
      }
      input {
        text-align: center;
        font-size: 2.2rem;
        width: 60px;
        border: 1px solid transparent;
      }
      .fa-icon {
        margin: 0 0.8rem;
        cursor: pointer;
        font-family: "Montserrat", sans-serif;
      }
      .plus {
        color: #f91944;
      }
    }
  }
  .btn-custom {
    background-color: #f91944;
    margin-top: 1.6rem;
    border-radius: 30px;
    color: #ffffff;
    .fa-cart {
      margin-right: 0.5rem;
      margin-top: -5px;
    }
  }
  .sub-menu {
    margin: 2rem;
    height: 150px;
    width: 445px;
    .single-img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      margin: 0 1rem;
      cursor: pointer;
    }
    .fa-angle {
      font-size: 1.3rem;
      color: #f91944;
    }
  }
`;

export const BtnStyle = styled.div`
  font-family: "Roboto", cursive;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
`;
