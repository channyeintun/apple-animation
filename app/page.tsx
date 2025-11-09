import { Navigation } from './components/Navigation';
import { MacNavigation } from './components/MacNavigation';
import { FadeInSection } from './components/FadeInSection';
import { StaggeredItems } from './components/StaggeredItems';

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <MacNavigation />

      {/* Hero Section */}
      <section className="pt-[92px] pb-[60px] text-center bg-white">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6">
            <p className="text-[#1d1d1f] text-[21px] font-semibold mb-2">Mac</p>
            <h1 className="text-[56px] md:text-[80px] font-semibold leading-[1.05] tracking-[-0.015em] text-[#1d1d1f] mb-4">
              If you can dream it,<br />Mac can do it.
            </h1>
          </div>
        </FadeInSection>
      </section>

      {/* MacBook Air Section */}
      <section className="py-[60px] bg-[#fbfbfd]">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <div className="mb-4">
              <span className="inline-block px-[11px] py-[3px] text-[12px] font-semibold text-white bg-[#bf4800] rounded-full">
                NEW
              </span>
            </div>
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.0625] tracking-[-0.009em] text-[#1d1d1f] mb-2">
              MacBook Air
            </h2>
            <p className="text-[28px] leading-[1.14286] tracking-[0.007em] text-[#1d1d1f] mb-3">
              Strikingly thin and fast so you can work, play, or create anywhere.
            </p>
            <p className="text-[17px] leading-[1.47059] tracking-[-0.022em] text-[#6e6e73] mb-6">
              From $999 or $83.25/mo. for 12 mo.*
            </p>

            <StaggeredItems startDelay={300}>
              {[
                <div key="links" className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Learn more</a>
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Buy</a>
                </div>,
                <div key="image" className="relative w-full h-[400px] md:h-[580px] bg-gradient-to-b from-[#f5f5f7] to-[#fbfbfd] rounded-[28px] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="text-[120px] font-bold text-[#e8e8ed]">MacBook Air</div>
                </div>,
                <div key="specs" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">13″ & 15″</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Two sizes</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">18 hrs</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Battery life<sup>1</sup></p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">M3</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Chip</p>
                  </div>
                </div>
              ]}
            </StaggeredItems>
          </div>
        </FadeInSection>
      </section>

      {/* MacBook Pro Section */}
      <section className="py-[60px] bg-white">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.0625] tracking-[-0.009em] text-[#1d1d1f] mb-2">
              MacBook Pro
            </h2>
            <p className="text-[28px] leading-[1.14286] tracking-[0.007em] text-[#1d1d1f] mb-3">
              Mind-blowing. Head-turning.
            </p>
            <p className="text-[17px] leading-[1.47059] tracking-[-0.022em] text-[#6e6e73] mb-6">
              From $1,599 or $133.25/mo. for 12 mo.*
            </p>

            <StaggeredItems startDelay={300}>
              {[
                <div key="links" className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Learn more</a>
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Buy</a>
                </div>,
                <div key="image" className="relative w-full h-[400px] md:h-[580px] bg-gradient-to-b from-[#1d1d1f] to-[#000] rounded-[28px] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="text-[120px] font-bold text-[#2d2d2d]">MacBook Pro</div>
                </div>,
                <div key="specs" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">14″ & 16″</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Display sizes</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">22 hrs</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Battery life<sup>2</sup></p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">M3 Pro/Max</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Chips</p>
                  </div>
                </div>
              ]}
            </StaggeredItems>
          </div>
        </FadeInSection>
      </section>

      {/* iMac Section */}
      <section className="py-[60px] bg-[#fbfbfd]">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.0625] tracking-[-0.009em] text-[#1d1d1f] mb-2">
              iMac
            </h2>
            <p className="text-[28px] leading-[1.14286] tracking-[0.007em] text-[#1d1d1f] mb-3">
              A splash of color for every space.
            </p>
            <p className="text-[17px] leading-[1.47059] tracking-[-0.022em] text-[#6e6e73] mb-6">
              From $1,299 or $108.25/mo. for 12 mo.*
            </p>

            <StaggeredItems startDelay={300}>
              {[
                <div key="links" className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Learn more</a>
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Buy</a>
                </div>,
                <div key="image" className="relative w-full h-[400px] md:h-[580px] bg-gradient-to-b from-[#e3f2fd] to-[#fbfbfd] rounded-[28px] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="text-[120px] font-bold text-[#d1e7f7]">iMac</div>
                </div>,
                <div key="specs" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">24″</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">4.5K Retina display</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">7 colors</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">To choose from</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">M3</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Chip</p>
                  </div>
                </div>
              ]}
            </StaggeredItems>
          </div>
        </FadeInSection>
      </section>

      {/* Mac mini Section */}
      <section className="py-[60px] bg-white">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.0625] tracking-[-0.009em] text-[#1d1d1f] mb-2">
              Mac mini
            </h2>
            <p className="text-[28px] leading-[1.14286] tracking-[0.007em] text-[#1d1d1f] mb-3">
              The most affordable Mac desktop.
            </p>
            <p className="text-[17px] leading-[1.47059] tracking-[-0.022em] text-[#6e6e73] mb-6">
              From $599 or $49.91/mo. for 12 mo.*
            </p>

            <StaggeredItems startDelay={300}>
              {[
                <div key="links" className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Learn more</a>
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Buy</a>
                </div>,
                <div key="image" className="relative w-full h-[400px] md:h-[580px] bg-gradient-to-b from-[#f5f5f7] to-[#fff] rounded-[28px] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="text-[120px] font-bold text-[#e8e8ed]">Mac mini</div>
                </div>,
                <div key="specs" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">5″ × 5″</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Footprint</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">Compact</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Design</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">M2</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Chip</p>
                  </div>
                </div>
              ]}
            </StaggeredItems>
          </div>
        </FadeInSection>
      </section>

      {/* Mac Studio Section */}
      <section className="py-[60px] bg-[#fbfbfd]">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.0625] tracking-[-0.009em] text-[#1d1d1f] mb-2">
              Mac Studio
            </h2>
            <p className="text-[28px] leading-[1.14286] tracking-[0.007em] text-[#1d1d1f] mb-3">
              Phenomenal power. Endless possibilities.
            </p>
            <p className="text-[17px] leading-[1.47059] tracking-[-0.022em] text-[#6e6e73] mb-6">
              From $1,999 or $166.58/mo. for 12 mo.*
            </p>

            <StaggeredItems startDelay={300}>
              {[
                <div key="links" className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Learn more</a>
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Buy</a>
                </div>,
                <div key="image" className="relative w-full h-[400px] md:h-[580px] bg-gradient-to-b from-[#2d2d2d] to-[#fbfbfd] rounded-[28px] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="text-[120px] font-bold text-[#1d1d1f]">Mac Studio</div>
                </div>,
                <div key="specs" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">M2 Max</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">or M2 Ultra</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">8TB</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Maximum storage</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">192GB</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Maximum memory</p>
                  </div>
                </div>
              ]}
            </StaggeredItems>
          </div>
        </FadeInSection>
      </section>

      {/* Mac Pro Section */}
      <section className="py-[60px] bg-white">
        <FadeInSection>
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.0625] tracking-[-0.009em] text-[#1d1d1f] mb-2">
              Mac Pro
            </h2>
            <p className="text-[28px] leading-[1.14286] tracking-[0.007em] text-[#1d1d1f] mb-3">
              A beast of epic proportions.
            </p>
            <p className="text-[17px] leading-[1.47059] tracking-[-0.022em] text-[#6e6e73] mb-6">
              From $6,999 or $583.25/mo. for 12 mo.*
            </p>

            <StaggeredItems startDelay={300}>
              {[
                <div key="links" className="flex justify-center gap-6 mb-8">
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Learn more</a>
                  <a href="#" className="text-[#0066cc] text-[21px] hover:underline">Buy</a>
                </div>,
                <div key="image" className="relative w-full h-[400px] md:h-[580px] bg-gradient-to-b from-[#1d1d1f] to-[#fff] rounded-[28px] overflow-hidden mb-8 flex items-center justify-center">
                  <div className="text-[120px] font-bold text-[#2d2d2d]">Mac Pro</div>
                </div>,
                <div key="specs" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">M2 Ultra</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Chip</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">8TB</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Maximum storage</p>
                  </div>
                  <div>
                    <p className="text-[48px] font-semibold leading-[1.08349] tracking-[-0.003em] text-[#1d1d1f]">PCIe</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Expansion slots</p>
                  </div>
                </div>
              ]}
            </StaggeredItems>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] py-[21px] text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <p className="text-[12px] text-[#6e6e73] leading-[1.33337]">
            * Pricing and availability subject to change. See apple.com for details.
          </p>
        </div>
      </footer>
    </div>
  );
}
