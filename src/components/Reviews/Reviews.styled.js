import { styled } from "styled-components";

export const ReviewsStyled = styled.ul`
list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

.reviews-item {
    padding-left: 8px;
    padding-right: 8px;
  border: 2px solid #1d2475;
  border-radius: 0.6em;
  box-shadow: inset 0 0 10px rgba(20, 121, 234, 0.4),
    0 0 9px 3px rgba(20, 121, 234, 0.1);
}
`