import Head from 'next/head'

import theme from "../styles/themes/theme-testimonials-grid-section-main.js";
import styles from '../styles/Testimonials-grid-section-main.module.css'

import data from '../src/data/testimonials-grid-section-main.js'

import Card from '../src/components/Card'
import FootnoteAttribution from '../src/components/FootnoteAttribution'

export default function Home() {
  return (
    <div className="container">
      <div className="testimonials-grid-section-main">
        {data.map((item, index) => (
          <Card
            key={index}
            index={index}
            name={item.name}
            subtitle={item.subtitle}
            imageUrl={item.image_url}
            pullQuote={item.pull_quote}
            fullQuote={item.full_quote}
          />
        ))}
      </div>
      <FootnoteAttribution />
      <style global jsx>{`
        .testimonials-grid-section-main {
          display: grid;
          grid-template-columns: auto auto auto auto;
          grid-template-rows: auto auto;
          gap: 32px 32px;
          grid-template-areas:
            "top-1 top-1 top-2 side-1"
            "bottom-1 bottom-2 bottom-2 side-1";
        }

        .card {
          padding: 24px;
          border-radius: 12px;
        }

        .card.card-0 {
          grid-area: top-1;
        }

        .card.card-1 {
          grid-area: top-2;
        }

        .card.card-2 {
          grid-area: bottom-1;
        }

        .card.card-3 {
          grid-area: bottom-2;
        }

        .card.card-4 {
          grid-area: side-1;
        }
      `}</style>
    </div>
  );
}
