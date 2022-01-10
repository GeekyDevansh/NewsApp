import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"; 
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    category:"general",
    
  }
  static propTypes = {
    category: PropTypes.string
  }
   capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews(){

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults,
  loading:false})
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}- NewsApp` ;
  }

 
  handlePrevClick = async ()=>{

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d4b6f5e3c9bb480fa4b8ffe8d933256e&page=${this.state.page - 1}&pageSize=20`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults,
  loading:false})
    this.setState({
      page:this.state.page - 1,
    
    })
  };

  handleNextClick = async ()=>{
   
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d4b6f5e3c9bb480fa4b8ffe8d933256e&page=${this.state.page + 1}&pageSize=20`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults,
  loading:false})
    this.setState({
      page:this.state.page + 1,
    
    })
  };
// }
  async componentDidMount(){
     this.updateNews();
  }


  render() {
    return (
        
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px' ,marginTop:'90px'}}> NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

        {this.state.loading && <Spinner/>}
       
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-4" key ={element.url} >
            <NewsItem   title={element.title?element.title:" "} description = {element.description?element.description:" "} imageUrl = {element.urlToImage} url = {element.url} author = {element.author?element.author:"Not Available"} source = {element.source.name?element.source.name:"Not Available"} publishedAt = {element.publishedAt?element.publishedAt:"Not Available"} />
          </div>
        })}


        </div>
        <div className="d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick} >&#8592; Previous</button>
<button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &#8594;</button>
        </div>
      </div>
      
    );
  }
}
