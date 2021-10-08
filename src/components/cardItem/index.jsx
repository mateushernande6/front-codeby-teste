import { Container, ContainerImg, ContainerInfo } from "./style";

export const CardItem = ({ name, price, salePrice, urlImg }) => {
  return (
    <Container>
      <ContainerImg>
        <img src={urlImg} alt="" />
      </ContainerImg>

      <ContainerInfo>
        <h3>{name}</h3>
        <p className="price">R$ {price}</p>
        <p className="salePrice">R$ {salePrice}</p>
      </ContainerInfo>
    </Container>
  );
};
