import React from "react";
import FeatureCards from "../cards/FeatureCards";

interface FeatureCardType {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

const CardSection: React.FC = () => {
  // Icon components
  const HeartIcon = () => (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 
        5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ShieldIcon = () => (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 
        11.955 0 0112 2.944a11.955 11.955 0 01-8.618 
        3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 
        11.622 5.176-1.332 9-6.03 9-11.622 
        0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  const BadgeIcon = () => (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 
        3.42 0 001.946-.806 3.42 3.42 0 014.438 0 
        3.42 3.42 0 001.946.806 3.42 3.42 0 
        013.138 3.138 3.42 3.42 0 00.806 
        1.946 3.42 3.42 0 010 4.438 3.42 3.42 
        0 00-.806 1.946 3.42 3.42 0 
        01-3.138 3.138 3.42 3.42 0 
        00-1.946.806 3.42 3.42 0 
        01-4.438 0 3.42 3.42 0 
        00-1.946-.806 3.42 3.42 0 
        01-3.138-3.138 3.42 3.42 0 
        00-.806-1.946 3.42 3.42 0 
        010-4.438 3.42 3.42 0 
        00.806-1.946 3.42 3.42 0 
        013.138-3.138z"
      />
    </svg>
  );

  const LightbulbIcon = () => (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 
        1.636l-.707.707M21 12h-1M4 
        12H3m3.343-5.657l-.707-.707m2.828 
        9.9a5 5 0 117.072 0l-.548.547A3.374 
        3.374 0 0014 18.469V19a2 2 0 
        11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );

  const EmailIcon = () => (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 
        002.22 0L21 8M5 19h14a2 2 0 
        002-2V7a2 2 0 00-2-2H5a2 2 
        0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  const ChatIcon = () => (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 
        12h.01M21 12c0 4.418-4.03 
        8-9 8a9.863 9.863 0 
        01-4.255-.949L3 20l1.395-3.72C3.512 
        15.042 3 13.574 3 12c0-4.418 
        4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 
      11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 
      0v3h8v-3z"
      />
      <path
        d="M6 8a2 2 0 11-4 0 2 2 
      0 014 0zM16 18v-3a5.972 5.972 0 
      00-.75-2.906A3.005 3.005 0 
      0119 15v3h-3zM4.75 12.094A5.973 
      5.973 0 004 15v3H1v-3a3 3 0 
      013.75-2.906z"
      />
    </svg>
  );

  const sampleCards: FeatureCardType[] = [
    {
      id: "1",
      icon: <HeartIcon />,
      title: "Smart Matching",
      description:
        "Our algorithm learns your preferences to suggest compatible matches.",
      iconBgColor: "bg-purple-500",
    },
    {
      id: "2",
      icon: <ShieldIcon />,
      title: "Privacy First",
      description: "Control who sees you and what you share.",
      iconBgColor: "bg-pink-500",
    },
    {
      id: "3",
      icon: <BadgeIcon />,
      title: "Verified Profiles",
      description: "Keeping you safe with verified identities.",
      iconBgColor: "bg-orange-500",
    },
    {
      id: "4",
      icon: <LightbulbIcon />,
      title: "Tips Hub",
      description: "Suggestions to take things offline when you're ready.",
      iconBgColor: "bg-purple-500",
    },
    {
      id: "5",
      icon: <LightbulbIcon />,
      title: "Tips Hub",
      description: "Suggestions to take things offline when you're ready.",
      iconBgColor: "bg-orange-500",
    },
    {
      id: "6",
      icon: <LightbulbIcon />,
      title: "Tips Hub",
      description: "Suggestions to take things offline when you're ready.",
      iconBgColor: "bg-orange-500",
    },
    {
      id: "7",
      icon: <EmailIcon />,
      title: "Premium",
      description: "Message instantly, no awkward waiting.",
      iconBgColor: "bg-pink-500",
    },
    {
      id: "8",
      icon: <ChatIcon />,
      title: "Real-Time Chat",
      description: "Message instantly, no awkward waiting.",
      iconBgColor: "bg-pink-500",
    },
    {
      id: "9",
      icon: <UsersIcon />,
      title: "Real-Time Chat",
      description: "Date ideas.",
      iconBgColor: "bg-purple-500",
    },
  ];

  return (
    <div>
      {/* <div className="grid grid-cols-3 gap-4"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeatureCards cards={sampleCards} className="mb-8" />
      </div>

      {/* {filteredTools.map((tech, index) => (
        <CoreValueCardThree
          key={`${tech.title}-${index}`}
          title={tech.title}
          description={tech.description}
          icon={tech.icon}
          link={tech.link}
          className="process-card"
        />
      ))} */}
    </div>
  );
};

export default CardSection;
