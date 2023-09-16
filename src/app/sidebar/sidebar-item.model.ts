export interface SidebarItem {
    id: number;
    label: string;
    iconClass?: string;
    children?: SidebarItem[];
    expanded?:boolean;
};
