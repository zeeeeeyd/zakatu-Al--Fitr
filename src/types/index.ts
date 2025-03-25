export interface Hadith {
  id: number;
  arabicText: string;
  englishText: string;
  reference: string;
  narrator: string;
}

export interface HadithCardProps {
  hadith: Hadith;
  isExpanded?: boolean;
  onClick?: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  hadiths: Hadith[];
  onHadithSelect: (hadith: Hadith) => void;
}

export type FoodType =
  | 'flour'
  | 'rice'
  | 'wheat'
  | 'lentils'
  | 'split_peas'
  | 'semolina'
  | 'chickpeas'
  | 'couscous'
  | 'beans'
  | 'roasted_corn'
  | 'dates'
  | 'raisins'

export const FOOD_WEIGHTS: Record<FoodType, number> = {
  flour: 2000,
  rice: 2300,
  wheat: 2040,
  lentils: 2100,
  split_peas: 2240,
  semolina: 1400,
  chickpeas: 2000,
  couscous: 1800,
  beans: 2060,
  roasted_corn: 2000,
  dates: 1800,
  raisins: 1640,
};

export interface ZakatCalculation {
  numberOfPeople: number;
  foodType: FoodType;
  totalWeight: number;
}


export interface Translation {
  title: string;
  subtitle: string;
  numberOfPeople: string;
  foodType: string;
  requiredZakat: string;
  baseMessage: string;
  shareVia: string;
  foods: Record<FoodType, string>;
  unit: string;
  of: string;
  deadlineTitle: string;
  currentTime: string;
  deadlineMessage: string;
  hadith: string;
}

export interface TimeDisplayProps {
  language: string;
  translations: {
    currentTime: string;
    deadlineTitle: string;
    deadlineMessage: string;
    hadith: string;
  };
}