import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

const names = [
    "Ana Paula Souza", "Maria Aparecida Santos", "Carla Mendes Oliveira", "Sandra Cristina Lima",
    "Juliana Ferreira Alves", "Patrícia Gomes Rocha", "Rosângela Silva Santos", "Márcia Regina Costa",
    "Adriana Ribeiro Martins", "Luciana Barbosa Silva", "Fernanda Carvalho Souza", "Daniela Rodrigues Pereira",
    "Simone Nunes Almeida", "Cláudia Teixeira Lima", "Cristiane Azevedo Santos", "Alessandra Moreira Oliveira",
    "Renata Fernandes Costa", "Silvana Batista Souza", "Vanessa Andrade Silva", "Tatiane Lopes Martins"
];

const locations = [
    { city: "Goiânia", state: "GO" }, { city: "São Paulo", state: "SP" }, { city: "Belo Horizonte", state: "MG" },
    { city: "Curitiba", state: "PR" }, { city: "Salvador", state: "BA" }, { city: "Brasília", state: "DF" },
    { city: "Fortaleza", state: "CE" }, { city: "Rio de Janeiro", state: "RJ" }, { city: "Recife", state: "PE" },
    { city: "Manaus", state: "AM" }, { city: "Porto Alegre", state: "RS" }, { city: "Cuiabá", state: "MT" }
];

const FakeNotifications = () => {
    const [purchase, setPurchase] = useState({
        name: names[0],
        plan: "Plano Básico",
        city: "Goiânia",
        state: "GO",
        time: "2 minutos"
    });
    const [visible, setVisible] = useState(false);

    const generateRandomPurchase = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLoc = locations[Math.floor(Math.random() * locations.length)];
        const randomPlan = Math.random() > 0.4 ? "Plano Premium" : "Plano Básico";
        const randomTime = Math.floor(Math.random() * 57) + 2;

        setPurchase({
            name: randomName,
            plan: randomPlan,
            city: randomLoc.city,
            state: randomLoc.state,
            time: `${randomTime} minutos`
        });
    };

    useEffect(() => {
        const initialDelay = setTimeout(() => {
            generateRandomPurchase();
            setVisible(true);
        }, 3000);

        return () => clearTimeout(initialDelay);
    }, []);

    useEffect(() => {
        if (!visible) {
            const timer = setTimeout(() => {
                generateRandomPurchase();
                setVisible(true);
            }, Math.random() * 7000 + 8000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div
            className={`fixed bottom-6 left-6 z-[200] transition-all duration-700 transform ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
                }`}
        >
            <div className="bg-white rounded-2xl p-4 shadow-2xl border border-green-100 flex items-center gap-4 max-w-[320px] relative overflow-hidden group">
                <div className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-[6000ms] ease-linear ${visible ? "w-full" : "w-0"}`}></div>

                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-900 leading-tight">
                        {purchase.name}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                        Comprou o <span className="text-green-600 font-bold">{purchase.plan}</span>
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] text-gray-400 font-medium">
                            {purchase.city}, {purchase.state}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-[10px] text-gray-400">
                            há {purchase.time}
                        </span>
                    </div>
                </div>

                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-2 right-2 p-1 text-gray-300 hover:text-gray-500 transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
};

export default FakeNotifications;
