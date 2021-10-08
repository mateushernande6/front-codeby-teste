import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: white;

  .header {
    width: 100%;
    border-bottom: 1px solid #b5b4b4;
    padding: 20px;
    box-sizing: border-box;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  .bodyItems {
    width: 100%;
    padding: 15px 20px;
    border-bottom: 1px solid #b5b4b4;
    box-sizing: border-box;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    h3 {
      margin: 20px 0 15px 0;
    }
  }

  .frete {
    text-align: center;
    background-color: #ccf9cc;
    width: inherit;
    font-weight: 400;
    margin: 0 auto;
    padding: 10px;
    border-radius: 25px;
    color: green;
    margin-bottom: 15px;
  }

  .footer {
    border-top: 1px solid #b5b4b4;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;

    button {
      border: none;
      outline: none;
      padding: 20px;
      font-size: 20px;
      width: 100%;
      border-radius: 15px;
      font-weight: bold;
      color: #fff;
      background-color: blue;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: 1s all ease;
    }

    button::before {
      background: green;
      content: "";
      transform: translate(-50%, -50%) rotate(45deg);
      transition: all 0.6s ease;
    }
    button:hover {
      height: 380%;
      background: green;
    }
  }
`;
