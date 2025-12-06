import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import "../css/Reviews.css";

/* ------------------ ALL REVIEW DATA ------------------ */
const reviews = [
  { avatar: 'L', name: 'Lalson', location: 'Saudi Arabia', stars: 5, date: '31-October-25', product: 'Paper Rewinding Machine', text: 'good', tags: ['Response', 'Quality', 'Delivery'] },
  { avatar: 'P', name: 'Poornitha Chinnu Tipparna', location: 'Hyderabad, Telangana', stars: 5, date: '11-October-25', product: 'Label Rewinder', text: '', tags: ['Response'] },
  { avatar: 'G', name: 'G. Ramesh Kumar', location: 'Coimbatore, Tamil Nadu', stars: 5, date: '26-September-25', product: 'Plotter Paper Rolls Rewinding Machine', text: '', tags: [] },
  { avatar: 'V', name: 'Vijayalakshmi', location: 'Pavagada, Karnataka', stars: 5, date: '06-January-25', product: 'Paper Sheet Cutting Machine', text: 'Good', tags: ['Response', 'Quality', 'Delivery'] },
  { avatar: 'U', name: 'Udhaya Kumar', location: 'Sayapuram, Tamil Nadu', stars: 5, date: '06-September-25', product: 'Paper Making Machines', text: '', tags: [] },
  { avatar: 'N', name: 'N.Meenakshi Nathan', location: 'Tirunelveli, Tamil Nadu', stars: 5, date: '05-September-25', product: 'Tape Cutting Machine', text: '', tags: [] },
  { avatar: 'P', name: 'POONGODI', location: 'TNPL Pugalur, Tamil Nadu', stars: 5, date: '28-June-25', product: 'Paper Roll Cutting Machine', text: '', tags: [] },
  { avatar: 'R', name: 'Ramesh', location: 'Sri Lanka', stars: 5, date: '18-February-25', product: 'Computer Stationery Printing Machine', text: '', tags: [] },
  { avatar: 'J', name: 'Jagadisha', location: 'Mysore, Karnataka', stars: 5, date: '03-February-25', product: 'Paper Printing Machines', text: '', tags: [] },
  { avatar: 'P', name: 'PUTCHALA NAGESWARA RAO', location: 'Andhra Pradesh', stars: 5, date: '11-January-25', product: 'Paper Sheet Cutting Machine', text: '', tags: [] },
  { avatar: 'S', name: 'Som Shekhar', location: 'Bengaluru, Karnataka', stars: 5, date: '02-October-24', product: 'Paper Slitting Machines', text: '', tags: [] },
  { avatar: 'O', name: 'Oallabakash', location: 'Kadapa, Andhra Pradesh', stars: 5, date: '30-April-24', product: 'Tape Cutting Machine', text: '', tags: ['Response', 'Quality', 'Delivery'] },
  { avatar: 'S', name: 'Sujeetha', location: 'Salem, Tamil Nadu', stars: 5, date: '31-October-23', product: 'Paper Sheet Cutting Machine', text: '', tags: ['Response'] },
  { avatar: 'P', name: 'Prasanna Suresh', location: 'Chennai, Tamil Nadu', stars: 5, date: '08-March-23', product: 'Paper Sheeter', text: '', tags: ['Response', 'Quality'] },
  { avatar: 'S', name: 'Shobha Reddy', location: 'Bengaluru, Karnataka', stars: 5, date: '02-August-22', product: 'Slitting Rewinding Machine', text: '', tags: ['Response'] },
  { avatar: 'G', name: 'Guille Adou', location: 'Cote D Ivoire', stars: 5, date: '27-January-22', product: 'Slitting Rewinding Machine', text: 'thermal paper slitting machine', tags: [] },
  { avatar: 'J', name: 'Jumam', location: 'Kollam, Kerala', stars: 5, date: '13-September-21', product: 'Slitting Rewinding Machine', text: '', tags: ['Response', 'Quality', 'Delivery'] },
  { avatar: 'D', name: 'Durai', location: 'Tamil Nadu', stars: 5, date: '28-June-20', product: 'Paper Printing Machines', text: '', tags: ['Response'] },
  { avatar: 'S', name: 'Sekar', location: 'Pune, Maharashtra', stars: 5, date: '28-September-24', product: 'Paper Making Machines', text: '', tags: [] },
  { avatar: 'K', name: 'Kumar M.', location: 'Coimbatore', stars: 5, date: '23-September-24', product: 'BOPP Tape Slitting Machine', text: '', tags: [] },
];

/* ------------------ UTILITY FOR MULTI-ROWS ------------------ */
function chunkArray(arr, chunkCount) {
  const perChunk = Math.ceil(arr.length / chunkCount);
  const chunks = [];
  for (let i = 0; i < chunkCount; i++) {
    chunks.push(arr.slice(i * perChunk, (i + 1) * perChunk));
  }
  return chunks;
}

function StarRating({ stars }) {
  return (
    <span className="review-stars">
      {"★".repeat(stars)}
      {"☆".repeat(5 - stars)}
    </span>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */
export default function Reviews() {
  const rows = 3; // number of marquee rows
  const chunked = chunkArray(reviews, rows);

  return (
    <div className="reviews-page">

      <h1 className="reviews-title">What People Say About Us</h1>
      <p className="reviews-subtitle">Discover how our machines helped customers succeed across the world.</p>

      {/* Fade edges */}
      <div className="fade-edge fade-left"></div>
      <div className="fade-edge fade-right"></div>

      {chunked.map((row, idx) => (
        <Marquee
          key={idx}
          pauseOnHover={true}
          speed={25 + idx * 10}
          gradient={false}
          direction={idx % 2 === 0 ? "left" : "right"}
          className="reviews-marquee-row"
        >
          <div className="reviews-marquee">
            {row.map((review, i) => (
              <motion.div
                key={i}
                className="marquee-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                viewport={{ once: true }}
              >
                <div className="review-header">
                  <div className="review-avatar">{review.avatar}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-location">{review.location}</div>
                  </div>
                  <div className="review-date">{review.date}</div>
                </div>

                <StarRating stars={review.stars} />

                <div className="review-product">{review.product}</div>

                {review.text && <div className="review-text">{review.text}</div>}

                {review.tags?.length > 0 && (
                  <div className="review-tags">
                    {review.tags.map((tag, j) => {
                      let tagClass = "review-tag";
                      if (tag.toLowerCase() === "response") tagClass += " response";
                      else if (tag.toLowerCase() === "quality") tagClass += " quality";
                      else if (tag.toLowerCase() === "delivery") tagClass += " delivery";
                      return (
                        <span className={tagClass} key={j}>
                          {tag} <span className="review-thumb">👍</span>
                        </span>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Marquee>
      ))}
    </div>
  );
}
