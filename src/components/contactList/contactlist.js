import React ,{useState , useEffect} from "react"
import InfiniteScroll from 'react-infinite-scroll-component';

import './contactlist.css'
const ContactList = () =>{
    const[name , setName] = useState([])
    const[page , setpage] = useState(0);
    const[hasMore , sethasMore] = useState(true);
    
    const fetchdata = ()=>{
 if(page >= 91){
    sethasMore(false)
    console.log(page)
    //https://jsonplaceholder.typicode.com/posts/?_limit=10&_page=${page}
 }
       
        fetch(`https://dummyjson.com/users?skip=${page}&limit=10`)
     .then((response) => response.json())
     .then((res) => {console.log(res) 
        setName([...name ,...res.users])});
    }
    const fetchmore = () => {
       
        console.log(hasMore)
        setpage((prev) => prev+10);
        fetchdata(); 
    }
    useEffect(() =>{
        fetchdata()
    },[])
    return(
        <>
        <InfiniteScroll
  dataLength={name.length} //This is important field to render the next data
  next={fetchmore}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
   
>
 <div style={{ minHeight: "100vh" , color: "red" }}>
   {name.map((user , id) => (
     <div className="contactbody">
     <img src={user.image} className="profile"></img> 
    <h2 className="name" >{user.firstName}</h2>
  </div>
   ))}
 </div>
</InfiniteScroll>
        
        </>
    )
}
export default ContactList;