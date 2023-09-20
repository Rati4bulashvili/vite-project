function ListGroup() {

  const Citylist = ['Prague', 'Berlin', 'Amsterdam', 'Brussels'];  

  return (
    <ul className="list-group">

      {Citylist.map(item=>(
        <li className="list-group-item" key={item}>{item}</li>
      ))}

      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
}

export default ListGroup;
