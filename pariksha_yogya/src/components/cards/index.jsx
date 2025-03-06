import React from "react";

const cards = [
    { icon: "💻", title: "Code in any language", description: "Write code in your favorite programming language." },
    { icon: "🔄", title: "Version control", description: "Built-in support for git and many other source control providers." },
    { icon: "🐞", title: "Debugging", description: "Debug your code without leaving your editor." },
    { icon: "🧪", title: "Testing", description: "Run automated tests and view test coverage to validate your code." },
    { icon: "🌍", title: "Code anywhere", description: "Use a container, remote machine, or WSL as your development environment." },
    { icon: "📹", title: "Videos", description: "Watch the introduction videos to learn more." }
];

const FeatureCards = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className="w-64 p-6 bg-grey border-2 border-gray-300 rounded-xl shadow-md text-center transition-all duration-200 hover:border-gray-600"
                >
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureCards;
