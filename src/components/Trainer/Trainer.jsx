import React from 'react';
import Card from '../../UI/Card'
import './trainer.css'

const Trainer = ( { id, image, name, job, socials } ) => {
    return (
        <Card className='trainer__cards'>
            <div className="trainer__img">
                <img src={image} alt={name} />
            </div>

            <h3>{name}</h3>
            <p>{job}</p>

            <div className="trainer__social">
                {
                    socials.map( ( { icon, link }, index ) => {
                        return (
                            <a key={index} target='_blank' rel='noreferrer noopener' href={link}>{icon}</a>
                        )
                    })
                }
            </div>
        </Card>
    );
};

export default Trainer;