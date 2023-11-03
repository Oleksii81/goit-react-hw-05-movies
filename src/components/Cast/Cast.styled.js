import styled from "styled-components";

export const CastStyled = styled.ul`
display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
  list-style-type: none;
  padding: 0;
  .cast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  margin: 0;

  border: 2px solid #1d2475;
  border-radius: 0.6em;
  box-shadow: inset 0 0 10px rgba(20, 121, 234, 0.4),
    0 0 9px 3px rgba(20, 121, 234, 0.1);
}

.name-title {
  margin: 6px 0;
}
.character {
  margin: 6px 0;
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100500;
}
`