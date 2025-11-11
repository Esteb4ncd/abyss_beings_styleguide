export default function HomePage() {
	return (
		<>
			<a className="skip-link" href="#styleguide">Skip to content</a>

			<header id="top" className="hero" aria-label="Intro hero">
				<div className="hero__inner container">
					<div className="hero__grid">
						<div className="hero__copy">
							<h1 className="hero__title">Abyss Beings</h1>
							<h2 className="hero__subtitle">StyleSketches & Styleguide</h2>
							<ul className="hero__meta">
								<li>Esteban Cruz Dominguez | A01409700</li>
								<li>MDIA 3106</li>
							</ul>
						</div>
						
						<div className="hero__logo" aria-hidden="true">
							<img src="/logo02.svg" alt="Abyss Beings logo" style={{display: 'block', width: '100%', height: 'auto', position: 'relative', zIndex: 2}} />
						</div>
						
					</div>
				</div>
			</header>

			<nav className="topnav" aria-label="Primary">
				<div className="container topnav__inner">
					<a className="brand" href="#top">Abyss Beings</a>
					<a href="#palette">Color Palette</a>
					<a href="#typography">Typography</a>
					<a href="#branding">Logo & Branding</a>
					<a href="#graphics">Graphics &amp; Icons</a>
					<a href="#components">Components</a>
					<a href="#layout-mockup">Layout Mockup</a>
				</div>
			</nav>

			<main>
				<section id="palette" className="section section--styleguide" aria-label="Color Palette">
					<div className="container">
						<h2>Color Palette</h2>
						<ul className="swatches">
							<li>
								<div className="swatch swatch--c2">
									<div className="swatch__inner">
										<div className="swatch__name">Primary</div>
										<div className="swatch__hex">#2F8F90</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c1">
									<div className="swatch__inner">
										<div className="swatch__name">Secondary</div>
										<div className="swatch__hex">#223652</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c5">
									<div className="swatch__inner">
										<div className="swatch__name">Accent</div>
										<div className="swatch__hex">#3AD4C0</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c3">
									<div className="swatch__inner">
										<div className="swatch__name">Background</div>
										<div className="swatch__hex">#050A1A</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c4">
									<div className="swatch__inner">
										<div className="swatch__name">Surface</div>
										<div className="swatch__hex">#101831</div>
									</div>
								</div>
							</li>
						</ul>
						<p>On dark backgrounds, use white text (90% body / 100% headings) for AA contrast.</p>
					</div>
				</section>

				<section id="typography" className="section" aria-label="Typography">
					<div className="container">
						<h2>Typography</h2>
						<div className="type-specimens">
							<div className="specimen">
								<div className="specimen__label">Display — Audiowide</div>
								<h1 style={{fontFamily: 'Audiowide, Raleway, sans-serif', letterSpacing: '1px'}}>Abyss Beings</h1>
							</div>
							<div className="specimen">
								<div className="specimen__label">H1 — 56/64 — 700</div>
								<h1>Abyss Beings</h1>
							</div>
							<div className="specimen">
								<div className="specimen__label">H2 — 40/48 — 700</div>
								<h2>Twilight Zone</h2>
							</div>
							<div className="specimen">
								<div className="specimen__label">H3 — 32/40 — 700</div>
								<h3>Bioluminescence</h3>
							</div>
							<div className="specimen grid-2">
								<div>
									<div className="specimen__label">Body — 18/28 — 400</div>
									<p>Life thrives where sunlight fails. Raleway body copy at 18/28 maintains ~60ch line length for readability.</p>
								</div>
								<div>
									<div className="specimen__label">Caption — 14/20 — 500</div>
									<p className="caption">Caption text for images and figures.</p>
								</div>
							</div>
						</div>
						<p className="type-notes">Sentence case; left‑aligned; hyphenation off; links use Primary with underline on hover/focus.</p>
					</div>
				</section>

				<section id="branding" className="section" aria-label="Logo and Branding">
					<div className="container">
						<h2>Logo & Branding</h2>
						<p className="caption" style={{maxWidth: 920}}>Logo explores a “portal” concept—echoing the deep sea as an other‑worldly realm. The form suggests a threshold, with bioluminescent accents hinting at creatures that look like they came from another world. Usage below shows safe variations and favicon guidance.</p>

						<div className="branding-grid">
							<div className="branding-tile"><img src="/logo.svg" alt="Primary logo" /></div>
							<div className="branding-tile branding-tile--glow"><img src="/logo.svg" alt="Logo with portal glow" /></div>
							<div className="branding-tile branding-tile--mono"><img src="/logo.svg" alt="Monochrome logo" /></div>
						</div>

						<h3 style={{marginTop: 'var(--space-5)'}}>Favicon Variations</h3>
						<p className="caption">Maintain clear space around the mark. Examples show minimum margins at 3px, 5px, and 7px scales.</p>
						<div className="favicon-grid">
							<div className="favcap">3px
								<div className="favicon-box favicon-box--s"><img src="/logo.svg" alt="Favicon 3px margin" /></div>
							</div>
							<div className="favcap">5px
								<div className="favicon-box favicon-box--m"><img src="/logo.svg" alt="Favicon 5px margin" /></div>
							</div>
							<div className="favcap">7px
								<div className="favicon-box favicon-box--l"><img src="/logo.svg" alt="Favicon 7px margin" /></div>
							</div>
						</div>
					</div>
				</section>

				<section id="graphics" className="section" aria-label="Graphics and Icons">
					<div className="container">
						<h2>Graphics &amp; Icons</h2>
						<p className="caption">This will be the inspiration style when drawing creatures for each zone.</p>
						<div className="link-cards">
							<a className="link-card" href="https://ca.pinterest.com/pin/13370130138930594/" target="_blank" rel="noreferrer">
								<div className="link-card__media">
									{/* Direct preview image */}
									<img src="https://i.pinimg.com/736x/63/60/7b/63607b933a9bd6dc12fe8940c346135f.jpg" alt="Anglerfish inspiration" loading="lazy" />
								</div>
							</a>
							<a className="link-card" href="https://ca.pinterest.com/pin/3025924741423160/" target="_blank" rel="noreferrer">
								<div className="link-card__media">
									<img src="https://i.pinimg.com/1200x/15/f5/97/15f5978895b3026dbd8f594634d5369e.jpg" alt="Crab illustration inspiration" loading="lazy" />
								</div>
							</a>
						</div>
						<p className="caption">Sources: Pinterest references for anglerfish and crab styles.</p>
						
						<h3 style={{marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)'}}>Concept Art</h3>
						<p className="caption">Some of my past work that I may grab inspiration from for this project.</p>
						<div className="link-cards">
							<div className="link-card">
								<div className="link-card__media">
									<img 
										src="/concept_art/inspo01.png" 
										alt="Concept art - past work 1" 
										loading="lazy"
									/>
								</div>
								<p className="caption link-card__caption">Note: The colors are my work, the actual drawing isn't. Inspiration for colors.</p>
							</div>
							<div className="link-card">
								<div className="link-card__media">
									<img 
										src="/concept_art/inspo02.png" 
										alt="Concept art - past work 2" 
										loading="lazy"
									/>
								</div>
							</div>
						</div>
						<div style={{display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-5)', justifyContent: 'center', alignItems: 'center'}}>
							<img 
								src="/concept_art/conceptar.svg" 
								alt="Concept art" 
								loading="lazy"
								style={{maxWidth: '100%', height: 'auto'}}
							/>
						</div>
					</div>
				</section>

				<section id="components" className="section" aria-label="Components">
					<div className="container">
						<h2>Components</h2>
						<p className="caption">Sample UI elements built to match the styleguide (subject to change depending on how much text is incorporated into the page). Taken from the content inventory for “Midnight”, “Abyss”, and “Trenches”.</p>
						<div className="comp-actions">
							<a className="btn btn--secondary" href="https://docs.google.com/spreadsheets/d/1px0RplAUhfBSmWgJ1ge6WBp1uBgRLSjt/edit?gid=345914785#gid=345914785" target="_blank" rel="noreferrer">Content Inventory</a>
						</div>

						<div className="components-grid">
							<div className="comp-card">
								<div className="comp-title">Buttons</div>
								<div className="comp-row">
									<button className="btn btn--midnight">Midnight</button>
									<button className="btn btn--abyss">The Abyss</button>
									<button className="btn btn--trenches">The Trenches</button>
								</div>
								<p className="caption">Hover: subtle lift + glow; Focus: accent outline; Active: slight press.</p>
							</div>

							<div className="comp-card">
								<div className="comp-title">Sidebar (Preview)</div>
								<div className="sidebar-preview">
									<a href="#midnight">Midnight</a>
									<a href="#abyss">The Abyss</a>
									<a href="#trenches">The Trenches</a>
								</div>
								<p className="caption">Slides in on scroll; fixed left on wide screens.</p>
							</div>

							<div className="comp-card">
								<div className="comp-title">Zone Card</div>
								<div className="zone-card">
									<div className="zone-card__bar zone-card__bar--midnight" aria-hidden="true"></div>
									<div>
										<div className="zone-card__title">Midnight Zone</div>
										<div className="zone-card__meta">1000–4000 m • Bathypelagic</div>
										<p className="zone-card__desc">Where sunlight fails and bioluminescence thrives.</p>
									</div>
								</div>
								<div className="zone-card">
									<div className="zone-card__bar zone-card__bar--abyss" aria-hidden="true"></div>
									<div>
										<div className="zone-card__title">The Abyss</div>
										<div className="zone-card__meta">4000–6000 m • Abyssopelagic</div>
										<p className="zone-card__desc">Sparse light, pressure high, life adapts in remarkable ways.</p>
									</div>
								</div>
								<div className="zone-card">
									<div className="zone-card__bar zone-card__bar--trenches" aria-hidden="true"></div>
									<div>
										<div className="zone-card__title">The Trenches</div>
										<div className="zone-card__meta">6000 m+ • Hadalpelagic</div>
										<p className="zone-card__desc">Extreme depth; the frontier of deep‑sea exploration.</p>
									</div>
								</div>
							</div>

							<div className="comp-card">
								<div className="comp-title">Hotspot Pin + Tooltip</div>
								<div className="hotspot-demo">
									<button className="hotspot" aria-describedby="tip-1"></button>
									<div className="tooltip" role="tooltip" id="tip-1">Bioluminescent lure attracts prey.</div>
								</div>
								<p className="caption">Pins pulse; tooltip appears on hover/focus.</p>
							</div>
						</div>
					</div>
				</section>

				<section id="layout-mockup" className="section" aria-label="Layout Mockup">
					<div className="container">
						<h2>Layout Mockup</h2>
						<p className="caption">Interactive prototype showcasing the main screen layouts and user interface design.</p>
						<div style={{marginTop: 'var(--space-4)'}}>
							<a 
								href="https://www.figma.com/proto/5ad5czF4I44WMwM1egnVvn/CP-03_Storyboard_EstebanCruzDominguez?node-id=3-92&p=f&m=draw&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A92&show-proto-sidebar=1&t=Q8c3yh8wdn8hVkIZ-1" 
								target="_blank" 
								rel="noreferrer"
								className="btn btn--primary"
							>
								View Figma Prototype
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer id="footer" className="footer">
				<div className="container footer__inner">
					<p>Abyss Beings — Esteban Cruz Dominguez</p>
				</div>
			</footer>
		</>
	);
}


