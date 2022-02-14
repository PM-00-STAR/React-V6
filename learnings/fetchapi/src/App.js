
import React, {useState} from 'react' 
import {useEffect} from 'react'
 function App() {
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);

   // Note: the empty deps array [] means
   // this useEffect will run once
   // similar to componentDidMount()
   useEffect(() => {
     fetch("api")
       .then(res => res.json())
       .then(
         (result) => {
           setIsLoaded(true);
           setItems(result.keywordjsonkalikhnahnisme);
         },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
           setIsLoaded(true);
           setError(error);
         }
       )
   }, [])

   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {

     return (
       <ul>
         {items.map(item=> (
           <li key = {item}>
           {item.andarkearraykavaluekeywordme} 
           </li>
         ))}
       </ul>
      
     );
   }
 }
 export default App;

 //Below is using class component
//import React from 'react' 
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       articles: []
//     };
//   }

//   componentDidMount() {
//     fetch("api")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             articles: result.articles
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, articles } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {articles.map(item => (
//             <li key={item}>
//               {item.title}
//              
              
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
// export default App;