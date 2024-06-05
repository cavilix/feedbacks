import styled from 'styled-components';

export const SectionFeed = styled.section`
display: flex;
flex-direction: row;
background-color: white;
justify-content:center ;
align-items: center;

`
export const DivImage = styled.div`
margin:20px;


`
export const Imagemfeed = styled.img`
border-radius: 20px;
width: 600px;
height: 550px;
margin-right: 150px;
`
export const DivForm = styled.div`

`
export const H1Div = styled.h1`
margin-left: 50px;
font-size: 20px;

`
export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 20px;
  padding: 30px;
  border-radius: 20px;
`;
export const Label = styled.label`
font-size: 16px;
color: #242666;


`

export const Input = styled.input`
  display: flex;
  margin-top:5px;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #E3E4F0;
  background-color: #E3E4F0;
`;
export const DivInput = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  margin-bottom:20px ;
`
export const InputU = styled.input`
  display: flex;
  margin-top:5px;
  align-items: center;
  padding: 10px;
  width: 125px;
  border-radius: 10px;
  border: 1px solid #E3E4F0;
  background-color: #E3E4F0;
`;
export const InputT = styled.input`
  display: flex;
  margin-top:5px;
  align-items: center;
  padding: 10px;
  width: 125px;
  border-radius: 10px;
  border: 1px solid #E3E4F0;
  background-color: #E3E4F0;
`;
export const DivInputU = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
export const DivInputT = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Button = styled.button`
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #0FA943;
  color: #fff;
  border: none;
  width: 320px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
