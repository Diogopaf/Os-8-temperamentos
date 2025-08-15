import { useParams, useNavigate } from "react-router-dom";
import { temperaments } from "@/data/temperaments";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import IntensityTable from "@/components/IntensityTable";

const Result = () => {
  const { temperamentId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const temperament = temperaments.find(t => t.id === temperamentId);
  
  // Recuperar as pontuações do localStorage
  const getScores = () => {
    try {
      const stored = localStorage.getItem('temperamentScores');
      return stored ? JSON.parse(stored) : { emotivo: 0, ativo: 0, secundario: 0 };
    } catch {
      return { emotivo: 0, ativo: 0, secundario: 0 };
    }
  };
  
  const scores = getScores();

  if (!temperament) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Resultado não encontrado</h1>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </Card>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copiado!",
      description: "O link do seu resultado foi copiado para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button variant="outline" onClick={() => navigate('/test')}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Refazer teste
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar
          </Button>
        </div>

        <div className="animate-fade-in">
          <Card className="p-8 mb-8 text-center bg-gradient-primary">
            <h1 className="text-4xl font-bold mb-2 text-primary-foreground">
              {temperament.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-4">
              {temperament.subtitle}
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">
                {temperament.characteristics.emotivo ? 'Emotivo' : 'Não Emotivo'}
              </Badge>
              <Badge variant="secondary">
                {temperament.characteristics.ativo ? 'Ativo' : 'Não Ativo'}
              </Badge>
              <Badge variant="secondary">
                {temperament.characteristics.secundario ? 'Secundário' : 'Primário'}
              </Badge>
            </div>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Descrição</h2>
            <p className="text-muted-foreground leading-relaxed">
              {temperament.description}
            </p>
          </Card>

          <IntensityTable scores={scores} />

          <div className="grid gap-8 md:grid-cols-2 mt-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Aspectos Positivos
              </h2>
              <ul className="space-y-2">
                {temperament.positiveAspects.map((aspect, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{aspect}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">
                Aspectos que Precisam de Atenção
              </h2>
              <ul className="space-y-2">
                {temperament.negativeAspects.map((aspect, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{aspect}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Educação e Formação
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {temperament.education}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Result;