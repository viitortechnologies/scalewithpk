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
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
                description: 'IT Career Coach, DevOps Trainer, and Technology Expert with 17+ years of industry experience',
                jobTitle: 'IT Career Coach & DevOps Mentor',
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'IT Career Coach',
                  description: 'Expert mentorship for IT career transformation and development',
                },
                knowsAbout: [
                  'DevOps',
                  'Cloud Computing',
                  'Software Architecture',
                  'IT Career Development',
                  'Java Full Stack',
                  'Cyber Security',
                  'Career Mentorship',
                ],
                award: '1000+ Professionals Placed, 12000+ Students Trained',
              },
              {
                '@type': 'Organization',
                '@id': 'https://scalewithpk.com/#organization',
                name: 'ScaleWithPK',
                founder: {
                  '@type': 'Person',
                  name: 'PK Sir',
                },
                description: 'Personal branding platform for IT career mentorship and DevOps training',
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
                      text: 'PK Sir is an IT Career Coach and DevOps Trainer with 17+ years of industry experience. He has trained 12,000+ students and helped 1,000+ professionals secure strong IT roles.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What services does ScaleWithPK offer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'ScaleWithPK offers IT career mentorship, DevOps training, career transformation guidance, one-to-one mentoring sessions, and expert guidance for freshers and working professionals.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is PK Sir\'s experience?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'PK Sir has 17+ years of IT industry experience, growing from System Engineer to Architect-level roles. He has conducted 2,000+ one-to-one mentorship sessions and 500+ workshops.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProblemsSection />
      <ServicesSection />
      <WhyDifferentSection />
      <CompaniesSection />
      <TrainingProgramsSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
            17+ Years of IT Industry Experience
          </Badge>
          <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-white lg:text-6xl">
            Transform Your IT Career with
            <span className="block text-accent-foreground">PK Sir</span>
          </h1>
          <p className="mb-8 text-lg text-white/90 lg:text-xl">
            Expert IT Career Coach, DevOps Trainer & Technology Mentor
            <br />
            Helping freshers and professionals build successful IT careers through
            personalized mentorship
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-success text-white hover:bg-success/90"
              asChild
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Your Career Journey
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href="#about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Users, value: '12,000+', label: 'Students Trained' },
    { icon: Briefcase, value: '1,000+', label: 'Professionals Placed' },
    { icon: Clock, value: '2,000+', label: 'Mentorship Sessions' },
    { icon: Award, value: '500+', label: 'Workshops Conducted' },
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
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            About <span className="gradient-text">PK Sir</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Independent IT Career Mentor & DevOps Expert
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  With <strong>17+ years of IT industry experience</strong>, PK Sir has
                  grown from a System Engineer to Architect-level roles, mastering
                  DevOps, Cloud Computing, and Software Architecture. His journey reflects
                  real-world experience in building scalable systems and leading technical
                  teams.
                </p>
                <p className="text-lg leading-relaxed">
                  For over <strong>10 years</strong>, he has been dedicated to mentoring
                  and training the next generation of IT professionals. His approach
                  combines technical expertise with practical career guidance, helping
                  individuals navigate the complexities of the IT industry.
                </p>
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Industry Expert:</strong> DevOps, Cloud Architecture, and
                      Software Development
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Career Growth:</strong> From System Engineer to Architect
                      roles
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Training Impact:</strong> 50+ individuals earning ₹3-5 LPA
                      per month
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                      <strong>Team Leadership:</strong> 100+ professionals working under
                      guidance
                    </div>
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

function ProblemsSection() {
  const problems = [
    {
      icon: GraduationCap,
      title: 'Fresh Graduates Struggle',
      description:
        'No real-world experience, unable to crack interviews, unsure about career path',
    },
    {
      icon: Clock,
      title: 'Career Gap Challenges',
      description:
        'Professors, banking aspirants, or business attempts facing re-entry barriers',
    },
    {
      icon: TrendingUp,
      title: 'Career Transition Anxiety',
      description:
        'Non-IT professionals wanting to switch but lacking guidance and direction',
    },
    {
      icon: Target,
      title: 'Skill Gap in Working Professionals',
      description:
        'IT professionals stuck in same role, need upskilling for career acceleration',
    },
  ];

  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Career Problems <span className="gradient-text">We Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real challenges faced by IT aspirants and professionals
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <problem.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{problem.description}</p>
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
      title: 'One-to-One Mentorship',
      description:
        'Personalized career guidance sessions tailored to your specific situation and goals',
    },
    {
      icon: Code,
      title: 'DevOps Training',
      description:
        'Hands-on DevOps training with real-world projects and industry best practices',
    },
    {
      icon: Target,
      title: 'Career Transition Support',
      description:
        'Expert guidance for non-IT to IT career switches with comprehensive roadmaps',
    },
    {
      icon: Briefcase,
      title: 'Job Placement Guidance',
      description:
        'Interview preparation, resume building, and job search strategies',
    },
    {
      icon: TrendingUp,
      title: 'Skill Upskilling',
      description:
        'Advanced training for working professionals to accelerate career growth',
    },
    {
      icon: Heart,
      title: 'Motivational Coaching',
      description:
        'Overcome career challenges with confidence-building and mindset coaching',
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
            Comprehensive career development services for IT professionals
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

function WhyDifferentSection() {
  const differentiators = [
    {
      icon: Award,
      title: '17+ Years Industry Experience',
      description: 'Real-world expertise from System Engineer to Architect roles',
    },
    {
      icon: Users,
      title: 'Proven Track Record',
      description: '12,000+ students trained, 1,000+ professionals successfully placed',
    },
    {
      icon: Heart,
      title: 'Personal Attention',
      description: 'Individual mentorship focused on your unique career goals',
    },
    {
      icon: Rocket,
      title: 'Practical Approach',
      description: 'Industry-relevant skills and real-world project experience',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-accent py-20 text-white lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-poppins text-3xl font-bold lg:text-4xl">
            Why ScaleWithPK is Different
          </h2>
          <p className="text-lg text-white/90">
            Not just training, but career transformation through expert mentorship
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-white/20 p-4">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-3 font-poppins text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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
      title: 'DevOps Engineering',
      description: 'Master CI/CD, Docker, Kubernetes, AWS, and automation tools',
    },
    {
      icon: BookOpen,
      title: 'Java Full Stack Development',
      description: 'Frontend to backend development with Spring Boot and React',
    },
    {
      icon: Cpu,
      title: 'AI / Machine Learning',
      description: 'Python, TensorFlow, and practical ML implementations',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Security fundamentals, ethical hacking, and best practices',
    },
    {
      icon: Cloud,
      title: 'Cloud Engineering',
      description: 'AWS, Azure, GCP cloud architecture and solutions',
    },
    {
      icon: LineChart,
      title: 'Career Roadmap Guidance',
      description: 'Personalized career paths for each technology domain',
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
            Guided career paths with industry-relevant skills and practical training
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
                Join 12,000+ Successful Students
              </h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Be part of a community that has transformed careers and achieved
                success in the IT industry
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

function FAQSection() {
  const faqs = [
    {
      question: 'Who is PK Sir?',
      answer:
        'PK Sir is an IT Career Coach and DevOps Trainer with 17+ years of industry experience. He has trained 12,000+ students and helped 1,000+ professionals secure strong IT roles. His expertise spans DevOps, Cloud Computing, Software Architecture, and career mentorship.',
    },
    {
      question: 'What services does ScaleWithPK offer?',
      answer:
        'ScaleWithPK offers IT career mentorship, DevOps training, career transformation guidance, one-to-one mentoring sessions, skill upskilling programs, and expert guidance for both freshers and working professionals looking to advance their IT careers.',
    },
    {
      question: 'Who can benefit from PK Sir\'s mentorship?',
      answer:
        'Recent graduates seeking IT jobs, career gap candidates (professors, banking aspirants), non-IT to IT switchers, and working IT professionals looking to upskill and accelerate their careers can all benefit from personalized mentorship and training.',
    },
    {
      question: 'What is PK Sir\'s experience and background?',
      answer:
        'PK Sir has 17+ years of IT industry experience, having grown from System Engineer to Architect-level roles. He has conducted 2,000+ one-to-one mentorship sessions, 500+ workshops, and trained professionals who now earn ₹3-5 LPA per month.',
    },
    {
      question: 'What training programs are available?',
      answer:
        'Training programs include DevOps Engineering, Java Full Stack Development, AI/Machine Learning, Cyber Security, Cloud Engineering, and personalized career roadmap guidance. All programs focus on practical, industry-relevant skills.',
    },
    {
      question: 'How is this different from other training institutes?',
      answer:
        'ScaleWithPK is not an institute but a personal mentorship platform. The focus is on individual attention, real-world experience, practical skills, and career transformation rather than just classroom training. Each student receives personalized guidance based on their specific career goals.',
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
            Ready to Transform Your IT Career?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Get personalized mentorship and expert guidance from PK Sir. Start your
            journey to a successful IT career today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-success text-white hover:bg-success/90"
              asChild
            >
              <a
                href="https://wa.me/919876543210"
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
              <a href="tel:+919876543210">
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
              Expert IT Career Mentorship and DevOps Training by PK Sir with 17+ years
              of industry experience.
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
                <a href="tel:+919876543210" className="text-white/80 hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@scalewithpk.com"
                  className="text-white/80 hover:text-white"
                >
                  contact@scalewithpk.com
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
            Disclaimer: Independent mentorship platform. No placement guarantees. All
            company references are for founder, investor, or advisory roles only.
          </p>
        </div>
      </div>
    </footer>
  );
}
