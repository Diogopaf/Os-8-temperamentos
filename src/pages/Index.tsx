import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Brain, BookOpen, Play } from "lucide-react";
import Temperaments from "./Temperaments";

const Index = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate("/test");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Brain className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
            <h1 className="text-5xl font-bold mb-6 text-primary-foreground">
              Descubra Seu Temperamento
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Baseado nos estudos caracterológicos de Heymans, Wiersma e Le Senne.
              <br /><br />
              Este questionário o ajudará a identificar suas disposições naturais mais profundas. Para um resultado preciso, responda com sinceridade, indicando seu modo natural de agir, não o ocasional. Se possível, lembre-se de como você agia quando criança.
            </p>
            <Button 
              size="lg" 
              onClick={startTest}
              className="bg-background text-foreground hover:bg-background/90 shadow-glow"
            >
              <Play className="w-5 h-5 mr-2" />
              Iniciar Teste
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="test" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="test" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Teste
            </TabsTrigger>
            <TabsTrigger value="temperaments" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Temperamentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="test" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Teste de Temperamento</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A seguir apresentamos 30 perguntas sobre você. Cada pergunta tem duas respostas: a resposta "A" e a resposta "B". Você deverá lê-las com atenção e escolher só uma. Marque com um círculo a resposta que melhor se adequar com seu modo natural de ser (resposta "A" ou "B").
                <br /><br />
                Poderá acontecer que você se encontre indeciso sobre que resposta escolher, porque parece-lhe que você é um pouco da "A" e um pouco da "B". Nestes casos coloque o círculo sobre o sinal de interrogação "?". Sua resposta deve indicar seu modo natural de agir, não o ocasional, que pode não corresponder a seu modo de ser, por estar condicionado por alguma circunstância excepcional. Lembre-se de que modo você agia quando era criança, tentando colher seu temperamento puro, separando-o do que aprendeu por educação familiar ou por circunstâncias particulares de sua vida.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">30</span>
                </div>
                <h3 className="font-semibold mb-2">Perguntas</h3>
                <p className="text-sm text-muted-foreground">
                  Questionário rápido e preciso
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">20</span>
                </div>
                <h3 className="font-semibold mb-2">Minutos</h3>
                <p className="text-sm text-muted-foreground">
                  Tempo estimado para completar
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">8</span>
                </div>
                <h3 className="font-semibold mb-2">Tipos</h3>
                <p className="text-sm text-muted-foreground">
                  Temperamentos possíveis
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={startTest}
                className="bg-gradient-primary hover:opacity-90"
              >
                <Play className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="temperaments">
            <Temperaments />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
