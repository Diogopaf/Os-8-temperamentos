import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { questions, calculateTemperament, calculateScores } from "@/data/temperaments";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | 0.5)[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | 0.5 | null>(null);
  const navigate = useNavigate();

  const handleAnswer = (value: number | 0.5) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // Teste completo, calcular resultado
      const temperamentId = calculateTemperament([...newAnswers]);
      
      // Armazenar as pontuações no localStorage para usar na página de resultado
      const scores = calculateScores([...newAnswers]);
      localStorage.setItem('temperamentScores', JSON.stringify(scores));
      
      navigate(`/result/${temperamentId}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  const getDimensionName = (dimension: string) => {
    switch (dimension) {
      case 'emotivo':
        return 'Emotividade';
      case 'ativo':
        return 'Atividade';
      case 'secundario':
        return 'Ressonância';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Teste de Temperamento - {getDimensionName(question.dimension)}</h1>
            <span className="text-muted-foreground">
              {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <Progress 
            value={progress} 
            className="h-2"
          />
        </div>

        <Card className="p-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-8 text-center leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-4">
            <button
              onClick={() => handleAnswer(1)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary/50 ${
                selectedOption === 1
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex gap-3">
                <span className="font-bold text-primary">A)</span>
                <span>{question.optionA}</span>
              </div>
            </button>

            <button
              onClick={() => handleAnswer(0)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary/50 ${
                selectedOption === 0
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex gap-3">
                <span className="font-bold text-primary">B)</span>
                <span>{question.optionB}</span>
              </div>
            </button>

            <button
              onClick={() => handleAnswer(0.5)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary/50 ${
                selectedOption === 0.5
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex gap-3">
                <span className="font-bold text-primary">?)</span>
                <span>Não tenho certeza / Um pouco dos dois</span>
              </div>
            </button>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>

            <Button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="bg-gradient-primary hover:opacity-90"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Test;