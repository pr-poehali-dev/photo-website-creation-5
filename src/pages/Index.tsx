import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const [design, setDesign] = useState(50);
  const [beat, setBeat] = useState(50);
  const [vocal, setVocal] = useState(50);
  const [realization, setRealization] = useState(50);
  const [meat, setMeat] = useState(50);

  const totalScore = ((design + beat + vocal + realization + meat) / 50).toFixed(1);

  const handleReset = () => {
    setDesign(50);
    setBeat(50);
    setVocal(50);
    setRealization(50);
    setMeat(50);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-12">
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            onClick={handleReset}
            className="text-gray-600 border-gray-300 hover:bg-gray-50"
          >
            сбросить
          </Button>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-xl">дизайнерство</span>
              <span className="text-purple-600 text-3xl font-semibold">{design}</span>
            </div>
            <Slider 
              value={[design]} 
              onValueChange={(value) => setDesign(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-xl">бит</span>
              <span className="text-purple-600 text-3xl font-semibold">{beat}</span>
            </div>
            <Slider 
              value={[beat]} 
              onValueChange={(value) => setBeat(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-xl">вокал</span>
              <span className="text-purple-600 text-3xl font-semibold">{vocal}</span>
            </div>
            <Slider 
              value={[vocal]} 
              onValueChange={(value) => setVocal(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-xl">реализация</span>
              <span className="text-purple-600 text-3xl font-semibold">{realization}</span>
            </div>
            <Slider 
              value={[realization]} 
              onValueChange={(value) => setRealization(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-xl">мясо</span>
              <span className="text-purple-600 text-3xl font-semibold">{meat}</span>
            </div>
            <Slider 
              value={[meat]} 
              onValueChange={(value) => setMeat(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-2xl">общая оценка</span>
            <span className="text-green-500 text-6xl font-bold">{totalScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
