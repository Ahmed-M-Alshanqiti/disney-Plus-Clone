import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Orignals from "./Orignals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { firestore } from '../firebase'; // Import firestore from firebase.ts
import { collection, onSnapshot } from 'firebase/firestore';
import { setMovies } from "../features/movie/MovieSlice";
import { setLogLevel } from "firebase/firestore";

setLogLevel("debug");

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const moviesCollection = collection(firestore, 'movies');
    console.log("###################", moviesCollection);
    const unsubscribe = onSnapshot(
      moviesCollection,
      (snapshot) => {
        console.log("Snapshot received:", snapshot); // Log the snapshot
        const recommends: any[] = [];
        const newDisney: any[] = [];
        const originals: any[] = [];
        const trending: any[] = [];

        snapshot.docs.forEach((doc) => {
          console.log("Document data:", doc.data()); // Log each document
          switch (doc.data().type) {
            case 'recommend':
              recommends.push({ id: doc.id, ...doc.data() });
              break;
            case 'new':
              newDisney.push({ id: doc.id, ...doc.data() });
              break;
            case 'original':
              originals.push({ id: doc.id, ...doc.data() });
              break;
            case 'trending':
              trending.push({ id: doc.id, ...doc.data() });
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            originals: originals,
            trending: trending,
          })
        );
      },
      (error) => {
        console.error("Firestore listener error:", error); // Log any errors
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Orignals />
      <Trending />
    </Container>
  );
}

export default Home;