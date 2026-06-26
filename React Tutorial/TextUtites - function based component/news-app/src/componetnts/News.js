import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      articlesPerPage: 20,
      category:"sports",
      country: "us"
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=498bbeb28963476a83093378cc4ca4b3&page=
    ${this.state.page}&pageSize=${this.state.articlesPerPage}`;
    console.log(url);
    
    let data = await fetch(url);
    let json = await data.json();
    this.setState({
      articles: json.articles,
      totalResults: json.totalResults,
    });
    this.setState({ loading: false });
  }

  Api = async () => {
    
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=498bbeb28963476a83093378cc4ca4b3&page=
    ${this.state.page}&pageSize=${this.state.articlesPerPage}`;
    let data = await fetch(url);
    let json = await data.json();
    this.setState({ articles: json.articles });
    this.setState({ loading: false });
  };

  handleNextClick = () => {
    if (
      this.state.page <
      Math.ceil(this.state.totalResults / this.state.articlesPerPage)
    ) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.Api();
      });
    }
  };

  handlePreviousClick = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.Api();
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <div className="container">
          {this.state.loading && <Spinner />}
          {!this.state.loading ? (
            <div className="row justify-content-center align-items-center g-2">
              {this.state.articles.map((e) => {
                return (
                  <div
                    className="col col-12 col-lg-3  col-md-6 col-sm-6"
                    key={e.url}
                  >
                    <NewsItem
                      title={
                        e.title === null ? null : e.title.slice(0, 40) + "..."
                      }
                      discription={
                        e.description === null
                          ? null
                          : e.description.slice(0, 88) + "..."
                      }
                      imgSrc={
                        e.urlToImage === null
                          ? "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iwtk9P2yBfuQ/v1/1200x800.jpg"
                          : e.urlToImage
                      }
                      newsUrl={e.url}
                    />
                  </div>
                );
              })}
              <div className=" d-flex justify-content-between w-100 position-fixed bottom-0 my-5 ">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handlePreviousClick}
                  disabled={this.state.page <= 1}
                >
                  &larr; Previous
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handleNextClick}
                  disabled={
                    !(
                      this.state.page <
                      Math.ceil(
                        this.state.totalResults / this.state.articlesPerPage,
                      )
                    )
                  }
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
