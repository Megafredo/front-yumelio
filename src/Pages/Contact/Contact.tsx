//& Import style
import './Styles/Contact.scss';

//& Imports Module
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

//& Imports Components
import { validate } from '../../Utils/Ajv/contactSchema';
import { ReactComponent as GridSVG } from '../../Assets/img/Grid.svg';
import { ReactComponent as GitHubSVG } from './Svg/Logo-github.svg';
import { ReactComponent as LinkedinSVG } from './Svg/Logo-linkedin.svg';
import { ReactComponent as VisualKodingSVG } from './Svg/Logo-visualkoding.svg';
import { ReactComponent as AlsaceSVG } from './Svg/Alsace.svg';

//& Import Interfaces
import { MessageState, FormData } from './Types';


const Contact = () => {

  const LINK_GITHUB = 'https://github.com/Megafredo';
  const LINK_LINKEDIN = 'https://linkedin.com/';
  
  const [messages, setMessages] = useState<MessageState[]>([]);
  const [formData, setFormData] = useState<FormData>({
    'first-name': '',
    'last-name': '',
    subject: '',
    message: '',
  });
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate(formData);

    if (!isValid) {
      const errorMessages: MessageState[] = validate.errors?.map((error) => ({ message: error.message ?? '',
      type: 'error',})) || [];
      setMessages(errorMessages);
      return;
    }

    const { 'first-name': firstName, 'last-name': lastName, subject, message } = formData;
    const mySubject = encodeURIComponent(subject);
    const myBody = encodeURIComponent(`${message}
    
Cordialement,
${firstName} ${lastName}`);

    const mailtoLink = `mailto:megafredo@hotmail.com?subject=${mySubject}&body=${myBody}`;
    window.location.href = mailtoLink;

    const valideMessages: MessageState[] =  [{message: "Votre message a été préparé pour l'envoi avec succès.", type: "success"}]
    setMessages(valideMessages);

    setFormData({
      'first-name': '',
      'last-name': '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__container__title">
          <h1 className="contact__container__title--firstLine">Besoin d'aide ?</h1>
          <h1 className="contact__container__title--secondLine">CONTACTEZ-MOI !</h1>
          <div className="contact__container__title--separator"></div>
        </div>

        <div className="contact__container__zone">
          <GridSVG className="contact__container__zone__svg-grid" />
          <div className="contact__container__zone__link">
            <Link to="/" data-cursor-pointer="active"><VisualKodingSVG /></Link>
            <a href={LINK_GITHUB} target="_blank" rel="noopener noreferrer" data-cursor-pointer="active"><GitHubSVG /></a>
            <a href={LINK_LINKEDIN} target="_blank" rel="noopener noreferrer" data-cursor-pointer="active"><LinkedinSVG /></a>
          </div>
          <div className="contact__container__zone__form">
          
            <form onSubmit={handleSubmit}>
             
                <input type="text" id="first-name" name="first-name" value={formData['first-name']} onChange={handleChange} placeholder="Prénom" minLength={2} required />
                <label htmlFor="first-name">Prénom</label>
        
                <input type="text" id="last-name" name="last-name" value={formData['last-name']} onChange={handleChange} placeholder="Nom" minLength={2} required />
                <label htmlFor="last-name">Nom</label>
              
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Objet" minLength={2} required />
                <label htmlFor="subject">Objet</label>
           
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Entrez votre message" minLength={10} required />
                <label htmlFor="message">Message</label>
        
              <button type="submit" data-cursor-pointer="active">
                Valider
              </button>

            </form>
              {messages.map((element, index) => (
                <div className={element.type === 'error' ? "contact__container__zone__error" : "contact__container__zone__success"} key={index}>
                  {element.message}
                </div>
              ))}
            
          </div>

          <div className="contact__container__zone__text">
            <h2>Vers l’Alsace et au-delà !</h2>
            <span>
              <p>Je suis ravi que tu aies visité mon portfolio. </p>
              <p>Si tu as des questions, des projets intéressants à discuter ou si tu veux simplement échanger des idées, n'hésite pas à me contacter.</p>
              <p>Je suis toujours ouvert aux nouvelles opportunités de collaboration passionnantes.</p>
            </span>

          </div>
          <div className="contact__container__zone__svg-alsace">
            <AlsaceSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
