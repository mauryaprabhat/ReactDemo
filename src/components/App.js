import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch,Routes, Route} from 'react-router-dom';
import { Card } from './Card';
import { Header } from "./Header";
import{ ContactCard } from "./ContactCard";
import {ContactList} from "./ContactList";
import{AddContact} from "./AddContact";


// const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/posts/1";
// const goRestURL = 'https://gorest.co.in/public/v2/todos';

// function callApi(){
//   //alert('Btn press from call api!');
//   fetch(goRestURL) 
//   .then(data =>data.json())
//   .then(json=>{
//     alert(JSON.stringify(json[0].title));
//     console.log(JSON.stringify(json));
//   });
// }

// function callApi2(){
//   axios.get(jsonPlaceHolderURL).then((response)=>{
//     console.log(response);
//     alert(response.data.title);
//   });
// }

function App() {
  // const[name,setName] = useState('Tada Init');
  // const [count,setCount] = useState(0); 

  const [contacts,setContact]=useState([]);
  const LOCAL_CONTACT_KEY="ADD_CONTACT";


  // const onCardClicked = () => {
  //   console.log('hello');
  //   alert('onclicke function called from the app component');
  // };
  
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setName('Bob' + Math.random());
  //   }, 3000)
  // },[]);

  // const contacts = [
  //   {
  //     id:1,
  //     name:"Prabhat",
  //     email:"maurya@gmail.com"
  //   },
  //   {
  //     id:2,
  //     name:"Prabhat2",
  //     email:"maurya2@gmail.com"
  //   },
  //   {
  //     id:3,
  //     name:"Prabhat3 ",
  //     email:"maurya3@gmail.com"
  //   }
  // ];
  //   return (
  //   <div className="App">
  //     <header className="App-header">
  //              <p>Test text </p>
  //       <button onClick={callApi}>Call Api</button>
  //       <button onClick={callApi2}>Call Api2</button>
  //       <Card name={name}/>
  //       <div>
  //         <button onClick={()=>setCount(count+1)}>CountMe{count}</button>
  //       </div>
  //     </header>
  //   </div>        
  // );

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContact([...contacts, contact]);
  }

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_CONTACT_KEY));
    if(retrieveContacts){
      setContact(retrieveContacts);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_CONTACT_KEY, JSON.stringify(contacts));
  },[contacts]);



  return(
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/add" element={<AddContact/>}/>
          <Route path="/"  element={<ContactList/>}/>
          
            {/* <AddContact addContactHandler={ addContactHandler}/>
            <ContactList contacts={contacts}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
