import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Avatar(props) {
  return (
    <img className="avatar" src={props.imageName} alt={props.alt} />
  );
}

function Intro(props) {
  return (
    <div className="intro">
      <h2>{props.name}</h2>
      <p>{props.summary}</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skills">
      <Skill skill="React" />
      <Skill skill="Node.js" />
      <Skill skill="Express.js" />
      <Skill skill="MongoDB" />
    </ul>
  );
}

function Skill(props) {
  return <li>{props.skill}</li>;
}

function App() {
  return (
    <div>
      <Avatar imageName='/yousef.JPG' alt='Yousef Picture' />
      <Intro
        name='Yousef Ibrahim'
        summary='Fullstack developer skilled in MERN stack (MongoDB, Express, React, Node.js)'
      />
      <SkillList></SkillList>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);