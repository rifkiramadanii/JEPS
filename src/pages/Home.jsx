// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Users, BookOpen, Clock } from 'lucide-react';
// import { getCurrentIssue } from '../services/ojsApi'; // Sesuaikan jika API sudah siap

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [issueInfo, setIssueInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Ubah state error menjadi boolean saja

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        // const data = await getCurrentIssue();
        // setIssueInfo(data.issue);
        // setArticles(data.articles.slice(0, 4)); 
        
        // Simulasi loading sementara (Ganti dengan baris di atas nanti)
        setTimeout(() => {
          setLoading(false);
          setError(true); // Memaksa error agar UI "Segera Hadir" muncul (Hapus saat API siap)
        }, 1000);
      } catch (err) {
        console.error("Error fetching homepage data:", err);
        setError(true); // Set error ke true jika gagal memuat
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 pt-20">
      
      {/* 1. About Journal (Hero Section) */}
      <section className="text-center space-y-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-textmain leading-tight text-pretty">
          Journal of Education and Praxis
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-textmain/80 leading-relaxed text-pretty">
          A peer-reviewed, open-access journal dedicated to publishing high-quality research that connects educational theory with practical application.
        </p>
        
        {/* NEW: Call for Papers Announcement on Hero */}
        <div className="pt-4 flex justify-center animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-secondary/30 border border-secondary py-2.5 px-5 rounded-full shadow-sm">
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-textmain text-sm md:text-base">
              <strong className="font-bold text-accent">Call for Papers:</strong> Kami menerima naskah untuk publikasi edisi mendatang.
            </span>
            <a 
              href="https://jepssubmission.j-psc.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm md:text-base font-bold text-accent hover:text-textmain transition-colors bg-white px-3 py-1 rounded-full shadow-sm border border-secondary/50"
            >
              Submit <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Journal Overview (Stats) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          { label: 'Published Articles', value: 'Coming Soon', icon: <FileText className="text-accent mb-2 mx-auto" size={28} /> },
          { label: 'Active Authors', value: 'Coming Soon', icon: <Users className="text-accent mb-2 mx-auto" size={28} /> },
          { label: 'Volumes', value: 'Coming Soon', icon: <BookOpen className="text-accent mb-2 mx-auto" size={28} /> },
          { label: 'Active Years', value: 'Since 2026', icon: <ChevronRight className="text-accent mb-2 mx-auto" size={28} /> },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl text-center border border-secondary hover:shadow-md transition-shadow duration-300">
            {stat.icon}
            <h3 className="text-3xl font-bold text-textmain mb-1">{stat.value}</h3>
            <p className="text-xs md:text-sm text-textmain/70 uppercase tracking-wider font-semibold">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 3. Current Issue Preview */}
      <section>
        <div className="flex justify-between items-end mb-8 border-b border-secondary pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-textmain">Current Issue</h2>
            <p className="text-textmain/70 mt-1">
              {issueInfo 
                ? `Vol. ${issueInfo.volume} No. ${issueInfo.number} (${issueInfo.year})${issueInfo.title ? `: ${issueInfo.title}` : ''}`
                : 'Mempersiapkan publikasi terbaru...'}
            </p>
          </div>
          <Link to="/current" className="text-accent font-bold hover:text-textmain transition-colors flex items-center">
            View All <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
        
        {/* Indikator Loading */}
        {loading && <div className="text-center py-10 text-textmain/60 animate-pulse">Sedang mengambil artikel...</div>}
        
        {/* Indikator Error diubah menjadi Card "Segera Hadir" yang Elegan */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-2xl border border-secondary shadow-sm">
            <Clock className="w-12 h-12 text-accent/60 mb-4 animate-pulse" />
            <h3 className="text-2xl font-serif font-bold text-textmain mb-3">Segera Hadir</h3>
            <p className="text-textmain/70 text-center max-w-md leading-relaxed text-pretty">
              Edisi terbaru saat ini sedang dalam tahap kurasi dan persiapan. Kami tidak sabar untuk segera membagikan publikasi riset terbaik kepada Anda.
            </p>
          </div>
        )}

        {/* Daftar Artikel (Hanya tampil jika tidak ada error dan tidak loading) */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.length === 0 ? (
              <div className="col-span-2 flex flex-col items-center justify-center py-12 bg-white rounded-2xl border border-secondary">
                <BookOpen className="w-10 h-10 text-secondary mb-3" />
                <p className="text-textmain/60 text-center">Belum ada artikel pada edisi ini.</p>
              </div>
            ) : (
              articles.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/article/${article.id}`} 
                  className="group block p-6 bg-white border border-secondary rounded-xl hover:border-accent hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-serif font-bold text-textmain group-hover:text-accent mb-2 line-clamp-2 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-textmain/70 mb-4">
                    {article.authors} • {article.datePublished || 'Tanggal tidak tersedia'}
                  </p>
                  <span className="text-accent text-sm font-bold flex items-center">
                    Read Article <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </Link>
              ))
            )}
          </div>
        )}
      </section>

      {/* 4. Call for Papers (Dedicated Section) */}
      <section className="bg-white p-8 md:p-12 rounded-2xl text-center border border-secondary shadow-sm relative overflow-hidden">
        {/* Dekorasi latar belakang (Opsional) */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/40 rounded-bl-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-full -z-10"></div>

        <h2 className="text-2xl md:text-3xl font-serif font-bold text-textmain mb-4">Call for Papers</h2>
        <p className="max-w-2xl mx-auto text-textmain/80 mb-8 leading-relaxed text-pretty">
          We invite scholars, researchers, and students to submit their latest findings. Join our community in advancing educational praxis.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://jepssubmission.j-psc.com" 
            target='_blank' 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-white px-8 py-3.5 rounded-lg font-bold hover:bg-accent/90 transition-colors shadow-sm"
          >
            Make a Submission
          </a>
          <Link 
            to="/guidelines" 
            className="w-full sm:w-auto bg-white border border-secondary text-textmain px-8 py-3.5 rounded-lg font-bold hover:border-accent hover:text-accent transition-colors"
          >
            Author Guidelines
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;