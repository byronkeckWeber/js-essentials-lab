import styled from "styled-components";

//Adding the .jsx file as a styled componentin the .jsx file
const TodoItem = styled.li`


  margin: 1rem 0;
  background: #492365;
  color: white;
  padding: 1rem;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    //a transparent border so the li doesn't move when hovering over it
  border: 3px solid transparent;

    &:hover {
    border: 3px solid gold;
    background: #5f4670;
    }
`;

// Original way to add li as a seperate .jsx file
/*const TodoItem = props => {

  return (
    <li onClick={props.onClick}>
        {props.children}
    </li>
  );
};*/

export default TodoItem;
