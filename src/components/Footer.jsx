import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-secondary pt-16 pb-8 mt-24 text-textmain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          
          {/* Kolom 1: Brand & Publisher (Lebih Lebar) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2 text-accent font-bold text-2xl group">
              <BookOpen size={32} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-serif tracking-wide">JEPS</span>
            </Link>
            <div>
              <h3 className="font-serif font-bold text-lg mb-1">Journal of Education and Praxis</h3>
              <p className="text-textmain/70 text-sm leading-relaxed text-pretty">
                Jurnal ilmiah akses terbuka yang berfokus pada inovasi pedagogik, teknologi pendidikan, kurikulum, dan pendidikan inklusif.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-secondary/50">
              <p className="text-sm font-semibold text-textmain">Diterbitkan oleh:</p>
              <p className="text-sm text-accent font-serif font-bold">Penerbit Sakata Cendekia</p>
            </div>
          </div>

          {/* Kolom 2: Tautan Akses Cepat */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-lg mb-5 border-b border-secondary pb-2 inline-block">Akses Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Beranda</Link></li>
              <li><Link to="/current" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Edisi Terkini</Link></li>
              <li><Link to="/archives" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Arsip Jurnal</Link></li>
              <li><Link to="/about" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Tentang Jurnal</Link></li>
              <li><Link to="/editorial" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Tim Editorial</Link></li>
              <li><Link to="/contact" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Kontak Kami</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Kebijakan & Panduan */}
          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-lg mb-5 border-b border-secondary pb-2 inline-block">Kebijakan & Panduan</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li><Link to="/guidelines" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Author Guidelines</Link></li>
              <li><Link to="/process" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Alur Publikasi (Publication Process)</Link></li>
              <li><Link to="/privacy" className="text-textmain/80 hover:text-accent hover:translate-x-1 inline-block transition-transform">Kebijakan Privasi (Privacy Statement)</Link></li>
            </ul>
            
            {/* Informasi Kontak Singkat */}
            <div className="space-y-3 text-sm text-textmain/70">
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@j-psc.com" className="hover:text-accent transition-colors">info@j-psc.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">Penerbit Sakata Cendekia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bagian Bawah: Hak Cipta */}
        <div className="pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textmain/60">
          <p>© {currentYear} Penerbit Sakata Cendekia. Hak cipta dilindungi undang-undang.</p>
          <p>
            Ditenagai oleh <a href="https://pkp.sfu.ca/ojs/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-medium">Open Journal Systems (OJS)</a>
          </p>
        </div>

      </div>
    </footer>
  );
}