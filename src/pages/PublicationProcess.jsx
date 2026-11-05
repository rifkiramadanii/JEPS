import { FileText, Send, Search, Edit3, CheckCircle, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PublicationProcess() {
  const steps = [
    {
      id: 1,
      title: "Persiapan Naskah",
      icon: <FileText size={24} className="text-accent" />,
      description: "Penulis wajib menyesuaikan naskah dengan Author Guidelines. Anda dapat mengunduh Template Artikel baik melalui website ini maupun melalui sistem OJS nantinya.",
      actions: (
        <div className="flex flex-wrap gap-3 mt-4">
          <Link to="/guidelines" className="flex items-center gap-2 text-sm bg-white border border-secondary px-4 py-2 rounded-lg hover:border-accent hover:text-accent transition-colors text-textmain">
            <FileText size={16} /> Baca Guidelines
          </Link>
          <a href="/JEPS_Article_Template.docx" download className="flex items-center gap-2 text-sm bg-secondary/50 text-textmain px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors">
            <Download size={16} /> Unduh Template
          </a>
        </div>
      )
    },
    {
      id: 2,
      title: "Penyerahan Naskah (Submission)",
      icon: <Send size={24} className="text-accent" />,
      description: "Proses pengiriman naskah sepenuhnya dilakukan melalui sistem Open Journal Systems (OJS). Setelah menekan tombol Submit, Anda akan diarahkan ke laman OJS untuk login/register dan mengunggah dokumen Anda.",
      actions: (
        <div className="mt-4">
          <a href="https://jeps.j-psc.com/index.php/jeps/about/submissions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm bg-accent text-white px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors shadow-sm">
            <ExternalLink size={16} /> Menuju Portal OJS
          </a>
        </div>
      )
    },
    {
      id: 3,
      title: "Proses Double-Blind Peer Review",
      icon: <Search size={24} className="text-accent" />,
      description: "Naskah yang lolos seleksi awal akan dinilai oleh Reviewer secara anonim (Double-Blind Review) melalui OJS. Penulis dapat memantau progres status naskah secara real-time pada dashboard OJS masing-masing.",
      actions: null
    },
    {
      id: 4,
      title: "Revisi & Keputusan",
      icon: <Edit3 size={24} className="text-accent" />,
      description: "Berdasarkan masukan Reviewer, penulis mungkin diminta melakukan revisi. Silakan unggah versi perbaikan naskah Anda ke OJS. Keputusan akhir (Accepted/Rejected) akan diumumkan via email dan sistem OJS.",
      actions: null
    },
    {
      id: 5,
      title: "Publikasi Artikel",
      icon: <CheckCircle size={24} className="text-accent" />,
      description: "Selamat! Naskah yang dinyatakan Diterima (Accepted) dan telah memenuhi persyaratan APC akan di-layout. Artikel Anda secara otomatis akan diterbitkan dan dapat diakses oleh publik secara Open Access melalui website frontend ini.",
      actions: (
        <div className="mt-4">
          <Link to="/current" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-textmain transition-colors">
            Lihat Edisi Terkini <ArrowRight size={16} />
          </Link>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 px-4 py-8">
      <div className="text-center space-y-4 border-b border-secondary pb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-textmain">Alur Publikasi</h1>
        <p className="text-lg text-textmain/80 max-w-2xl mx-auto">
          Panduan langkah demi langkah dari persiapan naskah hingga artikel Anda diterbitkan dan tayang di website JEPS.
        </p>
      </div>

      <div className="relative">
        {/* Garis vertikal di latar belakang */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-secondary"></div>

        <div className="space-y-8 relative">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-4 md:gap-6 group">
              {/* Ikon Step */}
              <div className="relative z-10 shrink-0">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-background transition-transform duration-300 group-hover:scale-110 shadow-sm ${step.id === 5 ? 'bg-secondary' : 'bg-white'}`}>
                  {step.icon}
                </div>
              </div>

              {/* Konten Card */}
              <div className="flex-1 pb-4">
                <div className="bg-white p-6 rounded-2xl hover:shadow-md transition-shadow border border-secondary">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-2 py-1 bg-secondary text-textmain rounded-md">Tahap {step.id}</span>
                    <h3 className="text-xl font-bold font-serif text-textmain">{step.title}</h3>
                  </div>
                  <p className="text-textmain/80 leading-relaxed">
                    {step.description}
                  </p>
                  {step.actions}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}