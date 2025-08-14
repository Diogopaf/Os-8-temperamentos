import { Circle } from "lucide-react";

interface IntensityTableProps {
  scores: {
    emotivo: number;
    ativo: number;
    secundario: number;
  };
}

const IntensityTable = ({ scores }: IntensityTableProps) => {
  const dimensions = [
    {
      key: 'emotivo' as const,
      label: 'Emotividade',
      lowLabel: 'não Emotividade',
      baseColor: '#ef4444'
    },
    {
      key: 'ativo' as const,
      label: 'Atividade',
      lowLabel: 'não Atividade',
      baseColor: '#22c55e'
    },
    {
      key: 'secundario' as const,
      label: 'Secundariedade',
      lowLabel: 'Primariedade',
      baseColor: '#3b82f6'
    }
  ];

  const renderScaleRow = (dimension: typeof dimensions[0]) => {
    const score = scores[dimension.key];
    const cells = [];

    // Cabeçalho da linha esquerda
    cells.push(
      <div key="low-label" className="px-1 py-2 text-xs font-medium text-center bg-muted border border-border text-muted-foreground col-span-2">
        {dimension.lowLabel}
      </div>
    );

    // Células da escala (0-10)
    for (let i = 0; i <= 10; i++) {
      const isActive = Math.round(score) === i;
      const intensity = i / 10;
      
      // Calcula a cor baseada na intensidade
      const getRGBA = (color: string, alpha: number) => {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      const backgroundColor = i <= 5 
        ? getRGBA(dimension.baseColor, 0.1 + (intensity * 0.3))
        : getRGBA(dimension.baseColor, 0.4 + (intensity * 0.6));
      
      cells.push(
        <div 
          key={i} 
          className="relative px-0.5 py-2 text-xs font-bold text-center border border-border min-h-[32px] flex items-center justify-center"
          style={{ backgroundColor }}
        >
          <span className={i > 7 ? 'text-white' : 'text-foreground'}>
            {i}
          </span>
          {isActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Circle className="w-4 h-4 fill-current text-foreground stroke-2" />
            </div>
          )}
        </div>
      );
    }

    // Cabeçalho da linha direita
    cells.push(
      <div 
        key="high-label" 
        className="px-1 py-2 text-xs font-medium text-center text-white border border-border col-span-2"
        style={{ backgroundColor: dimension.baseColor }}
      >
        {dimension.label}
      </div>
    );

    return cells;
  };

  return (
    <div className="w-full bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-center">Intensidade das Características</h3>
        <p className="text-sm text-muted-foreground text-center mt-1">
          Veja com que intensidade você possui cada característica (0-10 pontos)
        </p>
      </div>
      
      <div className="p-4">
        {dimensions.map((dimension) => (
          <div key={dimension.key} className="grid grid-cols-15 gap-0 mb-2 last:mb-0">
            {renderScaleRow(dimension)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntensityTable;