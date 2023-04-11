function Car(props){
    return <li>[{props.id}] {props.brand} {props.price} {props.char}</li>;
}

export default function Garage(){
    const cars =[
        {id:1, brand:'Ramborgini', price:45000, char: 'Good design'},
        {id:2, brand:'BMW', price:3400, char: 'Popular'}
        ,{id:3, brand: 'Audi', price:5000, char: 'new one'}];
    return(
        <>
        <h1>Car List</h1>
        <ul>
        {cars.map((car)=><Car key={car.id} id={car.id} brand={car.brand} price={car.price} char={car.char}/>)}
        </ul>
        </>
    );
}
