"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          navItems={[{ name: 'hero', id: 'hero' }, { name: 'about', id: 'about' }, { name: 'how-to-buy', id: 'how-to-buy' }, { name: 'tokenomics', id: 'tokenomics' }, { name: 'footer', id: 'footer' }]}
          buttonText="Get started"
          onButtonClick={() => { /* handle click */ }}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to NovaSaaS"
          subtitle="Simplifying Software as a Service"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="At NovaSaaS, we redefine the expectations of SaaS solutions with clarity, confidence, and a premium touch."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Create an account and log in.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Invest in our service or token.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Manage your account and services from our dashboard.', image: '/images/placeholder3.avif', position: 'right', isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="A brief overview of our token distribution and incentives."
          tokenData={[
            { value: '50%', description: 'Community Allocation' },
            { value: '20%', description: 'Reserve Fund' },
            { value: '30%', description: 'Team & Advisors' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="NovaSaaS Logo"
          logoText="NovaSaaS"
          className="footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}