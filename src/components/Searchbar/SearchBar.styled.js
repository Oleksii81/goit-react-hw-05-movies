import { styled } from "styled-components";

export const SearchBarStyled = styled.form`
    display: flex;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    .search-input {
        margin-right: 24px;
        height: 32px;
        min-width: 180px;
        padding-left: 8px;
        border-radius: 5px;
        border-color: transparent;
        background-color: #85afe4c0;
        color: #1d2475;
        align-items: center;
        transition: width 1,5s ease-in-out;
    }
    .search-input:focus {
        width: 300px;
    }
    .search-input:hover {
    border-color: #daf52e;
    box-shadow: 0px 3px 20px rgb(247, 243, 4);
    }
    .search-input:hover::before {
    opacity: 1;
    animation: glowing-border 1s ease-out infinite alternate;
  }

  @keyframes glowing-border {
    0% {
      box-shadow: 0 0 5px #daf52e;
    }
    100% {
      box-shadow: 0 0 20px 10px #daf52e;
    }
  }
  .search-btn {
    border-radius: 5px;
    border-color: transparent;
    background-color: #1d2475;
    font-weight: 500;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
  }
  .search-btn:hover {
    border-color: #daf52e;
    box-shadow: 0px 3px 20px rgb(247, 243, 4);
    }
    .search-btn:hover::before {
    opacity: 1;
    animation: glowing-border 1s ease-out infinite alternate;
  }
`