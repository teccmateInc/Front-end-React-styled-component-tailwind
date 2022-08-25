import styled from 'styled-components';
 
export const Container = styled.div`
padding: 50px 60px;
background: #f6f9fc;
color: #0A2540;
font-weight: 400;
font-style: normal;
line-height:24px;
font-size: 15px;
font-family: 'Graphik';

@media (max-width: 1000px) {
  padding: 70px 30px;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;


@media (max-width: 1000px){
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`

export const Column = styled.div`
padding-top: 8px;
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`

export const Link = styled.a`
color: #0A2540;
line-height: 24px;
text-decoration: none;
font-size: 15px;
margin-bottom: 5px;
cursor: pointer;

&:hover {
color: #42a5f5;
transition: 200ms ease-in;
}
`;

export const Title = styled.p`
font-size: 15px;
font-style: normal;
font-weight: bold;
margin-bottom: 10px;
color: #0A2540;
`;

export const Horizontal = styled.div`
border: 0;
height: 0;
border-top: 1px solid rgba(0, 0, 0, 0.1);
border-bottom: 1px solid rgba(255, 255, 255, 0.3);
margin-top: 30px;
`;

export const Social = styled.div`
display: flex;
margin-top: 25px;
gap: 20px;
@media (max-width: 630px){
  display: none;
}
`;

export const Group = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

export const Text = styled.p`
margin: 0;

`