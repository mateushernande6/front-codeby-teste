import { CardItem } from "../../components/cardItem";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "./style";

export const Carrinho = () => {
  const [datas, setDatas] = useState();
  const [total, setTotal] = useState();

  const formatNum = (num) => {
    num = num.toString();

    switch (num.length) {
      case 2:
        num = num.split("");
        num.unshift(0);
        num.splice(1, 0, ",");
        break;
      case 3:
        num = num.split("");
        num.splice(1, 0, ",");
        break;

      case 4:
        num = num.split("");
        num.splice(2, 0, ",");
        break;

      default:
        return num;
    }
    return num.join("");
  };

  const getProduct = () => {
    axios
      .get("https://api-codeby-teste.herokuapp.com/compra-mais-10")
      .then((res) => {
        setDatas(res.data[0]["items"]);
        setTotal(
          res.data[0]["totalizers"][0]["value"] +
            res.data[0]["totalizers"][1]["value"]
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <div className="header">Meu carrinho</div>

      <div className="bodyItems">
        {datas &&
          datas.map((data, index) => (
            <CardItem
              key={index}
              name={data.name}
              price={formatNum(data.price)}
              salePrice={formatNum(data.sellingPrice)}
              urlImg={data.imageUrl}
            />
          ))}
      </div>

      <div className="total">
        <h3>Total</h3>
        <h3>R$ {formatNum(parseInt(total))}</h3>
      </div>

      {total > 1000 && (
        <div className="frete">Parabéns, sua compra tem frete grátis !</div>
      )}

      <div className="footer">
        <button>Finalizar compra</button>
      </div>
    </Container>
  );
};
