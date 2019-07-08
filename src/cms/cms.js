import CMS from 'netlify-cms'
import '../assets/sass/styles.scss'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import FarmPagePreview from './preview-templates/FarmPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('thefarm', FarmPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
