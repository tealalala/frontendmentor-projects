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
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap");

        .testimonials-grid-section-main {
          display: grid;
          // grid-template-columns: auto auto auto auto;
          grid-template-columns: 0.8fr 1fr 0.8fr 0.8fr;
          grid-template-rows: auto auto;
          gap: 24px 24px;
          grid-template-areas:
            "top-1 top-1 top-2 side-1"
            "bottom-1 bottom-2 bottom-2 side-1";
          padding: 32px 0px;
          font-family: ${theme.body.fontFamily};
          font-size: ${theme.body.fontSize};
          font-weight: ${theme.body.fontWeightNormal};
        }

        .avatar {
          display: flex;
          padding-bottom: 16px;
        }

        .avatar .image {
          padding-right: 16px;
        }

        .avatar img {
          border-radius: 50%;
        }

        .avatar p {
          margin-bottom: 0px !important;
        }

        .card {
          padding: 24px;
          border-radius: 12px;
        }

        .card-0 .name,
        .card-1 .name,
        .card-3 .name,
        .card-0 .pull-quote,
        .card-1 .pull-quote,
        .card-3 .pull-quote {
          color: ${theme.colors.white};
        }

        .card-0 .subtitle,
        .card-1 .subtitle,
        .card-3 .subtitle {
          color: ${theme.colors.lightGray};
          opacity: 0.5;
        }

        .card-0 .full-quote,
        .card-1 .full-quote,
        .card-3 .full-quote {
          color: ${theme.colors.white};
          opacity: 0.7;
        }

        .card-2 .name,
        .card-4 .name,
        .card-2 .pull-quote,
        .card-4 .pull-quote {
          color: ${theme.colors.veryDarkBlackishBlue};
        }

        .card-2 .subtitle,
        .card-4 .subtitle {
          color: ${theme.colors.veryDarkGrayishBlue};
          opacity: 0.5;
        }

        .card-2 .full-quote,
        .card-4 .full-quote {
          color: ${theme.colors.veryDarkGrayishBlue};
          opacity: 0.7;
        }

        .card-0 .pull-quote,
        .card-1 .pull-quote,
        .card-2 .pull-quote,
        .card-3 .pull-quote,
        .card-4 .pull-quote {
          padding-bottom: 16px;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
        }

        .card.card-0 {
          grid-area: top-1;
          background-color: ${theme.colors.moderateViolet};
        }

        .card.card-1 {
          grid-area: top-2;
          background-color: ${theme.colors.veryDarkGrayishBlue};
        }

        .card.card-2 {
          grid-area: bottom-1;
          background-color: ${theme.colors.white};
        }

        .card.card-3 {
          grid-area: bottom-2;
          background-color: ${theme.colors.veryDarkBlackishBlue};
        }

        .card.card-4 {
          grid-area: side-1;
          background-color: ${theme.colors.white};
        }
      `}</style>
    </div>
  );
}
