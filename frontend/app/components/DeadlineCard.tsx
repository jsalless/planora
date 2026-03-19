import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

interface DeadlineCardProps {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  daysLeft: number;
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export default function DeadlineCard({
  title,
  project,
  dueDate,
  daysLeft,
  priority,
  assignee,
  status,
}: DeadlineCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getDaysLeftColor = () => {
    if (daysLeft <= 1) return 'text-red-600';
    if (daysLeft <= 3) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusIcon = () => {
    if (status === 'completed') {
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    }
    if (daysLeft <= 1) {
      return <AlertCircle className="w-5 h-5 text-red-600" />;
    }
    return <Calendar className="w-5 h-5 text-primary" />;
  };

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <div className="flex-shrink-0 mt-1">{getStatusIcon()}</div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate">{title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{project}</p>
          </div>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded border ${getPriorityColor()}`}>
          {priority === 'high' ? 'Urgente' : priority === 'medium' ? 'Médio' : 'Baixo'}
        </span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${getDaysLeftColor()}`}>
            {daysLeft === 0 ? 'Hoje' : daysLeft === 1 ? 'Amanhã' : `${daysLeft}d`}
          </span>
          <button className="text-xs">
            {assignee}
          </button>
        </div>
      </div>
    </div>
  );
}
