import Message from './Message';
import ListGroup from './components/ListGroup';


function App(){
  const name = 'Mosh';
  if(name){
    return <div>
      <Message/>
      <div className="name">Hello {name}</div>
      <ListGroup/>
    </div>
  }
  else{
    return <div className="greeting">Hello Someone</div>
  }
}

export default App;