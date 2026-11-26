/**
 * ข้อมูล Mod ทั้งหมดของ นักแปลนอนน้อย
 * จัดเก็บแบบ Structured Data เพื่อให้เพิ่ม/แก้ไขม็อดใหม่ได้ง่ายในที่เดียว
 * รองรับการระบุสถานะความคืบหน้า (progress 0 - 100%) และสถานะการแปล
 */
const MODS_DATA = [
  // --- 1. ม็อดที่เสร็จสมบูรณ์แล้ว (100%) ---
  {
    id: "star-wars-galactic-racer",
    game: "Star Wars Galactic Racer",
    title: "สตาร์ วอร์ส กาแลกติก เรเซอร์ (Thai Mod)",
    shortDesc: "ม็อดแปลภาษาไทยสำหรับเกม Star Wars Galactic Racer แปลเมนู ข้อความ ซับไทย และ UI ทั้งหมดในเกม ให้คุณซิ่งยานแข่งในจักรวาลสตาร์ วอร์สได้อย่างเต็มอรรถรส",
    category: "racing",
    tags: ["Thai", "Racing", "Sci-Fi", "เสร็จแล้ว"],
    version: "v1.0",
    date: "ตุลาคม 2026",
    status: "เสร็จสมบูรณ์ 100%",
    statusCode: "completed",
    progress: 100,
    statusNote: "แปลสมบูรณ์และทดสอบเรียบร้อย ใช้งานได้ทันที",
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
    tags: ["Thai", "Simulation", "Racing", "เสร็จแล้ว"],
    version: "v1.0",
    date: "กันยายน 2026",
    status: "เสร็จสมบูรณ์ 100%",
    statusCode: "completed",
    progress: 100,
    statusNote: "แปลสมบูรณ์ มีลิงก์สำรองโหลดเร็ว",
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
    tags: ["Thai", "Survival", "Sci-Fi", "Comedy", "เสร็จแล้ว"],
    version: "v1.0",
    date: "สิงหาคม 2026",
    status: "เสร็จสมบูรณ์ 100%",
    statusCode: "completed",
    progress: 100,
    statusNote: "แปลมุกตลกและซับบทสนทนาครบถ้วน",
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
    tags: ["Thai", "Survival", "Adventure", "เสร็จแล้ว"],
    version: "v1.0",
    date: "กรกฎาคม 2026",
    status: "เสร็จสมบูรณ์ 100%",
    statusCode: "completed",
    progress: 100,
    statusNote: "แปลสมบูรณ์ เล่นร่วมกับเซฟเดิมได้",
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
    tags: ["Thai", "Story", "Adventure", "เสร็จแล้ว"],
    version: "v1.0",
    date: "กรกฎาคม 2026",
    status: "เสร็จสมบูรณ์ 100%",
    statusCode: "completed",
    progress: 100,
    statusNote: "แปลเนื้อเรื่องและนิทานพื้นบ้าน 100%",
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
  },
  {
    id: "redfall",
    game: "Redfall",
    title: "เรดฟอลล์ (Redfall Thai Mod)",
    shortDesc: "ม็อดแปลภาษาไทยสำหรับเกม Redfall ร่วมมือกับเพื่อนล่าฝูงแวมไพร์ที่ยึดเกาะ แปลเนื้อเรื่อง ภารกิจ คำอธิบายอาวุธ และระบบการเล่นเป็นภาษาไทยครบวงจร แปลเสร็จสมบูรณ์โดยรวมเรียบร้อย",
    category: "action",
    tags: ["Thai", "Action", "FPS", "Co-op", "เสร็จแล้ว"],
    version: "v1.0",
    date: "พฤศจิกายน 2026",
    status: "เสร็จสมบูรณ์ 100%",
    statusCode: "completed",
    progress: 100,
    statusNote: "แปลเสร็จครบถ้วน โดยรวมเล่นได้ลื่นไหล (หากพบคำเพี้ยน/คำตกหล่น สามารถแจ้งเข้ามาได้ทางเพจ Facebook)",
    cover: "assets/redfall-cover.jpg",
    isFeatured: false,
    downloads: {
      nexus: "",
      mediafire: ""
    },
    highlights: [
      "แปลเนื้อเรื่องหลักและคัตซีนบทสนทนาทั้งหมด 100%",
      "แปลรายละเอียดอาวุธ อุปกรณ์เสริม และสกิลเฉพาะตัวของฮีโร่",
      "แปลคำบรรยายสิ่งแวดล้อมและบันทึกลึกลับรอบเมือง Redfall",
      "รองรับการเล่นทั้งแบบผู้เล่นเดี่ยว (Solo) และ Co-op กับเพื่อน"
    ],
    installGuide: [
      "นำไฟล์ม็อดไปวางในโฟลเดอร์ตัวเกมตามคำแนะนำ",
      "เปิดเข้าเกมเพื่อเล่นภาษาไทยได้ทันที",
      "หากพบคำแปลเพี้ยนหรือข้อผิดพลาด สามารถทักแจ้งที่เพจ Facebook นักแปลนอนน้อย ได้ตลอดเวลาครับ"
    ]
  },

  // --- 2. ม็อดที่กำลังแปลอยู่ (In Progress / WIP) ---
  {
    id: "blood-west",
    game: "Blood West",
    title: "บลัด เวสต์ (Blood West Thai Mod)",
    shortDesc: "ม็อดแปลภาษาไทยสำหรับเกม Blood West ตะลุยแดนคาวบอยสยองขวัญ แปลเควสต์ เนื้อเรื่อง บทสนทนา และ UI ทั้งหมดในเกม ให้คุณเอาชีวิตรอดในหุบเขาต้องสาปได้อย่างเต็มอรรถรส",
    category: "action",
    tags: ["กำลังแปล", "Action", "Stealth", "Horror"],
    version: "กำลังพัฒนา (WIP)",
    date: "พฤศจิกายน 2026",
    status: "กำลังแปลบทที่ 3 (75%)",
    statusCode: "in_progress",
    progress: 75,
    statusNote: "กำลังลุยแปลเนื้อหาบทที่ 3 (Chapter 3) เข้าสู่ช่วงโค้งสุดท้าย",
    cover: "assets/blood-west-cover.jpg",
    isFeatured: false,
    downloads: {
      nexus: "",
      mediafire: ""
    },
    highlights: [
      "แปลเควสต์และบทสนทนาของตัวละครในแดนคาวบอยผีดิบ",
      "แปลชื่อไอเทม อาวุธปืน โคตรคำอธิบายเครื่องราง",
      "แปลเมนูการตั้งค่าและระบบ Perk ทั้งหมด",
      "ออกแบบฟอนต์ภาษาไทยให้ได้อารมณ์ตะวันตกคลาสสิกปนสยองขวัญ"
    ],
    installGuide: [
      "ม็อดอยู่ในขั้นตอนการแปลบทที่ 3 และทดสอบความถูกต้องของคำ",
      "เมื่อแปลเสร็จสมบูรณ์ 100% จะปล่อยให้ดาวน์โหลดฟรีผ่าน NexusMods ทันที",
      "ติดตามความคืบหน้ารายวันได้ที่เพจ Facebook นักแปลนอนน้อย"
    ]
  },

  // --- 3. โปรเจกต์ที่วางแผนไว้ / รอตัวเกม (Upcoming / Waiting) ---
  {
    id: "tomb-raider-legacy-of-atlantis",
    game: "Tomb Raider: Legacy of Atlantis",
    title: "ทูมเรเดอร์: เลกาซี ออฟ แอตแลนติส (Thai Mod)",
    shortDesc: "โปรเจกต์ม็อดแปลภาษาไทยสำหรับ Tomb Raider: Legacy of Atlantis การผจญภัยครั้งประวัติศาสตร์ของ Lara Croft บนเอนจิน Unreal Engine 5 วางแผนเริ่มแปลทันทีที่เกมเปิดตัว!",
    category: "adventure",
    tags: ["รอตัวเกม", "Action", "Adventure", "UE5"],
    version: "วางแผนไว้ (Upcoming)",
    date: "รอเกมวางจำหน่าย",
    status: "รอตัวเกมมา",
    statusCode: "upcoming",
    progress: 0,
    statusNote: "เตรียมพร้อมเครื่องมือและทีมงาน เริ่มแปลทันทีเมื่อเกมออก",
    cover: "assets/tomb-raider-legacy-cover.jpg",
    isFeatured: false,
    downloads: {
      nexus: "",
      mediafire: ""
    },
    highlights: [
      "เตรียมพร้อมแปลเนื้อเรื่อง มหากาพย์นครแอตแลนติส 100%",
      "แปลบันทึกโบราณคดี ปริศนาพัซเซิล และคำบอกใบ้ในวิหาร",
      "แปลซับไตเติลและ UI รองรับภาพระดับ Next-Gen UE5",
      "เปิดให้ลงทะเบียนรับแจ้งเตือนเมื่อม็อดพร้อมดาวน์โหลด"
    ],
    installGuide: [
      "เกมอยู่ในสถานะเตรียมวางจำหน่ายอย่างเป็นทางการ",
      "เมื่อตัวเกมเปิดให้เล่น จะทำการสกัดไฟล์และเริ่มแปลทันทีโดยเร็วที่สุด",
      "สามารถติดตามข่าวสารการเริ่มโปรเจกต์ได้ที่เพจ Facebook"
    ]
  }
];

if (typeof window !== "undefined") {
  window.MODS_DATA = MODS_DATA;
}
