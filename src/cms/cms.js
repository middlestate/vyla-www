import CMS from 'netlify-cms';
import '../assets/sass/styles.scss';
import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import FarmPagePreview from './preview-templates/FarmPagePreview';
import ArticlePreview from './preview-templates/ArticlePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewStyle('../assets/sass/styles.scss');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('thefarm', FarmPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('blog', ArticlePreview);
