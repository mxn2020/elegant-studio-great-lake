// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, BarChart3, Users, Star, Trophy, Brain, Target, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getTestTypeCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['test-type-card-0', 'test-type-card-1', 'test-type-card-2', 'test-type-card-3'];
  return ids[index] || 'noID';
};

const getBenefitCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['benefit-card-0', 'benefit-card-1', 'benefit-card-2', 'benefit-card-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Smart Testing",
      description: "Create intelligent tests with adaptive questioning and real-time feedback"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Advanced Analytics",
      description: "Track performance with detailed analytics and progress insights"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Timed Assessments",
      description: "Set time limits and create pressure-tested evaluation environments"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Secure Testing",
      description: "Enterprise-grade security with anti-cheating measures and data protection"
    }
  ];

  const stats = [
    { label: "Tests Created", value: "10K+" },
    { label: "Active Users", value: "5K+" },
    { label: "Success Rate", value: "98%" },
    { label: "Avg Score", value: "85%" }
  ];

  const testTypes = [
    {
      title: "Knowledge Tests",
      description: "Assess understanding with multiple choice, true/false, and short answer questions",
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Skill Assessments",
      description: "Evaluate practical abilities with hands-on challenges and scenarios",
      icon: <Target className="w-6 h-6 text-green-500" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Certification Exams",
      description: "Create professional certification tests with detailed scoring",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Practice Quizzes",
      description: "Build engaging practice sessions with instant feedback",
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Easy Test Creation",
      description: "Intuitive interface for creating tests in minutes, not hours",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Real-time Results",
      description: "Instant scoring and feedback for immediate learning insights",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Progress Tracking",
      description: "Monitor improvement over time with detailed analytics",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Team Collaboration",
      description: "Share tests and results with team members and instructors",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Company logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="TestMaster brand name"
              className="text-xl font-bold text-white"
            >
              TestMaster
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="docs-button" 
              devName="Docs Button" 
              devDescription="Link to documentation"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Help
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Start Testing
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero Section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing the testing platform"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Smart Testing
              <Span 
                devId="platform-highlight" 
                devName="Platform Highlight" 
                devDescription="Highlighted platform text in gradient"
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {' '}Platform
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero Section description explaining the platform benefits"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Create, manage, and analyze tests with our intelligent testing platform. 
              Perfect for educators, trainers, and organizations seeking comprehensive assessment solutions.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero Section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-start-testing"
                    devName="Start Testing Button"
                    devDescription="Primary call-to-action button for starting to use the platform"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-start-testing"
                    devName="Start Testing Button"
                    devDescription="Primary call-to-action button for starting to use the platform"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Start Testing Free
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-demo-button"
                devName="View Demo Button"
                devDescription="Secondary button to view a demo"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                View Demo
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics Section showing platform metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Powerful Testing Features</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, manage, and analyze comprehensive assessments
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-400">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Test Types Section */}
      <Container componentId="test-types-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Test Types for Every Need</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              From simple quizzes to comprehensive certification exams
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 gap-6">
            {testTypes.map((testType, index) => (
              <Card 
                key={index} 
                devId={getTestTypeCardId(index)}
                devName={`${testType.title} Test Type Card`}
                devDescription={`Test type card for ${testType.title}: ${testType.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all group"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="flex items-start space-x-4">
                    <Div devId="noID" className={`w-12 h-12 rounded-lg bg-gradient-to-r ${testType.color} flex items-center justify-center flex-shrink-0`}>
                      {testType.icon}
                    </Div>
                    <Div devId="noID" className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {testType.title}
                      </h3>
                      <P devId="noID" className="text-gray-400">{testType.description}</P>
                    </Div>
                  </Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Benefits Section */}
      <Container componentId="benefits-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Why Choose TestMaster?</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Streamline your testing process with our comprehensive platform
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                devId={getBenefitCardId(index)}
                devName={`${benefit.title} Benefit Card`}
                devDescription={`Benefit card highlighting ${benefit.title}: ${benefit.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                    {benefit.icon}
                  </Div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <P devId="noID" className="text-gray-400 text-sm">{benefit.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* CTA Section */}
      <Container componentId="cta-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Transform Your Testing?</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and organizations using TestMaster to create better assessments
            </P>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="cta-start-free"
                devName="Start Free Button"
                devDescription="Primary CTA button to start free trial"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Start Free Trial
                </span>
              </Button>
              <Button 
                devId="cta-contact-sales"
                devName="Contact Sales Button"
                devDescription="Secondary CTA button to contact sales"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contact Sales
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 TestMaster. Empowering education through intelligent testing.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};