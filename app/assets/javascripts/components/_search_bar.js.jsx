// var SearchBar = React.createClass({
//   render() {
//     console.log('Search Bar created');
//     return (
//       <input />
//     )
//   }
// });

var SearchBar = React.createClass({
  // Constructor initialising state
  getInitialState() {
    return { term: '' }
  },

  // Helper method
  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  },

  // Render method
  render() {
    console.log('Search Bar created');
    return (
      <div>
        <div className="text-primary">Enter your search below</div>
        <input onChange={this.onInputChange}/>
        <div>Current search term: {this.state.term}</div>
      </div>
    )
  }

});
