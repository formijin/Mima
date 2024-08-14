import { useState } from 'react';
import Check from '../../assets/images/check.svg';
import './Pricing.css';
import Button from '../common/Button';
import pricingData from '../../data/pricingData.json'; // Import the JSON data

const Pricing = ({ onBillingChange }) => {
    const [selectedBilling, setSelectedBilling] = useState('annual');

    const handleBillingChange = (billingOption) => {
        setSelectedBilling(billingOption);
        onBillingChange(billingOption); // Pass the selected billing option to the parent component
    };

    return (
        <section className="pricing">
            <div className="container">
                <div className="text-area">
                    <span>Mima Subscription</span>
                    <h3>Choose the best plan for your Business</h3>
                    <div className="billing-selector">
                        {['monthly', 'quarterly', 'biannual', 'annual'].map((option) => (
                            <button
                                key={option}
                                className={`billing-option ${selectedBilling === option ? 'selected' : ''}`}
                                onClick={() => handleBillingChange(option)}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)} billing
                            </button>
                        ))}
                    </div>
                </div>
                <div className="pricing-card-list">
                    {pricingData.map((plan) => (
                        <div 
                            className={`pricing-card ${plan.isRecommended ? 'recommended' : ''}`} 
                            key={plan.name}>
                            <div className="content">
                                <div className="title">
                                    <h5 className="pricing-plan">{plan.name}</h5>
                                    <div className="text-area">
                                        <p className="price">₦ {plan.price[selectedBilling]}</p>
                                        <p className="description">{plan.description}</p>
                                    </div>
                                </div>
                                <div className="feature-list">
                                    {plan.features.map((feature, index) => (
                                        <div className="feature" key={index}>
                                            <img src={Check} alt="Check" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button variant='fill' text='Choose Plan' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
