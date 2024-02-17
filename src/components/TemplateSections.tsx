import { ReactNode } from "react";

type TemplateSections = {
  title: string;
  children: ReactNode;
};

export default function TemplateSections({
  title,
  children,
}: TemplateSections) {
  return (
    <div className="lg:container mx-auto px-4 lg:px-0 mt-6">
      <h3 className="font-bold text-4xl uppercase italic mb-6 text-center">
        {title}
      </h3>
      {children}
    </div>
  );
}
