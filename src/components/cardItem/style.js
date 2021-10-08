import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerImg = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #b5b4b4;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const ContainerInfo = styled.div`
  margin-left: 20px;
  h3 {
    font-size: 16px;
  }

  .price {
    font-weight: 400;
    font-size: 14px;
    color: #b5b4b4;
  }

  .salePrice {
    font-weight: 400;
  }
`;
