import type { Translation } from './types';

export const translations: Record<string, Translation> = {
  en: {
    title: 'Zakat al-Fitr Guide',
    subtitle: 'Calculate your Zakat al-Fitr amount',
    numberOfPeople: 'Number of People',
    foodType: 'Food Type',
    requiredZakat: 'Required Zakat',
    baseMessage: 'Based on one Ṣāʿ per person',
    shareVia: 'Share via WhatsApp',
    foods: {
      flour: 'Flour',
      rice: 'Rice',
      wheat: 'Wheat',
      lentils: 'Lentils',
      split_peas: 'Split Peas',
      semolina: 'Semolina',
      chickpeas: 'Chickpeas',
      couscous: 'Couscous',
      beans: 'Beans',
      roasted_corn: 'Roasted Corn',
      dates: 'Dates',
      raisins: 'Raisins',
    },
    unit: 'kg',
    of: 'of'
  },
  ar: {
    title: 'دليل زكاة الفطر',
    subtitle: 'احسب مقدار زكاة الفطر',
    numberOfPeople: 'عدد الأشخاص',
    foodType: 'نوع الطعام',
    requiredZakat: 'الزكاة المطلوبة',
    baseMessage: 'على أساس صاع واحد للشخص',
    shareVia: 'شارك عبر واتساب',
    foods: {
      flour: 'دقيق',
      rice: 'أرز',
      wheat: 'قمح',
      lentils: 'عدس',
      split_peas: 'جلبانة ',
      semolina: 'سميد',
      chickpeas: 'حمص',
      couscous: 'كسكس',
      beans: 'لوبيا',
      roasted_corn: 'مُحمّصة',
      dates: 'تمر',
      raisins: 'زبيب',
    },
    unit: 'كغ',
    of: 'من'
  }
};