import { Routes, Route } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import SadsProgram from './pages/SadsProgram';
import SadsPilot from './pages/SadsPilot'; // new
import SadsCompany from './pages/SadsCompany';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import PodcastPage from './pages/PodcastPage';
import PodcastDetailPage from './pages/PodcastDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
// import PressPage from './pages/PressPage';
// import NewsletterPage from './pages/NewsletterPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sads" element={<SadsProgram />} />
        <Route path="/sads/companies/:slug" element={<SadsCompany />} />
        <Route path="/sads/pilot/:companySlug" element={<SadsPilot />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:slug" element={<PodcastDetailPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetailPage />} />
        {/* <Route path="/press" element={<PressPage />} /> */}
        {/* <Route path="/newsletter" element={<NewsletterPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}