import React, { useState } from 'react';
import '../../src/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BecomeFundedSection } from './HomePage'; // Import the section from HomePage
import JoinDiscordSection from '../components/JoinDiscordSection'; 
import { useNavigate } from 'react-router-dom';
import TradingObjectivesSection from './TradingObjectives';
import Fuse from 'fuse.js'; 

const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={toggleActive}>
      <div className="faq-question">
        {question}
        <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} className="faq-icon" />
      </div>
      <div className={`faq-answer ${isActive ? 'show' : ''}`} onClick={stopPropagation}>
        {answer}
      </div>
    </div>
  );
};

const SubDropdown = ({ subDropdown }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sub-dropdown ${isActive ? 'active' : ''}`}>
      <div className="sub-dropdown-title" onClick={toggleActive}>
        {subDropdown.subTitle}
        <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} className="faq-icon" />
      </div>
      <div className={`sub-dropdown-content ${isActive ? 'show' : ''}`}>
        {subDropdown.faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = (e) => {
    e.stopPropagation(); // Prevent the outer dropdown from toggling
    setShowMoreInfo(!showMoreInfo);
  };

  const navigate = useNavigate();

  const handleScrollClick = (sectionId) => {
    navigate('/', { state: { sectionId } });
  };

  const faqData = [
    {
      title: 'New to Alpha Funder',
      faqs: [
        {
          question: 'How do I start trading with Alpha Funder?', 
          answer: (
            <p>
              To start, simply sign up <a href="https://client.alphafunder.io/sign-in"><strong>(here)</strong></a> and configure your account. 
              Then, you can begin proving your trading skills to become an Alpha Trader!
            </p>
          )
        },
        {
          question: 'What is the difference between a 1-step Alpha Challenge, 2-step Alpha Challenge, and an Alpha Account?',
          answer: (
            <div>
              <h2>Alpha Account:</h2>
              <p>
                A trading account with simulated capital, where you are entitled to a % of the real-world fiat value of the simulated profits you make. 
                In order to trade an Alpha Funded Account, you either need to pass our 1-step or 2-step Alpha Challenge.
              </p>
              
              <h2>1-step Alpha Challenge:</h2>
              <ul>
                <li>
                  This challenge type is designed for experienced traders who have a strong understanding of the markets and are confident in their ability to trade profitably while adhering to specific trading rules.
                  This challenge suits traders who possess a solid trading strategy, exhibit strong risk management skills, and prefer a faster route to funding.
                </li>
                <li>
                  Consists of one <strong>Verification Step</strong>, where you must meet 6 trading objectives <button onClick={toggleMoreInfo} className="link-button"><strong>(open table below)</strong></button> to trade an Alpha Funded Account.
                </li>
              </ul>
              
              <h2>2-step Alpha Challenge:</h2>
              <ul>
                <li>
                  This challenge type is designed for traders who prefer a more gradual verification process, focusing on both consistency and risk management over time.
                  This challenge is ideal for traders who may need more time to demonstrate their trading skills and want an additional layer of evaluation to refine their strategies.
                </li>
                <li>
                  Consists of an <strong>Evaluation Step</strong>, where you must meet 5 trading objectives <button onClick={toggleMoreInfo} className="link-button"><strong>(open table below)</strong></button> to reach the Verification Step.
                </li>
                <li>
                  <strong>Verification Step</strong>, where you must meet 5 trading objectives <button onClick={toggleMoreInfo} className="link-button"><strong>(open table below)</strong></button> to trade an Alpha Funded Account.
                </li>
              </ul>
              <img src="/images/stage_diagram.png" alt="Stages Diagram" />
              {showMoreInfo && (
                <div className="more-info-text">
                  <TradingObjectivesSection />
                </div>
              )}
            </div>
          )
        },
        { question: 'Can I use my external track records to receive an Alpha Account?', 
          answer: "No, you cannot receive our Alpha Funded Account based on external track records. Our Verification Process is designed to ascertain your trading skills internally." },
        { question: 'Is Alpha Funder a trustworthy company?', 
          answer: <p>
            Yes, Alpha Funder was founded by Jason Noah, a reputable Forex trader in Africa, with the mission of providing substantial capital to skilled African traders.  <br></br>
            <br></br>
            Jason began his mission of increasing African trader’s global footprint by opening Alpha Markets, which has proved to service African clients with the utmost attention to detail, bolstering Africa’s name in the trading world. <br></br>
            <br></br>
            Recognising that a lack of funding was a massive barrier to achieving his goals, Jason leveraged his extensive global network to secure funding from private equity firms. 
            This initiative led to the launch of a trading platform designed to empower Africans by providing access to substantial trading capital without bearing the financial risks alone.
          </p> },
        { question: 'What is Alpha Funder?', 
          answer: <p>
            Alpha Funder enables African clients to display and benefit from their trading capabilities with up to R4 million in funds. We offer two types of Challenge processes:<br></br>
            <br></br>
            <li><strong>1-step Alpha Challenge:</strong> For experienced traders with a proven track record.</li>
            <li><strong>2-step Alpha Challenge:</strong> For traders seeking a comprehensive assessment.</li><br></br>
            Successful candidates receive access to an Alpha Funded Account and can earn up to 90% of their profits.
          </p> },
        {
          question: 'How can I contact Alpha Funder?', 
          answer: (
            <p>
              <ul>
                <li><strong>WhatsApp:</strong> Contact us <a href="https://wa.me/message/3PJQVAE3PHSAK1"><strong>(here)</strong></a>.</li>
                <li><strong>24/7 Live Chat:</strong> Start a live chat at the bottom right of you screen.</li>
                <li><strong>Contact Form:</strong> Fill out the form <a href="/contact"><strong>(here)</strong></a>.</li>
                <li><strong>Email:</strong> Send us an email <a href="mailto:support@alphafunder.io"><strong>(here)</strong></a>.</li>
              </ul>
            </p>
          )
        },
        { question: "Where is Alpha Funder's office located?", 
          answer: (
            <div>
              <p>Our headquarters are in Pretoria, South Africa, at Spaces, Menlyn Maine.</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4915830877712!2d28.276056075664098!3d-25.787351577335755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560b8de9b8bc3%3A0xf1202e8b42f8b192!2s169%20Corobay%20Ave%2C%20Menlyn%2C%20Pretoria%2C%200181!5e0!3m2!1sen!2sza!4v1720013492604!5m2!1sen!2sza"
                width="800"
                height="700"
                style={{ border: 0, width: '100%', height: '100%', maxWidth: '1000px', maxHeight: '900px', borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          )},
        { question: 'Who can join Alpha Funder?', 
          answer: <p>
            Whether you are a skilled trader or looking to learn, you are exactly who we are looking for!
            Currently, we accept clients from South Africa, Nigeria, Namibia, Kenya, Ghana, Lesotho, Swaziland, Zimbabwe, Zambia, Algeria, Angola, Benin, Botswana, Burkina Faso, Cameroon, Comoros, Republic of the Congo, Democratic Republic of the Congo, Côte d'Ivoire, Egypt, Eswatini, Ethiopia, Gabon, Gambia, Madagascar, Morocco, Mozambique, Rwanda, Senegal, Seychelles, Sierra Leone, Tanzania, Togo, Tunisia, and Uganda.
            As our mission is to enable African traders to trade larger sums of capital, we plan on rapidly expanding to more countries across the African continent. Make sure to occasionally check the map below, highlighting our expansion progress over the coming months!<br></br>
            <br></br>
            <i>Clients must be over 18 years old and cannot be on sanction lists or have criminal records related to financial crime or terrorism. Learn more about our eligibility criteria <a href="https://docs.google.com/document/d/1sYCZtDlrCpXuXcn07P4aCM73W4hULVrWj8kAr0gbcjQ/edit" target="_blank" rel="noopener noreferrer"><strong>(here)</strong></a>.</i>
            <img src="/images/african_map.png" alt="Stages Diagram" />
          </p> },
        { question: 'Why should I join Alpha Funder?', 
          answer: <p>
            Trading with Alpha Funder addresses common challenges faced by African traders, such as small account sizes, growth limitations, and psychological pressures. We offer:<br></br>
            <br></br>
            <li>Access up to <strong>R4 million</strong> in simulated cash - letting you experience the profits of trading without the losses!</li>
            <li>Innovative Trading Applications and detailed feedback.</li>
            <li>Instilling you with professional risk management habits by adhering to our rules.</li>
            <li>Profit withdrawls anytime between 14 to 60 days.</li>
            <li>Potential account balance and profit share increases through our Scaling Plan <a href="https://docs.google.com/document/d/1M6-o2zAMJ-MJw22WVdDH9VRpva4pPYW-kzZd2MHy9fc/edit" target="_blank" rel="noopener noreferrer">here</a>.</li>
            <li>Refund of the initial fee with the first Profit Split</li><br></br>
            Join us to grow and succeed in the trading world, and make Africa’s presence felt in the global markets.
          </p> },
        { question: 'How do I become an Alpha Trader?', 
          answer: <p>
            To become an Alpha Trader, you need to pass either our 1-step or 2-step Challenge Process.
          </p> },
        {
          question: 'What is the 1-Step Alpha Challenge?',
          answer: (
            <div>
              <p>
                <h2>Step 1: Alpha Verification</h2><br></br>
                <li>You'll start with a demo account using simulated capital.</li>
                <li>Trade according to our Trading Objectives.</li>  {/*listed here [link]*/}
                <li>Enjoy excellent account conditions thanks to our partnership with DXTrade, offering very low commissions and spreads.</li>
                <li>After passing the Verification step, your trading will be reviewed.</li>
                <li>To finalise your Alpha Funded Account, submit your ID document (passport or national ID card) for identification. The contract will only be concluded once all identification procedures are completed according to Alpha Funder’s policies.</li><br></br>
              </p>
              <button onClick={toggleMoreInfo} className="more-info-button">
                {showMoreInfo ? 'Less info' : 'More info'}
              </button>
              {showMoreInfo && (
                <p className="more-info-text">
                  Note: Alpha Funder does not provide services to people from certain countries listed <a href="https://docs.google.com/document/d/1cwWsMykFfW8ugrlt_Uy_QwW8D-ardO_IyPZ5NQ3-Z3w/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a>, 
                  those on sanction lists, people with criminal records related to financial crimes or terrorism, anyone under 18 years old, company trusts, and anyone previously banned for breaking Alpha Funder's rules. 
                  If any of these issues are found after you've signed an agreement with Alpha Funder, we have the right to end the contract. We don’t grant an Alpha Funded Account based on any past track records.
                </p>
              )}
            </div>
          )
        },
        { question: 'What is the 2-Step Alpha Challenge?', 
          answer: <p>
            <h2>Step 1: Alpha Evaluation</h2><br></br>
            <br></br>
            <li>You'll start with a demo account using simulated capital.</li>
            <li>Trade according to our Trading Objectives.</li>  {/*listed here [link]*/}
            <li>Enjoy excellent account conditions thanks to our partnership with DXTrade, offering very low commissions and spreads.</li>
            <br></br>
            <h2>Step 2: Alpha Verification</h2><br></br>
            <li>Receive a second demo account with simulated capital to verify your performance and consistency one last time.</li>
            <li>The rules during this Verification step are easier. For more details, visit the Trading Objectives page here [link].</li>
            <li>After passing the Verification step, your trading will be reviewed.</li>
            <li>To finalise your live Alpha Account, submit your ID document (passport or national ID card) for identification. The contract will only be concluded once all identification procedures are completed according to Alpha Funder’s policies.</li>
            <button onClick={toggleMoreInfo} className="more-info-button">
                {showMoreInfo ? 'Less info' : 'More info'}
              </button>
              {showMoreInfo && (
                <p className="more-info-text">
                Note: Alpha Funder does not provide services to people from certain countries listed <a href="https://docs.google.com/document/d/1cwWsMykFfW8ugrlt_Uy_QwW8D-ardO_IyPZ5NQ3-Z3w/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a>, 
                those on sanction lists, people with criminal records related to financial crimes or terrorism, anyone under 18 years old, company trusts, and anyone previously banned for breaking Alpha Funder's rules. 
                If any of these issues are found after you've signed an agreement with Alpha Funder, we have the right to end the contract. We don’t grant an Alpha Funded Account based on any past track records.
              </p>
              )}
          </p> },
        { question: 'How long does it take to become an Alpha Trader?', 
          answer: <p>
            <h2>1-Step Challenge (Verification)</h2><br></br>
            <li><strong>Minimum Trading Days:</strong> Zero minimum trading days.</li>
            <li><strong>No Maximum Time Limit:</strong> There is no maximum time limit to complete our Verification Process – take as long as you need!</li>
            <li><strong>Trading Objectives:</strong> Meet all 5 Trading Objectives and your trades will be reviewed.</li>
            <li><strong>Live Account Activation:</strong> Start using your Alpha Funded Account after a minimum of just<strong> 10 trading days.</strong></li>
            <br></br>
            <h2>2-Step Challenge (Evaluation & Verification)</h2><br></br>
            <li><strong>Evaluation Step</strong></li>
            <strong>- Minimum Trading Days:</strong> Zero minimum trading days.<br></br>
            <strong>- No Maximum Time Limit:</strong> Take as much time as you need!<br></br>
            <strong>- Trading Objectives:</strong> Start using your 'live' Alpha Funded Account as soon as you pass your challenge and complete the KYC process, and once your trades have undergone review (1-2 business days). Theoretically, you could receive an Alpha Funded Account is as little as one business day.<br></br>
            <br></br>
            <li><strong>Verification Step</strong></li>
            <strong>- Minimum Trading Days:</strong> Zero minimum trading days.<br></br>
            <strong>- No Maximum Time Limit:</strong> Take as much time as you need!<br></br>
            <strong>- Trading Objectives:</strong> Meet all 4 Trading Objectives in the Verification step and your trades will be reviewed.<br></br>
            <strong>- Live Account Activation:</strong> Start using your 'live' Alpha Funded Account as soon as you pass your challenge and complete the KYC process, and once your trades have undergone review (1-2 business days). Theoretically, you could receive an Alpha Funded Account is as little as one business day.
          </p> 
          },
        { question: 'What happens after I pass my Alpha Challenge?', 
          answer: <p>
            After passing all the Trading Objectives in your Alpha Challenge, you will receive a notification in your Account area confirming your success. 
            You won't need to trade on that account anymore because your Trading Objectives are complete. We will automatically be notified and start evaluating your trading results.<br></br>
            <br></br>
            Within about 1-2 business days, we will send you your new account login details for ‘live’ trading.
          </p> },
        { question: 'What capital will I trade on an Alpha Account?', 
          answer: <p>
            You will trade with the same account balance that you used in your Alpha Challenge. For example, if you traded with R50,000 in the Alpha Challenge, you will have access to a R50,000 Alpha Account.
            <button onClick={toggleMoreInfo} className="more-info-button">
                {showMoreInfo ? 'Less info' : 'More info'}
              </button>
              {showMoreInfo && (
                <p className="more-info-text">
                  To clarify, all accounts we provide are demo accounts with virtual funds. 
                  After becoming an Alpha Trader, you will receive login credentials for a demo account. Clients can earn up to 70% profits on a 1-step Alpha Funded Account and 85% of the profits generated on a 2-step Alpha Funded Account.
                </p>
              )}
          </p> },
        { question: 'Can I trade more capital than what I have in my current Alpha Account?', 
          answer: <p>
            If you want to trade with a higher account balance, you can apply for another Alpha Challenge. 
            Each Alpha Challenge must be traded from the beginning, even if you have passed one before. We allow a maximum capital allocation of R4 million on Alpha Funded Accounts per trader or strategy. 
            For instance, this can be split into two Alpha Funded accounts worth R2 million each or 8 accounts worth R500k each.
          </p> },
      ],
    },
    {
      title: 'Challenge Types & Rules',
      subDropdowns: [
        {
          subTitle: '1-Step Alpha Challenge',
          faqs: [
            { 
              question: 'Who is the 1-Step Challenge designed for?', 
              answer: (
                <p>
                  The 1-Step Challenge is designed for experienced traders who have a strong understanding of the markets and are confident in their ability to trade profitably while adhering to specific trading rules. This challenge suits traders who possess a solid trading strategy, exhibit strong risk management skills, and prefer a faster route to funding.
                </p>
              ) 
            },
            { 
              question: 'How does the 1-Step Challenge differ from the 2-Step Challenge?', 
              answer: (
                <p>
                  The 2-Step Challenge is designed for traders who prefer a more gradual verification process, focusing on both consistency and risk management over time. This challenge is ideal for traders who may need more time to demonstrate their trading skills and want an additional layer of evaluation to refine their strategies.
                </p>
              ) 
            },
            { 
              question: 'What is the Verification step?', 
              answer: (
                <p>
                  The Verification step is the sole step in the 1-Step Alpha Challenge. It tests your trading IQ, risk management abilities, and profit-generating capabilities. We ensure you can trade your system or strategy profitably over time while following the rules.
                </p>
              ) 
            },
            { 
              question: 'What is the profit target?', 
              answer: (
                <p>
                  <ul>
                    <li> The profit target is <strong>8%</strong></li>
                  </ul>
                </p>
              ) 
            },
            { 
              question: 'What are the drawdown limits?', 
              answer: (
                <ul>
                  <li>Daily drawdown limit: <strong>4%</strong></li>
                  <li>Total drawdown limit: <strong>6%</strong></li>
                </ul>
              ) 
            },
            { 
              question: 'Can I trade news?', 
              answer: (
                <p>
                  As our mission is to empower African traders, and noting that a lot of African traders’ strategies focus on trading news, you are free to trade news releases during all Challenge steps and Alpha Funded Accounts!
                </p>
              ) 
            },
            { 
              question: 'Is there a time limit to pass the 1-Step Challenge?', 
              answer: (
                <p>No, there is no time limit to pass the 1-Step Challenge.</p>
              ) 
            },
            { 
              question: 'What is the minimum number of trading days required for the Challenge?', 
              answer: (
                <p>Zero days.</p>
              ) 
            },
            { 
              question: 'What is the maximum leverage I can use?', 
              answer: (
                <p><strong>1:100</strong> max leverage</p>
              ) 
            },
            { 
              question: 'What is the maximum daily profit cap during the Challenge?', 
              answer: (
                <p>You can only contribute 4% profit daily to your 8% profit target.</p>
              ) 
            },
            { 
              question: 'What happens after I succeed in all Trading Objectives?', 
              answer: (
                <p>
                Once you succeed in all Trading Objectives and your results are reviewed, you can finalise your Alpha Identity and proceed to sign the contract for your Alpha Funded Account without delay. Here are the <button onClick={() => handleScrollClick('trading-objectives-section')} className="link-button">Trading Objectives</button>.
              </p>              
              ) 
            },
            { 
              question: '1-step Alpha Funded Account',
              answer: (
                <div onClick={(e) => e.stopPropagation()}>
                  <p><strong>a. What happens when I achieve the status of an Alpha Trader?</strong></p>
                  <p>When you achieve the status of an Alpha Trader, we already know we can trust your trading skills and ability to manage risk properly. To alleviate pressure and promote confident trading, we have eliminated the Profit Target requirement.</p>
                  <p><strong>b. What are the trading objectives for my 1-step Alpha Funded Account?</strong></p>
                  <ul>
                    <li>Trading Objectives: The drawdown rules - Maximum Daily Loss @ 4% and Maximum overall Loss @ 6%.</li>
                    <li>Minimum trading days: 10 days</li>
                    <li>Maximum daily profit: 3%</li>
                    <li>Profit cap: 10%</li>
                  </ul>
                  <div onClick={(e) => e.stopPropagation()}>
                    <TradingObjectivesSection/>
                  </div>
                  <p><strong>c. Can data from my simulated trades be used?</strong></p>
                  <p>We may utilise data derived from your simulated trades to inform our own trading decisions in real financial markets.</p>
                </div>
              )              
            },
            { 
              question: 'Can I keep positions open overnight or over the weekend?', 
              answer: (
                <p>Yes, during all Challenge steps and on your Alpha Funded Account, you can keep your positions open as long as you like. There is no need to worry about closing them overnight or over the weekend.</p>
              ) 
            },
            { 
              question: 'How do I check trading hours in DXtrade?', 
              answer: (
                <ol>
                  <li>1. Go to your "Watchlist".</li>
                  <li>2. Right-click on any instrument.</li>
                  <li>3. Select "Instrument Info" to view the trading hours in your local time.</li>
                </ol>
              ) 
            },
            { 
              question: 'Which instruments can I trade?', 
              answer: (
                <p>We currently offer FX and indices within our Alpha Challenges and Accounts. As we expand through Africa, we will be expanding the instruments offered. You can see the available symbols <a href="/symbols"><strong>(here)</strong></a>.</p>
              ) 
            },
            { 
              question: 'What trading strategies am I allowed to use?', 
              answer: (
                <p>Your trading style is entirely up to you. As long as you trade legitimately (following proper risk management), match real market conditions, and avoid forbidden practices, we won't limit or restrict your strategy. This includes discretionary trading, algorithmic trading, EAs, etc. Remember, your trading style should be replicable on live accounts to produce the same results as on your Alpha Funded Account.</p>
              ) 
            },
            { 
              question: 'Are there any volume or order limits?', 
              answer: (
                <p>
                  While you don't have to use a Stop-loss (although it's generally a good safety measure), the maximum volume per order on Forex is 30 lots. Platform servers have a limit of 200 orders at a time and 2000 max positions per day, along with limitations on server messages for orders and modifications. If your EA causes excessive activity on the server, we might ask you to adjust the EA logic or parameters of your strategy.
                </p>
              ) 
            },
            { 
              question: 'Can I use trading robots (Expert Advisors – EAs)?', 
              answer: (
                <p>
                  Yes, but if you use a third-party EA, remember that other traders might be using the same EA and strategy. This could lead to exceeding the maximum capital allocation rule (R4 million max) and potentially being denied the Alpha Funded Account. If you are using a third-party EA, please contact us so we can review the software. If you are using your own EA, there is no need to contact us since you will be the only person running the strategy.
                </p>
              ) 
            },
            { 
              question: 'What are forbidden trading practices?', 
              answer: (
                <p>
                  Avoid practices that don't align with serious trading. These practices are detailed in our article <a href="https://docs.google.com/document/d/1SXOw-xvEtyQhePE5McI-hdyWM7o9yJsmOSkB3cEvoXk/edit"><strong>here</strong></a>. 
                  Repeated intentional activities or strategies across multiple accounts may lead to actions to reduce risk, including removing conflicting positions, rebalancing the account, reducing leverage, or terminating the account. Refer to the <a href="/terms-of-service.md" target="_blank" rel="noopener noreferrer"><strong>Terms & Conditions</strong></a> for more information on Forbidden Trading Practices.
                </p>
              ) 
            },
            { 
              question: 'What is "Trading according to a real market"?', 
              answer: (
                <p>
                  Trading must be fair and must not use methods that don't match how a real market works. You can use any trading strategy, as long as it doesn’t interfere with fair trading or try to exploit our Challenge Process or Alpha Funded Account in any way. Specifically, practices such as HFT (high-frequency trading) or engaging in toxic order flow, including but not limited to latency arbitrage, price arbitrage, reverse arbitrage, and 2-leg lock arbitrage, are strictly prohibited.
                </p>
              ) 
            },
            { 
              question: 'How does Alpha Funder ensure fair trading?', 
              answer: (
                <p>
                  All trading on the Alpha platform (Challenge process, Alpha Funded Account) is simulated with virtual money. However, we might use the data from Alpha Funded Accounts to trade on our own live accounts. We mimic real market conditions and expect our clients to use proper risk management. Just like in a real market, such as with a proprietary trading firm, you must follow the rules.
                </p>
              ) 
            }
          ]
        },
        {
          subTitle: '2-Step Alpha Challenge',
          faqs: [
            {
              question: 'Who is the 2-Step Challenge designed for?',
              answer: 'The 2-Step Challenge is designed for traders who prefer a more gradual verification process, focusing on both consistency and risk management over time. This challenge is ideal for traders who may need more time to demonstrate their trading skills and want an additional layer of evaluation to refine their strategies.',
            },
            {
              question: 'How does the 2-Step Challenge differ from the 1-Step Challenge?',
              answer: 'The 1-Step Challenge is designed for experienced traders who have a strong understanding of the markets and are confident in their ability to trade profitably while adhering to specific trading rules. This challenge suits traders who possess a solid trading strategy, exhibit strong risk management skills, and prefer a faster route to funding.',
            },
            {
              question: 'What is the Evaluation step?',
              answer: 'The Alpha Evaluation is the first step of our 2-step Challenge, designed to ensure you can trade responsibly and manage risk properly before you get your Alpha Funded Account.',
            },
            {
              question: 'What is the profit target in the Evaluation step?',
              answer: 'The profit target is 8%.',
            },
            {
              question: 'What are the drawdown limits in the Evaluation step?',
              answer: <ul>
                <li><strong>Daily drawdown limit:</strong> 4%</li>
                <li><strong>Total drawdown limit:</strong> 8%</li>
                </ul>
            },
            {
              question: 'What happens after I complete the Alpha Evaluation?',
              answer: 'Once you meet all the Trading Objectives of your Alpha Evaluation and your results are reviewed, you move on to the Verification phase.',
            },
            {
              question: 'What is the Verification step?',
              answer: 'The Verification step is the second and final step of the 2-step Alpha Challenge Process, testing your trading consistency and ability to trade your system or strategy profitably over time while following the rules.',
            },
            {
              question: 'What is the profit target in the Verification step?',
              answer: 'The profit target is 5%.',
            },
            {
              question: 'What are the drawdown limits in the Verification step?',
              answer: <ul>
                <li><strong>Daily drawdown limit:</strong> 4%</li>
                <li><strong>Total drawdown limit:</strong> 8%</li>
                </ul>
            },
            {
              question: 'Can I trade news?',
              answer: 'As our mission is to empower African traders, and noting that a lot of African traders’ strategies focus on trading news, you are free to trade news releases during all Challenge steps and Alpha Funded Accounts!',
            },
            {
              question: 'Is there a time limit to pass the Evaluation or Verification step?',
              answer: 'No, there is no time limit to pass either step.',
            },
            {
              question: 'What is the minimum number of trading days required?',
              answer: 'Zero days.',
            },
            {
              question: 'What is the maximum leverage I can use?',
              answer: '1:100 for both the Evaluation and Verification steps.',
            },
            {
              question: 'What happens after I complete the Alpha Verification?',
              answer: 'Once you succeed in all Trading Objectives and your results are reviewed, you can finalise your Alpha Identity to sign the contract for your Alpha Funded Account without delay.',
            },
            {
              question: '2-step Alpha Funded Account',
              answer: (
                <div>
                  <p><strong>a. What happens when I achieve the status of an Alpha Trader?</strong></p>
                  <p>When you achieve the status of an Alpha Trader, we already know we can trust your trading skills and ability to manage risk properly. To alleviate pressure and promote confident trading, we have eliminated the Profit Target requirement.</p>
                  <p><strong>b. What rules must I follow with my 2-step Alpha Funded Account?</strong></p>
                  <ul>
                    <li>Trading Objectives: The drawdown rules - Maximum Daily Loss @ 4% and Maximum overall Loss @ 6%.</li>
                    <li>Minimum trading days: 10 days</li>
                    <li>Maximum daily profit: 3%</li>
                    <li>Profit cap: 10%</li>
                  </ul>
                  <div>
                    <TradingObjectivesSection/>
                  </div>
                  <p><strong>c. Can data from my simulated trades be used?</strong></p>
                  <p>We may utilise data derived from your simulated trades to inform our own trading decisions in real financial markets.</p>
                </div>
              )
            },
            {
              question: 'Can I keep positions open overnight or over the weekend?',
              answer: 'Yes, during all Challenge steps and on your Alpha Funded Account, you can keep your positions open as long as you like. There is no need to worry about closing them overnight or over the weekend.',
            },
            {
              question: 'How do I check trading hours in DXtrade?',
              answer: (
                <div>
                  <p>To check trading hours in DXtrade:</p>
                  <ol>
                    <li>1. Go to your "Watchlist".</li>
                    <li>2. Right-click on any instrument.</li>
                    <li>3. Select "Instrument Info" to view the trading hours in your local time.</li>
                  </ol>
                </div>
              ),
            },
            {
              question: 'Which instruments can I trade?',
              answer: <p>We currently offer FX and indices within our Alpha Challenges and Accounts. 
              As we expand through Africa, we will be expanding the instruments offered. You can see the available symbols <a href="/symbols"><strong>(here)</strong></a>.
            </p>,
            },
            {
              question: 'What trading strategies am I allowed to use?',
              answer: 'Your trading style is entirely up to you. As long as you trade legitimately (following proper risk management), match real market conditions, and avoid forbidden practices, we won\'t limit or restrict your strategy. This includes discretionary trading, algorithmic trading, EAs, etc. Remember, your trading style should be replicable on live accounts to produce the same results as on your Alpha Funded Account.',
            },
            {
              question: 'Are there any volume or order limits?',
              answer: 'While you don\'t have to use a Stop-loss (although it\'s generally a good safety measure), the maximum volume per order on Forex is 30 lots. Platform servers have a limit of 200 orders at a time and 2000 max positions per day, along with limitations on server messages for orders and modifications. If your EA causes excessive activity on the server, we might ask you to adjust the EA logic or parameters of your strategy.',
            },
            {
              question: 'Can I use trading robots (Expert Advisors – EAs)?',
              answer: 'Yes, but if you use a third-party EA, remember that other traders might be using the same EA and strategy. This could lead to exceeding the maximum capital allocation rule (R4 million max) and potentially being denied the Alpha Funded Account. If you are using a third-party EA, please contact us so we can review the software. If you are using your own EA, there is no need to contact us since you will be the only person running the strategy.',
            },
            {
              question: 'What are forbidden trading practices?',
              answer: <p>
              Avoid practices that don't align with serious trading. These practices are detailed in our article <a href="https://docs.google.com/document/d/1SXOw-xvEtyQhePE5McI-hdyWM7o9yJsmOSkB3cEvoXk/edit"><strong>here</strong></a>. 
              Repeated intentional activities or strategies across multiple accounts may lead to actions to reduce risk, including removing conflicting positions, rebalancing the account, reducing leverage, or terminating the account. Refer to the <a href="/terms-of-service.md" target="_blank" rel="noopener noreferrer"><strong>Terms & Conditions</strong></a> for more information on Forbidden Trading Practices.
            </p>
            },
            {
              question: 'What is \'Trading according to a real market\'?',
              answer: 'Trading must be fair and must not use methods that don\'t match how a real market works. You can use any trading strategy, as long as it doesn’t interfere with fair trading or try to exploit our Challenge Process or Alpha Funded Account in any way. Specifically, practices such as HFT (high-frequency trading) or engaging in toxic order flow, including but not limited to latency arbitrage, price arbitrage, reverse arbitrage, and 2-leg lock arbitrage, are strictly prohibited.',
            },
            {
              question: 'How does Alpha Funder ensure fair trading?',
              answer: 'All trading on the Alpha platform (Challenge process, Alpha Funded Account) is simulated with virtual money. However, we might use the data from Alpha Funded Accounts to trade on our own live accounts. We mimic real market conditions and expect our clients to use proper risk management. Just like in a real market, such as with a proprietary trading firm, you must follow the rules.',
            },
          ],
        }
        
      ],
    },
    {
      title: 'Alpha Funded Account',
      faqs: [
        {
          question: 'What is the legal relationship between an Alpha Trader and Alpha Funder after signing the Alpha Funded Account agreement?',
          answer: 'The relationship between an Alpha Trader and Alpha Funder is based on the Alpha Funded Account Agreement that we will sign with you after you pass your Alpha Verification and the KYC/KYB process. The Alpha Funded Account Agreement is a legally binding document defining both our and your duties and rights. If you want to see a sample of the contract, please contact us at support@alphafunder.com.'
        },
        {
          question: 'What is the process of signing the contract?',
          answer: 'Once you meet the Trading Objectives of the Verification step in your relevant Challenge, the Alpha Identity section will be unlocked in your Client Area.'
        },
        {
          question: 'What do I need to do in the Alpha Identity section?',
          answer: 'In the Alpha Identity section, you can save your personal or company details and related documents, which will be verified by our compliance team.'
        },
        {
          question: 'How long do compliance checks take?',
          answer: 'The compliance checks usually take less than 1 business day for personal registrations and up to 3 business days for company registrations.'
        },
        {
          question: 'What happens after my information is verified?',
          answer: 'Once all the information is verified by our compliance team, it will be securely stored in our system. This information will be used when you start using your Alpha Funded Account(s) or conclude a new Alpha Funded Account Agreement.'
        },
        {
          question: 'What types of identities can I choose from?',
          answer: (
            <div>
              <p>There are three different types of identities to choose from:</p>
              <ul>
                <li><strong>Individual:</strong> Complete the KYC (Know Your Customer) verification process. Provide a valid government-issued ID (passport or national ID) and proof of address.</li>
                <li><strong>Entrepreneur (self-employed):</strong> Complete the KYB (Know Your Business) verification process. Provide a valid government-issued ID, proof of address, and documents confirming your registration as an entrepreneur.</li>
                <li><strong>Company:</strong> Complete the KYB (Know Your Business) verification process. Provide a valid government-issued ID, proof of address of the company representative, a document confirming the legal existence of the company, and proof of the company's address.</li>
              </ul>
              <button onClick={toggleMoreInfo} className="more-info-button">
                {showMoreInfo ? 'Less info' : 'Show detailed information'}
              </button>
              {showMoreInfo && (
                <div className="more-info-text">
                  <p><strong>Registration Types and Requirements:</strong></p>
                  <p><strong>1. Individual (Natural Person):</strong></p>
                  <p>If you want to sign the Alpha Funded Account Agreement and receive payouts as an individual, choose the Natural Person option. You will need to provide:</p>
                  <ul>
                    <li>A valid government-issued ID (passport or ID card). If your ID is in a language other than English, please use an international passport with Latin alphabet transcription.</li>
                    <li>Proof of address, such as a bank statement, account statement, lease agreement, or utility bill (no older than 3 months). This statement must contain your name, surname, your address, and issuing date.</li>
                  </ul><br></br>
                  <p><strong>2. Entrepreneur (self-employed):</strong></p>
                  <p>If you want to sign the Alpha Funded Account Agreement and receive payouts as an entrepreneur, choose the Entrepreneur option. You will need to provide:</p>
                  <ul>
                    <li>Government-issued ID (passport or ID card).</li>
                    <li>Proof of address (no older than 3 months). This statement must contain your name, surname, your address, and issuing date.</li>
                    <li>Documents confirming your registration as an entrepreneur:</li>
                    <li><br></br>
                      <strong>General Information:</strong>
                      <ul>
                        <li>1. Registration number,</li>
                        <li>2. VAT number (if applicable),</li>
                        <li>3. Registered address,</li>
                        <li>4. Country of registration, and</li>
                        <li>5. Contact information.</li><br></br>
                      </ul>
                    </li>
                    <li>
                     <strong> Representative Details:</strong>
                      <ul>
                        <li>1. Name,</li>
                        <li>2. Date of birth, and</li>
                        <li>3. Citizenship.</li>
                      </ul>
                    </li><br></br>
                    <li>
                      Ownership Structure: Information on any possible shareholder with more than 25% of company shares (UBO/ultimate beneficial owner) – relevant for entrepreneurs from some jurisdictions. In case there is no other shareholder than you, please fill in information on you as an entrepreneur.
                    </li>
                  </ul><br></br>
                  <p><strong>3. Company (legal entity):</strong></p>
                  <p>If you want to sign the Alpha Funded Account Agreement and receive payouts as a company (you have to be a director and shareholder of the concerned company), choose the Company option. You will need to provide:</p>
                  <ul>
                    <li><br></br>
                      <strong>A document confirming the legal existence of the company, such as:</strong>
                      <ul>
                        <li>1. Certificate of incorporation/registration,</li>
                        <li>2. Recent excerpt from a state company registry,</li>
                        <li>3. Certificate of incumbency,</li>
                        <li>4. Certificate of good standing,</li>
                        <li>5. Memorandum/articles of incorporation/association/registration, or</li>
                        <li>6. Other similar documents.</li>
                      </ul>
                    </li>
                    <li>
                      7. Proof of address of the company and the representative (cannot be dated more than 12 months before the date of submission and their combination must provide evidence to verify the company's name, registration number, legal type, registered address, and date of incorporation).
                      <ul>
                        <li>8. Bank statement,</li>
                        <li>9. Invoice, account statement,</li>
                        <li>10. Lease agreement,</li>
                        <li>11. Utility bill,</li>
                        <li>12. Extract from a state registry/another equal document from a state registry,</li>
                        <li>13. Certificate of incumbency, or</li>
                        <li>14. Other similar corporate documents.</li>
                      </ul>
                    </li>
                    <li>
                      15. Information about persons acting on behalf of the company in relation to the business relationship with Alpha Funder (Alpha Traders).
                      <ul>
                        <li>16. Valid ID of the company representative showing their nationality - passport or ID (Please note that we don’t accept driving licences, residence permits or other documents that don’t display nationality)</li>
                        <li>17. Authorisation to act on behalf of the company (no need to upload the authorisation in case you are the director of the company or any other official with executive powers recorded in the respective state registry).</li>
                      </ul>
                    </li>
                  </ul><br></br>
                  <p><i>Please note we cannot sign contracts with nonprofit organisations or trusts, or companies owned by them.</i></p>
                </div>
              )}
            </div>
          )
        },
        {
          question: 'What happens after I pass my KYC or KYB check?',
          answer: 'Once you pass your KYC or KYB check, the Alpha Funded Account Agreement will be unlocked for your review and signing in your Client Area – Alpha Traders – Contracts. You will be able to read through the contract and complete it using your Alpha Identity with just a few clicks.'
        },
        {
          question: 'Where can I get help if I need it?',
          answer: 'The Client Area is designed to be user-friendly and provide all necessary information, but you can always contact our customer support if you need help: support@alphafunder.io'
        },
        {
          question: 'What account size will I work with?',
          answer: 'Alpha Traders will have the same account balance as during their preceding Alpha Challenge. After becoming an Alpha Trader, you will receive a demo account with virtual funds and can earn up to 90% of the profits generated on the Alpha Funded Account.'
        },
        {
          question: 'Can I upgrade my account size?',
          answer: 'We do not offer upgrade options. You need to choose the right account size at the beginning when setting up your Alpha Challenge. However, you can start a new Alpha Challenge and, upon passing another Verification Process, we will provide you with another Alpha Funded Account. The maximum capital allocation is R4 million per trader or strategy.'
        },
        {
          question: 'Can my Alpha Funded Account balance be increased?',
          answer: <p>If you are successful and consistent over time, your Alpha Funded Account balance can be increased if you apply and are approved for our Scaling Plan <a href="https://docs.google.com/document/d/1M6-o2zAMJ-MJw22WVdDH9VRpva4pPYW-kzZd2MHy9fc/edit" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>. The scale-up can only happen during the Profit Split processing.
          We will review your track record and if approved, provide you with a scaled-up Alpha Funded Account for the upcoming trading period.</p>
          
        },
        {
          question: 'How does an Alpha Funded Account work from the technical side?',
          answer: 'After becoming an Alpha Trader, you will receive a demo account with simulated capital. An Alpha Funded Account uses real market quotes from liquidity providers but no real money. Clients trade in a demo environment, not live markets. Do not fear, you are still entitled to the fiat amount of the profit split you have made an your Alpha Funded Account!'
        },
        {
          question: 'Does Alpha Funder trade with real money?',
          answer: <p>Alpha Funder trades on its own account with real financial resources, using trading data obtained from clients' Alpha Funded Accounts. This process does not affect Alpha Traders and their simulated trading. Learn more about the execution policy & trading conditions <a href="https://docs.google.com/document/d/12rYVQT3omglTO1Um0cppXq3igxUTsIb8QC-SKX1ujSE/edit" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>.</p>

        },
        {
          question: 'How do I withdraw my profits?',
          answer: 'Even though Alpha Traders trade with simulated capital, they can earn real money if they generate profit on an Alpha Funded Account. The Profit Split is done monthly by default, with the option to request a payout after 14 calendar days from the first trade on the account.'
        },
        {
          question: 'When can I request a payout?',
          answer: 'If there is profit on the Alpha Funded Account from simulated trading, the Profit Split Day can be changed up to 3 times for each withdrawal, anytime between 14 and 60 days from the start of trading. If a trader doesn\'t change their Profit Split Day before the end of a one-month cycle, it will be set to the last day of that period.'
        },
        {
          question: 'How long does it take to process payouts?',
          answer: 'Payouts are processed within 3-5 business days upon confirming the invoice. We are working on faster payouts. You can receive your profits via regular bank transfer, instant EFT (South African, Ghanaian, and Kenyan clients only), or cryptocurrency (all clients). No commissions are charged for withdrawals.'
        },
        {
          question: 'Is there a minimum profit requirement for a Profit Split?',
          answer: <p>You don't need to make a minimum profit to receive a Profit Split, only enough to cover the transaction fees. You are entitled to withdraw 85% of the profit for a 2-step account, and 70% for a 1-step account. If you apply for our <a href="https://docs.google.com/document/d/1M6-o2zAMJ-MJw22WVdDH9VRpva4pPYW-kzZd2MHy9fc/edit" target="_blank" rel="noopener noreferrer"><strong>Scaling Plan</strong></a> and are approved, we will increase the balance to a 90% payout.</p>

        },
        {
          question: 'Can I keep my Profit Split in the account?',
          answer: <p>You can choose to keep your Profit Split in the account to grow your balance and build up your drawdown buffer. However, Alpha Funder’s 15% split for 2-step accounts and 30% split for 1-step accounts (10% with the <a href="https://docs.google.com/document/d/1M6-o2zAMJ-MJw22WVdDH9VRpva4pPYW-kzZd2MHy9fc/edit" target="_blank" rel="noopener noreferrer"><strong>Scale-up</strong></a> plan) will always be deducted.
          Due to imposed fees for payout transfers, there is a minimum closed profit requirement of at least R200 for bank wire and R500 for crypto payouts, to cover the cost of the transaction.</p>
          
        },
        {
          question: 'Do I have to tax my income?',
          answer: 'Please keep in mind that you are solely responsible for paying any taxes, levies, or fees related to your Alpha Funded Account Agreement according to the applicable laws and regulations. Alpha Funder is not able or authorised to provide any tax advice or instructions.'
        }
      ],
    },
    {
      title: 'Platforms / Infrastructure',
      faqs: [
        {
          question: 'What are the account details and where can I find them?',
          answer: 'You can see account details directly on the trading platform. To view instrument details in DXTrade, click [here](https://link-to-video-tutorial) to watch our tutorial.'
        },
        {
          question: 'What should I know about offers and conditions?',
          answer: <p>Make sure you know the terms and conditions for each instrument you trade. Locate these <a href="https://docs.google.com/document/d/1_WpdTLLJbCGrl4oVLpfUECLdT5R0dlQk5QGj5gcG9XU/edit" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>.</p>

        },
        {
          question: 'What is the platform server time for DXTrade?',
          answer: 'DXTrade operates on GMT+2.'
        },
        {
          question: 'What leverage does Alpha Funder offer?',
          answer: 'We offer leverage up to 1:100 for Forex, which cannot be increased. However, you can request to lower the leverage. Leverage applies only to the simulated capital you trade with at all stages.'
        },
        {
          question: 'Where can I find additional information on symbols and trading hours?',
          answer: 
            <ul>
              <li>View symbol specifications and trading hours on the <a href="https://dx.alphafunder.io/"><strong>Alpha Funder's Trading Platform</strong></a> - Watchlist. Right-click the symbol of your choice to view additional information and trading hours.</li>
              <li>Check planned platform maintenance and other important updates on the <a href="https://dx.trade/news/release-notes/"><strong>Trading Updates site</strong></a>.</li>
            </ul>
          
        },
        {
          question: 'What services does Alpha Funder provide?',
          answer: 'Alpha Funder offers simulated trading and educational tools for traders. Our goal is to provide trading conditions that are as close to the real market as possible during the Alpha Challenge and on your Alpha Funded Account.'
        },
        {
          question: 'Is there any difference in execution for different clients?',
          answer: 'No, all execution settings are the same for all clients. However, if we deem your trading style toxic or unrealistic, our risk team will evaluate the situation and might take action by mimicking more realistic market conditions.'
        },
        {
          question: 'Can I experience any execution delays?',
          answer: <p>Yes, execution delays are a normal part of real market trading and occur on all trading platforms and servers. To simulate this, Alpha Funder applies a delay of up to 1400 ms. Factors such as your distance from the server, internet connection, and latency also contribute to execution delays. These delays are applied equally to all clients on a particular platform. 
            You can check the execution speed in <a href="https://dx.alphafunder.io/" target="_blank" rel="noopener noreferrer"><strong>Alpha Funder’s Trading Platform</strong></a> - ‘Trading Journal’.</p>

        },
        {
          question: 'Why does Alpha charge a commission on some asset classes?',
          answer: 'To emulate real financial markets and follow market standards, we include simulated commissions when executing trades. This helps create realistic trading conditions to test your trading skills accurately. We offer one of the lowest and most competitive commission structures in the industry.'
        },
        {
          question: 'Does Alpha Funder apply hidden markups or added slippage?',
          answer: 'No, we do not add hidden markups or extra slippage. Trades are executed according to the prices shown on the trading platform. Any slippage is due to the technical delay mentioned above and can be positive or negative without any preference.'
        },
        {
          question: 'How does copying trades affect Alpha Traders?',
          answer: 'When Alpha Funder replicates a client’s trades, the replication happens in a separate environment. This means it does not interfere with the client’s account. The trading conditions on the client’s platform remain unchanged, whether their trades are being copied or not.'
        }
      ]
    },
    {
      title: 'Orders / Billings',
      faqs: [
        {
          question: 'How do I apply for an Alpha Challenge?',
          answer: 'After signing up to Alpha Funder, you can apply for an Alpha Challenge by configuring your account parameters.'
        },
        {
          question: 'How do I complete my application for the Alpha Challenge?',
          answer: 'After submitting the order form, you will be redirected to the payment page and receive a confirmation email.'
        },
        {
          question: 'What payment methods are available for the Alpha Challenge?',
          answer: <p>
            <i>You can pay for the Alpha Challenge using:</i><br></br>
            <br></br>
            <ul>
              <li><strong>Card Payment</strong></li>
              <li><strong>Bank transfer</strong></li>
              <ul>
                <li>- All clients can pay by standard bank transfer if they wish - use ZAP EFT</li>
              </ul>
              <li><strong>PayPal Wallet</strong></li>
              <li><strong>Instant EFT from the following banks (South African, Ghanaian, and Kenyan clients only):</strong></li>
              <ul>
                <li> CAPITEC (user ZAP EFT)</li>
                <li> FNB (use Ozow)</li>
                <li> ABSA (use Ozow)</li>
                <li> STANDARD BANK (use Ozow)</li>
                <li> DISCOVERY (use Ozow)</li>
                <li> TYME BANK (use Ozow)</li>
                <li> NEDBANK (use Ozow)</li>
                <li> BIDVEST (use Ozow)</li>
                <li> INVESTEC (use Ozow)</li>
                <li> AFRICAN BANK (use Ozow)</li>
              </ul>
            </ul>
            </p>
        },
        {
          question: 'Which Payment Providers do you offer',
          answer: <p>
            <ul>
              <li>PayPayl (card & wallet)</li>
              <li>Ozow (instant EFT)</li>
              <li>Zap EFT (Capitec Pay, instant EFT, and standard bank transfer)</li>
            </ul>
            </p>
        },
        {
          question: 'Are there any country restrictions for payments and payouts?',
          answer: `
            Yes, due to regulatory reasons, payments and payouts are strictly prohibited from the following countries: 
            Afghanistan, Antarctica, Antigua and Barbuda, the Republic of Belarus, Belize, Bhutan, Bouvet Island, Burundi, Canada, Cape Verde, Central African Republic, Chad, Cook Islands, Comoros, Cuba, Djibouti, Dominica, Equatorial Guinea, Eritrea, Fiji, Grenada, Guinea, Guinea-Bissau, Holy See (Vatican City State), India, the Republic of Indonesia, Iraq, Kazakhstan, Kiribati, Kosovo, Kyrgyzstan, Liberia, Malawi, Mali, Mauritania, Marshall Islands, Micronesia, Nauru, Niger, Niue, Papua New Guinea, the Russian Federation, Saint Barthélemy, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino, Sao Tome and Principe, Seychelles, Solomon Islands, Somalia, South Sudan, Sudan, Suriname, Tajikistan, Timor-Leste, Tokelau, Tonga, Turkmenistan, Tuvalu, Ukraine, United States of America, Uzbekistan, Vanuatu, Venezuela, Western Sahara.
          `
        },
        {
          question: 'Do we charge any other fees? Are the fees recurrent?',
          answer: 'No, we don’t charge any additional or hidden fees. The one-time fee for the Alpha Challenge covers everything, including Identity Verification. There are no recurring fees.'
        },
        {
          question: 'Is the Challenge fee reimbursed?',
          answer: 'Yes, your fee will be reimbursed when you successfully pass the Alpha Challenge, identity and trades verified, and once you execute your first Profit Split on your Alpha Funded Account.'
        },
        {
          question: 'I paid for my Alpha Challenge, when will I get my challenge account?',
          answer: 'We start processing your Alpha Challenge account as soon as we receive your payment. Usually, this takes just a few hours. In rare cases, it might take up to 24 hours.'
        },
        {
          question: 'How will I receive my account details?',
          answer: <p>Once we create your trading account, you will receive an email notification. 
            Your login credentials for the trading platform will be in your Client Area <a href="https://client.alphafunder.io/sign-in" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>. Please check your email, including spam/junk folders.</p>

        },
        {
          question: 'How should I safeguard my credentials?',
          answer: 'Make sure to keep your login credentials safe and do not share them with anyone else. We are not responsible if someone else accesses your account.'
        },
        {
          question: 'Why is there a fee for the Alpha Challenge?',
          answer: 'The fee for the Alpha Challenge covers the costs related to designing, developing, and operating the Alpha Funder platform. This includes the technical infrastructure behind our educational services and applications.'
        },
        {
          question: 'How is the fee amount determined?',
          answer: 'The fee amount depends on the selected Alpha Challenge and the size of the simulated account balance.'
        },
        {
          question: 'What additional resources do I get after paying the fee?',
          answer: 'After paying the fee, you get access to the Alpha Challenge and the simulated trading environment. You also gain access to your account dashboard displaying trading metrics, enhancing your learning experience.'
        },
        {
          question: 'Can I lose more than the fee amount?',
          answer: 'No, you cannot lose more than this fee. Additionally, the fee is refunded with your first Profit Split from an Alpha Funded Account after you pass the Verification process.'
        },
        {
          question: 'How many accounts can I have?',
          answer: 'You can have as many accounts as you want during the Alpha Evaluation and Verification steps (i.e. you can take 10 challenges at a time if you desire to). However, once you become an Alpha Trader, there is a maximum capital limit.'
        },
        {
          question: 'What is the maximum capital limit?',
          answer: 'The maximum capital allocation per trader or strategy is R4 million. These limits help Alpha Funder manage risk and diversify.'
        },
        {
          question: 'Can I create multiple registrations?',
          answer: 'No, do not create multiple accounts with different registrations. If we find identical trading strategies exceeding R4 million in total across multiple accounts, we may suspend those accounts.'
        },
        {
          question: 'Can I combine accounts?',
          answer: 'For the time being, you cannot merge accounts.'
        }
      ]
    },
  ];

    // Fuse.js options
    const fuseOptions = {
      keys: [
        'title',
        'faqs.question',
        'faqs.answer',
        'subDropdowns.subTitle',
        'subDropdowns.faqs.question',
        'subDropdowns.faqs.answer'
      ],
      threshold: 0.3, // Adjust this value to control the fuzziness of the search
    };

    const fuse = new Fuse(faqData, fuseOptions);

    // Use Fuse.js for filtering
  const filteredFAQs = searchQuery ? fuse.search(searchQuery).map(result => result.item) : faqData;



  const handleCategoryClick = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-search-bar">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="faq-buttons">
        {filteredFAQs.map((category, index) => (
          <button
            key={index}
            className={`faq-button ${activeCategory === index ? 'active' : ''}`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="faq-container">
        {activeCategory !== null && filteredFAQs[activeCategory] ? (
          filteredFAQs[activeCategory].subDropdowns && filteredFAQs[activeCategory].subDropdowns.length > 0 ? (
            <div className="faq-category-content show">
              {filteredFAQs[activeCategory].subDropdowns.map((subDropdown, index) => (
                <SubDropdown key={index} subDropdown={subDropdown} />
              ))}
            </div>
          ) : (
            <div className="faq-category-content show">
              {filteredFAQs[activeCategory].faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          )
        ) : (
          <div className="faq-category-content">
            <p>No FAQs found.</p>
          </div>
        )}
      </div>
      {/* Become Funded Section */}
      <BecomeFundedSection />
      {/* Join Discord Section */}
      <JoinDiscordSection />
    </section>
  );
};

export default FAQ;