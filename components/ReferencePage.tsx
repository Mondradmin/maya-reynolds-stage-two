import data from './reference-data.json';
import './ReferencePage.css';
import './reference-grid.css';
import './reference-fonts.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const original = 'https://www.conejovalleycounseling.com';
const asset = (name: string) => `${basePath}/images/${name}`;
type ReferenceSection = {
  id: string; classes: string; grid: string; padding: number; minHeight: number;
  backgroundColor: string; backgroundImage?: string | null;
  blocks: { id: string; classes: string; justify?: string; html?: string; imageName?: string; alt?: string; position?: string; hr: boolean; button?: { text: string; href: string } | null }[];
};
const sections = data.sections as ReferenceSection[];
const groups = [
  { title: 'Our Team', items: [['Jennifer Anderson', '/jennifer-anderson'], ['Candace Bletscher', '/candace-bletscher'], ['Heather Williams-Baumgart', '/heather-williams-baumgart'], ['Samantha Johnson', '/samantha-johnson'], ['Autumn Bodily', '/autumn-bodily'], ['Rosa Gomez', '/rosa-gomez'], ['Chad Flores', '/chad-flores']] },
  { title: 'Specialties', items: [['Dissociation', '/dissociative-identity-disorder-therapist-newbury-park'], ['Trauma', '/trauma-counseling-newbury-park'], ['Special Needs Parenting', '/counseling-special-needs-parents-newbury-park'], ['Couples', '/couples-therapy'], ['Children & Teens', '/children-and-teens'], ['Anxiety & Depression', '/anxiety-depression'], ['Adoption', '/adoption-therapy-ventura-county-ca']] },
  { title: 'Methods', items: [['EMDR', '/emdr-therapy-newbury-park'], ['Brainspotting', '/brainspotting'], ['Somatic Therapy', '/somatic-therapy']] },
];
function Navigation() {
  return <><a href={`${original}/therapists-newbury-park`}>About</a>{groups.map(group => <details className="ref-folder" key={group.title}><summary>{group.title}</summary><div>{group.items.map(([label, path]) => <a key={path} href={`${original}${path}`}>{label}</a>)}</div></details>)}<a href={`${original}/faqs`}>FAQs</a></>;
}
function Sections({ footer = false }: { footer?: boolean }) {
  return sections.slice(footer ? 9 : 0, footer ? undefined : 9).map((section, index) => <section
    key={section.id}
    data-section-id={section.id}
    className={`ref-section ${section.classes}${!footer && index === 0 ? ' ref-hero' : ''}`}
    style={{ backgroundColor: section.backgroundColor, minHeight: section.minHeight ? `${section.minHeight}vh` : undefined }}
  >
    {section.backgroundImage && <img className="ref-background" src={asset(section.backgroundImage)} alt="" />}
    <div className="ref-content-wrapper" style={{ paddingBlock: `${section.padding}vmax` }}><div className={section.grid}>
      {section.blocks.map(block => <div className={block.classes} key={block.id}>
        <div className={`sqs-block ${block.imageName ? 'ref-image-block' : ''}`} id={block.id} style={{ justifyContent: block.justify }}>
          {block.html && <div className="sqs-html-content" dangerouslySetInnerHTML={{ __html: block.html }} />}
          {block.imageName && <img src={asset(block.imageName)} alt={block.alt || ''} style={{ objectPosition: block.position, objectFit: block.imageName.includes('.png') ? 'contain' : 'cover' }} />}
          {block.hr && <hr />}
          {block.button && <div className="ref-button-container"><a className="ref-text-button" href={block.button.href}>{block.button.text.trim()}</a></div>}
        </div>
      </div>)}
    </div></div>
  </section>);
}
export default function ReferencePage() {
  return <div className="reference-page">
    <a className="skip" href="#reference-main">Skip to content</a>
    <header className="ref-header flex items-center justify-between">
      <a className="ref-logo" href={`${basePath}/clone/`}><img src={asset('reference-0.png')} alt="Conejo Valley Family Counseling" width="1500" height="438" /></a>
      <nav className="ref-nav flex items-center" aria-label="Reference navigation"><Navigation /><a className="ref-contact" href={`${original}/contact`}>Contact</a></nav>
      <details className="ref-mobile-menu"><summary aria-label="Open navigation"><span /><span /></summary><nav aria-label="Mobile reference navigation"><Navigation /><a href={`${original}/contact`}>Contact</a></nav></details>
    </header>
    <main id="reference-main"><Sections /></main>
    <footer><Sections footer /></footer>
  </div>;
}
