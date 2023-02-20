// import logo from './logo.svg';
import './App.css';
// import Promo from './components/Promo';
// import Dog from './components/Dog';
// import InputComponent from './components/InputComponent';
// import RegisterForm from './components/RegisterForm';
// import TextInputWithFocusButton from './components/TextInputWithFocusButton';

// import Counter from './components/Counter';
// import MealsList from './components/MealsList';
// import MealsProvider from './providers/MealsProvider';

import Wallet from './Wallet'

function App() {
  return (
    <>
      {/* <Promo />
      <Dog />
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton /> */}
      {/* <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider> */}

      <Wallet />


    </>
  );
}

export default App;

// function Main(props) { 
//   return (
//     <>
//       <h1>Main Here </h1>      
//       <Header msg={props.msg} />
//     </>
// ); 
// };

// function Header(props) { 
//   return ( 
//     <div style={{ border: "10px solid whitesmoke" }}> 
//       <h1>Header here</h1> 
//       <Wrapper msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Wrapper(props) { 
//   return ( 
//     <div style={{ border: "10px solid lightgray" }}> 
//       <h2>Wrapper here</h2> 
//       <Button msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Button(props) { 
//   return ( 
//     <div style={{ border: "20px solid orange" }}> 
//       <h3>This is the Button component</h3> 
//       <button onClick={() => alert(props.msg)}>Click me!</button> 
//     </div> 
//   ); 
// };

// function App() { 
//   return ( 
//     <Main  
//       msg="I passed through the Header and the Wrapper and I reached the Button component"  
//     /> 
//   ); 
// }; 

// export default App;