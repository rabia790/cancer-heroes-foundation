
export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  id: number;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
