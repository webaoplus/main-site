import { Link } from "react-router-dom";
import { 
  Rocket, 
  Megaphone, 
  Cloud, 
  Database, 
  ArrowRight, 
  Check,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LocalizedPrice from "./LocalizedPrice";
import type { StarterKit } from "@/lib/starter-kits";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Megaphone,
  Cloud,
  Database,
  TrendingUp
};

interface QuickStarterCardProps {
  kit: StarterKit;
  index?: number;
}

const QuickStarterCard = ({ kit }: QuickStarterCardProps) => {
  const Icon = iconMap[kit.icon] || Rocket;

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-700">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${kit.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: kit.color }} />
          </div>
          <Badge variant="secondary" className="text-xs">
            {kit.label}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {kit.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {kit.target}
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="mb-4">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            <LocalizedPrice price={kit.price} />
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">
            one-time
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Delivered in <span className="font-medium">{kit.delivery}</span>
        </p>

        <ul className="space-y-2">
          {kit.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-600 dark:text-slate-300">{feature}</span>
            </li>
          ))}
          {kit.features.length > 4 && (
            <li className="text-sm text-slate-500 dark:text-slate-400">
              +{kit.features.length - 4} more features
            </li>
          )}
        </ul>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <TrendingUp className="w-3 h-3 inline mr-1" />
            {kit.growthPath}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Link to={kit.cta.href} className="w-full">
          <Button className="w-full gap-2" variant="outline">
            {kit.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuickStarterCard;
