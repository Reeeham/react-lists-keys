import logo from './logo.svg';
import './App.css';


const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
  const sidebar = (
    <ul className="flexItem">
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div className="flexItem" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div  className="App-header">
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Blog posts={posts}/>
      </header>
    </div>
  );
}

export default App;
