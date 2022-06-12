import "./App.css";

const Header = ({ title }) => {
  return (
    <header>
      <h1>
        <a href="/">{title}</a>
      </h1>
    </header>
  );
};
const Nav = (props) => {
  for (let i = 0; i < props.topics.length; i++) {
    const lis = [];
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/" + t.id}>{t.title}</a>
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
      <Header title="REACT" body="Hello, Web" />
      <Nav topics={topics} />
      <Article />
    </div>
  );
}

export default App;
