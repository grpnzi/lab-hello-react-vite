import icon1 from './../assets/icon1.png'

function Card1() {
    return (
        <div className='card'>
            <img src={icon1} alt="icon1" />
            <h1>Declarative</h1>
            <p>React makes it painless to create
                interactive UIs.
            </p>
        </div>
    );
}

export default Card1;