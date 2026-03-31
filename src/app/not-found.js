"use client";
import Link from "next/link";
import "./globals.css"; // your global CSS already contains the .not-found styles

export default function CatchAllNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__text">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" className="not-found__btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}