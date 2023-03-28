import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import logo from "./logo.svg";
import "./App.css";
import TeacherLicenseForm from "./components/TeacherLicenseForm";
import SearchTeacherLicense from "./components/SearchTeacherLicense";
import Navbar from "./components/Navbar";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      let chainId = await ethereum.request({ method: "eth_chainId" });
      const goerliChainId = "0x5";

      if (chainId !== goerliChainId) {
        return;
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {}
  };

  return (
    <div>
      {currentAccount === "" ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : correctNetwork ? (
        <>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<SearchTeacherLicense />} />
              <Route path="/registration" element={<TeacherLicenseForm />} />
            </Routes>
          </Container>
        </>
      ) : (
        <div>
          <div>----------------------------------------</div>
          <div>Please connect to the Goerli Testnet</div>
          <div>and reload the page</div>
          <div>----------------------------------------</div>
        </div>
      )}
    </div>
  );
}

export default App;
