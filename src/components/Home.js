import React from 'react';
import {Component} from'react'
import Display from'./Display'
import{Container,Row, Col, Carousel}from'react-bootstrap'
import logo from '../faviocn.png'
class Home extends Component {
  render(){
    return(
      <div>
             <Container>
             <Carousel>
              <Carousel.Item>
                
              </Carousel.Item>
             </Carousel>
             <br />
             <br />
             <h1>Online Content & Code Generator using OpenAI's API 🎡</h1>
             <p> 😍Choose any one of your choice and start working 😍</p>
             <br />
             <br /> 
             <br  />
          <Row>
              <Col>
              <Display 
                header="Content"
                title="Generate Content"
                text="Bored of writing long, long content? We got your back 🎁. Enter the Topic you want and get the result instantly. Use them for your website, blogs, articles, etc and have fun!!."
                theLink="/content" />

              </Col>

              <Col> 
                <Display 
                  header="Code "
                  title="Generate Code"
                  text="Stuck in your code? Want some easy, quick and efficient code for your problem? Just enter the problem and get your solution quickly 🤖. That's it"
                  theLink="/code" />
              
              </Col>
              </Row>
              <br />
              <br />

              </Container> 

              </div>

    )
  }
}
export default Home 
 

