import Image from '../../images/values.jpg';
import SectionHeader from '../SectionHeader';
import Card from '../../UI/Card';
import { IoDiamond } from "react-icons/io5";
import { values } from '../../data';
import { SiOpenaigym } from "react-icons/si";

const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values-left">
                    <div className="values-image">
                        <img src={Image} alt="values-image" />
                    </div>
                </div>
                <div className="values-right">
                    <SectionHeader icon={<IoDiamond />} title="Our Values" />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Similique quasi eveniet est corporis sunt quo aperiam.
                    </p>

                    <div className="values__wrapper">
                        {
                            values.map( ( { id, title, desc } ) => {
                                return <Card key={id} className='values__value'>
                                    <span><SiOpenaigym /></span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            } )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;