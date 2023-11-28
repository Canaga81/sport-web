import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {

  return (
    
    <>

      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam nulla velit modi quis, vitae tempora?
        Possimus laudantium maxime similique. Rerum?
      </Header>

      <section className='about__story'>

        <div className="container about__story-container">

          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>

          <div className="about__section-content">

            <h1>Our Story</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Alias sequi eveniet exercitationem eos recusandae minima.
              Unde, expedita, tempore fuga recusandae voluptas error minima
              corporis explicabo cupiditate sunt harum dignissimos ullam.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Alias sequi eveniet exercitationem eos recusandae minima.
              Unde, expedita, tempore fuga recusandae voluptas error minima
              corporis explicabo cupiditate sunt harum dignissimos ullam.
            </p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, delectus quasi? Eum commodi ab fugit.
            </p>

          </div>

        </div>

      </section>

      <section className='about__Vision'>

        <div className="container about__Vision-container">

          <div className="about__section-content">

            <h1>Our Vision</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Alias sequi eveniet exercitationem eos recusandae minima.
              Unde, expedita, tempore fuga recusandae voluptas error minima
              corporis explicabo cupiditate sunt harum dignissimos ullam.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quam possimus aspernatur, at quisquam
              optio vel natus totam nisi, repellat explicabo eos!
              Nostrum dolorem in veniam doloribus quidem qui voluptatibus
              tempora amet ea. Consectetur pariatur facere,
              aut quisquam corrupti amet animi nostrum
              sed delectus recusandae.
            </p>

          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Vision Image" />
          </div>

        </div>
      </section>

      <section className='about__mission'>

        <div className="container about__mission-container">

          <div className="about__section-image">
            <img src={MissionImage} alt="mission Image" />
          </div>

          <div className="about__section-content">

            <h1>Our Mission</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Alias sequi eveniet exercitationem eos recusandae minima.
              Unde, expedita, tempore fuga recusandae voluptas error minima
              corporis explicabo cupiditate sunt harum dignissimos ullam.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Alias sequi eveniet exercitationem eos recusandae minima.
              Unde, expedita, tempore fuga recusandae voluptas error minima
              corporis explicabo cupiditate sunt harum dignissimos ullam.
            </p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, delectus quasi? Eum commodi ab fugit.
            </p>

          </div>

        </div>

      </section>

    </>

  );

};

export default About;