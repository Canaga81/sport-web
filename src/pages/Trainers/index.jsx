import Header from '../../components/Header';
import './trainers.css';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import Trainer from '../../components/Trainer/Trainer';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Trainers = () => {
  return (
    <>

      <Header title='Our Trainers' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cumque dolorem ipsum ipsa quidem, rerum consequatur
        amet voluptate tenetur odit!
      </Header>

      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map( ( { id, image, name, job, socials } ) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <FaInstagram />, link: socials[0]},
                  {icon: <FaTwitter />, link: socials[1]},
                  {icon: <FaFacebook />, link: socials[2]},
                  {icon: <FaLinkedin />, link: socials[3]}
                ]
              }/>
            } )
          }
        </div>
      </section>

    </>
  );
};

export default Trainers;