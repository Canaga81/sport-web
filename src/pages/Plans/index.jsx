import './plans.css';
import { plans } from '../../data';
import Card from '../../UI/Card';
import HeaderImage from '../../images/header_bg_4.jpg';
import Header from '../../components/Header';

const Plans = () => {
  return (
    <>
      <Header title='Membership Plans' image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ratione eos a, tempora assumenda consequuntur
        recusandae aperiam vitae suscipit.
      </Header>

      <section className="plans">
        <div className="container plans__container">
          {
            plans.map( ( { id, name, desc, price, features } ) => {
              console.log(id);
              return (
                <Card className='plan' key={id}>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${ price }`}</h1>
                  <h4>Features</h4>
                    {
                      features.map( ( { feature, available, index }, idx ) => {
                        return (
                          <p key={idx} className={!available ? 'disabled' : ''}>{feature}</p>
                        )
                      } )
                  }
                  
                  <button className='btn lg'>Choose Plan</button>
                </Card>
              );
            } )
          }
        </div>
      </section>
    </>
  );
};

export default Plans;