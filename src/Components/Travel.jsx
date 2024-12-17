import React from 'react';

const Travel = () => {
    return (
        <div className='flex flex-col  justify-center items-center w-full max-w-[1140px] h-fit xsm:mt-6 md:mt-18 mx-auto px-4'>
            <div className='flex flex-col md:flex-row mt-5 w-full'>
                <div className='md:w-1/2'>
                    <h1 className='text-black font-bold text-xl leading-5'>
                        India's Largest Intercity and Local Vehicle Services
                    </h1>
                    <p className='mt-2 font-normal text-sm leading-5 mr-5'>
                        We are <span className='font-semibold text-black'>Continental Car Rentals</span>, an online cab booking aggregator,
                        providing customers with reliable and premium Intercity and Local car
                        rental services. Over the last decade, we are uniquely placed as the
                        largest chauffeur-driven car rental company in India in terms of
                        geographical reach.
                    </p>
                </div>
                <div className='md:w-1/2 mt-5 md:mt-0'>
                    <img className="w-full h-auto" src="/public/Images/Seat.png" alt="Car Rental" />
                </div>
            </div>

            <div className='w-full mt-2'>
                <h2 className='text-black font-bold text-lg leading-5'>
                    Exploring India, one road trip at a time
                </h2>
                <p className='mt-2 font-normal text-sm leading-5'>
                    To us, a road trip is one of the most exhilarating ways to travel the length and breadth of India. There's always something to look at, something to explore and to experience.
                    Because we love travelling by road so much, we've been striving to make sure you have a great experience too. We wanted more of you to go on a road trip, and more of you to
                    experience the same joys of travel that we do. Instead of driving, why not sit back and take our <span className='font-semibold text-sm leading-5'>chauffeur-driven cabs</span> on your next vacation? We believe that the time you spend
                    on your vacation should be entirely yours. So now, we are in <span className='text-[#00AB8E]'>Multiple cities</span>
                </p>
                <p className='mt-2'>
                    We love that you're free to stop to breathe in clean air, learn about cultures and taste local food when you travel by cabs. We love that these wholesome experiences make
                    travelling better and enrich our lives. We live for the surprises we find on road trips.
                </p>
                <p className='mt-2'>
                    No city is too big or too small. We know travellers and wanderers like us are everywhere. You live near Khajuraho, you live near Aleppey, and you live near Alibag and near
                    Tranquebar. We want you to visit them all. Pack your bags every weekend and explore everything there is to see around you.
                </p>
                <p className='mt-2'>
                    To make planning your vacation easier, you can book a cab with ease on our website, or call us on 9045450000 if you'd like to discuss your itinerary with our executives in detail. When you book an outstation cab
                    with us, we'll send you a travel kit and help you plan your itinerary. We also have a handy
                    cab booking app that will further reduce the hassles of booking a trip with us. Our expert drivers will guide you through some of the best experiences India has to offer. From the time you make a booking with us, to the time you get back home, we'll make sure you have a great road trip.
                </p>
            </div>

            <div className='w-full mt-10'>
                <h2 className='text-black font-bold text-lg leading-5'>
                    No matter where you travel - we've got a cab for you
                </h2>
                <p className='mt-2'>
                    Planning a weekend getaway? Our outstation cab services will help you explore the best destinations, visit all the must-see places and taste the best local food. Did you just land
                    at an airport or railway station closest to your destination? No problem! You can use our airport taxi, the transit pick-up service to cover the last mile. We'll get you to your
                    destination and show you some of the best sights along the way. Planning on traveling home for a family get-together? Try our newly introduced one-way cab services - no matter
                    where you live, get dropped to your hometown by paying only one-side fare. Decided to take a personal day and spend the whole day exploring your city? Our local taxi packages
                    will help you explore the best places to eat and drink at, some of the city's majestic monuments, greenest parks, and oldest temples. You'll never have to worry about an empty
                    travel itinerary again. Are you an offbeat traveler? Do you just hit the road and decide to take it from there? We offer one-way drops on several routes, in case you only want to be
                    dropped to a destination and don't want to look back.
                </p>
                <p className='mt-2'>
                    Trust us when we say: <span className='font-semibold'>Travel begins with Continental.</span>
                </p>
            </div>
        </div>
    );
};

export default Travel;

