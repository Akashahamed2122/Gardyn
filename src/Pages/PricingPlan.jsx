import React from 'react';

const plans = [
  {
    title: 'Standard Plan',
    price: '$19',
    features: [
      'Mowing and edging',
      'Seasonal pruning of shrubs and trees',
      'Mulching of garden beds',
      'Fertilization (lawn and plants)',
      'Weed control',
      'Irrigation system checks and adjustments',
    ],
  },
  {
    title: 'Premium Plan',
    price: '$250',
    features: [
      'All services from the Standard Plan',
      'Seasonal flower planting and bed re-design',
      'Plant health care (pest and disease control)',
      'Soil testing and amendments',
      'Aeration and dethatching of lawns',
      'Customized garden care based on client preferences',
    ],
    highlighted: true,
  },
  {
    title: 'Deluxe Plan',
    price: '$400',
    features: [
      'All services from the Premium Plan',
      'Weekly garden visits for ongoing care',
      'Detailed hand-weeding and deadheading',
      'Organic fertilization and pest control options',
      'Custom seasonal decor (holiday lighting, planters)',
      'Personalized garden consultation each season',
    ],
  },
];

const PricingPlan = () => {
  return (
    <section className="bg-base-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <span className="badge badge-outline mb-2">GARDEN AND LANDSCAPING</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Pricing Plan</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-6 border ${
              plan.highlighted
                ? 'bg-[url("https://images.unsplash.com/photo-1524593410176-bfbd986a61f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60")] bg-cover bg-center text-white'
                : 'bg-base-200'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price} <span className="text-sm font-medium">/visit</span></p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-success">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-primary w-full">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlan;
