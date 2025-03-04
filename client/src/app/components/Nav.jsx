"use client";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";

const Nav = () => {
  const router = useTransitionRouter();

  const slideinout = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transorm: "translateY(0)",
        },
        {
          opacity: 0.2,
          transorm: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87,0,0.13,1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0%,100%,100% 100%,100% 100%,0% 100%",
        },
        {
          clipPath: "polygon(0%,100%,100% 100%,100% 0%,0% 0%",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87,0,0.13,1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };
  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/", { ontransitionReady: slideinout });
            }}
            href="/"
          >
            Index
          </a>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/projects", { ontransitionReady: slideinout });
            }}
            href="/projects"
          >
            Projects
          </a>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            router.push("/info", { ontransitionReady: slideinout });
          }}
          href="/info"
        >
          Info
        </a>
      </div>
    </nav>
  );
};

export default Nav;
