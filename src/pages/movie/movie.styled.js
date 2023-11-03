import styled from "styled-components";

export const MoviesContainer = styled.main`
  .search-movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 24px;
    padding: 24px;
  }
  .search-movie-item {
    background-color: #1d2475;
    border-radius: 15px;
    border-color: transparent;
    overflow: hidden;
    list-style: none;
  }
  .search-movie-item:hover {
    border-color: #daf52e;
    box-shadow: 0px 3px 20px rgb(247, 243, 4);
  }

  .search-movie-item:hover::before {
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
  .original-title {
    font-weight: 700;
    text-align: center;
    min-height: 48px;
    width: 210px;
    color: white;
    background-color: #1d2475;
    margin: 0;
    align-items: center;
    display: flex;
    justify-content: center;
}
.search-movie-link {
    text-decoration: none;
}
`