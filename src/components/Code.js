import React from 'react';
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
const { Configuration, OpenAIApi } = require("openai");

class Code extends Component {
    constructor() {
        super()
        this.state = {
            heading: <h3> The Response from the AI will be shown here</h3>,
            response: '..... await the response',
            value: ''
        }
    }

    onFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.productName)
        ///Open AI API

        const configuration = new Configuration({
            apiKey: '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',
          });
          const openai = new OpenAIApi(configuration);
          
            openai.createCompletion("text-davinci-002", {
            prompt: ` ${formDataObj.productName}`,
            temperature: 0.8,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) => {
              this.setState ({
                  heading: `AI Code Suggestions for: ${formDataObj.productName}`,
                  response:`${response.data.choices[0].text}`
              })
          });
          


    }

    render() {
        return (
            <div>
                <Container>
                    <br />

                    <h1>Welcome to the Code Generator🥳🥳</h1>
                    <br />
                    <br />



                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h3>Write the problem down </h3></Form.Label>
                            <Form.Control 
                                type= "all"
                                placeholder="Shoot"
                                name="productName" />

                             

                        </Form.Group>
                        <br />

                        <Button variant="primary" size="lg" type="submit">
                            Code Please 🤓
                        </Button>



                    </Form>
                    <br />
                    <Card>
                        <Card.Body>
                            <Card.Title> <h1>{this.state.heading}</h1></Card.Title>
                            <br />
                            <br />

                            <Card.Text>
                                <h4>
                                    {this.state.response}
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                <br />
                <br />
                <br />
            </div>




        )
    }


}
export default Code 















