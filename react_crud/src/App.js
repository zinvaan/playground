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
const Nav = ({ topics }) => {
  console.log("topics: ", topics);
  const titleList = [];
  // const lis = [
  //   <li>
  //     <a href="/read/1">html</a>
  //   </li>,
  //   <li>
  //     <a href="/read/2">css</a>
  //   </li>,
  //   <li>
  //     <a href="/read/3">javascript</a>
  //   </li>,
  // ];
  let lis = titleList.map(() => {
    return (
      <li key={topics.id}>
        <a href={"/read/" + topics.id}>{topics.title}</a>
      </li>
    );
  });
  console.log("titleList:", titleList);
  console.log("lis:", lis);
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
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
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
