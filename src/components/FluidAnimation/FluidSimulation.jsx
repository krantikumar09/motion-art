import { useEffect, useState } from "react";
import "./fluid.css";

const FluidSimulation = () => {
  const [promoVisible, setPromoVisible] = useState(true);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/public/dat.gui.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://www.google-analytics.com/analytics.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "/public/script.js";
    script3.async = true;
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  const closePromo = () => {
    setPromoVisible(false);
  };

  return (
    <div>
      <canvas></canvas>
      {promoVisible && (
        <div className="promo">
          <div className="promo-middle">
            <div className="promo-content">
              <div className="promo-header">
                <span className="promo-close" onClick={closePromo}>
                  &times;
                </span>
              </div>
              <div className="promo-body">
                <p>Try Fluid Simulation app!</p>
                <div className="links-container">
                  <a
                    className="link"
                    id="apple_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    <img
                      className="link-img"
                      alt="Download on the App Store"
                      src="app_badge.png"
                    />
                  </a>
                  <a
                    className="link"
                    id="google_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    <img
                      className="link-img"
                      alt="Get it on Google Play"
                      src="gp_badge.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FluidSimulation;
