//JS Going here

class Initial extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          movie: 0,
          crawl: ""
      };
    };
      
//  componentDidMount(){
//}
getMovie(value){
 fetch("https://swapi.co/api/films/" + value)
 .then(res => res.json())
 .then(res => this.setState({crawl: res.opening_crawl}))
}

    render(){
          return(
       <div id="main-container">
            <h1>Wayback <span style={{color:'#a92e33'}}>Machine</span> API</h1>
            <h2>Star Wars API</h2>
            <div id="make-shift-form">
            <select  onChange={() => {this.getMovie(document.getElementById('films').value)}} id="films" name="films">
                <option value="" disabled selected>Please Select A Film:</option>
                <option value="1">A New Hope</option>
                <option value="2">The Empire Strikes Back</option>
                <option value="3">Return of the Jedi</option>
                <option value="4">The Phantom Menace</option>
                <option value="5">Attack of the Clones</option>
                <option value="6">Revenge of the Sith</option>
                <option value="7">The Force Awakens</option>
            </select>
            </div>
            <input type="checkbox" name="checkbox" id="checkbox-toggle" />
            <p>Hi :)!</p>
            <div id="crawl">
                <p id="crawl-text">
                    {this.state.crawl}
                </p>
            </div>
       </div>
       )
   }

   
  } // End of component
  
  ReactDOM.render(<Initial />, document.getElementById('app-container'));