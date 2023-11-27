import { FaCrown } from "react-icons/fa";
import SectionHeader from "../SectionHeader";
import { programs } from "../../data";
import Card from "../../UI/Card";
import { SiOpenaigym } from "react-icons/si";
import { Link } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa";

const Programs = () => {
    return (
        <div className='programs'>

            <div className="container programs__container">
                <SectionHeader icon={<FaCrown />} title="Our Programs" />
            </div>

            <div className="container programs__wrapper">
                {
                    programs.map( ( { id, title, info, path } ) => {
                        return (
                            <Card key={id} className='programs__program'>
                                <span><SiOpenaigym /></span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link className="btn sm" to={path}>Learn More <FaCaretRight /> </Link>
                            </Card>
                        )
                    } )
                }
            </div>

        </div>
    );
};

export default Programs;