//& Import SCSS
import './Styles/Footer.scss';

//& Imports modules
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

//& Imports Types
import { RootState } from '../../Store';

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  const { mode } = useSelector((state: RootState) => state.themeSlice);

  return (
    <footer className={`footer theme--${mode}`}>
      <p className="footer__copyright">
        Copyright © {currentYear} - {t('footer_copyright')} - VisualKoding - <Link role="link" data-cursor-pointer="active" to="/legal">Mentions Légales</Link>
      </p>
    </footer>
  );
};

export default Footer;
