import { Badge } from '@portfolio/ui/components/ui/badge';
import { Button } from '@portfolio/ui/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@portfolio/ui/components/ui/card';
import { Separator } from '@portfolio/ui/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@portfolio/ui/components/ui/sheet';
import {
    Award,
    Building2,
    Calendar,
    Code2,
    Database,
    Download,
    Globe,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import { SectionObserver } from '@/portfolio/components/section-observer';

export function meta() {
    return [
        { title: 'Ronald | IT Professional Portfolio' },
        {
            name: 'description',
            content:
                'Explore the portfolio of Ronald, an IT professional specializing in innovative solutions, web development, and technology consulting. Discover projects, skills, and experience.',
        },

        // Open Graph / Facebook / LinkedIn
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ronald.it.com/' },
        { property: 'og:title', content: 'Ronald | IT Professional Portfolio' },
        {
            property: 'og:description',
            content:
                'Explore the portfolio of Ronald, an IT professional specializing in innovative solutions, web development, and technology consulting. Discover projects, skills, and experience.',
        },
        {
            property: 'og:image',
            content: 'https://ronald.it.com/og-image.webp',
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://ronald.it.com/' },
        {
            name: 'twitter:title',
            content: 'Ronald | IT Professional Portfolio',
        },
        {
            name: 'twitter:description',
            content:
                'Explore the portfolio of Ronald, an IT professional specializing in innovative solutions, web development, and technology consulting. Discover projects, skills, and experience.',
        },
        {
            name: 'twitter:image',
            content: 'https://ronald.it.com/og-image.webp',
        },
    ];
}

const EMAIL = 'ronaldsalili1@gmail.com';

export default function Portfolio() {
    const [open, setOpen] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);

    const skills = {
        'Programming Languages': ['TypeScript', 'JavaScript', 'Python', 'Java'],
        'Frameworks & Libraries': [
            'React.js',
            'Next.js',
            'HonoJS',
            'NestJS',
            'Koa.js',
            'React Native',
            'Spring Boot',
            'Ant Design',
        ],
        'Database Management': ['MongoDB', 'RDBMS', 'Redis'],
        'Tools & Technologies': [
            'AWS Services',
            'Docker',
            'Nginx',
            'RabbitMQ',
            'AppSheet',
            'Git',
            'Bitbucket',
        ],
        'Other Skills': [
            'Team Mentorship',
            'Project Management',
            'Code Reviews',
            'Testing',
            'Technical Troubleshooting',
            'System Architecture Design',
        ],
    };

    const experience = [
        {
            title: 'Software Engineer',
            company: 'Career Team',
            location: 'Remote',
            period: 'October 2024 - Present',
            description:
                'Maintained and enhanced existing software systems by troubleshooting issues and implementing new features. Collaborated with cross-functional teams to ensure smooth application performance and user experience. Contributed to DevOps processes by writing automation scripts, configuring GitHub Actions, and managing site deployments.',
            current: true,
        },
        {
            title: 'Technical Lead',
            company: 'Beautitag Limited',
            location: 'Remote',
            period: 'February 2022 - October 2024',
            description:
                'Led a stable team of 3-4 engineers to deliver 14 web and mobile application projects. Oversaw the development, deployment, and maintenance of scalable systems, including database design and system architecture. Managed code repositories, conducted code reviews, and ensured high-quality deliverables.',
            current: false,
        },
        {
            title: 'Jr. Software Engineer',
            company: 'Beautitag Limited',
            location: 'Remote',
            period: 'November 2021 - February 2022',
            description:
                'Contributed to project development by studying existing codebases and building new components with JavaScript, Koa.js, and React.js. Maintained high code quality by following coding standards and best practices.',
            current: false,
        },
        {
            title: 'Registration Center Supervisor',
            company: 'Philippine Statistics Authority',
            location: 'Albuera, Leyte',
            period: 'March 2021 - August 2021',
            description:
                'Supervised the PhilSys Step II Registration, registering around 35,000 individuals. Managed registrant flow, resolved technical issues, and approved biometric exemptions. Developed a no-code mobile app and automation tools to improve daily operations.',
            current: false,
        },
    ];

    const education = [
        {
            degree: 'Master of Science in Information Technology',
            school: 'Eastern Visayas State University',
            location: 'Tacloban City, Leyte',
            period: '01/2024 - 06/2024 (12 units)',
        },
        {
            degree: 'Bachelor of Science in Agricultural Engineering',
            school: 'Visayas State University',
            location: 'Baybay City, Leyte',
            period: '2015 - 2020',
        },
    ];

    const certificates = [
        {
            label: 'Python for Everybody Specialization',
            link: 'https://coursera.org/share/3952c1ae71e5f3425d0451ce085a9b85',
        },
        {
            label: 'Web Application Technologies and Django',
            link: 'https://coursera.org/share/304ed4f6228907fc6b51d19015383aff',
        },
        {
            label: 'Introduction to HTML5',
            link: 'https://coursera.org/share/4f61128add4cea79670f067406b12e33',
        },
    ];

    // Timeline animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const timelineItems =
                            entry.target.querySelectorAll('.timeline-item');
                        timelineItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, 200 * index);
                        });
                    }
                });
            },
            { threshold: 0.1 },
        );

        const timelineNode = timelineRef.current;

        if (timelineNode) {
            observer.observe(timelineNode);
        }

        return () => {
            if (timelineNode) {
                observer.unobserve(timelineNode);
            }
        };
    }, []);

    // Smooth scroll implementation
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' &&
                target.getAttribute('href')?.startsWith('/#')
            ) {
                e.preventDefault();
                const id = target.getAttribute('href')?.substring(2);
                const element = document.getElementById(id || '');
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth',
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
            {/* Enhanced floating background elements with glass morphism */}
            <div className="floating-element w-64 h-64 bg-gradient-to-br from-green-200/30 to-emerald-300/20 top-10 left-10 backdrop-blur-sm border border-green-300/20" />
            <div className="floating-element w-32 h-32 bg-gradient-to-br from-emerald-200/40 to-teal-300/30 top-1/3 right-20 backdrop-blur-sm border border-emerald-300/20" />
            <div className="floating-element w-48 h-48 bg-gradient-to-br from-teal-200/30 to-green-300/20 bottom-20 left-1/4 backdrop-blur-sm border border-teal-300/20" />

            {/* Enhanced Navigation with glass morphism */}
            <nav className="fixed top-0 w-full bg-gradient-to-r from-white/90 via-green-50/85 to-emerald-50/85 backdrop-blur-xl border-b border-green-200/30 z-50 shadow-2xl shadow-green-100/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Enhanced Logo/Name Section */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:scale-105">
                                <Code2 className="w-6 h-6 text-white drop-shadow-sm" />
                            </div>
                            <div>
                                <div className="font-bold text-xl text-slate-800 tracking-tight">
                                    Ronald Salili
                                </div>
                                <div className="text-xs text-green-600 font-medium tracking-wide">
                                    Software Engineer
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/50 hover:scale-105"
                                to="#about"
                            >
                                About
                            </Link>
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/50 hover:scale-105"
                                to="#experience"
                            >
                                Experience
                            </Link>
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/50 hover:scale-105"
                                to="#skills"
                            >
                                Skills
                            </Link>
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/50 hover:scale-105"
                                to="#education"
                            >
                                Education
                            </Link>

                            {/* Enhanced CTA Button */}
                            <div className="ml-4 pl-4 border-l border-green-200/50">
                                <Link to={`mailto:${EMAIL}`}>
                                    <Button
                                        className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border border-green-500/20"
                                        size="sm"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Get In Touch
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button using Sheet */}
                        <div className="md:hidden">
                            <Sheet onOpenChange={setOpen} open={open}>
                                <SheetTrigger asChild>
                                    <Button
                                        aria-label="Open navigation menu"
                                        className="text-slate-600 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-md hover:shadow-green-100/50 rounded-xl"
                                        size="sm"
                                        variant="ghost"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M4 6h16M4 12h16M4 18h16"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    className="p-0 w-64 max-w-full bg-white/80 backdrop-blur-xl border-r border-green-200/30 shadow-2xl shadow-green-100/50"
                                    side="right"
                                >
                                    <div className="px-2 pt-10 pb-3 space-y-4">
                                        <Link
                                            className="block px-3 py-2 text-slate-800 text-lg hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/30 hover:scale-105"
                                            onClick={() => setOpen(false)}
                                            to="#about"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            className="block px-3 py-2 text-slate-800 text-lg hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/30 hover:scale-105"
                                            onClick={() => setOpen(false)}
                                            to="#experience"
                                        >
                                            Experience
                                        </Link>
                                        <Link
                                            className="block px-3 py-2 text-slate-800 text-lg hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/30 hover:scale-105"
                                            onClick={() => setOpen(false)}
                                            to="#skills"
                                        >
                                            Skills
                                        </Link>
                                        <Link
                                            className="block px-3 py-2 text-slate-800 text-lg hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl transition-all duration-300 font-medium hover:shadow-md hover:shadow-green-100/30 hover:scale-105"
                                            onClick={() => setOpen(false)}
                                            to="#education"
                                        >
                                            Education
                                        </Link>
                                        <div className="pt-2">
                                            <Link to={`mailto:${EMAIL}`}>
                                                <Button
                                                    className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 hover:scale-105 transition-all duration-300"
                                                    size="sm"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <Mail className="w-4 h-4 mr-2" />
                                                    Get In Touch
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Enhanced Hero Section */}
            <section className="min-h-screen pt-32 pb-20 flex px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 bg-pattern relative">
                <div className="self-center max-w-6xl mx-auto text-center relative z-10">
                    <div className="mb-8">
                        <div className="w-32 h-32 bg-gradient-to-br from-green-700 via-emerald-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-700 hover:scale-110 hover:rotate-12 shadow-2xl shadow-green-600/40 hover:shadow-3xl hover:shadow-green-600/50 border-4 border-white/30 backdrop-blur-sm">
                            <Code2 className="w-16 h-16 text-white drop-shadow-lg" />
                        </div>
                        <h1
                            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-4 tracking-tight"
                            style={{ fontSize: '3rem' }}
                        >
                            Ronald Salili
                        </h1>
                        <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold mb-6 tracking-wide">
                            Software Engineer
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                            Full-stack developer specializing in the JavaScript
                            and TypeScript ecosystem. Skilled in delivering
                            scalable web and mobile applications with modern
                            frameworks and tools.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={`mailto:${EMAIL}`}>
                            <Button
                                className="w-full bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 hover:from-green-800 hover:via-emerald-800 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl shadow-green-700/40 hover:shadow-2xl hover:shadow-green-700/50 border border-green-600/20"
                                size="lg"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Get In Touch
                            </Button>
                        </Link>
                        <Button
                            className="transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-green-700 hover:text-green-700 shadow-xl hover:shadow-2xl border-2 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 backdrop-blur-sm"
                            size="lg"
                            variant="outline"
                            onClick={() => {
                                window.open(
                                    'https://assets.ronald.it.com/salili_ronald_resume.pdf',
                                    '_blank',
                                );
                            }}
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                        </Button>
                    </div>
                </div>
            </section>

            {/* Enhanced About Section */}
            <SectionObserver className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-green-50 to-emerald-50 bg-mesh">
                <div className="max-w-6xl mx-auto" id="about">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-6 tracking-tight">
                            About Me
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mx-auto rounded-full shadow-lg shadow-green-600/30" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 stagger-item bg-gradient-to-br from-white via-green-50/50 to-emerald-50 border-green-200/50 backdrop-blur-sm hover:border-green-300/60 group">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-green-600/30 group-hover:shadow-xl group-hover:shadow-green-600/40 group-hover:scale-110 transition-all duration-300">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                                    Full-Stack Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    Experienced in architecting solutions and
                                    implementing microservices with modern
                                    frameworks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:-rotate-1 stagger-item bg-gradient-to-br from-white via-emerald-50/50 to-teal-50 border-emerald-200/50 backdrop-blur-sm hover:border-emerald-300/60 group">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:shadow-xl group-hover:shadow-emerald-600/40 group-hover:scale-110 transition-all duration-300">
                                    <Database className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                                    Database Design
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    Skilled in designing databases and managing
                                    end-to-end development processes.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 stagger-item bg-gradient-to-br from-white via-teal-50/50 to-green-50 border-teal-200/50 backdrop-blur-sm hover:border-teal-300/60 group">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-teal-600/30 group-hover:shadow-xl group-hover:shadow-teal-600/40 group-hover:scale-110 transition-all duration-300">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-teal-700 to-green-700 bg-clip-text text-transparent">
                                    Team Leadership
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    Proven ability to lead teams and integrate
                                    APIs while ensuring high-quality
                                    deliverables.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </SectionObserver>

            {/* Enhanced Experience Section - Timeline */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
                <div className="max-w-6xl mx-auto" id="experience">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-6 tracking-tight">
                            Work Experience
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mx-auto rounded-full shadow-lg shadow-green-600/30" />
                        <p className="text-lg text-slate-600 mt-6 font-light">
                            My professional journey through the years
                        </p>
                    </div>

                    <div
                        className="timeline max-w-4xl mx-auto"
                        ref={timelineRef}
                    >
                        {experience.map((job, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-marker" />
                                <Card className="timeline-content border-0 overflow-hidden gap-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm border border-green-200/30">
                                    <CardHeader className="py-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                        <div className="flex items-center justify-between flex-wrap gap-2 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                                    <Building2 className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl text-white font-semibold tracking-tight">
                                                        {job.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-green-100 font-medium text-base">
                                                        {job.company}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            {job.current && (
                                                <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 hover:from-yellow-300 hover:to-yellow-200 shadow-lg shadow-yellow-400/30 border-0 font-medium">
                                                    Current
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4 text-green-100 relative z-10">
                                            <div className="flex items-center bg-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span className="text-sm font-medium">
                                                    {job.period}
                                                </span>
                                            </div>
                                            <div className="flex items-center bg-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                <span className="text-sm font-medium">
                                                    {job.location}
                                                </span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-8 bg-gradient-to-br from-white to-green-50/30">
                                        <p className="text-slate-600 leading-relaxed text-base">
                                            {job.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Skills Section */}
            <SectionObserver className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 bg-mesh">
                <div className="max-w-6xl mx-auto" id="skills">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-6 tracking-tight">
                            Skills & Technologies
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mx-auto rounded-full shadow-lg shadow-green-600/30" />
                    </div>
                    <div className="flex flex-col gap-6 items-center">
                        {Object.entries(skills).map(
                            ([category, skillList], idx) => (
                                <div
                                    className="w-full max-w-4xl bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                                    key={idx}
                                >
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6 text-center tracking-wide">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {skillList.map((skill, skillIdx) => (
                                            <Badge
                                                className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-800 border border-green-300/50 px-4 py-2 rounded-full text-sm font-medium hover:from-green-200 hover:via-emerald-200 hover:to-teal-200 hover:scale-105 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 cursor-default backdrop-blur-sm"
                                                key={skillIdx}
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </SectionObserver>

            {/* Enhanced Education & Certificates */}
            <SectionObserver className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
                <div className="max-w-6xl mx-auto" id="education">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-6 tracking-tight">
                            Education & Certificates
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mx-auto rounded-full shadow-lg shadow-green-600/30" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-8 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg mr-3 flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-white" />
                                </div>
                                Education
                            </h3>
                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <Card
                                        className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 stagger-item bg-gradient-to-br from-white via-green-50/30 to-emerald-50 border-green-200/50 backdrop-blur-sm hover:border-green-300/60 group"
                                        key={index}
                                    >
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-green-800 transition-colors duration-300">
                                                {edu.degree}
                                            </CardTitle>
                                            <CardDescription className="text-green-700 font-semibold text-lg">
                                                {edu.school}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center text-slate-600 mb-2 bg-white/50 rounded-lg px-3 py-2">
                                                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                                                <span className="font-medium">
                                                    {edu.location}
                                                </span>
                                            </div>
                                            <div className="flex items-center text-slate-600 bg-white/50 rounded-lg px-3 py-2">
                                                <Calendar className="w-4 h-4 mr-2 text-green-600" />
                                                <span className="font-medium">
                                                    {edu.period}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 bg-clip-text text-transparent mb-8 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg mr-3 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                                Certificates
                            </h3>
                            <Card className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50 border-emerald-200/50 backdrop-blur-sm hover:border-emerald-300/60 group">
                                <CardContent className="pt-0">
                                    <div className="flex flex-col gap-6">
                                        {certificates.map((cert, index) => (
                                            <Link
                                                className="font-semibold text-slate-900 hover:text-emerald-700 transition-all duration-300"
                                                key={index}
                                                target="_blank"
                                                to={cert.link}
                                            >
                                                <div className="flex items-center p-6 bg-gradient-to-r from-emerald-50/60 to-teal-50/60 rounded-xl transition-all duration-300 hover:from-emerald-100/80 hover:to-teal-100/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] stagger-item border border-emerald-200/40 backdrop-blur-sm group">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                                                        <Award className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors duration-300">
                                                            {cert.label}
                                                        </div>
                                                        <p className="text-sm text-slate-600 font-medium mt-1">
                                                            Coursera
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </SectionObserver>

            {/* Enhanced Footer */}
            <footer className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 to-teal-800/20" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Enhanced Profile Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-green-400/30">
                                    <Code2 className="w-6 h-6 text-green-900" />
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                                    Ronald Salili
                                </h3>
                            </div>
                            <p className="text-green-200 mb-4 text-lg font-medium">
                                Full-Stack Software Engineer
                            </p>
                            <p className="text-green-300 leading-relaxed">
                                Specializing in JavaScript, TypeScript, and
                                modern web technologies. Passionate about
                                creating beautiful, functional applications that
                                make a difference.
                            </p>
                        </div>

                        <div />

                        {/* Enhanced Contact Info */}
                        <div>
                            <h4 className="font-bold mb-6 text-green-100 text-lg">
                                Contact Info
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-green-300 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-green-400/20 hover:bg-white/15 transition-all duration-300">
                                    <Mail className="w-5 h-5 text-green-400" />
                                    <Link
                                        className="hover:text-white transition-colors font-medium"
                                        to={`mailto:${EMAIL}`}
                                    >
                                        {EMAIL}
                                    </Link>
                                </div>
                                <div className="flex items-center gap-3 text-green-300 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-green-400/20">
                                    <MapPin className="w-5 h-5 text-green-400" />
                                    <span className="font-medium">
                                        Albuera, Leyte, Philippines
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-green-300 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-green-400/20 hover:bg-white/15 transition-all duration-300">
                                    <Linkedin className="w-5 h-5 text-green-400" />
                                    <Link
                                        className="hover:text-white transition-colors font-medium"
                                        target="_blank"
                                        to="https://www.linkedin.com/in/ronald-salili-b068a51b7"
                                    >
                                        LinkedIn Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-green-700/30">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-green-300 font-medium text-center md:text-left">
                                © {new Date().getFullYear()} Ronald Salili. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
