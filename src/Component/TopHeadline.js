import { Container, Alert } from "react-bootstrap";
import { getTopheadLines } from "../Service/NewsService";
import { useState,useEffect } from "react";
import NewsArticles from "./NewsArticles";
export default function TopHeadLines()
{
    const [news,setNews]=useState([])
    useEffect(()=>{
        async function getData()
        {
            const response=await getTopheadLines()
            setNews(response.data.articles)
        }
        getData()
    },[])
    return (
        <div>
            <Container className="text-center mt-5">
                <Alert variant=""><h2>Top<span className="badge bg-danger">HeadLines</span></h2></Alert>
            </Container>

            <div className="container my-3">
                <div className="row">
                    {news.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsArticles
                                    sourceName={element.source.name}
                                    title={element.title}
                                    desc={element.description}
                                    imageURL=
                                    {element.urlToImage ?
                                        element.urlToImage :
                                        Image}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
           
        </div>
    )
}