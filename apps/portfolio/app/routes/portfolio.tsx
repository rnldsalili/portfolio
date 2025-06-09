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
        { property: 'og:url', content: 'https://www.ronald.it.com/' },
        { property: 'og:title', content: 'Ronald | IT Professional Portfolio' },
        {
            property: 'og:description',
            content:
                'Explore the portfolio of Ronald, an IT professional specializing in innovative solutions, web development, and technology consulting. Discover projects, skills, and experience.',
        },
        {
            property: 'og:image',
            content: 'https://www.ronald.it.com/og-image.webp',
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://www.ronald.it.com/' },
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
            content: 'https://www.ronald.it.com/og-image.webp',
        },
    ];
}

const EMAIL = 'ronaldsalili1@gmail.com';

export default function Portfolio() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            period: 'February 2022 - October 2022',
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
        'Python for Everybody Specialization',
        'Web Application Technologies and Django',
        'Introduction to HTML5',
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
            {/* Floating background elements */}
            <div className="floating-element w-64 h-64 bg-green-200 top-10 left-10" />
            <div className="floating-element w-32 h-32 bg-emerald-200 top-1/3 right-20" />
            <div className="floating-element w-48 h-48 bg-teal-200 bottom-20 left-1/4" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-gradient-to-r from-white/95 via-green-50/95 to-emerald-50/95 backdrop-blur-lg border-b border-green-200 z-50 shadow-lg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo/Name Section */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-xl text-slate-800">
                                    Ronald Salili
                                </div>
                                <div className="text-xs text-green-600 font-medium">
                                    Software Engineer
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium"
                                to="#about"
                            >
                                About
                            </Link>
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium"
                                to="#experience"
                            >
                                Experience
                            </Link>
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium"
                                to="#skills"
                            >
                                Skills
                            </Link>
                            <Link
                                className="px-4 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium"
                                to="#education"
                            >
                                Education
                            </Link>

                            {/* CTA Button */}
                            <div className="ml-4 pl-4 border-l border-green-200">
                                <Link to={`mailto:${EMAIL}`}>
                                    <Button
                                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                        size="sm"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Get In Touch
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button
                                className="text-slate-600 hover:text-green-700 hover:bg-green-50"
                                size="sm"
                                variant="ghost"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            d="M6 18L18 6M6 6l12 12"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    ) : (
                                        <path
                                            d="M4 6h16M4 12h16M4 18h16"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    )}
                                </svg>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-green-200 bg-white/95 backdrop-blur-lg">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link
                                    className="block px-3 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-300 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    to="#about"
                                >
                                    About
                                </Link>
                                <Link
                                    className="block px-3 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-300 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    to="#experience"
                                >
                                    Experience
                                </Link>
                                <Link
                                    className="block px-3 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-300 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    to="#skills"
                                >
                                    Skills
                                </Link>
                                <Link
                                    className="block px-3 py-2 text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-300 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    to="#education"
                                >
                                    Education
                                </Link>
                                <div className="pt-2">
                                    <Link to={`mailto:${EMAIL}`}>
                                        <Button
                                            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md"
                                            size="sm"
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            Get In Touch
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen pt-32 pb-20 flex px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 bg-pattern relative">
                <div className="self-center max-w-6xl mx-auto text-center relative z-10">
                    <div className="mb-8">
                        <div className="w-32 h-32 bg-gradient-to-br from-green-700 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center transition-transform duration-700 hover:scale-110 shadow-2xl">
                            <Code2 className="w-16 h-16 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                            Ronald Salili
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-green-700 font-semibold mb-6">
                            Software Engineer
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Full-stack developer specializing in the JavaScript
                            and TypeScript ecosystem. Skilled in delivering
                            scalable web and mobile applications with modern
                            frameworks and tools.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={`mailto:${EMAIL}`}>
                            <Button
                                className="bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                size="lg"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Get In Touch
                            </Button>
                        </Link>
                        <Button
                            className="transition-all duration-300 transform hover:scale-105 hover:border-green-700 hover:text-green-700 shadow-lg"
                            size="lg"
                            variant="outline"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <SectionObserver className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-green-50 to-emerald-50 bg-mesh">
                <div className="max-w-6xl mx-auto" id="about">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item bg-gradient-to-br from-white to-green-50 border-green-100">
                            <CardHeader>
                                <Globe className="w-12 h-12 text-green-700 mx-auto mb-4" />
                                <CardTitle>Full-Stack Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    Experienced in architecting solutions and
                                    implementing microservices with modern
                                    frameworks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item bg-gradient-to-br from-white to-emerald-50 border-emerald-100">
                            <CardHeader>
                                <Database className="w-12 h-12 text-green-700 mx-auto mb-4" />
                                <CardTitle>Database Design</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    Skilled in designing databases and managing
                                    end-to-end development processes.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item bg-gradient-to-br from-white to-teal-50 border-teal-100">
                            <CardHeader>
                                <User className="w-12 h-12 text-green-700 mx-auto mb-4" />
                                <CardTitle>Team Leadership</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">
                                    Proven ability to lead teams and integrate
                                    APIs while ensuring high-quality
                                    deliverables.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </SectionObserver>

            {/* Experience Section - Timeline */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
                <div className="max-w-6xl mx-auto" id="experience">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Work Experience
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto" />
                        <p className="text-lg text-slate-600 mt-4">
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
                                <Card className="timeline-content border-0 overflow-hidden gap-0">
                                    <CardHeader className="py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center gap-3">
                                                <Building2 className="w-6 h-6" />
                                                <div>
                                                    <CardTitle className="text-xl text-white">
                                                        {job.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-green-100 font-semibold text-base">
                                                        {job.company}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            {job.current && (
                                                <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300">
                                                    Current
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3 text-green-100">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {job.period}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                {job.location}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-slate-600 leading-relaxed">
                                            {job.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <SectionObserver className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-emerald-50 to-teal-50 bg-pattern">
                <div className="max-w-6xl mx-auto" id="skills">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Skills & Technologies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(
                            ([category, skillList], index) => (
                                <Card
                                    className="p-4 hover:shadow-lg transition-all duration-300 stagger-item bg-gradient-to-br from-white to-green-50 border-green-100 hover:-translate-y-1"
                                    key={index}
                                >
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full" />
                                            {category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="grid items-center grid-cols-1 sm:grid-cols-2 gap-2">
                                            {skillList.map(
                                                (skill, skillIndex) => (
                                                    <div
                                                        className="p-2 bg-slate-50 rounded-md hover:bg-green-50 transition-colors duration-200"
                                                        key={skillIndex}
                                                    >
                                                        <span className="text-sm font-medium text-slate-700">
                                                            {skill}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ),
                        )}
                    </div>
                </div>
            </SectionObserver>

            {/* Education & Certificates */}
            <SectionObserver className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 bg-mesh">
                <div className="max-w-6xl mx-auto" id="education">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Education & Certificates
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                                <GraduationCap className="w-6 h-6 mr-2 text-green-700" />
                                Education
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <Card
                                        className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 stagger-item bg-gradient-to-br from-white to-green-50 border-green-100"
                                        key={index}
                                    >
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg text-slate-900">
                                                {edu.degree}
                                            </CardTitle>
                                            <CardDescription className="text-green-700 font-semibold">
                                                {edu.school}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center text-slate-600 mb-1">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                {edu.location}
                                            </div>
                                            <div className="flex items-center text-slate-600">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {edu.period}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                                <Award className="w-6 h-6 mr-2 text-green-700" />
                                Certificates
                            </h3>
                            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 border-emerald-100">
                                <CardContent className="pt-0">
                                    <div className="space-y-4">
                                        {certificates.map((cert, index) => (
                                            <div
                                                className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg transition-all duration-300 hover:from-green-100 hover:to-emerald-100 stagger-item border border-green-100"
                                                key={index}
                                            >
                                                <Award className="w-5 h-5 text-green-700 mr-3" />
                                                <div>
                                                    <p className="font-semibold text-slate-900">
                                                        {cert}
                                                    </p>
                                                    <p className="text-sm text-slate-600">
                                                        Coursera
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </SectionObserver>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                        {/* Profile Section */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <Code2 className="w-5 h-5" />
                                Ronald Salili
                            </h3>
                            <p className="text-green-200 mb-3">
                                Full-Stack Software Engineer
                            </p>
                            <p className="text-green-300 text-sm leading-relaxed">
                                Specializing in JavaScript, TypeScript, and
                                modern web technologies. Passionate about
                                creating scalable solutions and leading
                                development teams.
                            </p>
                        </div>

                        <div />

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold mb-3 text-green-100">
                                Contact Info
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-green-300">
                                    <Mail className="w-4 h-4" />
                                    <Link
                                        className="hover:text-white transition-colors"
                                        to={`mailto:${EMAIL}`}
                                    >
                                        {EMAIL}
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 text-green-300">
                                    <Phone className="w-4 h-4" />
                                    <Link
                                        className="hover:text-white transition-colors"
                                        to="tel:+639773517133"
                                    >
                                        (+63) 977 351 7133
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 text-green-300">
                                    <MapPin className="w-4 h-4" />
                                    <span>Albuera, Leyte, Philippines</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-300">
                                    <Linkedin className="w-4 h-4" />
                                    <Link
                                        className="hover:text-white transition-colors"
                                        target="_blank"
                                        to="https://www.linkedin.com/in/ronald-salili-b068a51b7"
                                    >
                                        LinkedIn Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator className="bg-green-800 mb-4" />

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-green-200">
                            © 2024 Ronald Salili. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
