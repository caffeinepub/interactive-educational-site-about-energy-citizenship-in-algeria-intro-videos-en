/**
 * تكوين الفيديوهات التعليمية
 * 
 * أضف فيديوهاتك التعليمية هنا مصنفة حسب نوع الطاقة.
 * 
 * الصيغ المدعومة:
 * 1. روابط MP4 مباشرة (مثل: /assets/videos/filename.mp4)
 * 2. روابط تضمين YouTube (مثل: https://www.youtube.com/embed/VIDEO_ID)
 * 3. روابط تضمين Vimeo (مثل: https://player.vimeo.com/video/VIDEO_ID)
 * 
 * أنواع الطاقة المتاحة (energyTypeId):
 * - 'oil-gas': النفط والغاز
 * - 'coal': الفحم
 * - 'solar': الطاقة الشمسية
 * - 'wind': طاقة الرياح
 * - 'hydro': الطاقة الكهرومائية
 * - 'geothermal': الطاقة الحرارية الأرضية
 * 
 * أمثلة:
 * 
 * // مثال 1: فيديو YouTube عن الطاقة الشمسية
 * {
 *   title: "مقدمة للطاقة الشمسية في الجزائر",
 *   url: "https://www.youtube.com/embed/VIDEO_ID",
 *   energyTypeId: "solar"
 * }
 * 
 * // مثال 2: فيديو Vimeo عن طاقة الرياح
 * {
 *   title: "توربينات الرياح: كيف تعمل؟",
 *   url: "https://player.vimeo.com/video/VIDEO_ID",
 *   energyTypeId: "wind"
 * }
 * 
 * // مثال 3: ملف MP4 محلي عن الطاقة الكهرومائية
 * {
 *   title: "السدود الكهرومائية في الجزائر",
 *   url: "/assets/videos/hydro-dams.mp4",
 *   energyTypeId: "hydro"
 * }
 * 
 * // مثال 4: فيديو بدون عنوان عن النفط والغاز
 * {
 *   url: "https://www.youtube.com/embed/VIDEO_ID",
 *   energyTypeId: "oil-gas"
 * }
 */

export interface Video {
  title?: string;
  url: string;
  energyTypeId?: 'oil-gas' | 'coal' | 'solar' | 'wind' | 'hydro' | 'geothermal';
}

export const videos: Video[] = [
  {
    title: "فيديو تعليمي 1",
    url: "/assets/VID_20260206_200339_035.mp4"
  },
  {
    title: "فيديو تعليمي 2",
    url: "/assets/VID_20260206_200345_953.mp4"
  },
  {
    title: "فيديو تعليمي 3",
    url: "/assets/VID_20260206_200350_862.mp4"
  }
];
