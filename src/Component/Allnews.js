import { Container, Col, Row, Alert, Form } from "react-bootstrap";
import { Component } from "react";
import NewsArticles from "./NewsArticles";
import { getAllNews } from "../Service/NewsService";

export class AllNews extends Component {
    constructor()
     {
        super()
        this.state = {
            news: [],
            topic: ''
        }
    }

    getTopic = (ex) => {
        this.setState({ topic: ex.target.value })
    }
    allNews = async (ex) => {
        ex.preventDefault()
        const response = await getAllNews(this.state.topic)
        console.log(response.data)
        this.setState({news:response.data.articles})
    }

    render()
     {
        return (
            <div>
                <Container className='text-center mt-5'>
                    <Alert variant="primary"><h1>ViewAllNews</h1></Alert>
                </Container>

                <Container className="mt-3">
                    <Row>
                        <Col lg='6'>
                            <Form onSubmit={this.allNews}>
                                <Form.Group>
                                    <Form.Label><h3>Topic</h3></Form.Label>
                                    <Form.Control type="text" name="topic" onChange={this.getTopic}>
                                    </Form.Control>
                                </Form.Group>

                                <input type="submit" name="btn" value={'FetchNews'}
                                    className="btn btn-primary mt-3"/>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                

                <div className="container my-3">
                <div className="row">
                    {this.state.news.map((element) => {
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
}
