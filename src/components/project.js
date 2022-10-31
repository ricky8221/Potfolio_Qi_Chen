import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Project(props) {
    return (
        <CardGroup>
            <div className='cardContainer'>
            {props.projects.map((project) => (
            <Card className='cardBody'>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{project.languages}</small>
                </Card.Footer>
            </Card>
            ))}
            </div>
        </CardGroup>
    );
}

export default Project;