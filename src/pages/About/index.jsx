import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';

const About = () => {

  return (
    
    <div>

      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam nulla velit modi quis, vitae tempora?
        Possimus laudantium maxime similique. Rerum?
      </Header>

    </div>

  );

};

export default About;