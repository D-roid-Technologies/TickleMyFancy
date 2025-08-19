import React from "react";

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

interface FeatureCardsProps {
  cards: FeatureCard[];
  className?: string;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({
  cards,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 text-center"
        >
          <div
            className={`w-12 h-12 ${card.iconBgColor} rounded-xl flex items-center justify-center mb-4 mx-auto`}
          >
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

// import React from "react";

// interface FeatureCard {
//   id: string;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   iconBgColor: string;
// }

// interface FeatureCardsProps {
//   cards: FeatureCard[];
//   className?: string;
// }

// const FeatureCards: React.FC<FeatureCardsProps> = ({
//   cards,
//   className = "",
// }) => {
//   return (
//     <div
//       className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
//     >
//       {cards.map((card) => (
//         <div
//           key={card.id}
//           className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
//         >
//           <div
//             className={`w-12 h-12 ${card.iconBgColor} rounded-xl flex items-center justify-center mb-4`}
//           >
//             {card.icon}
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">
//             {card.title}
//           </h3>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             {card.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default FeatureCards;
