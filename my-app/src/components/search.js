import React from 'react'
import '../../src/App.css'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export class Search extends React.Component {
    render() {
        return (
        <InputGroup className="mb-3">
            <FormControl aria-describedby="basic-addon1" style={{
                backgroundColor: 'transparent', 
                borderRadius: 25,
                borderTopRightRadius: 1, 
                borderBottomRightRadius: 1, 
                borderRight: 'transparent'}} 
            />
            <Button variant="outline-secondary" style={{
                borderRadius: 25, 
                backgroundColor: '#505050',
               borderTopLeftRadius: 1, 
               borderBottomLeftRadius: 1}}
            >
            Search
            </Button>  
        </InputGroup>
        )
    }
}