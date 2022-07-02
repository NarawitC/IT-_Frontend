import { GiScrollQuill } from 'react-icons/gi';
import axios from '../../config/axios';

export const adminGetClient = async () => {
  return await axios.get('/admin/client');
};

// test create subcat

const sc1 = [
  'หูฟัง',
  'อุปกรณ์เสริมหูฟัง',
  'ลำโพง',
  'Dac & Amplifier',
  'เครื่องเล่นเพลง (DAP)',
  'AV Receiver',
  'อุปกรณ์เสริมเครื่องเสียง (Audio Accessories)',
];

export const scarr = [
  [
    'หูฟัง',
    'อุปกรณ์เสริมหูฟัง',
    'ลำโพง',
    'Dac & Amplifier',
    'เครื่องเล่นเพลง (DAP)',
    'AV Receiver',
    'อุปกรณ์เสริมเครื่องเสียง (Audio Accessories)',
  ],
  [
    'หูฟังเกมมิ่ง',
    'คีย์บอร์ดเกมมิ่ง',
    'เมาส์เกมมิ่ง',
    'เก้าอี้เกมมิ่ง',
    'โต๊ะเกมมิ่ง',
    'เกมมิ่งเกียร์',
    'จอคอมเกมมิ่ง',
    'Custom Keyboard',
    'อุปกรณ์เกมมือถือ',
    'เกมคอนโซล',
    'จอยเกมส์',
  ],
  [
    'เก้าอี้',
    'อุปกรณ์เสริมเก้าอี้',
    'โต๊ะ',
    'อุปกรณ์เสริมโต๊ะ',
    'ที่วางและชั้นวาง',
    'ขาตั้ง',
    'ชั้นวางของ',
    'อุปกรณ์จัดเก็บสายไฟ',
    'ไฟตกแต่ง',
  ],
  [
    'คอมพิวเตอร์เช็ต',
    'ประกอบคอม DIY',
    'โน๊ตบุ๊ค',
    'Tablet',
    'จอคอมพิวเตอร์',
    'อุปกรณ์ตกแต่งเคสคอม',
    'อุปกรณ์ประกอบชุดน้ำ',
    'All in one / Mini PC',
    'อุปกรณ์เสริมโน๊ตบุ๊ค',
  ],
  [
    'กล้อง Webcam',
    'ไมค์คอนเดนเซอร์',
    'การ์ดแคปเจอร์',
    'ขาไมค์หนีบโต๊ะ',
    'ไฟไลฟ์สด',
    'กรีนสกรีน',
    'Stream Deck',
    'อุปกรณ์เสริม Live Streaming',
  ],
  [
    'ไมค์คอมพิวเตอร์',
    'เมาส์',
    'คีย์บอร์ด',
    'ลำโพงคอมพิวเตอร์',
    'อุปกรณ์จัดเก็บข้อมูล',
    'อุปกรณ์จ่ายไฟ',
    'เครื่องปริ้นเตอร์และหมึกพิมพ์',
    'อุปกรณ์เน็ตเวิร์ค',
    'โปรเจคเตอร์และอุปกรณ์',
  ],
  [
    'หัวชาร์จ',
    'สายชาร์จ',
    'พาวเวอร์แบงค์',
    'แท่นชาร์จ',
    'เคส',
    'คีย์บอร์ด iPad & Tablet',
    'แท่นวาง',
    'อุปกรณ์เสริมในรถยนต์',
    'ฟิล์มกันรอย',
    'ปากกาสไตลัส',
    'ตัวแปลงสัญญาณ',
    'กระเป๋า',
    'อุปกรณ์เสริมถ่ายรูป',
    'หน่วยความจำสำรองมือถือ',
    'อุปกรณ์เสริม iPad',
    'ที่ติดหลังโทรศัพท์',
  ],
  [
    'บอร์ดเกม',
    'การ์ตูน หนัง',
    'ตัวต่อ',
    'การ์ดเกม การ์ดสะสม',
    'หุ่นโมเดล & ฟิกเกอร์',
  ],
  [
    'อุปกรณ์สวมใส่ (Wearable)',
    'สมาร์ทวอทช์',
    'ฟิตเนสแทรคเกอร์',
    'นาฬิกาไฮบริด',
    'แว่นอัจฉริยะ',
    'อุปกรณ์เสริมสมาร์ทวอทช์',
    'เพื่อสุขภาพ',
    'หูฟังออกกำลังกาย',
  ],
  [
    'ไมโครโฟน',
    'อุปกรณ์เสริมไมโครโฟน',
    'ลำโพงสำหรับมืออาชีพ',
    'เครื่องเสียงสำหรับมืออาชีพ',
    'อุปกรณ์เสริมเครื่องเสียง',
    'อุปกรณ์ DJ',
    'เครื่องบันทึกเสียง',
    'เครื่องดนตรี',
    'อุปกรณ์เสริมเครื่องดนตรี',
  ],
  [
    'กล่องสมาร์ททีวี',
    'ลำโพงอัจฉริยะ',
    'Hub / Gateway',
    'รีโมทอัจฉริยะ',
    'ระบบไฟอัจฉริยะ',
    'Smart Sensor',
    'อุปกรณ์ความปลอดภัย',
    'หุ่นยนต์ทำความสะอาด',
    'เครื่องดูดฝุ่น',
    'เครื่องฟอกอากาศ',
    'ม่านอัจฉริยะ',
    'เครื่องเพิ่มความชื้น',
    'กรอบรูปอัจฉริยะ',
    'ถังขยะอัจฉริยะ',
  ],
  [
    'โดรน',
    'อุปกรณ์เสริมโดรน',
    'กล้อง',
    'อุปกรณ์เสริม Action Camera',
    'อุปกรณ์เสริมกล้อง',
    'ไม้กันสั่น',
    'ขาตั้งกล้อง',
    'อุปกรณ์ไฟ',
    'กระเป๋าและสาย',
    'เคสกล้อง',
    'อุปกรณ์ทำความสะอาดกล้อง',
  ],
  [' จักรยานไฟฟ้า', ' โกคาร์ท', ' สกู๊ตเตอร์ไฟฟ้า'],
  [
    'กล้องติดรถยนต์',
    'เครื่องแปลภาษา',
    'Universal Adapter',
    'GPS Tracker',
    'กระเป๋าเดินทางไฟฟ้า',
  ],
];

export const CareateSubcat = async () => {
  scarr.map((el, idx) => {
    el.map((elsubcat) => {
      const funncreatesubcat = async (s_catname, catid) => {
        console.log(elsubcat);
        await axios.post('/admin/sub-category', {
          subCategoryName: elsubcat,
          categoryId: catid,
        });
      };
      funncreatesubcat(elsubcat, idx + 1);
    });
  });
};
// CareateSubcat();
