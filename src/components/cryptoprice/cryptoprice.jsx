import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cryptoticker.css";

const CryptoTicker = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd"
        );
        setPrices(response.data);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchPrices();
    const intervalId = setInterval(fetchPrices, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container crypto-ticker-container">
      <div className="ticker-item">
        <span> Bitcoin:</span> {prices.bitcoin && prices.bitcoin.usd}
      </div>
      <div className="ticker-item">
        Ethereum: {prices.ethereum && prices.ethereum.usd}
      </div>
      <div className="ticker-item">
        Ripple: {prices.ripple && prices.ripple.usd}
      </div>
    </div>
  );
};

export default CryptoTicker;
