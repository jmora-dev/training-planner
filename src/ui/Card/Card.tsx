import React from "react";
import cardStyle from "./card.module.css";

function Card({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return <div className={cardStyle.card}>{children}</div>;
}

function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className={cardStyle.card__image} />;
}
Card.Image = Image;

function Content({ children }: { children: React.ReactNode }) {
  return <div className={cardStyle.card__content}>{children}</div>;
}
Card.Content = Content;

function Title({ text }: { text: string }) {
  return <h3 className={cardStyle.card__title}>{text}</h3>;
}
Card.Title = Title;

function Description({ text }: { text: string }) {
  return <p className={cardStyle.card__description}>{text}</p>;
}
Card.Description = Description;

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className={cardStyle["card__tags-container"]}>
      {tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
    </div>
  );
}
Card.Tags = Tags;

export default Card;
