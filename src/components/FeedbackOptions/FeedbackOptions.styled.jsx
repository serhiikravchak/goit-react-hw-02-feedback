import styled from '@emotion/styled'



export const Btn = styled.button`
  min-width: 60px;
  height: 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 10px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  &:hover, &:focus{
    background-color: blue;
    color: white;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;