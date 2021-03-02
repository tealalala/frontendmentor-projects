import Head from 'next/head'

import styles from '../styles/Testimonials-grid-section-main.module.css'
import data from '../src/data/testimonials-grid-section-main.js'

import Card from '../src/components/Card'
import FootnoteAttribution from '../src/components/FootnoteAttribution'

export default function Home() {
  return (
    <div className="testimonials-grid-section-main">
      {data.map((item, index) => 
        <Card 
          name={item.name}
          subtitle={item.subtitle}
          imageUrl={item.image_url}
          pullQuote={item.pull_quote}
          fullQuote={item.full_quote}
        />
      )}
      <FootnoteAttribution />
    </div>
  );
}
