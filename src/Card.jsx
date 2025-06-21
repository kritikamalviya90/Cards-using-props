import './App.css';
function Card(props) {
    return (
        <div className="cardcontainer">
            <div className='card'>
                <img src={props.imgSrc} alt="" srcset="" className='cardimg' />

                <div>
                    <span className='cardsnap'>{props.title}</span>
                    <h3 className='cardh3'>{props.name} </h3>
                    <a href={props.links} className='carda'>
                        <button>Click Here....</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Card;