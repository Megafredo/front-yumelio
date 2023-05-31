//& Import style
import './Styles/Contact.scss';

//& Imports Module
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//& Imports Components
import { validate } from '../../Utils/Ajv/contactSchema';
import * as Svg from './Svg';

//& Import Interfaces
import { MessageState, FormData } from './Types';
import { RootState } from '../../Store';

//& Animations
import * as animate from '../../Utils/Animations/animate';

const Contact = () => {
  const LINK_GITHUB = 'https://github.com/Megafredo';
  const LINK_LINKEDIN = 'https://linkedin.com/';

  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

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
      const errorMessages: MessageState[] = validate.errors?.map((error) => ({ message: error.message ?? '', type: 'error' })) || [];
      setMessages(errorMessages);
      return;
    }

    const { 'first-name': firstName, 'last-name': lastName, subject, message } = formData;
    const mySubject = encodeURIComponent(subject);
    const myBody = encodeURIComponent(`${message}
    
Cordialement,
${firstName} ${lastName}`);

    const mailtoLink = `mailto:contact@visualkoding.com?subject=${mySubject}&body=${myBody}`;
    window.location.href = mailtoLink;

    const valideMessages: MessageState[] = [{ message: "Votre message a été préparé pour l'envoi avec succès.", type: 'success' }];
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
          <motion.h1 {...animate.effectCross} className="contact__container__title--firstLine">
            Besoin d'aide ?
          </motion.h1>
          <motion.h1 {...animate.effectTitle} className="contact__container__title--secondLine">
            CONTACTEZ-MOI !
          </motion.h1>
          <motion.div {...animate.effectSeparator} className="contact__container__title--separator"></motion.div>
        </div>

        <div className="contact__container__zone">
          <Svg.Grid className="contact__container__zone__svg-grid" />
          <motion.div {...(mediaScreen === 'desktop' ? animate.zoneContact01 : animate.zoneContact01Mobile)} className="contact__container__zone__link">
            <motion.div {...animate.socialNetwork01}>
              <Link to="/" title="Cliquez ici pour retourner à la page d'accueil" data-cursor-pointer="active">
                <Svg.VisualKoding aria-label="Logo de VisualKoding" />
              </Link>
            </motion.div>
            <motion.a {...animate.socialNetwork02} href={LINK_GITHUB} title="Cliquez ici pour accéder à la page GitHub" target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">
              <Svg.GitHub aria-label="Logo de GitHub" />
            </motion.a>
            <motion.a {...animate.socialNetwork03} href={LINK_LINKEDIN} title="Cliquez ici pour accéder à la page Linkedin" target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">
              <Svg.Linkedin aria-label="Logo de Linkedin" />
            </motion.a>
          </motion.div>
          <motion.div {...animate.zoneContact02} className="contact__container__zone__form">
            <form onSubmit={handleSubmit}>
              <input type="text" id="first-name" name="first-name" value={formData['first-name']} onChange={handleChange} placeholder="Prénom" minLength={2} required />
              <label htmlFor="first-name" data-cursor-pointer="active">Prénom</label>

              <input type="text" id="last-name" name="last-name" value={formData['last-name']} onChange={handleChange} placeholder="Nom" minLength={2} required />
              <label htmlFor="last-name" data-cursor-pointer="active">Nom</label>

              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Objet" minLength={2} required />
              <label htmlFor="subject" data-cursor-pointer="active">Objet</label>

              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Entrez votre message" minLength={10} required />
              <label htmlFor="message" data-cursor-pointer="active">Message</label>

              <button type="submit" data-cursor-pointer="active">
                Valider
              </button>
            </form>
            {messages.map((element, index) => (
              <div className={element.type === 'error' ? 'contact__container__zone__error' : 'contact__container__zone__success'} key={index}>
                {element.message}
              </div>
            ))}
          </motion.div>

          <motion.div {...(mediaScreen === 'desktop' ? animate.zoneContact03 : animate.zoneContact03Mobile)} className="contact__container__zone__text">
            <h2>Vers l’Alsace et au-delà !</h2>
            <span>
              <p>Je suis ravi que tu aies visité mon portfolio. </p>
              <p>Si tu as des questions, des projets intéressants à discuter ou si tu veux simplement échanger des idées, n'hésite pas à me contacter.</p>
              <p>Je suis toujours ouvert aux nouvelles opportunités de collaboration passionnantes.</p>
            </span>
          </motion.div>
          <div className="contact__container__zone__svg-alsace">
            <Svg.Alsace />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
