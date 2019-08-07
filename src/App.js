import React from "react";
// import NavBar from "./containers/navbar";
import NavBar from "./components/navbar/navbar";
// import Routes from "./services/router";
import GlobalStyle from "./styles/global";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <GlobalStyle />
//         {/* <Routes /> */}
//         {this.props.children}
//       </div>
//     );
//   }
// }
const App = () => {
  // const initialState = {
  //   isAuthenticated: false,
  //   user: {},
  //   username: "",
  // };

  return (
    // <StateProvider initialState={initialState} reducer={reducer}>
      <div>
        <NavBar />
        <GlobalStyle />
        {/* <Routes /> */}
        {/* {this.props.children} */}
      </div>
    // </StateProvider>
  );
};

export default App;
// export default withRouter(App);
