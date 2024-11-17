import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import App from "../src/App.css"
import data from "./data";



export default function App2() {
  const cards = data.map(item => {
     return (
      <Card 
        key = {item.id} 
        item = {item}
        // img = {item.coverImg}
        // rating = {item.stats.rating}
        // reviewCount = {item.stats.reviewCount}
        // location = {item.location}
        // title = {item.title}
        // price = {item.price} 
        // openSpots = {item.openSpots}
      />
     )
  })
  return(
    <div>
      <Navbar />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}






















// export default function Appi() {
//   return (
//     <div className="nav--bar">
//       <Navbar /> 
//       <Card 
//        img = "katie.png"
//        rating = "5.0"
//        reviewCount = {6}
//        country = "USA"
//        title = "Life lessons with Katie Zaferas"
//        price = {136}
//       />
//     </div>
//   )
// }





// import Contact from "./components/Contact"
// export default function App() {
//     return (
//         <div className="contacts">
//             <Contact 
//                img="./images/phone-icon.png"
//                name="Mr.Whiskerson"
//                phone="(212) 555-1234"
//                email="mr.whiskaz@catnap.meow"
//             />

//             <Contact 
//                img="./images/fluffykins.png"
//                name="Fluffykins"
//                phone="(212) 555-2345"
//                email="fluff@me.com" 
//             />

//             <Contact 
//                img="./images/felix.png"
//                name="Felix"
//                phone="(212) 555-4567"
//                email="thecat@hotmail.com"
//             />

//             <Contact 
//                img="./images/pumpkin.png"
//                name="Pumpkin"
//                phone="(0800) CAT KING"
//                email="pumpkin@scrimba.com" 
//             />

//         </div>
//     )
// }
            // <div className="contact-card">
            //     <img src="./images/mr-whiskerson.png"/>
            //     <h3>Mr. Whiskerson</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(212) 555-1234</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>mr.whiskaz@catnap.meow</p>
            //     </div>
            // </div>
            
            // <div className="contact-card">
            //     <img src="./images/fluffykins.png"/>
            //     <h3>Fluffykins</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(212) 555-2345</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>fluff@me.com</p>
            //     </div>
            // </div>
            
            // <div className="contact-card">
            //     <img src="./images/felix.png"/>
            //     <h3>Felix</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(212) 555-4567</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>thecat@hotmail.com</p>
            //     </div>
            // </div>
            
            // <div className="contact-card">
            //     <img src="./images/pumpkin.png"/>
            //     <h3>Pumpkin</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(0800) CAT KING</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>pumpkin@scrimba.com</p>
            //     </div>
            // </div>



            
            
            // import jokesData from "./jokesData";
            // import Joke from "./components/Joke"
            
            // export default function App1(){
            //   const jokeElements = jokesData.map(joke =>{
            //     return <Joke setup = {joke.setup} punchline = {joke.punchline} />
            //   })
            
            //   return(
            //     <div>
            //       {jokeElements}
            //     </div>
            //   )
            // }
// import Joke from "./components/Joke"
// export default function App(){
//   return(
//     // <div className="thamasha">
//     //   <Joke
//     //     setup = "I got my daughter a fridge for her birthday"
//     //     punchline = "I can't wait to see her face light up when she opens it"
//     //   />

//     //   <Joke
//     //     setup = "How did the hacker escape the police"
//     //     punchline = "He just ransomware"
//     //   />

//     //   <Joke
//     //     setup = "Why don't pirates travel on mountain roads?"
//     //     punchline = "Scurvy."
//     //   />

//     //   <Joke
//     //     setup = "Why does bees stay in the hive in the winter?"
//     //     punchline = "Swarm."
//     //   />

//     //   <Joke
//     //     setup = "What's the best thing about Switzerland?"
//     //     punchline = "I don't know, but the flag is a big plus!"
//     //   />

//     // </div>
//   )
// }
