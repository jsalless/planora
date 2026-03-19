import { Bell, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 bg-white border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar projetos, tarefas..."
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <button className="text-foreground hover:bg-secondary">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-foreground hover:bg-secondary">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
