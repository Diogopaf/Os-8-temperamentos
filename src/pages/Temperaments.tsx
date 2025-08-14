import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { temperaments } from "@/data/temperaments";

const Temperaments = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Os Oito Temperamentos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Conheça as características de cada temperamento baseado na teoria clássica. 
          Cada temperamento é definido por três dimensões: emotividade, atividade e reverberação temporal.
        </p>
      </div>

      <div className="grid gap-8">
        {temperaments.map((temperament, index) => (
          <Card key={temperament.id} className="p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold mb-2" style={{ color: temperament.color }}>
                  {temperament.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {temperament.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant={temperament.characteristics.emotivo ? "default" : "secondary"}>
                    {temperament.characteristics.emotivo ? 'Emotivo' : 'Não Emotivo'}
                  </Badge>
                  <Badge variant={temperament.characteristics.ativo ? "default" : "secondary"}>
                    {temperament.characteristics.ativo ? 'Ativo' : 'Não Ativo'}
                  </Badge>
                  <Badge variant={temperament.characteristics.secundario ? "default" : "secondary"}>
                    {temperament.characteristics.secundario ? 'Secundário' : 'Primário'}
                  </Badge>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Características Gerais</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {temperament.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-600">
                      ✅ Aspectos Positivos
                    </h4>
                    <ul className="space-y-2">
                      {temperament.positiveAspects.slice(0, 4).map((aspect, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-600">
                      ⚠️ Aspectos a Desenvolver
                    </h4>
                    <ul className="space-y-2">
                      {temperament.negativeAspects.slice(0, 4).map((aspect, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">
                    🎯 Educação e Desenvolvimento
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {temperament.education}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-muted/50">
        <h2 className="text-2xl font-bold mb-4">Sobre a Teoria dos Temperamentos</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            A teoria dos temperamentos tem suas raízes na antiguidade e foi desenvolvida ao longo dos séculos 
            por diversos pensadores. Esta classificação em oito tipos é baseada em três dimensões fundamentais:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Emotividade:</strong> Facilidade de ser impressionado por estímulos</li>
            <li><strong>Atividade:</strong> Tendência interior à ação</li>
            <li><strong>Reverberação:</strong> Duração das impressões (primário = rápido, secundário = duradouro)</li>
          </ul>
          <p>
            Compreender seu temperamento não é para se limitar, mas para conhecer suas tendências naturais 
            e trabalhar conscientemente no desenvolvimento de suas qualidades e na superação de suas limitações.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Temperaments;