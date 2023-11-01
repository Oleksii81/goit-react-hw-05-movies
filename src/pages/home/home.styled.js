import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
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
}
.popular-title {
  padding: 0 24px;
}

.top-item {
  display: flex;
  flex-direction: column;
}
`