import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  TrendingUp,
  Target,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  BookOpen,
  Code,
  Cloud,
  Shield,
  Cpu,
  Rocket,
  LineChart,
  Heart,
  Clock,
  Building2,
  ExternalLink,
  Settings,
  GitBranch,
  Database,
  Network,
  Box,
  Layers,
  Zap,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://scalewithpk.com/#pk-sir',
                name: 'PK Sir',
                alternateName: 'Scale With PK',
                description: 'IT Career Mentor, IT Guru, and Industry Expert from Hyderabad with 17+ years of IT industry experience. Expert in Azure DevOps and multiple technologies, helping professionals scale their IT careers through structured mentorship.',
                jobTitle: 'IT Career Mentor | IT Guru | Industry Expert',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Hyderabad',
                  addressRegion: 'Telangana',
                  addressCountry: 'IN',
                },
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'IT Career Mentor',
                  description: 'Expert mentorship for IT career transformation, structured growth, and high package negotiations',
                },
                knowsAbout: [
                  'Azure DevOps',
                  'DevOps Engineering',
                  'Cloud Computing',
                  'Software Architecture',
                  'Java Full Stack',
                  'AI/Machine Learning',
                  'Cyber Security',
                  'IT Career Development',
                  'Career Mentorship',
                ],
                award: '1000+ Professionals Placed, 10000+ Students Trained, ₹50+ Crores Career Impact Value',
              },
              {
                '@type': 'Organization',
                '@id': 'https://scalewithpk.com/#organization',
                name: 'ScaleWithPK',
                founder: {
                  '@type': 'Person',
                  name: 'PK Sir',
                },
                description: 'Personal branding platform of PK Sir - a highly experienced IT Career Mentor from Hyderabad, helping professionals, freshers, and career switchers scale their IT careers through structured guidance, real-world experience, and mentorship.',
                areaServed: 'India',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Who is PK Sir?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'PK Sir is an IT Career Mentor, IT Guru, and Industry Expert from Hyderabad with 17+ years of IT industry experience. He has trained 10,000+ learners and helped 1,000+ professionals transition successfully with an average minimum salary hike of ₹5,00,000. His expertise spans Azure DevOps (strongest mastery), Cloud Computing, Software Architecture, and career mentorship.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is ScaleWithPK?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'ScaleWithPK is the personal branding platform of PK Sir - a highly experienced IT Career Mentor from Hyderabad. It helps professionals, freshers, and career switchers scale their IT careers through structured guidance, real-world experience, and mentorship. The platform focuses on personal branding and mentorship, not institutional training.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What technologies does PK Sir teach?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'PK Sir specializes in Azure DevOps (his strongest mastery area), along with DevOps Engineering, Java Full Stack, AI/Machine Learning, Cloud Computing, and Cyber Security. The platform is designed to support future technologies as well, positioning him as a comprehensive IT Career Mentor rather than focusing on a single technology.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <WhoCanLearnSection />
      <ServicesSection />
      <WhyPKSirSection />
      <RecentImpactSection />
      <DevOpsBookSection />
      <BITSWorkshopSection />
      <CompaniesSection />
      <TrainingProgramsSection />
      <SocialProofSection />
      <MentorshipModelSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="ScaleWithPK Logo"
            width={48}
            height={48}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Services
          </a>
          <a
            href="#programs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Programs
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            FAQ
          </a>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90"
            asChild
          >
            <a
              href="https://wa.me/919948574575"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent py-16 lg:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 inline-flex bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
              <Award className="mr-2 h-4 w-4" />
              17+ Years of IT Industry Experience
            </Badge>

            <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
              Scale Your IT Career with
              <span className="block bg-gradient-to-r from-accent-foreground to-white bg-clip-text text-transparent">
                PK Sir
              </span>
            </h1>

            <p className="mb-4 text-lg leading-relaxed text-white/90 lg:text-xl">
              IT Career Mentor | IT Guru | Industry Expert
            </p>
            <p className="mb-10 text-base leading-relaxed text-white/80 lg:text-lg">
              A highly experienced IT Career Mentor from Hyderabad, helping professionals, freshers, and career switchers scale their IT careers through structured guidance, real-world experience, and mentorship
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-success text-white shadow-lg shadow-success/30 transition-all hover:bg-success/90 hover:shadow-xl hover:shadow-success/40 hover:-translate-y-0.5"
                asChild
              >
                <a
                  href="https://wa.me/919948574575"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Start Your Career Journey
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5"
                asChild
              >
                <a href="#about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Stats preview */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div className="text-center lg:text-left">
                <div className="mb-1 font-poppins text-2xl font-bold text-white">
                  10K+
                </div>
                <div className="text-sm text-white/70">Learners Trained</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="mb-1 font-poppins text-2xl font-bold text-white">
                  1K+
                </div>
                <div className="text-sm text-white/70">Professionals Transitioned</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="mb-1 font-poppins text-2xl font-bold text-white">
                  ₹5L+
                </div>
                <div className="text-sm text-white/70">Avg. Salary Hike</div>
              </div>
            </div>
          </div>

          {/* Right Column - Workshop Expert Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated glow rings */}
              <div className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/20 blur-2xl" />
              <div className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/20 blur-2xl" style={{ animationDelay: '1s' }} />
              
              {/* Main image container with animations */}
              <div className="relative animate-slide-in-up animate-float group-hover:scale-105 transition-transform duration-500">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-glow">
                  <Image
                    src="/workshop-expert.png"
                    alt="PK Sir - Workshop Expert"
                    width={500}
                    height={600}
                    className="object-contain w-full h-auto drop-shadow-2xl"
                    priority
                  />
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-accent/30 blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/30 blur-xl animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 h-16 w-16 rounded-full bg-white/10 blur-lg animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Learners Trained' },
    { icon: Briefcase, value: '1,000+', label: 'Professionals Transitioned' },
    { icon: TrendingUp, value: '₹50+ Cr', label: 'Career Impact Value' },
    { icon: Award, value: '17+ Years', label: 'Industry Experience' },
  ];

  return (
    <section className="border-b bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-1 font-poppins text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  // DevOps technology and tool icons for background decoration
  const devopsIcons = [
    { Icon: Cloud, label: 'Cloud', position: 'top-left' },
    { Icon: Code, label: 'Code', position: 'top-right' },
    { Icon: Cpu, label: 'Infrastructure', position: 'middle-left' },
    { Icon: Shield, label: 'Security', position: 'middle-right' },
    { Icon: Rocket, label: 'Deployment', position: 'bottom-left' },
    { Icon: GitBranch, label: 'Version Control', position: 'bottom-right' },
    { Icon: Settings, label: 'Configuration', position: 'top-center' },
    { Icon: Database, label: 'Database', position: 'center-left' },
    { Icon: Network, label: 'Networking', position: 'center-right' },
    { Icon: Box, label: 'Containers', position: 'bottom-center' },
    { Icon: Layers, label: 'CI/CD', position: 'left-top' },
    { Icon: Zap, label: 'Automation', position: 'right-top' },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background DevOps Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {devopsIcons.map((item, index) => {
          const positions: Record<string, string> = {
            'top-left': 'top-10 left-10',
            'top-right': 'top-10 right-10',
            'top-center': 'top-20 left-1/2 -translate-x-1/2',
            'middle-left': 'top-1/2 left-10 -translate-y-1/2',
            'middle-right': 'top-1/2 right-10 -translate-y-1/2',
            'bottom-left': 'bottom-10 left-10',
            'bottom-right': 'bottom-10 right-10',
            'bottom-center': 'bottom-20 left-1/2 -translate-x-1/2',
            'center-left': 'top-1/2 left-20 -translate-y-1/2',
            'center-right': 'top-1/2 right-20 -translate-y-1/2',
            'left-top': 'top-32 left-5',
            'right-top': 'top-32 right-5',
          };
          
          return (
            <div
              key={index}
              className={`absolute ${positions[item.position] || 'top-10 left-10'} opacity-5 hover:opacity-10 transition-opacity duration-300`}
              style={{
                animation: `float ${6 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <item.Icon className="h-16 w-16 text-primary md:h-20 md:w-20 lg:h-24 lg:w-24" />
            </div>
          );
        })}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            About <span className="gradient-text">PK Sir</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            IT Career Mentor | IT Guru | Industry Expert from Hyderabad
          </p>
        </div>

        <div className="mx-auto max-w-4xl relative z-10">
          <Card className="border-2 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  PK Sir is a highly experienced <strong>IT Career Mentor and Industry Expert</strong> from Hyderabad with <strong>17+ years of IT industry experience</strong>. His journey began at Mahindra Satyam as a System Administrator, and through dedication and expertise, he has grown to Architect-level roles, mastering technologies across DevOps (with Azure DevOps as his strongest mastery), Cloud Computing, and Software Architecture.
                </p>
                <p className="text-lg leading-relaxed">
                  His teaching passion started during his degree days, where he guided juniors and seniors in C language and basic programming. This early foundation evolved into a <strong>10+ year dedication to mentoring</strong> the next generation of IT professionals. His philosophy is simple yet powerful: <em>"Grow together like a strong tree"</em> - building strong, lifelong professional networks while converting complex problems into simple, practical solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  PK Sir's approach combines <strong>clear vision, calm problem-solving mindset, and real-world experience</strong>. He connects with CXO-level leaders and translates vision to teams, providing clarity during critical incidents. His mentorship goes beyond training - it's about career transformation through structured guidance and industry-relevant skills.
                </p>
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Strongest Mastery:</strong> Azure DevOps, with expertise across DevOps Engineering, Cloud Architecture, and Software Development
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Career Growth:</strong> From Mahindra Satyam System Admin to Architect-level roles
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Career Impact:</strong> 50+ professionals earning ₹3-5 Lakhs per month, average minimum salary hike of ₹5,00,000
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Leadership Impact:</strong> 100+ professionals working under guidance, CXO-level exposure
                    </div>
                  </div>
                </div>
                
                {/* LinkedIn Profile Link */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <p className="text-center text-muted-foreground">
                      Want to learn more about PK Sir's professional journey and expertise?
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#0077b5] text-white hover:bg-[#005885] transition-colors"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/praveengudla/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Visit LinkedIn Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function WhoCanLearnSection() {
  const audiences = [
    {
      icon: TrendingUp,
      title: 'Experienced IT Professionals',
      description:
        'Working IT professionals seeking structured growth, high packages, and career acceleration. Whether you\'re stuck in the same role or want to transition to senior positions, structured mentorship helps you negotiate better packages and grow systematically.',
    },
    {
      icon: Users,
      title: 'Non-IT Roles in IT Companies',
      description:
        'If you\'re working in an IT company but in non-technical roles (HR, Admin, Sales), and want to switch to technical roles, PK Sir provides clear roadmaps for this transition with industry-relevant guidance.',
    },
    {
      icon: Clock,
      title: 'Career Gap Candidates',
      description:
        'Professors, banking aspirants, career switchers, or anyone facing re-entry barriers after a gap. PK Sir\'s mentorship helps you overcome career gaps, rebuild confidence, and re-enter the IT industry with updated skills.',
    },
    {
      icon: Target,
      title: 'Non-IT to IT Switch Aspirants',
      description:
        'Professionals from completely different fields (Engineering non-IT, Business, etc.) wanting to transition into IT. Get comprehensive guidance, structured learning paths, and practical support for a successful career switch.',
    },
    {
      icon: GraduationCap,
      title: 'Freshers Passionate About IT',
      description:
        'Recent graduates or freshers who are passionate about building an IT career but lack real-world experience. Learn industry-relevant skills, build confidence, and prepare for interviews with hands-on guidance.',
    },
  ];

  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Who Can <span className="gradient-text">Learn</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            PK Sir's mentorship is designed for diverse IT career aspirants - from experienced professionals to career switchers
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <audience.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: 'One-to-One Career Mentorship',
      description:
        '2,000+ personalized career guidance sessions tailored to your specific situation, goals, and career stage. Get structured advice on growth paths, salary negotiations, and role transitions.',
    },
    {
      icon: Code,
      title: 'Azure DevOps Training (Strongest Mastery)',
      description:
        'In-depth Azure DevOps training with real-world projects and industry best practices. PK Sir\'s strongest mastery area, delivering expert-level guidance on CI/CD, automation, and cloud infrastructure.',
    },
    {
      icon: Target,
      title: 'Career Transition Support',
      description:
        'Expert guidance for non-IT to IT career switches, role transitions, and career pivots with comprehensive roadmaps and structured learning paths.',
    },
    {
      icon: Briefcase,
      title: 'Career Positioning & Guidance',
      description:
        'Resume building, LinkedIn profile positioning, interview preparation, communication guidance, and job search strategies to secure strong IT roles.',
    },
    {
      icon: TrendingUp,
      title: 'Structured Growth & High Packages',
      description:
        'Advanced mentorship for working professionals seeking structured growth and high package negotiations. Learn to position yourself for senior roles and better compensation.',
    },
    {
      icon: Heart,
      title: 'Motivational & Mindset Coaching',
      description:
        'Overcome career challenges with confidence-building, calm problem-solving mindset, and clarity during critical career decisions. Build resilience and professional networks.',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Mentorship & <span className="gradient-text">Training Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT career development services with focus on personal branding and structured growth
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-center font-poppins text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-center text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyPKSirSection() {
  const stories = [
    {
      icon: Rocket,
      title: 'Teaching Passion from Day One',
      description: 'PK Sir\'s teaching journey started during his degree days, guiding juniors and seniors in C language and basic programming. This early passion evolved into a 10+ year dedication to mentoring IT professionals.',
    },
    {
      icon: Target,
      title: 'Clear Vision, Calm Mindset',
      description: 'Known for clear vision and calm problem-solving approach. PK Sir converts complex problems into simple, practical solutions, providing clarity during critical incidents and career decisions.',
    },
    {
      icon: Building2,
      title: 'Leadership Journey',
      description: 'From Mahindra Satyam System Administrator to Architect-level roles, his leadership journey reflects real-world experience in building scalable systems and leading technical teams with 100+ professionals working under his guidance.',
    },
    {
      icon: Heart,
      title: 'Grow Together Philosophy',
      description: '\'Grow together like a strong tree\' - PK Sir builds strong, lifelong professional networks. His mentorship goes beyond training, focusing on building lasting relationships and community support.',
    },
    {
      icon: Award,
      title: 'CXO-Level Exposure',
      description: 'Connects with CXO-level leaders and translates vision to teams. This high-level exposure enables him to provide strategic career guidance aligned with industry leadership expectations.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Career Impact',
      description: '10,000+ learners trained, 1,000+ professionals successfully transitioned, ₹50+ crores in total career impact value, with average minimum salary hike of ₹5,00,000 per professional.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-accent py-20 text-white lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Why <span className="text-white">PK Sir</span>
          </h2>
          <p className="text-lg text-white/90">
            The story behind an IT Career Mentor who transforms careers through real-world experience, structured guidance, and genuine mentorship
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-white/20 p-4">
                      <story.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-3 font-poppins text-lg font-semibold text-white">
                    {story.title}
                  </h3>
                  <p className="text-sm text-white/80">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentImpactSection() {
  const impacts = [
    {
      icon: Cloud,
      title: '2,000+ Servers Migrated',
      description: 'Successfully migrated 2000+ servers in the last 3 years, demonstrating hands-on expertise in large-scale infrastructure management and cloud migrations.',
    },
    {
      icon: Code,
      title: '80+ Applications Managed',
      description: 'Worked on 80+ applications, showcasing deep understanding of software architecture, deployment strategies, and application lifecycle management.',
    },
    {
      icon: Target,
      title: 'Key Troubleshooting Point',
      description: 'Serves as the key troubleshooting point of contact during critical incidents, providing clarity and solutions when systems face challenges.',
    },
    {
      icon: Building2,
      title: 'CXO-Level Leadership Connection',
      description: 'Connects with CXO-level leaders and translates vision to teams, bridging the gap between leadership strategy and technical execution.',
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Recent Industry <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world achievements from the last 3 years showcasing PK Sir's hands-on expertise and industry leadership
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {impacts.map((impact, index) => (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <impact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold">
                      {impact.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DevOpsBookSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column - Book Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative group w-full max-w-sm">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <Card className="relative border-2 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
                  <CardContent className="p-0">
                    <a
                      href="/DevOpsBook/Azure-DevOps-Book-26-1-ScaleWithPK-Sir.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-[3/4] overflow-hidden rounded-lg group/image"
                    >
                      <Image
                        src="/DevOpsBook/Praveen G - Multi Cloud DevSecOps-Curriculum.png"
                        alt="Azure DevOps Book by PK Sir - DevOps Book written based on real-time industry experience"
                        width={400}
                        height={533}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/image:scale-110"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-white font-semibold text-sm">Click to View Book</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-poppins text-sm font-semibold text-primary">
                  Author & Industry Expert
                </span>
              </div>
              
              <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
                DevOps Book by <span className="gradient-text">PK Sir</span>
              </h2>
              
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                PK Sir has authored a comprehensive DevOps book based on his <strong>17+ years of real-time industry experience</strong>. This book reflects his deep expertise in Azure DevOps and provides practical insights from real-world IT industry scenarios.
              </p>
              
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Written from the perspective of an industry veteran who has grown from System Administrator to Architect-level roles, this book combines theoretical knowledge with practical, hands-on experience from managing 2,000+ servers, working on 80+ applications, and leading critical infrastructure projects.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                  <div className="text-left">
                    <strong>Real-World Experience:</strong> Based on 17+ years of hands-on IT industry experience
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                  <div className="text-left">
                    <strong>Azure DevOps Focus:</strong> Deep insights into Azure DevOps, PK Sir's strongest mastery area
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                  <div className="text-left">
                    <strong>Industry-Relevant:</strong> Practical knowledge from managing large-scale infrastructure and applications
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                  <div className="text-left">
                    <strong>Architect-Level Insights:</strong> Written by someone who has grown to Architect-level roles
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 shadow-lg"
                  asChild
                >
                  <a
                    href="/DevOpsBook/Azure-DevOps-Book-26-1-ScaleWithPK-Sir.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    View DevOps Book
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                  asChild
                >
                  <a href="#about">
                    Learn More About PK Sir
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BITSWorkshopSection() {
  const workshopImages = [
    {
      src: '/workshops/BITS-PILANI/BITS-PILANI-College-Campus.png',
      alt: 'Workshop at BITS-PILANI College Campus',
      title: 'Workshop Venue',
    },
    {
      src: '/workshops/BITS-PILANI/Presentation-At-BITS-PILANI.png',
      alt: 'Workshop presentation session',
      title: 'Workshop Session',
    },
    {
      src: '/workshops/BITS-PILANI/BITS-PILANI-Students.png',
      alt: 'Students attending the workshop',
      title: 'Workshop Participants',
    },
    {
      src: '/workshops/BITS-PILANI/BITS-PILANI-auditorium.png',
      alt: 'Workshop conducted in auditorium',
      title: 'Workshop Venue',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Award className="h-5 w-5 text-primary" />
            <span className="font-poppins text-sm font-semibold text-primary">
              Workshop Conducted
            </span>
          </div>
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Workshop at <span className="gradient-text">BITS-PILANI</span>
          </h2>
          <p className="mb-2 text-lg text-muted-foreground">
            PK Sir recently conducted a workshop at BITS-PILANI, one of India's premier engineering institutions
          </p>
          <p className="text-base text-muted-foreground">
            This workshop experience showcases our commitment to sharing knowledge and expertise in IT career mentorship with students at leading institutions
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {workshopImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-[1.02]">
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-poppins text-sm font-semibold text-white">
                          {image.title}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* Trust indicators */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-2 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-poppins text-lg font-semibold">
                  Prestigious Institution
                </h3>
                <p className="text-sm text-muted-foreground">
                  BITS-PILANI is recognized as one of India's top-ranked engineering institutions, known for academic excellence
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-poppins text-lg font-semibold">
                  Workshop Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Conducting workshops at premier institutions demonstrates our expertise and commitment to sharing knowledge with students
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-poppins text-lg font-semibold">
                  Knowledge Sharing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sharing expertise through workshops at leading institutions reflects our commitment to helping students and professionals grow
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompaniesSection() {
  const companies = [
    { name: 'ScaleWithPK', role: 'Founder & Mentor' },
    { name: 'SkillORA', role: 'Founder & Advisory' },
    { name: 'Viitor Technologies', role: 'Founder' },
    { name: 'Get Eazy', role: 'Investor & Advisory' },
    { name: 'Local Stories', role: 'Investor & Advisory' },
    { name: 'Eazy Consultancy', role: 'Investor & Advisory' },
  ];

  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-2xl font-bold lg:text-3xl">
            Entrepreneurial <span className="gradient-text">Ventures</span>
          </h2>
          <p className="mb-12 text-muted-foreground">
            Founder, Investor, and Advisory roles across multiple companies
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => (
              <Card key={index} className="border">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-poppins text-lg font-semibold">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{company.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingProgramsSection() {
  const programs = [
    {
      icon: Code,
      title: 'Azure DevOps (Strongest Mastery)',
      description: 'In-depth Azure DevOps training with CI/CD, Docker, Kubernetes, automation tools, and infrastructure management. PK Sir\'s strongest mastery area, delivering expert-level guidance on enterprise DevOps practices.',
    },
    {
      icon: Cloud,
      title: 'DevOps Engineering',
      description: 'Comprehensive DevOps Engineering covering CI/CD pipelines, containerization, orchestration, infrastructure as code, and multi-cloud deployments with hands-on real-world projects.',
    },
    {
      icon: BookOpen,
      title: 'Java Full Stack Development',
      description: 'End-to-end Java Full Stack Development from frontend (React, Angular) to backend (Spring Boot, Microservices) with database integration and deployment strategies.',
    },
    {
      icon: Cpu,
      title: 'AI / Machine Learning',
      description: 'Practical AI and Machine Learning training with Python, TensorFlow, model deployment, and real-world ML implementations for IT professionals looking to upskill.',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Cyber Security fundamentals, ethical hacking, security best practices, vulnerability assessment, and security architecture for modern IT infrastructure.',
    },
    {
      icon: LineChart,
      title: 'Career Roadmap Guidance',
      description: 'Personalized career paths and roadmap guidance for each technology domain. Structured growth planning, skill gap analysis, and strategic career positioning for high packages.',
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Training <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT training programs designed for career growth and structured advancement. The platform supports current and future technologies, positioning PK Sir as a complete IT Career Mentor.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-2 transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <program.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    {
      text: "PK Sir's mentorship changed my career trajectory. His practical guidance helped me transition from a struggling fresher to a confident DevOps engineer.",
      author: 'Career Transformation Student',
    },
    {
      text: "After 3 years of career gap, I was lost. PK Sir's one-to-one sessions gave me clarity and direction. Now I'm working in a reputed IT company.",
      author: 'Career Gap Candidate',
    },
    {
      text: 'The training approach is different - focused on real-world skills rather than just theory. The mentorship helped me crack multiple job interviews.',
      author: 'Working Professional',
    },
  ];

  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real transformations from students and professionals
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-muted-foreground">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="mx-auto max-w-3xl border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-4 font-poppins text-2xl font-bold">
                Join 10,000+ Successful Learners
              </h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Be part of a community that has transformed careers and achieved
                success in the IT industry through structured mentorship and real-world training
              </p>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Start Your Journey Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MentorshipModelSection() {
  const modelFeatures = [
    {
      icon: Clock,
      title: '80+ Hours Technical Live Sessions',
      description: 'Comprehensive 80+ hours of technical live sessions covering core concepts, hands-on practice, and real-world projects. 100% LIVE and interactive learning.',
    },
    {
      icon: Users,
      title: '20+ Hours Workshops',
      description: 'Additional 20+ hours of workshops covering advanced topics, industry best practices, and practical implementations. Workshops are optional and pre-informed.',
    },
    {
      icon: BookOpen,
      title: 'Recordings & Resources',
      description: 'All sessions include recordings, screenshots, and documents for practice and revision. Access to comprehensive learning materials for self-study.',
    },
    {
      icon: Briefcase,
      title: 'Resume & LinkedIn Support',
      description: 'Resume building support, LinkedIn profile positioning, communication guidance, and interview preparation to help you secure strong IT roles.',
    },
    {
      icon: Code,
      title: 'Tools Exposure',
      description: 'Hands-on exposure to industry tools like Jira, Git, and other DevOps/development tools. Practical experience with real-world tools used in IT companies.',
    },
    {
      icon: MessageSquare,
      title: 'Trainer-as-Team-Leader Mindset',
      description: 'PK Sir adopts a trainer-as-team-leader mindset, fostering peer learning culture and collaborative discussions through WhatsApp as the discussion forum.',
    },
  ];

  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Training & Mentorship <span className="gradient-text">Model</span>
          </h2>
          <p className="mb-4 text-lg text-muted-foreground">
            A professional mentorship model designed for structured growth and real-world success
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Class Structure:</strong> Monday–Friday regular live sessions, weekends optional workshops (pre-informed). Online-first model with own laptop practice. Offline sessions only if informed in advance.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modelFeatures.map((feature, index) => (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'Who is PK Sir?',
      answer:
        'PK Sir is an IT Career Mentor, IT Guru, and Industry Expert from Hyderabad with 17+ years of IT industry experience. He has trained 10,000+ learners and helped 1,000+ professionals transition successfully with an average minimum salary hike of ₹5,00,000. His expertise spans Azure DevOps (his strongest mastery), Cloud Computing, Software Architecture, and comprehensive IT career mentorship. His career journey reflects growth from Mahindra Satyam System Administrator to Architect-level roles.',
    },
    {
      question: 'What is ScaleWithPK?',
      answer:
        'ScaleWithPK is the personal branding platform of PK Sir - a highly experienced IT Career Mentor from Hyderabad. It is not an institute but a personal mentorship platform focused on helping professionals, freshers, and career switchers scale their IT careers through structured guidance, real-world experience, and mentorship. The platform emphasizes personal branding and individual mentorship rather than institutional training.',
    },
    {
      question: 'What technologies does PK Sir teach?',
      answer:
        'PK Sir specializes in Azure DevOps (his strongest mastery area), along with DevOps Engineering, Java Full Stack, AI/Machine Learning, Cloud Computing, and Cyber Security. The platform is designed to support current and future technologies, positioning him as a comprehensive IT Career Mentor rather than focusing on a single technology. This future-proof approach ensures the platform can accommodate emerging technologies as the IT industry evolves.',
    },
    {
      question: 'Who can benefit from PK Sir\'s mentorship?',
      answer:
        'PK Sir\'s mentorship benefits five key audience segments: (1) Experienced IT professionals seeking structured growth and high packages, (2) Non-IT roles working in IT companies wanting to switch to technical roles, (3) Career gap candidates (professors, banking aspirants, etc.) facing re-entry barriers, (4) Non-IT to IT switch aspirants from completely different fields, and (5) Freshers passionate about IT careers who lack real-world experience.',
    },
    {
      question: 'What is PK Sir\'s recent industry impact?',
      answer:
        'In the last 3 years, PK Sir has demonstrated significant industry impact: migrated 2,000+ servers, worked on 80+ applications, served as the key troubleshooting point of contact during critical incidents, and connected with CXO-level leaders to translate vision to teams. This hands-on experience enables him to provide strategic career guidance aligned with industry leadership expectations.',
    },
    {
      question: 'What is the training and mentorship model?',
      answer:
        'The training model includes 80+ hours of technical live sessions (100% LIVE and interactive), 20+ hours of optional workshops (pre-informed), recordings and resources for practice, resume building and LinkedIn positioning support, communication guidance, tools exposure (Jira, Git, etc.), and a trainer-as-team-leader mindset fostering peer learning. Classes run Monday–Friday for regular sessions, with optional weekend workshops. The model is online-first with own laptop practice encouraged.',
    },
    {
      question: 'Does PK Sir guarantee placements?',
      answer:
        'ScaleWithPK is a personal mentorship platform, not an institute. PK Sir provides structured mentorship, career guidance, training, and support to help professionals transition successfully. While the track record shows 1,000+ professionals successfully transitioned with average minimum salary hikes of ₹5,00,000, individual results depend on various factors including personal effort, market conditions, and career readiness. The platform does not guarantee placements or represent any employer.',
    },
    {
      question: 'How is this different from other training institutes?',
      answer:
        'ScaleWithPK is a personal branding platform focused on individual mentorship, not an institutional training center. Key differentiators include: (1) Personal attention with 2,000+ one-to-one sessions, (2) Real-world experience from 17+ years in IT and recent industry impact, (3) Structured growth guidance for high packages, (4) CXO-level exposure enabling strategic career advice, (5) Future-proof platform supporting multiple technologies, and (6) Trainer-as-team-leader mindset fostering peer learning culture.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about ScaleWithPK
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-poppins text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Ready to Scale Your IT Career?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Get structured mentorship and expert guidance from PK Sir - IT Career Mentor, IT Guru, and Industry Expert. Start your journey to a successful IT career with personalized mentorship today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-success text-white hover:bg-success/90"
              asChild
            >
              <a
                href="https://wa.me/919948574575"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
                <a href="tel:+919948574575">
                <Phone className="mr-2 h-5 w-5" />
                Call for Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-secondary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-poppins text-xl font-bold">ScaleWithPK</h3>
            <p className="mb-4 text-white/80">
              Personal branding platform of PK Sir - IT Career Mentor, IT Guru, and Industry Expert from Hyderabad. Helping professionals, freshers, and career switchers scale their IT careers through structured guidance, real-world experience, and mentorship.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-poppins text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white">
                  About PK Sir
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/80 hover:text-white">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-poppins text-lg font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919948574575" className="text-white/80 hover:text-white">
                  +91 99485 74575
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:10x@ScaleWithPK.com"
                  className="text-white/80 hover:text-white"
                >
                  10x@ScaleWithPK.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/praveengudla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-white/80">Telangana & Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-poppins text-lg font-semibold">Companies</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>ScaleWithPK - Founder</li>
              <li>SkillORA - Founder</li>
              <li>Viitor Technologies - Founder</li>
              <li>Get Eazy - Investor</li>
              <li>Local Stories - Investor</li>
              <li>Eazy Consultancy - Investor</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} ScaleWithPK. All rights reserved. | PK Sir -
            Independent IT Career Mentor
          </p>
          <p className="mt-2">
            Disclaimer: ScaleWithPK is an independent personal mentorship platform. PK Sir provides mentorship, training, and career guidance. Individual career results depend on various factors including personal effort, market conditions, and career readiness. The platform does not guarantee placements or represent any employer. All company references are for founder, investor, or advisory roles only. PK Sir works in an IT company and this platform represents his independent mentorship activities.
          </p>
        </div>
      </div>
    </footer>
  );
}
