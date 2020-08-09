import CMS from 'netlify-cms-app';
// import styles from '!css-loader!sass-loader!../assets/sass/styles.scss';
import styles from '../assets/sass/styles.scss';
import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import FarmPagePreview from './preview-templates/FarmPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewStyle(styles.toString(), { raw: false });
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('thefarm', FarmPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
