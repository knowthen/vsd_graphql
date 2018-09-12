import React from 'react';
import { Link } from 'react-router-dom';
const Nav = props => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <svg width="60px" height="28px" viewBox="0 0 220 160" version="1.1">
              <g
                id="Artboard"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="noun_kanban_376079_000000"
                  transform="translate(15.000000, 6.000000)"
                  fill="#000000"
                  fillRule="nonzero"
                >
                  <rect
                    id="Rectangle-path"
                    x="14"
                    y="15"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="14"
                    y="38"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="14"
                    y="63"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="60"
                    y="15"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="60"
                    y="38"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="60"
                    y="63"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="107"
                    y="15"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="153"
                    y="15"
                    width="25"
                    height="16"
                  />
                  <rect
                    id="Rectangle-path"
                    x="107"
                    y="38"
                    width="25"
                    height="16"
                  />
                  <path
                    d="M176.533129,0 L14.4668708,0 C6.48957413,0 0,6.48947411 0,14.46814 L0,133.53186 C0,141.512018 6.48957413,148 14.4668708,148 L176.531637,148 C184.511918,148 191,141.510526 191,133.53186 L191,14.46814 C191.001492,6.48947411 184.511918,0 176.533129,0 Z M97.3092913,7.23407001 L139.63552,7.23407001 L139.63552,140.76593 L97.3092913,140.76593 L97.3092913,7.23407001 Z M93.6936928,140.76593 L51.3659715,140.76593 L51.3659715,7.23407001 L93.6922006,7.23407001 L93.6922006,140.76593 L93.6936928,140.76593 Z M7.23418151,133.53186 L7.23418151,14.46814 C7.23418151,10.478061 10.4782225,7.23407001 14.468363,7.23407001 L47.750373,7.23407001 L47.750373,140.76593 L14.4668708,140.76593 C10.4782225,140.76593 7.23418151,137.518955 7.23418151,133.53186 Z M183.76731,133.53186 C183.76731,137.520447 180.520285,140.767422 176.531637,140.767422 L143.252611,140.767422 L143.252611,7.23407001 L176.533129,7.23407001 C180.521777,7.23407001 183.768803,10.478061 183.768803,14.46814 L183.768803,133.53186 L183.76731,133.53186 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <div
            className="navbar-burger burger"
            data-target="navMenuColorlight-example"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenuColorlight-example" className="navbar-menu">
          <div className="navbar-start" />

          <div className="navbar-end" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
