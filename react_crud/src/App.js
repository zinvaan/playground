import "./App.css";

const Header = (props) => {
  console.log("props", props);
  return (
    <header>
      <h1>
        {/*
        onClick의 callback 함수로 들어간 함수가 호출될 때
        리액트는 이벤트 객체를 첫번째 파라미터로 전달해준다.
        */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
};
const Nav = (props) => {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          href={"/read/" + t.id}
          id={t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(e.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
};
const Article = () => {
  return (
    <article>
      <h2>welcom</h2>
      hello, web
    </article>
  );
};
function App() {
  const topics = [
    { id: 1, title: "html", desc: "html is ..." },
    { id: 2, title: "css", desc: "css is ..." },
    { id: 3, title: "javascript", desc: "javascript is ..." },
  ];
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("Header");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      />
      <Article />
    </div>
  );
}

export default App;
