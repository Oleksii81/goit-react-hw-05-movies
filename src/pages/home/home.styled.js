import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
.movie-card {
    border-radius: 15px;
    border-color: transparent;
    overflow: hidden;
    list-style: none;
}
.movie-card:hover {
    border-color: #daf52e;
    box-shadow: 0px 3px 20px rgb(247, 243, 4);
  }

  .movie-card:hover::before {
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
.top-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 24px;
  padding: 24px;
}

.wellcome-title {
  padding: 0 24px;
  color: #1d2475;
}

.top-item {
  display: flex;
  flex-direction: column;
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
`