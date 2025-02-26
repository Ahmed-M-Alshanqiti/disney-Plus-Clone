import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { app } from '../firebase'; // Ensure this path is correct
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Correct imports

// Define the interface for movie data
interface MovieData {
  title?: string;
  backgroundImg?: string;
  titleImg?: string;
  subTitle?: string;
  description?: string;
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px); /* Fixed typo */
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249); /* Fixed rgb syntax */
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function Detail() {
  const db = getFirestore(app); // Initialize Firestore
  const { id } = useParams<{ id: string }>(); // Get the movie ID from the URL
  const [detailData, setDetailData] = useState<MovieData>({}); // Use the MovieData interface
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    if (!id) {
      setError("Invalid movie ID");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const movieRef = doc(db, "movies", id); // Reference to the movie document
        const movieSnap = await getDoc(movieRef); // Fetch the document

        if (movieSnap.exists()) {
          setDetailData(movieSnap.data() as MovieData); // Set the movie data
        } else {
          setError("No such document in Firebase 🔥");
        }
      } catch (error) {
        setError("Error fetching document: " + (error as Error).message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [db, id]); // Add db and id to the dependency array

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or placeholder
  }

  if (error) {
    return <div>{error}</div>; // Show an error message
  }

  return (
    <Container>
      <Background>
        <img alt={detailData?.title} src={detailData?.backgroundImg} /> {/* Optional chaining */}
      </Background>

      <ImageTitle>
        <img alt={detailData?.title} src={detailData?.titleImg} /> {/* Optional chaining */}
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData?.subTitle}</SubTitle> {/* Optional chaining */}
        <Description>{detailData?.description}</Description> {/* Optional chaining */}
      </ContentMeta>
    </Container>
  );
}

export default Detail;