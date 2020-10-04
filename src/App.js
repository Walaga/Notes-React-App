import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Note from "./Note/Note";

function App() {
  return (
    <div className="App">
      
      <Navigation />
      <div className="row">
      <Note title={"Jack and the beanstalk"}
      body={"A children's story. Jack, a poor country boy, trades the family cow for a handful of magic beans, which grow into an enormous beanstalk reaching up into the clouds. Jack climbs the beanstalk and finds himself in the castle of an unfriendly giant"}
      image={"https://d1e4pidl3fu268.cloudfront.net/f61b5dce-5fa3-4d8e-921d-98bc10c468b3/JacknStalk.crop_655x491_21,0.preview.jpg"}/>
      <Note title={"The Beauty and the Beast"}
      body={"Disney's version tells the tragic tale of Belle and a prince transformed into a hairy beast. It originates from a 16th Century romance between a French court servant and a man with incurable hair growth."}
      image={"https://cdn.images.express.co.uk/img/dynamic/36/590x/BEAUTY-AND-THE-BEAST-804166.jpg"}/>
      <Note title={"Little Red riding Hood"}
      body={"Little Red Riding Hood is a European fairy tale about a young girl and a Big Bad Wolf. Its origins can be traced back to the 10th century to several European folk tales, including one from Italy called The False Grandmother. The best known version was written by Charles Perrault."}
      image={"https://i1.wp.com/quantitrader.com/wp-content/uploads/2019/03/little-red-hiding-hood.jpg"}/>
      <Note title={"Cinderella"}
      body={"After the untimely death of her father, Ella is troubled by her stepmother and stepsisters. However, her life changes forever after dancing with a charming stranger at the Royal Ball."}
      image={"https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000309322940.jpg"}/>
      <Note title={"Puss in Boots"}
      body={"Puss teams up with his friends, Humpty Dumpty and Kitty Softpaws, in order to defeat two criminals, Jack and Jill, and retrieve the magical beans that they possess."}
      image={"https://static.onecms.io/wp-content/uploads/sites/20/2011/10/puss-boots-300.jpg"}/>
      <Note title={"Snow White"}
      body={"A popular version of Snow White is the 1937 American animated film Snow White and the Seven Dwarfs by Walt Disney. Disney's variation of Snow White gave the dwarfs names and included a singing Snow White."}
      image={"https://images-na.ssl-images-amazon.com/images/I/516TmpEF-IL._SX362_BO1,204,203,200_.jpg"}/>
  

      </div>
      
    </div>
  );
}

export default App;
