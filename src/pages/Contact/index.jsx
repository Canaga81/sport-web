import Header from '../../components/Header';
import './contact.css'
import ContackImage from '../../images/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={ContackImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Corrupti fugiat cupiditate et fuga.
        Minus ad labore cupiditate ex!
      </Header>

      <section className='contack'>
        <div className="container contack__container">
          <div className="contack__wrapper">
            <a href="mailto:support@egattor.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
            <a href="https://wa.me/+233557097546" target='_blank' rel='noreferrer noopener'><FaWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact