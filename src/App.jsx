import './App.css';
import Card from './Card';
import CardData from './CardData';
function App(props) {
  return (
    <div>
      <h1> Card Usinng Props</h1>
        {/* <div className="cardcontainer"> */}

      {
        CardData.map((value) => {
          return (
            <Card
              imgSrc={value.img_src}
              name={value.name}
              //  title = {value.title}
              links={value.link}
            />
          )
        })
      }
    {/* </div> */}
  </div>
  )
}
export default App;