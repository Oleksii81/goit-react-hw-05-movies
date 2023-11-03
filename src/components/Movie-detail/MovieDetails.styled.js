import styled from "styled-components";

export const MovieDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px;
  padding: 8px;
  .back-to-main-link {
    width: 130px;
    text-decoration: none;
    padding: 8px 16px;
    color: #1d2475;
    font-weight: 500;
    color: white;
    background-color: #1d2475;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .back-to-main-link:hover {
        border-color: #daf52e;
        box-shadow: 0px 3px 20px rgb(247, 243, 4);
  }
  .movie-info-wrapper {
    display: flex;
    gap: 24px;
  }
  .movie-info {
  display: flex;
  flex-direction: column;
  width: 320px;
}

.ganres {
  display: flex;
  gap: 16px;
  list-style-type: none;
  padding: 0;
}

.owerview {
  width: 360px;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  list-style-type: none;
}
`