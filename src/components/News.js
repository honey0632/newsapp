import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  // document.title=`News Zone-${capitalizeFirstLetter(props.category)}`;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [pageNo, setPageNo] = useState(1);



  useEffect(() => {

    clickhandler();

  }, [])



  const clickhandler = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pageNo}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    setPageNo(pageNo+1);
  }


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8634a366269042d2a4bfdbd95cede2c3&pageSize=${props.pageSize}&page=${pageNo}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPageNo(pageNo+1);
  };


  const capitalizeFirstLetter = (str) => {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }
  return (
    <div className='container my-5'>




      <h2 className='my-10 text-center' style={{marginTop:"90px"}}>News Zone - Top headlines from {capitalizeFirstLetter(props.category)}</h2>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      // height={400}
      >




        <div className='row my-5 mx-5'>



          {articles.map((element) => {

            return !loading && <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} author={element.author} source={element.source.name} description={element.description} date={new Date(element.publishedAt).toDateString()} imageUrl={element.urlToImage ? element.urlToImage : "https://images.indianexpress.com/2022/04/monsoon-1.jpg"} newsUrl={element.url} />
            </div>

          })}
        </div>





      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {

  pageSize: 6,
  country: "in",
  category: "general"
}
News.propTypes = {

  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}


export default News