import type { SiteContent } from "@/lib/site-content";

export const msContent: SiteContent = {
  localeLabel: "Bahasa Melayu",
  alternateLocaleLabel: "English",
  nav: [
    { type: "link", href: "/about", label: "Tentang" },
    {
      type: "group",
      label: "Menu",
      children: [
        { href: "/menu/ala-carte", label: "Menu à la carte" },
        { href: "/menu/party-package", label: "Pakej parti" },
      ],
    },
    { type: "link", href: "/pickup-delivery", label: "Ambil & hantar" },
    { type: "link", href: "/gallery", label: "Galeri foto" },
    { type: "link", href: "/feedback", label: "Maklum balas pelanggan" },
  ],
  footerNote:
    "Pastri small-batch dari Kota Kinabalu. Pra-tempahan, dibungkus dengan teliti.",
  footerOrderCta: "Menu pra-tempahan",
  footerInstagramCta: "Ikuti di Instagram",
  site: {
    name: "Creme Crust",
    handle: "@cremecrust.co",
    pickupArea: "Kota Kinabalu, Sabah",
    availability: "Pra-tempahan sahaja",
    instagramUrl: "https://www.instagram.com/cremecrust.co/",
    preorderUrl: null,
    contactText:
      "Bila pra-tempahan dibuka, gunakan pautan di sini atau di bio Instagram. Ada soalan? Hantar DM.",
    menuHint:
      "Pautan order terus boleh ditambah kemudian; buat masa ini Instagram ada menu aktif.",
    feedbackEmail: null,
    nextDrop: {
      label: "Pra-tempahan seterusnya",
      opensAt: "2026-04-03T20:00:00+08:00",
      opensAtDisplay: "Jumaat, 3 April 2026, 8:00 PM MYT",
      timeZone: "Asia/Kuala_Lumpur",
      opensLabel: "Buka",
      countdownLabel: "Sebelum pra-tempahan dibuka",
      pendingTitle: "Pusingan seterusnya dalam penyediaan.",
      pendingBody:
        "Tarikh dan masa tepat akan dipaparkan di sini sebaik sahaja pra-tempahan seterusnya disahkan.",
      liveTitle: "Pra-tempahan dibuka.",
      liveBody:
        "Buat tempahan melalui pautan. Untuk pertanyaan last-minute, mesej kami di Instagram.",
      pickupNote: "Pickup di Kota Kinabalu",
      reminderLabel: "Peringatan di Instagram",
    },
  },
  home: {
    eyebrow: "Pastri pra-tempahan · Kota Kinabalu",
    title: "Tartlet, craquelin, dan brownie — dibakar dalam batch kecil.",
    description:
      "Kami buat tartlet berkilat, craquelin bertutup crackle, dan brownie padat dengan koko Sabah. Setiap pusingan dibungkus untuk pickup apabila pra-tempahan dibuka.",
    primaryCta: "Tempah",
    secondaryCta: "Instagram",
    proof: [
      "Batch kecil",
      "Pickup di Kota Kinabalu",
      "Tarikh di Instagram",
    ],
    signaturesTitle: "Apa yang kami bakar",
    signaturesIntro:
      "Tiga barisan tetap: tartlet yang cerah dan kemas, craquelin rangup di luar lembut di dalam, brownie koko yang dalam.",
    signaturesMobileIntro:
      "Tartlet, craquelin, brownie — perisa berubah ikut setiap drop.",
    signatures: [
      {
        title: "Tartlet",
        subtitle: "Permukaan berkilat, tepi rapi",
        description:
          "Buah, kastard, dan perisa tempatan seperti pandan dan gula melaka — kecil, kemas, senang dikongsi.",
      },
      {
        title: "Craquelin",
        subtitle: "Tutup rangup, inti lembut",
        description:
          "Choux bertutup crackle dengan inti krim. Vanila, koko, atau perisa musim.",
      },
      {
        title: "Brownie",
        subtitle: "Koko Sabah, tekstur fudgy",
        description:
          "Petak gelap dan kaya — sesuai untuk hadiah atau untuk diri sendiri.",
      },
    ],
    storyTitle: "Batch terhad, bungkusan dijaga",
    storyBody: "Batch kecil, bungkusan dijaga.",
    processTitle: "Cara ia berjalan",
    process: [
      {
        title: "Batch kecil",
        description:
          "Kami bakar mengikut tingkap pra-tempahan, bukan stok kaunter tanpa had.",
      },
      {
        title: "Sedia untuk dibawa",
        description:
          "Tisu, susunan, dan seal penting — kami mahu kotak sampai nampak sama seperti ketika diberi.",
      },
      {
        title: "Pickup Kota Kinabalu",
        description:
          "Butiran pickup diberi selepas tempahan. Serahan cepat dan tempatan.",
      },
    ],
    finalTitle: "Sertai pra-tempahan seterusnya",
    finalBody:
      "Ikuti Instagram untuk menu dan masa pembukaan. Tempah di sini apabila tingkap dibuka.",
  },
  menu: {
    title: "Menu à la carte",
    intro:
      "Ini jenis item yang biasa kami bakar. Perisa sebenar berputar setiap pra-tempahan — semak Instagram untuk pusingan semasa.",
    note:
      "Tidak semuanya ada setiap kali. Nampak sesuatu yang anda mahu? Tempah apabila tingkap dibuka.",
    sections: [
      {
        title: "Tartlet",
        note: "Kilat di atas, tepi bersih.",
        items: [
          {
            name: "Tartlet kastard pandan",
            detail: "Kastard pandan lembut dalam kulit kemas.",
          },
          {
            name: "Tartlet krim beri",
            detail: "Buah cerah dan krim.",
          },
          {
            name: "Tartlet gula melaka",
            detail: "Nota karamel dan kemasan lebih gelap.",
          },
        ],
      },
      {
        title: "Craquelin",
        note: "Tutup crackle, tengah lembut.",
        items: [
          {
            name: "Craquelin susu vanila",
            detail: "Lembut, krim, senang ambil lebih dari satu.",
          },
          {
            name: "Craquelin koko",
            detail: "Versi coklat lebih dalam pada shell yang sama.",
          },
          {
            name: "Craquelin musim",
            detail: "Perisa berputar bila kami cuba sesuatu baharu.",
          },
        ],
      },
      {
        title: "Brownie",
        note: "Padat, mudah potong.",
        items: [
          {
            name: "Brownie koko Sabah",
            detail: "Gelap, fudgy, rasa koko jelas.",
          },
          {
            name: "Brownie masin",
            detail: "Lebih dalam dengan sedikit garam.",
          },
          {
            name: "Tambahan hadiah",
            detail: "Kotak atau riben tambahan bila membeli untuk orang lain.",
          },
        ],
      },
    ],
    sidebarTitle: "Cara tempah",
    sidebarBody:
      "Halaman ini panduan apa yang kami buat. Senarai dan harga hidup ada dalam pautan pra-tempahan atau di Instagram apabila setiap pusingan dibuka.",
  },
  partyPackage: {
    title: "Pakej parti",
    intro:
      "Tempah susunan pilihan untuk hari jadi, majlis kecil, atau hidangan pejabat. Beritahu tarikh, bilangan orang, dan bajet — kami cadangkan campuran kotak.",
    note:
      "Notis minimum, harga, dan ketersediaan bergantung pada minggu tersebut. Mesej kami di Instagram untuk merancang pakej parti.",
    packages: [
      {
        name: "Kotak majlis",
        description: "Campuran tartlet, craquelin, dan potongan brownie untuk 6–10 orang.",
        includes: [
          "Tartlet pelbagai",
          "Craquelin",
          "Brownie kecil",
          "Nota pinggan mangkuk pakai buang jika diminta",
        ],
      },
      {
        name: "Tahap sambutan",
        description: "Volume lebih besar dengan kemasan tambahan — riben, tag, atau kad mesej ringkas.",
        includes: [
          "Kuantiti diperbesar",
          "Bungkusan diselaraskan",
          "Tambahan bunga (ikut ketersediaan)",
        ],
      },
      {
        name: "Brief khas",
        description: "Anda tetapkan tema; kami cadangkan perisa dan susunan.",
        includes: [
          "Perbincangan melalui DM",
          "Menu disesuaikan dengan acara",
          "Masa pickup atau serahan dipersetujui awal",
        ],
      },
    ],
  },
  pickupDelivery: {
    title: "Ambil & hantar",
    intro:
      "Pickup pra-tempahan ialah lalai kami di Kota Kinabalu. Penghantaran mungkin tersedia untuk kawasan terpilih — sahkan dalam DM semasa tempahan.",
    methods: [
      {
        title: "Ambil sendiri (pickup)",
        description:
          "Kami kongsi lokasi dan tingkap masa selepas tempahan disahkan. Sila hadir dalam slot supaya kotak kekal segar.",
      },
      {
        title: "Penghantaran",
        description:
          "Bila ditawarkan, penghantaran merangkumi zon yang dipersetujui di Kota Kinabalu. Caj dan slot bergantung pada jarak dan saiz pesanan — tanya semasa pra-tempahan.",
      },
      {
        title: "Luar KK",
        description:
          "Untuk kawasan di luar radius biasa, kami mungkin cadangkan pickup atau penghantar pihak ketiga yang anda atur sendiri.",
      },
    ],
    closingNote:
      "Butiran tepat disahkan setiap pesanan. DM Instagram adalah tempat terbaik untuk mengikat pickup atau penghantaran untuk pusingan anda.",
  },
  gallery: {
    title: "Galeri foto",
    intro:
      "Tatal gambar bakaran dan kotak terkini. Untuk apa yang boleh ditempah sekarang, semak Instagram atau pautan pra-tempahan.",
    eyebrow: "Galeri",
    carouselTitle: "Dari dapur ke kotak.",
    carouselBody:
      "Tartlet, brownie, bungkusan, dan susunan — penjagaan sama sama ada satu kotak atau hari preorder penuh.",
  },
  feedback: {
    title: "Maklum balas pelanggan",
    intro:
      "Beritahu apa yang anda suka, apa boleh diperbaiki, atau apa anda mahu lihat pada menu seterusnya. Kami baca setiap mesej.",
    channelsTitle: "Cara menghubungi",
    channels: [
      {
        title: "DM Instagram",
        description:
          "Paling pantas untuk foto, soalan tempahan, dan nota ringkas selepas pickup.",
      },
      {
        title: "Nota tempahan",
        description:
          "Apabila pra-tempahan dibuka, tinggalkan nota dalam borang jika platform membenarkan.",
      },
    ],
    emailCta: "E-mel kami",
  },
  about: {
    title: "Tentang Creme Crust",
    intro:
      "Creme Crust ialah dapur pastri pra-tempahan di Kota Kinabalu. Kami fokus pada batch kecil, kemasan yang jelas, dan kotak yang anda bangga bawa pulang.",
    storyTitle: "Kenapa pra-tempahan",
    storyBody: [
      "Pra-tempahan membantu kami merancang setiap bakaran dan bungkusan tanpa pembaziran. Anda tahu apa yang anda dapat; kami tahu berapa banyak untuk dibuat.",
      "Kami guna perisa tempatan — pandan, gula melaka, koko Sabah — bersama idea pastri klasik. Jika sesuatu kembali, anda akan nampak di Instagram dahulu.",
    ],
    valuesTitle: "Apa yang kami utamakan",
    values: [
      {
        title: "Kemasan",
        description:
          "Permukaan, tepi, dan pembungkusan dapat perhatian sama seperti inti pastri.",
      },
      {
        title: "Batch jujur",
        description:
          "Bila pusingan penuh, ia penuh. Kami lebih sangkaup habis daripada menjanjikan berlebihan.",
      },
      {
        title: "Pickup tempatan",
        description:
          "Pickup kekal di Kota Kinabalu supaya serahan mudah dan makanan segar.",
      },
    ],
  },
  order: {
    title: "Cara membuat tempahan",
    intro:
      "Pra-tempahan dibuka untuk tempoh tertentu. Menu dan masa diumumkan di Instagram; pautan tempahan aktif apabila kami sedia.",
    primaryCta: "Buka pautan tempahan",
    fallbackTitle: "Pautan tempahan akan datang",
    fallbackBody:
      "URL pra-tempahan langsung belum dipasang. Gunakan Instagram untuk menu semasa dan untuk menghubungi kami.",
    stepsTitle: "Langkah",
    steps: [
      {
        title: "Semak Instagram",
        description:
          "Lihat tarikh, menu, dan bila pautan dibuka — biasanya di bio atau dalam post.",
      },
      {
        title: "Pilih kotak anda",
        description:
          "Pilih item dan kuantiti dalam borang pra-tempahan apabila ia dibuka.",
      },
      {
        title: "Sahkan pickup",
        description:
          "Kami kongsi slot dan lokasi pickup selepas tempahan. DM jika ada perubahan.",
      },
    ],
    notesTitle: "Perlu tahu",
    notes: [
      "Pickup di Kota Kinabalu, Sabah.",
      "Tiada stok walk-in — semuanya ikut tingkap pra-tempahan.",
      "Ada perisa kembali; ada yang sekali sahaja.",
    ],
    faqTitle: "Soalan lazim",
    faq: [
      {
        question: "Boleh beli tanpa pra-tempahan?",
        answer:
          "Buat masa ini tidak. Kami bakar ikut tempahan supaya kualiti terjaga dan pembaziran rendah.",
      },
      {
        question: "Di mana menu terkini?",
        answer:
          "Instagram — story, post, dan pautan bio ada apa yang hidup untuk pusingan seterusnya.",
      },
      {
        question: "Bagaimana hubungi anda?",
        answer:
          "DM Instagram paling cepat. Kami baca mesej antara menyediakan pickup.",
      },
    ],
  },
};
