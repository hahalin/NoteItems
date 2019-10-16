import React, { Component } from 'react';
import { Button,Form,Modal} from 'react-bootstrap';

class NewNoteItemWin extends Component {
    
    constructor(props){
        super();
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target);
    }

    render(){
        const {show,handleClose}=this.props;
        return (
            <Modal show={show} onHide={handleClose} animation={false}>
                <Form autoComplete="off" onSubmit={this.props.onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>新增記事項目</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" name="title"
                                value={this.props.title} onChange={this.handleChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="desc"
                                value={this.props.desc} onChange={this.handleChange} />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <div className="container text-center">
                            <Button variant="primary" type="submit">新增儲存</Button>
                            <Button variant="secondary" onClick={this.props.handleClose}>取消離開</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}

export default NewNoteItemWin;