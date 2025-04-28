<template>
  <div>
    <Header />
    <HeroSection />
    <ClientsSection />
    <FeaturesSection />
    <BlogSection />
    <CaseStudySection />
    <DesignSection />
    <PricingSection />
    <TestimonialSection />
    <CtaSection />
    <Footer />
    <ChatbotProveo />
  </div>
</template>

<script>
import Header from './Header.vue';
import HeroSection from './HeroSection.vue';
import FeaturesSection from './FeaturesSection.vue';
import BlogSection from './BlogSection.vue';
import CaseStudySection from './CaseStudySection.vue';
import DesignSection from './DesignSection.vue';
import PricingSection from './PricingSection.vue';
import TestimonialSection from './TestimonialSection.vue';
import CtaSection from './CtaSection.vue';
import ClientsSection from './ClientsSection.vue';
import Footer from './Footer.vue';
import ChatbotProveo from './chatbot.vue';

export default {
  components: {
    Header,
    HeroSection,
    FeaturesSection,
    BlogSection,
    CaseStudySection,
    DesignSection,
    PricingSection,
    TestimonialSection,
    CtaSection,
    ClientsSection,
    Footer,
    ChatbotProveo
  }
};
</script>