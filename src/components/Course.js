import Header from './Header';
import Content from './Content';

const course = (props) => {
    const suma1 = props.course.parts
    const suma2 = suma1.reduce((cont, {exercises}) => cont+exercises,0)
return (
    <div>
        <Header header={props.course.name}/>
        <Content content={props.course.parts}/>
        <p><b>La suma es = {suma2}</b></p>
    </div>
    );
}
export default course; 