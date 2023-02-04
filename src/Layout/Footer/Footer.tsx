//& Import modules
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

//& Imports SCSS
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { mode } = useSelector((state: any) => state.themeSlice);

  return (
    <footer className={`footer theme--${mode}`}>
      <p className="footer__copyright">Copyright © {currentYear} - {t('footer-copyright')} - VisualKoding</p>
    </footer>
  );
};

export default Footer;
