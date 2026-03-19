import { Home, FolderOpen, CheckSquare, BarChart3, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-border shadow-sm flex flex-col">
      {/* Logo Section */}
      <div className="px-6 py-8 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <h1 className="font-bold text-xl text-foreground">PLANORA</h1>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem icon={Home} label="Dashboard" active />
        <NavItem icon={FolderOpen} label="Projetos" />
        <NavItem icon={CheckSquare} label="Minhas Tarefas" />
        <NavItem icon={BarChart3} label="Relatórios" />
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-6 border-t border-border space-y-2">
        <NavItem icon={Settings} label="Configurações" />
        <button
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </button>
      </div>
    </aside>
  );
}

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}

function NavItem({ icon: Icon, label, active = false }: NavItemProps) {
  return (
    <button
      className={`w-full justify-start ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground hover:bg-secondary'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </button>
  );
}
