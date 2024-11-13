"use client";
import { useState, useEffect } from "react";
import {
  Search,
  TrendingUp,
  Award,
  DollarSign,
  Zap,
  CreditCard,
  MessageCircle,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function NanaPicksLanding() {
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-200">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-600 dark:text-blue-400 text-2xl font-bold"
              >
                NanaPicks
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="#how-it-works"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="#why-nanapicks"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Why NanaPicks
                </Link>
                <Link
                  href="#categories"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Categories
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Get Early Access
              </Button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Bold Predictions, Big Rewards.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A prediction market platform for the next billion users to bet on
              future events and outcomes.
            </p>
            <form
              onSubmit={handleEmailSubmit}
              className="max-w-md mx-auto mb-8"
            >
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Get Early Access
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What is NanaPicks?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
            NanaPicks is a revolutionary prediction platform empowering users
            worldwide to make bold predictions on real-world events and earn big
            rewards. From sports to finance and beyond, NanaPicks lets you turn
            your insights into earnings.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Explore Predictions",
                description:
                  "Browse a wide variety of events in categories like politics, finance, sports, and entertainment.",
              },
              {
                icon: TrendingUp,
                title: "Make Your Picks",
                description:
                  "Select the outcome you believe in, based on your insights and trends.",
              },
              {
                icon: Award,
                title: "Win Rewards",
                description:
                  "Earn rewards for correct predictions and see your knowledge pay off in real time.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
              >
                <step.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Sign Up to Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why NanaPicks Section */}
      <section id="why-nanapicks" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why NanaPicks?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Competitive Returns",
                description: "Earn cash for accurate predictions.",
              },
              {
                icon: Zap,
                title: "Easy to Use",
                description:
                  "Designed for a seamless experience, even if you're new to prediction markets.",
              },
              {
                icon: CreditCard,
                title: "Easy to Pay and Get Paid",
                description:
                  "Use your preferred local payment methods to participate and to receive rewards.",
              },
              {
                icon: MessageCircle,
                title: "Community-Driven",
                description:
                  "Share insights with others and engage with a community focused on trending events.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Get Exclusive Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section id="categories" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
            With NanaPicks, the world is your arena. Explore and predict across
            a wide variety of topics, including:
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Sports",
                description: "Who's winning the next big game?",
              },
              {
                title: "Politics",
                description: "What's the outcome of critical elections?",
              },
              { title: "Finance", description: "Will markets rise or fall?" },
              {
                title: "Pop Culture",
                description: "Stay ahead of the trends in entertainment.",
              },
              {
                title: "Technology",
                description: "Predict the next big tech breakthrough.",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Be the First to Pick
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Early Adopters</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Trusted by early adopters and backed by respected partners,
            NanaPicks is here to create a reliable and engaging prediction
            market for all.
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                  Logo {i}
                </span>
              </div>
            ))}
          </div>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Join the Trusted Community
          </Button>
        </div>
      </section>

      {/* Early Adopter Benefits Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Early Adopter Benefits</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Sign up today for exclusive early access benefits! The first 10,000
            sign-ups will unlock exclusive predictions and rewards. Join us as
            an early adopter and be part of the NanaPicks journey from the very
            beginning.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Get Early Access
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {"Don't Miss Out on the Future. Join NanaPicks Today."}
          </h2>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                required
              />
              <Button
                type="submit"
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NanaPicks</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                The next generation prediction market platform.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form onSubmit={handleEmailSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} NanaPicks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
