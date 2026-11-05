import { ShieldCheck, Mail, Database, Lock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-6 border-b border-secondary pb-10">
        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-secondary/50 text-accent mb-2 shadow-sm border border-secondary">
          <ShieldCheck size={36} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-textmain">Privacy Statement</h1>
        <p className="text-lg text-textmain/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          Kebijakan privasi mengenai pengumpulan, penggunaan, dan perlindungan data pribadi Anda pada Journal of Education and Praxis (JEPS).
        </p>
      </div>

      {/* Konten Kebijakan */}
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-secondary shadow-sm space-y-10">
        
        {/* Section 1: Penggunaan Data */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-secondary pb-3">
            <Database className="text-accent" size={26} />
            <h2 className="text-2xl font-bold font-serif text-textmain">1. Penggunaan Data Pribadi</h2>
          </div>
          <div className="space-y-4 text-textmain/80 leading-relaxed text-justify md:text-left text-pretty">
            <p>
              Nama dan alamat email yang dimasukkan ke dalam situs jurnal ini, baik melalui proses pendaftaran di Open Journal Systems (OJS) maupun melalui korespondensi langsung, akan digunakan secara eksklusif untuk tujuan dari jurnal ini (misalnya, komunikasi terkait proses <em>peer-review</em>, penyuntingan, dan notifikasi penerbitan).
            </p>
            <p>
              Data pribadi Anda <strong>tidak akan disediakan</strong> untuk tujuan lain apa pun atau dibagikan kepada pihak ketiga di luar tim redaksi JEPS dan Penerbit Sakata Cendekia.
            </p>
          </div>
        </section>

        {/* Section 2: Data Publik */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-secondary pb-3">
            <Globe className="text-accent" size={26} />
            <h2 className="text-2xl font-bold font-serif text-textmain">2. Informasi Publik pada Artikel</h2>
          </div>
          <div className="space-y-4 text-textmain/80 leading-relaxed text-justify md:text-left text-pretty">
            <p>
              Sebagai jurnal ilmiah <em>Open Access</em>, ketika naskah Anda diterbitkan, beberapa informasi dasar penulis akan tersedia untuk publik pada metadata artikel. Ini meliputi nama penulis, afiliasi/institusi, alamat email korespondensi, dan ORCID iD (jika disertakan). Hal ini dilakukan untuk memfasilitasi komunikasi ilmiah sesuai dengan standar etika publikasi akademik global.
            </p>
          </div>
        </section>

        {/* Section 3: Keamanan Data */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-secondary pb-3">
            <Lock className="text-accent" size={26} />
            <h2 className="text-2xl font-bold font-serif text-textmain">3. Keamanan Sistem (OJS)</h2>
          </div>
          <div className="space-y-4 text-textmain/80 leading-relaxed text-justify md:text-left text-pretty">
            <p>
              Website <em>frontend</em> ini menampilkan data yang dikelola secara terpusat oleh sistem backend Open Journal Systems (OJS). Platform OJS kami mematuhi pedoman keamanan standar yang ditetapkan oleh Public Knowledge Project (PKP) untuk melindungi pengguna dari peretasan, kebocoran, dan penyalahgunaan data.
            </p>
          </div>
        </section>

        {/* Section 4: Kontak */}
        <section className="bg-secondary/30 p-6 md:p-8 rounded-xl border border-secondary mt-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Mail className="text-accent shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold font-serif text-textmain mb-2">Pertanyaan soal privasi data Anda?</h3>
              <p className="text-textmain/80 leading-relaxed mb-4 text-pretty">
                Jika Anda memiliki pertanyaan lebih lanjut, ingin menarik kembali data Anda, atau menghapus akun OJS pada sistem kami, silakan hubungi tim dukungan dan redaksi kami.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold bg-white border border-secondary text-textmain px-5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-colors">
                Hubungi Tim Redaksi &rarr;
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}