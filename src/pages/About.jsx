// src/pages/About.jsx
import { BookOpen, Scale, Eye, FileCheck, Info } from 'lucide-react';

const About = () => {
  const policies = [
    {
      title: "Peer Review Process",
      icon: <FileCheck className="text-accent mb-5" size={32} />,
      content: "Setiap artikel yang disubmit akan melalui proses Double-Blind Peer Review oleh minimal dua mitra bestari (reviewer) yang ahli di bidangnya. Keputusan penerimaan didasarkan pada orisinalitas, kebaruan, dan kontribusi terhadap ilmu pendidikan."
    },
    {
      title: "Open Access Policy",
      icon: <BookOpen className="text-accent mb-5" size={32} />,
      content: "Jurnal ini menyediakan akses terbuka langsung (Open Access) pada semua kontennya dengan prinsip bahwa membuat penelitian tersedia secara gratis untuk publik akan mendukung pertukaran pengetahuan global yang lebih besar."
    },
    {
      title: "Publication Ethics",
      icon: <Scale className="text-accent mb-5" size={32} />,
      content: "Kami berpegang teguh pada standar etika publikasi tertinggi. Plagiarisme, manipulasi data, dan fabrikasi tidak dapat ditoleransi. Semua penulis wajib memastikan karya yang dikirimkan adalah asli dan belum pernah diterbitkan sebelumnya."
    }
  ];

  const focusScopes = [
    "Sejarah Pendidikan",
    "Filsafat dan Pemikiran Pendidikan",
    "Teori dan Praktik Pendidikan",
    "Kurikulum dan Pengembangan Kurikulum",
    "Strategi Pembelajaran, Media dan Teknologi Pendidikan",
    "Pendidikan Agama dan Keagamaan",
    "Kebijakan dan Administrasi Pendidikan",
    "Pendidikan Multikultural",
    "Inovasi dan Transformasi Pendidikan",
    "Isu, tantangan, serta praktik kontemporer dalam bidang pendidikan"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header & Deskripsi Utama */}
      <header className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-textmain">About the Journal</h1>
        
        <div className="max-w-4xl w-full space-y-6 text-lg text-textmain/80 leading-relaxed text-justify md:text-left text-pretty">
          <p>
            <strong>Journal of Education and Praxis (JEPS)</strong> adalah jurnal ilmiah yang diterbitkan oleh <strong>Penerbit Sakata Cendekia</strong>. Jurnal ini berfokus pada publikasi penelitian orisinal yang menjembatani kesenjangan antara teori pendidikan dan praktik di lapangan (praxis), serta berdedikasi untuk menerbitkan artikel-artikel yang mengeksplorasi inovasi pedagogik, teknologi pendidikan, kurikulum, dan pendidikan inklusif.
          </p>
          <p>
            JEPS secara khusus mewadahi publikasi ilmiah yang bersumber dari kegiatan pendidikan dan pengabdian riil, meliputi hasil penelitian tindakan, pengembangan model pembelajaran, program pelatihan dan pendampingan pendidik, penerapan teknologi pendidikan, serta upaya edukasi, literasi, dan peningkatan kapasitas sekolah maupun masyarakat.
          </p>
        </div>
      </header>

      {/* 2. Focus and Scope (Seksi Penuh) */}
      <section className="bg-white p-8 md:p-12 rounded-2xl border border-secondary shadow-sm">
        <div className="flex items-center gap-3 mb-8 border-b border-secondary pb-4">
          <Eye className="text-accent" size={28} />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-textmain">Focus and Scope</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-textmain/80 leading-relaxed text-justify md:text-left text-pretty">
          <p>
            Journal of Education and Praxis (JEPS) merupakan jurnal ilmiah yang memublikasikan artikel hasil penelitian, kajian konseptual, tinjauan pustaka, dan praktik baik dalam bidang pendidikan. Jurnal ini bertujuan mengembangkan ilmu pengetahuan, memperkaya wacana akademik, serta mendorong inovasi dan perbaikan praktik pendidikan pada berbagai jenjang dan konteks pendidikan.
          </p>
          <p className="font-medium text-textmain">Ruang lingkup JEPS mencakup berbagai kajian dalam bidang pendidikan, yang meliputi:</p>
          
          <ul className="grid grid-cols-1 md:grid-rows-5 md:grid-flow-col gap-x-12 gap-y-4 list-decimal pl-5 py-4 font-medium text-textmain/90 marker:text-accent">
            {focusScopes.map((scope, index) => (
              <li key={index} className="pl-2 leading-snug">{scope}</li>
            ))}
          </ul>
          
          <div className="bg-secondary/30 p-6 rounded-xl border border-secondary mt-8">
            <p className="font-medium text-accent leading-relaxed text-pretty">
              JEPS menerima artikel dalam bahasa Indonesia yang mengedepankan kebaruan, relevansi, dan kontribusi ilmiah terhadap pengembangan teori, kebijakan, dan praktik pendidikan.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Grid Kebijakan Lainnya (Peer Review, Open Access, Ethics) */}
      <section className="grid md:grid-cols-3 gap-8">
        {policies.map((policy, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl border border-secondary hover:shadow-md transition-shadow duration-300 flex flex-col items-start md:items-center md:text-center">
            {policy.icon}
            <h2 className="text-xl font-serif font-bold text-textmain mb-4">{policy.title}</h2>
            <p className="text-textmain/80 leading-relaxed text-pretty">{policy.content}</p>
          </div>
        ))}
      </section>

      {/* 4. Publication Frequency */}
      <section className="bg-accent/5 p-8 md:p-12 rounded-2xl border border-accent/20 flex flex-col items-center text-center">
        <Info className="text-accent mb-6" size={36} />
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-textmain mb-6">Publication Frequency</h2>
        <p className="text-textmain/80 leading-relaxed max-w-3xl text-lg text-pretty">
          Dalam rangka mendukung diseminasi pengetahuan dan praktik pendidikan yang berkesinambungan, Journal of Education and Praxis (JEPS) diterbitkan secara berkala sebanyak <strong>4 (empat) kali dalam setahun</strong>.
        </p>
      </section>
      
    </div>
  );
};

export default About;