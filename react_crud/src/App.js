import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1>
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
    <Article>
      <h2>welcom</h2>
      hello, web
    </Article>
  );
};
function App() {
  const mode = "WELCOME";
  const topics = [
    { id: 1, title: "html", desc: "html is ..." },
    { id: 2, title: "css", desc: "css is ..." },
    { id: 3, title: "javascript", desc: "javascript is ..." },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB" />;
  } else if (mode === "READ") {
    content = <Article title="Read" body="Hello, Read" />;
  }
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
      {content}
    </div>
  );
}

export default App;
