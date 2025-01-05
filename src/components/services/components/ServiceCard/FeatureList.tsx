interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li 
          key={index}
          className="flex items-center text-sm text-gray-300"
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  );
}