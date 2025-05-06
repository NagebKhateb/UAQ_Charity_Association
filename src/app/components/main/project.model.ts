export interface Project {
  id: number;
  title: string;
  description: string;
  label: 'Current Project' | 'Standing Project';
  imageUrl: string;
}
