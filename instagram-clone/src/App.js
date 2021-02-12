import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {

  const classes = useStyles(); 
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setopenSignIn] = useState(false);


  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const [user, setUser] = useState(null);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user has logged in 
        console.log(authUser);
        setUser(authUser);
        
    
      // if(authUser.displayName){
      //   //dont update username
      // }
      // else
      // {
      //   //if we justcreated someone 
      //   return authUser.updateProfile(
      //     {displayName:username}
      //   );
      // }
    }
      else
      {
        //user has logged out
         setUser(null);
      }
    })

    return () =>
    {
      unsubscribe();
    }
  }, [user, username])



  //useEffect -> runs a piece of code based on a specific condition
  useEffect(() => { 
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
        post:doc.data()})))
    })
         },[]
  );


  const signUp = (event) => {
    event.preventDefault();
    
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName : username
      })
    })
    .catch((error) => alert(error.message))
  
  setOpen(false);
  }


  const signIn =(event) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))
  
  setopenSignIn(false);
  }
 

  
  return (

    <div className="App">
      

      <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
          <center>
           
              <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                  alt=""
              />
          
          </center>
            <Input 
              placeholder="email"
              type="email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            
            /><br></br>
            <Input 
              
              placeholder="username"
              type="text"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
            
            /><br></br>
            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            
            /><br></br>
            <Button type="submit" onClick={signUp}> sign up</Button>
            
            
            
         
          </form>
        </div>
      </Modal>



      <Modal
        open={openSignIn}
        onClose={()=> setopenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
          <center>
           
              <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                  alt=""
              />
          
          </center>
            <Input 
              placeholder="email"
              type="email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            
            /><br></br>
            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            
            /><br></br>
            <Button type="submit" onClick={signIn}> Sign In</Button>
            
            
            
         
          </form>
        </div>
      </Modal>

      <div className="app_header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt=""
          className="app_headerImage"
        />
        { user ? 
            (<Button  onClick={()=> auth.signOut()}> Logout</Button>) :
            (
             <div className="app_loginContainer">
                <Button onClick={() => setopenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
            </div>
            )
        }
      </div>

      {/* <Button onClick={() => setOpen(true)}>Sign Up</Button> */}
  

      {
      // ? optionals
      user?.displayName ? 
      (<ImageUpload username = {user.displayName} />) :
      <h2>Sorry you need to login for upload</h2>

    }



        {/* <h1>Hello Abhishek,lets build a instagram clone app</h1> */}

  <div className="app_posts"> 
  
  {
        posts.map(({id,post})=>{
         return  <Post key={id} postId={id} username={post.username} user ={user} imageUrl={post.imageUrl}
                       caption={post.caption}  />
                        })

  }
  </div>

    </div>
  
  );

}

export default App;


   // {
    //   username:"test", 
    //   imageUrl:"https://i.ytimg.com/vi/nPV3sBL7NJk/maxresdefault.jpg",
    //   caption:"it is in react"
    // },
    // {
    //   username:"abc",
    //   imageUrl:"https://swall.teahub.io/photos/small/307-3071687_fifa-ronaldo-fifa-18-wallpaper-hd.jpg",
    //   caption:"wow it is actualy working"
    // },
    // {
    //   username:"xyz",
    //   imageUrl:"https://www.telegraph.co.uk/content/dam/football/2018/07/10/TELEMMGLPICT000164716652_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfcjI5EjBxnGwjR1fcz0u9Y.jpeg",
    //   caption:"hello world"
    // }



    //     {/* <Post username="test" imageUrl="https://i.ytimg.com/vi/nPV3sBL7NJk/maxresdefault.jpg"
    //     caption="it is in react"
    // />
    // <Post username="abc" imageUrl="https://swall.teahub.io/photos/small/307-3071687_fifa-ronaldo-fifa-18-wallpaper-hd.jpg" 
    //     caption="wow it is actualy working"
    // />
    // <Post username="xyz" imageUrl="https://www.telegraph.co.uk/content/dam/football/2018/07/10/TELEMMGLPICT000164716652_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfcjI5EjBxnGwjR1fcz0u9Y.jpeg"
    //     caption="hello world"
    // /> */}