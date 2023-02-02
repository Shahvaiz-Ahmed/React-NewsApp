// import PropTypes from 'prop-types'
import React, {useState, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";

const News =(props)=> {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const capitalize =(s)=>{
    return s.charAt(0).toUpperCase()+s.slice(1)
  };

  const update = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=18eb62dd061e43adbbbdcfc5551f01db&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setLoading(false);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);

  }




  const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };


  useEffect(() => {
      update();
  document.title = `${capitalize(props.category)}- News From Shahvaiz`;
  document.body.style = "background: black"

      // eslint-disable-next-line
  }, [])
    return (
      <div className="my-3">
        <div className="mt-5 pt-5">
        <h1 className="text-center mt-5 pt-5 text-light">Top-{capitalize(props.category)} Headlines</h1>
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="">
          <div className="row my-3">
            {!loading &&
              articles.map((e) => {
                return (
                  <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded" key={e.url}>
                    <NewsComponent
                      title={e.title}
                      description={e.description}
                      urlToImage={
                        !e.urlToImage
                          ? "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o="
                          : e.urlToImage
                      }
                      url={e.url}
                      author={e.author}
                      publishedAt={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  
}

export default News;
