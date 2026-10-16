import styled from 'styled-components';

const SubmitButton = styled.button`
  background-color: lightgreen;
  color: darkgreen;
  border: 2px solid green;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
 
  &:hover {
    background-color: mediumseagreen;
    color: white;
  }
`;
 
export default SubmitButton;