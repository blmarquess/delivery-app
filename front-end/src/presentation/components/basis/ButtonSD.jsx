import styled from 'styled-components';

const ButtonSD = styled.button`align-self: center;
  background: ${(props) => props.bgcolor || '#036B52'};
  border: solid 1px rgb(211, 219, 213);
  border-radius: ${(props) => props.radius || '0.8rem'};
  bottom: ${(props) => props.bottom || '0'};
  color: ${(props) => props.textcolor || '#fafaf9'};
  cursor: pointer;
  font-size: ${(props) => props.fontesize || '22px'};
  font-weight: 600;
  height: ${(props) => props.hsize || 'auto'};
  left: ${(props) => props.left || 'none'};
  margin: ${(props) => props.msize || '0'};
  outline: none;
  padding: ${(props) => props.psize || '0 1rem'};
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || 'none'};
  text-align: center;
  top: ${(props) => props.top || 'none'};
  width: ${(props) => props.wsize || 'auto'};

  &:disabled {
    opacity: 0.6;
  }

  &:focus {
    outline: '#036B52';
  }
`;

export default ButtonSD;
