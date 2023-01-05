import styled from "@emotion/styled";

export const Statistic = styled.section`
 width: 350px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

`
export const Title = styled.h2`
text-align: center;
font-weight: 700;
font-size: 25px;
padding-top: 10px;
margin-bottom: 10px;
text-transform: uppercase;
color: #99a2a8;
`
export const List = styled.ul`
display: flex;
margin: 0px;
padding: 0px;
background-color: rgba(0, 0, 0, 0.04);
`
export const Item = styled.li`
display: flex;
flex-direction: column;
 padding-top: 10px;
  padding-bottom: 10px;
  width: 70px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white;
background-color: violet;
`

export const Label = styled.span`
display: block;
 font-size: 13px;
`

export const Percentage = styled.span`
  font-size: 20px;
  font-weight:700;
`