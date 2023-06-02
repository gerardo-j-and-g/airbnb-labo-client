export interface ICard {
  id: number;
  images: string[];
  ville: string;
  pays: string;
  particulier: boolean;
  date: { start: string; end: string };
  prix: number;
}
