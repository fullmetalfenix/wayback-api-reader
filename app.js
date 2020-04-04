//JS Going here

class Initial extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      };
    };
      
//  componentDidMount(){
//}
  
    render(){
          return(
       <div id="main-container">
            <div id="make-shift-form">
                <input type="text" name="url" id="get-url" />
                <button id="submit-button">Search</button>
            </div>

       </div>
       )
   }

   
  } // End of component
  
  ReactDOM.render(<Initial />, document.getElementById('app-container'));