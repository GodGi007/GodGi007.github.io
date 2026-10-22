/**
 * ข้อมูล Mod ทั้งหมดของ นักแปลนอนน้อย
 * จัดเก็บแบบ Structured Data เพื่อให้เพิ่ม/แก้ไขม็อดใหม่ได้ง่ายในที่เดียว
 */
const MODS_DATA = [
  {
    id: "star-wars-galactic-racer",
    game: "Star Wars Galactic Racer",
    title: "สตาร์ วอร์ส กาแลกติก เรเซอร์ (Thai Mod)",
    shortDesc: "ม็อดแปลภาษาไทยสำหรับเกม Star Wars Galactic Racer แปลเมนู ข้อความ ซับไทย และ UI ทั้งหมดในเกม ให้คุณซิ่งยานแข่งในจักรวาลสตาร์ วอร์สได้อย่างเต็มอรรถรส",
    category: "racing",
    tags: ["Thai", "Racing", "Sci-Fi"],
    version: "v1.0",
    date: "ตุลาคม 2026",
    status: "เสร็จสมบูรณ์",
    cover: "assets/star-wars-galactic-racer-cover.jpg",
    isFeatured: true,
    downloads: {
      nexus: "https://www.nexusmods.com/starwarsgalacticracer/mods/38?published=1",
      mediafire: ""
    },
    highlights: [
      "แปลเมนูหลักและการตั้งค่า 100%",
      "แปลซับไตเติลและบทสนทนา 100%",
      "แปลชื่อยานและข้อมูลสเปกในโรงรถ",
      "ปรับแต่งฟอนต์ภาษาไทยให้อ่านง่าย สบายตา"
    ],
    installGuide: [
      "ดาวน์โหลดไฟล์ Mod (.zip) จากลิงก์ NexusMods",
      "แตกไฟล์ไปยังโฟลเดอร์ติดตั้งของเกม Star Wars Galactic Racer",
      "ทับไฟล์ตามที่โฟลเดอร์ระบุ (แนะนำให้สำรองไฟล์เดิมไว้ก่อน)",
      "เปิดเข้าเกม แล้วสนุกกับภาษาไทยได้ทันที!"
    ]
  },
  {
    id: "rival-stars",
    game: "Rival Stars Horse Racing Desktop Edition",
    title: "ไรวัลสตาร์ส ฮอร์สเรซซิ่ง เดสก์ท็อป เอดิชัน (Thai Mod)",
    shortDesc: "แปลเมนู ข้อความ รายละเอียดม้า และระบบจัดการฟาร์มเป็นภาษาไทยทั้งหมด ให้คนไทยขี่ม้าแข่งและบริหารฟาร์มได้อย่างเต็มอรรถรส",
    category: "simulation",
    tags: ["Thai", "Simulation", "Racing"],
    version: "v1.0",
    date: "กันยายน 2026",
    status: "เสร็จสมบูรณ์",
    cover: "assets/rival-stars-cover.jpg",
    isFeatured: false,
    downloads: {
      nexus: "https://www.nexusmods.com/mods/1?game_id=10056&published=1",
      mediafire: "https://www.mediafire.com/file/6haj1irddgx75v2/RivalStars_ThaiMod_v1.0_Full.zip/file"
    },
    highlights: [
      "แปลระบบบริหารจัดการคอกม้าและการเพาะพันธุ์",
      "แปลชื่อสายพันธุ์ ค่าสถานะ และสกิลของม้า",
      "แปลเมนูการแข่งขันและคำบรรยาย",
      "มีลิงก์สำรองบน MediaFire โหลดเร็วไม่ต้องรอ"
    ],
    installGuide: [
      "ดาวน์โหลดไฟล์จาก NexusMods หรือ MediaFire",
      "แตกไฟล์ Zip จะได้โฟลเดอร์ไฟล์ม็อด",
      "นำไฟล์ไปวางในโฟลเดอร์เกมตามคู่มือที่แนบไว้ในไฟล์",
      "เปิดเกม ตรวจสอบการตั้งค่าภาษาในเกม"
    ]
  },
  {
    id: "breathedge",
    game: "Breathedge",
    title: "เบรสเฮดจ์ — เอาชีวิตรอดในห้วงอวกาศ (Thai Mod)",
    shortDesc: "แปลเนื้อหา ข้อความ และ UI ทั้งหมดในเกมเป็นภาษาไทย ให้คนไทยได้สัมผัสเรื่องราวสุดกวนและการเอาตัวรอดในอวกาศได้อย่างเต็มอิ่ม",
    category: "survival",
    tags: ["Thai", "Survival", "Sci-Fi", "Comedy"],
    version: "v1.0",
    date: "สิงหาคม 2026",
    status: "เสร็จสมบูรณ์",
    cover: "assets/breathedge-cover.png",
    isFeatured: false,
    downloads: {
      nexus: "https://www.nexusmods.com/breathedge/mods/36",
      mediafire: ""
    },
    highlights: [
      "แปลมุกตลกและบทสนทนาสุดกวนครบทุกรสชาติ",
      "แปลชื่อไอเทม สูตรคราฟต์ของ และพิมพ์เขียว",
      "แปลซับเสียง AI คู่หูและเสียงบรรยาย",
      "รองรับตัวเกมเวอร์ชันล่าสุดบน PC"
    ],
    installGuide: [
      "โหลดไฟล์จาก NexusMods",
      "นำไฟล์ไปวางในไดเรกทอรี `Breathedge/Content/Paks/~mods` (หากไม่มีโฟลเดอร์ ~mods ให้สร้างขึ้นมา)",
      "เปิดเกมเล่นได้ทันที"
    ]
  },
  {
    id: "small-and",
    game: "Small And: Survive the Wilds",
    title: "แดนคนจิ๋ว — Thai Translation Mod",
    shortDesc: "แปลเนื้อหาในเกมเป็นภาษาไทยทั้งหมด ไม่ว่าจะเป็น UI, คำอธิบายไอเทม, และ Dialogue ผจญภัยในโลกไซส์จิ๋วแบบไม่งง",
    category: "survival",
    tags: ["Thai", "Survival", "Adventure"],
    version: "v1.0",
    date: "กรกฎาคม 2026",
    status: "เสร็จสมบูรณ์",
    cover: "assets/small-and-cover.png",
    isFeatured: false,
    downloads: {
      nexus: "https://www.nexusmods.com/smallandsurvivethewilds/mods/29?tab=files",
      mediafire: ""
    },
    highlights: [
      "แปลระบบคราฟต์ของ สกิล และชุดเกราะ",
      "แปลเควสต์และบทสนทนาของ NPC",
      "แปลระบบสัตว์เลี้ยงและการสร้างฐาน",
      "ภาษาไทยสละสลวย เข้าใจง่าย"
    ],
    installGuide: [
      "ดาวน์โหลดไฟล์ม็อดจาก NexusMods",
      "แตกไฟล์นำไปวางในโฟลเดอร์ Paks ของตัวเกม",
      "เข้าเกม สามารถเล่นต่อจากเซฟเดิมได้ทันที"
    ]
  },
  {
    id: "never-alone",
    game: "Never Alone (Kisima Ingitchuna)",
    title: "ฉันไม่ได้อยู่ตัวคนเดียว (Thai Mod)",
    shortDesc: "แปลเนื้อหาและซับไทยในเกมทั้งหมด ให้คนไทยได้สัมผัสเรื่องราวสุดซาบซึ้งและวัฒนธรรมชาวอินูอิตได้อย่างลึกซึ้ง",
    category: "adventure",
    tags: ["Thai", "Story", "Adventure"],
    version: "v1.0",
    date: "กรกฎาคม 2026",
    status: "เสร็จสมบูรณ์",
    cover: "assets/never-alone-cover.png",
    isFeatured: false,
    downloads: {
      nexus: "https://www.nexusmods.com/neveralonekisimaingitchuna/mods/2?published=1",
      mediafire: ""
    },
    highlights: [
      "แปลเนื้อเรื่องและนิทานพื้นบ้านของชนเผ่า 100%",
      "แปลสารคดีสั้นเชิงวัฒนธรรม (Cultural Insights)",
      "แปลเมนูและการตั้งค่าทั้งหมด",
      "ฟอนต์อ่านง่าย เข้ากับโทนของเกม"
    ],
    installGuide: [
      "ดาวน์โหลดไฟล์จาก NexusMods",
      "แตกไฟล์แล้วคัดลอกไปทับในไดเรกทอรีเกม Never Alone",
      "เข้าเล่นเกม แล้วเปิดการแสดงผลซับไตเติลในเมนูการตั้งค่า"
    ]
  }
];

if (typeof window !== "undefined") {
  window.MODS_DATA = MODS_DATA;
}
