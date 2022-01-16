import React from "react";
import getData from "../apis/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
      
  
  onSearchSub = async (term) => {
    const response = await getData.get("/search/photos", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFetch={this.onSearchSub} />
        <ImageList results = {this.state.images}/>
      </div>
    );
  }
}

export default App;

