import styled from 'styled-components';

const Input = styled.input`background: #F2FFFC;
  border: solid 1px rgba(107, 117, 136, 0.15);
  border-radius: 0.3rem;
  color: rgba(0, 0, 0, 0.9);
  height: 40px;
  margin: ${(props) => props.msize || '0'};
  outline: none;
  padding: 0 1rem;
  width: ${(props) => props.wsize || 'auto'};

  &:focus {
    background: #2FC18C;
    outline: 2.5px #036B52;
    outline-style: solid;
  }
`;

export default Input;
