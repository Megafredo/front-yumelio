//& Import SCSS
import './Footer.scss';

//& Imports modules
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

//& Imports Types
import { RootState } from '../../Store';

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  const { mode } = useSelector((state: RootState) => state.themeSlice);

  return (
    <footer className={`footer theme--${mode}`}>
      <p className="footer__copyright">
        Copyright © {currentYear} - {t('footer_copyright')} - VisualKoding
      </p>
    </footer>
  );
};

export default Footer;
