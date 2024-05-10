import { Container, Alert } from "react-bootstrap";
import { getSports } from "../Service/NewsService"; 
import NewsArticles from "./NewsArticles";
import { useState,useEffect } from "react";
export default function TopSports()
{
    const [news,setNews]=useState([])
    useEffect(()=>{
        async function getData()
        {
            const response=await getSports()
            setNews(response.data.articles)
        }
        getData()
    },[])
    return (
        <div className="card">
            <Container className="text-center mt-5">
                <Alert variant="primary"><h2>Sports</h2></Alert>
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