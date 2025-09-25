import React from 'react';
import { Star } from 'lucide-react';
interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
  image?: string;
  initial?: string;
  initialBgColor?: string;
  date: string;
  isNew?: boolean;
  localGuide?: boolean;
  reviewCount?: number;
  photoCount?: number;
  price?: string;
  services?: string[];
}
function AvatarInitial({
  initial,
  bgColor = '#003278'
}: {
  initial: string;
  bgColor?: string;
}) {
  return <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg" style={{
    backgroundColor: bgColor
  }}>
      {initial}
    </div>;
}
function TestimonialCard({
  name,
  rating,
  text,
  image,
  initial,
  initialBgColor,
  date,
  isNew,
  localGuide,
  reviewCount,
  photoCount,
  price,
  services
}: TestimonialProps) {
  return <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        {image ? <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" /> : initial ? <AvatarInitial initial={initial} bgColor={initialBgColor} /> : null}
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <div className="flex flex-wrap items-center text-sm text-gray-500">
            {localGuide && <span className="mr-2">Local Guide</span>}
            {reviewCount && <span className="mr-2">{reviewCount} reviews</span>}
            {photoCount && <span>{photoCount} photos</span>}
          </div>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-300'} />)}
        </div>
        <span className="text-gray-500 text-sm">{date}</span>
        {isNew && <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
            NEW
          </span>}
      </div>
      <p className="text-gray-600 mb-6">{text}</p>
      {services && services.length > 0 && <div className="border-t pt-4 mt-4">
          <div>
            <span className="font-semibold text-gray-700">Services: </span>
            <span className="text-gray-600">{services.join(', ')}</span>
          </div>
        </div>}
      <div className="flex items-center mt-4">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 mr-2" />
        <span className="text-xs text-gray-500">Posted on Google</span>
      </div>
    </div>;
}
export function Testimonials() {
  const testimonials = [{
    name: "Daniel O'Loughlin",
    rating: 5,
    text: "I never really found a barber I enjoyed going to until I found Samuel's. Now, I love going there. They're all excellent and very kind and welcoming. AND they're very good with my young children which is obviously a necessity. Would highly recommend to anyone.",
    image: "/pasted-image.png",
    date: 'a week ago',
    isNew: true,
    reviewCount: 3,
    price: '30-40',
    services: ['Haircut']
  }, {
    name: 'Shane Latorella',
    rating: 5,
    text: 'Words cant express how impressive this place is! First experience a few months ago, met the crew. These guys are awesome!! Santiago has cut my kids hair now twice to literal perfection. Patient, kind and professional. You want to look good, this is the place to come for your cuts!',
    image: "/pasted-image.png",
    date: 'a month ago',
    localGuide: true,
    reviewCount: 11,
    photoCount: 3,
    price: '30-40',
    services: ['Haircut', 'Beard trim']
  }, {
    name: 'John Piantedosi',
    rating: 5,
    text: "The best barber shop around. I initially saw the great reviews online and thought I would swing by after work and it didn't disappoint. Family owned and operated. The owner and his son were both super friendly and I got a great haircut. Will be sure to make this my new go-to!",
    initial: 'J',
    initialBgColor: '#673AB7',
    date: '3 weeks ago',
    isNew: true,
    reviewCount: 5,
    price: '40-50',
    services: ['Haircut']
  }];
  return <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            See what our customers are saying
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied clients who trust us with their style
            and confidence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-[#FBBC05] fill-[#FBBC05]" />)}
              </div>
            </div>
            <p className="text-gray-700 mt-2 mb-6">
              Enjoyed your experience? We'd love to hear about it!
            </p>
          </div>
          <a href="https://g.page/r/CYI-O-f20rRUEBM/review" target="_blank" rel="noopener noreferrer" className="bg-[#4285F4] text-white hover:bg-[#3367D6] py-3 px-8 rounded-full font-semibold inline-flex items-center justify-center transition-colors duration-300 text-lg mb-4">
            Review us on Google
          </a>
          <div className="mt-4 flex justify-center">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
          </div>
        </div>
      </div>
    </section>;
}