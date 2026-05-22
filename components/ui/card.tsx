import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card = ({ children, className = '', onClick }: CardProps) => (
    <div
        onClick={onClick}
        className={cn(
            'bg-card border-4 border-text-primary p-6 shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#FFD60A] transition-shadow cursor-pointer',
            className
        )}
    >
        {children}
    </div>
);

export const NewsCard = ({ title, excerpt, image, href }: { title: string; excerpt: string; image?: string; href?: string }) => (
    <a href={href} className="block">
        <Card className="flex flex-col h-full">
            {image && (
                <div className="w-full h-48 bg-bg border-b-4 border-text-primary mb-4 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for image, lazy loaded WebP */}
                    <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
                </div>
            )}
            <h3 className="font-display text-2xl uppercase text-rich-black mb-2">{title}</h3>
            <p className="font-mono text-sm text-text-secondary flex-1">{excerpt}</p>
        </Card>
    </a>
);

export const MemeCard = ({ image, alt, onClick }: { image: string; alt?: string; onClick?: () => void }) => (
    <Card onClick={onClick} className="aspect-square overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </Card>
);

export const MemberCard = ({ name, city, avatar }: { name: string; city: string; avatar?: string }) => (
    <Card className="flex items-center gap-4">
        {avatar && <img src={avatar} alt={name} className="w-12 h-12 rounded-full" loading="lazy" />}
        <div>
            <p className="font-display text-xl uppercase text-rich-black">{name}</p>
            <p className="font-mono text-xs uppercase text-text-secondary">{city}</p>
        </div>
    </Card>
);

export const StateCard = ({ state, membersCount, img }: { state: string; membersCount: number; img?: string }) => (
    <Card className="text-center">
        {img && <img src={img} alt={state} className="w-full h-32 object-cover mb-4" loading="lazy" />}
        <h3 className="font-display text-2xl uppercase text-rich-black mb-2">{state}</h3>
        <p className="font-mono text-sm text-text-secondary">{membersCount.toLocaleString()} members</p>
    </Card>
);
