import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
}



// renderComments(comments) {
function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>)
    }

    var commentList = comments.map(comment => {
        return (
            <li key={comment.id} >
                {comment.comment}
                <br /><br />
                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                <br /><br />
            </li>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        </div>
    );
}


export const DishDetail = (props) => {
    if (props.dish == null) {
        return (<div></div>)
    }

    const dishdetail = (
        <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                {dishdetail}
            </div>
        </div>
    )
};


