import { FC, useEffect, useState } from "react";
import {
  ContentArticleHome,
  TextArticleHome,
  TitleHome,
  TextHome,
  ImageArticleHome,
  ImageHome,
} from "./about.styled";
import { ResponseAPI, apiService } from "../../service/apiService";
import { HomeItem } from "../Home/Home";

interface aboutProps {}

const About: FC<aboutProps> = () => {
  const [hasPadding, setHasPadding] = useState(false);
  const [posts, setPosts] = useState<ResponseAPI<HomeItem[]>>();

  useEffect(() => {
    apiService
      .get<ResponseAPI<HomeItem[]>>("home")
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
    const handleScroll = () => {
      setHasPadding(window.scrollY > window.innerHeight - 60);
    };
  }, []);

  return (
    <div>
      Sobre Nós
      {posts?.data.map((post, index) => (
        <ContentArticleHome $reverse={index % 2 > 0}>
          <TextArticleHome>
            <TitleHome>{post.titulo}</TitleHome>
            <TextHome>{post.texto}</TextHome>
          </TextArticleHome>
          <ImageArticleHome>
            <ImageHome
              src={`data:image/jpeg;base64,${post.imagem}`}
              alt="descrição"
            />
          </ImageArticleHome>
        </ContentArticleHome>
      ))}
    </div>
  );
};

export default About;
