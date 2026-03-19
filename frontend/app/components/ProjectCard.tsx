import { MoreVertical, Users, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  color: string;
  progress: number;
  members: number;
  tasks: number;
  completedTasks: number;
}

export default function ProjectCard({
  name,
  description,
  color,
  progress,
  members,
  tasks,
  completedTasks,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div
            className="w-12 h-12 rounded-lg flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
        <button className="text-muted-foreground">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-muted-foreground">Progresso</span>
          <span className="text-xs font-medium text-foreground">{progress}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary rounded-full h-2 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {completedTasks}/{tasks}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{members}</span>
          </div>
        </div>
        <button className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          Abrir
        </button>
      </div>
    </div>
  );
}
