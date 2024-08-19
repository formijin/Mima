import { useState } from 'react';
import Check from '../../../assets/images/check.svg';
import styles from '../../../assets/styles/Pricing/Pricing.module.scss'
import Button from '../../common/Button';
import pricingData from '../../../data/pricingData.json'; // Import the JSON data

const Pricing = () => {
    const [selectedBilling, setSelectedBilling] = useState('annual');

    const handleBillingChange = (billingOption) => {
        setSelectedBilling(billingOption);
    };

    return (
        <section className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.textArea}>
                    <span>Mima Subscription</span>
                    <h3>Choose the best plan for your Business</h3>
                    <div className={styles.billingSelector}>
                        {['monthly', 'quarterly', 'biannual', 'annual'].map((option) => (
                            <button
                                key={option}
                                className={`${styles.billingOption} ${selectedBilling === option ? styles.selected : ''}`}
                                onClick={() => handleBillingChange(option)}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)} billing
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.pricingCardList}>
                    {pricingData.map((plan) => (
                        <div
                            className={`${styles.pricingCard} ${plan.isRecommended ? styles.recommended : ''}`}
                            key={plan.name}>
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h5 className={styles.pricingPlan}>{plan.name}</h5>
                                    <div className={styles.textArea}>
                                        <p className={styles.price}>₦ {plan.price[selectedBilling]}</p>
                                        <p className={styles.description}>{plan.description}</p>
                                    </div>
                                </div>
                                <div className={styles.featureList}>
                                    {plan.features.map((feature, index) => (
                                        <div className={styles.feature} key={index}>
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
