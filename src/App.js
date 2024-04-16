import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "ramen";
  const [title, setTitle] = useState(["남자 코트 추천", " 코트 추천", " 추천"]);
  let [likes, setLikes] = useState([0, 0, 0]);
  const [logo, setLogo] = useState("ReactBlog");
  let [modal, setModal] = useState(false);
  let [num, setNum] = useState(0);
  let [text, setText] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          copy.sort();
          setTitle(copy);
        }}
      >
        눌러보셈
      </button>
      {/* <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            ✨
          </span>{" "}
          {likes}
        </h4>

        <p>2.17 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2.17 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>2.17 발행</p>
      </div> */}

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setNum(i);
              }}
            >
              {a}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likes];
                  copy[i] = copy[i] + 1;
                  setLikes(copy);
                }}
              >
                ✨
              </span>
              {likes[i]}
            </h4>

            <p>2.17 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      />
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(text);
          setTitle(copy);
        }}
      >
        클릭해봐
      </button>

      {modal ? <Modal num={num} title={title} setTitle={setTitle} /> : null}
      <Modal2 />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
      // onClick={() => {
      //   let copy = [...props.title];
      //   copy[0] = "여자 코트 추천";
      //   props.setTitle(copy);
      // }}
      >
        글수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "kim",
      age: 20,
    };
  }

  render() {
    return (
      <div>
        {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
