import { useEffect, useRef, type ReactNode } from 'react';

interface SectionObserverProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

export function SectionObserver({
    children,
    className = '',
    threshold = 0.1,
    rootMargin = '0px',
}: React.ComponentProps<'div'> & SectionObserverProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');

                        // Add visible class to staggered items
                        const staggerItems =
                            entry.target.querySelectorAll('.stagger-item');
                        staggerItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, 100 * index);
                        });

                        // Unobserve after animation
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            },
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div className={className} ref={sectionRef}>
            {children}
        </div>
    );
}
