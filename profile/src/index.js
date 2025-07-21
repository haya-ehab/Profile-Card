import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";



function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="kirby.jpg" alt="kirby" />;
  
}

function Intro() {
  return(
    <div>
   <h1>Kirby</h1>
   <p>
    Hi i am Kirby and i love noodles and playing with bulbasaur and i love sleeping all day and doing nothing 
   </p>
   </div>
  );
}

function SkillList() {
 return(
  <div className="skill-list">
  <Skill skill="Eating" emoji="😋" color="red" />
  <Skill skill="Bulbasaur" emoji="🥰" color="pink" />
   <Skill skill="Sleeping" emoji="😴" color="blue" />
    <Skill skill="playing" emoji="🎴" color="yellow" />
    </div>
 );
}

function Skill(props) {
  return (
 <div className="skill" style={{ backgroundColor: props.color}}>
  <span>{props.skill}</span>
  <span>{props.emoji}</span>
  </div>
  );
}




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);




root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
