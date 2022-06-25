import styled from 'styled-components';
import useHydration from '../hooks/useHydration';

export default function Home() {
  const hydrated = useHydration();
  return (
    <>
      {hydrated && (
        <IframeWrapper>
          <StyledIframe src="https://capstone-project-bay.vercel.app/" />
        </IframeWrapper>
      )}
    </>
  );
}

const StyledIframe = styled.iframe`
  border-style: none;
  width: 375px;
  height: 667px;
  border-radius: 20px;
`;

const IframeWrapper = styled.body`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
