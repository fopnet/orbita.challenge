import React from "react";
// import NavBar from "./containers/navbar";
import NavBar from "./components/navbar/navbar";
// import Routes from "./services/router";
import GlobalStyle from "./styles/global";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <GlobalStyle />
        {/* <Routes /> */}
        {this.props.children}
      </div>
    );
  }
}
// const App = () => (
//   <div>
//     {/* <NavBar /> */}
//     <GlobalStyle />
//     {/* <Routes /> */}
//     {this.props.children}
//   </div>
// );
export default App;
