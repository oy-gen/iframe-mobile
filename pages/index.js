import styled from 'styled-components';

export default function Home() {
  return (
    <IframeWrapper>
      <StyledIframe src="https://capstone-project-78it4ns3z-oy-gen.vercel.app/"/>
      </IframeWrapper>
  );
}

const StyledIframe = styled.iframe`
border-style: none;
  width: 375px;
  height: 667px;
`;

const IframeWrapper =styled.body `
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
`