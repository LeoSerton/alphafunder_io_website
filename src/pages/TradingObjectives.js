import React, { useState, useEffect, useRef } from 'react';
import '../../src/index.css';

const TradingObjectivesSection = () => {
  const [selectedBalance, setSelectedBalance] = useState('R5,000');
  const [selectedChallenge, setSelectedChallenge] = useState('1 Step');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
  
    const elementsToAnimate = document.querySelectorAll('.objectives-title, .button-container, .balance-buttons-container, .div-table-container, .buy-challenge-button');
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  
    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0]; // Remove decimal part
  };

  const getRefundableFee = () => {
    const refundableFees = {
      '1 Step': {
        'R5,000': 'R219.99',
        'R7,500': 'R309.99',
        'R12,500': 'R449.99',
        'R20,000': 'R649.99',
        'R50,000': 'R1,320',
        'R100,000': 'R2,200',
        'R250,000': 'R3,020',
        'R500,000': 'R3,850',
        'R1,000,000': 'R6,500',
        'R2,000,000': 'R11,000',
      },
      '2 Step': {
        'R5,000': 'R199.99',
        'R7,500': 'R279.99',
        'R12,500': 'R399.99',
        'R20,000': 'R599.99',
        'R50,000': 'R1,200',
        'R100,000': 'R2,000',
        'R250,000': 'R2,800',
        'R500,000': 'R3,500',
        'R1,000,000': 'R6,000',
        'R2,000,000': 'R10,000',
      },
    };

    return refundableFees[selectedChallenge][selectedBalance];
  };

  const getTableData = () => {
    const data = {
      '1 Step': {
        'Verification Step': [
          ['Profit Target', '8%'],
          ['Daily Drawdown', '4%'],
          ['Overall Drawdown', '6%'],
          ['Minimum Trading Days', '-'],
          ['Maximum Leverage', '1:100'],
          ['Maximum Daily Profit', '4%'],
          ['Refundable Fee', getRefundableFee()],
        ],
        'Funded Account': [
          ['Daily Drawdown', '4%'],
          ['Overall Drawdown', '6%'],
          ['Maximum Daily Profit', '3%'],
          ['Minimum Trading Days', '10 Days'],
          ['Profit Cap', '10%'],
          ['Withdrawal Period', '14 Days'],
          ['Maximum Leverage', '1:100'],
          ['Initial Profit Split', '70%'],
        ],
      },
      '2 Step': {
        'Evaluation Step': [
          ['Profit Target', '8%'],
          ['Daily Drawdown', '4%'],
          ['Overall Drawdown', '8%'],
          ['Minimum Trading Days', '-'],
          ['Maximum Leverage', '1:100'],
          ['Refundable Fee', getRefundableFee()],
        ],
        'Verification Step': [
          ['Profit Target', '5%'],
          ['Daily Drawdown', '4%'],
          ['Overall Drawdown', '8%'],
          ['Minimum Trading Days', '-'],
          ['Maximum Leverage', '1:100'],
        ],
        'Funded Account': [
          ['Daily Drawdown', '4%'],
          ['Overall Drawdown', '8%'],
          ['Maximum Daily Profit', '5%'],
          ['Minimum Trading Days', '5 Days'],
          ['Profit Cap', '10%'],
          ['Withdrawal Period', '14 Days'],
          ['Maximum Leverage', '1:100'],
          ['Initial Profit Split', '85%'],
        ],
      },
    };

    return data[selectedChallenge];
  };

  const renderTableRows = () => {
    const tableData = getTableData();
    const balance = parseInt(selectedBalance.replace(/R|,/g, ''), 10);

    const criteriaNames = [
      'Profit Target',
      'Daily Drawdown',
      'Overall Drawdown',
      'Maximum Daily Profit',
      'Minimum Trading Days',
      'Maximum Leverage',
      'Profit Cap',
      'Withdrawal Period',
      'Initial Profit Split',
      'Refundable Fee', // Add Refundable Fee to the criteria names
    ];

    const noCalculationCriteria = [
      'Minimum Trading Days',
      'Maximum Leverage',
      'Withdrawal Period',
      'Initial Profit Split',
      'Refundable Fee', // Add Refundable Fee to the no calculation criteria
    ];

    return criteriaNames.map((criteriaName) => {
      const row = [
        <div key={criteriaName} className="div-table-cell">
          {criteriaName.replace(/([A-Z])/g, ' $1')}
        </div>,
      ];
      Object.keys(tableData).forEach((phase) => {
        const criteria = tableData[phase].find((c) => c[0] === criteriaName);
        if (criteria) {
          let value = criteria[1];
          if (!noCalculationCriteria.includes(criteriaName) && !isNaN(parseFloat(value))) {
            const amount = balance * parseFloat(value) / 100;
            value = `R${formatAmount(amount)} (${criteria[1]})`;
          }
          row.push(
            <div key={phase} className="div-table-cell">
              {value}
            </div>
          );
        } else {
          row.push(
            <div key={phase} className="div-table-cell">
              -
            </div>
          );
        }
      });
      return (
        <div key={criteriaName} className="div-table-row">
          {row}
        </div>
      );
    });
  };

  return (
    <section className="trading-objectives-section" ref={sectionRef}>
      <div className="trading-objectives-card">
        <h2 className="objectives-title">Trading Objectives</h2>
        <div className="button-container">
          <button
            className={`challenge-button ${selectedChallenge === '1 Step' ? 'selected' : ''}`}
            onClick={() => setSelectedChallenge('1 Step')}
          >
            1-Step Alpha Challenge
          </button>
          <button
            className={`challenge-button ${selectedChallenge === '2 Step' ? 'selected' : ''}`}
            onClick={() => setSelectedChallenge('2 Step')}
          >
            2-Step Alpha Challenge
          </button>
        </div>
        <div className="balance-buttons-container">
            <div className="balance-buttons-row">
              {['R5,000', 'R7,500', 'R12,500', 'R20,000', 'R50,000'].map((balance) => (
                <button
                  key={balance}
                  className={`balance-button ${selectedBalance === balance ? 'selected' : ''}`}
                  onClick={() => setSelectedBalance(balance)}
                >
                  {balance}
                </button>
              ))}
            </div>
            <div className="balance-buttons-row">
              {['R100,000', 'R250,000', 'R500,000', 'R1,000,000', 'R2,000,000'].map((balance) => (
                <button
                  key={balance}
                  className={`balance-button ${selectedBalance === balance ? 'selected' : ''}`}
                  onClick={() => setSelectedBalance(balance)}
                >
                  {balance}
                </button>
              ))}
            </div>
        </div>
        <div className="div-table-container">
          <div className="div-table-row">
            <div className="div-table-header">{selectedBalance}</div>
            {selectedChallenge === '2 Step' && <div className="div-table-header">Evaluation Step</div>}
            <div className="div-table-header">Verification Step</div>
            <div className="div-table-header">Alpha Funded Account</div>
          </div>
          {renderTableRows()}
        </div>
        <div className="buy-challenge-button animate">
        <button onClick={() => window.open('https://client.alphafunder.io/sign-in', '_blank', 'noopener,noreferrer')}>Start Challenge Now!</button>
        </div>
      </div>
    </section>
  );
};

export default TradingObjectivesSection;