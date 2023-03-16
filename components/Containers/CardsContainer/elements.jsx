import styled from "styled-components";

export const StyledCardsContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
