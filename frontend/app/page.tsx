"use client";

import { useState } from 'react';
import { Plus, TrendingUp, Home as HomeIcon, FolderOpen, CheckSquare, BarChart3, Settings, LogOut, Search, Bell, User, MoreVertical, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const projects = [
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Redesign completo do site corporativo',
      color: '#004643',
      progress: 65,
      members: 5,
      tasks: 24,
      completedTasks: 16,
    },
    {
      id: '2',
      name: 'Mobile App',
      description: 'Desenvolvimento do aplicativo mobile',
      color: '#00897b',
      progress: 40,
      members: 8,
      tasks: 32,
      completedTasks: 13,
    },
    {
      id: '3',
      name: 'Marketing Campaign',
      description: 'Campanha de marketing Q1 2026',
      color: '#00695c',
      progress: 85,
      members: 3,
      tasks: 15,
      completedTasks: 13,
    },
    {
      id: '4',
      name: 'API Integration',
      description: 'Integração com APIs externas',
      color: '#004d47',
      progress: 50,
      members: 4,
      tasks: 18,
      completedTasks: 9,
    },
    {
      id: '5',
      name: 'Database Migration',
      description: 'Migração de banco de dados',
      color: '#003d3a',
      progress: 30,
      members: 2,
      tasks: 12,
      completedTasks: 4,
    },
    {
      id: '6',
      name: 'Security Audit',
      description: 'Auditoria de segurança completa',
      color: '#00897b',
      progress: 75,
      members: 6,
      tasks: 20,
      completedTasks: 15,
    },
  ];

  const activities = [
    {
      type: 'completed' as const,
      user: 'João Silva',
      action: 'concluiu',
      target: 'Revisar design',
      project: 'Website Redesign',
      timestamp: 'há 2 horas',
    },
    {
      type: 'commented' as const,
      user: 'Maria Santos',
      action: 'comentou em',
      target: 'Implementar API',
      project: 'API Integration',
      timestamp: 'há 4 horas',
    },
    {
      type: 'created' as const,
      user: 'Pedro Costa',
      action: 'criou',
      target: 'Nova tarefa',
      project: 'Mobile App',
      timestamp: 'há 6 horas',
    },
    {
      type: 'assigned' as const,
      user: 'Ana Oliveira',
      action: 'foi atribuída a',
      target: 'Testes de qualidade',
      project: 'Website Redesign',
      timestamp: 'há 8 horas',
    },
  ];

  const deadlines = [
    {
      id: '1',
      title: 'Entregar protótipos finais',
      project: 'Website Redesign',
      dueDate: '20 de março',
      daysLeft: 1,
      priority: 'high' as const,
      assignee: 'João Silva',
      status: 'in-progress' as const,
    },
    {
      id: '2',
      title: 'Revisão de código',
      project: 'API Integration',
      dueDate: '22 de março',
      daysLeft: 3,
      priority: 'medium' as const,
      assignee: 'Pedro Costa',
      status: 'pending' as const,
    },
    {
      id: '3',
      title: 'Testes de usabilidade',
      project: 'Mobile App',
      dueDate: '25 de março',
      daysLeft: 6,
      priority: 'medium' as const,
      assignee: 'Maria Santos',
      status: 'pending' as const,
    },
    {
      id: '4',
      title: 'Publicar campanha',
      project: 'Marketing Campaign',
      dueDate: '21 de março',
      daysLeft: 2,
      priority: 'high' as const,
      assignee: 'Ana Oliveira',
      status: 'in-progress' as const,
    },
  ];

  const tasks = [
    {
      id: '1',
      title: 'Revisar design mockups',
      project: 'Website Redesign',
      priority: 'high' as const,
      status: 'in-progress' as const,
      dueDate: '20 de março',
      assignee: 'João Silva',
    },
    {
      id: '2',
      title: 'Implementar API endpoints',
      project: 'API Integration',
      priority: 'high' as const,
      status: 'in-progress' as const,
      dueDate: '22 de março',
      assignee: 'Pedro Costa',
    },
    {
      id: '3',
      title: 'Testes de usabilidade',
      project: 'Mobile App',
      priority: 'medium' as const,
      status: 'pending' as const,
      dueDate: '25 de março',
      assignee: 'Maria Santos',
    },
    {
      id: '4',
      title: 'Documentação técnica',
      project: 'API Integration',
      priority: 'medium' as const,
      status: 'pending' as const,
      dueDate: '28 de março',
      assignee: 'Ana Oliveira',
    },
    {
      id: '5',
      title: 'Otimizar performance',
      project: 'Website Redesign',
      priority: 'low' as const,
      status: 'pending' as const,
      dueDate: '30 de março',
      assignee: 'Carlos Silva',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'pending':
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700';
      case 'low':
        return 'bg-green-50 text-green-700';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'commented':
        return <AlertCircle className="w-5 h-5 text-blue-600" />;
      case 'created':
        return <Plus className="w-5 h-5 text-purple-600" />;
      case 'assigned':
        return <User className="w-5 h-5 text-orange-600" />;
    }
  };

  const getDeadlineStatusIcon = (status: string) => {
    if (status === 'completed') {
      return <CheckCircle2 className="w-4 h-4 text-green-600" />;
    } else if (status === 'in-progress') {
      return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    }
    return <Circle className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* SIDEBAR */}
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
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="w-full text-left"
            >
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'dashboard'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                <HomeIcon className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </div>
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className="w-full text-left"
            >
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'projects'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                <FolderOpen className="w-5 h-5" />
                <span className="font-medium">Projetos</span>
              </div>
            </button>
            <button
              onClick={() => setCurrentPage('tasks')}
              className="w-full text-left"
            >
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'tasks'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                <CheckSquare className="w-5 h-5" />
                <span className="font-medium">Minhas Tarefas</span>
              </div>
            </button>
            <button className="w-full text-left">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-all">
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">Relatórios</span>
              </div>
            </button>
          </nav>

          {/* Bottom Section */}
          <div className="px-4 py-6 border-t border-border space-y-2">
            <button className="w-full text-left">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-all">
                <Settings className="w-5 h-5" />
                <span className="font-medium">Configurações</span>
              </div>
            </button>
            <button className="w-full text-left">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-all">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sair</span>
              </div>
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="ml-64 w-full">
          {/* HEADER */}
          <header className="fixed top-0 left-64 right-0 h-20 bg-white border-b border-border shadow-sm flex items-center justify-between px-8 z-10">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar projetos, tarefas..."
                  className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-secondary rounded-lg transition-all">
                <Bell className="w-5 h-5 text-foreground" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-lg transition-all">
                <User className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="mt-20 p-8">
            {/* DASHBOARD PAGE */}
            {currentPage === 'dashboard' && (
              <>
                {/* Welcome Section */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Bem-vindo de volta, Usuário!
                  </h1>
                  <p className="text-muted-foreground">
                    Quinta-feira, 19 de março • Você tem 4 tarefas hoje
                  </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="bg-white rounded-lg border border-border shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Projetos Ativos</p>
                        <p className="text-2xl font-bold text-foreground">4</p>
                      </div>
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-border shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Tarefas Hoje</p>
                        <p className="text-2xl font-bold text-foreground">8</p>
                      </div>
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-border shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Deadlines</p>
                        <p className="text-2xl font-bold text-foreground">4</p>
                      </div>
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-border shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Equipe</p>
                        <p className="text-2xl font-bold text-foreground">12</p>
                      </div>
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <section className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Meus Projetos</h2>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
                      <Plus className="w-5 h-5" />
                      Novo Projeto
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {projects.slice(0, 4).map((project) => (
                      <div key={project.id} className="bg-white rounded-lg border border-border shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div
                              className="w-12 h-12 rounded-lg flex-shrink-0"
                              style={{ backgroundColor: project.color }}
                            />
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-secondary rounded transition-all">
                            <MoreVertical className="w-5 h-5 text-muted-foreground" />
                          </button>
                        </div>
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Progresso</span>
                            <span className="text-sm font-semibold text-foreground">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2 transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{project.completedTasks}/{project.tasks}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{project.members}</span>
                          </div>
                          <button className="px-3 py-1 text-primary border border-primary rounded hover:bg-primary/10 transition-all text-sm font-medium">
                            Abrir
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom Section - Activities and Deadlines */}
                <div className="grid grid-cols-3 gap-8">
                  {/* Recent Activities */}
                  <div className="col-span-2">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Atividades Recentes</h2>
                    <div className="bg-white rounded-lg border border-border shadow-sm">
                      <div className="divide-y divide-border">
                        {activities.map((activity, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 hover:bg-secondary transition-colors">
                            <div className="flex-shrink-0 mt-1">{getActivityIcon(activity.type)}</div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-foreground">
                                <span className="font-semibold">{activity.user}</span>
                                {' '}{activity.action}{' '}
                                <span className="font-semibold">{activity.target}</span>
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {activity.project} • {activity.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Deadlines */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Próximos Deadlines</h2>
                    <div className="space-y-4">
                      {deadlines.map((deadline) => (
                        <div key={deadline.id} className="bg-white rounded-lg border border-border shadow-sm p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="flex-shrink-0 mt-1">{getDeadlineStatusIcon(deadline.status)}</div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-foreground truncate">{deadline.title}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{deadline.project}</p>
                              </div>
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded border ${getPriorityColor(deadline.priority)}`}>
                              {deadline.priority === 'high' ? 'Urgente' : 'Médio'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{deadline.dueDate}</span>
                            <span className={`font-semibold ${deadline.daysLeft <= 1 ? 'text-red-600' : 'text-foreground'}`}>
                              {deadline.daysLeft}d
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* PROJECTS PAGE */}
            {currentPage === 'projects' && (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Todos os Projetos</h1>
                  <p className="text-muted-foreground">Gerencie e acompanhe todos os seus projetos em um único lugar</p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-secondary transition-all font-medium">
                      Filtrar
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
                    <Plus className="w-5 h-5" />
                    Novo Projeto
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg border border-border shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className="w-12 h-12 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-secondary rounded transition-all">
                          <MoreVertical className="w-5 h-5 text-muted-foreground" />
                        </button>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progresso</span>
                          <span className="text-sm font-semibold text-foreground">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2 transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{project.completedTasks}/{project.tasks}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{project.members}</span>
                        </div>
                        <button className="px-3 py-1 text-primary border border-primary rounded hover:bg-primary/10 transition-all text-sm font-medium">
                          Abrir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* TASKS PAGE */}
            {currentPage === 'tasks' && (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Minhas Tarefas</h1>
                  <p className="text-muted-foreground">Acompanhe e gerencie suas tarefas diárias</p>
                </div>

                <div className="flex items-center justify-end mb-6">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
                    <Plus className="w-5 h-5" />
                    Nova Tarefa
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-border shadow-sm">
                  <div className="divide-y divide-border">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-4 p-4 hover:bg-secondary transition-colors"
                      >
                        <div className="flex-shrink-0">{getStatusIcon(task.status)}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">{task.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{task.project}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                            {task.priority === 'high' ? 'Urgente' : task.priority === 'medium' ? 'Médio' : 'Baixo'}
                          </span>
                          <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                          <span className="text-sm text-foreground font-medium">{task.assignee}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
