

class Initial extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          movie: 0,
          crawl: ""
      };
    };
      
getMovie(value){
 fetch("https://swapi.dev/api/films/" + value)
 .then(res => res.json())
 .then(res => this.setState({crawl: res.opening_crawl}));

 document.getElementById("checkbox-toggle").checked = true;
}
closeModal(){
    document.getElementById("checkbox-toggle").checked = false;    
}
    render(){
          return(
       <div id="main-container">
            <h2>Star Wars API</h2>
            <div id="form-container">
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
            <div id="crawl">
                <div id="close" onClick={this.closeModal}>X</div>
                <div>
                <p id="crawl-text">
                    {this.state.crawl}
                </p>
                </div>
            </div>


            </div>
       </div>
       )
   }

   
  } // End of component
  
  ReactDOM.render(<Initial />, document.getElementById('app-container'));